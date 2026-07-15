'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    address: '',
    pincode: '',
    date: '',
    time: '',
    message: ''
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

      setStatus('✅ Booking Request Sent Successfully! Hum aapko jaldi WhatsApp/Call karenge.');

      const waText = `New Booking Request:%0AName: ${formData.name}%0APhone: ${formData.phone}%0APackage: ${formData.package}%0AAddress: ${formData.address}, Pin: ${formData.pincode}%0ADate: ${formData.date} at ${formData.time}`;
      window.open(`https://wa.me/919503832889?text=${waText}`, '_blank');

      setFormData({ name: '', phone: '', email: '', package: '', address: '', pincode: '', date: '', time: '', message: '' });

    } catch (error) {
      setStatus('❌ Error sending. Please call +91 95038 32889');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} className="p-4 border rounded-2xl focus:outline-none focus:border-blue-500" />
        <input type="tel" name="phone" placeholder="Phone Number *" required onChange={handleChange} className="p-4 border rounded-2xl focus:outline-none focus:border-blue-500" />
      </div>

      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-4 border rounded-2xl" />

      <select name="package" required onChange={handleChange} className="w-full p-4 border rounded-2xl">
        <option value="">Select Package / Test *</option>
        <option value="Healthify Vital Check">Healthify Vital Check</option>
        <option value="Healthify Core Wellness">Healthify Core Wellness</option>
        <option value="Healthify Comprehensive Wellness">Healthify Comprehensive Wellness</option>
        <option value="Healthify Diabetes Care">Healthify Diabetes Care</option>
        <option value="Healthify Heart Guard">Healthify Heart Guard</option>
        <option value="Custom">Other / Custom Test</option>
      </select>

      <textarea name="address" placeholder="Full Address with Landmark *" required onChange={handleChange} className="w-full p-4 border rounded-2xl h-28" />

      <div className="grid grid-cols-2 gap-6">
        <input type="text" name="pincode" placeholder="Pincode *" required onChange={handleChange} className="p-4 border rounded-2xl" />
        <input type="date" name="date" required onChange={handleChange} className="p-4 border rounded-2xl" />
      </div>

      <select name="time" required onChange={handleChange} className="w-full p-4 border rounded-2xl">
        <option value="">Preferred Time *</option>
        <option value="7AM-10AM">Morning (7AM-10AM)</option>
        <option value="10AM-2PM">Afternoon (10AM-2PM)</option>
        <option value="3PM-7PM">Evening (3PM-7PM)</option>
      </select>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold transition"
      >
        {loading ? 'Sending...' : 'Confirm Booking Now'}
      </button>

      {status && <p className="text-center font-medium py-4 text-lg">{status}</p>}
    </form>
  );
}
