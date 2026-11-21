import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BookOpen,
  Languages,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Heart,
  Volume2,
  Mic,
  Smile,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `শিক্ষা ও কারিকুলাম | ${siteConfig.shortName}`,
  description: 'জাতীয় শিক্ষাক্রম (NCTB), বিশেষ English Language Club এবং সহীহ কুরআন শিক্ষা ক্লাসের সমন্বিত পাঠ্যক্রম।',
};

export default function AcademicsPage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <div>
      {/* Header Banner */}
      <section className="section section--subtle">
        <div className="container text-center">
          <span className="section-tag section-tag--accent">শিক্ষা ও কারিকুলাম</span>
          <h1 className="section-title">আধুনিক শিক্ষা, ভাষা চর্চা ও নৈতিকতার সমন্বয়</h1>
          <p className="section-desc" style={{ maxWidth: '760px', marginInline: 'auto' }}>
            জাতীয় শিক্ষাক্রম (NCTB) ভিত্তিক দৃঢ় অ্যাকাডেমিক ভিত্তির পাশাপাশি প্রতিটি শিশুর জন্য রয়েছে বিশেষ English Language Club এবং সহীহ কুরআন শিক্ষা কার্যক্রম।
          </p>
        </div>
      </section>

      {/* 2 Special Hallmark Programs: English Club & Quran Learning */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">আমাদের বিশেষ আকর্ষণ</span>
            <h2 className="section-title">সমৃদ্ধ ভবিষ্যতের জন্য বিশেষ দুটি স্তম্ভ</h2>
            <p className="section-desc">
              সাধারণ পাঠ্যবইয়ের পাশাপাশি আমরা নিশ্চিত করি আন্তর্জাতিক যোগাযোগ দক্ষতা ও ধর্মীয়-নৈতিক মূল্যবোধ।
            </p>
          </div>

          <div className="grid grid-2 gap-2xl">
            {/* Special Feature 1: English Language Club */}
            <div
              id="english-club"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-600) 100%)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(36, 50, 130, 0.15)',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'var(--color-accent-300)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    marginBottom: '14px',
                  }}
                >
                  <Languages size={15} />
                  <span>বিশেষ কার্যক্রম • English Club</span>
                </span>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
                  English Language Club
                </h3>

                <p style={{ color: '#e0e7ff', lineHeight: '1.65', marginBottom: '20px', fontSize: '0.95rem' }}>
                  মুখস্থ পড়ার বাইরে এসে বাস্তব জীবনে শুদ্ধ উচ্চারণে ও আত্মবিশ্বাসের সাথে ইংরেজি বলা শেখানো হয়।
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-accent-300)" />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff' }}><strong>Phonics:</strong> আন্তর্জাতিক মানের শুদ্ধ উচ্চারণ শিখন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-accent-300)" />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff' }}><strong>Spoken Drills:</strong> প্রাত্যহিক কথোপকথনে জড়তা দূরীকরণ</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-accent-300)" />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff' }}><strong>Presentation:</strong> মঞ্চে কথা বলা ও প্রেজেন্টেশন প্র্যাকটিস</span>
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: '16px' }}>
                <Image
                  src="/images/showcase/english-club.jpg"
                  alt="English Language Club সেশন"
                  width={600}
                  height={340}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Special Feature 2: Quran Learning Class */}
            <div
              id="quran-class"
              style={{
                background: 'linear-gradient(135deg, #1e3a2b 0%, #15803d 100%)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(21, 128, 61, 0.15)',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#fef08a',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    marginBottom: '14px',
                  }}
                >
                  <Heart size={15} />
                  <span>বিশেষ কার্যক্রম • নৈতিক ও ধর্মীয় শিক্ষা</span>
                </span>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
                  সহীহ কুরআন শিক্ষা ও নৈতিকতা ক্লাস
                </h3>

                <p style={{ color: '#dcfce7', lineHeight: '1.65', marginBottom: '20px', fontSize: '0.95rem' }}>
                  আধুনিক শিক্ষার পাশাপাশি প্রতিটি শিশুর আত্মিক ও নৈতিক বিকাশের লক্ষ্যে সহীহ তিলাওয়াত ও শিষ্টাচার চর্চা।
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="#fef08a" />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff' }}><strong>সহীহ মাখরাজ ও তাজভীদ:</strong> হরফের সঠিক উচ্চারণ ও কায়দা শিখন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="#fef08a" />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff' }}><strong>ছোট সূরা ও মাসনূন দো&apos;আ:</strong> প্রয়োজনীয় সূরা ও প্রাত্যহিক দো&apos;আ মুখস্থকরণ</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="#fef08a" />
                    <span style={{ fontSize: '0.9rem', color: '#ffffff' }}><strong>নৈতিক শিষ্টাচার (আদব):</strong> বড়দের সম্মান, সততা ও মানবিক মূল্যবোধের অনুশীলন</span>
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: '16px' }}>
                <Image
                  src="/images/showcase/library.jpg"
                  alt="কুরআন শিক্ষা ও পাঠাভ্যাস"
                  width={600}
                  height={340}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Academic Stages: Pre-Primary, Primary, Secondary */}
      <section className="section section--subtle" id="stages">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag--accent">জাতীয় শিক্ষাক্রম (NCTB)</span>
            <h2 className="section-title">শ্রেণি স্তর বিন্যাস (প্লে থেকে ১০ম শ্রেণি)</h2>
            <p className="section-desc">
              বোর্ড নির্ধারিত আধুনিক পাঠ্যবই ও বয়স উপযোগী শিক্ষাপদ্ধতির মাধ্যমে প্রতিটি শ্রেণির শ্রেণি কার্যক্রম পরিচালিত হয়।
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            {/* Stage 1: Pre-Primary */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 'var(--space-2xl)',
                alignItems: 'center',
              }}
            >
              <div>
                <span className="badge badge--warning" style={{ marginBottom: '8px' }}>ভর্তি চলছে • আসন সীমিত</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ১. প্রাক-প্রাথমিক স্তর (প্লে, নার্সারি ও কেজি)
                </h3>
                <p className="body-regular" style={{ marginBottom: '16px' }}>
                  ছোট্ট সোনামণিদের প্রথম স্কুলজীবন আনন্দময় করে তোলাই আমাদের উদ্দেশ্য। ভীতিহীন পরিবেশে খেলার ছলে বাংলা ও ইংরেজি বর্ণমালা পরিচয়, সঠিক উচ্চারণ, সুন্দর হাতের লেখা এবং সংখ্যা গণনা।
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>ছড়া, গল্প ও ডিজিটাল অডিও-ভিজ্যুয়াল কার্টুনের মাধ্যমে শিখন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>চিত্রাঙ্কন, ক্যালিগ্রাফি ও শিশুতোষ সাধারণ জ্ঞান</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>স্নেহশীল শিক্ষিকাদের দ্বারা বিশেষ তত্ত্বাবধান ও ব্যক্তিগত যত্ন</span>
                  </div>
                </div>
                <Link href="/admissions" className="btn btn--primary">
                  <span>প্রাক-প্রাথমিক ভর্তি নির্দেশিকা</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <Image
                  src="/images/showcase/kindergarten.jpg"
                  alt="প্রাক-প্রাথমিক শ্রেণিকক্ষ"
                  width={500}
                  height={350}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Stage 2: Primary */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'grid',
                gridTemplateColumns: '0.8fr 1.2fr',
                gap: 'var(--space-2xl)',
                alignItems: 'center',
              }}
            >
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <Image
                  src="/images/showcase/classroom.jpg"
                  alt="প্রাথমিক স্তরের শ্রেণিকক্ষ"
                  width={500}
                  height={350}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div>
                <span className="badge badge--primary" style={{ marginBottom: '8px' }}>ভর্তি চলছে • ১ম থেকে ৫ম শ্রেণি</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ২. প্রাথমিক স্তর (১ম থেকে ৫ম শ্রেণি)
                </h3>
                <p className="body-regular" style={{ marginBottom: '16px' }}>
                  প্রাথমিক স্তরে বাংলা, ইংরেজি ও গণিতের মজবুত বুনিয়াদ গড়ে তোলা হয়। নিয়মিত হোমওয়ার্ক তদারকি, পাঠ্যবইয়ের অনুশীলনী সমাধান এবং সৃজনশীল মেধা গঠন।
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>বাংলা ও গণিতে ধারণাগত স্পষ্টতা ও সমস্যা সমাধান দক্ষতা</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>English Language Club-এ বাধ্যতামূলক সক্রিয় অংশগ্রহণ</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>সাপ্তাহিক মূল্যায়ন ও অভিভাবক প্রগ্রেস মিটিং</span>
                  </div>
                </div>
                <Link href="/admissions" className="btn btn--primary">
                  <span>প্রাথমিক স্তরে ভর্তি তথ্য</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Stage 3: Secondary */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: 'var(--space-2xl)',
                alignItems: 'center',
              }}
            >
              <div>
                <span className="badge badge--neutral" style={{ marginBottom: '8px' }}>ভর্তি চলছে • ৬ষ্ঠ থেকে ৮ম শ্রেণি</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ৩. মাধ্যমিক স্তর (৬ষ্ঠ থেকে ১০ম শ্রেণি)
                </h3>
                <p className="body-regular" style={{ marginBottom: '16px' }}>
                  বোর্ড পরীক্ষার জন্য সুনির্দিষ্ট প্রস্তুতি, গণিত ও বিজ্ঞানের বিশেষ তত্ত্বাবধান এবং ক্যারিয়ার ও নেতৃত্ব গঠনের পাঠদান।
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>অধ্যায়ভিত্তিক বিস্তারিত লেকচার ও সৃজনশীল প্রশ্নোত্তর সমাধান</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>মডেল টেস্ট ও দুর্বল শিক্ষার্থীদের জন্য আলাদা কেয়ার ক্লাস</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>এসএসসি পরীক্ষায় জিপিএ-৫ অর্জনের নিয়মতান্ত্রিক প্রস্তুতি</span>
                  </div>
                </div>
                <Link href="/admissions" className="btn btn--primary">
                  <span>মাধ্যমিক স্তরে আসন সংরক্ষণ</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <Image
                  src="/images/showcase/assembly.jpg"
                  alt="মাধ্যমিক স্তরের শিক্ষার্থী"
                  width={500}
                  height={350}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routine & Assessment Table */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">দৈনিক সময়সূচি</span>
            <h2 className="section-title">অ্যাকাডেমিক রুটিন ও মূল্যায়ন</h2>
            <p className="section-desc">
              নিয়মানুবর্তিতা ও সময়ের সঠিক ব্যবহার নিশ্চিত করতে সুনির্দিষ্ট ক্লাসরুটিন অনুসরণ করা হয়।
            </p>
          </div>

          <div
            style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
              maxWidth: '860px',
              marginInline: 'auto',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ padding: 'var(--space-md)', background: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)' }}>
                <Clock size={28} color="var(--color-primary-600)" style={{ marginInline: 'auto', marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>ক্লাস সময়সূচি</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)', marginTop: '4px' }}>সকাল ৮:৩০ – দুপুর ১:৩০</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>শনিবার থেকে বৃহস্পতিবার</span>
              </div>

              <div style={{ padding: 'var(--space-md)', background: 'var(--color-accent-50)', borderRadius: 'var(--radius-md)' }}>
                <Calendar size={28} color="var(--color-accent-600)" style={{ marginInline: 'auto', marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>অফিস ও হেল্পডেস্ক</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)', marginTop: '4px' }}>সকাল ৮:০০ – দুপুর ২:০০</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>ভর্তি ও অভিভাবক তথ্য সেবা</span>
              </div>

              <div style={{ padding: 'var(--space-md)', background: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)' }}>
                <GraduationCap size={28} color="var(--color-primary-600)" style={{ marginInline: 'auto', marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>মূল্যায়ন পদ্ধতি</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)', marginTop: '4px' }}>সাপ্তাহিক ও সাময়িক পরীক্ষা</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>ধারাবাহিক প্রোগ্রেস ট্র্যাকিং</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
