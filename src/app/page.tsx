import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  GraduationCap,
  Languages,
  ShieldCheck,
  BookOpen,
  Navigation,
} from 'lucide-react';
import { siteConfig, googleMapsConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `ভর্তি চলছে ২০২৬ — ${siteConfig.shortName} | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function HomePage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/88${rawPhone}?text=${encodeURIComponent(
    'আসসালামু আলাইকুম, ফিউচার ভিশন একাডেমিতে নতুন শিক্ষাবর্ষে ভর্তি সম্পর্কিত তথ্য জানতে চাই।'
  )}`;

  return (
    <div className="admission-wrapper">
      <article className="admission-poster">
        {/* Top Accent Strip */}
        <div className="admission-poster__top-strip">
          <div className="admission-poster__pill">
            <span className="admission-poster__pulse-dot" />
            <span>ভর্তি চলছে ২০২৬</span>
          </div>
          <div>প্লে, নার্সারি, কেজি থেকে ১০ম শ্রেণি • সীমিত আসন</div>
          <div>স্থাপিত: ২০২৫ • গফরগাঁও, ময়মনসিংহ</div>
        </div>

        {/* Poster Main Body */}
        <div className="admission-poster__body">
          {/* School Brand & Logo */}
          <header className="admission-poster__brand">
            <div className="admission-poster__logo-wrap">
              <div className="admission-poster__logo-inner">
                <Image
                  src="/images/logo-icon.png"
                  alt={`${siteConfig.name} লোগো`}
                  width={100}
                  height={100}
                  className="admission-poster__logo-img"
                  priority
                />
              </div>
            </div>

            <h1 className="admission-poster__school-title">
              {siteConfig.shortName}
            </h1>
            <div className="admission-poster__school-en">
              {siteConfig.name}
            </div>
            <p className="admission-poster__tagline">
              {siteConfig.tagline}
            </p>
          </header>

          {/* Admission Highlight Callout */}
          <section className="admission-poster__highlight-box">
            <div className="admission-poster__badge-main">
              <Sparkles size={18} />
              <span>নতুন শিক্ষাবর্ষে ভর্তি চলছে</span>
            </div>
            <h2 className="admission-poster__headline">
              প্লে থেকে ৮ম শ্রেণিতে নতুন শিক্ষার্থী ভর্তি কার্যক্রম শুরু হয়েছে
            </h2>
            <p className="admission-poster__subtext">
              গফরগাঁও পৌর শহরের পশু হাসপাতাল রোডে মনোরম ও সম্পূর্ণ সিসিটিভি নিয়ন্ত্রিত নিরাপদ পরিবেশে আপনার সন্তানের ভবিষ্যৎ গড়ার নির্ভরযোগ্য বিদ্যাপীঠ।
            </p>
          </section>

          {/* 4 Feature Pillars */}
          <section className="admission-poster__features">
            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">শ্রেণি কার্যক্রম</h3>
                <p className="admission-poster__feature-desc">
                  প্লে থেকে ১০ম শ্রেণি পর্যন্ত আদর্শ পাঠদান। বর্তমানে প্লে থেকে ৮ম শ্রেণিতে সরাসরি ভর্তি চলছে।
                </p>
              </div>
            </div>

            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <Languages size={24} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">English Language Club</h3>
                <p className="admission-poster__feature-desc">
                  বাংলা মাধ্যমের পাশাপাশি শিশুদের ফ্লুয়েন্ট স্পোকেন ও আধুনিক ইংরেজি চর্চার বিশেষ ব্যবস্থা।
                </p>
              </div>
            </div>

            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">সিসিটিভি ও নিরাপদ পরিবেশ</h3>
                <p className="admission-poster__feature-desc">
                  সম্পূর্ণ ক্যাম্পাস সার্বক্ষণিক সিসিটিভি ক্যামেরা নিয়ন্ত্রিত, সুশৃঙ্খল ও আন্তরিক নজরদারি।
                </p>
              </div>
            </div>

            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">যত্নশীল শিক্ষক মণ্ডলী</h3>
                <p className="admission-poster__feature-desc">
                  দক্ষ ও অভিজ্ঞ শিক্ষক-শিক্ষিকা কর্তৃক সহজবোধ্য পাঠদান, নিয়মিত ক্লাস টেস্ট ও সাপ্তাহিক মূল্যায়ন।
                </p>
              </div>
            </div>
          </section>

          {/* Action Call-to-Actions */}
          <div className="admission-poster__actions">
            <a href={`tel:${rawPhone}`} className="admission-btn-call">
              <Phone size={20} />
              <span>সরাসরি কল করুন: {phoneNumber}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="admission-btn-whatsapp"
            >
              <MessageCircle size={20} />
              <span>হোয়াটসঅ্যাপে মেসেজ পাঠান</span>
            </a>

            <a
              href={googleMapsConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="admission-btn-map"
            >
              <Navigation size={18} />
              <span>ম্যাপে লোকেশন দেখুন</span>
            </a>
          </div>
        </div>

        {/* Footer Contact Details */}
        <footer className="admission-poster__footer">
          <div className="admission-poster__info-item">
            <MapPin size={16} className="admission-poster__info-icon" />
            <span>৪২৪, পশু হাসপাতাল রোড, গফরগাঁও পৌরসভা, ময়মনসিংহ</span>
          </div>
          <div className="admission-poster__info-item">
            <Clock size={16} className="admission-poster__info-icon" />
            <span>শনিবার – বৃহস্পতিবার: সকাল ৮:০০ – দুপুর ২:০০</span>
          </div>
          <div className="admission-poster__info-item">
            <Phone size={16} className="admission-poster__info-icon" />
            <span>হটলাইন: {phoneNumber}</span>
          </div>
        </footer>
      </article>
    </div>
  );
}
