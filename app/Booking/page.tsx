'use client';

import { useState } from 'react';
import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">Book Home Sample Collection</h1>
          <p className="text-lg text-gray-600">Healthify Lab - Mumbai, Navi Mumbai & Thane</p>
        </div>

        <BookingForm />

        <div className="mt-10 text-center text-sm text-gray-500">
          We'll confirm your booking within 15 minutes via Call or WhatsApp
        </div>
      </div>
    </div>
  );
}
