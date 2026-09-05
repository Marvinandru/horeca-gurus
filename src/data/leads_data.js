/**
 * HORECA Gurus Nairobi Restaurant Leads Database & Supply Engine
 * Verified dining establishments categorized by geographic hub with tailored supply requirements.
 */

export const RESTAURANT_LEADS = [
  // --- 1. WESTLANDS & PARKLANDS CLUSTER ---
  {
    id: "lead-westlands-seven",
    name: "Seven Seafood & Grill",
    area: "Westlands",
    exactLocation: "ABC Place, Waiyaki Way, Westlands, Nairobi",
    cuisine: "Gourmet Ocean Seafood & Steakhouse",
    decisionMaker: "Executive Chef & Food Procurement Head",
    phone: "+254 737 776 677",
    email: "info@experienceseven.com",
    estimatedWeeklyDemand: "Spiny Lobster Tails (40kg), Jumbo Tiger Prawns U-10 (60kg), Coastal Red Snapper Fillets (50kg), Prime Ribeye Steaks (120kg), Shangi Potatoes (250kg)",
    whatWeCanSupply: {
      seafood: "Spiny Lobster Tails, U-10 Jumbo Tiger Prawns, Coastal Red Snapper, Yellowfin Tuna Loins",
      meat: "Dry-Aged Boran Prime Ribeye & Tenderloin cuts",
      produce: "Grade 1 Shangi Potatoes for triple-cooked chips, Salad Tomatoes, Fine Snow Peas"
    },
    currentStatus: "New Lead",
    notes: "Top seafood destination in Westlands. Requires wet-flake ice deliveries at 0°C before 6:00 AM.",
    bestContactTime: "10:30 AM - 11:30 AM (Before lunch rush)",
    salesAngle: "Direct overnight coastal flight logistics from Kilifi and Malindi landings with zero odor and ice slurry packing."
  },
  {
    id: "lead-westlands-inti",
    name: "INTI – A Nikkei Experience",
    area: "Westlands",
    exactLocation: "20th Floor, One Africa Place, Waiyaki Way, Westlands",
    cuisine: "Japanese - Peruvian Fine Dining & Rooftop",
    decisionMaker: "Head Sushi Chef & Procurement Manager",
    phone: "+254 734 845 845",
    email: "reservations@inti.co.ke",
    estimatedWeeklyDemand: "Yellowfin Tuna Sashimi Grade (50kg), Red Snapper (40kg), Calamari (30kg), Snow Peas (25kg), Hass Avocados (40kg), Microgreens",
    whatWeCanSupply: {
      seafood: "Sashimi-Grade Yellowfin Tuna, Coastal Red Snapper, Tiger Prawns, Tender Calamari",
      meat: "Aged Beef Medallions & Wagyu/Boran cross steaks",
      produce: "Export-grade Hass Avocados, Stringless Snow Peas, Cherry Tomatoes, Fresh Herbs"
    },
    currentStatus: "Cold Contacted",
    notes: "Requires strict sushi-grade quality standards, zero blemish avocados, and calibrated snow pea lengths.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Guaranteed 0°C cold chain Yellowfin Tuna and export-grade Hass avocados with high oil content."
  },
  {
    id: "lead-westlands-fogo",
    name: "Fogo Gaucho Churrascaria Westlands",
    area: "Westlands",
    exactLocation: "Viking House, Waiyaki Way, Westlands",
    cuisine: "Brazilian Rodizio Steakhouse",
    decisionMaker: "Master Carver & Purchasing Manager",
    phone: "+254 712 123 456",
    email: "westlands@fogogaucho.co.ke",
    estimatedWeeklyDemand: "Prime Beef Ribeye & Top Sirloin (450kg), Whole Goat/Mbuzi (150kg), Pork Belly, Salad Tomatoes (200kg), Red Onions (150kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia & Ocean Snapper for seafood buffet days",
      meat: "Whole Boran Steer Quarters, Prime Picanha cuts, Whole Mbuzi Carcasses (Kiamaiko)",
      produce: "Mwea Salad Tomatoes, Oloitokitok Red Onions, Salad Cucumbers, Shangi Potatoes"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Extremely high meat volume. Price stability and marbling consistency are their core drivers.",
    bestContactTime: "9:00 AM - 10:00 AM or 3:30 PM - 5:00 PM",
    salesAngle: "Direct pasture-fed Boran cattle carcasses portioned to churrasco specs at 12% below City Market retail."
  },
  {
    id: "lead-westlands-akira",
    name: "Akira Japanese & Pan-Asian",
    area: "Westlands",
    exactLocation: "Westgate Shopping Mall, 2nd Floor, Westlands",
    cuisine: "Modern Japanese Sushi & Robata Grill",
    decisionMaker: "Executive Chef",
    phone: "+254 799 444 888",
    email: "info@akirarestaurant.co.ke",
    estimatedWeeklyDemand: "Yellowfin Tuna (40kg), Tiger Prawns (30kg), Nile Perch Loins (30kg), Snow Peas (20kg), Spring Onions (20kg)",
    whatWeCanSupply: {
      seafood: "Sashimi-Grade Yellowfin Tuna, Cleaned Baby Squid/Calamari, Lake Nile Perch Loins",
      meat: "Prime Beef Tenderloin (Trimmed)",
      produce: "Highland Snow Peas, Mwea Salad Tomatoes, Spring Onions, Capsicums"
    },
    currentStatus: "New Lead",
    notes: "High weekend mall traffic. Requires delivery between 8:30 AM - 9:30 AM before mall security lockdown.",
    bestContactTime: "11:00 AM - 12:00 PM",
    salesAngle: "Fresh line-caught tuna and peeled tiger prawns delivered in temperature-logged cool boxes."
  },

  // --- 2. KILIMANI, HURLINGHAM & LAVINGTON CLUSTER ---
  {
    id: "lead-kilimani-mama-oliech",
    name: "Mama Oliech Restaurant",
    area: "Kilimani",
    exactLocation: "Marcus Garvey Road, Off Argwings Kodhek, Kilimani",
    cuisine: "Authentic Kenyan Lake Fish Specialists",
    decisionMaker: "General Manager & Kitchen Head",
    phone: "+254 722 795 628",
    email: "procurement@mamaoliech.com",
    estimatedWeeklyDemand: "Lake Victoria Whole Tilapia (700kg - 1,000kg/wk), Shangi Potatoes (300kg/wk), Tomatoes (200kg), Onions (150kg), Traditional Kienyeji Greens",
    whatWeCanSupply: {
      seafood: "Lake Victoria Wild Nile Tilapia (400-600g & 700g-1kg) delivered with bright red gills daily",
      meat: "Halal Stewing Beef and Kienyeji Chicken",
      produce: "Shangi Potatoes for deep frying, Mwea Cooking Tomatoes, Oloitokitok Red Bulb Onions"
    },
    currentStatus: "Negotiating Contract",
    notes: "The most famous fish restaurant in Kenya. Consumes massive crates of fresh Lake Victoria Tilapia daily.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Direct overnight lake transit from Kisumu Dunga Pier with zero ice melting on arrival at 5:00 AM."
  },
  {
    id: "lead-kilimani-ankole",
    name: "Ankole Grill Kilimani",
    area: "Kilimani",
    exactLocation: "Senteu Plaza, Galana Road & Argwings Kodhek Junction",
    cuisine: "African Continental Steakhouse",
    decisionMaker: "Executive Chef & Purchasing Desk",
    phone: "+254 710 202 020",
    email: "admin@ankole.co.ke",
    estimatedWeeklyDemand: "Prime Beef Ribeye & T-Bone (350kg), Lamb Chops (100kg), Mbuzi Chops, Shangi Potatoes (300kg), Garden Peas (50kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia Fillets, Red Snapper Loins for fish specials",
      meat: "21-Day Wet-Aged Boran Ribeye, Tenderloin, Lamb Racks, Goat Ribs",
      produce: "Nyandarua Shangi Potatoes, Kinangop Green Minji, Salad Tomatoes, Tri-color Capsicums"
    },
    currentStatus: "Active Ordering Client",
    notes: "Requires dry-aged beef cuts and precise thickness slicing. Prompt payment on 14-day terms.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Aged Halal beef cuts from grass-fed Kajiado steers vacuum-sealed in food-grade packs."
  },
  {
    id: "lead-kilimani-cjs",
    name: "CJ's Kilimani",
    area: "Kilimani",
    exactLocation: "Argwings Kodhek Road, Kilimani, Nairobi",
    cuisine: "High-Volume Continental, American & Cafe",
    decisionMaker: "Central Kitchen Procurement Manager",
    phone: "+254 792 000 022",
    email: "info@cjs.co.ke",
    estimatedWeeklyDemand: "Irish Potatoes (800kg/wk), Tomatoes (600kg/wk), Onions (500kg/wk), Chicken Breast (400kg/wk), Tilapia Fillet (120kg/wk)",
    whatWeCanSupply: {
      seafood: "Boneless Lake Victoria Tilapia Fillets, Calamari Rings",
      meat: "Lean Beef Mince for burger patties, Chicken Breast, Dressed Kienyeji Chicken",
      produce: "Grade 1 Shangi Potatoes (40 bags/wk), Mwea Anna F1 Tomatoes, Oloitokitok Red Onions"
    },
    currentStatus: "Negotiating Contract",
    notes: "Massive volume restaurant doing thousands of covers weekly. Demands guaranteed 6:00 AM drop 7 days a week.",
    bestContactTime: "8:30 AM - 10:00 AM",
    salesAngle: "Fixed wholesale price contracts that insulate CJ's from Marikiti rain spikes with buffer reserves."
  },
  {
    id: "lead-kilimani-karai",
    name: "Karai Swahili & Indian Cuisine",
    area: "Kilimani",
    exactLocation: "Kirichwa Road, Off Argwings Kodhek, Kilimani",
    cuisine: "Coastal Swahili Seafood & Indian Curries",
    decisionMaker: "Owner & Head Chef",
    phone: "+254 703 111 222",
    email: "info@karaicuisine.co.ke",
    estimatedWeeklyDemand: "Tiger Prawns (50kg), Kingfish Steaks (40kg), Red Snapper (40kg), Whole Mbuzi (80kg), Onions (120kg), Tomatoes (100kg)",
    whatWeCanSupply: {
      seafood: "Fresh Ocean Kingfish Steaks (Nguru), Jumbo Tiger Prawns, Coastal Red Snapper",
      meat: "Goat Meat / Mbuzi Carcasses cut for Biryani & Curries, Stewing Beef",
      produce: "Cooking Tomatoes for rich curry bases, Red Onions, Fresh Coriander/Dhania, Green Chillies"
    },
    currentStatus: "New Lead",
    notes: "Focuses on genuine coastal and Swahili flavors. Demands rich, oily Kingfish steaks that don't crumble in curries.",
    bestContactTime: "2:00 PM - 4:00 PM",
    salesAngle: "Authentic coastal Shimoni catch delivered cold without freezing, maintaining peak curry flavor."
  },

  // --- 3. NAIROBI CBD & UPPER HILL CLUSTER ---
  {
    id: "lead-cbd-mawimbi",
    name: "Mawimbi Seafood Restaurant & Café",
    area: "CBD",
    exactLocation: "Kenyatta Avenue & Monrovia Street Junction, Nairobi CBD",
    cuisine: "Luxury Award-Winning Fine Seafood",
    decisionMaker: "Executive Seafood Chef & General Manager",
    phone: "+254 758 956 861",
    email: "reservations@mawimbirestaurant.com",
    estimatedWeeklyDemand: "Rock Lobster Tails (60kg), Jumbo Tiger Prawns (80kg), Sashimi Tuna (50kg), Ocean Calamari (40kg), Mud Crabs (30kg), Snow Peas (30kg)",
    whatWeCanSupply: {
      seafood: "Spiny Rock Lobster Tails, U-10 Jumbo Prawns, Yellowfin Tuna Loins, Live Mud Crabs, Fresh Octopus",
      meat: "Prime Beef Tenderloin for Surf & Turf platters",
      produce: "Export-grade Snow Peas, Fine French Beans, Hass Avocados, Gourmet Salad Greens"
    },
    currentStatus: "Cold Contacted",
    notes: "Kenya's most celebrated luxury seafood dining room. Demands pristine restaurant-ready seafood with certificate of origin.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Direct daily procurement from Malindi and Kilifi fishermen cooperatives with strict temperature verification."
  },
  {
    id: "lead-cbd-serena",
    name: "Nairobi Serena Hotel (Café Maghreb)",
    area: "CBD",
    exactLocation: "Procession Way, Kenyatta Avenue, Nairobi CBD",
    cuisine: "5-Star Hotel Buffet, Banqueting & North African",
    decisionMaker: "Director of Food & Beverage & Executive Head Chef",
    phone: "+254 20 282 2000",
    email: "nairobi@serenahotels.com",
    estimatedWeeklyDemand: "Boran Steer Cuts (400kg), Whole Tilapia (200kg), Red Snapper (100kg), Potatoes (450kg), Tomatoes (350kg), Onions (300kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia, Coastal Red Snapper Fillets, Ocean Prawns",
      meat: "Halal Steer Beef Carcass, Aged Sirloin, Whole Goat Carcasses",
      produce: "Nyandarua Shangi Potatoes, Mwea Tomatoes, Kinangop Sweet Minji, Fine Beans"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Strict HACCP certification, temperature tracking on arrival, requires certified Halal meat slaughterhouse paperwork.",
    bestContactTime: "9:30 AM - 11:00 AM",
    salesAngle: "Veterinary-certified cold chain compliance with full traceability back to farm and lake landing site."
  },
  {
    id: "lead-cbd-tamarind",
    name: "Tamarind Restaurant CBD",
    area: "CBD",
    exactLocation: "National Bank Building, Harambee Avenue, Nairobi CBD",
    cuisine: "Legendary Kenyan Seafood Pioneers",
    decisionMaker: "Group Seafood Buyer & Kitchen Supervisor",
    phone: "+254 733 217 990",
    email: "central.reservations@tamarind.co.ke",
    estimatedWeeklyDemand: "Lake Victoria Tilapia (300kg), Nile Perch Loins (250kg), Coastal Red Snapper (150kg), Tiger Prawns (80kg), Calamari (60kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia & Nile Perch (Mbuta), Red Snapper, Lobster, Jumbo Prawns, Octopus",
      meat: "Aged Beef Steaks and Trimmed Beef Fillets",
      produce: "French Beans, Snow Peas, Salad Tomatoes, Shangi Potatoes"
    },
    currentStatus: "Negotiating Contract",
    notes: "Kenya's most renowned seafood brand. Zero tolerance for thawed-and-refrozen fish. Requires ice packaging with melt drains.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Night landing Lake Victoria catch transported with shaved ice, delivered to kitchen door at 5:30 AM."
  },

  // --- 4. GIGIRI, RUNDA & VILLAGE MARKET CLUSTER ---
  {
    id: "lead-gigiri-local-grill",
    name: "The Local Grill",
    area: "Gigiri",
    exactLocation: "Village Market, New Wing, Limuru Road, Gigiri, Nairobi",
    cuisine: "Boutique Steakhouse & Surf-and-Turf",
    decisionMaker: "Executive Grill Master & General Manager",
    phone: "+254 700 334 455",
    email: "info@thelocalgrill.co.ke",
    estimatedWeeklyDemand: "Prime Beef Ribeye & T-Bone (250kg), Jumbo Tiger Prawns (50kg), Lobster Tails (30kg), Shangi Potatoes (200kg), Salad Greens",
    whatWeCanSupply: {
      seafood: "U-10 Jumbo Tiger Prawns, Rock Lobster Tails for premium surf-and-turf",
      meat: "Dry-Aged Boran Prime Ribeye, T-Bone, Striploin, Lamb Racks",
      produce: "Hand-picked Jumbo Shangi Potatoes for triple-cooked steak chips, Gourmet Greens"
    },
    currentStatus: "New Lead",
    notes: "Serves diplomatic and expat community (UN Gigiri & US Embassy). Premium quality is non-negotiable.",
    bestContactTime: "11:00 AM - 12:30 PM",
    salesAngle: "Artisanal dry-aged beef cuts paired with coastal jumbo prawns on single weekly invoice."
  },
  {
    id: "lead-gigiri-ocean-basket",
    name: "Ocean Basket (Village Market)",
    area: "Gigiri",
    exactLocation: "Food Court Wing, Village Market, Gigiri, Nairobi",
    cuisine: "Mediterranean Family Seafood",
    decisionMaker: "Store Manager & Kitchen Lead",
    phone: "+254 711 889 900",
    email: "vm@oceanbasket.co.ke",
    estimatedWeeklyDemand: "Tiger Prawns (120kg), Calamari Rings (100kg), White Fish Fillets (150kg), Shangi Potatoes (400kg), Lemon & Garlic",
    whatWeCanSupply: {
      seafood: "Cleaned Calamari & Squid Rings, Jumbo Tiger Prawns, Nile Perch Loins",
      meat: "Light poultry selections",
      produce: "Shangi Potatoes (10 bags/wk for rustic chips), Fresh Salad Tomatoes, Lemons, Onions"
    },
    currentStatus: "Cold Contacted",
    notes: "Very high volume seafood platters. Needs consistency in squid ring calibration and fry potatoes.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Standardized weight calibration on calamari and prawns to minimize kitchen portioning loss."
  },

  // --- 5. KAREN & LANGATA CLUSTER ---
  {
    id: "lead-karen-carnivore",
    name: "Carnivore Restaurant",
    area: "Karen",
    exactLocation: "Langata Road, Nairobi",
    cuisine: "Legendary Open-Pit Charcoal Roast & Nyama Choma",
    decisionMaker: "Master Carver & General Procurement Manager",
    phone: "+254 722 204 647",
    email: "reservations.carnivore@tamarind.co.ke",
    estimatedWeeklyDemand: "Whole Goat/Mbuzi (800kg/wk), Prime Beef Topsides & Ribs (1,200kg/wk), Pork Ribs (300kg), Shangi Potatoes (500kg)",
    whatWeCanSupply: {
      seafood: "Fresh Lake Tilapia for seafood a la carte orders",
      meat: "Daily delivery of 14-18kg Mbuzi Carcasses, Boran Steer Primal Cuts, Pork Ribs",
      produce: "Shangi Potatoes for jacket and roasted potatoes, Cooking Tomatoes, Onions"
    },
    currentStatus: "Active Ordering Client",
    notes: "The largest single meat buyer in Kenya. Demands precise carcass weights (14-18kg goats) for even pit roasting.",
    bestContactTime: "9:00 AM - 11:00 AM",
    salesAngle: "Direct abattoir contract from Kiamaiko & Athi River with veterinary inspection stamp on every carcass."
  },
  {
    id: "lead-karen-talisman",
    name: "The Talisman Restaurant",
    area: "Karen",
    exactLocation: "320 Ngong Road, Karen, Nairobi",
    cuisine: "Eclectic Gastropub, Sushi, Continental & Garden Dining",
    decisionMaker: "Executive Chef & Operations Director",
    phone: "+254 705 999 997",
    email: "eat@thetalismanrestaurant.com",
    estimatedWeeklyDemand: "Fresh Tilapia Fillets (100kg), Yellowfin Tuna (40kg), Coastal Red Snapper (50kg), Beef Steaks (150kg), Snow Peas (40kg), Minji (50kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia Fillets, Yellowfin Tuna for sushi bar, Ocean Red Snapper, Tiger Prawns",
      meat: "Prime Boran Beef Fillets, Herb-Fed Lamb Racks",
      produce: "Organic Salad Tomatoes, Kinangop Snow Peas, Fresh Minji, Exotic Greens"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "High table-turn restaurant with discerning clientele. Demands pristine visual appeal on seafood and greens.",
    bestContactTime: "3:00 PM - 5:00 PM",
    salesAngle: "Direct morning drops from Kinangop and Lake Victoria with customized kitchen prep packaging."
  }
];

export const SALES_SCRIPTS = {
  coldCall: {
    title: "Head Chef / F&B Manager Telephone Script (2-Minute Pitch)",
    hook: "Good morning Chef [Name], this is [Your Name] from HORECA Gurus Supply. I know your kitchen is busy prepping for lunch, so I'll take just 60 seconds.",
    body: "We currently supply fresh farm produce, aged Boran beef, coastal seafood (lobster, tiger prawns, red snapper), and Lake Victoria fish directly to premier kitchens like Seven Seafood, Ankole Grill, and Tamarind. We do 5:30 AM early morning kitchen deliveries in temperature-controlled vans, straight from our cold-chain packhouse.",
    valueProp: "Right now, market rates for Shangi potatoes are hitting KES 80/kg and seafood prices fluctuate wildly at City Market, but we fix your wholesale prices on 30-day contracts—and we guarantee Grade 1 sorting with zero kitchen rejection.",
    callToAction: "I'd love to drop off a complimentary Chef's Tasting Basket this Thursday morning at 6:00 AM—with 10kg of Nyandarua potatoes, 5kg Grade 1 Mwea salad tomatoes, and fresh ocean prawns or Lake Tilapia fillets for you to test during prep. Which morning works best for your receiving staff?"
  },
  whatsappPitch: {
    title: "Chef WhatsApp Introduction & Digital Catalog Link",
    template: `Hello Chef {chefName}! 👋 Hope service went great today.

This is {salesRepName} from *HORECA Gurus Supply Kenya*. We deliver farm-fresh produce, coastal seafood, Halal aged meats, and daily Lake Victoria catch direct to your kitchen door before 7:00 AM.

🔥 *This Week's Chef Wholesale Highlights:*
🥔 Grade 1 Shangi Potatoes (Nyandarua) - KES {potatoPrice}/kg
🍅 Anna F1 Firm Salad Tomatoes (Mwea) - KES {tomatoPrice}/kg
🧅 Bombay Red Onions (Oloitokitok) - KES {onionPrice}/kg
🫛 Crisp Snow Peas (Kinangop) - KES {peasPrice}/kg
🦐 Jumbo Ocean Tiger Prawns (U-10) - KES {prawnsPrice}/kg
🐟 Fresh Lake Victoria Tilapia Fillet - KES {fishPrice}/kg
🥩 Aged Boran Beef Tenderloin - KES {beefPrice}/kg

📲 *Browse Our Live Kitchen Catalog & Order Online:*
{portalLink}

🎁 *Can we send your kitchen a free Chef's Sample Basket tomorrow morning?* Just reply with your delivery address or tap the link to test an order!`
  }
};
