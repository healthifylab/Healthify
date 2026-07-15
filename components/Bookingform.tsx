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

      setStatus('✅ Booking Request Sent! We will contact you soon.');

      const waText = `New Booking:%0AName: ${formData.name}%0APhone: ${formData.phone}%0APackage: ${formData.package}%0AAddress: ${formData.address}%0ADate: ${formData.date}`;
      window.open(`https://wa.me/919503832889?text=${waText}`, '_blank');

      setFormData({ name: '', phone: '', email: '', package: '', address: '', pincode: '', date: '', time: '', message: '' });
    } catch (error) {
      setStatus('❌ Error. Please call +91 95038 32889');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields same as before */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} className="p-4 border rounded-2xl" />
        <input type="tel" name="phone" placeholder="Phone *" required onChange={handleChange} className="p-4 border rounded-2xl" />
      </div>
      {/* ... rest of form ... */}
      <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold">
        {loading ? 'Sending...' : 'Confirm Booking'}
      </button>
      {status && <p className="text-center">{status}</p>}
    </form>
  );
}
