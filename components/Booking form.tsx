'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', package: '', address: '',
    pincode: '', date: '', time: '', message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'service_z3ac4pk',
        'template_5v6t6ku',
        formData,
        'dJE_JHAoNTxxzTxiT'
      );

      setStatus('✅ Booking Confirmed! We will contact you shortly.');

      const waText = `New Booking:%0AName: ${formData.name}%0APhone: ${formData.phone}%0APackage: ${formData.package}%0AAddress: ${formData.address}%0ADate: ${formData.date} ${formData.time}`;
      window.open(`https://wa.me/919503832889?text=${waText}`, '_blank');

      setFormData({ name: '', phone: '', email: '', package: '', address: '', pincode: '', date: '', time: '', message: '' });
    } catch (error) {
      setStatus('❌ Failed to send. Please call +91 95038 32889');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl">
      {/* Form fields with improved UX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} className="p-4 border rounded-2xl focus:ring-2 focus:ring-blue-500" />
        <input type="tel" name="phone" placeholder="Phone *" required onChange={handleChange} className="p-4 border rounded-2xl focus:ring-2 focus:ring-blue-500" />
      </div>

      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-4 border rounded-2xl" />

      <select name="package" required onChange={handleChange} className="w-full p-4 border rounded-2xl">
        <option value="">Select Package</option>
        {packages.map(p => (
          <option key={p.id} value={p.name}>{p.name} - ₹{p.price}</option>
        ))}
      </select>

      <textarea name="address" placeholder="Full Address *" required onChange={handleChange} className="w-full p-4 border rounded-2xl h-28" />

      <div className="grid grid-cols-2 gap-6">
        <input type="text" name="pincode" placeholder="Pincode *" required onChange={handleChange} className="p-4 border rounded-2xl" />
        <input type="date" name="date" required onChange={handleChange} className="p-4 border rounded-2xl" />
      </div>

      <select name="time" required onChange={handleChange} className="w-full p-4 border rounded-2xl">
        <option value="">Preferred Time</option>
        <option value="7AM-10AM">Morning (7-10 AM)</option>
        <option value="10AM-2PM">Afternoon (10-2 PM)</option>
        <option value="3PM-7PM">Evening (3-7 PM)</option>
      </select>

      <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-5 rounded-2xl text-xl font-bold hover:brightness-110 transition">
        {loading ? 'Processing...' : 'Confirm Booking'}
      </button>

      {status && <p className="text-center font-medium py-4 text-lg">{status}</p>}
    </form>
  );
        }
