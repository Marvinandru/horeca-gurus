/**
 * HORECA Gurus Supply Platform Controller
 * Manages reactive state, digital ordering, market pricing, CRM leads, and admin inventory.
 */

import { KENYA_COMMODITY_RATES, SOURCING_CALENDAR } from "../data/market_data.js";
import { RESTAURANT_LEADS, SALES_SCRIPTS } from "../data/leads_data.js";
import { DEFAULT_INVENTORY } from "../data/default_inventory.js";

// --- PERSISTENT STATE MANAGEMENT ---
class Store {
  constructor() {
    this.inventory = this.loadState("horecagurus_inventory", DEFAULT_INVENTORY);
    this.leads = this.loadState("horecagurus_leads", RESTAURANT_LEADS);
    this.cart = this.loadState("horecagurus_cart", {});
    this.activeTab = "storefront";
    this.categoryFilter = "all";
    this.searchQuery = "";
    this.leadsAreaFilter = "all";
    this.leadsStatusFilter = "all";
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
    this.saveState("horecagurus_inventory", this.inventory);
  }

  updateLeads(newLeads) {
    this.leads = newLeads;
    this.saveState("horecagurus_leads", this.leads);
  }

  updateCart(newCart) {
    this.cart = newCart;
    this.saveState("horecagurus_cart", this.cart);
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

  // Add Product Modal Triggers
  const openAddProductBtn = document.getElementById("open-add-product-btn");
  if (openAddProductBtn) {
    openAddProductBtn.addEventListener("click", () => {
      document.getElementById("add-product-modal").classList.add("open");
    });
  }
  const closeAddProductBtn = document.getElementById("close-add-product-modal");
  if (closeAddProductBtn) {
    closeAddProductBtn.addEventListener("click", () => {
      document.getElementById("add-product-modal").classList.remove("open");
    });
  }

  // Add Product Form Submission
  const addProductForm = document.getElementById("add-product-form");
  if (addProductForm) {
    addProductForm.addEventListener("submit", handleAddProduct);
  }

  // Leads Filter Triggers
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

  // Admin Export / Reset Buttons
  const exportCsvBtn = document.getElementById("export-inventory-csv-btn");
  if (exportCsvBtn) exportCsvBtn.addEventListener("click", exportInventoryToCSV);

  const exportJsonBtn = document.getElementById("export-inventory-json-btn");
  if (exportJsonBtn) exportJsonBtn.addEventListener("click", exportInventoryToJSON);

  const resetInventoryBtn = document.getElementById("reset-inventory-btn");
  if (resetInventoryBtn) {
    resetInventoryBtn.addEventListener("click", () => {
      if (confirm("Reset inventory to original default catalog? Any custom added items will be replaced.")) {
        store.updateInventory(DEFAULT_INVENTORY);
        renderStorefront();
        renderInventoryAdmin();
        showToast("Inventory reset to default catalog.");
      }
    });
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
  renderInventoryAdmin();
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
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 12px;">
        <h3 style="color: #475569; margin-bottom: 8px;">No produce or food items match your criteria</h3>
        <p style="color: #94a3b8; font-size: 0.9rem;">Try selecting another division or clearing your search query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((item) => {
      let catClass = "produce";
      if (item.category.includes("Meat")) catClass = "meat";
      if (item.category.includes("Fish")) catClass = "fish";
      if (item.category.includes("Export")) catClass = "export";

      return `
      <div class="product-card">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'">
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
            ❄️ Storage: ${item.coldStorage} | In Stock: <strong>${item.inStock} ${item.unit}</strong>
          </div>
          <div class="card-footer">
            <div class="qty-control">
              <button class="qty-btn" onclick="window.adjustProductQty('${item.id}', -1)">-</button>
              <input type="number" class="qty-input" id="qty-input-${item.id}" value="${item.moq}" min="${item.moq}" step="1">
              <button class="qty-btn" onclick="window.adjustProductQty('${item.id}', 1)">+</button>
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
// 2. KENYA MARKET RATES & SOURCING HUB
// =========================================================================
function renderMarketRates() {
  const container = document.getElementById("market-rates-grid");
  if (!container) return;

  container.innerHTML = KENYA_COMMODITY_RATES.map((commodity) => {
    return `
      <div class="market-card">
        <div class="market-card-header">
          <div>
            <h3 class="commodity-title">${commodity.name}</h3>
            <div class="swahili-badge">🇰🇪 ${commodity.swahiliName}</div>
          </div>
          <span style="background: #e2e8f0; font-size: 0.75rem; font-weight: 700; padding: 3px 8px; border-radius: 6px;">
            ${commodity.category}
          </span>
        </div>

        <div class="rate-highlights">
          <div>
            <div class="rate-stat-label">Nairobi Wholesale Benchmark</div>
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
                  <td><span style="font-weight: 600; color: ${m.trend.includes("High") ? "#b91c1c" : "#047857"};">${m.trend}</span></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="sourcing-hubs-box">
          <div class="hub-title">🚜 Primary Farm-Gate Sourcing Hubs & Contacts:</div>
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
              <div style="font-size: 0.72rem; color: #047857; margin-top: 2px;">⚡ Peak: ${hub.peakHarvest}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }).join("");
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
// 3. RESTAURANT SALES LEADS & CRM
// =========================================================================
function renderLeadsCRM() {
  const container = document.getElementById("leads-card-grid");
  if (!container) return;

  // Pipeline Counters
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

  // Filtered Leads
  const filtered = leads.filter((lead) => {
    const matchesArea = store.leadsAreaFilter === "all" || lead.area === store.leadsAreaFilter;
    const matchesStatus = store.leadsStatusFilter === "all" || lead.currentStatus === store.leadsStatusFilter;
    return matchesArea && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 12px;">
        <h3 style="color: #475569;">No restaurants match this filter</h3>
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

      return `
      <div class="lead-card">
        <div>
          <div class="lead-card-top">
            <h4 class="lead-name">${lead.name}</h4>
            <span class="lead-area-tag">📍 ${lead.area}</span>
          </div>
          <div class="lead-cuisine">${lead.cuisine}</div>
          <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 6px;">
            🏢 ${lead.exactLocation}
          </div>
          <div class="lead-details">
            <div>👤 <strong>Decision Maker:</strong> ${lead.decisionMaker}</div>
            <div>📞 <strong>Phone:</strong> <a href="tel:${lead.phone}" style="color: #0284c7; text-decoration: none;">${lead.phone}</a></div>
            <div>✉️ <strong>Email:</strong> ${lead.email}</div>
            <div style="margin-top: 6px; background: #f8fafc; padding: 6px 8px; border-radius: 6px;">
              📦 <strong>Weekly Need:</strong> ${lead.estimatedWeeklyDemand}
            </div>
            <div style="font-size: 0.72rem; color: #047857; margin-top: 4px;">
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
    .replace("{salesRepName}", "HORECA Gurus Desk")
    .replace("{potatoPrice}", "72")
    .replace("{tomatoPrice}", "85")
    .replace("{onionPrice}", "78")
    .replace("{peasPrice}", "145")
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
        <p style="margin-bottom: 8px;"><em>"Good morning Chef, this is HORECA Gurus Supply. I know kitchen prep is underway, so I'll be brief."</em></p>
        <p style="margin-bottom: 8px;"><em>"We do direct 5:30 AM early morning deliveries of Nyandarua potatoes, Mwea tomatoes, aged Boran beef, and Lake Victoria fish to fine kitchens across ${lead.area}."</em></p>
        <p style="margin-bottom: 8px;"><em>"We fix your wholesale prices on 30-day contracts so you avoid Marikiti rainy season price shocks, with a 100% zero-rejection guarantee."</em></p>
        <p><strong>The Close:</strong> <em>"Can we drop off a free Chef's Tasting Basket this Thursday at 6:00 AM with 10kg Shangi potatoes and Tilapia fillets for your prep team to test?"</em></p>
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
  const area = document.getElementById("new-lead-area").value;
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
    area,
    exactLocation,
    cuisine: cuisine || "Multi-cuisine / Cafe",
    decisionMaker: decisionMaker || "Head Chef / Procurement",
    phone,
    email: email || "procurement@hotel.co.ke",
    estimatedWeeklyDemand: demand || "General produce and meat supplies",
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
// 4. INVENTORY MANAGEMENT (ADMIN TOOL)
// =========================================================================
function renderInventoryAdmin() {
  const tableBody = document.getElementById("admin-inventory-table-body");
  if (!tableBody) return;

  const inventory = store.inventory;

  // Stats Counters
  document.getElementById("stat-admin-total-items").textContent = inventory.length;
  const totalStockKg = inventory.reduce((acc, curr) => acc + (curr.inStock || 0), 0);
  document.getElementById("stat-admin-total-kg").textContent = `${totalStockKg.toLocaleString()} Units`;
  const totalInventoryVal = inventory.reduce((acc, curr) => acc + curr.price * curr.inStock, 0);
  document.getElementById("stat-admin-valuation").textContent = `KES ${Math.round(totalInventoryVal).toLocaleString()}`;

  tableBody.innerHTML = inventory
    .map((item) => {
      return `
      <tr>
        <td>
          <div style="font-weight: 700; color: #0f172a;">${item.name}</div>
          <div style="font-size: 0.72rem; color: #64748b;">SKU: ${item.sku} | 📍 ${item.origin}</div>
        </td>
        <td>
          <span style="font-size: 0.75rem; font-weight: 600; padding: 2px 6px; border-radius: 4px; background: #f1f5f9;">
            ${item.category}
          </span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 4px;">
            KES <input type="number" class="price-input-inline" value="${item.price}" onchange="window.updateItemPrice('${item.id}', this.value)">
            <span style="font-size: 0.75rem; color: #64748b;">/${item.unit}</span>
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 4px;">
            <input type="number" class="stock-input-inline" value="${item.inStock}" onchange="window.updateItemStock('${item.id}', this.value)">
            <span style="font-size: 0.75rem; color: #64748b;">${item.unit}</span>
          </div>
        </td>
        <td>${item.moq} ${item.unit}</td>
        <td>
          <span style="font-size: 0.72rem; color: ${item.isExportGrade ? "#854d0e" : "#475569"}; font-weight: 600;">
            ${item.isExportGrade ? "🌍 GlobalG.A.P. Export" : "🍽️ HoReCa Kenya"}
          </span>
        </td>
        <td>
          <button style="background: #fee2e2; color: #991b1b; border: none; padding: 4px 8px; border-radius: 6px; cursor: pointer; font-size: 0.75rem; font-weight: 600;" onclick="window.deleteInventoryItem('${item.id}')">
            🗑️ Delete
          </button>
        </td>
      </tr>
    `;
    })
    .join("");
}

window.updateItemPrice = (id, newPrice) => {
  const price = parseFloat(newPrice);
  if (isNaN(price) || price < 0) return;
  const updated = store.inventory.map((item) => (item.id === id ? { ...item, price } : item));
  store.updateInventory(updated);
  renderStorefront();
  renderInventoryAdmin();
  showToast("Updated wholesale price!");
};

window.updateItemStock = (id, newStock) => {
  const inStock = parseInt(newStock);
  if (isNaN(inStock) || inStock < 0) return;
  const updated = store.inventory.map((item) => (item.id === id ? { ...item, inStock } : item));
  store.updateInventory(updated);
  renderStorefront();
  renderInventoryAdmin();
  showToast("Updated warehouse stock level!");
};

window.deleteInventoryItem = (id) => {
  if (confirm("Are you sure you want to remove this item from your supply inventory?")) {
    const updated = store.inventory.filter((item) => item.id !== id);
    store.updateInventory(updated);
    renderStorefront();
    renderInventoryAdmin();
    showToast("Product deleted from catalog.");
  }
};

function handleAddProduct(e) {
  e.preventDefault();
  const name = document.getElementById("new-prod-name").value.trim();
  const category = document.getElementById("new-prod-category").value;
  const price = parseFloat(document.getElementById("new-prod-price").value) || 0;
  const unit = document.getElementById("new-prod-unit").value.trim() || "kg";
  const stock = parseInt(document.getElementById("new-prod-stock").value) || 0;
  const moq = parseInt(document.getElementById("new-prod-moq").value) || 10;
  const origin = document.getElementById("new-prod-origin").value.trim() || "Kenya Highland Farms";
  const grade = document.getElementById("new-prod-grade").value.trim() || "Grade 1 Select";
  const coldStorage = document.getElementById("new-prod-storage").value.trim() || "Cold Chain 2-4°C";
  const isExport = document.getElementById("new-prod-export").checked;
  const description = document.getElementById("new-prod-desc").value.trim() || "Fresh farm food supply.";
  const image = document.getElementById("new-prod-img").value.trim() || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80";

  if (!name || price <= 0) {
    alert("Please enter a valid product name and wholesale price.");
    return;
  }

  const newProduct = {
    id: `prod-${Date.now()}`,
    sku: `SKU-${category.substring(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
    name,
    category,
    price,
    currency: "KES",
    unit,
    bulkOption: `Standard bulk ${unit}`,
    inStock: stock,
    moq,
    origin,
    grade,
    coldStorage,
    description,
    isExportGrade: isExport,
    image
  };

  store.updateInventory([newProduct, ...store.inventory]);
  renderStorefront();
  renderInventoryAdmin();
  document.getElementById("add-product-modal").classList.remove("open");
  e.target.reset();
  showToast(`Added ${name} to live inventory and online store!`);
}

function exportInventoryToCSV() {
  const headers = ["SKU", "Name", "Category", "Wholesale Price (KES)", "Unit", "In Stock", "MOQ", "Origin", "Grade", "Export Ready"];
  const rows = store.inventory.map((i) => [
    i.sku,
    `"${i.name}"`,
    i.category,
    i.price,
    i.unit,
    i.inStock,
    i.moq,
    `"${i.origin}"`,
    `"${i.grade}"`,
    i.isExportGrade ? "Yes" : "No"
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `HorecaGurus_Inventory_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportInventoryToJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.inventory, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `HorecaGurus_Inventory_Backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// =========================================================================
// 5. B2B CART & ORDER CHECKOUT
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
        <p style="font-size: 0.85rem;">Browse produce, meat cuts, or seafood above to add items to your scheduled delivery.</p>
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

  const restaurantName = document.getElementById("order-restaurant-name")?.value.trim() || "Client Restaurant";
  const deliverySlot = document.getElementById("order-delivery-slot")?.value || "Morning 5:30 AM - 7:30 AM";
  const paymentTerm = document.getElementById("order-payment-terms")?.value || "30-Day Corporate Invoice";
  const instructions = document.getElementById("order-instructions")?.value.trim() || "Standard packaging on flake ice.";

  let totalKes = 0;
  const lineItemsText = items
    .map((item, idx) => {
      const lineTotal = item.price * item.quantity;
      totalKes += lineTotal;
      return `${idx + 1}. *${item.name}* - ${item.quantity} ${item.unit} @ KES ${item.price} = KES ${lineTotal.toLocaleString()}`;
    })
    .join("\n");

  const poNumber = `PO-${Math.floor(100000 + Math.random() * 900000)}`;

  const message = `*HORECA GURUS B2B PURCHASE ORDER*
📄 *PO Number:* #${poNumber}
🏨 *Kitchen / Client:* ${restaurantName}
⏰ *Scheduled Delivery:* ${deliverySlot}
💳 *Payment Terms:* ${paymentTerm}

📋 *ORDERED LINE ITEMS:*
${lineItemsText}

💰 *ESTIMATED TOTAL:* KES ${totalKes.toLocaleString()}

📝 *Kitchen Notes / Butcher Prep:*
"${instructions}"

_Generated via HORECA Gurus Digital Kitchen Portal_`;

  // Pre-fill WhatsApp dispatch line (+254 722 000 000 or custom)
  const dispatchPhone = "254722841290";
  const url = `https://wa.me/${dispatchPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  showToast(`Purchase order #${poNumber} generated and sent to dispatch!`);
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
