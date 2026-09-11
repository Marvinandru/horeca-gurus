import fs from "fs";
import path from "path";
import { SUPPLIERS, DEFAULT_INVENTORY } from "../src/data/default_inventory.js";
import { RESTAURANT_LEADS, INITIAL_CRM_ACCOUNTS, INITIAL_CALL_LOGS } from "../src/data/leads_data.js";

const PROJECT_REF = "uhaiqfgantasoeaghbco";
// Read token from environment variable or local MCP configuration
function getAccessToken() {
  if (process.env.SUPABASE_ACCESS_TOKEN) return process.env.SUPABASE_ACCESS_TOKEN;
  try {
    const home = process.env.HOME || process.env.USERPROFILE;
    const cfgPath = path.join(home, ".gemini", "antigravity", "mcp_config.json");
    if (fs.existsSync(cfgPath)) {
      const cfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"));
      const auth = cfg.mcpServers?.supabase?.headers?.Authorization;
      if (auth && auth.startsWith("Bearer ")) return auth.replace("Bearer ", "").trim();
    }
  } catch (e) {}
  throw new Error("SUPABASE_ACCESS_TOKEN is required. Set env var or configure in mcp_config.json");
}

const TOKEN = getAccessToken();

async function query(sql) {
  const res = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: sql })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return await res.json();
}

function escapeSql(val) {
  if (val === null || val === undefined) return "NULL";
  if (typeof val === "boolean") return val ? "TRUE" : "FALSE";
  if (typeof val === "number") return val;
  if (Array.isArray(val)) {
    const escapedArr = val.map(item => `"${item.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`).join(",");
    return `'{${escapedArr.replace(/'/g, "''")}}'`;
  }
  if (typeof val === "object") {
    return `'${JSON.stringify(val).replace(/'/g, "''")}'::jsonb`;
  }
  return `'${String(val).replace(/'/g, "''")}'`;
}

async function seed() {
  console.log("Seeding Suppliers...");
  const supplierRows = SUPPLIERS.map(s => {
    return `(${escapeSql(s.id)}, ${escapeSql(s.name)}, ${escapeSql(s.badge)}, ${escapeSql(s.origin)}, ${escapeSql(s.rating)}, ${escapeSql(s.reviewCount)}, ${escapeSql(s.deliverySla)}, ${escapeSql(s.minOrder)}, ${escapeSql(s.avatar)}, ${escapeSql(s.bannerColor)}, ${escapeSql(s.specialties)}, ${escapeSql(s.verified)}, ${escapeSql(s.division)})`;
  }).join(",\n");

  await query(`
    INSERT INTO suppliers (id, name, badge, origin, rating, review_count, delivery_sla, min_order, avatar, banner_color, specialties, verified, division)
    VALUES ${supplierRows}
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      badge = EXCLUDED.badge,
      origin = EXCLUDED.origin,
      rating = EXCLUDED.rating,
      review_count = EXCLUDED.review_count,
      delivery_sla = EXCLUDED.delivery_sla,
      min_order = EXCLUDED.min_order,
      avatar = EXCLUDED.avatar,
      banner_color = EXCLUDED.banner_color,
      specialties = EXCLUDED.specialties,
      verified = EXCLUDED.verified,
      division = EXCLUDED.division;
  `);
  console.log(`✅ ${SUPPLIERS.length} suppliers seeded.`);

  console.log("Seeding Products...");
  const productRows = DEFAULT_INVENTORY.map(p => {
    return `(${escapeSql(p.id)}, ${escapeSql(p.sku)}, ${escapeSql(p.name)}, ${escapeSql(p.category)}, ${escapeSql(p.marketDivision)}, ${escapeSql(p.price)}, ${escapeSql(p.priceUsd)}, ${escapeSql(p.currency || "KES")}, ${escapeSql(p.unit)}, ${escapeSql(p.bulkOption)}, ${escapeSql(p.inStock)}, ${escapeSql(p.moq)}, ${escapeSql(p.origin)}, ${escapeSql(p.grade)}, ${escapeSql(p.coldStorage)}, ${escapeSql(p.description)}, ${escapeSql(p.isExportGrade)}, ${escapeSql(p.image)}, ${escapeSql(p.supplierId)}, ${escapeSql(p.supplierName)}, ${escapeSql(p.supplierRating)}, ${escapeSql(p.supplierBadge)}, ${escapeSql(p.supplierLocation)}, ${escapeSql(p.supplierSla)}, ${escapeSql(p.exportVolumeMoved)}, ${escapeSql(p.exportVolumeLabel)}, ${escapeSql(p.exportVolumeRank)}, ${escapeSql(p.exportSeafoodRank)}, ${escapeSql(p.exportVolumeRankBadge)}, ${escapeSql(p.seasonalTimeline)}, ${escapeSql(p.freshnessGuarantee)}, ${escapeSql(p.oceanDirectBadge)}, ${escapeSql(p.exportSpecs)})`;
  }).join(",\n");

  await query(`
    INSERT INTO products (id, sku, name, category, market_division, price, price_usd, currency, unit, bulk_option, in_stock, moq, origin, grade, cold_storage, description, is_export_grade, image, supplier_id, supplier_name, supplier_rating, supplier_badge, supplier_location, supplier_sla, export_volume_moved, export_volume_label, export_volume_rank, export_seafood_rank, export_volume_rank_badge, seasonal_timeline, freshness_guarantee, ocean_direct_badge, export_specs)
    VALUES ${productRows}
    ON CONFLICT (id) DO UPDATE SET
      sku = EXCLUDED.sku,
      name = EXCLUDED.name,
      category = EXCLUDED.category,
      market_division = EXCLUDED.market_division,
      price = EXCLUDED.price,
      price_usd = EXCLUDED.price_usd,
      currency = EXCLUDED.currency,
      unit = EXCLUDED.unit,
      bulk_option = EXCLUDED.bulk_option,
      in_stock = EXCLUDED.in_stock,
      moq = EXCLUDED.moq,
      origin = EXCLUDED.origin,
      grade = EXCLUDED.grade,
      cold_storage = EXCLUDED.cold_storage,
      description = EXCLUDED.description,
      is_export_grade = EXCLUDED.is_export_grade,
      image = EXCLUDED.image,
      supplier_id = EXCLUDED.supplier_id,
      supplier_name = EXCLUDED.supplier_name,
      supplier_rating = EXCLUDED.supplier_rating,
      supplier_badge = EXCLUDED.supplier_badge,
      supplier_location = EXCLUDED.supplier_location,
      supplier_sla = EXCLUDED.supplier_sla,
      export_volume_moved = EXCLUDED.export_volume_moved,
      export_volume_label = EXCLUDED.export_volume_label,
      export_volume_rank = EXCLUDED.export_volume_rank,
      export_seafood_rank = EXCLUDED.export_seafood_rank,
      export_volume_rank_badge = EXCLUDED.export_volume_rank_badge,
      seasonal_timeline = EXCLUDED.seasonal_timeline,
      freshness_guarantee = EXCLUDED.freshness_guarantee,
      ocean_direct_badge = EXCLUDED.ocean_direct_badge,
      export_specs = EXCLUDED.export_specs;
  `);
  console.log(`✅ ${DEFAULT_INVENTORY.length} products seeded.`);

  console.log("Seeding Leads...");
  const leadRows = RESTAURANT_LEADS.map(l => {
    return `(${escapeSql(l.id)}, ${escapeSql(l.name)}, ${escapeSql(l.area)}, ${escapeSql(l.region)}, ${escapeSql(l.exactLocation)}, ${escapeSql(l.cuisine)}, ${escapeSql(l.decisionMaker)}, ${escapeSql(l.phone)}, ${escapeSql(l.email)}, ${escapeSql(l.estimatedWeeklyDemand)}, ${escapeSql(l.whatWeCanSupply)}, ${escapeSql(l.currentStatus)}, ${escapeSql(l.notes)}, ${escapeSql(l.bestContactTime)}, ${escapeSql(l.salesAngle)})`;
  }).join(",\n");

  await query(`
    INSERT INTO leads (id, name, area, region, exact_location, cuisine, decision_maker, phone, email, estimated_weekly_demand, what_we_can_supply, current_status, notes, best_contact_time, sales_angle)
    VALUES ${leadRows}
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      area = EXCLUDED.area,
      region = EXCLUDED.region,
      exact_location = EXCLUDED.exact_location,
      cuisine = EXCLUDED.cuisine,
      decision_maker = EXCLUDED.decision_maker,
      phone = EXCLUDED.phone,
      email = EXCLUDED.email,
      estimated_weekly_demand = EXCLUDED.estimated_weekly_demand,
      what_we_can_supply = EXCLUDED.what_we_can_supply,
      current_status = EXCLUDED.current_status,
      notes = EXCLUDED.notes,
      best_contact_time = EXCLUDED.best_contact_time,
      sales_angle = EXCLUDED.sales_angle;
  `);
  console.log(`✅ ${RESTAURANT_LEADS.length} leads seeded.`);

  console.log("Seeding CRM Accounts...");
  const crmRows = INITIAL_CRM_ACCOUNTS.map(a => {
    return `(${escapeSql(a.id)}, ${escapeSql(a.restaurantId)}, ${escapeSql(a.restaurantName)}, ${escapeSql(a.area)}, ${escapeSql(a.region)}, ${escapeSql(a.contactPerson)}, ${escapeSql(a.phone)}, ${escapeSql(a.accountStage)}, ${escapeSql(a.activePoNumber)}, ${escapeSql(a.totalPoValue)}, ${escapeSql(a.balanceInPo)}, ${escapeSql(a.revenueGenerated)}, ${escapeSql(a.ordersCompleted)}, ${escapeSql(a.coldCallsLogged)}, ${escapeSql(a.lastInteraction)}, ${escapeSql(a.paymentTerms)}, ${escapeSql(a.creditOutstanding)}, ${escapeSql(a.receivablesPending)}, ${escapeSql(a.receivableType)}, ${escapeSql(a.receivableDueDate)}, ${escapeSql(a.receivableInvoiceRef)}, ${escapeSql(a.receivableNotes)})`;
  }).join(",\n");

  await query(`
    INSERT INTO crm_accounts (id, restaurant_id, restaurant_name, area, region, contact_person, phone, account_stage, active_po_number, total_po_value, balance_in_po, revenue_generated, orders_completed, cold_calls_logged, last_interaction, payment_terms, credit_outstanding, receivables_pending, receivable_type, receivable_due_date, receivable_invoice_ref, receivable_notes)
    VALUES ${crmRows}
    ON CONFLICT (id) DO UPDATE SET
      restaurant_id = EXCLUDED.restaurant_id,
      restaurant_name = EXCLUDED.restaurant_name,
      area = EXCLUDED.area,
      region = EXCLUDED.region,
      contact_person = EXCLUDED.contact_person,
      phone = EXCLUDED.phone,
      account_stage = EXCLUDED.account_stage,
      active_po_number = EXCLUDED.active_po_number,
      total_po_value = EXCLUDED.total_po_value,
      balance_in_po = EXCLUDED.balance_in_po,
      revenue_generated = EXCLUDED.revenue_generated,
      orders_completed = EXCLUDED.orders_completed,
      cold_calls_logged = EXCLUDED.cold_calls_logged,
      last_interaction = EXCLUDED.last_interaction,
      payment_terms = EXCLUDED.payment_terms,
      credit_outstanding = EXCLUDED.credit_outstanding,
      receivables_pending = EXCLUDED.receivables_pending,
      receivable_type = EXCLUDED.receivable_type,
      receivable_due_date = EXCLUDED.receivable_due_date,
      receivable_invoice_ref = EXCLUDED.receivable_invoice_ref,
      receivable_notes = EXCLUDED.receivable_notes;
  `);
  console.log(`✅ ${INITIAL_CRM_ACCOUNTS.length} CRM accounts seeded.`);

  console.log("Seeding Call Logs...");
  const callRows = INITIAL_CALL_LOGS.map(c => {
    return `(${escapeSql(c.id)}, ${escapeSql(c.restaurantName)}, ${escapeSql(c.caller)}, ${escapeSql(c.date)}, ${escapeSql(c.type)}, ${escapeSql(c.contactPerson)}, ${escapeSql(c.notes)}, ${escapeSql(c.outcome)}, ${escapeSql(c.followUpDate)})`;
  }).join(",\n");

  await query(`
    INSERT INTO crm_call_logs (id, restaurant_name, caller, date_logged, call_type, contact_person, notes, outcome, follow_up_date)
    VALUES ${callRows}
    ON CONFLICT (id) DO UPDATE SET
      restaurant_name = EXCLUDED.restaurant_name,
      caller = EXCLUDED.caller,
      date_logged = EXCLUDED.date_logged,
      call_type = EXCLUDED.call_type,
      contact_person = EXCLUDED.contact_person,
      notes = EXCLUDED.notes,
      outcome = EXCLUDED.outcome,
      follow_up_date = EXCLUDED.follow_up_date;
  `);
  console.log(`✅ ${INITIAL_CALL_LOGS.length} call logs seeded.`);
}

seed().then(() => {
  console.log("🎉 All data seeded successfully!");
}).catch(err => {
  console.error("Seeding failed:", err);
  process.exit(1);
});