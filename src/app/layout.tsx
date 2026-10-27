import type { Metadata } from 'next';
import { Hind_Siliguri, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner/AnnouncementBanner';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  variable: '--font-hind-siliguri',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || 'https://futurevisionacademy.edu.bd'),
  title: `${siteConfig.shortName} — ${siteConfig.name} | গফরগাঁও, ময়মনসিংহ`,
  description: siteConfig.description,
  keywords: [
    'Future Vision Academy',
    'ফিউচার ভিশন একাডেমি',
    'School in Gafargaon',
    'স্কুল গফরগাঁও',
    'English Language Club',
    'Playgroup to Class 10',
    'গফরগাঁও পশু হাসপাতাল রোড',
    'ভর্তি চলছে',
  ],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable}`}>
      <body>
        <AnnouncementBanner />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
