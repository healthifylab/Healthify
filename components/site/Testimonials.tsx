'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh',
    age: '60',
    location: 'Mumbai',
    text: 'Healthify Lab made my health checkup so convenient at home. Highly satisfied!',
    initials: 'R',
  },
  {
    name: 'Priya',
    age: '35',
    location: 'Navi Mumbai',
    text: 'The team was professional, and the results were delivered quickly in Navi Mumbai!',
    initials: 'P',
  },
  {
    name: 'Anil',
    age: '45',
    location: 'Thane',
    text: 'Great service in Thane. Made managing my health so much easier!',
    initials: 'A',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass relative overflow-hidden rounded-2xl p-7"
            >
              <Quote className="absolute right-4 top-4 h-12 w-12 text-white/5" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-slate-200">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 font-display text-lg font-bold text-emerald-950">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}, {t.age}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
