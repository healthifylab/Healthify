'use client';

import BookingForm from '@/components/BookingForm';
import { packages } from '@/lib/packages';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Book Home Collection</h1>
          <p className="text-xl text-gray-600">Healthify Lab • Mumbai, Navi Mumbai, Thane</p>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
