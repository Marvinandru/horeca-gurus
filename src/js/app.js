/**
 * MAHALE Distributors Supply Platform Controller
 * Manages reactive state, digital ordering, dynamic daily market pricing,
 * Nairobi restaurant leads directory, and B2B Accounts CRM with Zero-Credit enforcement.
 */

import {
  KENYA_COMMODITY_RATES,
  SOURCING_CALENDAR,
  getDailyMarketRates,
  getNairobiDate
} from "../data/market_data.js";
import {
  RESTAURANT_LEADS,
  INITIAL_CRM_ACCOUNTS,
  INITIAL_CALL_LOGS,
  SALES_SCRIPTS
} from "../data/leads_data.js";
import { DEFAULT_INVENTORY } from "../data/default_inventory.js";

// --- PERSISTENT STATE MANAGEMENT ---
class Store {
  constructor() {
    this.inventory = this.loadInventory();
    this.leads = this.loadState("mahale_leads_v1", RESTAURANT_LEADS);
    this.crmAccounts = this.loadState("mahale_crm_accounts_v1", INITIAL_CRM_ACCOUNTS);
    this.crmCallLogs = this.loadState("mahale_crm_logs_v1", INITIAL_CALL_LOGS);
    this.cart = this.loadState("mahale_cart_v1", {});

    this.activeTab = "storefront";
    this.categoryFilter = "all";
    this.searchQuery = "";

    this.leadsRegionFilter = "all";
    this.leadsAreaFilter = "all";
    this.leadsStatusFilter = "all";

    this.crmRegionFilter = "all";
    this.crmStageFilter = "all";
    this.crmAreaFilter = "all";
    this.crmSearchQuery = "";
  }

  loadInventory() {
    try {
      const saved = localStorage.getItem("mahale_inventory_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        const defaultMap = new Map(DEFAULT_INVENTORY.map((item) => [item.id, item]));
        return parsed.map((item) => {
          if (defaultMap.has(item.id)) {
            const def = defaultMap.get(item.id);
            return { ...item, image: def.image, name: def.name, category: def.category };
          }
          return item;
        });
      }
      localStorage.setItem("mahale_inventory_v1", JSON.stringify(DEFAULT_INVENTORY));
      return DEFAULT_INVENTORY;
    } catch (e) {
      console.warn("Failed to read inventory from storage:", e);
      return DEFAULT_INVENTORY;
    }
  }

  loadState(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch (e) {
      console.warn(`Failed to read ${key} from storage:`, e);
      return fallback;
    }
  }

  saveState(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Failed to persist ${key}:`, e);
    }
  }

  updateInventory(newInventory) {
    this.inventory = newInventory;
    this.saveState("mahale_inventory_v1", this.inventory);
  }

  updateLeads(newLeads) {
    this.leads = newLeads;
    this.saveState("mahale_leads_v1", this.leads);
  }

  updateCRMAccounts(newAccounts) {
    this.crmAccounts = newAccounts;
    this.saveState("mahale_crm_accounts_v1", this.crmAccounts);
  }

  updateCRMCallLogs(newLogs) {
    this.crmCallLogs = newLogs;
    this.saveState("mahale_crm_logs_v1", this.crmCallLogs);
  }

  updateCart(newCart) {
    this.cart = newCart;
    this.saveState("mahale_cart_v1", this.cart);
  }
}

export const store = new Store();

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupEventListeners();
  renderAll();
});

function setupNavigation() {
  const tabs = document.querySelectorAll(".nav-tab-btn");
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      const targetTab = btn.dataset.tab;
      store.activeTab = targetTab;
      showTabSection(targetTab);
    });
  });
}

function showTabSection(tabName) {
  document.querySelectorAll(".tab-section").forEach((sec) => {
    sec.style.display = "none";
  });
  const activeSection = document.getElementById(`section-${tabName}`);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

function setupEventListeners() {
  // Storefront Filter Pills
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      e.target.classList.add("active");
      store.categoryFilter = e.target.dataset.category;
      renderStorefront();
    });
  });

  // Storefront Search Input
  const searchInput = document.getElementById("storefront-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      store.searchQuery = e.target.value.toLowerCase().trim();
      renderStorefront();
    });
  }

  // Cart Button
  const cartBtn = document.getElementById("header-cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", openCartModal);
  }

  // Close Cart Modal
  const closeCartBtn = document.getElementById("close-cart-modal");
  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCartModal);
  }

  // Market Ticker Dropdown Accordion Toggle
  const tickerToggle = document.getElementById("market-ticker-toggle-btn");
  const tickerContent = document.getElementById("market-ticker-dropdown-content");
  if (tickerToggle && tickerContent) {
    tickerToggle.addEventListener("click", () => {
      const isHidden = tickerContent.style.display === "none";
      tickerContent.style.display = isHidden ? "block" : "none";
      const icon = document.getElementById("ticker-toggle-icon");
      if (icon) icon.textContent = isHidden ? "▲" : "▼";
    });
  }

  // Sync Live Rates Button
  const syncRatesBtn = document.getElementById("sync-live-rates-btn");
  if (syncRatesBtn) {
    syncRatesBtn.addEventListener("click", () => {
      renderMarketRates();
      showToast(`Refreshed live Kenya terminal benchmark rates for ${getNairobiDate()}!`);
    });
  }

  // Leads Filter Triggers
  const leadsRegionSelect = document.getElementById("leads-region-filter");
  if (leadsRegionSelect) {
    leadsRegionSelect.addEventListener("change", (e) => {
      store.leadsRegionFilter = e.target.value;
      renderLeadsCRM();
    });
  }
  const leadsAreaSelect = document.getElementById("leads-area-filter");
  if (leadsAreaSelect) {
    leadsAreaSelect.addEventListener("change", (e) => {
      store.leadsAreaFilter = e.target.value;
      renderLeadsCRM();
    });
  }
  const leadsStatusSelect = document.getElementById("leads-status-filter");
  if (leadsStatusSelect) {
    leadsStatusSelect.addEventListener("change", (e) => {
      store.leadsStatusFilter = e.target.value;
      renderLeadsCRM();
    });
  }

  // Add Lead Modal Triggers
  const openAddLeadBtn = document.getElementById("open-add-lead-btn");
  if (openAddLeadBtn) {
    openAddLeadBtn.addEventListener("click", () => {
      document.getElementById("add-lead-modal").classList.add("open");
    });
  }
  const closeAddLeadBtn = document.getElementById("close-add-lead-modal");
  if (closeAddLeadBtn) {
    closeAddLeadBtn.addEventListener("click", () => {
      document.getElementById("add-lead-modal").classList.remove("open");
    });
  }

  // Add Lead Form Submission
  const addLeadForm = document.getElementById("add-lead-form");
  if (addLeadForm) {
    addLeadForm.addEventListener("submit", handleAddLead);
  }

  // Script Modal Close
  const closeScriptModal = document.getElementById("close-script-modal");
  if (closeScriptModal) {
    closeScriptModal.addEventListener("click", () => {
      document.getElementById("script-modal").classList.remove("open");
    });
  }

  // Margin Calculator Inputs
  const calcCommodity = document.getElementById("calc-commodity");
  const calcFarmGate = document.getElementById("calc-farm-gate");
  const calcTransport = document.getElementById("calc-transport");
  const calcSalePrice = document.getElementById("calc-sale-price");
  const calcVolume = document.getElementById("calc-volume");

  if (calcCommodity) {
    calcCommodity.addEventListener("change", updateCalculatorDefaults);
  }
  [calcFarmGate, calcTransport, calcSalePrice, calcVolume].forEach((el) => {
    if (el) el.addEventListener("input", computeMargin);
  });

  // ==========================================
  // CRM MODAL & FILTER EVENT LISTENERS
  // ==========================================
  const openLogCallBtn = document.getElementById("open-log-call-btn");
  if (openLogCallBtn) {
    openLogCallBtn.addEventListener("click", () => window.openLogCallModal());
  }
  const closeLogCallBtn = document.getElementById("close-log-call-modal");
  if (closeLogCallBtn) {
    closeLogCallBtn.addEventListener("click", () => {
      document.getElementById("log-call-modal")?.classList.remove("open");
    });
  }
  const logCallForm = document.getElementById("log-call-form");
  if (logCallForm) {
    logCallForm.addEventListener("submit", handleLogCallSubmit);
  }

  const openUpdatePOBtn = document.getElementById("open-update-po-btn");
  if (openUpdatePOBtn) {
    openUpdatePOBtn.addEventListener("click", () => window.openUpdatePOModal());
  }
  const closeUpdatePOBtn = document.getElementById("close-update-po-modal");
  if (closeUpdatePOBtn) {
    closeUpdatePOBtn.addEventListener("click", () => {
      document.getElementById("update-po-modal")?.classList.remove("open");
    });
  }
  const updatePOForm = document.getElementById("update-po-form");
  if (updatePOForm) {
    updatePOForm.addEventListener("submit", handleUpdatePOSubmit);
  }

  const crmRegionSelect = document.getElementById("crm-filter-region");
  if (crmRegionSelect) {
    crmRegionSelect.addEventListener("change", (e) => {
      store.crmRegionFilter = e.target.value;
      renderCRM();
    });
  }
  const crmStageSelect = document.getElementById("crm-filter-stage");
  if (crmStageSelect) {
    crmStageSelect.addEventListener("change", (e) => {
      store.crmStageFilter = e.target.value;
      renderCRM();
    });
  }
  const crmAreaSelect = document.getElementById("crm-filter-area");
  if (crmAreaSelect) {
    crmAreaSelect.addEventListener("change", (e) => {
      store.crmAreaFilter = e.target.value;
      renderCRM();
    });
  }
  const crmSearchInput = document.getElementById("crm-search-input");
  if (crmSearchInput) {
    crmSearchInput.addEventListener("input", (e) => {
      store.crmSearchQuery = e.target.value.toLowerCase().trim();
      renderCRM();
    });
  }

  const exportCrmCsvBtn = document.getElementById("export-crm-csv-btn");
  if (exportCrmCsvBtn) {
    exportCrmCsvBtn.addEventListener("click", exportCRMToCSV);
  }

  // Checkout Actions
  const dispatchWhatsappBtn = document.getElementById("dispatch-whatsapp-order-btn");
  if (dispatchWhatsappBtn) {
    dispatchWhatsappBtn.addEventListener("click", dispatchOrderViaWhatsApp);
  }
}

// --- RENDER ALL SECTIONS ---
export function renderAll() {
  renderStorefront();
  renderMarketRates();
  renderMarginCalculator();
  renderLeadsCRM();
  renderCRM();
  updateCartBadge();
}

// =========================================================================
// 1. STOREFRONT CATALOG
// =========================================================================
function renderStorefront() {
  const container = document.getElementById("product-grid-container");
  if (!container) return;

  const filtered = store.inventory.filter((item) => {
    const matchesCat = store.categoryFilter === "all" || item.category === store.categoryFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(store.searchQuery) ||
      item.origin.toLowerCase().includes(store.searchQuery) ||
      item.description.toLowerCase().includes(store.searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;">
        <h3 style="color: #475569; margin-bottom: 8px; font-weight: 700; font-size: 1.1rem;">No produce, meat or seafood items match your criteria</h3>
        <p style="color: #94a3b8; font-size: 0.9rem;">Try selecting another division or clearing your search query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((item) => {
      let catClass = "produce";
      if (item.category.includes("Meat")) catClass = "meat";
      if (item.category.includes("Fish") || item.category.includes("Sea")) catClass = "fish";
      if (item.category.includes("Export")) catClass = "export";

      return `
      <div class="product-card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.src='src/assets/products/tomatoes.jpg'">
          <span class="grade-badge">${item.grade}</span>
          <span class="cat-badge ${catClass}">${item.category}</span>
        </div>
        <div class="card-body">
          <div class="product-origin">
            📍 <span>${item.origin}</span>
          </div>
          <h3 class="product-title">${item.name}</h3>
          <p class="product-desc">${item.description}</p>
          <div class="price-box">
            <div class="price-main">KES ${item.price.toLocaleString()} <span>/ ${item.unit}</span></div>
            <div class="bulk-subtext">${item.bulkOption || `MOQ: ${item.moq} ${item.unit}`}</div>
          </div>
          <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 8px;">
            ❄️ Storage: <strong>${item.coldStorage}</strong>
          </div>
          <div class="card-actions">
            <div class="qty-control">
              <button class="qty-btn" onclick="window.adjustProductQty('${item.id}', -5)">-</button>
              <input type="number" id="qty-input-${item.id}" class="qty-input" value="${item.moq}" min="${item.moq}" step="5">
              <button class="qty-btn" onclick="window.adjustProductQty('${item.id}', 5)">+</button>
            </div>
            <button class="add-order-btn" onclick="window.addToOrder('${item.id}')">
              🛒 Add to Order
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

window.adjustProductQty = (itemId, delta) => {
  const input = document.getElementById(`qty-input-${itemId}`);
  if (!input) return;
  const current = parseInt(input.value) || 1;
  const min = parseInt(input.min) || 1;
  const nextVal = Math.max(min, current + delta);
  input.value = nextVal;
};

window.addToOrder = (itemId) => {
  const item = store.inventory.find((i) => i.id === itemId);
  if (!item) return;
  const input = document.getElementById(`qty-input-${itemId}`);
  const qty = parseInt(input ? input.value : item.moq) || item.moq;

  const currentCart = { ...store.cart };
  if (currentCart[itemId]) {
    currentCart[itemId].quantity += qty;
  } else {
    currentCart[itemId] = {
      id: item.id,
      name: item.name,
      price: item.price,
      unit: item.unit,
      quantity: qty,
      category: item.category
    };
  }

  store.updateCart(currentCart);
  updateCartBadge();
  showToast(`Added ${qty} ${item.unit} of ${item.name} to Kitchen Order!`);
};

// =========================================================================
// 2. KENYA MARKET RATES & SOURCING HUB (DYNAMIC DAILY AUTO-REFRESH)
// =========================================================================
function renderMarketRates() {
  const container = document.getElementById("market-rates-grid");
  const dateTextEl = document.getElementById("market-live-date-text");
  if (dateTextEl) {
    dateTextEl.textContent = getNairobiDate();
  }

  if (!container) return;

  const dailyRates = getDailyMarketRates();

  container.innerHTML = dailyRates
    .map((commodity) => {
      return `
      <div class="market-card">
        <div class="market-card-header">
          <div>
            <h3 class="commodity-title">${commodity.name}</h3>
            <div class="swahili-badge">🇰🇪 ${commodity.swahiliName}</div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
            <span style="background: #e2e8f0; font-size: 0.72rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">
              ${commodity.category}
            </span>
            <span style="font-size: 0.68rem; background: #ecfdf5; color: #065f46; padding: 2px 6px; border-radius: 10px; font-weight: 700;">
              🟢 ${commodity.dailyTrend}
            </span>
          </div>
        </div>

        <div class="rate-highlights">
          <div>
            <div class="rate-stat-label">Nairobi Benchmark (${commodity.todayDate.split(",")[0]})</div>
            <div class="rate-stat-value">${commodity.wholesaleRange}</div>
          </div>
          <div>
            <div class="rate-stat-label">Bulk Container Price</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: #047857;">${commodity.bulkBagPrice}</div>
          </div>
        </div>

        <div style="margin-bottom: 12px;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #475569; margin-bottom: 4px;">Terminal Market Price Comparison:</div>
          <table class="market-table">
            <thead>
              <tr>
                <th>Market Location</th>
                <th>Current Wholesale</th>
                <th>Supply Trend</th>
              </tr>
            </thead>
            <tbody>
              ${commodity.primaryMarkets
                .map(
                  (m) => `
                <tr>
                  <td><strong>${m.name}</strong></td>
                  <td>${m.price}</td>
                  <td><span style="font-weight: 600; color: ${m.trend.includes("High") || m.trend.includes("Volatile") ? "#b91c1c" : "#047857"};">${m.trend}</span></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="sourcing-hubs-box">
          <div class="hub-title">🚜 Verified Sourcing Aggregators & Direct Contacts:</div>
          ${commodity.sourcingHubs
            .map(
              (hub) => `
            <div class="hub-card-item">
              <div class="hub-card-name">
                <span>📍 ${hub.county}</span>
                <span style="color: #64748b;">${hub.distanceToNairobi}</span>
              </div>
              <div style="color: #475569; margin: 3px 0;">${hub.description}</div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                <span>👤 <strong>${hub.contactPerson}</strong></span>
                <a href="tel:${hub.phone}" class="hub-contact-link">📞 ${hub.phone}</a>
              </div>
              <div style="font-size: 0.72rem; color: #047857; margin-top: 2px;">⚡ Peak Inflow: ${hub.peakHarvest}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");
}

// Profit Margin Calculator Logic
function renderMarginCalculator() {
  updateCalculatorDefaults();
  computeMargin();
}

function updateCalculatorDefaults() {
  const commoditySelect = document.getElementById("calc-commodity");
  const farmGateInput = document.getElementById("calc-farm-gate");
  const transportInput = document.getElementById("calc-transport");
  const salePriceInput = document.getElementById("calc-sale-price");

  if (!commoditySelect || !farmGateInput || !salePriceInput) return;

  const selected = commoditySelect.value;
  if (selected === "onions") {
    farmGateInput.value = 48;
    transportInput.value = 8;
    salePriceInput.value = 78;
  } else if (selected === "tomatoes") {
    farmGateInput.value = 45;
    transportInput.value = 10;
    salePriceInput.value = 85;
  } else if (selected === "potatoes") {
    farmGateInput.value = 42;
    transportInput.value = 9;
    salePriceInput.value = 72;
  } else if (selected === "peas") {
    farmGateInput.value = 85;
    transportInput.value = 12;
    salePriceInput.value = 150;
  } else if (selected === "beef") {
    farmGateInput.value = 480;
    transportInput.value = 25;
    salePriceInput.value = 650;
  } else if (selected === "prawns") {
    farmGateInput.value = 1600;
    transportInput.value = 150;
    salePriceInput.value = 2400;
  } else if (selected === "fish") {
    farmGateInput.value = 380;
    transportInput.value = 35;
    salePriceInput.value = 540;
  }
  computeMargin();
}

function computeMargin() {
  const farmGate = parseFloat(document.getElementById("calc-farm-gate")?.value) || 0;
  const transport = parseFloat(document.getElementById("calc-transport")?.value) || 0;
  const salePrice = parseFloat(document.getElementById("calc-sale-price")?.value) || 0;
  const volume = parseFloat(document.getElementById("calc-volume")?.value) || 1000;

  const totalCostPerKg = farmGate + transport;
  const grossMarginPerKg = salePrice - totalCostPerKg;
  const marginPercentage = salePrice > 0 ? ((grossMarginPerKg / salePrice) * 100).toFixed(1) : 0;
  const totalProfitRun = grossMarginPerKg * volume;

  const marginPerKgEl = document.getElementById("res-margin-kg");
  const marginPctEl = document.getElementById("res-margin-pct");
  const profitRunEl = document.getElementById("res-profit-run");

  if (marginPerKgEl) marginPerKgEl.textContent = `KES ${grossMarginPerKg.toFixed(2)}`;
  if (marginPctEl) marginPctEl.textContent = `${marginPercentage}%`;
  if (profitRunEl) profitRunEl.textContent = `KES ${Math.round(totalProfitRun).toLocaleString()}`;
}

// =========================================================================
// 3. NAIROBI RESTAURANT SALES LEADS DIRECTORY
// =========================================================================
function renderLeadsCRM() {
  const container = document.getElementById("leads-card-grid");
  if (!container) return;

  const leads = store.leads;
  document.getElementById("stat-total-leads").textContent = leads.length;
  document.getElementById("stat-contacted-leads").textContent = leads.filter(
    (l) => l.currentStatus === "Cold Contacted"
  ).length;
  document.getElementById("stat-samples-leads").textContent = leads.filter(
    (l) => l.currentStatus === "Sample Basket Delivered"
  ).length;
  document.getElementById("stat-active-leads").textContent = leads.filter(
    (l) => l.currentStatus === "Active Ordering Client"
  ).length;

  const filtered = leads.filter((lead) => {
    const matchesRegion = store.leadsRegionFilter === "all" || (lead.region || "Nairobi") === store.leadsRegionFilter;
    const matchesArea = store.leadsAreaFilter === "all" || lead.area === store.leadsAreaFilter;
    const matchesStatus = store.leadsStatusFilter === "all" || lead.currentStatus === store.leadsStatusFilter;
    return matchesRegion && matchesArea && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;">
        <h3 style="color: #475569; font-weight: 700;">No establishments match this filter</h3>
        <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 4px;">Try selecting another Kenya region/location hub or resetting the pipeline stage.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((lead) => {
      let statusColor = "#64748b";
      if (lead.currentStatus === "Active Ordering Client") statusColor = "#059669";
      if (lead.currentStatus === "Negotiating Contract") statusColor = "#0284c7";
      if (lead.currentStatus === "Sample Basket Delivered") statusColor = "#d97706";

      const supply = lead.whatWeCanSupply || {
        seafood: "Lake Tilapia & Nile Perch Fillets",
        meat: "Prime Boran Beef Steaks & Goat Cuts",
        produce: "Shangi Potatoes, Mwea Tomatoes & Onions"
      };

      return `
      <div class="lead-card">
        <div>
          <div class="lead-card-top">
            <h4 class="lead-name">${lead.name}</h4>
            <div style="display: flex; gap: 4px; flex-wrap: wrap; justify-content: flex-end;">
              <span class="lead-area-tag" style="background: #f0fdf4; color: #166534; border-color: #bbf7d0;">${lead.region || "Nairobi"}</span>
              <span class="lead-area-tag">📍 ${lead.area}</span>
            </div>
          </div>
          <div class="lead-cuisine">${lead.cuisine}</div>
          <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 8px;">
            🏢 ${lead.exactLocation}
          </div>

          <!-- Tailored Supply Breakdown -->
          <div class="supply-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; margin-bottom: 10px; font-size: 0.78rem;">
            <div style="font-weight: 800; color: #0f172a; margin-bottom: 6px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em;">
              📦 What MAHALE Distributors Supplies (${lead.area}):
            </div>
            <div style="margin-bottom: 3px; color: #1e40af;">
              🦐 <strong>Sea Food & Lake Fish:</strong> ${supply.seafood}
            </div>
            <div style="margin-bottom: 3px; color: #991b1b;">
              🥩 <strong>Meats & Poultry:</strong> ${supply.meat}
            </div>
            <div style="color: #166534;">
              🥔 <strong>Fresh Farm Produce:</strong> ${supply.produce}
            </div>
          </div>

          <div class="lead-details">
            <div>👤 <strong>Decision Maker:</strong> ${lead.decisionMaker}</div>
            <div>📞 <strong>Phone:</strong> <a href="tel:${lead.phone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${lead.phone}</a></div>
            <div>✉️ <strong>Email:</strong> ${lead.email}</div>
            <div style="font-size: 0.72rem; color: #047857; margin-top: 6px; background: #ecfdf5; padding: 4px 6px; border-radius: 4px;">
              💡 <em>Pitch Angle:</em> ${lead.salesAngle}
            </div>
          </div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
            <label style="font-size: 0.72rem; font-weight: 700; color: #475569;">Pipeline Status:</label>
            <select class="lead-status-select" style="color: ${statusColor}; font-weight: 700;" onchange="window.updateLeadStatus('${lead.id}', this.value)">
              <option value="New Lead" ${lead.currentStatus === "New Lead" ? "selected" : ""}>New Lead</option>
              <option value="Cold Contacted" ${lead.currentStatus === "Cold Contacted" ? "selected" : ""}>Cold Contacted</option>
              <option value="Sample Basket Delivered" ${lead.currentStatus === "Sample Basket Delivered" ? "selected" : ""}>Sample Basket Delivered</option>
              <option value="Negotiating Contract" ${lead.currentStatus === "Negotiating Contract" ? "selected" : ""}>Negotiating Contract</option>
              <option value="Active Ordering Client" ${lead.currentStatus === "Active Ordering Client" ? "selected" : ""}>Active Ordering Client</option>
            </select>
          </div>

          <div class="lead-actions-bar">
            <a href="tel:${lead.phone}" class="lead-action-btn btn-call">
              📞 Call
            </a>
            <button class="lead-action-btn btn-whatsapp" onclick="window.sendChefWhatsApp('${lead.id}')">
              💬 WhatsApp Pitch
            </button>
            <button class="lead-action-btn btn-script" onclick="window.viewPitchScript('${lead.id}')">
              📝 Script
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

window.updateLeadStatus = (leadId, newStatus) => {
  const updatedLeads = store.leads.map((lead) => {
    if (lead.id === leadId) {
      return { ...lead, currentStatus: newStatus };
    }
    return lead;
  });
  store.updateLeads(updatedLeads);
  renderLeadsCRM();
  showToast(`Updated status for ${leadId} to ${newStatus}`);
};

window.sendChefWhatsApp = (leadId) => {
  const lead = store.leads.find((l) => l.id === leadId);
  if (!lead) return;

  const phoneClean = lead.phone.replace(/[^0-9]/g, "");
  const template = SALES_SCRIPTS.whatsappPitch.template
    .replace("{chefName}", lead.name)
    .replace("{salesRepName}", "MAHALE Distributors Desk")
    .replace("{potatoPrice}", "72")
    .replace("{tomatoPrice}", "85")
    .replace("{onionPrice}", "78")
    .replace("{peasPrice}", "145")
    .replace("{prawnsPrice}", "2,400")
    .replace("{fishPrice}", "1,100")
    .replace("{beefPrice}", "1,150")
    .replace("{portalLink}", window.location.href);

  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(template)}`;
  window.open(whatsappUrl, "_blank");
};

window.viewPitchScript = (leadId) => {
  const lead = store.leads.find((l) => l.id === leadId);
  const modal = document.getElementById("script-modal");
  const modalBody = document.getElementById("script-modal-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="background: #f8fafc; padding: 14px; border-radius: 10px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
      <h4 style="color: #0f172a; margin-bottom: 4px;">Targeting: ${lead.name} (${lead.area})</h4>
      <p style="font-size: 0.85rem; color: #475569;"><strong>Decision Maker:</strong> ${lead.decisionMaker} | <strong>Best Call Time:</strong> ${lead.bestContactTime}</p>
      <p style="font-size: 0.82rem; color: #0284c7; margin-top: 4px;"><strong>Target Needs:</strong> ${lead.estimatedWeeklyDemand}</p>
    </div>

    <div style="margin-bottom: 16px;">
      <h4 style="color: #059669; margin-bottom: 6px;">📞 Step 1: 60-Second Phone Pitch</h4>
      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; font-size: 0.85rem; line-height: 1.5;">
        <p style="margin-bottom: 8px;"><em>"Good morning Chef, this is MAHALE Distributors Supply. I know kitchen prep is underway, so I'll be brief."</em></p>
        <p style="margin-bottom: 8px;"><em>"We do direct 5:30 AM early morning deliveries of Nyandarua potatoes, Mwea tomatoes, coastal seafood (prawns, red snapper, calamari), aged Boran beef, and Lake Victoria fish to fine kitchens across ${lead.area}."</em></p>
        <p style="margin-bottom: 8px;"><em>"We fix your wholesale prices with a 100% zero-rejection guarantee and strict Advance or POD payment terms via M-Pesa Till before crate unsealing."</em></p>
        <p><strong>The Close:</strong> <em>"Can we drop off a free Chef's Tasting Basket this Thursday at 6:00 AM with 10kg Shangi potatoes, Mwea salad tomatoes, and fresh ocean prawns or Lake Tilapia fillets for your prep team to test?"</em></p>
      </div>
    </div>

    <div>
      <h4 style="color: #0284c7; margin-bottom: 6px;">🛡️ How to Handle the Common Objection:</h4>
      <div style="background: #f1f5f9; border-radius: 8px; padding: 10px; font-size: 0.82rem;">
        <p><strong>Chef says:</strong> <em>"We already have an established supplier / mama mboga."</em></p>
        <p style="color: #047857; margin-top: 4px;"><strong>Your Response:</strong> <em>"We completely respect that Chef! Most top kitchens we supply keep us as their primary cold-chain backup for when their regular vendor experiences rainy season shortages, price hikes, or delayed 9:00 AM deliveries. Let's just send the sample basket so you have our pricing on file."</em></p>
      </div>
    </div>
  `;
  modal.classList.add("open");
};

function handleAddLead(e) {
  e.preventDefault();
  const name = document.getElementById("new-lead-name").value.trim();
  const region = document.getElementById("new-lead-region") ? document.getElementById("new-lead-region").value : "Nairobi";
  const area = document.getElementById("new-lead-area-input") ? document.getElementById("new-lead-area-input").value.trim() : (document.getElementById("new-lead-area") ? document.getElementById("new-lead-area").value : "Nairobi");
  const exactLocation = document.getElementById("new-lead-location").value.trim();
  const cuisine = document.getElementById("new-lead-cuisine").value.trim();
  const decisionMaker = document.getElementById("new-lead-role").value.trim();
  const phone = document.getElementById("new-lead-phone").value.trim();
  const email = document.getElementById("new-lead-email").value.trim();
  const demand = document.getElementById("new-lead-demand").value.trim();

  if (!name || !phone) {
    alert("Please provide the restaurant name and phone contact.");
    return;
  }

  const newLead = {
    id: `lead-custom-${Date.now()}`,
    name,
    region,
    area,
    exactLocation,
    cuisine: cuisine || "Multi-cuisine / Cafe",
    decisionMaker: decisionMaker || "Head Chef / Procurement",
    phone,
    email: email || "procurement@hotel.co.ke",
    estimatedWeeklyDemand: demand || "General produce, meat, and seafood supplies",
    whatWeCanSupply: {
      seafood: "Lake Tilapia & Coastal Seafood",
      meat: "Prime Boran Steer Cuts & Mbuzi",
      produce: "Shangi Potatoes & Fresh Vegetables"
    },
    currentStatus: "New Lead",
    notes: "Added via sales lead manager",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Direct cold-chain kitchen delivery"
  };

  store.updateLeads([newLead, ...store.leads]);
  renderLeadsCRM();
  document.getElementById("add-lead-modal").classList.remove("open");
  e.target.reset();
  showToast(`Added ${name} to sales pipeline!`);
}

// =========================================================================
// 4. B2B SALES & ACCOUNTS CRM (ZERO-CREDIT ENGINE & PO BALANCE LEDGER)
// =========================================================================
function renderCRM() {
  const tableBody = document.getElementById("crm-accounts-table-body");
  if (!tableBody) return;

  const accounts = store.crmAccounts;

  // 1. Update High-Level Metric Cards
  const totalAccounts = accounts.length;
  const activeAccounts = accounts.filter((a) => a.accountStage === "Active Account").length;
  const totalRevenue = accounts.reduce((acc, curr) => acc + (curr.revenueGenerated || 0), 0);
  const totalPoBalance = accounts.reduce((acc, curr) => acc + (curr.balanceInPo || 0), 0);
  const totalCalls = store.crmCallLogs.length;

  document.getElementById("stat-crm-total-accounts").textContent = totalAccounts;
  document.getElementById("stat-crm-active-accounts").textContent = activeAccounts;
  document.getElementById("stat-crm-total-revenue").textContent = `KES ${totalRevenue.toLocaleString()}`;
  document.getElementById("stat-crm-po-balance").textContent = `KES ${totalPoBalance.toLocaleString()}`;
  document.getElementById("stat-crm-calls-count").textContent = totalCalls;
  document.getElementById("stat-crm-credit-debt").textContent = "KES 0.00";

  // 2. Filter Accounts
  const filtered = accounts.filter((acc) => {
    const matchesRegion = store.crmRegionFilter === "all" || (acc.region || "Nairobi") === store.crmRegionFilter;
    const matchesStage = store.crmStageFilter === "all" || acc.accountStage === store.crmStageFilter;
    const matchesArea = store.crmAreaFilter === "all" || acc.area === store.crmAreaFilter;
    const matchesSearch =
      acc.restaurantName.toLowerCase().includes(store.crmSearchQuery) ||
      acc.contactPerson.toLowerCase().includes(store.crmSearchQuery) ||
      acc.activePoNumber.toLowerCase().includes(store.crmSearchQuery) ||
      acc.area.toLowerCase().includes(store.crmSearchQuery) ||
      (acc.region && acc.region.toLowerCase().includes(store.crmSearchQuery));
    return matchesRegion && matchesStage && matchesArea && matchesSearch;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="11" style="text-align: center; padding: 32px; color: #64748b;">
          No customer accounts found matching your filter criteria.
        </td>
      </tr>
    `;
  } else {
    tableBody.innerHTML = filtered
      .map((acc) => {
        let stageColor = "#64748b";
        let stageBg = "#f1f5f9";
        if (acc.accountStage === "Active Account") {
          stageColor = "#166534";
          stageBg = "#dcfce7";
        } else if (acc.accountStage === "Sampling / Tasting") {
          stageColor = "#854d0e";
          stageBg = "#fef9c3";
        } else if (acc.accountStage === "Negotiating") {
          stageColor = "#1e40af";
          stageBg = "#dbeafe";
        }

        const poBalanceColor = acc.balanceInPo > 0 ? "#059669" : "#64748b";

        return `
        <tr>
          <td>
            <div style="font-weight: 800; color: #0f172a;">${acc.restaurantName}</div>
            <div style="font-size: 0.72rem; color: #64748b;">Orders Completed: ${acc.ordersCompleted}</div>
          </td>
          <td>
            <div style="margin-bottom: 3px;">
              <span style="font-size: 0.7rem; font-weight: 700; color: #0284c7; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; border: 1px solid #bae6fd;">
                ${acc.region || "Nairobi"}
              </span>
            </div>
            <span style="font-size: 0.75rem; font-weight: 600; padding: 2px 6px; border-radius: 4px; background: #f8fafc; border: 1px solid #e2e8f0; display: inline-block;">
              📍 ${acc.area}
            </span>
          </td>
          <td>
            <div style="font-weight: 600; font-size: 0.8rem;">${acc.contactPerson}</div>
            <a href="tel:${acc.phone}" style="font-size: 0.72rem; color: #0284c7; text-decoration: none;">${acc.phone}</a>
          </td>
          <td>
            <span style="font-size: 0.72rem; font-weight: 800; color: ${stageColor}; background: ${stageBg}; padding: 3px 8px; border-radius: 10px;">
              ${acc.accountStage}
            </span>
          </td>
          <td>
            <span style="font-family: monospace; font-size: 0.78rem; font-weight: 700; color: #0369a1; background: #f0f9ff; padding: 2px 6px; border-radius: 4px; border: 1px solid #bae6fd;">
              ${acc.activePoNumber}
            </span>
          </td>
          <td style="font-weight: 700; color: #334155;">
            KES ${acc.totalPoValue.toLocaleString()}
          </td>
          <td style="font-weight: 800; color: ${poBalanceColor}; font-size: 0.88rem;">
            KES ${acc.balanceInPo.toLocaleString()}
          </td>
          <td style="font-weight: 800; color: #0f172a;">
            KES ${acc.revenueGenerated.toLocaleString()}
          </td>
          <td>
            <span style="font-size: 0.72rem; font-weight: 700; color: #991b1b; background: #fef2f2; padding: 2px 6px; border-radius: 4px; border: 1px solid #fecaca; white-space: nowrap;">
              ${acc.paymentTerms}
            </span>
          </td>
          <td style="max-width: 220px; font-size: 0.75rem; color: #475569; line-height: 1.3;">
            ${acc.lastInteraction}
          </td>
          <td>
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
              <button style="background: #e0f2fe; color: #0369a1; border: none; padding: 4px 8px; border-radius: 6px; cursor: pointer; font-size: 0.72rem; font-weight: 700;" onclick="window.openLogCallModal('${acc.id}')">
                📞 Call
              </button>
              <button style="background: #dcfce7; color: #166534; border: none; padding: 4px 8px; border-radius: 6px; cursor: pointer; font-size: 0.72rem; font-weight: 700;" onclick="window.openUpdatePOModal('${acc.id}')">
                💳 PO
              </button>
              <button style="background: #25d366; color: #ffffff; border: none; padding: 4px 8px; border-radius: 6px; cursor: pointer; font-size: 0.72rem; font-weight: 700;" onclick="window.sendAccountWhatsApp('${acc.id}')">
                💬 WA
              </button>
            </div>
          </td>
        </tr>
      `;
      })
      .join("");
  }

  // 3. Render Call Logs History Feed
  renderCallLogs();

  // 4. Update Select Options in Modals
  populateCRMModalsSelects();
}

function renderCallLogs() {
  const container = document.getElementById("crm-call-logs-container");
  if (!container) return;

  const logs = [...store.crmCallLogs].reverse();

  if (logs.length === 0) {
    container.innerHTML = `<p style="color: #94a3b8; font-size: 0.85rem;">No customer interaction calls logged yet.</p>`;
    return;
  }

  container.innerHTML = logs
    .map((log) => {
      let outcomeColor = "#059669";
      if (log.outcome.includes("Follow")) outcomeColor = "#d97706";
      if (log.outcome.includes("Catalog")) outcomeColor = "#0284c7";

      return `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; margin-bottom: 4px;">
          <div>
            <strong style="color: #0f172a; font-size: 0.88rem;">${log.restaurantName}</strong>
            <span style="font-size: 0.75rem; color: #64748b; margin-left: 6px;">(${log.type})</span>
          </div>
          <span style="font-size: 0.72rem; color: #64748b; background: #ffffff; padding: 2px 8px; border-radius: 6px; border: 1px solid #cbd5e1;">
            📅 ${log.date}
          </span>
        </div>
        <div style="font-size: 0.8rem; color: #334155; margin-bottom: 6px;">
          👤 <strong>Contact:</strong> ${log.contactPerson} | <em>By: ${log.caller}</em>
        </div>
        <p style="font-size: 0.82rem; color: #475569; margin-bottom: 6px; background: #ffffff; padding: 8px 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
          "${log.notes}"
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem;">
          <span style="color: ${outcomeColor}; font-weight: 700;">✓ Outcome: ${log.outcome}</span>
          ${log.followUpDate ? `<span style="color: #0284c7; font-weight: 600;">⏰ Next Follow-Up: ${log.followUpDate}</span>` : ""}
        </div>
      </div>
    `;
    })
    .join("");
}

function populateCRMModalsSelects() {
  const logAccountSelect = document.getElementById("log-call-account");
  const poAccountSelect = document.getElementById("po-account-select");

  const optionsHtml = store.crmAccounts
    .map((acc) => `<option value="${acc.id}">${acc.restaurantName} (${acc.area} - ${acc.activePoNumber})</option>`)
    .join("");

  if (logAccountSelect) logAccountSelect.innerHTML = optionsHtml;
  if (poAccountSelect) poAccountSelect.innerHTML = optionsHtml;
}

window.openLogCallModal = (accountId) => {
  const modal = document.getElementById("log-call-modal");
  if (!modal) return;
  populateCRMModalsSelects();
  if (accountId) {
    const select = document.getElementById("log-call-account");
    if (select) select.value = accountId;
    const acc = store.crmAccounts.find((a) => a.id === accountId);
    if (acc) {
      document.getElementById("log-call-person").value = acc.contactPerson;
    }
  }
  modal.classList.add("open");
};

window.openUpdatePOModal = (accountId) => {
  const modal = document.getElementById("update-po-modal");
  if (!modal) return;
  populateCRMModalsSelects();
  if (accountId) {
    const select = document.getElementById("po-account-select");
    if (select) select.value = accountId;
    const acc = store.crmAccounts.find((a) => a.id === accountId);
    if (acc) {
      document.getElementById("po-number-input").value = acc.activePoNumber;
    }
  }
  modal.classList.add("open");
};

window.sendAccountWhatsApp = (accountId) => {
  const acc = store.crmAccounts.find((a) => a.id === accountId);
  if (!acc) return;
  const phoneClean = acc.phone.replace(/[^0-9]/g, "");
  const message = `Hello ${acc.contactPerson}! 👋 This is MAHALE Distributors Supply Kenya regarding your account for *${acc.restaurantName}*.

📄 *Active PO Number:* ${acc.activePoNumber}
💰 *Remaining PO Balance:* KES ${acc.balanceInPo.toLocaleString()}
💳 *Payment Terms:* ${acc.paymentTerms}

We are preparing tomorrow morning's 5:30 AM dispatch routes. Would you like to confirm your standard delivery or place an on-demand restock?

📲 *Online Kitchen Portal:* ${window.location.href}`;

  const url = `https://wa.me/${phoneClean}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

function handleLogCallSubmit(e) {
  e.preventDefault();
  const accountId = document.getElementById("log-call-account").value;
  const type = document.getElementById("log-call-type").value;
  const person = document.getElementById("log-call-person").value.trim();
  const notes = document.getElementById("log-call-notes").value.trim();
  const outcome = document.getElementById("log-call-outcome").value;
  const followUp = document.getElementById("log-call-followup").value;

  const acc = store.crmAccounts.find((a) => a.id === accountId);
  const restaurantName = acc ? acc.restaurantName : "Client Restaurant";

  const dateNow = new Date().toISOString().replace("T", " ").substring(0, 16);

  const newLog = {
    id: `call-${Date.now()}`,
    restaurantName,
    caller: "MAHALE Distributors Sales Rep",
    date: dateNow,
    type,
    contactPerson: person,
    notes,
    outcome,
    followUpDate: followUp || null
  };

  // Update touchpoint history
  store.updateCRMCallLogs([newLog, ...store.crmCallLogs]);

  // Update account ledger
  const updatedAccounts = store.crmAccounts.map((a) => {
    if (a.id === accountId) {
      return {
        ...a,
        coldCallsLogged: (a.coldCallsLogged || 0) + 1,
        lastInteraction: `${dateNow}: ${notes.substring(0, 75)}... (${outcome})`
      };
    }
    return a;
  });

  store.updateCRMAccounts(updatedAccounts);
  renderCRM();
  document.getElementById("log-call-modal").classList.remove("open");
  e.target.reset();
  showToast(`Logged touchpoint with ${restaurantName}!`);
}

function handleUpdatePOSubmit(e) {
  e.preventDefault();
  const accountId = document.getElementById("po-account-select").value;
  const poNumber = document.getElementById("po-number-input").value.trim();
  const actionType = document.getElementById("po-action-type").value;
  const amount = parseFloat(document.getElementById("po-amount-input").value) || 0;
  const method = document.getElementById("po-payment-method").value;

  if (amount <= 0) {
    alert("Please enter a valid amount in KES.");
    return;
  }

  const updatedAccounts = store.crmAccounts.map((a) => {
    if (a.id === accountId) {
      let balance = a.balanceInPo;
      let total = a.totalPoValue;
      let rev = a.revenueGenerated;
      let orders = a.ordersCompleted;

      if (actionType === "deposit") {
        balance += amount;
        total += amount;
        rev += amount;
      } else if (actionType === "drawdown") {
        balance = Math.max(0, balance - amount);
        orders += 1;
      } else if (actionType === "new_po") {
        balance = amount;
        total = amount;
        rev += amount;
      }

      return {
        ...a,
        activePoNumber: poNumber || a.activePoNumber,
        totalPoValue: total,
        balanceInPo: balance,
        revenueGenerated: rev,
        ordersCompleted: orders,
        lastInteraction: `Posted ${actionType} of KES ${amount.toLocaleString()} via ${method}. Balance now KES ${balance.toLocaleString()}.`
      };
    }
    return a;
  });

  store.updateCRMAccounts(updatedAccounts);
  renderCRM();
  document.getElementById("update-po-modal").classList.remove("open");
  e.target.reset();
  showToast(`Updated PO & Balance ledger for account!`);
}

function exportCRMToCSV() {
  const headers = [
    "Restaurant Name",
    "Region",
    "Area Hub",
    "Chef / Contact Person",
    "Phone",
    "Account Stage",
    "Active PO Number",
    "Total PO Value (KES)",
    "Balance in PO (KES)",
    "Revenue Generated (KES)",
    "Orders Completed",
    "Payment Terms",
    "Last Touchpoint"
  ];

  const rows = store.crmAccounts.map((a) => [
    `"${a.restaurantName}"`,
    `"${a.region || "Nairobi"}"`,
    `"${a.area}"`,
    `"${a.contactPerson}"`,
    `"${a.phone}"`,
    `"${a.accountStage}"`,
    `"${a.activePoNumber}"`,
    a.totalPoValue,
    a.balanceInPo,
    a.revenueGenerated,
    a.ordersCompleted,
    `"${a.paymentTerms}"`,
    `"${(a.lastInteraction || "").replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `MAHALE_Distributors_B2B_CRM_Ledger_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =========================================================================
// 5. B2B CART & ZERO-CREDIT ORDER CHECKOUT
// =========================================================================
function updateCartBadge() {
  const badge = document.getElementById("header-cart-count");
  if (!badge) return;
  const items = Object.values(store.cart);
  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
  badge.textContent = totalCount;
}

function openCartModal() {
  const modal = document.getElementById("cart-modal");
  if (!modal) return;
  renderCartContents();
  modal.classList.add("open");
}

function closeCartModal() {
  const modal = document.getElementById("cart-modal");
  if (modal) modal.classList.remove("open");
}

function renderCartContents() {
  const container = document.getElementById("cart-items-container");
  const totalEl = document.getElementById("cart-total-amount");
  if (!container || !totalEl) return;

  const items = Object.values(store.cart);
  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: #64748b;">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">🛒 Your Kitchen Order is empty</p>
        <p style="font-size: 0.85rem;">Browse produce, seafood, or meat cuts above to add items to your scheduled delivery.</p>
      </div>
    `;
    totalEl.textContent = "KES 0";
    return;
  }

  let grandTotal = 0;
  container.innerHTML = items
    .map((item) => {
      const lineTotal = item.price * item.quantity;
      grandTotal += lineTotal;

      return `
      <div class="cart-item-row">
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-sub">KES ${item.price.toLocaleString()} / ${item.unit} (${item.category})</div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="qty-control" style="transform: scale(0.9);">
            <button class="qty-btn" onclick="window.updateCartItemQty('${item.id}', -5)">-</button>
            <span style="padding: 0 8px; font-size: 0.85rem; font-weight: 700;">${item.quantity} ${item.unit}</span>
            <button class="qty-btn" onclick="window.updateCartItemQty('${item.id}', 5)">+</button>
          </div>
          <div style="font-weight: 800; font-size: 0.95rem; color: #0f172a; min-width: 90px; text-align: right;">
            KES ${lineTotal.toLocaleString()}
          </div>
          <button style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-size: 1.1rem;" onclick="window.removeCartItem('${item.id}')">
            ×
          </button>
        </div>
      </div>
    `;
    })
    .join("");

  totalEl.textContent = `KES ${grandTotal.toLocaleString()}`;
}

window.updateCartItemQty = (id, delta) => {
  const currentCart = { ...store.cart };
  if (!currentCart[id]) return;
  currentCart[id].quantity += delta;
  if (currentCart[id].quantity <= 0) {
    delete currentCart[id];
  }
  store.updateCart(currentCart);
  updateCartBadge();
  renderCartContents();
};

window.removeCartItem = (id) => {
  const currentCart = { ...store.cart };
  delete currentCart[id];
  store.updateCart(currentCart);
  updateCartBadge();
  renderCartContents();
};

function dispatchOrderViaWhatsApp() {
  const items = Object.values(store.cart);
  if (items.length === 0) {
    alert("Please add items to your kitchen order before dispatching.");
    return;
  }

  const restaurantName = document.getElementById("order-restaurant-name")?.value.trim() || "Client Kitchen";
  const deliverySlot = document.getElementById("order-delivery-slot")?.value || "Morning 5:30 AM - 7:30 AM";
  const paymentTerm =
    document.getElementById("order-payment-terms")?.value ||
    "Payment on Delivery (POD via M-Pesa Till before unsealing)";
  const instructions =
    document.getElementById("order-instructions")?.value.trim() ||
    "Standard cold-chain packing on flake ice in food-grade Euro-crates.";

  let totalKes = 0;
  const lineItemsText = items
    .map((item, idx) => {
      const lineTotal = item.price * item.quantity;
      totalKes += lineTotal;
      return `${idx + 1}. *${item.name}* - ${item.quantity} ${item.unit} @ KES ${item.price} = KES ${lineTotal.toLocaleString()}`;
    })
    .join("\n");

  const poNumber = `PO-MD-${Math.floor(100000 + Math.random() * 900000)}`;

  const message = `*MAHALE DISTRIBUTORS B2B PURCHASE ORDER*
📄 *PO Number:* #${poNumber}
🏨 *Kitchen / Client:* ${restaurantName}
⏰ *Scheduled Delivery:* ${deliverySlot}
💳 *Payment Terms:* ${paymentTerm}
⛔ *STRICT ZERO-CREDIT POLICY:* Goods released only upon verified advance settlement or live M-Pesa Till payment at receiving bay.
🛡️ *RECEIVING & RETURN POLICY:*
• Non-standard material MUST be inspected and reported immediately upon receipt.
• Return window: Maximum 2 days depending on item perishability.
• Fresh Fish & Seafood: Strict NO-RETURN POLICY once accepted at receiving bay.

📋 *ORDERED LINE ITEMS:*
${lineItemsText}

💰 *ESTIMATED TOTAL:* KES ${totalKes.toLocaleString()}

📝 *Kitchen Notes / Butcher & Seafood Prep:*
"${instructions}"

_Generated via MAHALE Distributors Digital Kitchen Portal_`;

  const dispatchPhone = "254722841290";
  const url = `https://wa.me/${dispatchPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  // If this restaurant matches an account in CRM, automatically record the activity
  const matchedAcc = store.crmAccounts.find((a) =>
    a.restaurantName.toLowerCase().includes(restaurantName.toLowerCase())
  );
  if (matchedAcc) {
    const updated = store.crmAccounts.map((a) => {
      if (a.id === matchedAcc.id) {
        return {
          ...a,
          ordersCompleted: a.ordersCompleted + 1,
          revenueGenerated: a.revenueGenerated + totalKes,
          lastInteraction: `PO #${poNumber} dispatched via WhatsApp for KES ${totalKes.toLocaleString()}.`
        };
      }
      return a;
    });
    store.updateCRMAccounts(updated);
    renderCRM();
  }

  showToast(`Purchase order #${poNumber} generated and sent to dispatch desk!`);
  store.updateCart({});
  updateCartBadge();
  closeCartModal();
}

// =========================================================================
// 6. UTILITY TOAST
// =========================================================================
function showToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>⚡ ${msg}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
