// ==========================================
// SUGARAN KATTA (सुगरण कट्टा) - CORE APP ENGINE
// Fresh • Clean • Chopped Vegetables | Pune
// WhatsApp: +91 9156872582 | Narhe Ambegaon, Pune
// ==========================================

const WHATSAPP_NUMBER = "918669289173";

// Localities in South Pune served
const PUNE_LOCALITIES = [
  { name: "Narhe (नऱ्हे)", pin: "411041", available: true, delivery: "Free above ₹149" },
  { name: "Ambegaon Budruk (आंबेगाव बु.)", pin: "411046", available: true, delivery: "Free above ₹149" },
  { name: "Ambegaon Khurd (आंबेगाव खु.)", pin: "411046", available: true, delivery: "Free above ₹149" },
  { name: "Dhayari (धायरी)", pin: "411041", available: true, delivery: "Free above ₹199" },
  { name: "Vadgaon Budruk (वडगाव बु.)", pin: "411041", available: true, delivery: "Free above ₹199" },
  { name: "Katraj / Bharati Vidyapeeth (कात्रज)", pin: "411046", available: true, delivery: "Free above ₹199" },
  { name: "Sinhagad Road / Anand Nagar (सिंहगड रोड)", pin: "411051", available: true, delivery: "Free above ₹249" },
  { name: "Warje (वारजे)", pin: "411058", available: true, delivery: "Free above ₹299" },
  { name: "Manik Baug / Hingne (माणिक बाग)", pin: "411051", available: true, delivery: "Free above ₹249" },
];

// Product Catalog
const PRODUCTS = [
  // --- 1. CHOPPED VEGETABLES (कट केलेल्या भाज्या) ---
  {
    id: "cut-onion",
    category: "cut",
    name_mr: "चिरलेला कांदा (कांदा)",
    name_en: "Chopped Onions",
    subtitle_mr: "एकसमान बारीक चिरलेला, डोळ्यात पाणी न काढता!",
    subtitle_en: "Finely diced fresh red onions ready for tadka",
    price: 25,
    unit: "200g पॅकेट",
    badge_mr: "सर्वात लोकप्रिय",
    badge_en: "Bestseller",
    badge_color: "bg-amber-500",
    color: "#e11d48",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80",
    description_mr: "स्वच्छ निवडलेला आणि एकसमान बारीक चिरलेला कांदा. पोहे, उपमा, डाळ फ्राय, भाज्या आणि मिसळीसाठी लगेच वापरा.",
    description_en: "Evenly diced fresh onions. Cleaned and packed in food-grade 200g punnet.",
    prep_tip_mr: "कांदा कापताना डोळ्यात पाणी येणे १००% बंद!",
    prep_tip_en: "Zero tears, zero prep time.",
  },
  {
    id: "cut-tomato",
    category: "cut",
    name_mr: "चिरलेला टोमॅटो",
    name_en: "Diced Tomatoes",
    subtitle_mr: "पाणी न गळता स्वच्छ चौकोनी कापलेला",
    subtitle_en: "Cleanly diced firm red ripe tomatoes",
    price: 20,
    unit: "200g पॅकेट",
    badge_mr: "ताज्या",
    badge_en: "Fresh",
    badge_color: "bg-emerald-600",
    color: "#dc2626",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80",
    description_mr: "लाल चुटूक, घट्ट टोमॅटोचे चौकोनी तुकडे. करी, रस्सा, सॅलड आणि ऑम्लेटसाठी उत्तम.",
    description_en: "Neatly diced fresh tomatoes ready to toss into gravies and curries.",
    prep_tip_mr: "ग्रेव्ही आणि रस्सा पटकन तयार होतो.",
    prep_tip_en: "Toss straight into your heated pan.",
  },
  {
    id: "cut-green-chili",
    category: "cut",
    name_mr: "कापलेली हिरवी मिरची",
    name_en: "Chopped Green Chilies",
    subtitle_mr: "देठ काढून बारीक चकत्या कापलेली",
    subtitle_en: "De-stemmed, washed & neatly chopped spicy green chilies",
    price: 20,
    unit: "100g पॅकेट",
    badge_mr: "स्वच्छ धुऊन",
    badge_en: "Hygienic",
    badge_color: "bg-green-600",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=600&auto=format&fit=crop&q=80",
    description_mr: "देठ काढून स्वच्छ धुतलेली आणि बारीक कापलेली गावरान हिरवी मिरची. हाताला तिखट न लागता स्वयंपाक करा.",
    description_en: "Washed and finely sliced chilies. No chili burns on fingers!",
    prep_tip_mr: "हाताला जळजळ होण्याची चिंता नाही.",
    prep_tip_en: "Safe cooking with zero chili-hand irritation.",
  },
  {
    id: "cut-carrot",
    category: "cut",
    name_mr: "चिरलेले गाजर",
    name_en: "Diced Fresh Carrots",
    subtitle_mr: "साले काढून एकसमान चौकोनी कापलेले गाजर",
    subtitle_en: "Peeled & evenly diced crunchy sweet carrots",
    price: 30,
    unit: "200g पॅकेट",
    badge_mr: "क्रंची",
    badge_en: "Crunchy",
    badge_color: "bg-orange-500",
    color: "#ea580c",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?w=600&auto=format&fit=crop&q=80",
    description_mr: "लाल-केशरी ताजे गाजर, साले काढून छोटे चौकोनी काप. पुलाव, सॅलड, सांबार आणि मिक्स व्हेजसाठी तयार.",
    description_en: "Peeled and diced farm carrots. Ideal for fried rice, sambar, or pulao.",
    prep_tip_mr: "पुलाव आणि सांबारसाठी परिपूर्ण आकार.",
    prep_tip_en: "Cooks evenly in under 5 minutes.",
  },
  {
    id: "cut-capsicum",
    category: "cut",
    name_mr: "शिमला मिरची (Diced)",
    name_en: "Chopped Capsicum / Bell Pepper",
    subtitle_mr: "बिया काढून स्वच्छ चौकोनी चिरलेली",
    subtitle_en: "De-seeded & diced crisp green bell pepper",
    price: 30,
    unit: "200g पॅकेट",
    badge_mr: "ताज्या",
    badge_en: "Fresh",
    badge_color: "bg-emerald-600",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&auto=format&fit=crop&q=80",
    description_mr: "बिया आणि पांढरा भाग पूर्ण काढून स्वच्छ चौकोनी तुकडे केलेली शिमला मिरची. नूडल्स, भाजी, पिझ्झासाठी उत्तम.",
    description_en: "De-seeded and diced crisp capsicum for curries, noodles, and fried rice.",
    prep_tip_mr: "बिया काढण्याचे श्रम वाचतात.",
    prep_tip_en: "100% usable vegetable with zero waste.",
  },
  {
    id: "cut-cabbage",
    category: "cut",
    name_mr: "चिरलेली कोबी",
    name_en: "Shredded Cabbage",
    subtitle_mr: "बारीक लांबट किंवा चौकोनी चिरलेली",
    subtitle_en: "Finely shredded crisp green cabbage",
    price: 25,
    unit: "200g पॅकेट",
    badge_mr: "वेळेची बचत",
    badge_en: "Time Saver",
    badge_color: "bg-teal-600",
    color: "#059669",
    image: "https://images.unsplash.com/photo-1621459555843-9a77f1d07ec7?w=600&auto=format&fit=crop&q=80",
    description_mr: "स्वच्छ धुवून बारीक लांबट चिरलेली ताजी कोबी. कोबीची भाजी, मंचुरियन, सॅलडसाठी रेडी.",
    description_en: "Washed and shredded cabbage. Crisp texture preserved in sealed packaging.",
    prep_tip_mr: "बारीक चिरण्यासाठी लागणारा १५ मिनिटांचा वेळ वाचतो.",
    prep_tip_en: "Saves 15 mins of tricky shredding.",
  },
  {
    id: "cut-misal-veg",
    category: "cut",
    name_mr: "मिसर भाजी / मिक्स वेज",
    name_en: "Mix Veg / Misal Veg Mix",
    subtitle_mr: "गाजर, मटार, फ्लॉवर, बीन्स आणि बटाटा मिक्स",
    subtitle_en: "Chef curated blend of diced carrots, peas, beans, cauliflower & potato",
    price: 35,
    unit: "250g पॅकेट",
    badge_mr: "सुपर कॉम्बो",
    badge_en: "Super Saver",
    badge_color: "bg-purple-600",
    color: "#7e22ce",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    description_mr: "घरी मिक्स व्हेज भाजी, कुर्मा किंवा पुलाव बनवण्यासाठी सर्व भाज्यांचे योग्य प्रमाणात मिश्रण.",
    description_en: "A perfect mix of fresh seasonal vegetables chopped to uniform size.",
    prep_tip_mr: "५ भाज्या स्वतंत्रपणे धुणे व चिरण्याची गरज नाही!",
    prep_tip_en: "5 veggies washed & chopped in 1 single pack.",
  },
  {
    id: "cut-spinach",
    category: "cut",
    name_mr: "पालक (निवडलेला व कापलेला)",
    name_en: "Chopped & Washed Spinach",
    subtitle_mr: "माती काढून स्वच्छ धुतलेला व चिरलेला",
    subtitle_en: "Handpicked, grit-free ozone-washed chopped spinach",
    price: 30,
    unit: "200g पॅकेट",
    badge_mr: "धुतलेला",
    badge_en: "Triple Washed",
    badge_color: "bg-emerald-700",
    color: "#166534",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",
    description_mr: "पालकातील माती व मुळे काढून २ वेळा स्वच्छ पाण्याने धुतलेला आणि कापलेला पालक. डाळ-पालक, पालक पनीरसाठी तयार.",
    description_en: "Thoroughly washed to remove every trace of sand or grit, then neatly chopped.",
    prep_tip_mr: "पालक निवडणे व माती धुण्याचे २० मिनिटांचे मोठे काम संपले!",
    prep_tip_en: "No sandy grit. Ready for Dal Palak or Palak Paneer.",
  },
  {
    id: "cut-coriander",
    category: "cut",
    name_mr: "चिरलेली कोथिंबीर",
    name_en: "Chopped Fresh Coriander",
    subtitle_mr: "गावरान सुवासिक, मुळं काढून बारीक चिरलेली",
    subtitle_en: "Fragrant desi coriander, stems trimmed & finely chopped",
    price: 25,
    unit: "100g पॅकेट",
    badge_mr: "सुवासिक",
    badge_en: "Desi Aroma",
    badge_color: "bg-green-700",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1589135233689-d562f7f9e80e?w=600&auto=format&fit=crop&q=80",
    description_mr: "ताज्या हिरव्यागार गावरान कोथिंबिरीचे देठ काढून स्वच्छ धुवून बारीक चिरलेली. स्वयंपाकावर लगेच भुरभुरा.",
    description_en: "Clean, dry, finely chopped fresh coriander leaves for garnishing every meal.",
    prep_tip_mr: "स्वयंपाकावर थेट सजवण्यासाठी हँडी पॅक.",
    prep_tip_en: "Ready garnish for your morning breakfast & lunch.",
  },
  {
    id: "cut-french-beans",
    category: "cut",
    name_mr: "फ्रेंच बीन्स (फरसबी)",
    name_en: "Chopped French Beans",
    subtitle_mr: "दोरे काढून एकसमान तुकडे केलेल्या",
    subtitle_en: "Stringed & cross-cut fresh green French beans",
    price: 35,
    unit: "200g पॅकेट",
    badge_mr: "दोरे काढलेले",
    badge_en: "String Free",
    badge_color: "bg-emerald-600",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1557844352-761f2565b576?w=600&auto=format&fit=crop&q=80",
    description_mr: "दोन्ही बाजूचे टोक आणि दोरे काढून एकसमान आकाराने चिरलेल्या फ्रेंच बीन्स. भाजी, पुलाव आणि फ्राइड राईससाठी.",
    description_en: "Both ends trimmed, strings removed, neatly sliced into tender bite-sized pieces.",
    prep_tip_mr: "दोरे काढण्याचा किचकट वेळ वाचतो.",
    prep_tip_en: "Saves tedious stringing and fine chopping.",
  },
  {
    id: "cut-potato",
    category: "cut",
    name_mr: "सोललेला व कापलेला बटाटा",
    name_en: "Peeled & Diced Potatoes",
    subtitle_mr: "साले काढून पाण्यामध्ये सुरक्षित केलेले क्यूब्स",
    subtitle_en: "Peeled, uniformly diced potato cubes packed fresh",
    price: 25,
    unit: "250g पॅकेट",
    badge_mr: "सोललेला",
    badge_en: "Peeled",
    badge_color: "bg-yellow-600",
    color: "#ca8a04",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",
    description_mr: "साले काढून, स्टार्च धुवून एकसमान चौकोनी कापलेला बटाटा. भाजी, सुका बटाटा, रस्सा किंवा पुलावसाठी तत्काळ वापरा.",
    description_en: "Peeled, starch rinsed and cubed. No blackening, clean and fresh.",
    prep_tip_mr: "थेट तेलात किंवा कुकरमध्ये टाका.",
    prep_tip_en: "Straight to your cooker or kadhai.",
  },
  {
    id: "cut-beet",
    category: "cut",
    name_mr: "कापलेले बीट (Diced/Grated)",
    name_en: "Diced / Grated Beetroot",
    subtitle_mr: "साले काढून चौकोनी तुकडे / किसलेले",
    subtitle_en: "Peeled and diced ruby-red nutritious beetroot",
    price: 30,
    unit: "200g पॅकेट",
    badge_mr: "रक्तवर्धक",
    badge_en: "Healthy",
    badge_color: "bg-rose-700",
    color: "#9f1239",
    image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=600&auto=format&fit=crop&q=80",
    description_mr: "हाताला लाल रंग न लागता बीट खाण्याचा आनंद. सॅलड, ज्यूस आणि बीट पराठ्यासाठी एकदम सोयीस्कर.",
    description_en: "Peeled and diced beetroot cubes. No purple stains on your palms!",
    prep_tip_mr: "हाताला लाल डाग न पडता तयार बीट मिळवा.",
    prep_tip_en: "Zero stained hands, high in iron and taste.",
  },
  {
    id: "cut-sprouts",
    category: "cut",
    name_mr: "ताज्या मोड आलेली कडधान्ये (स्प्राउट्स)",
    name_en: "Fresh Mixed Sprouts",
    subtitle_mr: "मटकी, मूग, हरभरा हायजेनिक मोड आलेले",
    subtitle_en: "Hygienically sprouted tender matki & moong sprouts",
    price: 30,
    unit: "200g पॅकेट",
    badge_mr: "प्रथिनेयुक्त",
    badge_en: "High Protein",
    badge_color: "bg-emerald-700",
    color: "#166534",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80",
    description_mr: "घरगुती स्वच्छतेत मोड आणलेली कडधान्ये. मिसळ उसळ, सकाळचा डाएट नाश्ता आणि सॅलडसाठी सर्वोत्तम.",
    description_en: "Sprouted under controlled hygiene. Crisp, sweet and packed with plant protein.",
    prep_tip_mr: "उसळ व मिसळीसाठी नंबर १ पर्याय.",
    prep_tip_en: "Ideal for Pune style Misal or healthy morning chat.",
  },
  {
    id: "cut-salad-bowl",
    category: "cut",
    name_mr: "पौष्टिक सॅलड प्लॅटर (सलाद)",
    name_en: "Fresh Healthy Salad Platter",
    subtitle_mr: "काकडी, गाजर, टोमॅटो, बीट, लिंबू स्लाईस",
    subtitle_en: "Crisp sliced cucumber, carrot, tomato, beet with lemon wedge",
    price: 45,
    unit: "250g कंटेनर",
    badge_mr: "रेडी टू ईट",
    badge_en: "Ready-to-Eat",
    badge_color: "bg-green-600",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    description_mr: "ऑफिस डबा किंवा जेवणासोबत आरोग्यदायी सॅलड. कापलेले आणि स्वच्छ पॅक केलेले, फक्त झाकण उघडा आणि खा.",
    description_en: "Freshly sliced garden salad with lemon wedges. Keep fit and eat clean.",
    prep_tip_mr: "ऑफिस लंचसाठी किंवा रात्रीच्या जेवणासोबत सर्वोत्तम.",
    prep_tip_en: "Zero prep, 100% wholesome nutrition.",
  },

  // --- 2. UNCUT WHOLE VEGETABLES (न कट केलेल्या भाज्या - निवडून • स्वच्छ • ताज्या • टिकाऊ) ---
  {
    id: "uncut-carrot",
    category: "uncut",
    name_mr: "गाजर (अख्खे - न कट केलेले)",
    name_en: "Fresh Whole Carrots",
    subtitle_mr: "निवडून घेतलेले, स्वच्छ धुतलेले टिकाऊ गाजर",
    subtitle_en: "Farm-fresh handpicked crisp carrots",
    price: 35,
    unit: "500g",
    badge_mr: "ताजे शेतातून",
    badge_en: "Farm Direct",
    badge_color: "bg-orange-600",
    color: "#ea580c",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?w=600&auto=format&fit=crop&q=80",
    description_mr: "निवडक ताजी, गोड आणि रसदार गाजरे. स्वच्छ धुवून पॅक केलेली.",
    description_en: "Cleaned whole carrots, firm and rich in beta-carotene.",
    prep_tip_mr: "आठवडाभर छान टिकतात.",
    prep_tip_en: "Stays fresh for over a week.",
  },
  {
    id: "uncut-cucumber",
    category: "uncut",
    name_mr: "काकडी (ताजी कुरकुरीत)",
    name_en: "Fresh Salad Cucumbers",
    subtitle_mr: "कोवळी आणि गोड चवीची ताजी काकडी",
    subtitle_en: "Tender, hydrated and crisp salad cucumbers",
    price: 30,
    unit: "500g",
    badge_mr: "कोवळी",
    badge_en: "Crisp",
    badge_color: "bg-emerald-600",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600&auto=format&fit=crop&q=80",
    description_mr: "कडू नसलेली, कोवळी बिया नसलेली ताजी हिरवी काकडी. दररोजच्या कोशिंबिरीसाठी उत्तम.",
    description_en: "Tender, thin-skinned cucumbers. Refreshing for salads and raita.",
    prep_tip_mr: "कोशिंबिरीसाठी सर्वोत्तम.",
    prep_tip_en: "Cooling and hydrating.",
  },
  {
    id: "uncut-gawar",
    category: "uncut",
    name_mr: "गवार (कोवळी ताजी)",
    name_en: "Tender Cluster Beans (Gawar)",
    subtitle_mr: "गावरान चवीची, कोवळी निवडक गवार",
    subtitle_en: "Tender, pesticide-screened cluster beans",
    price: 40,
    unit: "500g",
    badge_mr: "गावरान",
    badge_en: "Desi",
    badge_color: "bg-green-700",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1557844352-761f2565b576?w=600&auto=format&fit=crop&q=80",
    description_mr: "शेतकऱ्यांकडून थेट आणलेली कोवळी गवार. सुकी उसळ किंवा बटाटा-गवार भाजीसाठी उत्तम.",
    description_en: "Tender desi cluster beans, naturally sweet and crisp.",
    prep_tip_mr: "कोवळी असल्याने चटकन शिजते.",
    prep_tip_en: "Quick to cook with traditional taste.",
  },
  {
    id: "uncut-bhendi",
    category: "uncut",
    name_mr: "भेंडी (कोवळी ताजी भेंडी)",
    name_en: "Fresh Lady Finger (Bhendi / Okra)",
    subtitle_mr: "तडक तुटणारी कोवळी भेंडी, निवडून घेतलेली",
    subtitle_en: "Snap-tender, slime-free fresh green okra",
    price: 40,
    unit: "500g",
    badge_mr: "कोवळी",
    badge_en: "Snap Fresh",
    badge_color: "bg-emerald-600",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=600&auto=format&fit=crop&q=80",
    description_mr: "एकही जून भेंडी नाही! हात लावून तपासून घेतलेली कोवळी भेंडी. कुरकुरीत भेंडी फ्राय किंवा भरली भेंडी करा.",
    description_en: "Guaranteed tender pods. Hand-checked tip-to-tip.",
    prep_tip_mr: "१००% कोवळी भेंडीची खात्री.",
    prep_tip_en: "Zero woody pods guaranteed.",
  },
  {
    id: "uncut-potato",
    category: "uncut",
    name_mr: "बटाटा (अख्खा बटाटा)",
    name_en: "Farm Fresh Potatoes",
    subtitle_mr: "माती नसलेला, गोड नसलेला स्वच्छ बटाटा",
    subtitle_en: "Firm cooking potatoes, non-sweet, clean skinned",
    price: 35,
    unit: "1 kg",
    badge_mr: "टिकाऊ",
    badge_en: "Pantry Staple",
    badge_color: "bg-amber-600",
    color: "#d97706",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",
    description_mr: "उत्कृष्ट दर्जाचे टिकणारे बटाटे. सुकी भाजी, पराठा आणि भाजीसाठी एक नंबर.",
    description_en: "Sturdy, firm potatoes with long shelf-life.",
    prep_tip_mr: "रोजच्या वापरासाठी उत्तम साठा.",
    prep_tip_en: "Kitchen essential with zero blemishes.",
  },
  {
    id: "uncut-brinjal",
    category: "uncut",
    name_mr: "वांगी (काटेरी / गावरान वांगी)",
    name_en: "Fresh Purple/Green Brinjals",
    subtitle_mr: "भरली वांगी करण्यासाठी कोवळी निवडून आणलेली",
    subtitle_en: "Tender seedless brinjals for authentic Bharli Vangi",
    price: 35,
    unit: "500g",
    badge_mr: "भरली वांगी",
    badge_en: "Special",
    badge_color: "bg-purple-700",
    color: "#6b21a8",
    image: "https://images.unsplash.com/photo-1628773822503-930a8451f7bb?w=600&auto=format&fit=crop&q=80",
    description_mr: "गावरान चमचमीत भरली वांगी बनवण्यासाठी कोवळी आणि तजेलदार वांगी. किड नसलेली स्वच्छ निवडलेली.",
    description_en: "Glossy, pest-free brinjals ideal for stuffed Maharashtrian dishes.",
    prep_tip_mr: "किड नसलेली १००% खात्रीशीर वांगी.",
    prep_tip_en: "Carefully checked inside-out.",
  },
  {
    id: "uncut-bottle-gourd",
    category: "uncut",
    name_mr: "दुधी भोपळा (कोवळा हलका)",
    name_en: "Tender Bottle Gourd (Dudhi)",
    subtitle_mr: "कडू नसलेला, हलका हिरवा रसदार दुधी भोपळा",
    subtitle_en: "Sweet tender bottle gourd for juice, halwa & subji",
    price: 30,
    unit: "1 नग (~600-800g)",
    badge_mr: "पाचक",
    badge_en: "Digestive",
    badge_color: "bg-lime-600",
    color: "#65a30d",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?w=600&auto=format&fit=crop&q=80",
    description_mr: "वजन कमी करण्यासाठी आणि पचनासाठी अत्यंत गुणकारी. दुधी हलवा, कोफ्ता किंवा रस्सा भाजीसाठी योग्य.",
    description_en: "Tender, watery and sweet. Excellent for morning detox juice or halwa.",
    prep_tip_mr: "सकाळच्या ज्यूससाठी आणि हलव्यासाठी उत्तम.",
    prep_tip_en: "Great for detox juices and savory dal.",
  },
  {
    id: "uncut-red-pumpkin",
    category: "uncut",
    name_mr: "लाल भोपळा (गोड भोपळा)",
    name_en: "Sweet Red Pumpkin",
    subtitle_mr: "घट्ट गराचा गोड लाल भोपळा तुकडा",
    subtitle_en: "Rich orange fleshed sweet pumpkin slice",
    price: 35,
    unit: "500g तुकडा",
    badge_mr: "आरोग्यदायी",
    badge_en: "Nutritious",
    badge_color: "bg-amber-600",
    color: "#d97706",
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600&auto=format&fit=crop&q=80",
    description_mr: "घावन, भोपळ्याची भाजी, घारगे आणि सांबारसाठी गोड चवीचा पिकलेला लाल भोपळा.",
    description_en: "Thick golden flesh, perfect for sambar, soups and traditional pumpkin puris.",
    prep_tip_mr: "सांबार आणि घारग्यांसाठी स्वादिष्ट.",
    prep_tip_en: "Sweet and naturally rich.",
  },

  // --- 3. LEAFY VEGETABLES (पालेभाज्या - निवडून स्वच्छ केलेल्या) ---
  {
    id: "leafy-methi",
    category: "leafy",
    name_mr: "गावरान मेथी भाजी",
    name_en: "Fresh Desi Fenugreek (Methi)",
    subtitle_mr: "मुळं छाटलेली, सुवासिक कोवळी मेथी",
    subtitle_en: "Desi fragrant fenugreek greens, roots pre-trimmed",
    price: 30,
    unit: "1 मोठी जुडी",
    badge_mr: "गावरान मेथी",
    badge_en: "Aromatic",
    badge_color: "bg-emerald-700",
    color: "#166534",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",
    description_mr: "गावरान छोट्या पानांची अत्यंत सुवासिक मेथी. मुळं छाटलेली असल्याने निवडायला ५ मिनिटेच लागतात.",
    description_en: "Small leaf desi methi with strong earthy aroma. Mud and roots trimmed off.",
    prep_tip_mr: "मेथीचे पराठे आणि सुकी मेथी भाजीसाठी अप्रतिम.",
    prep_tip_en: "Ideal for Methi Thepla & Aloo Methi.",
  },
  {
    id: "leafy-palak",
    category: "leafy",
    name_mr: "पालक जुडी (स्वच्छ निवडलेली)",
    name_en: "Fresh Spinach Bunch (Palak)",
    subtitle_mr: "हिरवीगार तजेलदार रुंद पाने",
    subtitle_en: "Crisp broad green spinach leaves, washed",
    price: 25,
    unit: "1 मोठी जुडी",
    badge_mr: "ताजी",
    badge_en: "Crisp",
    badge_color: "bg-green-600",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",
    description_mr: "मोठ्या आकाराची निरोगी पाने. डाळ पालक, सूप आणि पालक पनीरसाठी सर्वोत्तम.",
    description_en: "Broad leaf tender spinach without wilted leaves or mud.",
    prep_tip_mr: "जीवनसत्व आणि लोहाने परिपूर्ण.",
    prep_tip_en: "High iron and vitamins.",
  },
  {
    id: "leafy-shepu",
    category: "leafy",
    name_mr: "शेपूची भाजी (Dill Leaves)",
    name_en: "Fresh Shepu (Dill Leaves)",
    subtitle_mr: "पाचक, सुवासिक ताजी शेपू",
    subtitle_en: "Fragrant digestive fresh dill greens",
    price: 25,
    unit: "1 जुडी",
    badge_mr: "पाचक",
    badge_en: "Healthy",
    badge_color: "bg-teal-700",
    color: "#0f766e",
    image: "https://images.unsplash.com/photo-1589135233689-d562f7f9e80e?w=600&auto=format&fit=crop&q=80",
    description_mr: "मुगाच्या डाळीत बनवायला ताजी सुवासिक शेपू. पचनास अत्यंत हलकी आणि चविष्ट.",
    description_en: "Delicate fragrant dill leaves for traditional Moong-Shepu bhaji.",
    prep_tip_mr: "मुगाच्या डाळीसोबत अत्यंत चविष्ट लागते.",
    prep_tip_en: "Pairs wonderfully with split yellow moong dal.",
  },
  {
    id: "leafy-rajgira",
    category: "leafy",
    name_mr: "राजगिरा / लाल माठ",
    name_en: "Rajgira / Lal Math Leaves",
    subtitle_mr: "लोहाचा खजिना, रक्तातील हिमोग्लोबिन वाढवणारी",
    subtitle_en: "Red amaranth greens rich in dietary iron",
    price: 30,
    unit: "1 जुडी",
    badge_mr: "हिमोग्लोबिन स्पेशल",
    badge_en: "Iron Rich",
    badge_color: "bg-rose-700",
    color: "#9f1239",
    image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=600&auto=format&fit=crop&q=80",
    description_mr: "लाल माठ आणि हिरवा राजगिरा. लसूण-मिरचीची फोडणी देऊन चमचमीत भाजी करा.",
    description_en: "Tender red amaranth leaves. Delicious with simple garlic and green chili tempering.",
    prep_tip_mr: "लहान मुले आणि महिलांसाठी अत्यंत आरोग्यदायी.",
    prep_tip_en: "Superfood packed with natural micronutrients.",
  },
  {
    id: "leafy-alu-leaves",
    category: "leafy",
    name_mr: "आळूची पानं (अळूच्या वडीसाठी)",
    name_en: "Fresh Colocasia Leaves (Alu Vadi)",
    subtitle_mr: "कोवळी, खाज नसलेली निवडक अळू पाने",
    subtitle_en: "Tender itch-free colocasia leaves for rolls",
    price: 30,
    unit: "10 पाने पॅक",
    badge_mr: "अळू वडी स्पेशल",
    badge_en: "Vadi Special",
    badge_color: "bg-emerald-600",
    color: "#166534",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",
    description_mr: "कुरकुरीत अळू वडी किंवा अळूचे फतफते बनवण्यासाठी खास निवडलेली अळूची पाने.",
    description_en: "Uniform medium-sized colocasia leaves. Free of tears or holes.",
    prep_tip_mr: "वडी बनवण्यासाठी एकसारखा आकार.",
    prep_tip_en: "Perfect size for rolling with besan paste.",
  },
  {
    id: "leafy-curry-leaves",
    category: "leafy",
    name_mr: "ताजा कढीपत्ता (Aroma Pack)",
    name_en: "Fragrant Curry Leaves",
    subtitle_mr: "सुवासिक गावरान कढीपत्ता",
    subtitle_en: "Fresh aromatic dark green curry leaves",
    price: 15,
    unit: "1 मोठा पॅक",
    badge_mr: "सुवासिक",
    badge_en: "Fragrant",
    badge_color: "bg-green-700",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1589135233689-d562f7f9e80e?w=600&auto=format&fit=crop&q=80",
    description_mr: "फोडणीचा खरा स्वाद वाढवणारा ताजा कढीपत्ता. फ्रीजमध्ये १० दिवस टवटवीत राहतो.",
    description_en: "Farm-cut aromatic curry leaves for everyday tempering.",
    prep_tip_mr: "फोडणीला अस्सल मराठमोळा स्वाद.",
    prep_tip_en: "Essential for aromatic tadka.",
  },

  // --- 4. COMBOS & VALUE PACKS (कॉम्बो व स्पेशल पॅक्स) ---
  {
    id: "combo-morning-poha",
    category: "combo",
    name_mr: "सकाळचा नाश्ता कॉम्बो (पोहे/उपमा)",
    name_en: "Morning Breakfast Cut Combo",
    subtitle_mr: "कांदा + हिरवी मिरची + कोथिंबीर + कढीपत्ता + लिंबू",
    subtitle_en: "Chopped Onion + Green Chili + Coriander + Curry leaves + Lemon",
    price: 60,
    unit: "पूर्ण कॉम्बो पॅक",
    badge_mr: "नाश्ता सेव्हर",
    badge_en: "Breakfast Hero",
    badge_color: "bg-amber-600",
    color: "#d97706",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80",
    description_mr: "सकाळी फक्त १० मिनिटांत कांदेपोहे, उपमा किंवा शेवयाचा नाश्ता तयार. नाश्त्याचे सर्व जिन्नस एकत्र!",
    description_en: "Everything you need to toss up delicious Poha or Upma in 10 minutes flat.",
    prep_tip_mr: "सकाळची धावपळ थांबवा आणि आरामात नाश्ता करा.",
    prep_tip_en: "Cut your morning breakfast rush to just 10 mins.",
  },
  {
    id: "combo-misal-special",
    category: "combo",
    name_mr: "पुणेरी मिसळ स्पेशल कॉम्बो",
    name_en: "Puneri Misal Special Combo",
    subtitle_mr: "मोड आलेली कडधान्ये + चिरलेला कांदा + टोमॅटो + कोथिंबीर + लिंबू",
    subtitle_en: "Fresh Sprouts + Chopped Onion + Tomato + Coriander + Lemon",
    price: 90,
    unit: "पूर्ण कॉम्बो (३-४ व्यक्ती)",
    badge_mr: "पुणेरी मिसळ",
    badge_en: "Pune Favorite",
    badge_color: "bg-red-600",
    color: "#dc2626",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    description_mr: "झणझणीत पुणेरी मिसळ घरच्या घरी बनवण्यासाठी लागणारे सर्व साहित्य कट करून रेडी.",
    description_en: "Sprouted matki, finely diced onions, tomatoes, and coriander for the iconic Pune Misal.",
    prep_tip_mr: "रविवारच्या स्पेशल मिसळीसाठी १ दिवस आधी बुक करा.",
    prep_tip_en: "Book 1 day in advance for a relaxed Sunday Misal party.",
  },
  {
    id: "combo-daily-bhaji",
    category: "combo",
    name_mr: "दैनिक भाजी कॉम्बो (तुमच्या आवडीची भाजी)",
    name_en: "Daily Dinner Bhaji Prep Combo",
    subtitle_mr: "१ कट भाजी (२५०g) + चिरलेला कांदा (२००g) + टोमॅटो (२००g) + कोथिंबीर",
    subtitle_en: "Choice of 1 Cut Veg + Chopped Onion + Tomato + Fresh Coriander",
    price: 99,
    unit: "पूर्ण पॅक (४ व्यक्तींचे जेवण)",
    badge_mr: "पैशांची बचत",
    badge_en: "Best Value",
    badge_color: "bg-emerald-600",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    description_mr: "दुपारच्या किंवा रात्रीच्या जेवणासाठी लागणारी संपूर्ण भाजी तयारी. स्वयंपाकाचा वेळ ४५ मिनिटांवरून १० मिनिटांवर येतो.",
    description_en: "Complete evening meal kit: choice of pre-cut vegetable with aromatics ready.",
    prep_tip_mr: "दररोज ४५ मिनिटांचा स्वयंपाकाचा वेळ वाचवा.",
    prep_tip_en: "Cuts dinner prep from 45 mins to just 10 mins.",
  }
];

// App State
const state = {
  lang: 'mr', // 'mr' or 'en'
  activeCategory: 'all',
  searchQuery: '',
  cart: {}, // id -> quantity
  cutPreference: 'fine', // 'fine' (बारीक) or 'medium' (मध्यम)
  customer: {
    name: '',
    phone: '',
    locality: 'Narhe (नऱ्हे)',
    address: '',
    deliveryDate: '',
    deliverySlot: 'Morning (सकाळी 7:00 ते 9:00)',
    notes: '',
  },
  familyMembers: 4,
  cookingTimes: 2,
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Set default delivery date to Tomorrow (since order must be 1 day in advance as per flyer tip)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  state.customer.deliveryDate = `${yyyy}-${mm}-${dd}`;

  // Restore cart from localStorage if present
  try {
    const savedCart = localStorage.getItem('sugran_katta_cart');
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error(e);
  }

  // Bind UI Events
  setupEventListeners();

  // Initial Renders
  renderApp();
  calculateTimeSavings();
  updateCartBadge();
});

// Event Listeners Setup
function setupEventListeners() {
  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.dataset.lang;
      setLanguage(targetLang);
    });
  });

  // Category filter tabs
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
        b.classList.add('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      });
      e.currentTarget.classList.remove('bg-stone-100', 'text-stone-700', 'hover:bg-stone-200');
      e.currentTarget.classList.add('bg-emerald-600', 'text-white', 'shadow-md');

      state.activeCategory = e.currentTarget.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Cart drawer open/close
  const cartTrigger = document.getElementById('cart-drawer-trigger');
  const cartClose = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');

  if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Time saving sliders
  const familySlider = document.getElementById('slider-family');
  const cookingSlider = document.getElementById('slider-cooking');
  if (familySlider) {
    familySlider.addEventListener('input', (e) => {
      state.familyMembers = parseInt(e.target.value, 10);
      document.getElementById('family-count-label').textContent = state.familyMembers;
      calculateTimeSavings();
    });
  }
  if (cookingSlider) {
    cookingSlider.addEventListener('input', (e) => {
      state.cookingTimes = parseInt(e.target.value, 10);
      document.getElementById('cooking-times-label').textContent = state.cookingTimes;
      calculateTimeSavings();
    });
  }

  // Delivery Locality Checker
  const localitySelect = document.getElementById('check-locality-select');
  if (localitySelect) {
    localitySelect.addEventListener('change', (e) => {
      const selected = PUNE_LOCALITIES.find(loc => loc.name === e.target.value);
      const resultDiv = document.getElementById('locality-check-result');
      if (selected && resultDiv) {
        resultDiv.innerHTML = `
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
            <span class="text-2xl">✅</span>
            <div>
              <p class="font-bold text-emerald-900">${state.lang === 'mr' ? 'डिलिव्हरी उपलब्ध आहे!' : 'Delivery Available!'}</p>
              <p class="text-xs text-emerald-700">${selected.name} • ${selected.delivery} (पिन: ${selected.pin})</p>
            </div>
          </div>
        `;
      }
    });
  }

  // Flyer Modal
  const openFlyerBtn = document.getElementById('view-original-flyer-btn');
  const closeFlyerBtn = document.getElementById('close-flyer-modal');
  const flyerModal = document.getElementById('flyer-modal');
  if (openFlyerBtn && flyerModal) {
    openFlyerBtn.addEventListener('click', () => flyerModal.classList.remove('hidden'));
  }
  if (closeFlyerBtn && flyerModal) {
    closeFlyerBtn.addEventListener('click', () => flyerModal.classList.add('hidden'));
  }
}

// Language Switcher
function setLanguage(lang) {
  state.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-emerald-600', 'text-white', 'shadow');
      btn.classList.remove('text-stone-600', 'hover:text-emerald-700');
    } else {
      btn.classList.remove('bg-emerald-600', 'text-white', 'shadow');
      btn.classList.add('text-stone-600', 'hover:text-emerald-700');
    }
  });

  // Re-render localized components
  renderApp();
}

// Main Render Function
function renderApp() {
  updateLanguageTexts();
  renderProducts();
  renderCartDrawer();
  updateCartBadge();
}

// Text updates across the DOM
function updateLanguageTexts() {
  const isMr = state.lang === 'mr';

  // Toggle visible language blocks
  document.querySelectorAll('[data-lang-mr]').forEach(el => {
    el.style.display = isMr ? '' : 'none';
  });
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    el.style.display = isMr ? 'none' : '';
  });
}

// Render Products Grid
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const isMr = state.lang === 'mr';
  const query = state.searchQuery.toLowerCase();

  const filtered = PRODUCTS.filter(item => {
    // Category match
    const categoryMatch = state.activeCategory === 'all' || item.category === state.activeCategory;
    if (!categoryMatch) return false;

    // Search query match
    if (!query) return true;
    const nameMr = item.name_mr.toLowerCase();
    const nameEn = item.name_en.toLowerCase();
    const subMr = (item.subtitle_mr || '').toLowerCase();
    const subEn = (item.subtitle_en || '').toLowerCase();

    return nameMr.includes(query) || nameEn.includes(query) || subMr.includes(query) || subEn.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 bg-emerald-50 rounded-full flex items-center justify-center text-3xl">🥦</div>
        <h3 class="text-lg font-bold text-stone-700">
          ${isMr ? 'हवी असलेली भाजी सापडली नाही' : 'No vegetables found matching your search'}
        </h3>
        <p class="text-sm text-stone-500 mt-1">
          ${isMr ? 'कृपया इतर शब्द शोधून पहा किंवा व्हॉट्सॲपवर थेट सांगा!' : 'Try searching for another name or message us directly on WhatsApp!'}
        </p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition">
          ${isMr ? 'सर्व भाज्या दाखवा' : 'Show All Vegetables'}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const qty = state.cart[item.id] || 0;
    const name = isMr ? item.name_mr : item.name_en;
    const subtitle = isMr ? item.subtitle_mr : item.subtitle_en;
    const badge = isMr ? item.badge_mr : item.badge_en;
    const prepTip = isMr ? item.prep_tip_mr : item.prep_tip_en;

    return `
      <div class="punnet-card flex flex-col justify-between overflow-hidden group bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition">
        <!-- Card Top & Image -->
        <div class="relative">
          <div class="h-48 overflow-hidden bg-stone-100 relative">
            <img 
              src="${item.image}" 
              alt="${name}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              loading="lazy"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            <!-- Category Badge -->
            <span class="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full text-white shadow-sm ${item.badge_color || 'bg-emerald-600'}">
              ${badge}
            </span>

            <!-- Pack Size Tag -->
            <span class="absolute bottom-2.5 left-3 text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-black/60 backdrop-blur-sm text-white">
              📦 ${item.unit}
            </span>
          </div>

          <!-- Content Info -->
          <div class="p-4">
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="font-bold text-stone-900 text-base group-hover:text-emerald-700 transition leading-snug">
                ${name}
              </h3>
            </div>
            
            <p class="text-xs text-stone-500 line-clamp-2 mb-2 leading-relaxed">
              ${subtitle}
            </p>

            <!-- Prep Tip Pill -->
            <div class="mb-3 px-2 py-1 bg-emerald-50/70 border border-emerald-100 rounded-lg flex items-center gap-1.5 text-[11px] text-emerald-800">
              <span>✨</span>
              <span class="truncate">${prepTip}</span>
            </div>

            <!-- Price & Add to Cart -->
            <div class="flex items-center justify-between pt-2 border-t border-stone-100">
              <div>
                <span class="text-xs text-stone-400 block">${isMr ? 'किंमत' : 'Price'}</span>
                <span class="text-xl font-extrabold text-stone-900">₹${item.price}</span>
              </div>

              <!-- Quantity Controls / Add Button -->
              <div>
                ${qty === 0 ? `
                  <button 
                    onclick="addToCart('${item.id}')"
                    class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-sm hover:shadow flex items-center gap-1.5 transition"
                  >
                    <span>+</span>
                    <span>${isMr ? 'मागवा' : 'Add'}</span>
                  </button>
                ` : `
                  <div class="flex items-center bg-emerald-50 border border-emerald-200 rounded-xl p-1 shadow-inner">
                    <button 
                      onclick="updateQuantity('${item.id}', -1)"
                      class="w-7 h-7 flex items-center justify-center bg-white hover:bg-emerald-100 text-emerald-700 font-bold rounded-lg shadow-sm active:scale-90 transition text-sm"
                    >
                      -
                    </button>
                    <span class="w-8 text-center text-xs font-bold text-emerald-950">${qty}</span>
                    <button 
                      onclick="updateQuantity('${item.id}', 1)"
                      class="w-7 h-7 flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm active:scale-90 transition text-sm"
                    >
                      +
                    </button>
                  </div>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Cart Logic
function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] || 0) + 1;
  saveCart();
  renderProducts();
  renderCartDrawer();
  updateCartBadge(true);
  showToast(state.lang === 'mr' ? 'भाजी कार्टमध्ये जोडली!' : 'Added to cart!');
}

function updateQuantity(productId, delta) {
  const current = state.cart[productId] || 0;
  const newQty = current + delta;
  if (newQty <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = newQty;
  }
  saveCart();
  renderProducts();
  renderCartDrawer();
  updateCartBadge();
}

function clearCart() {
  state.cart = {};
  saveCart();
  renderProducts();
  renderCartDrawer();
  updateCartBadge();
}

function saveCart() {
  try {
    localStorage.setItem('sugran_katta_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error(e);
  }
}

function getCartDetails() {
  let subtotal = 0;
  let itemCount = 0;
  const items = [];

  for (const [id, qty] of Object.entries(state.cart)) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (prod && qty > 0) {
      const lineTotal = prod.price * qty;
      subtotal += lineTotal;
      itemCount += qty;
      items.push({
        ...prod,
        quantity: qty,
        lineTotal,
      });
    }
  }

  // Delivery is free above 149 in primary zone (Narhe / Ambegaon), else 25
  const deliveryCharge = subtotal === 0 ? 0 : (subtotal >= 149 ? 0 : 25);
  const total = subtotal + deliveryCharge;

  return { items, subtotal, deliveryCharge, total, itemCount };
}

function updateCartBadge(bounce = false) {
  const { itemCount, subtotal } = getCartDetails();
  const badges = document.querySelectorAll('.cart-count-badge');
  const totals = document.querySelectorAll('.cart-total-badge');
  const floatBtn = document.getElementById('floating-cart-btn');

  badges.forEach(b => {
    b.textContent = itemCount;
    if (itemCount > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  totals.forEach(t => {
    t.textContent = `₹${subtotal}`;
  });

  if (floatBtn) {
    if (itemCount > 0) {
      floatBtn.classList.remove('translate-y-24', 'opacity-0');
      floatBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
      floatBtn.classList.remove('translate-y-0', 'opacity-100');
      floatBtn.classList.add('translate-y-24', 'opacity-0');
    }
  }

  if (bounce) {
    badges.forEach(b => {
      b.classList.add('bounce-once');
      setTimeout(() => b.classList.remove('bounce-once'), 400);
    });
  }
}

// Render Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const summaryContainer = document.getElementById('cart-summary-container');
  if (!container || !summaryContainer) return;

  const isMr = state.lang === 'mr';
  const { items, subtotal, deliveryCharge, total } = getCartDetails();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-stone-500">
        <div class="w-20 h-20 mx-auto mb-4 bg-emerald-50 rounded-full flex items-center justify-center text-4xl">🧺</div>
        <h4 class="font-bold text-stone-800 text-lg mb-1">
          ${isMr ? 'तुमची भाजीची पिशवी रिकामी आहे' : 'Your veggie basket is empty'}
        </h4>
        <p class="text-xs text-stone-500 max-w-xs mx-auto mb-6">
          ${isMr ? 'ताजी, स्वच्छ आणि कापलेली भाजी निवडून तुमच्या वेळेची १००% बचत करा!' : 'Select farm fresh, chopped veggies and save your daily prep time!'}
        </p>
        <button onclick="closeCartDrawer()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm">
          ${isMr ? 'भाज्यांची यादी पहा' : 'Browse Fresh Vegetables'}
        </button>
      </div>
    `;
    summaryContainer.innerHTML = '';
    return;
  }

  // Items List
  container.innerHTML = items.map(item => {
    const name = isMr ? item.name_mr : item.name_en;
    return `
      <div class="p-3 bg-stone-50/80 rounded-xl border border-stone-200/70 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <img src="${item.image}" alt="${name}" class="w-14 h-14 object-cover rounded-lg border border-stone-200 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80'" />
          <div>
            <h5 class="text-xs font-bold text-stone-900 leading-tight">${name}</h5>
            <span class="text-[11px] text-stone-500 block">📦 ${item.unit} • ₹${item.price}</span>
            <span class="text-xs font-extrabold text-emerald-800 block mt-0.5">₹${item.lineTotal}</span>
          </div>
        </div>

        <!-- Quantity Stepper -->
        <div class="flex items-center bg-white border border-stone-300 rounded-lg p-0.5 shadow-sm">
          <button 
            onclick="updateQuantity('${item.id}', -1)"
            class="w-6 h-6 flex items-center justify-center hover:bg-stone-100 text-stone-700 font-bold rounded text-xs"
          >-</button>
          <span class="w-6 text-center text-xs font-bold text-stone-800">${item.quantity}</span>
          <button 
            onclick="updateQuantity('${item.id}', 1)"
            class="w-6 h-6 flex items-center justify-center hover:bg-stone-100 text-emerald-700 font-bold rounded text-xs"
          >+</button>
        </div>
      </div>
    `;
  }).join('');

  // Cart Summary & WhatsApp Checkout Form
  summaryContainer.innerHTML = `
    <!-- Tip Banner from Flyer -->
    <div class="p-3 bg-amber-50 border border-amber-200/80 rounded-xl mb-4 flex items-start gap-2.5">
      <span class="text-amber-600 text-lg">💡</span>
      <div class="text-xs text-amber-900">
        <span class="font-bold">${isMr ? 'महत्त्वाची टीप:' : 'Special Flyer Note:'}</span> 
        ${isMr ? 'ऑर्डर एक दिवस आधी करावी, जेणेकरून सकाळी शेतातून ताजी भाजी निवडून स्वच्छ करून देता येईल!' : 'Please order 1 day in advance so we can harvest and prepare your fresh veggies by morning!'}
      </div>
    </div>

    <!-- Bill Breakdown -->
    <div class="space-y-1.5 text-xs text-stone-600 mb-4 bg-stone-50 p-3 rounded-xl border border-stone-200">
      <div class="flex justify-between">
        <span>${isMr ? 'भाज्यांची किंमत (Subtotal)' : 'Veggie Subtotal'}</span>
        <span class="font-semibold text-stone-900">₹${subtotal}</span>
      </div>
      <div class="flex justify-between">
        <span>${isMr ? 'डिलिव्हरी शुल्क' : 'Delivery Charges'}</span>
        <span class="font-semibold ${deliveryCharge === 0 ? 'text-emerald-700' : 'text-stone-900'}">
          ${deliveryCharge === 0 ? (isMr ? 'मोफत (Free)' : 'FREE') : `₹${deliveryCharge}`}
        </span>
      </div>
      ${deliveryCharge > 0 ? `
        <p class="text-[10px] text-amber-700">
          ${isMr ? '₹१४९ च्या वर ऑर्डर केल्यास मोफत डिलिव्हरी!' : 'Add ₹' + (149 - subtotal) + ' more for FREE delivery!'}
        </p>
      ` : ''}
      <div class="pt-2 border-t border-stone-200 flex justify-between text-sm font-extrabold text-stone-900">
        <span>${isMr ? 'एकूण रक्कम (Total)' : 'Grand Total'}</span>
        <span class="text-emerald-700">₹${total}</span>
      </div>
    </div>

    <!-- Customer Form -->
    <div class="space-y-2.5 mb-4 text-xs">
      <div>
        <label class="block font-bold text-stone-700 mb-1">${isMr ? 'आपले नाव *' : 'Your Name *'}</label>
        <input 
          type="text" 
          id="cust-name" 
          value="${state.customer.name}" 
          placeholder="${isMr ? 'उदा. रोहन जोशी' : 'e.g. Rohan Joshi'}" 
          class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600"
        />
      </div>

      <div>
        <label class="block font-bold text-stone-700 mb-1">${isMr ? 'मोबाईल नंबर *' : 'Mobile Number *'}</label>
        <input 
          type="tel" 
          id="cust-phone" 
          value="${state.customer.phone}" 
          placeholder="${isMr ? 'उदा. 9876543210' : 'e.g. 9876543210'}" 
          class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600"
        />
      </div>

      <div>
        <label class="block font-bold text-stone-700 mb-1">${isMr ? 'परिसर / विभाग (Pune Locality) *' : 'Area / Locality in Pune *'}</label>
        <select 
          id="cust-locality" 
          class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600 font-medium"
        >
          ${PUNE_LOCALITIES.map(loc => `
            <option value="${loc.name}" ${loc.name.includes(state.customer.locality) ? 'selected' : ''}>
              ${loc.name} - ${loc.delivery}
            </option>
          `).join('')}
        </select>
      </div>

      <div>
        <label class="block font-bold text-stone-700 mb-1">${isMr ? 'सोसायटी आणि घराचा पत्ता *' : 'Full Society & House Address *'}</label>
        <textarea 
          id="cust-address" 
          rows="2" 
          placeholder="${isMr ? 'फ्लॅट क्र., विंग, सोसायटीचे नाव, लँडमार्क...' : 'Flat No, Wing, Society Name, Landmark...'}" 
          class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600"
        >${state.customer.address}</textarea>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block font-bold text-stone-700 mb-1">${isMr ? 'डिलिव्हरी तारीख' : 'Delivery Date'}</label>
          <input 
            type="date" 
            id="cust-date" 
            value="${state.customer.deliveryDate}" 
            class="w-full px-2 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600"
          />
        </div>
        <div>
          <label class="block font-bold text-stone-700 mb-1">${isMr ? 'वेळ (Slot)' : 'Preferred Slot'}</label>
          <select 
            id="cust-slot" 
            class="w-full px-2 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600"
          >
            <option value="Morning 7:00 AM - 9:00 AM" selected>${isMr ? 'सकाळी 7 - 9' : 'Morning 7 - 9 AM'}</option>
            <option value="Morning 9:00 AM - 11:00 AM">${isMr ? 'सकाळी 9 - 11' : 'Morning 9 - 11 AM'}</option>
            <option value="Evening 5:00 PM - 8:00 PM">${isMr ? 'संध्याकाळी 5 - 8' : 'Evening 5 - 8 PM'}</option>
          </select>
        </div>
      </div>

      <!-- Cut Preference Option -->
      <div>
        <label class="block font-bold text-stone-700 mb-1">${isMr ? 'कापणीचा प्रकार (Chopping Preference)' : 'Chopping Preference'}</label>
        <div class="grid grid-cols-2 gap-2">
          <label class="flex items-center gap-1.5 p-2 bg-white border border-stone-300 rounded-lg text-[11px] cursor-pointer">
            <input type="radio" name="chopping-pref" value="बारीक (Fine chopped)" checked />
            <span>${isMr ? 'बारीक चिरलेला' : 'Fine Chopped'}</span>
          </label>
          <label class="flex items-center gap-1.5 p-2 bg-white border border-stone-300 rounded-lg text-[11px] cursor-pointer">
            <input type="radio" name="chopping-pref" value="मध्यम चौकोनी (Medium diced)" />
            <span>${isMr ? 'मध्यम तुकडे' : 'Medium Diced'}</span>
          </label>
        </div>
      </div>

      <div>
        <label class="block font-bold text-stone-700 mb-1">${isMr ? 'विशेष सूचना (पर्यायी)' : 'Special Note (Optional)'}</label>
        <input 
          type="text" 
          id="cust-notes" 
          placeholder="${isMr ? 'उदा. लिंबू जास्तीचे द्या, मिरची कमी तिखट...' : 'e.g. Extra lemon, mild spicy chilies...'}" 
          class="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-emerald-600"
        />
      </div>
    </div>

    <!-- Instant WhatsApp Checkout Button -->
    <button 
      onclick="proceedToWhatsAppOrder()" 
      class="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
    >
      <span class="text-xl">💬</span>
      <span>${isMr ? 'व्हॉट्सॲपवर ऑर्डर पाठवा' : 'Send Order on WhatsApp'}</span>
      <span class="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold ml-1">₹${total}</span>
    </button>
  `;
}

// Drawer Toggle Handlers
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('hidden');
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      drawer.classList.remove('translate-x-full');
    }, 10);
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  }
}

// WhatsApp Order Builder
function proceedToWhatsAppOrder() {
  const isMr = state.lang === 'mr';
  const { items, subtotal, deliveryCharge, total } = getCartDetails();

  if (items.length === 0) {
    alert(isMr ? 'कृपया आधी काही भाज्या निवडा!' : 'Please add some vegetables to your cart first!');
    return;
  }

  // Read form inputs
  const nameInput = document.getElementById('cust-name');
  const phoneInput = document.getElementById('cust-phone');
  const localityInput = document.getElementById('cust-locality');
  const addressInput = document.getElementById('cust-address');
  const dateInput = document.getElementById('cust-date');
  const slotInput = document.getElementById('cust-slot');
  const notesInput = document.getElementById('cust-notes');
  const choppingPref = document.querySelector('input[name="chopping-pref"]:checked')?.value || 'बारीक (Fine chopped)';

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const locality = localityInput ? localityInput.value.trim() : 'Narhe';
  const address = addressInput ? addressInput.value.trim() : '';
  const date = dateInput ? dateInput.value : '';
  const slot = slotInput ? slotInput.value : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name) {
    alert(isMr ? 'कृपया आपले नाव प्रविष्ट करा.' : 'Please enter your name.');
    if (nameInput) nameInput.focus();
    return;
  }
  if (!phone) {
    alert(isMr ? 'कृपया आपला मोबाईल नंबर प्रविष्ट करा.' : 'Please enter your phone number.');
    if (phoneInput) phoneInput.focus();
    return;
  }
  if (!address) {
    alert(isMr ? 'कृपया आपला पूर्ण पत्ता प्रविष्ट करा.' : 'Please enter your delivery address.');
    if (addressInput) addressInput.focus();
    return;
  }

  // Build formatted WhatsApp message
  let msg = `🥬 *नवीन भाजी ऑर्डर - सुगरण कट्टा (Sugran Katta)*\n`;
  msg += `_ताज्या • स्वच्छ • कापलेल्या भाज्या (Fresh, Clean & Chopped)_\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *ग्राहक नाव:* ${name}\n`;
  msg += `📱 *फोन नंबर:* ${phone}\n`;
  msg += `📍 *पत्ता:* ${address}\n`;
  msg += `🏘️ *परिसर:* ${locality}\n`;
  msg += `📅 *डिलिव्हरी तारीख:* ${date || 'उद्या सकाळ'}\n`;
  msg += `⏰ *वेळ (Slot):* ${slot}\n`;
  msg += `🔪 *कापणी प्राधान्य:* ${choppingPref}\n`;
  if (notes) {
    msg += `📝 *विशेष सूचना:* ${notes}\n`;
  }
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🛒 *मागवलेल्या भाज्यांची यादी:*\n`;

  items.forEach((it, idx) => {
    const itemName = isMr ? it.name_mr : it.name_en;
    msg += `${idx + 1}. *${itemName}* (${it.unit}) x ${it.quantity} = ₹${it.lineTotal}\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💵 *भाज्यांची रक्कम:* ₹${subtotal}\n`;
  msg += `🚚 *डिलिव्हरी शुल्क:* ${deliveryCharge === 0 ? 'मोफत (FREE)' : '₹' + deliveryCharge}\n`;
  msg += `💰 *एकूण रक्कम (Grand Total):* *₹${total}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `✅ *कृपया माझी ऑर्डर कन्फर्म करावी व पेमेंट डिटेल्स पाठवावे.* धन्यवाद! 🙏`;

  // Trigger Confetti celebration if library is loaded
  if (window.confetti) {
    window.confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Open WhatsApp in new tab
  const encodedMsg = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(whatsappUrl, '_blank');
}

// Time & Effort Savings Calculator
function calculateTimeSavings() {
  const members = state.familyMembers;
  const cookingTimes = state.cookingTimes;

  // Estimation formula:
  // Base 25 mins per meal + 5 mins per additional member
  const minutesPerMeal = 25 + (members - 2) * 4;
  const dailyMinutes = minutesPerMeal * cookingTimes;
  const weeklyHours = ((dailyMinutes * 7) / 60).toFixed(1);
  const yearlyHours = Math.round((dailyMinutes * 365) / 60);
  const yearlyDays = (yearlyHours / 24).toFixed(0);

  const hoursLabel = document.getElementById('calc-weekly-hours');
  const daysLabel = document.getElementById('calc-yearly-days');
  const garbageSaved = document.getElementById('calc-waste-saved');

  if (hoursLabel) hoursLabel.textContent = `${weeklyHours} तास / आठवडा`;
  if (daysLabel) daysLabel.textContent = `${yearlyHours} तास (~${yearlyDays} पूर्ण दिवस!)`;
  if (garbageSaved) garbageSaved.textContent = `~${(members * 0.25 * 7).toFixed(1)} किलो`;
}

// Toast Notifications
function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'bg-stone-900/90 backdrop-blur-md text-white text-xs px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 border border-stone-700';
  toast.innerHTML = `
    <span class="text-emerald-400">✓</span>
    <span class="font-medium">${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Reset Search and Category
function resetFilters() {
  state.searchQuery = '';
  state.activeCategory = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.classList.add('bg-emerald-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-stone-100', 'text-stone-700');
    } else {
      btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
      btn.classList.add('bg-stone-100', 'text-stone-700');
    }
  });
  renderProducts();
}

// Expose functions globally for inline HTML onclick handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.proceedToWhatsAppOrder = proceedToWhatsAppOrder;
window.setLanguage = setLanguage;
window.resetFilters = resetFilters;
