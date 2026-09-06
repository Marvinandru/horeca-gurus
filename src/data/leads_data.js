/**
 * MAHALE Distributors Kenya HoReCa Leads Database & Nationwide B2B CRM Engine
 * Comprehensive database of verified dining establishments across Nairobi's prime dining corridors,
 * accompanied by active client accounts, sales performance metrics, PO balances, and cold-call logs.
 */

export const RESTAURANT_LEADS = [
  // =========================================================================
  // 1. WESTLANDS & PARKLANDS CLUSTER
  // =========================================================================
  {
    id: "lead-westlands-seven",
    name: "Seven Seafood & Grill",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "ABC Place, Waiyaki Way, Westlands, Nairobi",
    cuisine: "Gourmet Ocean Seafood & Premium Steakhouse",
    decisionMaker: "Executive Chef Kiran & Food Procurement Head",
    phone: "+254 737 776 677",
    email: "procurement@experienceseven.com",
    estimatedWeeklyDemand: "Spiny Lobster Tails (40kg), Jumbo Tiger Prawns U-10 (60kg), Coastal Red Snapper Fillets (50kg), Prime Ribeye Steaks (120kg), Shangi Potatoes (250kg)",
    whatWeCanSupply: {
      seafood: "Spiny Lobster Tails, U-10 Jumbo Tiger Prawns, Coastal Red Snapper, Yellowfin Tuna Loins",
      meat: "Dry-Aged Boran Prime Ribeye & Tenderloin cuts",
      produce: "Grade 1 Shangi Potatoes for triple-cooked chips, Salad Tomatoes, Fine Snow Peas"
    },
    currentStatus: "Active Ordering Client",
    notes: "Top seafood destination in Westlands. Requires wet-flake ice deliveries at 0°C before 6:00 AM.",
    bestContactTime: "10:30 AM - 11:30 AM (Before lunch rush)",
    salesAngle: "Direct overnight coastal flight logistics from Kilifi and Malindi landings with zero odor and ice slurry packing."
  },
  {
    id: "lead-westlands-inti",
    name: "INTI – A Nikkei Experience",
    area: "Westlands",
    region: "Nairobi",
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
    currentStatus: "Sample Basket Delivered",
    notes: "Requires strict sushi-grade quality standards, zero blemish avocados, and calibrated snow pea lengths.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Guaranteed 0°C cold chain Yellowfin Tuna and export-grade Hass avocados with high oil content."
  },
  {
    id: "lead-westlands-fogo",
    name: "Fogo Gaucho Churrascaria Westlands",
    area: "Westlands",
    region: "Nairobi",
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
    currentStatus: "Active Ordering Client",
    notes: "Extremely high meat volume. Price stability and marbling consistency are their core drivers.",
    bestContactTime: "9:00 AM - 10:00 AM or 3:30 PM - 5:00 PM",
    salesAngle: "Direct pasture-fed Boran cattle carcasses portioned to churrasco specs at 12% below City Market retail."
  },
  {
    id: "lead-westlands-akira",
    name: "Akira Japanese & Pan-Asian",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "Westgate Shopping Mall, 2nd Floor, Westlands",
    cuisine: "Modern Japanese Sushi & Robata Grill",
    decisionMaker: "Executive Chef Chen & Store General Manager",
    phone: "+254 799 444 888",
    email: "procurement@akirarestaurant.co.ke",
    estimatedWeeklyDemand: "Yellowfin Tuna (40kg), Tiger Prawns (30kg), Nile Perch Loins (30kg), Snow Peas (20kg), Spring Onions (20kg)",
    whatWeCanSupply: {
      seafood: "Sashimi-Grade Yellowfin Tuna, Cleaned Baby Squid/Calamari, Lake Nile Perch Loins",
      meat: "Prime Beef Tenderloin (Trimmed)",
      produce: "Highland Snow Peas, Mwea Salad Tomatoes, Spring Onions, Capsicums"
    },
    currentStatus: "Cold Contacted",
    notes: "High weekend mall traffic. Requires delivery between 8:30 AM - 9:30 AM before mall security lockdown.",
    bestContactTime: "11:00 AM - 12:00 PM",
    salesAngle: "Fresh line-caught tuna and peeled tiger prawns delivered in temperature-logged cool boxes."
  },
  {
    id: "lead-westlands-about-thyme",
    name: "About Thyme Restaurant",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "Eldama Ravine Road, Off Peponi Road, Westlands",
    cuisine: "Eclectic European Garden Bistro & Brunch",
    decisionMaker: "Owner-Chef & Kitchen Operations Lead",
    phone: "+254 721 850 026",
    email: "admin@about-thyme.com",
    estimatedWeeklyDemand: "Fresh Herbs (Basil, Rosemary, Mint), Shangi Potatoes (150kg), Red Snapper (30kg), Tenderloin (40kg), Snow Peas (15kg)",
    whatWeCanSupply: {
      seafood: "Coastal Red Snapper Fillets & Ocean Tiger Prawns",
      meat: "Trimmed Boran Beef Tenderloin & Herb-Fed Lamb Cuts",
      produce: "Kinangop Snow Peas, Fresh Garden Minji, Hydroponic Herbs, Salad Tomatoes"
    },
    currentStatus: "Cold Contacted",
    notes: "Popular rustic garden dining spot with loyal weekend brunch patronage. Focuses on farm freshness.",
    bestContactTime: "2:30 PM - 4:00 PM",
    salesAngle: "Same-day morning delivery of crisp garden herbs and Kinangop snow peas directly to kitchen."
  },
  {
    id: "lead-westlands-urban-eatery",
    name: "Urban Eatery",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "Ground Floor, PwC Tower, Delta Corner Estate, Chiromo Rd",
    cuisine: "Multi-Kitchen Concept (Asian, Mexican, Seafood, Grill)",
    decisionMaker: "Central Executive Chef & Purchasing Director",
    phone: "+254 790 999 149",
    email: "info@urbaneatery.co.ke",
    estimatedWeeklyDemand: "Tilapia Fillets (80kg), Beef Ribeye (100kg), Red Onions (120kg), Tomatoes (150kg), Potatoes (300kg)",
    whatWeCanSupply: {
      seafood: "Whole Lake Tilapia & Cleaned Calamari",
      meat: "Prime Boran Chuck, Ribeye, and Halal Chicken",
      produce: "Oloitokitok Onions, Mwea Tomatoes, Nyandarua Potatoes"
    },
    currentStatus: "Negotiating Contract",
    notes: "Multiple internal kitchen brands under one roof; high aggregate purchasing volume.",
    bestContactTime: "10:00 AM - 11:00 AM",
    salesAngle: "Consolidated single-truck early delivery covering all four culinary stations at corporate discount."
  },
  {
    id: "lead-westlands-mercado",
    name: "Mercado - Mexican Kitchen & Cantina",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "Kenrail Towers, Terrace Floor, South Wing, Ring Rd Parklands",
    cuisine: "Authentic Mexican & Tequila Bar",
    decisionMaker: "Head Chef & Bar Director",
    phone: "+254 748 266 266",
    email: "hola@mercado.co.ke",
    estimatedWeeklyDemand: "Hass Avocados (100kg/wk for guacamole), Limes (50kg), Fresh Coriander, Red Onions (80kg), Flank Steak (60kg), Tiger Prawns (30kg)",
    whatWeCanSupply: {
      seafood: "Tiger Prawns and Red Snapper for Baja fish tacos",
      meat: "Prime Flank and Skirt steaks for fajitas and carne asada",
      produce: "High-oil Murang'a Hass Avocados, Fresh Limes, Birdseye Chillies, Cilantro"
    },
    currentStatus: "New Lead",
    notes: "Avocados must be perfectly ripe without black stringiness. Guacamole is their top seller.",
    bestContactTime: "11:30 AM - 12:30 PM",
    salesAngle: "Guaranteed ripeness-calibrated Hass avocados and coastal limes delivered twice weekly."
  },
  {
    id: "lead-westlands-open-house",
    name: "Open House Restaurant",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "Gallant Mall, Parklands Road, Nairobi",
    cuisine: "Northern Indian Fine Dining & Tandoor",
    decisionMaker: "Executive Tandoor Chef & General Manager",
    phone: "+254 727 673 683",
    email: "info@openhouse.co.ke",
    estimatedWeeklyDemand: "Whole Halal Chicken & Bone-in Goat (200kg), Red Onions (150kg), Tomatoes (120kg), Ginger & Garlic (30kg), Paneer/Milk",
    whatWeCanSupply: {
      seafood: "Tiger Prawns and Lake Tilapia for curry specials",
      meat: "Halal Broiler & Kienyeji Chicken, Kiamaiko Goat Chops and Carcass",
      produce: "Grade 1 Oloitokitok Red Onions, Mwea Plum Tomatoes for gravies"
    },
    currentStatus: "Cold Contacted",
    notes: "Requires deep red onions and acidic plum tomatoes to produce rich tandoori gravies.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Direct abattoir-stamped Halal goat meat and wholesale sacks of dry red onions."
  },
  {
    id: "lead-westlands-kempinski",
    name: "Villa Rosa Kempinski (Lucca & Tambourin)",
    area: "Westlands",
    region: "Nairobi",
    exactLocation: "Chiromo Road, Westlands, Nairobi",
    cuisine: "5-Star Luxury Italian & Levantine Dining",
    decisionMaker: "Executive Sous Chef & Director of Procurement",
    phone: "+254 703 049 000",
    email: "procurement.nairobi@kempinski.com",
    estimatedWeeklyDemand: "Sea Bass/Snapper (80kg), Lobster (40kg), Beef Tenderloin (150kg), Lamb Shanks (60kg), San Marzano type Plum Tomatoes (100kg), Snow Peas (30kg)",
    whatWeCanSupply: {
      seafood: "Daily Ocean Catch: Spiny Lobster, Red Snapper, Yellowfin Tuna, Calamari",
      meat: "Certified Aged Boran Steer Primal Cuts, Halal Lamb Racks",
      produce: "Firm Salad Tomatoes, Snow Peas, Sugar Snaps, Baby Spinach"
    },
    currentStatus: "Active Ordering Client",
    notes: "5-star international hotel standard. Strict receiving bay temperature logs and HACCP protocol.",
    bestContactTime: "8:30 AM - 10:00 AM",
    salesAngle: "HACCP compliant refrigerated fleet with automated data-logger printouts upon bay delivery."
  },

  // =========================================================================
  // 2. KILIMANI, HURLINGHAM & LAVINGTON CLUSTER
  // =========================================================================
  {
    id: "lead-kilimani-mama-oliech",
    name: "Mama Oliech Restaurant",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "Marcus Garvey Road, Off Argwings Kodhek, Kilimani",
    cuisine: "Authentic Kenyan Lake Fish Specialists",
    decisionMaker: "General Manager & Kitchen Operations Head",
    phone: "+254 722 795 628",
    email: "procurement@mamaoliech.com",
    estimatedWeeklyDemand: "Lake Victoria Whole Tilapia (700kg - 1,000kg/wk), Shangi Potatoes (300kg/wk), Tomatoes (200kg), Onions (150kg), Traditional Kienyeji Greens",
    whatWeCanSupply: {
      seafood: "Daily Fresh Lake Victoria Whole Tilapia (Medium 500-600g & Jumbo 800g+ sizes)",
      meat: "Light local poultry requirements",
      produce: "Nyandarua Shangi Potatoes for crispy chips, Mwea Cooking Tomatoes, Oloitokitok Red Onions"
    },
    currentStatus: "Active Ordering Client",
    notes: "Iconic Kenyan institution. Consumes highest single-restaurant volume of whole tilapia in Kilimani.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Direct overnight insulated haul from Dunga Pier Kisumu, landing at Kilimani door at 5:30 AM."
  },
  {
    id: "lead-kilimani-ankole",
    name: "Ankole Grill Kilimani",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "Senteu Plaza, Galana Road & Argwings Kodhek Junction",
    cuisine: "African Fusion & Prime Steakhouse",
    decisionMaker: "Executive Chef & Purchasing Director",
    phone: "+254 710 265 653",
    email: "chef@ankole.co.ke",
    estimatedWeeklyDemand: "Dry-Aged T-Bone & Ribeye (250kg), Tomahawk Steaks (80kg), Tiger Prawns (50kg), Whole Tilapia (60kg), Shangi Potatoes (350kg)",
    whatWeCanSupply: {
      seafood: "Coastal Tiger Prawns, Lake Victoria Whole Tilapia, Ocean Snapper",
      meat: "Dry-Aged Boran Ribeye, T-Bone, Short Ribs, Pasture-fed Steer Fillet",
      produce: "Grade 1 Shangi Potatoes (Unwashed or Washed), Salad Tomatoes, Button Mushrooms"
    },
    currentStatus: "Active Ordering Client",
    notes: "High-end grill with heavy weekday executive lunches and weekend dining. Steaks must meet strict aging specs.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Consistent 21-day dry-aged Boran beef carcass supply with uniform fat caps and deep marbling."
  },
  {
    id: "lead-kilimani-cjs",
    name: "CJ's Restaurant (Kilimani)",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "Argwings Kodhek Road, Kilimani, Nairobi",
    cuisine: "High-Volume Continental, Coffee & Family Dining",
    decisionMaker: "Central Kitchen Commissary Head & Kilimani Store Manager",
    phone: "+254 792 000 055",
    email: "procurement@cjs.co.ke",
    estimatedWeeklyDemand: "Shangi Potatoes (1,200kg/wk), Salad Tomatoes (400kg/wk), Red Onions (300kg/wk), Beef Tenderloin (300kg), Tilapia Fillets (150kg)",
    whatWeCanSupply: {
      seafood: "Lake Tilapia Fillets & Peeled Prawns for sizzlers",
      meat: "Prime Beef Chuck, Ground Beef, Minced Meat, Fillet Medallions",
      produce: "Massive volume Shangi Potatoes calibrated 50-70mm for French fries, Mwea Tomatoes"
    },
    currentStatus: "Negotiating Contract",
    notes: "Massive customer turnover from 7:00 AM to 11:00 PM. High demand for zero-blemish chip potatoes.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Pre-graded 50kg bags of high-dry-matter Shangi potatoes delivered on 30-day fixed price contracts."
  },
  {
    id: "lead-kilimani-5senses",
    name: "5 Senses Restaurant",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "2nd Floor, Galana Plaza, Galana Road, Kilimani",
    cuisine: "French Classical Fine Dining",
    decisionMaker: "Chef-Patron & Purchasing Lead",
    phone: "+254 701 320 000",
    email: "dining@5senses.co.ke",
    estimatedWeeklyDemand: "Duck Breast, Beef Tenderloin (40kg), Sea Bass/Red Snapper (30kg), Snow Peas (15kg), French Beans (20kg), Fresh Herbs",
    whatWeCanSupply: {
      seafood: "Ocean Snapper Fillets, Yellowfin Tuna, Coastal Crab Meat",
      meat: "Aged Beef Tenderloin Medallions & Lamb Loins",
      produce: "Extra-Fine French Beans, Sugar Snap Peas, Fresh Butter, Microgreens"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Very high culinary precision. Chef evaluates produce under culinary magnifying glasses.",
    bestContactTime: "2:00 PM - 3:30 PM",
    salesAngle: "Calibrated 8-10cm stringless snow peas and extra-fine handpicked French beans."
  },
  {
    id: "lead-kilimani-2grapes",
    name: "2 Grapes Wine & Friends",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "George Padmore Road, Off Marcus Garvey, Kilimani",
    cuisine: "Wine Bar, Tapas & Charcuterie Bistro",
    decisionMaker: "Operations Director & Executive Chef",
    phone: "+254 707 982 222",
    email: "cheers@2grapes.co.ke",
    estimatedWeeklyDemand: "Artisanal Cheeses, Smoked Meats, Tiger Prawns (20kg), Beef Sirloin (30kg), Cherry Tomatoes (25kg), Fresh Baguettes",
    whatWeCanSupply: {
      seafood: "Coastal Tiger Prawns and Calamari for tapas",
      meat: "Aged Sirloin Strips & Halal cured beef cuts",
      produce: "Sweet Cherry Tomatoes, Baby Rocket, Fresh Basil, Hass Avocados"
    },
    currentStatus: "Cold Contacted",
    notes: "Intimate wine garden with discerning patrons. High cheese and tapas platter consumption.",
    bestContactTime: "3:00 PM - 4:30 PM",
    salesAngle: "Export-grade cherry tomatoes and ocean tiger prawns packed in small batch kitchen tubs."
  },
  {
    id: "lead-kilimani-habesha",
    name: "Habesha Ethiopian Restaurant",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "Argwings Kodhek Road, Hurlingham, Nairobi",
    cuisine: "Traditional Ethiopian & Eritrean Cuisine",
    decisionMaker: "General Manager & Head Cook",
    phone: "+254 733 727 618",
    email: "info@habesharestaurant.com",
    estimatedWeeklyDemand: "Whole Goat (100kg), Lean Beef Topsides for Kitfo & Tibs (250kg), Red Onions (200kg), Tomatoes (150kg), Garlic (30kg)",
    whatWeCanSupply: {
      seafood: "N/A (Meat and Produce dominant)",
      meat: "Fresh Daily Lean Boran Beef (Topsides, Knuckles) & Kiamaiko Mbuzi Carcasses",
      produce: "Red Bulb Onions, Fresh Red Chillies, Garlic, Ripe Tomatoes for stews"
    },
    currentStatus: "New Lead",
    notes: "Requires fresh, ultra-lean raw beef daily for traditional Kitfo preparation.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Veterinary-certified fresh lean beef delivered at 6:00 AM before daily Kitfo prep."
  },
  {
    id: "lead-lavington-osteria",
    name: "Osteria del Chianti",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "Lenana Road, Kilimani / Lavington border",
    cuisine: "Authentic Italian Trattoria & Pizzeria",
    decisionMaker: "Executive Italian Chef & Managing Partner",
    phone: "+254 725 526 500",
    email: "info@osteriadelchianti.com",
    estimatedWeeklyDemand: "Coastal Calamari (40kg), Prawns (40kg), Red Snapper (30kg), Beef Tenderloin (60kg), Plum Tomatoes (180kg), Fresh Basil (15kg)",
    whatWeCanSupply: {
      seafood: "Fresh Coastal Calamari, Tiger Prawns, Whole Snapper",
      meat: "Prime Boran Beef Tenderloin, Veal Medallions",
      produce: "Mwea Plum Tomatoes for authentic marinara, Fresh Basil, Zucchini, Eggplants"
    },
    currentStatus: "Cold Contacted",
    notes: "Legendary Italian restaurant in Nairobi. High consumption of plum tomatoes and seafood pastas.",
    bestContactTime: "11:00 AM - 12:00 PM",
    salesAngle: "Direct supply of high-pulp plum tomatoes from Kirinyaga farms at wholesale bulk savings."
  },
  {
    id: "lead-lavington-for-you",
    name: "For You Chinese Restaurant",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "Gitanga Road, Lavington, Nairobi",
    cuisine: "Traditional Chinese & Family Banquet",
    decisionMaker: "Head Wok Chef & Managing Director",
    phone: "+254 722 721 680",
    email: "foryourestaurant@gmail.com",
    estimatedWeeklyDemand: "Whole Lake Tilapia (300kg), Tiger Prawns (60kg), Pork Ribs & Belly (150kg), Chicken (200kg), Snow Peas (40kg), Spring Onions (50kg)",
    whatWeCanSupply: {
      seafood: "Fresh Lake Tilapia (Live or Slush-ice chilled), Ocean Tiger Prawns, Calamari",
      meat: "Pork Belly, Spare Ribs, Broiler Chicken",
      produce: "Highland Snow Peas, Spring Onions, Bok Choy, Fresh Ginger, Garlic"
    },
    currentStatus: "Cold Contacted",
    notes: "Very high volume family dining. Tilapia must be firm-fleshed for whole steamed fish dishes.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Guaranteed same-day Lake Victoria tilapia and fresh highland snow peas at wholesale crate rates."
  },
  {
    id: "lead-lavington-arbor",
    name: "The Arbor Eco Cafe",
    area: "Kilimani",
    region: "Nairobi",
    exactLocation: "904 James Gichuru Road, Lavington, Nairobi",
    cuisine: "Eco Garden Cafe, Brunch & Healthy Bowls",
    decisionMaker: "Founder & Head of Kitchen",
    phone: "+254 729 400 291",
    email: "hello@thearbor.co.ke",
    estimatedWeeklyDemand: "Hass Avocados (60kg), Salad Greens (30kg), Eggs, Chicken Breast (40kg), Strawberries, Potatoes (100kg)",
    whatWeCanSupply: {
      seafood: "Light smoked salmon and prawns for salads",
      meat: "Free-range Kienyeji Chicken & Halal Chicken Breast",
      produce: "Organic Hass Avocados, Hydroponic Salad Greens, Baby Spinach, Cherry Tomatoes"
    },
    currentStatus: "New Lead",
    notes: "Health-focused clientele. Prefers pesticide-free, sustainably farmed produce.",
    bestContactTime: "2:30 PM - 4:00 PM",
    salesAngle: "GlobalG.A.P. compliant fresh greens and high-oil ripe Hass avocados."
  },

  // =========================================================================
  // 3. NAIROBI CBD & UPPER HILL CLUSTER
  // =========================================================================
  {
    id: "lead-cbd-sarova-stanley",
    name: "Sarova Stanley Hotel (Thorn Tree Cafe)",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Kenyatta Avenue & Kimathi Street, Nairobi CBD",
    cuisine: "Heritage 5-Star Luxury Dining & Cafe",
    decisionMaker: "Group Executive Chef & Materials Manager",
    phone: "+254 719 048 000",
    email: "stanleyprocurement@sarovahotels.com",
    estimatedWeeklyDemand: "Prime Steer Ribeye (200kg), Red Snapper (80kg), Whole Tilapia (120kg), Shangi Potatoes (500kg), Salad Tomatoes (250kg), Export Snow Peas (50kg)",
    whatWeCanSupply: {
      seafood: "Coastal Red Snapper, Jumbo Tiger Prawns, Lake Tilapia Fillets",
      meat: "Aged Boran Ribeye, Tenderloin, Lamb Carcasses",
      produce: "Grade 1 Shangi Potatoes, Mwea Salad Tomatoes, Sugar Snap Peas"
    },
    currentStatus: "Active Ordering Client",
    notes: "Nairobi's historic premier hotel. Requires 5:00 AM delivery before CBD morning traffic congestion.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Guaranteed 5:00 AM CBD dock delivery with sanitary certificates and refrigerated cold vans."
  },
  {
    id: "lead-cbd-serena",
    name: "Nairobi Serena Hotel (Mandhari)",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Kenyatta Avenue, Central Park, Nairobi",
    cuisine: "5-Star Fine Dining, International Buffet & Seafood",
    decisionMaker: "Executive Chef & Purchasing Manager",
    phone: "+254 732 123 333",
    email: "nairobi@serenahotels.com",
    estimatedWeeklyDemand: "Rock Lobster Tails (50kg), King Prawns (70kg), Tuna (40kg), Prime Beef (220kg), Nyandarua Potatoes (400kg)",
    whatWeCanSupply: {
      seafood: "Shimoni Spiny Lobster Tails, Coastal King Prawns, Sashimi Tuna, Snapper",
      meat: "Certified Prime Beef Medallions & Boran Steer Primal Cuts",
      produce: "Grade 1 Highland Snow Peas, Hand-sorted Plum Tomatoes, Shangi Potatoes"
    },
    currentStatus: "Negotiating Contract",
    notes: "Diplomatic and luxury traveler hub. Zero tolerance for cold-chain temperature violations.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Temperature-logged deliveries with digital probes verifying sub-2°C seafood temperatures."
  },
  {
    id: "lead-cbd-tamarind",
    name: "Tamarind Restaurant (CBD)",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "National Bank Building, Harambee Avenue, Nairobi CBD",
    cuisine: "Legendary Kenyan Coastal Seafood Fine Dining",
    decisionMaker: "Head Chef & Tamarind Group F&B Director",
    phone: "+254 722 205 894",
    email: "reservations.nairobi@tamarind.co.ke",
    estimatedWeeklyDemand: "Spiny Lobster (80kg), Jumbo Prawns (100kg), Red Snapper (120kg), Calamari (80kg), Fresh Oysters, Shangi Potatoes (200kg)",
    whatWeCanSupply: {
      seafood: "Premier Coastal Ocean Catch: Spiny Lobster, U-10 Tiger Prawns, Coastal Red Snapper, Calamari",
      meat: "Aged Beef Steaks",
      produce: "Mwea Salad Tomatoes, Shangi Potatoes, Fine French Beans"
    },
    currentStatus: "Active Ordering Client",
    notes: "The gold standard of seafood dining in Kenya. Requires uniform sizing and pristine freshness.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Direct overnight flights from Malindi and Kilifi fishermen cooperatives landing at Nairobi depot."
  },
  {
    id: "lead-upperhill-radisson",
    name: "Radisson Blu Hotel (Upper Hill)",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Elgon Road, Upper Hill, Nairobi",
    cuisine: "International Luxury Hotel, The Chop House & Larder",
    decisionMaker: "Executive Chef & Central Purchasing Head",
    phone: "+254 709 810 000",
    email: "procurement.nairobi@radissonblu.com",
    estimatedWeeklyDemand: "Dry-Aged Tomahawk & Ribeye (180kg), Prawns (60kg), Lake Tilapia (80kg), Shangi Potatoes (350kg), Salad Tomatoes (180kg)",
    whatWeCanSupply: {
      seafood: "Tiger Prawns, Lake Tilapia Fillets, Red Snapper",
      meat: "Custom Dry-Aged Boran Tomahawk, T-Bone, and Tenderloin cuts",
      produce: "Shangi Potatoes, Mwea Salad Tomatoes, Highland Fine Peas"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Corporate executive dining and multinational conference center.",
    bestContactTime: "9:30 AM - 11:00 AM",
    salesAngle: "Dedicated dry-aging program for prime Boran beef with guaranteed delivery before 6:30 AM."
  },
  {
    id: "lead-upperhill-crowne-plaza",
    name: "Crowne Plaza Nairobi Airport & Upper Hill",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Kenya Road, Upper Hill, Nairobi",
    cuisine: "Business Hotel, Sikiyo Restaurant & Bar",
    decisionMaker: "Executive Chef & Procurement Officer",
    phone: "+254 719 096 000",
    email: "info@cpupperhill.com",
    estimatedWeeklyDemand: "Whole Tilapia (100kg), Beef Sirloin (150kg), Goat Meat (80kg), Potatoes (300kg), Onions (120kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Fresh Tilapia & Ocean Fish",
      meat: "Halal Boran Beef, Halal Mbuzi Carcass, Broiler Chicken",
      produce: "Nyandarua Potatoes, Oloitokitok Onions, Salad Tomatoes"
    },
    currentStatus: "Cold Contacted",
    notes: "High corporate breakfast and buffet volume. Reliability of daily delivery time is essential.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Consistent morning drop-off schedule with zero stockout tolerance."
  },
  {
    id: "lead-cbd-kilimanjaro",
    name: "Kilimanjaro Jamia Restaurant",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Kimathi Street, Opposite Jamia Mosque, Nairobi CBD",
    cuisine: "Swahili, Somali & Arabic High-Volume Dining",
    decisionMaker: "General Manager & Head of Kitchen",
    phone: "+254 722 000 111",
    email: "kilimanjarorestaurant@gmail.com",
    estimatedWeeklyDemand: "Whole Goat/Mbuzi (500kg/wk), Halal Beef (600kg/wk), Rice, Onions (400kg/wk), Tomatoes (300kg/wk), Bananas",
    whatWeCanSupply: {
      seafood: "Ocean Kingfish (Nguru) for Swahili fish biryani",
      meat: "Kiamaiko Certified Halal Mbuzi Carcasses (14-16kg), Pasture Boran Steer Beef",
      produce: "Bulk sacks of Oloitokitok Red Onions, Mwea Tomatoes for gravies"
    },
    currentStatus: "Cold Contacted",
    notes: "One of the busiest restaurants in East Africa. Exceptional meat and onion turnover for biryani.",
    bestContactTime: "8:30 AM - 9:30 AM",
    salesAngle: "Direct abattoir wholesale carcasses at 10-15% below City Market prices on cash/advance terms."
  },

  // =========================================================================
  // 4. GIGIRI, RUNDA, VILLAGE MARKET & TWO RIVERS CLUSTER
  // =========================================================================
  {
    id: "lead-gigiri-lord-erroll",
    name: "The Lord Erroll Gourmet Restaurant",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "89 Ruaka Road, Runda Estate, Nairobi",
    cuisine: "Award-Winning French & International Fine Dining",
    decisionMaker: "Executive Chef & General Manager",
    phone: "+254 721 920 820",
    email: "reservations@sceniclorderroll.com",
    estimatedWeeklyDemand: "Lobster Tails (30kg), Yellowfin Tuna (30kg), Ribeye Steaks (80kg), Lamb Loins (40kg), Snow Peas (25kg), Fine French Beans (30kg)",
    whatWeCanSupply: {
      seafood: "Spiny Lobster Tails, Sashimi Grade Tuna, Coastal Snapper",
      meat: "Aged Boran Prime Ribeye, Rack of Lamb, Beef Tenderloin",
      produce: "Export-grade Snow Peas, Fine French Beans, Salad Greens, Cherry Tomatoes"
    },
    currentStatus: "Active Ordering Client",
    notes: "Serves diplomatic and expat community (UN Gigiri & US Embassy). Premium quality is non-negotiable.",
    bestContactTime: "11:00 AM - 12:30 PM",
    salesAngle: "Artisanal dry-aged beef cuts paired with coastal jumbo prawns on reliable early morning drops."
  },
  {
    id: "lead-gigiri-ocean-basket",
    name: "Ocean Basket (Village Market)",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "Food Court Wing, Village Market, Gigiri, Nairobi",
    cuisine: "Mediterranean Family Seafood & Grill",
    decisionMaker: "Store General Manager & Kitchen Lead",
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
  {
    id: "lead-gigiri-harvest",
    name: "Harvest Restaurant (Village Market)",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "Trademark Hotel, Village Market, Gigiri",
    cuisine: "Farm-to-Table Open Grill & Charcuterie",
    decisionMaker: "Executive Chef & F&B Operations Manager",
    phone: "+254 730 810 000",
    email: "harvest@trademark-hotel.com",
    estimatedWeeklyDemand: "Prime Beef Cuts (120kg), Sea Bass/Snapper (50kg), Heirloom Tomatoes (40kg), Fresh Herbs, Snow Peas (20kg)",
    whatWeCanSupply: {
      seafood: "Coastal Red Snapper, Tiger Prawns, Yellowfin Tuna",
      meat: "Pasture-Raised Boran Beef, Smoked Cuts, Lamb Chops",
      produce: "Heirloom Salad Tomatoes, Kinangop Snow Peas, Fresh Thyme, Rocket"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Farm-to-table ethos. Prioritizes local Kenyan provenance and transparent grower traceability.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "100% farm traceability with Nyandarua and Kirinyaga grower stories on every delivery batch."
  },
  {
    id: "lead-gigiri-tribe-jiko",
    name: "Tribe Hotel (Jiko Restaurant)",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "The Village Market, Limuru Road, Gigiri",
    cuisine: "Contemporary African & Organic Grill",
    decisionMaker: "Executive Chef & Procurement Director",
    phone: "+254 732 186 000",
    email: "jiko@tribehotel-kenya.com",
    estimatedWeeklyDemand: "Ocean Prawns (40kg), Tilapia (50kg), Prime Steer Tenderloin (80kg), Organic Greens (30kg), Hass Avocados (40kg)",
    whatWeCanSupply: {
      seafood: "Lamu Jumbo Prawns, Lake Tilapia Fillets, Red Snapper",
      meat: "Certified Aged Boran Steer Beef & Organic Mbuzi",
      produce: "Organic Salad Tomatoes, Hass Avocados, Baby Carrots, Snow Peas"
    },
    currentStatus: "Negotiating Contract",
    notes: "High-profile international diplomats and celebrities stay here. Requires absolute highest grade.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Exclusive access to coastal wild-caught seafood and organic highland vegetables."
  },
  {
    id: "lead-tworivers-artcaffe",
    name: "Artcaffe (Two Rivers Mall)",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "Ground Floor, Two Rivers Mall, Limuru Road",
    cuisine: "All-Day Bistro, Bakery & Coffee Bar",
    decisionMaker: "Central Commissary Purchasing Manager & Branch Chef",
    phone: "+254 709 202 026",
    email: "procurement@artcaffe.co.ke",
    estimatedWeeklyDemand: "Potatoes (500kg), Salad Tomatoes (200kg), Red Onions (150kg), Beef Mince & Steak (200kg), Tilapia (60kg)",
    whatWeCanSupply: {
      seafood: "Fresh Lake Tilapia Fillets & Peeled Prawns",
      meat: "Halal Beef Chuck, Mince, and Ribeye",
      produce: "Grade 1 Shangi Potatoes, Mwea Salad Tomatoes, Crisp Salad Greens"
    },
    currentStatus: "Cold Contacted",
    notes: "Major brand in Kenya. Branch requires continuous early morning drops before mall opening.",
    bestContactTime: "8:30 AM - 9:30 AM",
    salesAngle: "High-volume bulk potato and tomato supply meeting central kitchen standardization specs."
  },
  {
    id: "lead-tworivers-aldar",
    name: "Aldar Lebanese Restaurant",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "Riverfront Wing, Two Rivers Mall, Ruaka / Limuru Rd",
    cuisine: "Authentic Lebanese & Middle Eastern Grill",
    decisionMaker: "Head Lebanese Chef & Operations Manager",
    phone: "+254 742 111 222",
    email: "info@aldar.co.ke",
    estimatedWeeklyDemand: "Whole Halal Mbuzi (120kg), Chicken (150kg), Red Onions (100kg), Tomatoes (120kg), Cucumbers, Mint & Parsley (40kg)",
    whatWeCanSupply: {
      seafood: "Ocean Fish for Lebanese baked fish dishes",
      meat: "Certified Halal Goat Chops and Carcass, Lean Minced Beef for kebabs",
      produce: "Fresh Mint, Italian Flat Parsley, Salad Cucumbers, Tomatoes"
    },
    currentStatus: "New Lead",
    notes: "Very high herb consumption for tabbouleh and fattoush. Herbs must be vibrant green with zero wilt.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Daily dawn harvest of fresh parsley and mint from Limuru highland growers."
  },
  {
    id: "lead-springvalley-zen-garden",
    name: "Zen Garden (Bamboo & Jade)",
    area: "Gigiri",
    region: "Nairobi",
    exactLocation: "Lower Kabete Road, Spring Valley, Nairobi",
    cuisine: "Pan-Asian Fine Dining, Dim Sum & Patisserie",
    decisionMaker: "Executive Chef & Managing Director",
    phone: "+254 714 744 231",
    email: "info@zengarden.co.ke",
    estimatedWeeklyDemand: "Yellowfin Tuna (40kg), Tiger Prawns (70kg), Duck, Pork Belly, Snow Peas (35kg), Asian Greens (40kg)",
    whatWeCanSupply: {
      seafood: "Tiger Prawns, Sashimi Tuna, Cleaned Baby Squid",
      meat: "Pork Belly, Duck, Aged Beef Striploin",
      produce: "Stringless Snow Peas, Bok Choy, Fresh Ginger, Lemongrass, Salad Tomatoes"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Renowned venue for weddings and luxury events. Dim sum requires precise prawn calibration.",
    bestContactTime: "2:30 PM - 4:00 PM",
    salesAngle: "Calibrated U-10 and U-15 jumbo tiger prawns with translucent flesh and sweet coastal brine."
  },

  // =========================================================================
  // 5. KAREN & LANGATA CLUSTER
  // =========================================================================
  {
    id: "lead-karen-carnivore",
    name: "Carnivore Restaurant",
    area: "Karen",
    region: "Nairobi",
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
    region: "Nairobi",
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
    currentStatus: "Active Ordering Client",
    notes: "High table-turn restaurant with discerning clientele. Demands pristine visual appeal on seafood and greens.",
    bestContactTime: "3:00 PM - 5:00 PM",
    salesAngle: "Direct morning drops from Kinangop and Lake Victoria with customized kitchen prep packaging."
  },
  {
    id: "lead-karen-cultiva",
    name: "Cultiva Kenya",
    area: "Karen",
    region: "Nairobi",
    exactLocation: "Pofu Road, Sanctuary Farm, Karen, Nairobi",
    cuisine: "Farm-to-Table, South American & Rustic Fine Dining",
    decisionMaker: "Chef Ariel Moss & Procurement Lead",
    phone: "+254 795 726 622",
    email: "hola@cultivakenya.com",
    estimatedWeeklyDemand: "Coastal Seafood Catch (60kg), Boran Beef (80kg), Heritage Vegetables, Microgreens, Local Berries",
    whatWeCanSupply: {
      seafood: "Wild Coastal Red Snapper, Octopus (Pweza), Lobster, Yellowfin Tuna",
      meat: "Pasture-Fed Boran Steer Beef & Free-Range Poultry",
      produce: "Heirloom Tomatoes, Kinangop Peas, Organic Greens"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Celebrated farm-to-table kitchen. Rejects factory-farmed products; requires true artisanal sourcing.",
    bestContactTime: "11:00 AM - 12:30 PM",
    salesAngle: "Direct line-caught coastal seafood and sustainable mountain produce with complete farm traceability."
  },
  {
    id: "lead-karen-boho",
    name: "Boho Eatery",
    area: "Karen",
    region: "Nairobi",
    exactLocation: "118 Diani Close, Off Ndovoini Road, Karen",
    cuisine: "Wholesome Plant-Forward & Conscious Dining",
    decisionMaker: "Founder & Head Chef",
    phone: "+254 727 502 416",
    email: "info@bohoeatery.co.ke",
    estimatedWeeklyDemand: "Organic Avocados (50kg), Fresh Tofu/Mushrooms, Highland Peas (30kg), Salad Tomatoes (60kg), Microgreens",
    whatWeCanSupply: {
      seafood: "Sustainable line-caught Snapper and Tilapia",
      meat: "Free-range chicken breast",
      produce: "Export-grade Hass Avocados, Kinangop Snow Peas, Sweet Salad Tomatoes, Herbs"
    },
    currentStatus: "Cold Contacted",
    notes: "Focuses on organic, healthy living, vegetarian and pescatarian options.",
    bestContactTime: "2:00 PM - 3:30 PM",
    salesAngle: "Pesticide-free certified produce from audited outgrowers in Kinangop and Mwea."
  },
  {
    id: "lead-karen-tamambo",
    name: "Tamambo Karen Blixen",
    area: "Karen",
    region: "Nairobi",
    exactLocation: "Karen Road, Next to Karen Blixen Museum, Karen",
    cuisine: "Historic Garden Dining, Seafood & Continental",
    decisionMaker: "General Manager & Executive Chef",
    phone: "+254 719 345 345",
    email: "tamambokaren@tamarind.co.ke",
    estimatedWeeklyDemand: "Coastal Red Snapper (50kg), Tiger Prawns (40kg), Prime Beef Steaks (100kg), Shangi Potatoes (200kg), Snow Peas (20kg)",
    whatWeCanSupply: {
      seafood: "Ocean Snapper, Coastal Prawns, Fresh Lake Tilapia",
      meat: "Dry-Aged Boran Ribeye & Sirloin Steaks",
      produce: "Shangi Potatoes for roasts, Mwea Salad Tomatoes, Highland Peas"
    },
    currentStatus: "Cold Contacted",
    notes: "Part of Tamarind Group. Popular for outdoor garden lunches and tourist groups.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Same Tamarind-grade seafood standards with localized early morning drops in Karen."
  },

  // =========================================================================
  // 6. MOMBASA ROAD & AIRPORT CORRIDOR
  // =========================================================================
  {
    id: "lead-mombasa-ole-sereni",
    name: "Ole Sereni Hotel (Eagle's The Steakhouse)",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Mombasa Road, Off Southern Bypass, Nairobi",
    cuisine: "Luxury Park-View Steakhouse & Big Five Buffet",
    decisionMaker: "Executive Chef & Purchasing Manager",
    phone: "+254 713 001 400",
    email: "purchasing@ole-serenihotel.com",
    estimatedWeeklyDemand: "Prime Boran Beef Steaks (200kg), Tiger Prawns (60kg), Lake Tilapia (100kg), Shangi Potatoes (400kg), Salad Tomatoes (180kg)",
    whatWeCanSupply: {
      seafood: "Jumbo Ocean Tiger Prawns, Coastal Red Snapper, Lake Tilapia Fillets",
      meat: "Dry-Aged Boran Ribeye, T-Bone, Pasture Beef Fillet Medallions",
      produce: "Grade 1 Shangi Potatoes, Mwea Salad Tomatoes, Highland Fine Vegetables"
    },
    currentStatus: "Negotiating Contract",
    notes: "Views Nairobi National Park. High tourist and corporate dinner traffic.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Direct abattoir-aged beef program and coastal prawns delivered via Southern Bypass before 6:30 AM."
  },
  {
    id: "lead-mombasa-panari",
    name: "The Panari Hotel (Black Gold)",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "Mombasa Road, Nairobi",
    cuisine: "Hotel Buffet, Continental & Indian Fine Dining",
    decisionMaker: "Food & Beverage Director & Purchasing Officer",
    phone: "+254 711 091 000",
    email: "procurement@panarihotels.com",
    estimatedWeeklyDemand: "Chicken & Mutton (250kg), Beef (180kg), Whole Fish (80kg), Potatoes (350kg), Onions (150kg), Tomatoes (150kg)",
    whatWeCanSupply: {
      seafood: "Fresh Lake Victoria Tilapia & Marine Fish",
      meat: "Halal Boran Beef, Halal Mbuzi Carcasses, Broiler Chicken",
      produce: "Nyandarua Potatoes, Oloitokitok Red Onions, Salad Tomatoes"
    },
    currentStatus: "Cold Contacted",
    notes: "Large hotel and ice-skating facility. Demands certified Halal slaughtered meats.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Veterinary-certified Halal meats and graded produce delivered on scheduled morning run."
  },
  {
    id: "lead-mombasa-four-points-jkia",
    name: "Four Points by Sheraton JKIA",
    area: "CBD",
    region: "Nairobi",
    exactLocation: "90489 Airport Road, JKIA, Nairobi",
    cuisine: "International Airport Luxury & Tazama Rooftop Bar",
    decisionMaker: "Executive Chef & Purchasing Lead",
    phone: "+254 709 760 000",
    email: "purchasing@fourpointsnairobi.com",
    estimatedWeeklyDemand: "Tiger Prawns (50kg), Red Snapper (40kg), Prime Steaks (120kg), Shangi Potatoes (300kg), Salad Greens (50kg)",
    whatWeCanSupply: {
      seafood: "Coastal Tiger Prawns, Coastal Red Snapper, Calamari",
      meat: "Aged Boran Prime Ribeye & Halal Steaks",
      produce: "Grade 1 Shangi Potatoes, Mwea Plum Tomatoes, Fresh Salad Greens"
    },
    currentStatus: "Active Ordering Client",
    notes: "Located inside JKIA airport perimeter. Strict security clearance and early morning delivery.",
    bestContactTime: "9:00 AM - 10:30 AM",
    salesAngle: "Pre-cleared logistics driver with security badges for seamless airside hotel delivery."
  }
,
  // =========================================================================
  // 7. MOMBASA & COASTAL CORRIDOR (HOTELS, RESORTS & SEAFOOD DINING)
  // =========================================================================
  {
    id: "lead-coast-severin",
    name: "Severin Sea Lodge",
    area: "Mombasa & Bamburi",
    region: "Coast",
    exactLocation: "Bamburi Beach, Malindi Road, Mombasa",
    cuisine: "Swahili Coastal Fine Dining & Seafood Buffet",
    decisionMaker: "Executive Chef Kenneth & Purchasing Manager",
    phone: "+254 722 265 600",
    email: "procurement@severinsealodge.com",
    estimatedWeeklyDemand: "Grade 1 Shangi Potatoes (400kg), Mwea Tomatoes (250kg), Oloitokitok Onions (200kg), Aged Boran Beef Ribeye (150kg), Export Green Beans",
    whatWeCanSupply: {
      seafood: "Specialty deep-water Red Snapper and Spiny Lobsters for beach gala nights",
      meat: "Prime aged Boran Beef striploins, Kiamaiko Halal Goat carcasses",
      produce: "Cold-chain Nyandarua Shangi Potatoes, Grade 1 Salad Tomatoes, Fine Snow Peas & Herbs"
    },
    currentStatus: "Active Ordering Client",
    notes: "High-volume beach resort. Requires fresh highland vegetables delivered via SGR chilled containers twice weekly.",
    bestContactTime: "09:30 AM - 11:00 AM",
    salesAngle: "Direct highland-to-coast cold-chain produce delivery eliminating Mombasa market broker markups."
  },
  {
    id: "lead-coast-whitesands",
    name: "Sarova Whitesands Beach Resort & Spa",
    area: "Mombasa & Bamburi",
    region: "Coast",
    exactLocation: "Bamburi Beach, North Coast, Mombasa",
    cuisine: "Luxury International Resort & Grill",
    decisionMaker: "Cluster Executive Chef & Group Procurement Lead",
    phone: "+254 722 660 000",
    email: "whitesands.purchasing@sarovahotels.com",
    estimatedWeeklyDemand: "Shangi Potatoes (600kg), Red Onions (350kg), Salad Tomatoes (400kg), Prime Boran Striploin (250kg), Lake Victoria Tilapia Fillets (120kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia fillets, Jumbo Tiger Prawns, Calamari rings",
      meat: "Boran Beef cuts (Ribeye, T-Bone), Halal Goat carcasses, Chicken breast fillets",
      produce: "Nyandarua Shangi Potatoes, Mwea Anna F1 Tomatoes, Oloitokitok Onions, Carrots, Capsicums"
    },
    currentStatus: "Active Ordering Client",
    notes: "One of the largest coastal resorts in Kenya. Requires temperature log sheets with every delivery crate.",
    bestContactTime: "10:00 AM - 12:00 PM",
    salesAngle: "Direct abattoir and Nyandarua farm aggregation with guaranteed 100% sorting quality."
  },
  {
    id: "lead-coast-nomad",
    name: "Nomad Beach Bar & Restaurant",
    area: "Diani Beach",
    region: "Coast",
    exactLocation: "Diani Beach Road, South Coast, Kwale",
    cuisine: "Beachfront Mediterranean, Italian & Coastal Seafood",
    decisionMaker: "Chef Mario & F&B Manager",
    phone: "+254 725 373 888",
    email: "fnb@nomadsurf.com",
    estimatedWeeklyDemand: "Grade 1 Shangi Potatoes (300kg), Fresh Basil & Arugula (20kg), Cherry Tomatoes (50kg), Boran Beef Tenderloin (80kg), Fresh Calamari (60kg)",
    whatWeCanSupply: {
      seafood: "Sashimi-grade Yellowfin Tuna, Spiny Rock Lobsters, Fresh Calamari",
      meat: "Aged Boran Tenderloin, Halal Lamb Chops, Smoked Bacon",
      produce: "Cherry Tomatoes, Kinangop Snow Peas, Fine Green Beans, Salad Cucumbers"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Premier beachfront dining spot in Diani. Praised highland vegetable freshness in initial trial.",
    bestContactTime: "11:00 AM - 12:00 PM",
    salesAngle: "Reliable chilled produce line from Nairobi to Diani with zero shelf-life loss."
  },
  {
    id: "lead-coast-alibarbour",
    name: "Ali Barbour's Cave Restaurant",
    area: "Diani Beach",
    region: "Coast",
    exactLocation: "Ali Barbour's Road, Diani Beach, Kwale",
    cuisine: "World-Famous Ancient Coral Cave Fine Dining & Seafood",
    decisionMaker: "Executive Chef & Operations Director",
    phone: "+254 711 489 822",
    email: "reservations@alibarbours.co",
    estimatedWeeklyDemand: "Jumbo Tiger Prawns (80kg), Spiny Lobster Tails (60kg), Yellowfin Tuna (40kg), Fresh Herbs & Gourmet Vegetables (50kg)",
    whatWeCanSupply: {
      seafood: "U-10 Tiger Prawns, Spiny Lobster Tails, Mangrove Crabs, Red Snapper",
      meat: "Prime Dry-Aged Beef Medallions & Wagwag/Boran crosses",
      produce: "Microgreens, Baby Carrots, Snow Peas, Gourmet Cherry Tomatoes"
    },
    currentStatus: "Negotiating Contract",
    notes: "High-ticket tourist icon. Requires only top-tier calibrated sizing on crustaceans and steaks.",
    bestContactTime: "02:00 PM - 04:00 PM",
    salesAngle: "Calibrated size sorting (every prawn within 5g tolerance) and zero seafood spoilage."
  },
  {
    id: "lead-coast-hemingways",
    name: "Hemingways Watamu",
    area: "Watamu & Malindi",
    region: "Coast",
    exactLocation: "Watamu Marine National Park, Kilifi County",
    cuisine: "Luxury 5-Star Boutique Coastal & Seafood Gastronomy",
    decisionMaker: "Head Chef Archie & Purchasing Lead",
    phone: "+254 709 188 000",
    email: "watamu.kitchen@hemingways.co",
    estimatedWeeklyDemand: "Aged Beef Tenderloin (100kg), Highland Shangi Potatoes (350kg), Mwea Tomatoes (180kg), Export Snow Peas (30kg), Hass Avocados (50kg)",
    whatWeCanSupply: {
      seafood: "Line-caught Deep Sea Snapper, Sailfish Loins, King Prawns",
      meat: "21-day dry-aged Boran Tenderloin, Halal Rack of Lamb",
      produce: "Nyandarua Grade 1 Shangi Potatoes, Stringless Snow Peas, Export Hass Avocados"
    },
    currentStatus: "Active Ordering Client",
    notes: "Top luxury resort on the North Coast. Demands export-standard sorting on all vegetables.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Pre-washed, graded Euro-crates with zero prep kitchen rejection."
  },
  {
    id: "lead-coast-tamarind",
    name: "Tamarind Mombasa & Dhow",
    area: "Mombasa & Nyali",
    region: "Coast",
    exactLocation: "Cement Silo Road, Nyali, Mombasa",
    cuisine: "Signature Coastal Seafood & Luxury Dhow Cruises",
    decisionMaker: "General Manager & Executive Chef",
    phone: "+254 722 205 160",
    email: "mombasa@tamarind.co.ke",
    estimatedWeeklyDemand: "Spiny Lobster (80kg), Jumbo Prawns (100kg), Crabs (50kg), Shangi Potatoes (300kg), Salad Tomatoes (150kg), French Beans (40kg)",
    whatWeCanSupply: {
      seafood: "Deep Sea Red Snapper, Live Spiny Lobsters, Coastal Jumbo Prawns",
      meat: "Prime Boran Beef Steaks, Free-Range Chicken breasts",
      produce: "Grade 1 Shangi Potatoes for triple-cooked chips, Salad Tomatoes, Snow Peas"
    },
    currentStatus: "Active Ordering Client",
    notes: "Iconic seafood dining institution in Mombasa. Highly regular weekly PO replenishment.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Strict quality SLA and instant replacement runner for any receiving bay queries."
  },
  {
    id: "lead-coast-swahili",
    name: "Swahili Beach Resort",
    area: "Diani Beach",
    region: "Coast",
    exactLocation: "Diani Beach Road, Kwale",
    cuisine: "Arabian, Indian & Swahili Coastal Fusion",
    decisionMaker: "Executive Chef & Purchasing Manager",
    phone: "+254 727 600 660",
    email: "purchasing@swahilibeach.com",
    estimatedWeeklyDemand: "Shangi Potatoes (500kg), Red Onions (300kg), Whole Halal Goat (120kg), Prime Boran Beef (200kg), Lake Tilapia (80kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia fillets, Ocean Snapper, Calamari",
      meat: "Halal Kiamaiko Mbuzi (Goat) carcasses, Prime Aged Beef Ribeye",
      produce: "Nyandarua Potatoes, Mwea Tomatoes, Oloitokitok Red Onions, Garlic & Ginger"
    },
    currentStatus: "Cold Contacted",
    notes: "5-star resort with 4 restaurants on property. Huge volume potential.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Consolidated single invoice and single truck delivery for all meat, produce, and fish."
  },

  // =========================================================================
  // 8. NAKURU & NAIVASHA (RIFT VALLEY HOSPITALITY CORRIDOR)
  // =========================================================================
  {
    id: "lead-rv-enashipai",
    name: "Enashipai Resort & Spa",
    area: "Naivasha",
    region: "Rift Valley",
    exactLocation: "Moi South Lake Road, Naivasha",
    cuisine: "Upscale Conference & Luxury Resort Dining",
    decisionMaker: "Executive Chef David & Head of Food Procurement",
    phone: "+254 719 048 000",
    email: "purchasing@enashipai.com",
    estimatedWeeklyDemand: "Prime Boran Beef Striploin (300kg), Whole Mbuzi Carcasses (200kg), Lake Victoria Tilapia (150kg), Jumbo Prawns (80kg), Fresh Vegetables (800kg)",
    whatWeCanSupply: {
      seafood: "Fresh coastal Jumbo Prawns on flake-ice, Lake Victoria Tilapia & Nile Perch Fillets",
      meat: "Aged Boran Beef (Striploin, Ribeye, T-Bone), Kiamaiko Halal Goat Carcasses",
      produce: "Grade 1 Nyandarua Shangi Potatoes, Mwea Salad Tomatoes, Kinangop Snow Peas"
    },
    currentStatus: "Active Ordering Client",
    notes: "Largest conference and leisure resort in Naivasha. High weekend meat & seafood volumes.",
    bestContactTime: "09:30 AM - 11:00 AM",
    salesAngle: "Direct morning refrigerated route from Nairobi cold hub arriving by 6:30 AM."
  },
  {
    id: "lead-rv-grvl",
    name: "Great Rift Valley Lodge & Golf Resort",
    area: "Naivasha",
    region: "Rift Valley",
    exactLocation: "Green Park, Moi North Lake Road, Naivasha",
    cuisine: "Golf Resort & Luxury Pan-African Gastronomy",
    decisionMaker: "Head Chef Peter & Food Buyer",
    phone: "+254 722 205 894",
    email: "grvl.procurement@heritagehotels.com",
    estimatedWeeklyDemand: "Boran Beef Steaks (200kg), Halal Lamb Carcasses (100kg), Coastal Red Snapper (80kg), Nyandarua Potatoes (400kg), Salad Vegetables (300kg)",
    whatWeCanSupply: {
      seafood: "Coastal Red Snapper loins, Yellowfin Tuna, Lake Tilapia fillets",
      meat: "Dry-Aged Boran Ribeye, Halal Lamb carcasses, Free-Range Chicken",
      produce: "Grade 1 Shangi Potatoes, Mwea Tomatoes, Fine French Beans, Baby Spinach"
    },
    currentStatus: "Active Ordering Client",
    notes: "Heritage Hotels flagship. Strict adherence to veterinary health inspection stamps.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Certified veterinary-stamped meat and 100% sorting quality produce."
  },
  {
    id: "lead-rv-woodlands",
    name: "Sarova Woodlands Hotel & Spa",
    area: "Nakuru City",
    region: "Rift Valley",
    exactLocation: "Milimani, Nakuru City",
    cuisine: "Business Executive & Luxury Hotel Dining",
    decisionMaker: "Executive Chef & Purchasing Lead",
    phone: "+254 709 111 000",
    email: "woodlands.purchasing@sarovahotels.com",
    estimatedWeeklyDemand: "Boran Beef cuts (250kg), Lake Victoria Tilapia (120kg), Coastal Tiger Prawns (50kg), Shangi Potatoes (350kg), Fresh Herbs & Salads",
    whatWeCanSupply: {
      seafood: "Chilled Lake Victoria Tilapia fillets, Ocean Tiger Prawns, Calamari",
      meat: "Aged Boran Striploin & Tenderloin, Kiamaiko Mbuzi carcasses",
      produce: "Shangi Potatoes, Mwea Tomatoes, Oloitokitok Onions, Fine Snow Peas"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Premier hotel in Nakuru City. Interested in coastal seafood cold-chain dispatch.",
    bestContactTime: "10:30 AM - 11:30 AM",
    salesAngle: "Guaranteed seafood cold-chain at 0°C reaching Nakuru by 7:00 AM."
  },
  {
    id: "lead-rv-sopa",
    name: "Lake Naivasha Sopa Resort",
    area: "Naivasha",
    region: "Rift Valley",
    exactLocation: "South Lake Road, Naivasha",
    cuisine: "Safari Resort Buffet & Live Grills",
    decisionMaker: "Food & Beverage Director",
    phone: "+254 722 206 328",
    email: "naivashasopa@sopalodges.com",
    estimatedWeeklyDemand: "Shangi Potatoes (500kg), Mwea Tomatoes (300kg), Boran Beef (350kg), Whole Goat (150kg), Tilapia (100kg)",
    whatWeCanSupply: {
      seafood: "Fresh Lake Victoria Tilapia & Nile Perch fillets",
      meat: "Prime Boran Beef Stew & Roasting cuts, Whole Halal Mbuzi",
      produce: "Grade 1 Shangi Potatoes, Mwea Tomatoes, Cabbage, Carrots, Onions"
    },
    currentStatus: "Cold Contacted",
    notes: "Massive safari grounds with high tourist buffet headcount.",
    bestContactTime: "10:00 AM - 12:00 PM",
    salesAngle: "Bulk price advantages with guaranteed crate sorting and Zero Credit discipline."
  },
  {
    id: "lead-rv-thecliff",
    name: "The Cliff Nakuru",
    area: "Nakuru City",
    region: "Rift Valley",
    exactLocation: "Lake Nakuru National Park",
    cuisine: "Ultra-Luxury Safari Tent & Gourmet Fine Dining",
    decisionMaker: "Head Chef & Camp General Manager",
    phone: "+254 700 000 123",
    email: "chef@thecliffnakuru.com",
    estimatedWeeklyDemand: "Dry-Aged Boran Tenderloin (60kg), Spiny Lobster Tails (30kg), Coastal Prawns (40kg), Gourmet Microgreens & Baby Veg (35kg)",
    whatWeCanSupply: {
      seafood: "Spiny Lobster Tails, U-10 Jumbo Prawns, Line-caught Snapper",
      meat: "28-day Dry-Aged Boran Beef, Halal Lamb Racks",
      produce: "Export-grade Hass Avocados, Microgreens, Baby Vegetables, Fine Snow Peas"
    },
    currentStatus: "Negotiating Contract",
    notes: "High-end luxury tented camp. Requires exquisite product aesthetics.",
    bestContactTime: "02:00 PM - 04:00 PM",
    salesAngle: "Zero-defect guarantee and refrigerated crate delivery direct into the park."
  },

  // =========================================================================
  // 9. KISUMU & LAKE VICTORIA BASIN
  // =========================================================================
  {
    id: "lead-west-acacia",
    name: "Acacia Premier Hotel",
    area: "Kisumu City",
    region: "Western",
    exactLocation: "Achieng' Oneko Road, Kisumu Central",
    cuisine: "4-Star Luxury Business & Fine Dining (Aqua Pool Bar & Cafe)",
    decisionMaker: "Executive Chef & Purchasing Lead",
    phone: "+254 709 850 000",
    email: "procurement@acaciapremier.com",
    estimatedWeeklyDemand: "Lake Victoria Tilapia & Nile Perch (250kg), Boran Beef Steaks (200kg), Coastal Prawns & Calamari (80kg), Highland Potatoes (450kg), Mwea Tomatoes (250kg)",
    whatWeCanSupply: {
      seafood: "Daily fresh Lake Victoria Tilapia (graded 500-700g), Chilled Coastal Prawns & Red Snapper",
      meat: "Aged Boran Beef Striploin & Ribeye, Halal Goat Carcasses",
      produce: "Nyandarua Shangi Potatoes, Mwea Anna F1 Tomatoes, Oloitokitok Onions"
    },
    currentStatus: "Active Ordering Client",
    notes: "Flagship luxury hotel in Western Kenya. Consistently replenishes advance PO.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Graded Lake Victoria tilapia sizes plus coastal ocean seafood flown/trucked cold-chain."
  },
  {
    id: "lead-west-sovereign",
    name: "Sovereign Hotel",
    area: "Kisumu City",
    region: "Western",
    exactLocation: "Lolwe Drive, Milimani, Kisumu",
    cuisine: "Boutique 5-Star Hotel & Fine Dining",
    decisionMaker: "Head Chef & Operations Manager",
    phone: "+254 723 973 888",
    email: "info@sovereignhotel.co.ke",
    estimatedWeeklyDemand: "Prime Beef Medallions (80kg), Ocean Snapper (50kg), Shangi Potatoes (200kg), Snow Peas (25kg), Fine Salads (30kg)",
    whatWeCanSupply: {
      seafood: "Coastal Red Snapper fillets, Lake Victoria Tilapia loins",
      meat: "Aged Boran Beef Tenderloin, Free-Range Chicken fillets",
      produce: "Grade 1 Shangi Potatoes, Kinangop Snow Peas, Cherry Tomatoes"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Upscale boutique clientele. Highly impressed by aged Boran beef tenderness.",
    bestContactTime: "11:00 AM - 12:30 PM",
    salesAngle: "Pre-aged beef and export-grade vegetables not easily found in local markets."
  },
  {
    id: "lead-west-dunga",
    name: "Dunga Hill Camp & Lakeside Grill",
    area: "Kisumu City",
    region: "Western",
    exactLocation: "Dunga Beach Road, Kisumu",
    cuisine: "Lakeside Sunset Dining, Grills & Fresh Fish",
    decisionMaker: "Proprietor & Head Grillmaster",
    phone: "+254 721 393 939",
    email: "dungahillcamp@gmail.com",
    estimatedWeeklyDemand: "Whole Lake Tilapia (300kg), Beef Stewing Cuts (150kg), Shangi Potatoes (350kg), Tomatoes & Onions (250kg)",
    whatWeCanSupply: {
      seafood: "Grade 1 Lake Victoria Tilapia (whole & deep-scaled), Nile Perch fillets",
      meat: "Boran Beef Stew & Ribs, Mbuzi carcasses",
      produce: "Nyandarua Shangi Potatoes for French fries, Mwea Tomatoes, Oloitokitok Onions"
    },
    currentStatus: "Active Ordering Client",
    notes: "High weekend traffic for fish and chips. Fast potato consumption.",
    bestContactTime: "11:00 AM - 01:00 PM",
    salesAngle: "Calibrated potato chip varieties with high dry matter content for crispy fries."
  },
  {
    id: "lead-west-ciala",
    name: "Ciala Resort",
    area: "Kisumu Outskirts",
    region: "Western",
    exactLocation: "Daraja Mbili, Mamboleo, Kisumu",
    cuisine: "Conference & Luxury Eco-Resort Dining",
    decisionMaker: "F&B Manager & Purchasing Officer",
    phone: "+254 705 400 500",
    email: "purchasing@cialaresort.com",
    estimatedWeeklyDemand: "Shangi Potatoes (400kg), Beef cuts (220kg), Whole Goat (100kg), Fresh Tilapia (120kg), Vegetables (300kg)",
    whatWeCanSupply: {
      seafood: "Lake Tilapia & Nile Perch, Coastal Prawns",
      meat: "Prime Boran Beef, Halal Mbuzi carcasses",
      produce: "Nyandarua Potatoes, Mwea Tomatoes, Capsicums, Onions, Spinach"
    },
    currentStatus: "Cold Contacted",
    notes: "Large resort popular for conferences and government workshops.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Reliable bulk delivery directly to Mamboleo gate before kitchen prep."
  },

  // =========================================================================
  // 10. MOUNT KENYA & LAIKIPIA SAFARI CIRCUIT
  // =========================================================================
  {
    id: "lead-mtk-fairmont",
    name: "Fairmont Mount Kenya Safari Club",
    area: "Nanyuki",
    region: "Mount Kenya",
    exactLocation: "Mount Kenya Foothills, Nanyuki",
    cuisine: "5-Star World-Class Safari Heritage Gastronomy",
    decisionMaker: "Executive Chef & Regional Procurement Director",
    phone: "+254 62 203 6000",
    email: "mountkenya.procurement@fairmont.com",
    estimatedWeeklyDemand: "Dry-Aged Boran Ribeye & Tenderloin (250kg), Spiny Lobster Tails (60kg), Coastal Tiger Prawns (80kg), Lake Victoria Tilapia (100kg), Highland Gourmet Produce (500kg)",
    whatWeCanSupply: {
      seafood: "Coastal Spiny Lobster Tails, U-10 Tiger Prawns, Lake Tilapia Fillets",
      meat: "28-Day Dry-Aged Boran Prime Ribeye & Tenderloin, Halal Lamb racks",
      produce: "Nyandarua Grade 1 Potatoes, Kinangop Stringless Snow Peas, Export Baby Leeks & Carrots"
    },
    currentStatus: "Active Ordering Client",
    notes: "Premier luxury icon in Kenya. Demands absolute cold-chain integrity and tamper-sealed Euro crates.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Tamper-evident Euro-crates, 0°C seafood delivery on ice, zero tolerance for kitchen defects."
  },
  {
    id: "lead-mtk-sweetwaters",
    name: "Sweetwaters Serena Camp",
    area: "Nanyuki",
    region: "Mount Kenya",
    exactLocation: "Ol Pejeta Conservancy, Nanyuki",
    cuisine: "Luxury Safari Camp & Waterhole View Fine Dining",
    decisionMaker: "Camp Head Chef & Procurement Lead",
    phone: "+254 732 123 333",
    email: "sweetwaters.kitchen@serenahotels.com",
    estimatedWeeklyDemand: "Boran Beef Steaks (180kg), Halal Mbuzi Carcasses (120kg), Coastal Red Snapper (60kg), Shangi Potatoes (350kg), Salad Tomatoes (200kg)",
    whatWeCanSupply: {
      seafood: "Coastal Red Snapper fillets, Ocean Prawns, Lake Tilapia",
      meat: "Prime Boran Beef, Kiamaiko Halal Mbuzi, Free-Range Chicken breasts",
      produce: "Grade 1 Shangi Potatoes, Mwea Salad Tomatoes, Oloitokitok Onions, Fine French Beans"
    },
    currentStatus: "Active Ordering Client",
    notes: "Located inside Ol Pejeta Conservancy. Deliveries enter through Rongai/Nanyuki gate by 6:30 AM.",
    bestContactTime: "09:30 AM - 11:00 AM",
    salesAngle: "Direct gate-pass coordinated logistics with tamper-evident delivery crates."
  },
  {
    id: "lead-mtk-maiyan",
    name: "Maiyan Luxury Resort",
    area: "Nanyuki",
    region: "Mount Kenya",
    exactLocation: "Nanyuki - Doldol Road, Laikipia",
    cuisine: "Contemporary Pan-African & Equestrian Club Dining",
    decisionMaker: "General Manager & Executive Chef",
    phone: "+254 708 180 180",
    email: "procurement@maiyan.co.ke",
    estimatedWeeklyDemand: "Prime Boran Beef (200kg), Lake Tilapia (80kg), Shangi Potatoes (300kg), Mwea Tomatoes (150kg), Kinangop Snow Peas (30kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia fillets, Ocean Tiger Prawns",
      meat: "Aged Boran Beef (Ribeye, Striploin), Halal Goat cuts",
      produce: "Grade 1 Shangi Potatoes, Mwea Tomatoes, Export Snow Peas, Fine Herbs"
    },
    currentStatus: "Negotiating Contract",
    notes: "High-end villa resort with golf and equestrian facilities. High weekend banquet demand.",
    bestContactTime: "10:30 AM - 12:00 PM",
    salesAngle: "Reliable weekly fixed-price contract shielding kitchen from spot market spikes."
  },
  {
    id: "lead-mtk-soames",
    name: "Soames Hotel & Jack's Bar",
    area: "Nanyuki",
    region: "Mount Kenya",
    exactLocation: "Nanyuki Airport Road, Nanyuki",
    cuisine: "Classic European Bistro & Aviators' Gastropub",
    decisionMaker: "Head Chef & Bar Manager",
    phone: "+254 728 500 500",
    email: "info@soameshotelkenya.com",
    estimatedWeeklyDemand: "Aged Boran Beef Steaks (120kg), Fresh Calamari & Red Snapper (50kg), Shangi Potatoes (250kg), Salad Greens & Microgreens (30kg)",
    whatWeCanSupply: {
      seafood: "Line-caught Coastal Red Snapper, Fresh Calamari loins",
      meat: "21-Day Aged Boran Sirloin & Ribeye, Pork belly cuts",
      produce: "Grade 1 Shangi Potatoes for gastro chips, Mwea Tomatoes, Fresh herbs"
    },
    currentStatus: "Sample Basket Delivered",
    notes: "Popular dining stop for bush pilots and safari travelers. Exceptional steak demand.",
    bestContactTime: "11:00 AM - 01:00 PM",
    salesAngle: "Properly hung, dry-aged beef cuts delivered in vacuum-pack portion-ready crates."
  },
  {
    id: "lead-mtk-outspan",
    name: "Outspan Hotel & The Ark",
    area: "Nyeri & Aberdares",
    region: "Mount Kenya",
    exactLocation: "Outspan Road, Nyeri",
    cuisine: "Colonial Safari Heritage & Aberdare Forest Dining",
    decisionMaker: "F&B Manager & Purchasing Officer",
    phone: "+254 722 207 762",
    email: "outspan@thearkkenya.com",
    estimatedWeeklyDemand: "Shangi Potatoes (400kg), Boran Beef (200kg), Whole Mbuzi (100kg), Lake Tilapia (70kg), Fresh Produce (300kg)",
    whatWeCanSupply: {
      seafood: "Lake Victoria Tilapia & Nile Perch fillets",
      meat: "Prime Boran Beef stewing & roasting cuts, Halal Mbuzi carcasses",
      produce: "Nyandarua Potatoes, Mwea Tomatoes, Kinangop Snow Peas, Cabbage"
    },
    currentStatus: "Cold Contacted",
    notes: "Iconic hub for visitors heading to The Ark in Aberdare National Park.",
    bestContactTime: "10:00 AM - 11:30 AM",
    salesAngle: "Consolidated high-altitude delivery run servicing both Nyeri and Nanyuki."
  }

];

// =========================================================================
// B2B CRM ACCOUNTS & PO PERFORMANCE LEDGER (ZERO-CREDIT POLICY)
// =========================================================================
export const INITIAL_CRM_ACCOUNTS = [
  {
    id: "crm-acc-seven",
    restaurantId: "lead-westlands-seven",
    restaurantName: "Seven Seafood & Grill",
    area: "Westlands",
    region: "Nairobi",
    contactPerson: "Executive Chef Kiran",
    phone: "+254 737 776 677",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-8842",
    totalPoValue: 550000,
    balanceInPo: 184500,
    revenueGenerated: 1420000,
    ordersCompleted: 16,
    coldCallsLogged: 4,
    lastInteraction: "2026-09-04: Confirmed morning flake-ice lobster tails & snapper drop. Next PO deposit scheduled Monday.",
    paymentTerms: "100% Advance PO Deposit (Drawdown)",
    creditOutstanding: 0
  ,
    receivablesPending: 165000,
    receivableType: "Advance Proforma Pending",
    receivableDueDate: "Today 5:00 PM",
    receivableInvoiceRef: "INV-MD-8842-R",
    receivableNotes: "Invoice issued for upcoming weekend lobster & tiger prawn consignment."
  },
  {
    id: "crm-acc-ankole",
    restaurantId: "lead-kilimani-ankole",
    restaurantName: "Ankole Grill Kilimani",
    area: "Kilimani",
    region: "Nairobi",
    contactPerson: "Chef Patrick (Head of Butchery)",
    phone: "+254 710 265 653",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9012",
    totalPoValue: 480000,
    balanceInPo: 212000,
    revenueGenerated: 1180000,
    ordersCompleted: 12,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-03: 150kg dry-aged Boran ribeye delivered at 5:45 AM. Chef logged zero trimming waste.",
    paymentTerms: "Payment on Delivery (POD via M-Pesa Till)",
    creditOutstanding: 0
  ,
    receivablesPending: 98000,
    receivableType: "POD Due on Bay Drop",
    receivableDueDate: "Tomorrow 05:30 AM",
    receivableInvoiceRef: "POD-MD-9012-A",
    receivableNotes: "Scheduled 120kg Boran ribeye delivery. M-Pesa Till collection upon bay inspection."
  },
  {
    id: "crm-acc-mama-oliech",
    restaurantId: "lead-kilimani-mama-oliech",
    restaurantName: "Mama Oliech Restaurant",
    area: "Kilimani",
    region: "Nairobi",
    contactPerson: "Gladys Oliech (General Manager)",
    phone: "+254 722 795 628",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-8730",
    totalPoValue: 350000,
    balanceInPo: 94000,
    revenueGenerated: 1890000,
    ordersCompleted: 24,
    coldCallsLogged: 2,
    lastInteraction: "2026-09-05: Standing daily delivery of 120kg Lake Victoria tilapia received at 5:30 AM on slush ice.",
    paymentTerms: "Payment on Delivery (POD via M-Pesa Till)",
    creditOutstanding: 0
  ,
    receivablesPending: 65000,
    receivableType: "POD Due on Bay Drop",
    receivableDueDate: "Today - At Receiving Bay",
    receivableInvoiceRef: "POD-MD-8730-C",
    receivableNotes: "Morning 120kg Tilapia delivery arrived. Courier waiting on Gladys for Till clearance."
  },
  {
    id: "crm-acc-carnivore",
    restaurantId: "lead-karen-carnivore",
    restaurantName: "Carnivore Restaurant",
    area: "Karen",
    region: "Nairobi",
    contactPerson: "Master Carver Joseph & Head of Receiving",
    phone: "+254 722 204 647",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9150",
    totalPoValue: 750000,
    balanceInPo: 320000,
    revenueGenerated: 2650000,
    ordersCompleted: 18,
    coldCallsLogged: 5,
    lastInteraction: "2026-09-04: Delivered 25 Kiamaiko whole goat carcasses (15kg avg) with veterinary health certificate.",
    paymentTerms: "100% Advance Bank RTGS per Batch",
    creditOutstanding: 0
  ,
    receivablesPending: 280000,
    receivableType: "Advance RTGS Wire",
    receivableDueDate: "Today 2:00 PM",
    receivableInvoiceRef: "INV-MD-9150-TOP",
    receivableNotes: "Proforma issued for 25 goat carcasses + 400kg beef. RTGS wire required before dispatch."
  },
  {
    id: "crm-acc-talisman",
    restaurantId: "lead-karen-talisman",
    restaurantName: "The Talisman Restaurant",
    area: "Karen",
    region: "Nairobi",
    contactPerson: "Executive Chef Ian",
    phone: "+254 705 999 997",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-8924",
    totalPoValue: 380000,
    balanceInPo: 145000,
    revenueGenerated: 940000,
    ordersCompleted: 10,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-02: Delivered 40kg sashimi tuna loins and 50kg Kinangop snow peas; pristine rating from kitchen.",
    paymentTerms: "100% Advance PO Deposit (Drawdown)",
    creditOutstanding: 0
  ,
    receivablesPending: 0,
    receivableType: "Settled / Nil",
    receivableDueDate: "N/A",
    receivableInvoiceRef: "N/A",
    receivableNotes: "Account paid up. Sufficient advance PO deposit balance (KES 145,000)."
  },
  {
    id: "crm-acc-kempinski",
    restaurantId: "lead-westlands-kempinski",
    restaurantName: "Villa Rosa Kempinski",
    area: "Westlands",
    region: "Nairobi",
    contactPerson: "Sous Chef Alessandro (Lucca)",
    phone: "+254 703 049 000",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9204",
    totalPoValue: 600000,
    balanceInPo: 275000,
    revenueGenerated: 1560000,
    ordersCompleted: 14,
    coldCallsLogged: 4,
    lastInteraction: "2026-09-05: 6:00 AM delivery of ocean snapper & rack of lamb. Logged probe temperature 1.2°C at receiving bay.",
    paymentTerms: "100% Advance Wire per Consignment",
    creditOutstanding: 0
  ,
    receivablesPending: 185000,
    receivableType: "Advance Proforma Pending",
    receivableDueDate: "Tomorrow 05:00 AM",
    receivableInvoiceRef: "INV-MD-9204-B",
    receivableNotes: "Snapper & lamb consignment invoice sent to Lucca kitchen accounts."
  },
  {
    id: "crm-acc-fourpoints",
    restaurantId: "lead-mombasa-four-points-jkia",
    restaurantName: "Four Points by Sheraton JKIA",
    area: "CBD",
    region: "Nairobi",
    contactPerson: "Chef Brian (Executive Chef)",
    phone: "+254 709 760 000",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-8977",
    totalPoValue: 320000,
    balanceInPo: 110000,
    revenueGenerated: 780000,
    ordersCompleted: 8,
    coldCallsLogged: 2,
    lastInteraction: "2026-09-04: Delivered 50kg tiger prawns and 300kg Shangi potatoes. Verified POD payment on M-Pesa Till.",
    paymentTerms: "Payment on Delivery (POD via M-Pesa Till)",
    creditOutstanding: 0
  ,
    receivablesPending: 82000,
    receivableType: "POD Due on Bay Drop",
    receivableDueDate: "Tomorrow 06:00 AM",
    receivableInvoiceRef: "POD-MD-8977-D",
    receivableNotes: "Order for 300kg Shangi potatoes & prawns. Receiving chef to trigger corporate M-Pesa."
  },
  {
    id: "crm-acc-inti",
    restaurantId: "lead-westlands-inti",
    restaurantName: "INTI – A Nikkei Experience",
    area: "Westlands",
    region: "Nairobi",
    contactPerson: "Head Sushi Chef Roberto",
    phone: "+254 734 845 845",
    accountStage: "Sampling / Tasting",
    activePoNumber: "PENDING-PO",
    totalPoValue: 0,
    balanceInPo: 0,
    revenueGenerated: 0,
    ordersCompleted: 0,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-04: Chef received tasting box (tuna loin, Hass avocados). Feedback positive; PO being prepared for 100% advance deposit.",
    paymentTerms: "100% Advance PO Deposit (Required)",
    creditOutstanding: 0
  ,
    receivablesPending: 120000,
    receivableType: "Advance Deposit Required",
    receivableDueDate: "Due on Confirmation",
    receivableInvoiceRef: "QUOTE-INTI-01",
    receivableNotes: "Tasting approved. Sales following up with Roberto for advance deposit to activate account."
  },
  {
    id: "crm-acc-fogo",
    restaurantId: "lead-westlands-fogo",
    restaurantName: "Fogo Gaucho Westlands",
    area: "Westlands",
    region: "Nairobi",
    contactPerson: "Master Carver Paulo",
    phone: "+254 712 123 456",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9080",
    totalPoValue: 620000,
    balanceInPo: 240000,
    revenueGenerated: 1650000,
    ordersCompleted: 15,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-03: Delivered 400kg Boran steer quarters. Balance drawdown updated to KES 240,000.",
    paymentTerms: "100% Advance PO Deposit (Drawdown)",
    creditOutstanding: 0
  ,
    receivablesPending: 0,
    receivableType: "Settled / Nil",
    receivableDueDate: "N/A",
    receivableInvoiceRef: "N/A",
    receivableNotes: "Paid up. PO balance has KES 240,000 remaining."
  },
  {
    id: "crm-acc-cjs",
    restaurantId: "lead-kilimani-cjs",
    restaurantName: "CJ's Restaurant (Kilimani)",
    area: "Kilimani",
    region: "Nairobi",
    contactPerson: "Commissary Head Hassan",
    phone: "+254 792 000 055",
    accountStage: "Negotiating",
    activePoNumber: "DRAFT-PO-01",
    totalPoValue: 0,
    balanceInPo: 0,
    revenueGenerated: 0,
    ordersCompleted: 0,
    coldCallsLogged: 4,
    lastInteraction: "2026-09-05: Finalizing 50kg bag potato trial. Enforcing strict Advance / POD policy; commissary accepted M-Pesa Till on drop.",
    paymentTerms: "Payment on Delivery (POD via M-Pesa Till)",
    creditOutstanding: 0
  ,
    receivablesPending: 145000,
    receivableType: "POD Commitment",
    receivableDueDate: "Today 4:00 PM",
    receivableInvoiceRef: "DRAFT-PO-CJS-01",
    receivableNotes: "Trial potato & avocado run agreed. Pushing commissary head to confirm Till deposit."
  }
,
  {
    id: "crm-acc-severin",
    restaurantId: "lead-coast-severin",
    restaurantName: "Severin Sea Lodge",
    area: "Mombasa & Bamburi",
    region: "Coast",
    contactPerson: "Executive Chef Kenneth",
    phone: "+254 722 265 600",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9311",
    totalPoValue: 680000,
    balanceInPo: 295000,
    revenueGenerated: 1850000,
    ordersCompleted: 18,
    coldCallsLogged: 4,
    lastInteraction: "2026-09-04: SGR chilled container delivery of 400kg Shangi potatoes and 150kg Boran beef arrived 06:15 AM.",
    paymentTerms: "100% Advance PO Deposit (Drawdown)",
    creditOutstanding: 0
  ,
    receivablesPending: 195000,
    receivableType: "Advance RTGS Wire",
    receivableDueDate: "Today 12:00 PM",
    receivableInvoiceRef: "INV-MD-9311-SGR",
    receivableNotes: "SGR chilled container shipment scheduled for Mombasa drop. Wire required before loading."
  },
  {
    id: "crm-acc-nomad",
    restaurantId: "lead-coast-nomad",
    restaurantName: "Nomad Beach Bar (Diani)",
    area: "Diani Beach",
    region: "Coast",
    contactPerson: "Chef Mario",
    phone: "+254 725 373 888",
    accountStage: "Sampling / Tasting",
    activePoNumber: "PENDING-PO",
    totalPoValue: 0,
    balanceInPo: 0,
    revenueGenerated: 0,
    ordersCompleted: 0,
    coldCallsLogged: 2,
    lastInteraction: "2026-09-03: Delivered sample basket of cherry tomatoes, Kinangop snow peas, and aged tenderloin. Positive feedback.",
    paymentTerms: "100% Advance PO Deposit (Required)",
    creditOutstanding: 0
  ,
    receivablesPending: 85000,
    receivableType: "Advance Deposit Required",
    receivableDueDate: "Due on Confirmation",
    receivableInvoiceRef: "QUOTE-NOMAD-02",
    receivableNotes: "Chef Mario requested formal invoice for seafood & steak trial pack."
  },
  {
    id: "crm-acc-hemingways",
    restaurantId: "lead-coast-hemingways",
    restaurantName: "Hemingways Watamu",
    area: "Watamu & Malindi",
    region: "Coast",
    contactPerson: "Head Chef Archie",
    phone: "+254 709 188 000",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9402",
    totalPoValue: 450000,
    balanceInPo: 180000,
    revenueGenerated: 1250000,
    ordersCompleted: 11,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-05: 21-day aged tenderloin & export snow peas delivered in sanitized Euro-crates. Drawdown confirmed.",
    paymentTerms: "100% Advance Wire per Consignment",
    creditOutstanding: 0
  ,
    receivablesPending: 0,
    receivableType: "Settled / Nil",
    receivableDueDate: "N/A",
    receivableInvoiceRef: "N/A",
    receivableNotes: "Account fully paid up. KES 180,000 advance balance available."
  },
  {
    id: "crm-acc-enashipai",
    restaurantId: "lead-rv-enashipai",
    restaurantName: "Enashipai Resort (Naivasha)",
    area: "Naivasha",
    region: "Rift Valley",
    contactPerson: "Executive Chef David",
    phone: "+254 719 048 000",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9510",
    totalPoValue: 750000,
    balanceInPo: 320000,
    revenueGenerated: 2100000,
    ordersCompleted: 20,
    coldCallsLogged: 5,
    lastInteraction: "2026-09-04: Delivered 300kg striploin and 80kg jumbo prawns on ice for weekend conference banquets.",
    paymentTerms: "100% Advance PO Deposit (Drawdown)",
    creditOutstanding: 0
  ,
    receivablesPending: 220000,
    receivableType: "Advance RTGS Wire",
    receivableDueDate: "Tomorrow 05:00 AM",
    receivableInvoiceRef: "INV-MD-9510-W",
    receivableNotes: "Weekend conference banquet restock: 300kg striploin & jumbo prawns. Wire verification pending."
  },
  {
    id: "crm-acc-grvl",
    restaurantId: "lead-rv-grvl",
    restaurantName: "Great Rift Valley Lodge",
    area: "Naivasha",
    region: "Rift Valley",
    contactPerson: "Head Chef Peter",
    phone: "+254 722 205 894",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9555",
    totalPoValue: 380000,
    balanceInPo: 145000,
    revenueGenerated: 920000,
    ordersCompleted: 9,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-03: 400kg Nyandarua potatoes and whole lamb carcasses delivered with verified health stamps.",
    paymentTerms: "Payment on Delivery (POD via M-Pesa Till)",
    creditOutstanding: 0
  ,
    receivablesPending: 72000,
    receivableType: "POD Due on Bay Drop",
    receivableDueDate: "Tomorrow 06:30 AM",
    receivableInvoiceRef: "POD-MD-9555-R",
    receivableNotes: "Lamb carcass and Nyandarua potatoes scheduled. POD collection via M-Pesa Till at kitchen bay."
  },
  {
    id: "crm-acc-acacia",
    restaurantId: "lead-west-acacia",
    restaurantName: "Acacia Premier Hotel (Kisumu)",
    area: "Kisumu City",
    region: "Western",
    contactPerson: "Executive Chef",
    phone: "+254 709 850 000",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9601",
    totalPoValue: 520000,
    balanceInPo: 235000,
    revenueGenerated: 1450000,
    ordersCompleted: 14,
    coldCallsLogged: 4,
    lastInteraction: "2026-09-05: Weekly dispatch of graded Tilapia, coastal red snapper, and 450kg Shangi potatoes received.",
    paymentTerms: "100% Advance PO Deposit (Drawdown)",
    creditOutstanding: 0
  ,
    receivablesPending: 0,
    receivableType: "Settled / Nil",
    receivableDueDate: "N/A",
    receivableInvoiceRef: "N/A",
    receivableNotes: "Fully paid up with KES 235,000 advance balance."
  },
  {
    id: "crm-acc-fairmont",
    restaurantId: "lead-mtk-fairmont",
    restaurantName: "Fairmont Mt Kenya Safari Club",
    area: "Nanyuki",
    region: "Mount Kenya",
    contactPerson: "Executive Chef",
    phone: "+254 62 203 6000",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9700",
    totalPoValue: 850000,
    balanceInPo: 410000,
    revenueGenerated: 2650000,
    ordersCompleted: 22,
    coldCallsLogged: 5,
    lastInteraction: "2026-09-04: Delivered 250kg dry-aged Boran ribeye and 60kg lobster tails in tamper-sealed red/blue Euro-crates.",
    paymentTerms: "100% Advance Wire per Consignment",
    creditOutstanding: 0
  ,
    receivablesPending: 150000,
    receivableType: "Advance Proforma Pending",
    receivableDueDate: "Today 3:00 PM",
    receivableInvoiceRef: "INV-MD-9700-T",
    receivableNotes: "Dry-aged Boran ribeye & lobster consignment proforma awaiting treasury sign-off."
  },
  {
    id: "crm-acc-sweetwaters",
    restaurantId: "lead-mtk-sweetwaters",
    restaurantName: "Sweetwaters Serena Camp",
    area: "Nanyuki",
    region: "Mount Kenya",
    contactPerson: "Camp Head Chef",
    phone: "+254 732 123 333",
    accountStage: "Active Account",
    activePoNumber: "PO-MD-9750",
    totalPoValue: 400000,
    balanceInPo: 165000,
    revenueGenerated: 1100000,
    ordersCompleted: 10,
    coldCallsLogged: 3,
    lastInteraction: "2026-09-05: Rongai gate delivery completed at 06:15 AM. 180kg steaks and fresh highland produce cleared.",
    paymentTerms: "Payment on Delivery (POD via M-Pesa Till)",
    creditOutstanding: 0
  ,
    receivablesPending: 54000,
    receivableType: "POD Due on Bay Drop",
    receivableDueDate: "Today - Bay Collection",
    receivableInvoiceRef: "POD-MD-9750-G",
    receivableNotes: "Early morning delivery completed. Driver currently pushing camp storekeeper for Till payment."
  }

];

// =========================================================================
// CALL & TOUCHPOINT LOGS
// =========================================================================
export const INITIAL_CALL_LOGS = [
  {
    id: "call-101",
    restaurantName: "INTI – A Nikkei Experience",
    caller: "MAHALE Distributors Sales Desk",
    date: "2026-09-04 11:15 AM",
    type: "Cold Call",
    contactPerson: "Chef Roberto (Head Sushi Chef)",
    notes: "Pitched sashimi-grade Yellowfin Tuna & Hass avocados. Chef agreed to receive a 6:00 AM sample box of tuna loins on Tuesday.",
    outcome: "Sample Box Scheduled",
    followUpDate: "2026-09-08"
  },
  {
    id: "call-102",
    restaurantName: "CJ's Restaurant (Kilimani)",
    caller: "MAHALE Distributors Sales Desk",
    date: "2026-09-05 09:40 AM",
    type: "In-Person Commissary Meeting",
    contactPerson: "Commissary Head Hassan",
    notes: "Reviewed 1,200kg/wk Shangi potato requirement. Explained strict POD terms via corporate M-Pesa Till. Hassan confirmed receiving team has till authorization.",
    outcome: "Terms Agreed (POD)",
    followUpDate: "2026-09-07"
  },
  {
    id: "call-103",
    restaurantName: "Cultiva Kenya",
    caller: "MAHALE Distributors Sales Desk",
    date: "2026-09-03 02:15 PM",
    type: "Phone Follow-Up",
    contactPerson: "Chef Ariel Moss",
    notes: "Followed up on line-caught red snapper sample. Chef praised the flesh firmness and absence of foul fish odor. Preparing initial KES 150k advance PO.",
    outcome: "PO Issuance Expected",
    followUpDate: "2026-09-06"
  },
  {
    id: "call-104",
    restaurantName: "Ole Sereni Hotel",
    caller: "MAHALE Distributors Sales Desk",
    date: "2026-09-02 10:00 AM",
    type: "Cold Call",
    contactPerson: "Executive Chef & Purchasing Lead",
    notes: "Introduced our 5:30 AM early morning route via Southern Bypass. Emphasized dry-aged Boran ribeye for Eagle's Steakhouse. Sent WhatsApp digital catalog.",
    outcome: "Catalog Sent via WhatsApp",
    followUpDate: "2026-09-09"
  },
  {
    id: "call-105",
    restaurantName: "Seven Seafood & Grill",
    caller: "MAHALE Distributors Account Manager",
    date: "2026-09-04 04:30 PM",
    type: "Account Check-In",
    contactPerson: "Executive Chef Kiran",
    notes: "Confirmed weekend lobster tail and tiger prawn allocation. Notified chef that PO-MD-8842 balance has KES 184,500 remaining. Top-up invoice sent.",
    outcome: "PO Top-Up Scheduled",
    followUpDate: "2026-09-08"
  }
,
  {
    id: "call-106",
    restaurantName: "Enashipai Resort (Naivasha)",
    caller: "MAHALE Distributors Sales Desk",
    date: "2026-09-04 10:30 AM",
    type: "Account Check-In",
    contactPerson: "Executive Chef David",
    notes: "Confirmed weekend banquet order of 300kg striploin and 80kg jumbo prawns on flake ice. PO-MD-9510 drawdown approved.",
    outcome: "Order Dispatched",
    followUpDate: "2026-09-09"
  },
  {
    id: "call-107",
    restaurantName: "Fairmont Mt Kenya Safari Club",
    caller: "MAHALE Distributors Account Manager",
    date: "2026-09-04 03:45 PM",
    type: "Quality Review",
    contactPerson: "Executive Chef",
    notes: "Chef verified zero defect on 28-day dry aged Boran ribeye. Re-ordered 60kg spiny lobster tails for Saturday gala dinner.",
    outcome: "Repeat Order Confirmed",
    followUpDate: "2026-09-10"
  },
  {
    id: "call-108",
    restaurantName: "Severin Sea Lodge (Mombasa)",
    caller: "MAHALE Distributors Sales Desk",
    date: "2026-09-05 08:30 AM",
    type: "Logistics Verification",
    contactPerson: "Executive Chef Kenneth",
    notes: "SGR chilled container arrival at 06:15 AM confirmed with receiving team. Temperature probe read 1.8°C.",
    outcome: "Delivery Verified",
    followUpDate: "2026-09-08"
  }

];

export const SALES_SCRIPTS = {
  coldCall: {
    title: "Head Chef / F&B Manager Telephone Script (2-Minute Pitch)",
    hook: "Good morning Chef [Name], this is [Your Name] from MAHALE Distributors Supply. I know your kitchen is busy prepping for lunch, so I'll take just 60 seconds.",
    body: "We currently supply fresh farm produce, aged Boran beef, coastal seafood (lobster, tiger prawns, red snapper), and Lake Victoria fish directly to premier kitchens like Seven Seafood, Ankole Grill, and Tamarind. We do 5:30 AM early morning kitchen deliveries in temperature-controlled vans, straight from our cold-chain packhouse.",
    valueProp: "Right now, market rates for Shangi potatoes are hitting KES 80/kg and seafood prices fluctuate wildly at City Market, but we fix your wholesale prices on 30-day contracts—and we guarantee Grade 1 sorting with zero kitchen rejection.",
    callToAction: "I'd love to drop off a complimentary Chef's Tasting Basket this Thursday morning at 6:00 AM—with 10kg of Nyandarua potatoes, 5kg Grade 1 Mwea salad tomatoes, and fresh ocean prawns or Lake Tilapia fillets for you to test during prep. Which morning works best for your receiving staff?"
  },
  whatsappPitch: {
    title: "Chef WhatsApp Introduction & Digital Catalog Link",
    template: `Hello Chef {chefName}! 👋 Hope service went great today.

This is {salesRepName} from *MAHALE Distributors Supply Kenya*. We deliver farm-fresh produce, coastal seafood, Halal aged meats, and daily Lake Victoria catch direct to your kitchen door before 7:00 AM.

🔥 *This Week's Chef Wholesale Highlights:*
🥔 Grade 1 Shangi Potatoes (Nyandarua) - KES {potatoPrice}/kg
🍅 Anna F1 Firm Salad Tomatoes (Mwea) - KES {tomatoPrice}/kg
🧅 Bombay Red Onions (Oloitokitok) - KES {onionPrice}/kg
🫛 Crisp Snow Peas (Kinangop) - KES {peasPrice}/kg
🦐 Jumbo Ocean Tiger Prawns (U-10) - KES {prawnsPrice}/kg
🐟 Fresh Lake Victoria Tilapia Fillet - KES {fishPrice}/kg
🥩 Aged Boran Beef Tenderloin - KES {beefPrice}/kg

💳 *Payment Terms:* Strict 100% Advance or Payment on Delivery (POD) via M-Pesa Till. Zero credit terms extended.

📲 *Browse Our Live Kitchen Catalog & Order Online:*
{portalLink}

🎁 *Can we send your kitchen a free Chef's Sample Basket tomorrow morning?* Just reply with your delivery address or tap the link to test an order!`
  }
};
