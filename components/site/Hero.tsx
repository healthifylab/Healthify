'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, FileText, ArrowRight, ShieldCheck, Truck, Microscope } from 'lucide-react';
import { contact } from '@/lib/packages';

const stats = [
  { value: '24+', label: 'Health Packages' },
  { value: '48hr', label: 'Report Delivery' },
  { value: '6', label: 'Cities Served' },
  { value: '100%', label: 'Safe & Certified' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background grid */}
      <div className="grid-glow absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]" />

      {/* Floating orbs */}
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Now serving Mumbai · Navi Mumbai · Thane
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Premium Diagnostics,
              <br />
              <span className="text-gradient">Delivered to Your Door.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Experience hassle-free home blood sample collection with accurate,
              fast digital reports. Book online for same-day collection across
              Mumbai, Navi Mumbai, and Thane.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-xl shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:brightness-110"
              >
                Book Home Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                View All Packages
              </a>
            </motion.div>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { icon: Calendar, text: 'Same-Day Collection' },
                { icon: FileText, text: 'Digital Reports Fast' },
                { icon: ShieldCheck, text: 'NABL-Grade Quality' },
              ].map((f) => (
                <div
                  key={f.text}
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-slate-200"
                >
                  <f.icon className="h-3.5 w-3.5 text-emerald-400" />
                  {f.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-2xl shadow-black/50">
              {/* Decorative gradient */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-600/10 ring-1 ring-emerald-400/30">
                    <Microscope className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Advanced Diagnostics</p>
                    <p className="text-xs text-slate-400">Accurate · Reliable · Fast</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: Truck, title: 'Home Sample Collection', desc: 'Trained phlebotomists at your doorstep' },
                    { icon: Microscope, title: 'Advanced Lab Testing', desc: 'State-of-the-art equipment & protocols' },
                    { icon: FileText, title: 'Digital Reports', desc: 'Delivered to your inbox within 24–48 hours' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Location strip */}
                <div className="mt-6 flex items-center gap-2 rounded-2xl bg-emerald-500/5 p-4 ring-1 ring-emerald-400/10">
                  <MapPin className="h-5 w-5 shrink-0 text-emerald-400" />
                  <p className="text-xs text-slate-300">
                    Serving <span className="font-semibold text-white">{contact.locations.join(' · ')}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
