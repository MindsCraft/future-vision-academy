import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Phone,
  Camera,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `ক্যাম্পাস জীবন ও ফটো গ্যালারি | ${siteConfig.shortName}`,
  description: 'ফিউচার ভিশন একাডেমি ক্যাম্পাসের আনন্দময় মুহূর্ত, ক্লাসরুম, সমাবেশ ও শিক্ষার্থীদের বাস্তব কার্যক্রমের চিত্রশালা।',
};

export default function CampusLifePage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  const galleryItems = [
    {
      title: 'শ্রেণিকক্ষে আনন্দের সাথে শিখন',
      category: 'শ্রেণিকক্ষ',
      image: '/images/students-classroom-hero.jpg',
      caption: 'শিক্ষকের আন্তরিক পাঠদানে শিশুরা আনন্দের সাথে প্রতিটি নতুন বিষয় শেখে।',
    },
    {
      title: 'English Language Club সেশন',
      category: 'ইংলিশ ক্লাব',
      image: '/images/showcase/english-club.jpg',
      caption: 'স্পোকেন ইংলিশ, উচ্চারণ এবং আত্মবিশ্বাসের সাথে ইংরেজি কথোপকথন চর্চা।',
    },
    {
      title: 'প্রাক-প্রাথমিক ছোট্ট সোনামণিরা',
      category: 'আর্লি চাইল্ডহুড',
      image: '/images/showcase/kindergarten.jpg',
      caption: 'প্লে ও নার্সারি শ্রেণিতে খেলার ছলে বর্ণমালা ও ছড়া শেখার রঙিন মুহূর্ত।',
    },
    {
      title: 'সুপরিসর ও আলোকিত শ্রেণিকক্ষ',
      category: 'ক্যাম্পাস অবকাঠামো',
      image: '/images/showcase/classroom.jpg',
      caption: 'পর্যাপ্ত আলো-বাতাস ও স্বাস্থ্যসম্মত বসার ব্যবস্থাসম্পন্ন শ্রেণিকক্ষ।',
    },
    {
      title: 'সমৃদ্ধ বুক কর্নার ও লাইব্রেরি',
      category: 'লাইব্রেরি',
      image: '/images/showcase/library.jpg',
      caption: 'বই পড়ার অভ্যাস গড়ে তুলতে শিক্ষণীয় গল্পের বই ও ম্যাগাজিন কর্নার।',
    },
    {
      title: 'প্রাত্যহিক সমাবেশ ও নিয়মানুবর্তিতা',
      category: 'সমাবেশ ও শৃঙ্খলা',
      image: '/images/showcase/assembly.jpg',
      caption: 'প্রতিদিনের সমাবেশ, শপথ ও জাতীয় সঙ্গীতের মাধ্যমে নৈতিক শিক্ষা গঠন।',
    },
    {
      title: 'চিত্রাঙ্কন ও সহশিক্ষা কার্যক্রম',
      category: 'সৃজনশীল মেধা',
      image: '/images/showcase/creative-arts.jpg',
      caption: 'হাতের লেখা, ক্যালিগ্রাফি ও চিত্রাঙ্কনে শিশুদের প্রতিভা বিকাশের সুযোগ।',
    },
    {
      title: 'দলগত পড়াশোনা ও বন্ধুত্ব',
      category: 'সহশিক্ষা',
      image: '/images/showcase/hero-students.jpg',
      caption: 'সহপাঠীদের সাথে শেয়ারিং ও দলগতভাবে নতুন বিষয় আবিষ্কারের আনন্দ।',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="section section--subtle">
        <div className="container text-center">
          <span className="section-tag section-tag--accent">চিত্রশালা ও ক্যাম্পাস</span>
          <h1 className="section-title">ক্যাম্পাস জীবন ও শিক্ষার্থীদের বাস্তব মুহূর্ত</h1>
          <p className="section-desc" style={{ maxWidth: '720px', marginInline: 'auto' }}>
            ফিউচার ভিশন একাডেমি ক্যাম্পাসে প্রতিদিন কীভাবে নতুন উদ্দীপনা নিয়ে শিশুরা এগিয়ে চলছে তার কিছু মুহূর্ত।
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3 gap-lg">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--color-white)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '4 / 3', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={450}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--color-accent-300)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-gray-600)', lineHeight: '1.55', margin: 0 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Campus CTA */}
      <section className="section section--subtle">
        <div className="container text-center" style={{ maxWidth: '780px' }}>
          <span className="section-tag">ক্যাম্পাস পরিদর্শন</span>
          <h2 className="section-title">সরাসরি ক্যাম্পাস ঘুরে দেখার সাদর আমন্ত্রণ</h2>
          <p className="section-desc" style={{ marginBottom: '24px' }}>
            আপনার সন্তানকে নিয়ে যেকোনো কার্যদিবসে সকাল ৮:০০ থেকে দুপুর ২:০০ টার মধ্যে আমাদের ক্যাম্পাসে চলে আসুন এবং পরিবেশ সরাসরি পর্যবেক্ষণ করুন।
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary btn--lg">
              <MapPin size={18} />
              <span>ঠিকানা ও গুগল ম্যাপে ডিরেকশন</span>
            </Link>
            <a href={`tel:${rawPhone}`} className="btn btn--secondary btn--lg">
              <Phone size={18} />
              <span>কল করুন: {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
