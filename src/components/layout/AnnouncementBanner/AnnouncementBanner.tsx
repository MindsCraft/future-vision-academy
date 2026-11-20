'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside className="announcement-banner" aria-label="জরুরি বিজ্ঞপ্তি">
      <div className="announcement-banner__container container">
        <div className="announcement-banner__content">
          <span className="announcement-banner__badge">
            <span className="announcement-banner__badge-dot" />
            ভর্তি বিজ্ঞপ্তি ২০২৬
          </span>
          <span className="announcement-banner__text">
            প্লে থেকে ৮ম শ্রেণিতে নতুন শিক্ষার্থী ভর্তি চলছে
          </span>
          <span className="announcement-banner__bullet">•</span>
          <span className="announcement-banner__text">
            হটলাইন: <strong>{siteConfig.contact.phone || '01713-503854'}</strong>
          </span>
          <span className="announcement-banner__bullet">•</span>
          <Link href="#admissions" className="announcement-banner__link">
            <span>ভর্তি নির্দেশিকা</span>
            <ArrowRight size={14} className="announcement-banner__link-arrow" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="announcement-banner__close"
          aria-label="বিজ্ঞপ্তি বন্ধ করুন"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
};
