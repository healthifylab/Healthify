'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh Sharma',
    age: '62',
    location: 'Andheri West, Mumbai',
    text: 'Healthify made my health checkup so easy. The phlebotomist came on time and reports were fast.',
    initials: 'RS',
    rating: 5,
    type: 'text'
  },
  {
    name: 'Priya Patel',
    age: '34',
    location: 'Nerul, Navi Mumbai',
    text: 'Excellent service! Got my diabetes panel done at home. Highly recommended.',
    initials: 'PP',
    rating: 5,
    type: 'text'
  },
  {
    name: 'Anil Verma',
    age: '48',
    location: 'Thane',
    text: 'Professional team and accurate reports. Saved me a lot of time.',
    initials: 'AV',
    rating: 5,
    type: 'text'
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
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">REAL STORIES</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">
            Loved by Mumbai Families
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 relative"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-white/10" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-slate-200 mb-8">
                “{t.text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-xl font-bold text-black">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}, {t.age}</p>
                  <p className="text-sm text-slate-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-12">
          Want to share your experience? Email us at care@healthifylab.com
        </p>
      </div>
    </section>
  );
}
