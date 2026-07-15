'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, FileText, ArrowRight, ShieldCheck, Truck, Microscope, Brain } from 'lucide-react';
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
      {/* Background grid + glows */}
      <div className="grid-glow absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]" />
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
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
              Now Serving Mumbai • Navi Mumbai • Thane
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter text-white"
            >
              Premium Diagnostics,<br />
              <span className="text-gradient">Delivered to Your Doorstep</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-slate-300"
            >
              Same-day home blood collection with NABL-grade accuracy. 
              Get digital reports in 24–48 hours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#book"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-semibold text-black shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all hover:scale-[1.02]"
              >
                Book Home Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </a>

              <a
                href="#packages"
                className="inline-flex items-center gap-3 rounded-2xl glass px-8 py-4 text-lg font-semibold hover:bg-white/10 transition"
              >
                Explore Packages
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-6 text-sm"
            >
              {[
                { icon: ShieldCheck, text: "NABL Accredited" },
                { icon: Truck, text: "Same Day Collection" },
                { icon: Brain, text: "AI Test Recommender" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <f.icon className="h-5 w-5 text-emerald-400" />
                  <span>{f.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                    <Microscope className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Advanced Lab Testing</p>
                    <p className="text-sm text-slate-400">Accurate • Fast • Reliable</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    { icon: Truck, title: "Home Collection", desc: "Trained phlebotomist at your doorstep" },
                    { icon: FileText, title: "Digital Reports", desc: "Delivered in 24-48 hours" },
                    { icon: ShieldCheck, title: "100% Safe", desc: "Sterile single-use equipment" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 bg-white/5 rounded-2xl p-5">
                      <item.icon className="h-6 w-6 text-emerald-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass rounded-3xl p-6 text-center">
              <p className="text-4xl font-bold text-gradient">{s.value}</p>
              <p className="text-sm text-slate-400 mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
