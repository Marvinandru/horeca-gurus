-- =============================================================================
-- MAHALE B2B Marketplace & HoReCa Supply Engine
-- Initial Schema Migration: 20260911000001_initial_schema.sql
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 1. SUPPLIERS
CREATE TABLE IF NOT EXISTS suppliers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    badge TEXT,
    origin TEXT,
    rating NUMERIC(3, 2) DEFAULT 5.00,
    review_count INTEGER DEFAULT 0,
    delivery_sla TEXT,
    min_order TEXT,
    avatar TEXT,
    banner_color TEXT,
    specialties TEXT[],
    verified BOOLEAN DEFAULT TRUE,
    division TEXT DEFAULT 'both' CHECK (division IN ('local', 'export', 'both')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

DROP TRIGGER IF EXISTS set_suppliers_updated_at ON suppliers;
CREATE TRIGGER set_suppliers_updated_at
BEFORE UPDATE ON suppliers
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 2. PRODUCTS
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    sku TEXT UNIQUE,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    market_division TEXT NOT NULL DEFAULT 'local' CHECK (market_division IN ('local', 'export', 'both')),
    price NUMERIC(12, 2) NOT NULL DEFAULT 0,
    price_usd NUMERIC(12, 2),
    currency TEXT NOT NULL DEFAULT 'KES',
    unit TEXT NOT NULL DEFAULT 'kg',
    bulk_option TEXT,
    in_stock NUMERIC(12, 2) NOT NULL DEFAULT 0,
    moq NUMERIC(12, 2) DEFAULT 1,
    origin TEXT,
    grade TEXT,
    cold_storage TEXT,
    description TEXT,
    is_export_grade BOOLEAN DEFAULT FALSE,
    image TEXT,
    supplier_id TEXT REFERENCES suppliers(id) ON DELETE SET NULL,
    supplier_name TEXT,
    supplier_rating NUMERIC(3, 2),
    supplier_badge TEXT,
    supplier_location TEXT,
    supplier_sla TEXT,
    export_volume_moved NUMERIC(12, 2),
    export_volume_label TEXT,
    export_volume_rank INTEGER,
    export_seafood_rank INTEGER,
    export_volume_rank_badge TEXT,
    seasonal_timeline TEXT,
    freshness_guarantee TEXT,
    ocean_direct_badge TEXT,
    export_specs TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_market_division ON products(market_division);
CREATE INDEX IF NOT EXISTS idx_products_supplier_id ON products(supplier_id);
CREATE INDEX IF NOT EXISTS idx_products_export_rank ON products(export_volume_rank);

DROP TRIGGER IF EXISTS set_products_updated_at ON products;
CREATE TRIGGER set_products_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 3. LEADS
CREATE TABLE IF NOT EXISTS leads (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    area TEXT NOT NULL,
    region TEXT NOT NULL,
    exact_location TEXT,
    cuisine TEXT,
    decision_maker TEXT,
    phone TEXT,
    email TEXT,
    estimated_weekly_demand TEXT,
    what_we_can_supply JSONB,
    current_status TEXT DEFAULT 'New Lead',
    notes TEXT,
    best_contact_time TEXT,
    sales_angle TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_region ON leads(region);
CREATE INDEX IF NOT EXISTS idx_leads_area ON leads(area);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(current_status);

DROP TRIGGER IF EXISTS set_leads_updated_at ON leads;
CREATE TRIGGER set_leads_updated_at
BEFORE UPDATE ON leads
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 4. CRM_ACCOUNTS
CREATE TABLE IF NOT EXISTS crm_accounts (
    id TEXT PRIMARY KEY,
    restaurant_id TEXT REFERENCES leads(id) ON DELETE SET NULL,
    restaurant_name TEXT NOT NULL,
    area TEXT NOT NULL,
    region TEXT NOT NULL,
    contact_person TEXT,
    phone TEXT,
    account_stage TEXT DEFAULT 'Active Account',
    active_po_number TEXT,
    total_po_value NUMERIC(12, 2) DEFAULT 0,
    balance_in_po NUMERIC(12, 2) DEFAULT 0,
    revenue_generated NUMERIC(12, 2) DEFAULT 0,
    orders_completed INTEGER DEFAULT 0,
    cold_calls_logged INTEGER DEFAULT 0,
    last_interaction TEXT,
    payment_terms TEXT,
    credit_outstanding NUMERIC(12, 2) DEFAULT 0,
    receivables_pending NUMERIC(12, 2) DEFAULT 0,
    receivable_type TEXT,
    receivable_due_date TEXT,
    receivable_invoice_ref TEXT,
    receivable_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_crm_accounts_region ON crm_accounts(region);
CREATE INDEX IF NOT EXISTS idx_crm_accounts_stage ON crm_accounts(account_stage);
CREATE INDEX IF NOT EXISTS idx_crm_accounts_receivables ON crm_accounts(receivables_pending);

DROP TRIGGER IF EXISTS set_crm_accounts_updated_at ON crm_accounts;
CREATE TRIGGER set_crm_accounts_updated_at
BEFORE UPDATE ON crm_accounts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 5. CRM_CALL_LOGS
CREATE TABLE IF NOT EXISTS crm_call_logs (
    id TEXT PRIMARY KEY,
    account_id TEXT REFERENCES crm_accounts(id) ON DELETE CASCADE,
    restaurant_name TEXT NOT NULL,
    caller TEXT NOT NULL DEFAULT 'MAHALE Sales Desk',
    date_logged TEXT NOT NULL,
    call_type TEXT NOT NULL,
    contact_person TEXT,
    notes TEXT,
    outcome TEXT,
    follow_up_date TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_crm_call_logs_account ON crm_call_logs(account_id);

-- 6. ORDERS & ORDER_ITEMS
CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    order_number TEXT UNIQUE NOT NULL,
    account_id TEXT REFERENCES crm_accounts(id) ON DELETE SET NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT,
    delivery_address TEXT,
    delivery_date DATE,
    market_division TEXT DEFAULT 'local' CHECK (market_division IN ('local', 'export')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_transit', 'delivered', 'cancelled')),
    total_kes NUMERIC(12, 2) DEFAULT 0,
    total_usd NUMERIC(12, 2) DEFAULT 0,
    currency TEXT DEFAULT 'KES',
    items_count INTEGER DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);

DROP TRIGGER IF EXISTS set_orders_updated_at ON orders;
CREATE TRIGGER set_orders_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id TEXT REFERENCES products(id) ON DELETE SET NULL,
    product_name TEXT NOT NULL,
    product_image TEXT,
    quantity NUMERIC(12, 2) NOT NULL,
    unit TEXT NOT NULL,
    unit_price NUMERIC(12, 2) NOT NULL,
    total_price NUMERIC(12, 2) NOT NULL,
    currency TEXT DEFAULT 'KES'
);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- 7. ROW LEVEL SECURITY
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE crm_call_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    DROP POLICY IF EXISTS "Allow public read suppliers" ON suppliers;
    CREATE POLICY "Allow public read suppliers" ON suppliers FOR SELECT USING (true);
    
    DROP POLICY IF EXISTS "Allow public read products" ON products;
    CREATE POLICY "Allow public read products" ON products FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Allow public insert orders" ON orders;
    CREATE POLICY "Allow public insert orders" ON orders FOR INSERT WITH CHECK (true);
    DROP POLICY IF EXISTS "Allow public select orders" ON orders;
    CREATE POLICY "Allow public select orders" ON orders FOR SELECT USING (true);
    DROP POLICY IF EXISTS "Allow public update orders" ON orders;
    CREATE POLICY "Allow public update orders" ON orders FOR UPDATE USING (true);

    DROP POLICY IF EXISTS "Allow public insert order_items" ON order_items;
    CREATE POLICY "Allow public insert order_items" ON order_items FOR INSERT WITH CHECK (true);
    DROP POLICY IF EXISTS "Allow public select order_items" ON order_items;
    CREATE POLICY "Allow public select order_items" ON order_items FOR SELECT USING (true);

    DROP POLICY IF EXISTS "Allow public read leads" ON leads;
    CREATE POLICY "Allow public read leads" ON leads FOR SELECT USING (true);
    DROP POLICY IF EXISTS "Allow public insert leads" ON leads;
    CREATE POLICY "Allow public insert leads" ON leads FOR INSERT WITH CHECK (true);
    DROP POLICY IF EXISTS "Allow public update leads" ON leads;
    CREATE POLICY "Allow public update leads" ON leads FOR UPDATE USING (true);

    DROP POLICY IF EXISTS "Allow public read crm_accounts" ON crm_accounts;
    CREATE POLICY "Allow public read crm_accounts" ON crm_accounts FOR SELECT USING (true);
    DROP POLICY IF EXISTS "Allow public insert crm_accounts" ON crm_accounts;
    CREATE POLICY "Allow public insert crm_accounts" ON crm_accounts FOR INSERT WITH CHECK (true);
    DROP POLICY IF EXISTS "Allow public update crm_accounts" ON crm_accounts;
    CREATE POLICY "Allow public update crm_accounts" ON crm_accounts FOR UPDATE USING (true);

    DROP POLICY IF EXISTS "Allow public read crm_call_logs" ON crm_call_logs;
    CREATE POLICY "Allow public read crm_call_logs" ON crm_call_logs FOR SELECT USING (true);
    DROP POLICY IF EXISTS "Allow public insert crm_call_logs" ON crm_call_logs;
    CREATE POLICY "Allow public insert crm_call_logs" ON crm_call_logs FOR INSERT WITH CHECK (true);
EXCEPTION WHEN OTHERS THEN NULL;
END $$;
