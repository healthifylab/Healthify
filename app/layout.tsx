import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Healthify — Premium Diagnostic Lab | Home Blood Collection in Mumbai, Navi Mumbai & Thane',
  description:
    'Healthify is a premium diagnostic laboratory offering 24+ health packages with same-day home blood sample collection across Mumbai, Navi Mumbai, Thane, Kalyan, Pune and PCMC. Accurate reports, fast turnaround, NABL-grade diagnostics.',
  keywords: [
    'Healthify', 'diagnostic lab', 'blood test at home', 'home sample collection',
    'Mumbai', 'Navi Mumbai', 'Thane', 'health checkup packages', 'pathology lab',
  ],
  openGraph: {
    title: 'Healthify — Premium Diagnostic Lab',
    description:
      'Home blood sample collection in Mumbai, Navi Mumbai & Thane. 24+ health packages with fast digital reports.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthify — Premium Diagnostic Lab',
    description: 'Home blood sample collection in Mumbai, Navi Mumbai & Thane. 24+ health packages.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
