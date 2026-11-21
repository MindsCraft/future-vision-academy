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
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `শিক্ষা কার্যক্রম ও পাঠ্যক্রম | ${siteConfig.shortName}`,
  description: 'প্লে থেকে ১০ম শ্রেণি পর্যন্ত জাতীয় শিক্ষাক্রম (NCTB) ও ইংরেজি ভাষা চর্চার পূর্ণাঙ্গ বিবরণ।',
};

export default function AcademicsPage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';

  return (
    <div>
      {/* Header */}
      <section className="section section--subtle">
        <div className="container text-center">
          <span className="section-tag">শিক্ষা কার্যক্রম</span>
          <h1 className="section-title">আনন্দময় পরিবেশে যুগোপযোগী পাঠদান</h1>
          <p className="section-desc" style={{ maxWidth: '740px', marginInline: 'auto' }}>
            প্লে থেকে ১০ম শ্রেণি পর্যন্ত জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত কারিকুলামের আলোকে যুগোপযোগী পাঠদান।
          </p>
        </div>
      </section>

      {/* 3 Academic Stages */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {/* Stage 1: Pre-Primary */}
            <div className="grid grid-2 gap-2xl items-center">
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 12px 28px rgba(36, 50, 130, 0.1)' }}>
                <Image
                  src="/images/showcase/kindergarten.jpg"
                  alt="প্রাক-প্রাথমিক শ্রেণিকক্ষ"
                  width={600}
                  height={420}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div>
                <span className="badge badge--warning" style={{ marginBottom: '10px' }}>ভর্তি চলছে • প্লে, নার্সারি ও কেজি</span>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '12px' }}>
                  ১. প্রাক-প্রাথমিক স্তর (Pre-Primary)
                </h2>
                <p className="body-regular" style={{ marginBottom: '16px' }}>
                  ছোট্ট শিশুদের কাছে স্কুলকে ভালোলাগার জায়গা হিসেবে গড়ে তোলাই আমাদের প্রথম লক্ষ্য। খেলার ছলে বর্ণমালা পরিচয়, সুন্দর ও নির্ভুল হাতের লেখা, সামাজিক আচরণ এবং মৌলিক ছড়া ও গল্প বলা।
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>অডিও-ভিজ্যুয়াল ডিজিটাল কার্টুন ও শিক্ষণীয় ছড়া</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>রঙিন ছবি ও ফ্ল্যাশকার্ডের সাহায্যে বর্ণমালা শিখন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>শিশুবান্ধব ও সম্পূর্ণ নিরাপদ ক্যাম্পাসে বিশেষ যত্ন</span>
                  </div>
                </div>
                <Link href="/admissions" className="btn btn--primary">
                  <span>ভর্তি নির্দেশিকা দেখুন</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Stage 2: Primary */}
            <div className="grid grid-2 gap-2xl items-center">
              <div>
                <span className="badge badge--primary" style={{ marginBottom: '10px' }}>ভর্তি চলছে • ১ম থেকে ৫ম শ্রেণি</span>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '12px' }}>
                  ২. প্রাথমিক স্তর (Primary Section)
                </h2>
                <p className="body-regular" style={{ marginBottom: '16px' }}>
                  প্রাথমিক স্তরে বিষয়ভিত্তিক মৌলিক ধারণার ওপর সর্বোচ্চ জোর দেওয়া হয়। বাংলা ও গণিতের ভীত মজবুত করার পাশাপাশি ইংরেজি ভাষা ব্যবহারের দক্ষতা তৈরি করা হয়।
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>বাংলা, ইংরেজি ও গণিতে ব্যক্তিগত মেধা মূল্যায়ন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>English Language Club-এ নিয়মিত স্পোকেন অনুশীলন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>সাপ্তাহিক ক্লাস টেস্ট ও নিয়মিত হোমওয়ার্ক মনিটরিং</span>
                  </div>
                </div>
                <Link href="/admissions" className="btn btn--primary">
                  <span>ভর্তি আবেদন করুন</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 12px 28px rgba(36, 50, 130, 0.1)' }}>
                <Image
                  src="/images/showcase/classroom.jpg"
                  alt="প্রাথমিক স্তরের শ্রেণিকক্ষ"
                  width={600}
                  height={420}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Stage 3: Secondary */}
            <div className="grid grid-2 gap-2xl items-center">
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 12px 28px rgba(36, 50, 130, 0.1)' }}>
                <Image
                  src="/images/showcase/library.jpg"
                  alt="মাধ্যমিক স্তরের লাইব্রেরি স্টাডি"
                  width={600}
                  height={420}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div>
                <span className="badge badge--neutral" style={{ marginBottom: '10px' }}>ভর্তি চলছে • ৬ষ্ঠ থেকে ৮ম শ্রেণি</span>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '12px' }}>
                  ৩. মাধ্যমিক স্তর (Secondary Section)
                </h2>
                <p className="body-regular" style={{ marginBottom: '16px' }}>
                  ৬ষ্ঠ থেকে ১০ম শ্রেণি পর্যন্ত শিক্ষার্থীদের বোর্ড পরীক্ষার লক্ষ্য নির্ধারণ করে পাঠদান করা হয়। নিয়মিত মডেল টেস্ট ও সৃজনশীল প্রশ্নোত্তর অনুশীলনের মাধ্যমে পরীক্ষায় সর্বোচ্চ ফলাফলের প্রস্তুতি নেওয়া হয়।
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>বিজ্ঞান, গণিত ও ইংরেজি বিষয়ে বিশেষ কেয়ার ক্লাস</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>পরীক্ষানির্ভর মডেল টেস্ট ও অধ্যায়ভিত্তিক রিভিশন</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--color-primary-600)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>অভিভাবকদের সাথে নিয়মিত ফলাফল সমন্বয় মিটিং</span>
                  </div>
                </div>
                <Link href="/admissions" className="btn btn--primary">
                  <span>ভর্তি তথ্য জানুন</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routine & Assessment Card */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">মূল্যায়ন ও সময়সূচি</span>
            <h2 className="section-title">অ্যাকাডেমিক ক্যালেন্ডার ও ক্লাস রুটিন</h2>
            <p className="section-desc">
              সুশৃঙ্খল ক্লাস রুটিনের মাধ্যমে শিক্ষার্থীদের সময়জ্ঞান ও অ্যাকাডেমিক ধারাবাহিকতা বজায় রাখা হয়।
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
                <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>অফিস সময়</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)', marginTop: '4px' }}>সকাল ৮:০০ – দুপুর ২:০০</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>ভর্তি ও পরামর্শ হেল্পডেস্ক</span>
              </div>

              <div style={{ padding: 'var(--space-md)', background: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)' }}>
                <GraduationCap size={28} color="var(--color-primary-600)" style={{ marginInline: 'auto', marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>মূল্যায়ন পদ্ধতি</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)', marginTop: '4px' }}>সাপ্তাহিক ও সাময়িক পরীক্ষা</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>প্রোগ্রেস রিপোর্ট প্রদান</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
