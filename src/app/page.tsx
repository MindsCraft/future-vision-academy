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
  CheckCircle2,
  Users,
  Compass,
  FileText,
  Calendar,
  Award,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { siteConfig, googleMapsConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.shortName} — ${siteConfig.name} | ভর্তি চলছে ২০২৬`,
  description: siteConfig.description,
};

export default function HomePage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/88${rawPhone}?text=${encodeURIComponent(
    'আসসালামু আলাইকুম, ফিউচার ভিশন একাডেমিতে নতুন শিক্ষাবর্ষে ভর্তি সম্পর্কিত তথ্য জানতে চাই।'
  )}`;

  return (
    <div>
      {/* ====================================================================
          1. Hero Section
          ==================================================================== */}
      <section className="home-hero" id="hero">
        <div className="container home-hero__container">
          <div className="home-hero__content">
            <div className="home-hero__badge">
              <span className="home-hero__badge-dot" />
              <span>ভর্তি চলছে ২০২৬ • প্লে থেকে ৮ম শ্রেণি</span>
            </div>

            <h1 className="home-hero__title">
              জ্ঞান, শৃঙ্খলা ও আধুনিক ইংরেজি চর্চার আদর্শ বিদ্যাপীঠ
            </h1>

            <p className="home-hero__title-en">
              {siteConfig.name} • গফরগাঁও পৌরসভা
            </p>

            <p className="home-hero__desc">
              গফরগাঁও পৌর শহরের পশু হাসপাতাল রোডে অবস্থিত ফিউচার ভিশন একাডেমি জাতীয় শিক্ষাক্রম (NCTB) ও বিশেষ English Language Club সমন্বয়ে পরিচালিত এক আধুনিক শিক্ষাঙ্গন। সার্বক্ষণিক সিসিটিভি নিয়ন্ত্রিত নিরাপদ পরিবেশে শিশুদের মেধা ও মনন বিকাশে আমরা দায়বদ্ধ।
            </p>

            <div className="home-hero__actions">
              <a href="#admissions" className="btn btn--primary btn--lg">
                <FileText size={18} />
                <span>ভর্তি নির্দেশিকা ও ফরম</span>
              </a>

              <a href={`tel:${rawPhone}`} className="btn btn--secondary btn--lg">
                <Phone size={18} />
                <span>সরাসরি কল: {phoneNumber}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--lg"
              >
                <MessageCircle size={18} />
                <span>হোয়াটসঅ্যাপ মেসেজ</span>
              </a>
            </div>

            {/* 4 Architectural Metric Cells */}
            <div className="home-hero__stats">
              <div className="home-hero__stat-cell">
                <div className="home-hero__stat-value">প্লে — ১০ম</div>
                <div className="home-hero__stat-label">শ্রেণি বিন্যাস</div>
              </div>

              <div className="home-hero__stat-cell">
                <div className="home-hero__stat-value">প্লে — ৮ম</div>
                <div className="home-hero__stat-label">সরাসরি নতুন ভর্তি</div>
              </div>

              <div className="home-hero__stat-cell">
                <div className="home-hero__stat-value">English Club</div>
                <div className="home-hero__stat-label">স্পোকেন ও ফোনিক্স</div>
              </div>

              <div className="home-hero__stat-cell">
                <div className="home-hero__stat-value">১০০% সিসিটিভি</div>
                <div className="home-hero__stat-label">নিরাপদ ক্যাম্পাস</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Admissions Spotlight Section
          ==================================================================== */}
      <section className="section" id="admissions">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ভর্তি তথ্য ২০২৬</span>
            <h2 className="section-title">নতুন শিক্ষাবর্ষে সরাসরি ভর্তি কার্যক্রম</h2>
            <p className="section-desc">
              প্লে, নার্সারি, কেজি থেকে শুরু করে ৮ম শ্রেণি পর্যন্ত নতুন শিক্ষার্থী ভর্তির আবেদন গ্রহণ চলছে। সীমিত আসনে দ্রুত আসন সংরক্ষণ করুন।
            </p>
          </div>

          <div className="admissions-box">
            <div className="admissions-box__top">
              <div className="admissions-box__top-title">
                <Sparkles size={18} />
                <span>শিক্ষাবর্ষ ২০২৬ — ভর্তি বিজ্ঞপ্তি ও নির্দেশিকা</span>
              </div>
              <span className="admissions-box__top-badge">আসন সংখ্যা সীমিত</span>
            </div>

            <div className="admissions-box__grid">
              {/* Left Column: Eligibility & Documents */}
              <div className="admissions-box__main">
                <h3 className="admissions-box__headline">
                  ভর্তি যোগ্যতা ও প্রয়োজনীয় নির্দেশনাবলী
                </h3>
                <p className="admissions-box__intro">
                  ফিউচার ভিশন একাডেমিতে আমরা প্রতিটি শিক্ষার্থীর মানসিক বিকাশ ও মেধার মূল্যায়নে বিশ্বাসী। আধুনিক ও সহজ প্রক্রিয়ায় ভর্তি সম্পন্ন করা হয়:
                </p>

                <div className="admissions-box__criteria-list">
                  <div className="admissions-box__criteria-item">
                    <div className="admissions-box__check">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <strong>প্লে, নার্সারি ও কেজি শ্রেণি:</strong> শিশুর বয়স উপযোগী প্রাথমিক ও মৌখিক মতবিনিময়ের মাধ্যমে সহজ ভর্তি।
                    </div>
                  </div>

                  <div className="admissions-box__criteria-item">
                    <div className="admissions-box__check">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <strong>১ম থেকে ৮ম শ্রেণি:</strong> বাংলা, ইংরেজি ও গণিত বিষয়ের ওপর প্রাথমিক মূল্যায়নের ভিত্তিতে শ্রেণি নির্ধারণ।
                    </div>
                  </div>

                  <div className="admissions-box__criteria-item">
                    <div className="admissions-box__check">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <strong>প্রয়োজনীয় কাগজপত্র:</strong> শিক্ষার্থীর ডিজিটাল জন্মনিবন্ধন সনদের ফটোকপি, পাসপোর্ট সাইজের রঙিন ছবি (৩ কপি) এবং পিতা-মাতার জাতীয় পরিচয়পত্রের ফটোকপি।
                    </div>
                  </div>

                  <div className="admissions-box__criteria-item">
                    <div className="admissions-box__check">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <strong>ফরম প্রাপ্তি ও জমা:</strong> প্রতিদিন সকাল ৮:০০ থেকে দুপুর ২:০০ পর্যন্ত স্কুল অফিস কাউন্টার থেকে ফরম সংগ্রহ করা যাবে।
                    </div>
                  </div>
                </div>

                <div className="flex gap-md flex-wrap items-center">
                  <a href={`tel:${rawPhone}`} className="btn btn--primary">
                    <Phone size={16} />
                    <span>ভর্তি হেল্পলাইনে কল করুন</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    <MessageCircle size={16} />
                    <span>হোয়াটসঅ্যাপে তথ্য জানুন</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Office & Hotline Card */}
              <div className="admissions-box__sidebar">
                <div>
                  <h4 className="admissions-box__sidebar-title">ভর্তি তথ্য কেন্দ্র</h4>

                  <div className="admissions-box__info-row">
                    <MapPin size={18} className="admissions-box__info-icon" />
                    <div>
                      <strong>ক্যাম্পাস ঠিকানা:</strong>
                      <p>{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="admissions-box__info-row">
                    <Phone size={18} className="admissions-box__info-icon" />
                    <div>
                      <strong>সরাসরি হটলাইন:</strong>
                      <p>{phoneNumber}</p>
                    </div>
                  </div>

                  <div className="admissions-box__info-row">
                    <Clock size={18} className="admissions-box__info-icon" />
                    <div>
                      <strong>অফিস সময়:</strong>
                      <p>{siteConfig.contact.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="admissions-box__sidebar-actions">
                  <a
                    href={googleMapsConfig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--full"
                  >
                    <Navigation size={15} />
                    <span>গুগল ম্যাপে লোকেশন দেখুন</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Core Educational Pillars (৬টি স্তম্ভ)
          ==================================================================== */}
      <section className="section section--subtle" id="academics">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">আমাদের বিশেষত্ব</span>
            <h2 className="section-title">ফিউচার ভিশন একাডেমি কেন স্বতন্ত্র?</h2>
            <p className="section-desc">
              প্রথাগত মুখস্থ শিক্ষার বাইরে এসে আনন্দময় পরিবেশে যুগোপযোগী ও নৈতিক শিক্ষাদানের মাধ্যমে আমরা প্রতিটি শিশুকে আগামী দিনের জন্য প্রস্তুত করি।
            </p>
          </div>

          <div className="grid grid-3 gap-lg">
            {/* Pillar 1 */}
            <div className="pillar-card">
              <div className="pillar-card__icon-wrap">
                <BookOpen size={24} />
              </div>
              <h3 className="pillar-card__title">জাতীয় শিক্ষাক্রম (NCTB)</h3>
              <p className="pillar-card__desc">
                জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড কর্তৃক নির্ধারিত মানসম্মত পাঠ্যবইয়ের সহজবোধ্য পাঠদান এবং প্রতিটি বিষয়ে বিষয়ভিত্তিক ধারণাগত স্পষ্টতা নিশ্চিতকরণ।
              </p>
              <span className="pillar-card__tag">Bangla Medium</span>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card">
              <div className="pillar-card__icon-wrap">
                <Languages size={24} />
              </div>
              <h3 className="pillar-card__title">English Language Club</h3>
              <p className="pillar-card__desc">
                বাংলা মাধ্যমের পাশাপাশি শিশুদের ফ্লুয়েন্ট স্পোকেন, ফনেটিক্স এবং বাস্তব পরিস্থিতিতে ইংরেজি যোগাযোগের জড়তা কাটানোর বিশেষ কার্যক্রম।
              </p>
              <span className="pillar-card__tag">Spoken & Phonics</span>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card">
              <div className="pillar-card__icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <h3 className="pillar-card__title">সিসিটিভি ও পূর্ণাঙ্গ নিরাপত্তা</h3>
              <p className="pillar-card__desc">
                সম্পূর্ণ ক্যাম্পাস সার্বক্ষণিক সিসিটিভি ক্যামেরা পর্যবেক্ষণাধীন। সুশৃঙ্খল পরিবেশ ও শিশুদের জন্য নিরাপদ ও আরামদায়ক ক্যাম্পাসের নিশ্চয়তা।
              </p>
              <span className="pillar-card__tag">100% Monitored</span>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card">
              <div className="pillar-card__icon-wrap">
                <Users size={24} />
              </div>
              <h3 className="pillar-card__title">দক্ষ ও স্নেহশীল শিক্ষক মণ্ডলী</h3>
              <p className="pillar-card__desc">
                অভিজ্ঞ শিক্ষক-শিক্ষিকা কর্তৃক প্রতিটি শিশুর মেধা ও প্রয়োজন অনুযায়ী ব্যক্তিগত নজরদারি এবং নিয়মিত ক্লাস টেস্ট ও মূল্যায়ন।
              </p>
              <span className="pillar-card__tag">Dedicated Faculty</span>
            </div>

            {/* Pillar 5 */}
            <div className="pillar-card">
              <div className="pillar-card__icon-wrap">
                <Compass size={24} />
              </div>
              <h3 className="pillar-card__title">নৈতিক শিক্ষা ও শৃঙ্খলা</h3>
              <p className="pillar-card__desc">
                দৈনন্দিন সমাবেশ, নৈতিক মূল্যবোধ চর্চা, বড়দের প্রতি শ্রদ্ধা এবং সময় সচেতনতা ও নিয়মানুবর্তিতা গঠন।
              </p>
              <span className="pillar-card__tag">Moral & Discipline</span>
            </div>

            {/* Pillar 6 */}
            <div className="pillar-card">
              <div className="pillar-card__icon-wrap">
                <Award size={24} />
              </div>
              <h3 className="pillar-card__title">সহশিক্ষা ও সৃজনশীল মেধা</h3>
              <p className="pillar-card__desc">
                নিয়মিত হাতের লেখা ও ক্যালিগ্রাফি প্রতিযোগিতা, চিত্রাঙ্কন, বিতর্ক, সাধারণ জ্ঞান ও ক্রীড়া চর্চার মাধ্যমে সার্বিক বিকাশ।
              </p>
              <span className="pillar-card__tag">Co-Curricular</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. English Language Club Spotlight (Dark Inverted Monochromatic)
          ==================================================================== */}
      <section className="section" id="english-club">
        <div className="container">
          <div className="english-club-spotlight">
            <div className="english-club__grid">
              <div>
                <span className="section-tag section-tag--inverted">
                  বিশেষ আকর্ষণ • English Language Club
                </span>
                <h2 className="english-club__title">
                  মুখস্থ বিদ্যা নয়, বাস্তব জীবনে আত্মবিশ্বাসের সাথে ইংরেজি বলা
                </h2>
                <p className="english-club__desc">
                  গফরগাঁওয়ে আমাদের একাডেমি শিশুদের জন্য চালু করেছে একটি সুপরিকল্পিত English Language Club। আধুনিক বিশ্বে যোগাযোগের প্রধান ভাষা হিসেবে ইংরেজি যেন শিশুদের কাছে ভীতিকর না হয়ে আনন্দের মাধ্যমে আত্মস্থ হয়—সে লক্ষ্যেই আমাদের এই বিশেষ উদ্যোগ।
                </p>

                <div className="flex gap-md flex-wrap items-center">
                  <a href="#admissions" className="btn btn--inverted">
                    <span>ক্লাব ও ভর্তির বিস্তারিত জানুন</span>
                    <ArrowRight size={16} />
                  </a>
                  <a href={`tel:${rawPhone}`} className="btn" style={{ background: '#27272a', color: '#ffffff' }}>
                    <Phone size={16} />
                    <span>পরামর্শের জন্য কল করুন</span>
                  </a>
                </div>
              </div>

              {/* 4 Specialized Modules */}
              <div className="english-club__modules">
                <div className="english-module-card">
                  <h4 className="english-module-title">১. Phonics & Pronunciation</h4>
                  <p className="english-module-desc">
                    শুদ্ধ উচ্চারণ ও ইংরেজি বর্ণমালার সাউন্ড ভিত্তিক সহজ শিখন।
                  </p>
                </div>

                <div className="english-module-card">
                  <h4 className="english-module-title">২. Daily Spoken Drills</h4>
                  <p className="english-module-desc">
                    ক্লাসরুম ও প্রাত্যহিক জীবনের কথোপকথনে স্বতঃস্ফূর্ত ইংরেজি চর্চা।
                  </p>
                </div>

                <div className="english-module-card">
                  <h4 className="english-module-title">৩. Vocabulary & Games</h4>
                  <p className="english-module-desc">
                    ইন্টারেক্টিভ গেমস ও ফ্ল্যাশকার্ডের সাহায্যে প্রয়োজনীয় শব্দভাণ্ডার সমৃদ্ধকরণ।
                  </p>
                </div>

                <div className="english-module-card">
                  <h4 className="english-module-title">৪. Stage Presentation</h4>
                  <p className="english-module-desc">
                    মাইকে কথা বলা ও সহপাঠীদের সামনে জড়তাহীন প্রেজেন্টেশন উপস্থাপনা।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Academic Class Levels
          ==================================================================== */}
      <section className="section section--subtle" id="classes">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">শ্রেণি স্তর</span>
            <h2 className="section-title">প্লে থেকে ১০ম শ্রেণি পর্যন্ত পূর্ণাঙ্গ পাঠদান</h2>
            <p className="section-desc">
              প্রতিটি বয়সের শিশুদের জন্য নির্দিষ্ট শিক্ষাপদ্ধতি ও পাঠ্যক্রম অনুসারে শ্রেণিবিন্যাস।
            </p>
          </div>

          <div className="grid grid-3 gap-lg">
            {/* Level 1: Pre-Primary */}
            <div className="class-level-card class-level-card--featured">
              <div className="class-level-header">
                <span className="class-level-badge">প্রাক-প্রাথমিক</span>
                <span className="badge badge--primary">ভর্তি চলছে</span>
              </div>
              <h3 className="class-level-title">প্লে, নার্সারি ও কেজি</h3>
              <p className="class-level-desc">
                ছোট্ট সোনামণিদের জন্য খেলার ছলে বর্ণমালা পরিচয়, সঠিক উচ্চারণ, পরিষ্কার হাতের লেখা এবং আনন্দময় স্কুল জীবনের সূচনা।
              </p>
              <div className="class-level-list">
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>বর্ণমালা ও সংখ্যার মৌলিক ধারণা</span>
                </div>
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>ড্রয়িং, ছড়া ও শারীরিক ব্যায়াম</span>
                </div>
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>স্নেহশীল ও নিরাপদ পরিবেশ</span>
                </div>
              </div>
            </div>

            {/* Level 2: Primary */}
            <div className="class-level-card class-level-card--featured">
              <div className="class-level-header">
                <span className="class-level-badge">প্রাথমিক স্তর</span>
                <span className="badge badge--primary">ভর্তি চলছে</span>
              </div>
              <h3 className="class-level-title">১ম থেকে ৫ম শ্রেণি</h3>
              <p className="class-level-desc">
                জাতীয় শিক্ষাক্রম অনুযায়ী বাংলা, ইংরেজি ও গণিতের শক্তিশালী বুনিয়াদ তৈরি। নিয়মিত মূল্যায়ন এবং সহশিক্ষা কার্যক্রমে সম্পৃক্ততা।
              </p>
              <div className="class-level-list">
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>বিষয়ভিত্তিক মৌলিক বিষয়ের স্পষ্টতা</span>
                </div>
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>English Club-এর সক্রিয় অংশগ্রহণ</span>
                </div>
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>সাপ্তাহিক মূল্যায়ন ও প্রগ্রেস ট্র্যাকিং</span>
                </div>
              </div>
            </div>

            {/* Level 3: Secondary */}
            <div className="class-level-card">
              <div className="class-level-header">
                <span className="class-level-badge">মাধ্যমিক স্তর</span>
                <span className="badge badge--neutral">ভর্তি: ৬ষ্ঠ-৮ম</span>
              </div>
              <h3 className="class-level-title">৬ষ্ঠ থেকে ১০ম শ্রেণি</h3>
              <p className="class-level-desc">
                বোর্ড পরীক্ষার সুনির্দিষ্ট প্রস্তুতি, বিজ্ঞান ও গণিত বিষয়ে বিশেষ তত্ত্বাবধান এবং ক্যারিয়ার ও ভবিষ্যৎ নেতৃত্ব গঠনের পাঠদান।
              </p>
              <div className="class-level-list">
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>অধ্যায়ভিত্তিক বিস্তারিত লেকচার ও প্র্যাকটিস</span>
                </div>
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>মডেল টেস্ট ও সৃজনশীল প্রশ্নোত্তর সমাধান</span>
                </div>
                <div className="class-level-item">
                  <span className="class-level-item-dot" />
                  <span>নিয়মিত অভিভাবক সমন্বয় সভা</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. Campus Facilities
          ==================================================================== */}
      <section className="section" id="facilities">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ক্যাম্পাস অবকাঠামো</span>
            <h2 className="section-title">শিশুর বিকাশ ও সুরক্ষায় আধুনিক সুযোগ-সুবিধা</h2>
            <p className="section-desc">
              গফরগাঁও পৌর শহরের কেন্দ্রস্থলে পরিচ্ছন্ন, স্বাস্থ্যকর ও পাঠোপযোগী একটি ক্যাম্পাস।
            </p>
          </div>

          <div className="grid grid-4 gap-md">
            <div className="facility-card">
              <div className="facility-card__icon">
                <ShieldCheck size={26} />
              </div>
              <h3 className="facility-card__title">সিসিটিভি নিরাপত্তা</h3>
              <p className="facility-card__desc">
                সার্বক্ষণিক ক্যামেরা মনিটরিং এবং সুশৃঙ্খল প্রবেশ ও প্রস্থান ব্যবস্থা।
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-card__icon">
                <BookOpen size={26} />
              </div>
              <h3 className="facility-card__title">আলোকিত শ্রেণিকক্ষ</h3>
              <p className="facility-card__desc">
                পর্যাপ্ত আলো-বাতাস ও স্বাস্থ্যসম্মত বসার সুব্যবস্থা।
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-card__icon">
                <GraduationCap size={26} />
              </div>
              <h3 className="facility-card__title">শিশুতোষ লাইব্রেরি কর্নার</h3>
              <p className="facility-card__desc">
                বই পড়ার অভ্যাস গড়ে তুলতে শিক্ষণীয় গল্পের বই ও ম্যাগাজিন।
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-card__icon">
                <Sparkles size={26} />
              </div>
              <h3 className="facility-card__title">বিশুদ্ধ পানি ও স্যানিটেশন</h3>
              <p className="facility-card__desc">
                ফিল্টারকৃত নিরাপদ সুপেয় পানি এবং স্বাস্থ্যকর পরিচ্ছন্ন ওয়াশরুম।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. Institutional Vision Quote Block
          ==================================================================== */}
      <section className="section section--subtle" id="vision">
        <div className="container container--narrow">
          <div className="vision-banner">
            <p className="vision-quote">
              “আমরা বিশ্বাস করি, প্রতিটি শিশুই অনন্য প্রতিভার অধিকারী। সঠিক দিকনির্দেশনা, স্নেহশীল তদারকি এবং আধুনিক শিক্ষার মাধ্যমে তাদের ভবিষ্যতের যোগ্য ও মানবিক নাগরিক হিসেবে গড়ে তোলাই ফিউচার ভিশন একাডেমির অঙ্গীকার।”
            </p>
            <div className="vision-author">
              — পরিচালনা পর্ষদ ও শিক্ষক মণ্ডলী, ফিউচার ভিশন একাডেমি
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. Notice Board & Academic Schedule
          ==================================================================== */}
      <section className="section" id="notices">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">নোটিশ ও রুটিন</span>
            <h2 className="section-title">অ্যাকাডেমিক সময়সূচি ও জরুরি তথ্য</h2>
            <p className="section-desc">
              স্কুল পরিচালনা, ক্লাস টাইম এবং অভিভাবক যোগাযোগ সংক্রান্ত গুরুত্বপূর্ণ তথ্য।
            </p>
          </div>

          <div className="schedule-table-box">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>বিভাগ</th>
                  <th>কার্যক্রম ও সময়সূচি</th>
                  <th>মন্তব্য</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ভর্তি কার্যক্রম</strong></td>
                  <td>সকাল ৮:০০ – দুপুর ২:০০ (প্রতিদিন)</td>
                  <td>অফিস কাউন্টারে ভর্তি ফরম ও প্রসপেক্টাস পাওয়া যাচ্ছে</td>
                </tr>
                <tr>
                  <td><strong>শ্রেণি পাঠদান</strong></td>
                  <td>সকাল ৮:৩০ – দুপুর ১:৩০ (শনিবার – বৃহস্পতিবার)</td>
                  <td>জাতীয় শিক্ষাক্রম ও রুটিন অনুযায়ী ক্লাস পরিচালিত হয়</td>
                </tr>
                <tr>
                  <td><strong>English Language Club</strong></td>
                  <td>সাপ্তাহিক বিশেষ সেশন ও প্র্যাকটিস</td>
                  <td>শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ আবশ্যক</td>
                </tr>
                <tr>
                  <td><strong>সাপ্তাহিক ছুটি</strong></td>
                  <td>প্রতি শুক্রবার</td>
                  <td>প্রশাসনিক ও অ্যাকাডেমিক কার্যক্রম বন্ধ থাকে</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. Location & Contact Section
          ==================================================================== */}
      <section className="section section--subtle" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">যোগাযোগ ও অবস্থান</span>
            <h2 className="section-title">ক্যাম্পাস পরিদর্শন ও সরাসরি যোগাযোগ</h2>
            <p className="section-desc">
              আপনার সন্তানের ভবিষ্যৎ গড়ার সঠিক সিদ্ধান্তে ফিউচার ভিশন একাডেমি ক্যাম্পাসে আপনি সাদরে আমন্ত্রিত।
            </p>
          </div>

          <div className="contact-section-grid">
            {/* Left: Contact Info Card */}
            <div className="contact-card">
              <div className="contact-card__item">
                <div className="contact-card__icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-card__label">ক্যাম্পাস অবস্থান</div>
                  <div className="contact-card__value">{siteConfig.contact.address}</div>
                  <div className="contact-card__sub">পশু হাসপাতাল রোড, গফরগাঁও পৌরসভা</div>
                </div>
              </div>

              <div className="contact-card__item">
                <div className="contact-card__icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-card__label">সরাসরি ফোন ও হোয়াটসঅ্যাপ</div>
                  <div className="contact-card__value">
                    <a href={`tel:${rawPhone}`}>{phoneNumber}</a>
                  </div>
                  <div className="contact-card__sub">যেকোনো তথ্য ও সহায়তার জন্য কল করুন</div>
                </div>
              </div>

              <div className="contact-card__item">
                <div className="contact-card__icon">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="contact-card__label">অফিস ও হেল্পডেস্ক সময়</div>
                  <div className="contact-card__value">{siteConfig.contact.hours}</div>
                  <div className="contact-card__sub">শুক্রবার সাপ্তাহিক ছুটি</div>
                </div>
              </div>

              <div className="flex gap-sm flex-wrap items-center mt-md pt-md">
                <a href={`tel:${rawPhone}`} className="btn btn--primary">
                  <Phone size={16} />
                  <span>সরাসরি কল দিন</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <MessageCircle size={16} />
                  <span>হোয়াটসঅ্যাপ মেসেজ</span>
                </a>
              </div>
            </div>

            {/* Right: Map Action Card */}
            <div className="map-action-card">
              <div className="map-action-card__icon">
                <Navigation size={32} />
              </div>
              <h3 className="map-action-card__title">গুগল ম্যাপে আমাদের অবস্থান</h3>
              <p className="map-action-card__desc">
                গফরগাঁও পৌর শহরের কেন্দ্রস্থলে সহজেই পৌঁছাতে গুগল ম্যাপ নেভিগেশন ব্যবহার করে আমাদের সঠিক অবস্থান দেখুন।
              </p>
              <a
                href={googleMapsConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                <Navigation size={18} />
                <span>গুগল ম্যাপে ডিরেকশন পান</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
