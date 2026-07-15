'use client';

import { motion } from 'framer-motion';
import { Home, Microscope, Truck, CheckCircle2, ShieldCheck, Clock, Award, Users } from 'lucide-react';

const features = [
  { 
    icon: Home, 
    title: 'Hassle-Free Home Collection', 
    desc: 'Trained phlebotomists visit your home. No queues, no travel.' 
  },
  { 
    icon: Microscope, 
    title: 'Advanced Diagnostics', 
    desc: 'State-of-the-art equipment & NABL-grade accuracy.' 
  },
  { 
    icon: Truck, 
    title: 'Fast Turnaround', 
    desc: 'Digital reports delivered within 24–48 hours.' 
  },
  { 
    icon: ShieldCheck, 
    title: 'Certified & Safe', 
    desc: '100% sterile single-use equipment. VirusTotal scanned.' 
  },
  { 
    icon: Users, 
    title: 'Happy Customers', 
    desc: 'Thousands of satisfied patients across Mumbai region.' 
  },
  { 
    icon: Clock, 
    title: 'Same-Day Booking', 
    desc: 'Book online and get collection on the same day.' 
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 lg:py-28 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">WHY HEALTHIFY</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Your Health,<br />Our Priority
            </h2>
            <p className="mt-5 text-lg text-slate-400 max-w-lg">
              We combine world-class diagnostics with unmatched convenience.
            </p>

            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-semibold text-black hover:brightness-110 transition"
            >
              Book Your Test Today
            </a>
          </motion.div>

          {/* Right Side - Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-3xl p-8 hover:ring-1 hover:ring-emerald-400/30 transition-all group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-400/20 group-hover:bg-emerald-500/20 transition">
                  <f.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
