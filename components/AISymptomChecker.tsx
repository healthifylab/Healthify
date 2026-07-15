'use client';
import { useState } from 'react';
import { Brain } from 'lucide-react';

export default function AISymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const getRecommendation = () => {
    // Simple AI-like logic (can be replaced with real API later)
    const lower = symptoms.toLowerCase();
    if (lower.includes('fever') && lower.includes('cough')) {
      setRecommendation("Possible Viral Infection. Recommended: CBC + CRP + COVID/Flu Panel");
    } else if (lower.includes('fatigue') && lower.includes('weight')) {
      setRecommendation("Thyroid + Diabetes + Vitamin Profile recommended.");
    } else {
      setRecommendation("Based on symptoms, we suggest our Core Wellness Package.");
    }
  };

  return (
    <div className="glass-strong p-8 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="h-8 w-8 text-emerald-400" />
        <h3 className="text-2xl font-bold">AI Symptom Checker</h3>
      </div>
      <textarea
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Describe your symptoms..."
        className="w-full h-32 p-4 rounded-2xl border mb-4"
      />
      <button onClick={getRecommendation} className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold">
        Get AI Recommendation
      </button>
      {recommendation && <p className="mt-6 text-lg font-medium text-emerald-400">{recommendation}</p>}
    </div>
  );
}
