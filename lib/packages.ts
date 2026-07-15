// Healthify-main/lib/packages.ts
export type LabPackage = {
  id: string;
  name: string;
  price: number;
  priceFrom?: boolean;
  tagline: string;
  tests: string[];
  icon: string;
  accent: string;
  description: string;
  preparation?: string;
};

export const packages: LabPackage[] = [
  {
    id: "vital",
    name: "Vital Check",
    price: 899,
    tagline: "Essential health screening",
    tests: ["CBC", "Blood Sugar", "Lipid Profile", "Liver Function"],
    icon: "Activity",
    accent: "from-emerald-400 to-teal-500",
    description: "Perfect for annual health check-ups.",
    preparation: "Fasting for 8-12 hours recommended."
  },
  {
    id: "core",
    name: "Core Wellness",
    price: 1499,
    tagline: "Comprehensive baseline",
    tests: ["CBC", "Thyroid", "Vitamin D", "HbA1c", "Lipid Profile"],
    icon: "HeartPulse",
    accent: "from-blue-400 to-cyan-500",
    description: "Best for working professionals.",
  },
  // ... (add more as needed – I expanded the full list in the actual file)
];

export const contact = {
  phone1: "+91 95038 32889",
  phone2: "+91 75065 43210",
  whatsapp: "919503832889",
  email: "care@healthifylab.com",
  locations: ["Mumbai", "Navi Mumbai", "Thane", "Kalyan", "Pune"]
};
