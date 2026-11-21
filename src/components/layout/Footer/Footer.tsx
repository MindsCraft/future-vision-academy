'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck, Sparkles, BookOpen, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1: School Brand */}
          <div>
            <div className="footer__brand">
              <Image
                src="/images/logo-with-name.png"
                alt={`${siteConfig.name} (${siteConfig.shortName})`}
                width={260}
                height={48}
                className="footer__logo-img"
              />
            </div>

            <p className="footer__desc">
              গফরগাঁও পৌর শহরে জাতীয় শিক্ষাক্রম (NCTB), বিশেষ English Language Club এবং সহীহ কুরআন শিক্ষার সমন্বয়ে পরিচালিত এক আদর্শ বিদ্যাপীঠ।
            </p>

            <div className="footer__badges">
              <span className="footer__badge-pill">
                <ShieldCheck size={13} />
                <span>সিসিটিভি নিয়ন্ত্রিত ক্যাম্পাস</span>
              </span>
              <span className="footer__badge-pill">
                <Sparkles size={13} />
                <span>স্থাপিত: {siteConfig.established || 2025}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer__title">প্রধান সূচি</h3>
            <ul className="footer__list">
              <li>
                <Link href="/" className="footer__link">মূল পাতা (Home)</Link>
              </li>
              <li>
                <Link href="/about" className="footer__link">আমাদের পরিচিতি ও শিক্ষক</Link>
              </li>
              <li>
                <Link href="/academics" className="footer__link">শিক্ষা ও কারিকুলাম</Link>
              </li>
              <li>
                <Link href="/admissions" className="footer__link">ভর্তি তথ্য ২০২৬</Link>
              </li>
              <li>
                <Link href="/campus-life" className="footer__link">বাস্তব চিত্র ও গ্যালারি</Link>
              </li>
              <li>
                <Link href="/contact" className="footer__link">যোগাযোগ ও মানচিত্র</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Highlights */}
          <div>
            <h3 className="footer__title">কারিকুলাম ও বিশেষত্ব</h3>
            <ul className="footer__list">
              <li>
                <Link href="/academics#nctb" className="footer__link">জাতীয় শিক্ষাক্রম (NCTB)</Link>
              </li>
              <li>
                <Link href="/academics#english-club" className="footer__link">English Language Club</Link>
              </li>
              <li>
                <Link href="/academics#quran-class" className="footer__link">সহীহ কুরআন শিক্ষা ক্লাস</Link>
              </li>
              <li>
                <Link href="/academics#stages" className="footer__link">প্রাক-প্রাথমিক ও প্রাথমিক</Link>
              </li>
              <li>
                <Link href="/academics#stages" className="footer__link">মাধ্যমিক স্তর (৬ষ্ঠ - ১০ম)</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="footer__title">যোগাযোগ ও অফিস</h3>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={16} className="footer__icon" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <Phone size={16} className="footer__icon" />
                <a href={`tel:${rawPhone}`}>হটলাইন: {phoneNumber}</a>
              </li>
              <li>
                <Clock size={16} className="footer__icon" />
                <span>{siteConfig.contact.hours}</span>
              </li>
              {siteConfig.socials?.facebook && (
                <li>
                  <ExternalLink size={16} className="footer__icon" />
                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    অফিসিয়াল ফেসবুক পেজ
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {currentYear} {siteConfig.name} ({siteConfig.shortName})। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="footer__bottom-links">
            <Link href="/admissions" className="footer__bottom-link">ভর্তি তথ্য</Link>
            <span>•</span>
            <Link href="/contact" className="footer__bottom-link">ক্যাম্পাস লোকেশন</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
