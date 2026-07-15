'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Stethoscope, Shield, Lock, Mail, Brain } from 'lucide-react';
import { packages, contact } from '@/lib/packages';
import BookingForm from '@/components/BookingForm'; // Using the enhanced form

export default function Booking() {
  const [tab, setTab] = useState<'book' | 'ai' | 'patient-login' | 'admin-login'>('book');

  return (
    <section id="book" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-2xl shadow-black/40 sm:p-10"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />

          <div className="relative">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 rounded-full bg-white/[0.03] p-1.5 ring-1 ring-white/5">
              {[
                { id: 'book', label: 'Book a Test' },
                { id: 'ai', label: 'AI Recommender' },
                { id: 'patient-login', label: 'Patient Login' },
                { id: 'admin-login', label: 'Admin Login' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as typeof tab)}
                  className={`flex-1 rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                    tab === t.id
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-emerald-950 shadow-lg shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Book a Test Tab */}
              {tab === 'book' && (
                <motion.div
                  key="book"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <BookingForm />
                </motion.div>
              )}

              {/* AI Recommender Tab */}
              {tab === 'ai' && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8"
                >
                  <div className="text-center">
                    <Brain className="mx-auto h-16 w-16 text-emerald-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white">AI Test Recommender</h3>
                    <p className="text-slate-400 mt-2">Tell us your symptoms and get instant test suggestions</p>
                  </div>
                  {/* You can embed AISymptomChecker here if needed */}
                </motion.div>
              )}

              {/* Patient & Admin Login Tabs (kept as-is with minor polish) */}
              {tab === 'patient-login' && (
                <motion.div key="patient-login" /* existing code */ className="mt-8 mx-auto max-w-md">
                  {/* ... your existing patient login form ... */}
                </motion.div>
              )}

              {tab === 'admin-login' && (
                <motion.div key="admin-login" /* existing code */ className="mt-8 mx-auto max-w-md">
                  {/* ... your existing admin login form ... */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
