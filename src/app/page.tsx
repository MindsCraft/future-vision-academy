import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  Award,
  ArrowRight,
  ExternalLink,
  ChevronRight,
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
          1. Hero Section (Lively with Real Photo Feature)
          ==================================================================== */}
      <section className="home-hero">
        <div className="container home-hero__container">
          <div className="home-hero__grid">
            {/* Left Content */}
            <div>
              <div className="home-hero__badge">
                <span className="home-hero__badge-dot" />
                <span>ভর্তি চলছে ২০২৬ • প্লে থেকে ৮ম শ্রেণি</span>
              </div>

              <h1 className="home-hero__title">
                জ্ঞান, শৃঙ্খলা ও আধুনিক{' '}
                <span className="home-hero__title-highlight">ইংরেজি চর্চার</span>{' '}
                আদর্শ বিদ্যাপীঠ
              </h1>

              <p className="home-hero__desc">
                গফরগাঁও পৌর শহরের পশু হাসপাতাল রোডে অবস্থিত ফিউচার ভিশন একাডেমি জাতীয় শিক্ষাক্রম (NCTB) ও বিশেষ English Language Club সমন্বয়ে পরিচালিত এক আধুনিক শিক্ষাঙ্গন। সার্বক্ষণিক সিসিটিভি নিয়ন্ত্রিত নিরাপদ পরিবেশে শিশুদের মেধা ও মনন বিকাশে আমরা দায়বদ্ধ।
              </p>

              <div className="home-hero__actions">
                <Link href="/admissions" className="btn btn--primary btn--lg">
                  <FileText size={18} />
                  <span>ভর্তি নির্দেশিকা ও ফরম</span>
                </Link>

                <a href={`tel:${rawPhone}`} className="btn btn--secondary btn--lg">
                  <Phone size={18} />
                  <span>সরাসরি কল: {phoneNumber}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--lg"
                >
                  <MessageCircle size={18} />
                  <span>হোয়াটসঅ্যাপ</span>
                </a>
              </div>
            </div>

            {/* Right Photo Feature */}
            <div className="home-hero__photo-card">
              <Image
                src="/images/students-classroom-hero.jpg"
                alt="ফিউচার ভিশন একাডেমির শ্রেণিকক্ষে হাসিমুখের শিক্ষার্থী ও শিক্ষক"
                width={800}
                height={600}
                className="home-hero__photo-img"
                priority
              />
              <div className="home-hero__photo-badge">
                <div>
                  <div className="home-hero__photo-badge-title">শ্রেণিকক্ষে আনন্দময় শিখন</div>
                  <div className="home-hero__photo-badge-sub">ফিউচার ভিশন একাডেমি ক্যাম্পাস • গফরগাঁও</div>
                </div>
                <Link href="/campus-life" className="btn btn--primary btn--sm">
                  <span>চিত্রশালা</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
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
      </section>

      {/* ====================================================================
          2. Lively Campus Moments Showcase
          ==================================================================== */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ক্যাম্পাস জীবন ও বাস্তব চিত্র</span>
            <h2 className="section-title">শিশুদের জন্য এক স্বপ্নময় ও আনন্দময় পরিবেশ</h2>
            <p className="section-desc">
              বইয়ের পাতায় আবদ্ধ না রেখে প্রাত্যহিক শিক্ষা ও সহশিক্ষা কার্যক্রমে আমাদের শিক্ষার্থীরা আনন্দ নিয়ে শেখে।
            </p>
          </div>

          <div className="photo-gallery-preview">
            {/* Photo 1: English Club */}
            <div className="photo-card">
              <Image
                src="/images/showcase/english-club.jpg"
                alt="English Language Club সেশনে শিক্ষার্থী"
                width={600}
                height={450}
                className="photo-card__img"
              />
              <div className="photo-card__overlay">
                <span className="photo-card__tag">English Club</span>
                <h3 className="photo-card__caption">সাবলীল ইংরেজি কথোপকথন ও শুদ্ধ উচ্চারণ চর্চা</h3>
              </div>
            </div>

            {/* Photo 2: Kindergarten Learning */}
            <div className="photo-card">
              <Image
                src="/images/showcase/kindergarten.jpg"
                alt="প্রাক-প্রাথমিক শিশুদের আনন্দময় পাঠদান"
                width={600}
                height={450}
                className="photo-card__img"
              />
              <div className="photo-card__overlay">
                <span className="photo-card__tag">Early Childhood</span>
                <h3 className="photo-card__caption">প্লে ও নার্সারিতে খেলার ছলে বর্ণমালা ও ছড়া শিখন</h3>
              </div>
            </div>

            {/* Photo 3: Creative Arts */}
            <div className="photo-card">
              <Image
                src="/images/showcase/creative-arts.jpg"
                alt="চিত্রাঙ্কন ও সৃজনশীল কার্যক্রম"
                width={600}
                height={450}
                className="photo-card__img"
              />
              <div className="photo-card__overlay">
                <span className="photo-card__tag">Creative Arts</span>
                <h3 className="photo-card__caption">চিত্রাঙ্কন, ক্যালিগ্রাফি ও সাংস্কৃতিক বিকাশ</h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/campus-life" className="btn btn--secondary btn--lg">
              <span>পুরো ক্যাম্পাস গ্যালারি ও ফটো অ্যালবাম দেখুন</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Core Educational Pillars (৬টি বিশেষত্ব)
          ==================================================================== */}
      <section className="section" id="academics">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag--accent">আমাদের বিশেষত্ব</span>
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
          4. English Language Club Spotlight (Navy Inverted Banner)
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
                  মুখস্থ বিদ্যা নয়, বাস্তব জীবনে সাবলীল ইংরেজি কথোপকথনের নিশ্চয়তা
                </h2>
                <p className="english-club__desc">
                  গফরগাঁওয়ে আমাদের একাডেমি শিশুদের জন্য চালু করেছে একটি সুপরিকল্পিত English Language Club। আধুনিক বিশ্বে যোগাযোগের প্রধান ভাষা হিসেবে ইংরেজি যেন শিশুদের কাছে ভীতিকর না হয়ে আনন্দের মাধ্যমে আত্মস্থ হয়—সে লক্ষ্যেই আমাদের এই বিশেষ উদ্যোগ।
                </p>

                <div className="flex gap-md flex-wrap items-center">
                  <Link href="/english-club" className="btn btn--inverted btn--lg">
                    <span>ক্লাবের সম্পূর্ণ কার্যক্রম ও ছবি দেখুন</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href={`tel:${rawPhone}`}
                    className="btn btn--secondary btn--lg"
                  >
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
          5. Meet Our Caring Teachers (Faculty Spotlight)
          ==================================================================== */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">শিক্ষক মণ্ডলী</span>
            <h2 className="section-title">অভিজ্ঞ ও স্নেহশীল শিক্ষকমণ্ডলীর তত্ত্বাবধান</h2>
            <p className="section-desc">
              প্রতিটি শিশুর মানসিক ও মেধা বিকাশে আমাদের শিক্ষকগণ নিবেদিতপ্রাণ।
            </p>
          </div>

          <div className="grid grid-3 gap-lg">
            {/* Teacher 1 */}
            <div className="teacher-card">
              <div className="teacher-card__img-wrap">
                <Image
                  src="/images/showcase/teacher-lead.jpg"
                  alt="প্রধান শিক্ষক / পরিচালক"
                  width={400}
                  height={400}
                  className="teacher-card__img"
                />
              </div>
              <div className="teacher-card__body">
                <h3 className="teacher-card__name">অধ্যক্ষ / পরিচালনা পর্ষদ</h3>
                <span className="teacher-card__role">প্রশাসনিক প্রধান ও অ্যাকাডেমিক সমন্বয়কারী</span>
                <p className="teacher-card__desc">
                  “প্রতিটি শিশুর ভেতরের সুপ্ত প্রতিভাকে বিকশিত করে তাকে নৈতিক ও আধুনিক মানুষ হিসেবে গড়ে তোলাই আমাদের লক্ষ্য।”
                </p>
              </div>
            </div>

            {/* Teacher 2 */}
            <div className="teacher-card">
              <div className="teacher-card__img-wrap">
                <Image
                  src="/images/showcase/teacher-female.jpg"
                  alt="ইংরেজি ও ভাষা প্রশিক্ষক"
                  width={400}
                  height={400}
                  className="teacher-card__img"
                />
              </div>
              <div className="teacher-card__body">
                <h3 className="teacher-card__name">ইংরেজি ভাষা প্রশিক্ষক</h3>
                <span className="teacher-card__role">English Language Club কো-অর্ডিনেটর</span>
                <p className="teacher-card__desc">
                  ফনেটিক্স ও সাবলীল স্পোকেন ইংলিশের মাধ্যমে শিশুদের ভাষাগত আত্মবিশ্বাস ও যোগাযোগ দক্ষতা বৃদ্ধি করেন।
                </p>
              </div>
            </div>

            {/* Teacher 3 */}
            <div className="teacher-card">
              <div className="teacher-card__img-wrap">
                <Image
                  src="/images/showcase/teacher-male.jpg"
                  alt="গণিত ও বিজ্ঞান শিক্ষক"
                  width={400}
                  height={400}
                  className="teacher-card__img"
                />
              </div>
              <div className="teacher-card__body">
                <h3 className="teacher-card__name">গণিত ও বিজ্ঞান শিক্ষক</h3>
                <span className="teacher-card__role">প্রাথমিক ও মাধ্যমিক স্তর</span>
                <p className="teacher-card__desc">
                  সহজবোধ্য উদাহরণ ও প্র্যাকটিক্যাল ডেমোনস্ট্রেশনের মাধ্যমে গণিত ও বিজ্ঞানের ভয় দূর করতে সচেষ্ট।
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl">
            <Link href="/about" className="btn btn--secondary btn--lg">
              <span>আমাদের শিক্ষক মণ্ডলী ও লক্ষ্য সম্পর্কে বিস্তারিত জানুন</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. Admissions Spotlight Section
          ==================================================================== */}
      <section className="section" id="admissions">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag--accent">ভর্তি তথ্য ২০২৬</span>
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
                  <Link href="/admissions" className="btn btn--primary btn--lg">
                    <FileText size={18} />
                    <span>ভর্তি পেজে যান ও বিস্তারিত দেখুন</span>
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp btn--lg"
                  >
                    <MessageCircle size={18} />
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
                    className="btn btn--primary btn--full"
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
          7. Location & Contact Section
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
                <Link href="/contact" className="btn btn--secondary">
                  <span>যোগাযোগ পেজ ও ফর্ম</span>
                  <ArrowRight size={16} />
                </Link>
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
