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
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `ভর্তি চলছে ২০২৬ — ${siteConfig.shortName} | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function HomePage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/88${rawPhone}`;

  return (
    <div className="admission-wrapper">
      <article className="admission-poster">
        {/* Top Accent Strip */}
        <div className="admission-poster__top-strip">
          <div className="admission-poster__pill">
            <span className="admission-poster__pulse-dot" />
            <span>ভর্তি চলছে ২০২৬</span>
          </div>
          <div>প্লে থেকে ১০ম শ্রেণি • আসন সংখ্যা সীমিত</div>
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
                  width={96}
                  height={96}
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
              গফরগাঁও পৌর শহরের পশু হাসপাতাল রোডে মনোরম ও নিরাপদ পরিবেশে আপনার সন্তানের ভবিষ্যৎ গড়ার আধুনিক বিদ্যাপীঠ।
            </p>
          </section>

          {/* 4 Feature Pillars */}
          <section className="admission-poster__features">
            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">শ্রেণি কার্যক্রম</h3>
                <p className="admission-poster__feature-desc">
                  প্লে থেকে ১০ম শ্রেণি পর্যন্ত পাঠদান। বর্তমানে প্লে থেকে ৮ম শ্রেণিতে সরাসরি ভর্তি চলছে।
                </p>
              </div>
            </div>

            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <Languages size={22} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">English Language Club</h3>
                <p className="admission-poster__feature-desc">
                  বাংলা মাধ্যমের পাশাপাশি শিশুদের জন্য বিশেষ স্পোকেন ও নিয়মিত ইংরেজি চর্চার সুযোগ।
                </p>
              </div>
            </div>

            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">নিরাপদ ও সুশৃঙ্খল পরিবেশ</h3>
                <p className="admission-poster__feature-desc">
                  সম্পূর্ণ ক্যাম্পাস সার্বক্ষণিক সিসিটিভি ক্যামেরা নিয়ন্ত্রিত ও মনোরম পরিবেশ।
                </p>
              </div>
            </div>

            <div className="admission-poster__feature-card">
              <div className="admission-poster__feature-icon">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="admission-poster__feature-title">যত্নশীল পাঠদান</h3>
                <p className="admission-poster__feature-desc">
                  অভিজ্ঞ শিক্ষক-শিক্ষিকা কর্তৃক আন্তরিক পাঠদান, নিয়মিত ক্লাস টেস্ট ও ফলাফল পর্যালোচনা।
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
              <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
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
