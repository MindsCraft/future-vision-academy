import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  Heart,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `আমাদের পরিচিতি ও শিক্ষক মণ্ডলী | ${siteConfig.shortName}`,
  description: 'ফিউচার ভিশন একাডেমির লক্ষ্য, পরিচালনা পর্ষদ ও স্নেহশীল শিক্ষকমণ্ডলীর পরিচিতি।',
};

export default function AboutPage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  const teachers = [
    {
      name: 'অধ্যক্ষ / পরিচালনা পর্ষদ প্রধান',
      role: 'প্রাতিষ্ঠানিক ও অ্যাকাডেমিক সমন্বয়কারী',
      experience: '১৫+ বছরের শিক্ষকতা ও প্রশাসনিক অভিজ্ঞতা',
      image: '/images/showcase/teacher-lead.jpg',
      bio: 'প্রতিটি শিশুর মানসিক, শারীরিক ও মেধা বিকাশের জন্য একটি নিরাপদ, স্নেহশীল ও প্রতিযোগিতামুক্ত আনন্দময় পরিবেশ গড়ে তোলাই আমাদের প্রধান অঙ্গীকার।',
      subjects: ['অ্যাকাডেমিক সুপারভিশন', 'নৈতিক শিক্ষা', 'প্রশাসন'],
    },
    {
      name: 'সিনিয়র ইংরেজি ভাষা প্রশিক্ষক',
      role: 'English Language Club কো-অর্ডিনেটর',
      experience: 'স্পোকেন ইংলিশ ও ফনেটিক্স বিশেষজ্ঞ',
      image: '/images/showcase/teacher-female.jpg',
      bio: 'শিশুদের মুখের জড়তা দূর করে সাবলীল ইংরেজি কথা বলার আত্মবিশ্বাস তৈরি করাই আমার ক্লাসরুমের প্রধান লক্ষ্য।',
      subjects: ['Spoken English', 'Phonics', 'Language Drills'],
    },
    {
      name: 'গণিত ও বিজ্ঞান বিভাগীয় প্রধান',
      role: 'সিনিয়র শিক্ষক (প্রাথমিক ও মাধ্যমিক)',
      experience: 'সৃজনশীল গণিত ও ব্যবহারিক বিজ্ঞান বিশেষজ্ঞ',
      image: '/images/showcase/teacher-male.jpg',
      bio: 'গণিত ও বিজ্ঞান কোনো ভয়ের বিষয় নয়, আনন্দের সাথে যুক্তিনির্ভর পদ্ধতিতে উপস্থাপন করলে শিক্ষার্থীরা নিজে থেকেই আবিষ্কারে আগ্রহী হয়।',
      subjects: ['সাধারণ গণিত', 'উচ্চতর গণিত', 'প্রাথমিক বিজ্ঞান'],
    },
    {
      name: 'প্রাক-প্রাথমিক ইনচার্জ (প্লে ও নার্সারি)',
      role: 'আর্লি চাইল্ডহুড কেয়ার অ্যান্ড এডুকেশন',
      experience: 'মন্টেশ্বরী ও চাইল্ড সাইকোলজি ট্রেইন্ড',
      image: '/images/showcase/kindergarten.jpg',
      bio: 'স্নেহ, যত্ন ও খেলার মাধ্যমে ছোট্ট সোনামণিদের বর্ণমালার জাদুকরী জগতে স্বাগত জানানোই আমাদের প্রতিদিনের আনন্দ।',
      subjects: ['ছড়া ও গল্প', 'হাতের লেখা', 'ড্রয়িং ও ক্রাফট'],
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="section section--subtle">
        <div className="container text-center">
          <span className="section-tag">আমাদের পরিচিতি</span>
          <h1 className="section-title">ভবিষ্যতের নেতৃত্ব গড়ার নির্ভরযোগ্য বিদ্যাপীঠ</h1>
          <p className="section-desc" style={{ maxWidth: '760px', marginInline: 'auto' }}>
            গফরগাঁও পৌর শহরের পশু হাসপাতাল রোডে অবস্থিত ফিউচার ভিশন একাডেমি মানসম্মত জাতীয় শিক্ষাক্রম (NCTB) এবং বিশেষ English Language Club সমন্বয়ে পরিচালিত এক অনন্য শিক্ষাঙ্গন।
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-2xl items-center">
            <div>
              <span className="section-tag section-tag--accent">আমাদের ভিশন ও মিশন</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                শিক্ষার আলোয় শিশুর সার্বিক বিকাশ
              </h2>
              <p className="body-regular" style={{ marginBottom: '1.25rem' }}>
                ফিউচার ভিশন একাডেমি ২০২৫ সালে প্রতিষ্ঠিত হয়ে গফরগাঁও অঞ্চলের শিক্ষাব্যবস্থায় এক আধুনিক রূপান্তরের সূচনা করেছে। প্রথাগত মুখস্থ শিক্ষার গণ্ডি পেরিয়ে জ্ঞান, নৈতিকতা ও আধুনিক ভাষাগত দক্ষতার সমন্বয়ে শিশুদের আগামীর বিশ্বমানের নাগরিক হিসেবে গড়ে তোলাই আমাদের মূল লক্ষ্য।
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="pillar-card__icon-wrap" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>ধারণাগত স্পষ্টতা (Conceptual Clarity)</h4>
                    <p className="body-small">মুখস্থ নয়, প্রতিটি বিষয়ের গভীরে গিয়ে শিশুর বোঝার ক্ষমতা ও চিন্তা করার শক্তি বাড়ানো হয়।</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="pillar-card__icon-wrap" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>ইংরেজি যোগাযোগের সাবলীলতা</h4>
                    <p className="body-small">NCTB কারিকুলামের পাশাপাশি দৈনিক English Language Club-এ স্পোকেন ও ফনেটিক্স অনুশীলন।</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div className="pillar-card__icon-wrap" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--color-primary-900)' }}>নৈতিক মূল্যবোধ ও পারস্পরিক শ্রদ্ধা</h4>
                    <p className="body-small">সততা, নিয়মানুবর্তিতা, গুরুজনদের প্রতি শ্রদ্ধা এবং সামাজিক দায়বদ্ধতার শিক্ষা।</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 16px 36px rgba(36, 50, 130, 0.12)' }}>
              <Image
                src="/images/showcase/classroom.jpg"
                alt="ফিউচার ভিশন একাডেমি ক্লাসরুম"
                width={700}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teachers & Faculty Directory */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">শিক্ষক মণ্ডলী</span>
            <h2 className="section-title">স্নেহশীল ও অভিজ্ঞ শিক্ষকমণ্ডলীর দল</h2>
            <p className="section-desc">
              আমাদের শিক্ষকগণ কেবল পাঠদানই করেন না, প্রতিটি শিশুর মানসিক বন্ধু ও পথপ্রদর্শক হিসেবে পাশে থাকেন।
            </p>
          </div>

          <div className="grid grid-2 gap-xl">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--color-white)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)',
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 'var(--space-lg)',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                  alignItems: 'center',
                }}
              >
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '1', width: '100%' }}>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={200}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '4px' }}>
                    {teacher.name}
                  </h3>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-accent-600)', marginBottom: '4px' }}>
                    {teacher.role}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-gray-500)', marginBottom: '10px' }}>
                    {teacher.experience}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)', lineHeight: '1.55', marginBottom: '12px' }}>
                    {teacher.bio}
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {teacher.subjects.map((sub, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.75rem',
                          padding: '2px 8px',
                          background: 'var(--color-primary-50)',
                          color: 'var(--color-primary-700)',
                          borderRadius: 'var(--radius-pill)',
                          fontWeight: 600,
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Safety Highlight */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-600) 100%)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--space-2xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-tag section-tag--inverted">নিরাপত্তা ও তত্ত্বাবধান</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBlock: '10px 14px' }}>
                ১০০% সিসিটিভি নিয়ন্ত্রিত নিরাপদ শিক্ষাঙ্গন
              </h2>
              <p style={{ color: '#e0e7ff', lineHeight: '1.7', marginBottom: '20px' }}>
                অভিভাবকের সবচেয়ে বড় প্রত্যাশা তার সন্তানের নিরাপত্তা। ফিউচার ভিশন একাডেমি ক্যাম্পাসের প্রতিটি শ্রেণিকক্ষ, প্রবেশদ্বার ও সাধারণ প্রাঙ্গণ সার্বক্ষণিক সিসিটিভি ক্যামেরার আওতাভুক্ত। সুনির্দিষ্ট পরিচয়পত্র ছাড়া ক্যাম্পাসে বহিরাগত প্রবেশ কঠোরভাবে নিয়ন্ত্রিত।
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/admissions" className="btn btn--inverted btn--lg">
                  <span>ভর্তি আবেদন ও তথ্য</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={`tel:${rawPhone}`} className="btn btn--secondary btn--lg">
                  <Phone size={16} />
                  <span>সরাসরি কথা বলুন: {phoneNumber}</span>
                </a>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}>
              <Image
                src="/images/showcase/assembly.jpg"
                alt="ক্যাম্পাস শৃঙ্খলা ও সমাবেশ"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
