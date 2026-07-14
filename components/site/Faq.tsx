'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We serve Mumbai, Navi Mumbai, and Thane for home sample collection. We also cover Kalyan, Pune, and the PCMC region.',
  },
  {
    q: 'How long does it take to get results?',
    a: 'Results are typically delivered within 24–48 hours of sample collection. Digital reports are sent directly to your email.',
  },
  {
    q: 'Do I need to fast before a test?',
    a: 'It depends on the test. Fasting instructions will be provided during booking — some panels require 8–12 hours of fasting.',
  },
  {
    q: 'How do I book a home collection?',
    a: 'Simply click the "Book Now" button, select your package, choose a time slot, and our phlebotomist will arrive at your doorstep.',
  },
  {
    q: 'Is home sample collection safe?',
    a: 'Yes. Our phlebotomists follow strict safety protocols and use sterile, single-use equipment. All processes are 100% safe and verified.',
  },
  {
    q: 'Can I access my reports online?',
    a: 'Absolutely. Once ready, your reports are delivered digitally. You can also access them anytime through the Patient Portal.',
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-sm font-semibold text-white sm:text-base">{faq.q}</span>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/20">
          {isOpen ? <Minus className="h-4 w-4 text-emerald-400" /> : <Plus className="h-4 w-4 text-emerald-400" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
