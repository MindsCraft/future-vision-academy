'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
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
              গফরগাঁও পৌর শহরে জাতীয় শিক্ষাক্রম (NCTB) এবং বিশেষ English Language Club সমন্বয়ে পরিচালিত আদর্শ শিক্ষাঙ্গন।
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
                <Link href="#admissions" className="footer__link">ভর্তি বিজ্ঞপ্তি ২০২৬</Link>
              </li>
              <li>
                <Link href="#academics" className="footer__link">শিক্ষা কার্যক্রম</Link>
              </li>
              <li>
                <Link href="#english-club" className="footer__link">English Language Club</Link>
              </li>
              <li>
                <Link href="#facilities" className="footer__link">ক্যাম্পাস সুযোগ-সুবিধা</Link>
              </li>
              <li>
                <Link href="#notices" className="footer__link">নোটিশ ও সময়সূচি</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Stages */}
          <div>
            <h3 className="footer__title">শিক্ষা স্তর</h3>
            <ul className="footer__list">
              <li>
                <span className="footer__link">প্লে ও নার্সারি (প্রাক-প্রাথমিক)</span>
              </li>
              <li>
                <span className="footer__link">কেজি শ্রেণি (ভিত্তি গঠন)</span>
              </li>
              <li>
                <span className="footer__link">১ম থেকে ৫ম শ্রেণি (প্রাথমিক)</span>
              </li>
              <li>
                <span className="footer__link">৬ষ্ঠ থেকে ৮ম শ্রেণি (মাধ্যমিক)</span>
              </li>
              <li>
                <span className="footer__link">৯ম ও ১০ম শ্রেণি (এসএসসি)</span>
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
            <Link href="#admissions" className="footer__bottom-link">ভর্তি তথ্য</Link>
            <span>•</span>
            <Link href="#contact" className="footer__bottom-link">ক্যাম্পাস লোকেশন</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
