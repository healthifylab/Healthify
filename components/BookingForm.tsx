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

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
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

      setStatus('✅ Booking Sent Successfully! We will call/WhatsApp you soon.');

      const waText = `New Booking:%0AName: ${formData.name}%0APhone: ${formData.phone}%0APackage: ${formData.package}%0AAddress: ${formData.address}`;
      window.open(`https://wa.me/919503832889?text=${waText}`, '_blank');

      setFormData({ name: '', phone: '', email: '', package: '', address: '', pincode: '', date: '', time: '', message: '' });
    } catch (error) {
      setStatus('❌ Error sending booking. Please call +91 95038 32889');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-8 rounded-3xl backdrop-blur-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} className="p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:border-blue-500" />
        <input type="tel" name="phone" placeholder="Phone Number *" required onChange={handleChange} className="p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:border-blue-500" />
      </div>

      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60" />

      <select name="package" required onChange={handleChange} className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white">
        <option value="">Select Package / Test *</option>
        <option value="Healthify Vital Check">Healthify Vital Check</option>
        <option value="Healthify Core Wellness">Healthify Core Wellness</option>
        <option value="Healthify Comprehensive Wellness">Healthify Comprehensive Wellness</option>
      </select>

      <textarea name="address" placeholder="Full Address with Landmark *" required onChange={handleChange} className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white h-28 placeholder:text-white/60" />

      <div className="grid grid-cols-2 gap-6">
        <input type="text" name="pincode" placeholder="Pincode *" required onChange={handleChange} className="p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60" />
        <input type="date" name="date" required onChange={handleChange} className="p-4 bg-white/10 border border-white/20 rounded-2xl text-white" />
      </div>

      <select name="time" required onChange={handleChange} className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white">
        <option value="">Preferred Time *</option>
        <option value="7AM-10AM">Morning (7AM-10AM)</option>
        <option value="10AM-2PM">Afternoon (10AM-2PM)</option>
        <option value="3PM-7PM">Evening (3PM-7PM)</option>
      </select>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-5 rounded-2xl text-xl font-bold transition hover:brightness-110 disabled:opacity-70"
      >
        {loading ? 'Sending...' : 'Confirm Booking Now'}
      </button>

      {status && <p className={`text-center font-medium py-4 text-lg ${status.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}
    </form>
  );
}
