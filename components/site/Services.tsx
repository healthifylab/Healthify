'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Activity, HeartPulse, Droplets, Heart, Shield, Layers, Flower2,
  Accessibility, Droplet, Bone, Sparkles, Sun, ClipboardCheck, Dumbbell,
  Baby, FlaskConical, Wind, ShieldAlert, Gauge, Briefcase, ShieldPlus,
  Search, ChevronDown, ChevronUp, Brain,
  type LucideIcon,
} from 'lucide-react';
import { packages, type LabPackage } from '@/lib/packages';
import AISymptomChecker from '@/components/AISymptomChecker';

const iconMap: Record<string, LucideIcon> = {
  Activity, HeartPulse, Droplets, Heart, Shield, Layers, Flower2,
  Accessibility, Droplet, Bone, Sparkles, Sun, ClipboardCheck, Dumbbell,
  Baby, FlaskConical, Wind, ShieldAlert, Gauge, Briefcase, ShieldPlus,
};

function PackageCard({ pkg, index }: { pkg: LabPackage; index: number }) {
  const Icon = iconMap[pkg.icon] ?? Activity;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative"
    >
      <div className="glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-emerald-400/30">
        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

        <div className="relative">
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10 transition-colors group-hover:ring-emerald-400/30">
              <Icon className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                {pkg.priceFrom ? 'Starting at' : 'Only'}
              </p>
              <p className="font-display text-2xl font-bold text-white">₹{pkg.price}</p>
            </div>
          </div>

          <h3 className="mt-5 font-display text-xl font-semibold text-white">
            Healthify {pkg.name}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{pkg.tagline}</p>

          {/* Quick Tests */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {pkg.tests.slice(0, 4).map((test) => (
              <span
                key={test}
                className="rounded-md bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
              >
                {test}
              </span>
            ))}
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 py-3 text-sm font-medium text-emerald-400 hover:bg-white/5 transition"
          >
            {isExpanded ? (
              <>Hide Details <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>View Full Test List <ChevronDown className="h-4 w-4" /></>
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-300">{pkg.description}</p>
                  
                  {pkg.preparation && (
                    <p className="text-xs text-amber-400">ⓘ {pkg.preparation}</p>
                  )}

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Full Test Panel</p>
                    <div className="grid grid-cols-1 gap-1 text-sm text-slate-400">
                      {pkg.tests.map((test, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {test}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="#book"
            className="mt-6 block w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 py-4 text-center font-semibold text-white shadow-lg shadow-emerald-500/30 hover:brightness-110 transition"
          >
            Book This Package
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.tests.some(test => test.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  return (
    <section id="packages" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">HEALTH PACKAGES</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Choose Your Wellness Journey
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            25+ curated packages with home collection across Mumbai &amp; Thane
          </p>
        </motion.div>

        {/* AI Symptom Checker */}
        <div className="mb-16">
          <AISymptomChecker />
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search tests or packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 pl-12 py-3.5 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filteredPackages.length === 0 && (
          <p className="text-center text-slate-400 py-12">No packages found. Try different keywords.</p>
        )}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            Need a custom test panel?{' '}
            <a href="#book" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              Talk to our experts →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
