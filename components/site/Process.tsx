'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Home, Microscope, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Online',
    desc: 'Select your package and pick a time slot in under a minute.',
  },
  {
    icon: Home,
    title: 'Home Collection',
    desc: 'Our trained phlebotomist arrives at your doorstep, on time.',
  },
  {
    icon: Microscope,
    title: 'Lab Analysis',
    desc: 'Samples are processed with advanced, calibrated equipment.',
  },
  {
    icon: FileCheck,
    title: 'Digital Report',
    desc: 'Get your detailed report delivered to your inbox within 24–48 hours.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Seamless Process
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Four simple steps from booking to report — designed for your convenience.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/15 to-teal-600/5 ring-1 ring-emerald-400/20">
                    <step.icon className="h-7 w-7 text-emerald-400" />
                  </div>
                  <span className="font-display text-5xl font-bold text-white/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-to-r from-emerald-400/40 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
