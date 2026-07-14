'use client';

import { motion } from 'framer-motion';
import { Home, Microscope, Truck, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

const features = [
  { icon: Home, title: 'Hassle-Free Home Collection', desc: 'Trained phlebotomists collect samples at your doorstep — no travel, no waiting rooms.' },
  { icon: Microscope, title: 'Advanced Diagnostics', desc: 'State-of-the-art equipment delivering accurate, reliable reports you can trust.' },
  { icon: Truck, title: 'Fast Turnaround', desc: 'Digital reports delivered to your inbox within 24–48 hours of collection.' },
  { icon: ShieldCheck, title: 'Certified & Safe', desc: '100% safe processes, scanned and verified — your health is in trusted hands.' },
  { icon: CheckCircle2, title: 'Happy Customers', desc: 'Thousands of satisfied patients across Mumbai, Navi Mumbai, and Thane.' },
  { icon: Clock, title: 'Same-Day Booking', desc: 'Book online and get same-day collection at your preferred time slot.' },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Why Healthify
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your Trusted Partner in
              <br />
              <span className="text-gradient">Preventive Healthcare</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              At Healthify, we combine advanced diagnostics with the convenience
              of home collection — because your health deserves the best, without
              the hassle.
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-xl shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:brightness-110"
            >
              Book Your Test Today
            </a>
          </motion.div>

          {/* Right: feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 transition-all hover:ring-1 hover:ring-emerald-400/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/15">
                  <f.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{f.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
