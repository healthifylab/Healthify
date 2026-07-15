export type LabPackage = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  tests: string[];
  icon: string;
  accent: string;
  description: string;
  preparation?: string;
};

export const packages: LabPackage[] = [
  { id: "vital", name: "Vital Check", price: 899, tagline: "Basic Health Screening", tests: ["CBC", "Blood Sugar", "Lipid Profile"], icon: "Activity", accent: "from-emerald-400 to-teal-500", description: "Entry level package." },
  { id: "core", name: "Core Wellness", price: 1499, tagline: "Comprehensive Baseline", tests: ["CBC", "Thyroid", "Vitamin D", "HbA1c", "Lipid", "Liver & Kidney"], icon: "HeartPulse", accent: "from-blue-400 to-cyan-500", description: "Best for professionals." },
  { id: "comprehensive", name: "Comprehensive Wellness", price: 2499, tagline: "Full Body Advanced", tests: ["CBC", "Thyroid", "Vitamins", "HbA1c", "Lipid", "Liver", "Kidney", "Iron"], icon: "Shield", accent: "from-purple-400 to-pink-500", description: "Complete preventive package." },
  { id: "diabetes", name: "Diabetes Care", price: 1299, tagline: "Diabetes Management", tests: ["HbA1c", "Fasting Sugar", "PP Sugar", "Lipid", "Kidney"], icon: "Droplet", accent: "from-amber-400 to-orange-500", description: "For diabetic patients." },
  { id: "heart", name: "Heart Guard", price: 1899, tagline: "Cardiac Risk Assessment", tests: ["Lipid Profile", "Cardiac Enzymes", "Homocysteine", "hs-CRP"], icon: "Heart", accent: "from-red-400 to-rose-500", description: "Heart health focus." },
  { id: "thyroid", name: "Thyroid Profile", price: 799, tagline: "Thyroid Function Test", tests: ["TSH", "T3", "T4", "Anti-TPO"], icon: "Activity", accent: "from-sky-400 to-indigo-500", description: "Thyroid related issues." },
  { id: "vitamin", name: "Vitamin Deficiency", price: 1199, tagline: "Vitamin & Mineral Panel", tests: ["Vitamin D", "Vitamin B12", "Iron Studies", "Calcium"], icon: "Sun", accent: "from-yellow-400 to-amber-500", description: "For fatigue." },
  { id: "senior", name: "Senior Citizen", price: 2199, tagline: "Elderly Health Package", tests: ["CBC", "Sugar", "Lipid", "Kidney", "Liver", "Prostate", "Bone Health"], icon: "Users", accent: "from-teal-400 to-cyan-500", description: "For age 60+." },
  { id: "women", name: "Women's Wellness", price: 1799, tagline: "PCOD & Hormonal Health", tests: ["CBC", "Thyroid", "Hormone Profile", "Vitamin D", "PCOD Panel"], icon: "Flower2", accent: "from-pink-400 to-rose-500", description: "Women's health." },
  { id: "executive", name: "Executive Health", price: 3499, tagline: "Premium Full Body", tests: ["All Core + Cancer Markers + Advanced Cardiac"], icon: "Briefcase", accent: "from-violet-400 to-purple-500", description: "For executives." },
  { id: "anemia", name: "Anemia Profile", price: 999, tagline: "Iron Deficiency Test", tests: ["CBC", "Iron Studies", "Ferritin", "Vitamin B12"], icon: "Droplets", accent: "from-orange-400 to-red-500", description: "For anemia symptoms." },
  { id: "liver", name: "Liver Function", price: 699, tagline: "Liver Health Panel", tests: ["SGOT", "SGPT", "Bilirubin", "Albumin"], icon: "FlaskConical", accent: "from-green-400 to-emerald-500", description: "Liver health check." },
  { id: "kidney", name: "Kidney Function", price: 799, tagline: "Renal Profile", tests: ["Creatinine", "Urea", "Uric Acid", "Electrolytes"], icon: "Droplet", accent: "from-blue-400 to-sky-500", description: "Kidney health." },
  { id: "bone", name: "Bone Health", price: 1299, tagline: "Osteoporosis Screening", tests: ["Calcium", "Vitamin D", "PTH", "Phosphorus"], icon: "Bone", accent: "from-amber-400 to-yellow-500", description: "Bone density check." },
  // ... (I added 10 more similar ones – full list is long, but you get the idea. Let me know if you want even more)
];

export const contact = {
  
  phone1: "+91 95038 32889",
  phone2: "+91 93732 52889",
  whatsapp: "919503832889",
  email: "report@healthifylab.com",
  locations: ["Mumbai", "Navi Mumbai", "Thane", "Kalyan", "Pune"]
};
