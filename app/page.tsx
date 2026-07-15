import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import Services from '@/components/site/Services';
import Process from '@/components/site/Process';
import WhyChoose from '@/components/site/WhyChoose';
import DiseaseLibrary from '@/components/DiseaseLibrary';
import Testimonials from '@/components/site/Testimonials';
import Faq from '@/components/site/Faq';
import Booking from '@/components/site/Booking';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyChoose />
      <DiseaseLibrary />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
    </main>
  );
}
