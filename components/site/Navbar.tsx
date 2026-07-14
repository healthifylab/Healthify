'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Activity, ChevronDown } from 'lucide-react';
import { contact } from '@/lib/packages';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`transition-all duration-500 ${scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'bg-transparent'}`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-105">
                <Activity className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Healthify
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400/80">
                  Diagnostics
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              {/* Patient Portal dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPortalOpen(true)}
                onMouseLeave={() => setPortalOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white">
                  Patient Portal
                  <ChevronDown className={`h-4 w-4 transition-transform ${portalOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {portalOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full pt-2"
                    >
                      <div className="glass-strong w-48 overflow-hidden rounded-xl p-1.5 shadow-2xl">
                        <a
                          href="#admin-login"
                          className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          Admin Login
                        </a>
                        <a
                          href="#patient-login"
                          className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          Patient Login
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${contact.phone1.replace(/\s/g, '')}`}
                className="hidden items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400 xl:flex"
              >
                <Phone className="h-4 w-4" />
                {contact.phone1}
              </a>
              <a
                href="#book"
                className="hidden rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:brightness-110 sm:inline-block"
              >
                Book Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="glass-strong mx-4 mb-4 rounded-2xl p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="my-2 h-px bg-white/10" />
                <a
                  href="#admin-login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Admin Login
                </a>
                <a
                  href="#patient-login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Patient Login
                </a>
                <a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 block rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-3 text-center text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
