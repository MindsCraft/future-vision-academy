import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Languages,
  Mic,
  Sparkles,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Volume2,
  Smile,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `English Language Club | ${siteConfig.shortName}`,
  description: 'ফিউচার ভিশন একাডেমির বিশেষ ইংলিশ ল্যাঙ্গুয়েজ ক্লাব — স্পোকেন ইংলিশ, ফনেটিক্স ও উপস্থাপনা দক্ষতা।',
};

export default function EnglishClubPage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #172054 0%, #243282 100%)',
          color: 'var(--color-white)',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5rem)',
        }}
      >
        <div className="container">
          <div className="grid grid-2 gap-2xl items-center">
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'var(--color-accent-300)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  marginBottom: '12px',
                }}
              >
                <Sparkles size={15} />
                <span>বিশেষ আকর্ষণ • Future Vision Academy</span>
              </span>

              <h1 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 900, lineHeight: 1.2, color: '#ffffff', marginBottom: '16px' }}>
                English Language Club
              </h1>

              <p style={{ fontSize: '1.1rem', color: '#e0e7ff', lineHeight: 1.7, marginBottom: '24px' }}>
                মুখস্থ বিদ্যার গণ্ডি পেরিয়ে শিশুরা যেন বাস্তব জীবনে শুদ্ধ উচ্চারণে ও স্বতঃস্ফূর্তভাবে ইংরেজিতে কথা বলতে পারে—সেই লক্ষ্যেই আমাদের এই বিশেষ ক্লাব।
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/admissions" className="btn btn--inverted btn--lg">
                  <span>ভর্তি আবেদন ও তথ্য</span>
                  <ArrowRight size={18} />
                </Link>
                <a href={`tel:${rawPhone}`} className="btn btn--secondary btn--lg">
                  <Phone size={18} />
                  <span>ক্লাব সম্পর্কে কথা বলুন</span>
                </a>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <Image
                src="/images/showcase/english-club.jpg"
                alt="English Language Club সেশনে শিক্ষার্থীরা"
                width={700}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Club is Unique */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag--accent">কেন এই ক্লাব?</span>
            <h2 className="section-title">ইংরেজিভীতি দূর করে আত্মবিশ্বাস গঠন</h2>
            <p className="section-desc">
              আমাদের শিক্ষার্থীরা গ্রামার মুখস্থ করার আগেই প্রাত্যহিক ভাষায় ইংরেজি বলা শুরু করে।
            </p>
          </div>

          <div className="grid grid-2 gap-xl">
            {/* Feature 1 */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-primary-50)',
                  color: 'var(--color-primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Volume2 size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ১. Phonics & Correct Pronunciation
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: '1.6' }}>
                  ইংরেজি বর্ণমালার সঠিক সাউন্ড (International Phonics) শিখিয়ে প্রতিটি শব্দের সঠিক উচ্চারণ নিশ্চিত করা হয়। ফলে শিশু ব্রিটিশ ও আমেরিকান স্ট্যান্ডার্ড উচ্চারণে কথা বলতে পারে।
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-accent-50)',
                  color: 'var(--color-accent-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Mic size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ২. Daily Conversational Drills
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: '1.6' }}>
                  ক্লাসরুম, খেলার মাঠ, পরিবারের পরিবেশ এবং দৈনন্দিন জীবনের বিভিন্ন সিচুয়েশনে কীভাবে ইংরেজিতে কথা বলতে হয় তা সহপাঠীদের সাথে কথোপকথনের (Pair Work & Group Discussion) মাধ্যমে শেখানো হয়।
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-primary-50)',
                  color: 'var(--color-primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Smile size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ৩. Interactive Vocabulary & Word Games
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: '1.6' }}>
                  মুখস্থ না করে আকর্ষণীয় ফ্ল্যাশকার্ড, ওয়ার্ড পাজল, ছবি দেখে বর্ণনা এবং শিক্ষণীয় গল্পের বই পড়ার মাধ্যমে শিশুদের শব্দভাণ্ডার স্বতঃস্ফূর্তভাবে সমৃদ্ধ করা হয়।
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-accent-50)',
                  color: 'var(--color-accent-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Languages size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  ৪. Stage Presentation & Public Speaking
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: '1.6' }}>
                  মাইক্রোফোনে সহপাঠী ও শিক্ষকদের সামনে নিজের পরিচয় দেওয়া, কোনো টপিকের ওপর বক্তৃতা দেওয়া এবং কবিতা আবৃত্তির মাধ্যমে শিশুর জড়তা পুরোপুরি দূর হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Moments in Club */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">বাস্তব চিত্র</span>
            <h2 className="section-title">ক্লাবের কিছু স্মরণীয় মুহূর্ত</h2>
            <p className="section-desc">
              আমাদের শিক্ষার্থীরা কীভাবে প্রতিদিন নতুন উদ্দীপনায় ইংরেজি শিখছে তার একঝলক।
            </p>
          </div>

          <div className="photo-gallery-preview">
            <div className="photo-card">
              <Image
                src="/images/showcase/hero-students.jpg"
                alt="শিক্ষার্থীরা ইংরেজি বই হাতে"
                width={600}
                height={450}
                className="photo-card__img"
              />
              <div className="photo-card__overlay">
                <span className="photo-card__tag">Reading Drills</span>
                <h4 className="photo-card__caption">আনন্দ নিয়ে ইংরেজি পড়ার দলগত সেশন</h4>
              </div>
            </div>

            <div className="photo-card">
              <Image
                src="/images/showcase/classroom.jpg"
                alt="ইন্টারেক্টিভ ক্লাসরুম সেশন"
                width={600}
                height={450}
                className="photo-card__img"
              />
              <div className="photo-card__overlay">
                <span className="photo-card__tag">Classroom Fun</span>
                <h4 className="photo-card__caption">শিক্ষকের সাথে প্রাণবন্ত প্রশ্নোত্তরের মুহূর্ত</h4>
              </div>
            </div>

            <div className="photo-card">
              <Image
                src="/images/showcase/creative-arts.jpg"
                alt="উপস্থাপনা ও গল্প বলা"
                width={600}
                height={450}
                className="photo-card__img"
              />
              <div className="photo-card__overlay">
                <span className="photo-card__tag">Presentation</span>
                <h4 className="photo-card__caption">সৃজনশীল গল্পের মাধ্যমে উপস্থাপনা দক্ষতা চর্চা</h4>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/admissions" className="btn btn--primary btn--lg">
              <span>আপনার সন্তানকে ভর্তি করাতে যোগাযোগ করুন</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
