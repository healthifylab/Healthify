'use client';

import { motion } from 'framer-motion';
import {
  Activity, HeartPulse, Droplets, Heart, Shield, Layers, Flower2,
  Accessibility, Droplet, Bone, Sparkles, Sun, ClipboardCheck, Dumbbell,
  Baby, FlaskConical, Wind, ShieldAlert, Gauge, Briefcase, ShieldPlus,
  type LucideIcon,
} from 'lucide-react';
import { packages, type LabPackage } from '@/lib/packages';

const iconMap: Record<string, LucideIcon> = {
  Activity, HeartPulse, Droplets, Heart, Shield, Layers, Flower2,
  Accessibility, Droplet, Bone, Sparkles, Sun, ClipboardCheck, Dumbbell,
  Baby, FlaskConical, Wind, ShieldAlert, Gauge, Briefcase, ShieldPlus,
};

function PackageCard({ pkg, index }: { pkg: LabPackage; index: number }) {
  const Icon = iconMap[pkg.icon] ?? Activity;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative"
    >
      <div className="glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-emerald-400/30">
        {/* Gradient glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

        <div className="relative">
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10 transition-colors group-hover:ring-emerald-400/30">
              <Icon className="h-6 w-6 text-emerald-400" />
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                {pkg.priceFrom ? 'Starting at' : 'Only'}
              </p>
              <p className="font-display text-xl font-bold text-white">
                ₹{pkg.price}
              </p>
            </div>
          </div>

          <h3 className="mt-4 font-display text-lg font-semibold text-white">
            Healthify {pkg.name}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{pkg.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {pkg.tests.map((test) => (
              <span
                key={test}
                className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-white/5"
              >
                {test}
              </span>
            ))}
          </div>

          <a
            href="#book"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Book this package
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="packages" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Health Packages
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find the Right Test for You
          </h2>
          <p className="mt-4 text-base text-slate-400">
            From essential screening to comprehensive wellness — all 25 packages
            with home sample collection and fast digital reports.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-400">
            Can't find what you need?{' '}
            <a href="#book" className="font-semibold text-emerald-400 hover:text-emerald-300">
              Contact us for custom panels
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
