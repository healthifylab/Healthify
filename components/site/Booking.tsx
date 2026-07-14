'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, Stethoscope, Shield, Lock, Mail } from 'lucide-react';
import { packages, contact } from '@/lib/packages';

export default function Booking() {
  const [tab, setTab] = useState<'book' | 'admin-login' | 'patient-login'>('book');

  return (
    <section id="book" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-2xl shadow-black/40 sm:p-10"
        >
          {/* Glow */}
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />

          <div className="relative">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 rounded-full bg-white/[0.03] p-1.5 ring-1 ring-white/5">
              {[
                { id: 'book', label: 'Book a Test' },
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
              {/* Book a test */}
              {tab === 'book' && (
                <motion.div
                  key="book"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <h3 className="font-display text-2xl font-bold text-white">Book Home Collection</h3>
                  <p className="mt-1.5 text-sm text-slate-400">
                    Fill in your details and we'll confirm your appointment via call or WhatsApp.
                  </p>
                  <form className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Full Name</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-emerald-400/30">
                        <User className="h-4 w-4 text-slate-500" />
                        <input type="text" placeholder="John Doe" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Phone Number</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-emerald-400/30">
                        <Phone className="h-4 w-4 text-slate-500" />
                        <input type="tel" placeholder="+91 98XXX XXXXX" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Select Package</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-emerald-400/30">
                        <Stethoscope className="h-4 w-4 text-slate-500" />
                        <select className="w-full bg-transparent text-sm text-white focus:outline-none">
                          {packages.map((p) => (
                            <option key={p.id} value={p.id} className="bg-slate-900">
                              {p.name} — ₹{p.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Preferred Date</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-emerald-400/30">
                        <Calendar className="h-4 w-4 text-slate-500" />
                        <input type="date" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none [color-scheme:dark]" />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:brightness-110 sm:col-span-2"
                    >
                      Confirm Booking
                    </button>
                  </form>
                  <p className="mt-4 text-center text-xs text-slate-500">
                    Or call us directly at{' '}
                    <a href={`tel:${contact.phone1.replace(/\s/g, '')}`} className="font-semibold text-emerald-400">
                      {contact.phone1}
                    </a>
                  </p>
                </motion.div>
              )}

              {/* Patient login */}
              {tab === 'patient-login' && (
                <motion.div
                  key="patient-login"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 mx-auto max-w-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
                      <User className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">Patient Login</h3>
                      <p className="text-xs text-slate-400">Access your reports and test history</p>
                    </div>
                  </div>
                  <form className="mt-6 space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Email or Phone</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-emerald-400/30">
                        <Mail className="h-4 w-4 text-slate-500" />
                        <input type="text" placeholder="you@example.com" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Password</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-emerald-400/30">
                        <Lock className="h-4 w-4 text-slate-500" />
                        <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    <button type="button" className="w-full rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:brightness-110">
                      Login to Patient Portal
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      New patient? <a href="#book" className="font-semibold text-emerald-400">Book a test to register</a>
                    </p>
                  </form>
                </motion.div>
              )}

              {/* Admin login */}
              {tab === 'admin-login' && (
                <motion.div
                  key="admin-login"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 mx-auto max-w-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-400/20">
                      <Shield className="h-6 w-6 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">Admin Login</h3>
                      <p className="text-xs text-slate-400">Staff access to lab management dashboard</p>
                    </div>
                  </div>
                  <form className="mt-6 space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Admin ID</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-sky-400/30">
                        <User className="h-4 w-4 text-slate-500" />
                        <input type="text" placeholder="admin_id" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-400">Password</label>
                      <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/10 focus-within:ring-sky-400/30">
                        <Lock className="h-4 w-4 text-slate-500" />
                        <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                      </div>
                    </div>
                    <button type="button" className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:brightness-110">
                      Login to Admin Dashboard
                    </button>
                    <p className="text-center text-xs text-slate-500">Authorized personnel only</p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
