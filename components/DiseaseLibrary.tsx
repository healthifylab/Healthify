'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Shield, AlertTriangle, Info, BookOpen } from 'lucide-react';

const diseases = [
  {
    name: "Diabetes",
    type: "Metabolic",
    description: "Chronic condition affecting blood sugar regulation.",
    symptoms: "Increased thirst, frequent urination, fatigue, blurred vision.",
    recommendedTests: ["HbA1c", "Fasting Blood Sugar", "Postprandial Glucose", "Lipid Profile"],
    severity: "High",
    color: "orange"
  },
  {
    name: "Hypertension",
    type: "Cardiovascular",
    description: "High blood pressure that can lead to heart disease.",
    symptoms: "Often asymptomatic, headaches, shortness of breath.",
    recommendedTests: ["Lipid Profile", "Kidney Function Test", "CBC"],
    severity: "Medium",
    color: "red"
  },
  {
    name: "Thyroid Disorders",
    type: "Endocrine",
    description: "Imbalance in thyroid hormone production.",
    symptoms: "Weight changes, fatigue, hair loss, temperature sensitivity.",
    recommendedTests: ["TSH", "T3", "T4", "Anti-TPO"],
    severity: "Medium",
    color: "blue"
  },
  {
    name: "Vitamin D Deficiency",
    type: "Nutritional",
    description: "Low levels of Vitamin D affecting bone health.",
    symptoms: "Bone pain, muscle weakness, fatigue, mood changes.",
    recommendedTests: ["Vitamin D 25-Hydroxy", "Calcium", "PTH"],
    severity: "Low",
    color: "emerald"
  },
  {
    name: "Anemia",
    type: "Hematological",
    description: "Low red blood cells or hemoglobin.",
    symptoms: "Fatigue, pale skin, dizziness, shortness of breath.",
    recommendedTests: ["CBC", "Iron Studies", "Ferritin", "Vitamin B12"],
    severity: "Medium",
    color: "amber"
  }
];

export default function DiseaseLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || disease.type === selectedType;
    return matchesSearch && matchesType;
  });

  const types = ['All', ...new Set(diseases.map(d => d.type))];

  return (
    <section className="relative py-20 bg-black/40" id="disease-library">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 mb-4">
            <BookOpen className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Disease &amp; Virus Library
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Understand common conditions and get the right tests recommended by our experts
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 pl-12 py-4 rounded-2xl text-white placeholder:text-slate-500 focus:border-emerald-500"
            />
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white focus:border-emerald-500"
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredDiseases.map((disease, index) => (
              <motion.div
                key={disease.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className="glass-strong rounded-3xl p-8 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{disease.name}</h3>
                    <p className="text-emerald-400 text-sm mt-1">{disease.type}</p>
                  </div>
                  <div className={`px-4 py-1 rounded-full text-xs font-medium ${
                    disease.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                    disease.severity === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {disease.severity} Risk
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{disease.description}</p>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Common Symptoms</p>
                    <p className="text-sm text-slate-400">{disease.symptoms}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Recommended Tests</p>
                    <div className="flex flex-wrap gap-2">
                      {disease.recommendedTests.map((test, i) => (
                        <span key={i} className="bg-white/10 text-xs px-4 py-2 rounded-full text-slate-300">
                          {test}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#book"
                  className="mt-8 inline-flex items-center gap-2 text-emerald-400 hover:text-white transition group-hover:gap-3"
                >
                  Book Related Tests →
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredDiseases.length === 0 && (
          <p className="text-center text-slate-400 py-20 text-lg">No matching conditions found.</p>
        )}
      </div>
    </section>
  );
}
