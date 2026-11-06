import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner/AnnouncementBanner';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-noto-sans-bengali',
  display: 'swap',
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo-icon.png', sizes: '208x208', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={notoSansBengali.variable}>
      <body>
        <AnnouncementBanner />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
