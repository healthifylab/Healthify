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
  // Add more packages as needed
];

export const contact = {
  phone1: "+91 95038 32889",
  phone2: "+91 93732 52889",
  whatsapp: "919503832889",
  email: "report@healthifylab.com",
  locations: ["Mumbai", "Navi Mumbai", "Thane", "Kalyan", "Pune"]
};
