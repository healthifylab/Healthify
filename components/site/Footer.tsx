'use client';

import { motion } from 'framer-motion';
import { Activity, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contact } from '@/lib/packages';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Now', href: '#book' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      {/* Top CTA strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mb-16 overflow-hidden rounded-3xl p-8 text-center sm:p-12"
        >
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Book your test today — because your health deserves the best.
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${contact.phone1.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              {contact.phone1}
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/30">
                <Activity className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-tight text-white">Healthify</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400/80">Diagnostics</span>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Your trusted partner in preventive healthcare. Advanced diagnostics
              with hassle-free home sample collection.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Portal */}
          <div>
            <h4 className="text-sm font-semibold text-white">Patient Portal</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#patient-login" className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                  Patient Login
                </a>
              </li>
              <li>
                <a href="#admin-login" className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                  Admin Login
                </a>
              </li>
              <li>
                <a href="#book" className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                  Book a Test
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`tel:${contact.phone1.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    {contact.phone1}
                    <br />
                    {contact.phone2}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  {contact.locations.join(', ')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} HealthifyLab. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            100% Safe &middot; Scanned by VirusTotal
          </p>
        </div>
      </div>
    </footer>
  );
}
