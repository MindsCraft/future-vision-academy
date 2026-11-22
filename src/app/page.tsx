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
  BookOpen,
  Languages,
  Heart,
  CheckCircle2,
  Users,
  Navigation,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Droplets,
  Video,
  FileText,
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
          1. Hero Section (Warm, Welcoming & Grounded)
          ==================================================================== */}
      <section className="school-hero">
        <div className="container">
          <div className="school-hero__grid">
            {/* Left Content */}
            <div>
              <div className="school-hero__badge">
                <span className="school-hero__badge-dot" />
                <span>ভর্তি চলছে ২০২৬ • প্লে থেকে ৮ম শ্রেণি</span>
              </div>

              <h1 className="school-hero__title">
                আপনার সন্তানের ভবিষ্যৎ গড়ার এক{' '}
                <span className="school-hero__title-highlight">স্নেহশীল ও আধুনিক</span>{' '}
                বিদ্যাপীঠ
              </h1>

              <div className="school-hero__location">
                <MapPin size={16} />
                <span>৪২৪, পশু হাসপাতাল রোড, গফরগাঁও পৌরসভা, ময়মনসিংহ</span>
              </div>

              <p className="school-hero__desc">
                জাতীয় শিক্ষাক্রম (NCTB বাংলা মাধ্যম), আন্তর্জাতিক মানের English Language Club এবং সহীহ কুরআন শিক্ষার সমন্বয়ে পরিচালিত এক আদর্শ বিদ্যাপীঠ। সম্পূর্ণ সিসিটিভি নিয়ন্ত্রিত নিরাপদ ক্যাম্পাসে আনন্দ নিয়ে শেখে আপনার সন্তান।
              </p>

              <div className="school-hero__actions">
                <Link href="/admissions" className="btn btn--primary btn--lg">
                  <FileText size={18} />
                  <span>ভর্তি নির্দেশিকা ও তথ্য</span>
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
                  <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
                </a>
              </div>
            </div>

            {/* Right Photo Feature */}
            <div className="school-hero__photo-wrap">
              <Image
                src="/images/students-classroom-hero.jpg"
                alt="ফিউচার ভিশন একাডেমির শ্রেণিকক্ষে শিক্ষক ও আনন্দমুখর শিক্ষার্থীরা"
                width={800}
                height={640}
                className="school-hero__photo-img"
                priority
              />
              <div className="school-hero__photo-caption">
                <div>
                  <div className="school-hero__photo-title">শ্রেণিকক্ষে আনন্দময় শিখন</div>
                  <div className="school-hero__photo-sub">ফিউচার ভিশন একাডেমি ক্যাম্পাস • গফরগাঁও</div>
                </div>
                <Link href="/campus-life" className="btn btn--inverted btn--sm">
                  <span>ক্যাম্পাস দৃশ্য</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Clear Metric Cells */}
          <div className="school-metrics">
            <div className="school-metrics__cell">
              <div className="school-metrics__val">প্লে — ১০ম</div>
              <div className="school-metrics__lbl">শ্রেণি বিন্যাস (পর্যায়ক্রমিক)</div>
            </div>

            <div className="school-metrics__cell">
              <div className="school-metrics__val">প্লে — ৮ম</div>
              <div className="school-metrics__lbl">নতুন শিক্ষাবর্ষে সরাসরি ভর্তি</div>
            </div>

            <div className="school-metrics__cell">
              <div className="school-metrics__val">English Club</div>
              <div className="school-metrics__lbl">স্পোকেন ও ফনেটিক্স চর্চা</div>
            </div>

            <div className="school-metrics__cell">
              <div className="school-metrics__val">সহীহ কুরআন</div>
              <div className="school-metrics__lbl">তাজভীদ ও নৈতিক মূল্যবোধ</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. The 3 Real Academic Pillars
          ==================================================================== */}
      <section className="section" id="academics">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag section-tag--accent">আমাদের মূল ৩টি ভিত্তি</span>
            <h2 className="section-title">ফিউচার ভিশন একাডেমি কেন অন্যান্য প্রতিষ্ঠান থেকে আলাদা?</h2>
            <p className="section-desc">
              আমরা কেবল গতানুগতিক পাঠ্যপুস্তকের পড়া নয়—প্রতিটি শিশুর মানসিক বিকাশ, আধুনিক যোগাযোগ দক্ষতা ও মানবিক মূল্যবোধ নিশ্চিত করি।
            </p>
          </div>

          <div className="grid grid-3 gap-lg">
            {/* Pillar 1: NCTB Bangla Medium */}
            <div className="story-pillar-card">
              <div className="story-pillar-card__icon">
                <BookOpen size={24} />
              </div>
              <h3 className="story-pillar-card__title">জাতীয় শিক্ষাক্রম (NCTB)</h3>
              <p className="story-pillar-card__desc">
                জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ডের নির্ধারিত পাঠ্যসূচির প্রতিটি বিষয়ের মৌলিক ধারণা শিশুদের কাছে সহজ ও বোধগম্য করে উপস্থাপন।
              </p>
              <div className="story-pillar-card__points">
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span>মুখস্থের বদলে বাস্তব ধারণাগত স্পষ্টতা</span>
                </div>
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span>প্রতিটি বিষয়ের নিয়মিত শ্রেণি মূল্যায়ন</span>
                </div>
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span>দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত যত্ন</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: English Language Club (Highlighted) */}
            <div className="story-pillar-card story-pillar-card--highlight">
              <div
                className="story-pillar-card__icon"
                style={{ backgroundColor: 'var(--color-accent-50)', color: 'var(--color-accent-600)' }}
              >
                <Languages size={24} />
              </div>
              <h3 className="story-pillar-card__title">English Language Club</h3>
              <p className="story-pillar-card__desc">
                বাংলা মাধ্যমের পাশাপাশি শিশুদের শৈশব থেকেই নির্ভুল উচ্চারণ, আন্তর্জাতিক ফনেটিক্স এবং সাবলীল স্পোকেন ইংলিশে দক্ষ করে তোলার বিশেষ প্ল্যাটফর্ম।
              </p>
              <div className="story-pillar-card__points">
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-accent-600)" />
                  <span>প্রাত্যহিক স্পোকেন প্র্যাকটিস ও জড়তা দূরীকরণ</span>
                </div>
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-accent-600)" />
                  <span>শুদ্ধ ব্রিটিশ ফনেটিক্স ও সঠিক সাউন্ডস</span>
                </div>
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-accent-600)" />
                  <span>বিতর্ক, পাবলিক স্পিকিং ও কনভারসেশন</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Sahih Quran & Moral Education */}
            <div className="story-pillar-card">
              <div className="story-pillar-card__icon">
                <Heart size={24} />
              </div>
              <h3 className="story-pillar-card__title">সহীহ কুরআন ও নৈতিক শিক্ষা</h3>
              <p className="story-pillar-card__desc">
                শিশুর আত্মিক পবিত্রতা ও মানবিক মূল্যবোধ গঠনে সহীহ মাখরাজ ও তাজভীদের সাথে প্রাত্যহিক কুরআন তিলাওয়াত ও শিষ্টাচারের নিয়মিত পাঠ।
              </p>
              <div className="story-pillar-card__points">
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span>সহীহ মাখরাজ ও তাজভীদের নিয়মানুযায়ী তিলাওয়াত</span>
                </div>
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span>প্রাত্যহিক প্রয়োজনীয় মাসনূন দো&apos;আ ও সুন্নাহ</span>
                </div>
                <div className="story-pillar-card__point">
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span>বড়দের শ্রদ্ধা, সত্যবাদিতা ও চারিত্রিক শিক্ষা</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl">
            <Link href="/academics" className="btn btn--secondary btn--lg">
              <span>আমাদের বিস্তারিত শিক্ষা ও কারিকুলাম পেজ দেখুন</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Candid Campus Moments
          ==================================================================== */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">ক্যাম্পাস জীবনের বাস্তব মুহূর্ত</span>
            <h2 className="section-title">শিশুদের জন্য এক স্বপ্নময় ও আনন্দময় পরিবেশ</h2>
            <p className="section-desc">
              বইয়ের পাতায় আবদ্ধ না রেখে প্রাত্যহিক শিক্ষা ও সহশিক্ষা কার্যক্রমে আমাদের শিক্ষার্থীরা আনন্দ নিয়ে শেখে।
            </p>
          </div>

          <div className="candid-moments-grid">
            {/* Moment 1 */}
            <div className="candid-card">
              <Image
                src="/images/showcase/english-club.jpg"
                alt="English Language Club সেশনে শিক্ষার্থী"
                width={600}
                height={450}
                className="candid-card__img"
              />
              <div className="candid-card__overlay">
                <span className="candid-card__tag">English Language Club</span>
                <h3 className="candid-card__title">সাবলীল ইংরেজি কথোপকথন ও শুদ্ধ উচ্চারণ চর্চা</h3>
              </div>
            </div>

            {/* Moment 2 */}
            <div className="candid-card">
              <Image
                src="/images/showcase/kindergarten.jpg"
                alt="প্রাক-প্রাথমিক শিশুদের আনন্দময় পাঠদান"
                width={600}
                height={450}
                className="candid-card__img"
              />
              <div className="candid-card__overlay">
                <span className="candid-card__tag">Early Childhood</span>
                <h3 className="candid-card__title">খেলার ছলে বর্ণমালা, ছড়া ও প্রাথমিক সংখ্যা গণনা</h3>
              </div>
            </div>

            {/* Moment 3 */}
            <div className="candid-card">
              <Image
                src="/images/showcase/assembly.jpg"
                alt="সকালবেলার সমাবেশ ও শরীরচর্চা"
                width={600}
                height={450}
                className="candid-card__img"
              />
              <div className="candid-card__overlay">
                <span className="candid-card__tag">Daily Assembly</span>
                <h3 className="candid-card__title">সকালের সমাবেশ, জাতীয় সংগীত ও শারীরিক সুস্থতা</h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl">
            <Link href="/campus-life" className="btn btn--secondary btn--lg">
              <span>পুরো ক্যাম্পাস গ্যালারি ও ফটো অ্যালবাম দেখুন</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. Safety & Institutional Environment
          ==================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag section-tag--accent">নিরাপত্তা ও পরিবেশ</span>
            <h2 className="section-title">অভিভাবকদের আস্থার শতভাগ নিশ্চয়তা</h2>
            <p className="section-desc">
              আপনার সন্তান যখন আমাদের ক্যাম্পাসে থাকে, তার নিরাপত্তা ও সুস্থতা আমাদের সর্বোচ্চ অগ্রাধিকার।
            </p>
          </div>

          <div className="grid grid-3 gap-lg">
            <div className="story-pillar-card">
              <div className="story-pillar-card__icon">
                <Video size={24} />
              </div>
              <h3 className="story-pillar-card__title">১০০% সিসিটিভি নিয়ন্ত্রিত ক্যাম্পাস</h3>
              <p className="story-pillar-card__desc">
                প্রতিটি ক্লাসরুম, করিডোর এবং ক্যাম্পাসের মূল প্রবেশদ্বার সার্বক্ষণিক সিসিটিভি ক্যামেরার নিবিড় পর্যবেক্ষণে পরিচালিত হয়।
              </p>
            </div>

            <div className="story-pillar-card">
              <div className="story-pillar-card__icon">
                <Droplets size={24} />
              </div>
              <h3 className="story-pillar-card__title">বিশুদ্ধ পানি ও স্বাস্থ্যসম্মত পরিবেশ</h3>
              <p className="story-pillar-card__desc">
                শিক্ষার্থীদের জন্য ফিল্টার্ড বিশুদ্ধ খাবার পানি, নিয়মিত জীবাণুমুক্ত পরিষ্কার-পরিচ্ছন্ন ক্লাসরুম ও স্বাস্থ্যসম্মত স্যানিটেশন ব্যবস্থা।
              </p>
            </div>

            <div className="story-pillar-card">
              <div className="story-pillar-card__icon">
                <Users size={24} />
              </div>
              <h3 className="story-pillar-card__title">স্নেহশীল ও দায়িত্বশীল শিক্ষকতা</h3>
              <p className="story-pillar-card__desc">
                ভীতিহীন শিক্ষাদানের মাধ্যমে প্রতিটি শিশুর প্রতি আন্তরিক যত্ন এবং প্রাত্যহিক ডায়রি ও অভিভাবক মতবিনিময়ের ব্যবস্থা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. Admission Roadmap for Parents (3 Steps)
          ==================================================================== */}
      <section className="section section--subtle" id="admissions">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag section-tag--accent">ভর্তি নির্দেশিকা ২০২৬</span>
            <h2 className="section-title">৩টি সহজ ধাপে আপনার সন্তানের ভর্তি সম্পন্ন করুন</h2>
            <p className="section-desc">
              প্লে, নার্সারি, কেজি থেকে ৮ম শ্রেণি পর্যন্ত সীমিত আসনে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম চলমান।
            </p>
          </div>

          <div className="admission-roadmap">
            <div className="admission-steps-row">
              {/* Step 1 */}
              <div className="admission-step-box">
                <div className="admission-step-num">১</div>
                <h3 className="admission-step-title">ক্যাম্পাস পরিদর্শন ও ফরম সংগ্রহ</h3>
                <p className="admission-step-desc">
                  প্রতিদিন সকাল ৮:০০ থেকে দুপুর ২:০০টার মধ্যে সরাসরি স্কুল অফিসে আসুন, ক্যাম্পাস ঘুরে দেখুন এবং ভর্তি আবেদন ফরম সংগ্রহ করুন।
                </p>
              </div>

              {/* Step 2 */}
              <div className="admission-step-box">
                <div className="admission-step-num">২</div>
                <h3 className="admission-step-title">সহজ মূল্যায়ন ও মতবিনিময়</h3>
                <p className="admission-step-desc">
                  প্লে ও কেজির ক্ষেত্রে শিশুবান্ধব মৌখিক পরিচিতি এবং ১ম থেকে ৮ম শ্রেণির ক্ষেত্রে বাংলা, ইংরেজি ও গণিতের প্রাথমিক মূল্যায়নের মাধ্যমে শ্রেণি নির্ধারণ।
                </p>
              </div>

              {/* Step 3 */}
              <div className="admission-step-box">
                <div className="admission-step-num">৩</div>
                <h3 className="admission-step-title">ভর্তি নিশ্চিতকরণ ও ক্লাস প্রস্তুতি</h3>
                <p className="admission-step-desc">
                  জন্মনিবন্ধন ও ছবির কপি সহ ফরম জমা দিন, স্টুডেন্ট আইডি ও পাঠ্যবই সংক্রান্ত দিকনির্দেশনা গ্রহণ করে সন্তানের নতুন শিক্ষাবর্ষ শুরু করুন।
                </p>
              </div>
            </div>

            <div className="admission-callout-strip">
              <div className="admission-callout-text">
                ভর্তি সংক্রান্ত যেকোনো তথ্য বা প্রশ্নের জন্য সরাসরি আমাদের হটলাইনে কল করতে পারেন: <strong>{phoneNumber}</strong>
              </div>
              <div className="flex gap-sm flex-wrap items-center">
                <Link href="/admissions" className="btn btn--primary">
                  <FileText size={16} />
                  <span>বিস্তারিত ভর্তি পাতা</span>
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>হোয়াটসঅ্যাপ মেসেজ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. Location & Direct Contact Hub
          ==================================================================== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">যোগাযোগ ও অবস্থান</span>
            <h2 className="section-title">ক্যাম্পাস পরিদর্শন ও সরাসরি যোগাযোগ</h2>
            <p className="section-desc">
              আপনার সন্তানের উজ্জ্বল ভবিষ্যতের সূচনা হোক ফিউচার ভিশন একাডেমির হাত ধরে।
            </p>
          </div>

          <div className="contact-hub-grid">
            {/* Left Card */}
            <div className="contact-hub-card">
              <div>
                <div className="contact-hub-item">
                  <div className="contact-hub-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="contact-hub-label">ক্যাম্পাস অবস্থান</div>
                    <div className="contact-hub-value">{siteConfig.contact.address}</div>
                    <div className="contact-hub-sub">পশু হাসপাতাল রোড, গফরগাঁও পৌরসভা, ময়মনসিংহ</div>
                  </div>
                </div>

                <div className="contact-hub-item">
                  <div className="contact-hub-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="contact-hub-label">সরাসরি ফোন ও হোয়াটসঅ্যাপ</div>
                    <div className="contact-hub-value">
                      <a href={`tel:${rawPhone}`}>{phoneNumber}</a>
                    </div>
                    <div className="contact-hub-sub">সকাল ৮:০০ থেকে দুপুর ২:০০ পর্যন্ত হটলাইন খোলা</div>
                  </div>
                </div>

                <div className="contact-hub-item">
                  <div className="contact-hub-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="contact-hub-label">অফিস ও ক্লাস সময়সূচি</div>
                    <div className="contact-hub-value">{siteConfig.contact.hours}</div>
                    <div className="contact-hub-sub">শনিবার হতে বৃহস্পতিবার (শুক্রবার সাপ্তাহিক বন্ধ)</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-sm flex-wrap items-center mt-lg pt-md">
                <a href={`tel:${rawPhone}`} className="btn btn--primary">
                  <Phone size={16} />
                  <span>সরাসরি কল দিন</span>
                </a>
                <Link href="/contact" className="btn btn--secondary">
                  <span>যোগাযোগ পেজ ও বার্তা পাঠান</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Map Card */}
            <div className="map-hub-card">
              <div className="map-hub-icon">
                <Navigation size={32} />
              </div>
              <h3 className="story-pillar-card__title" style={{ marginBottom: '8px' }}>
                গুগল ম্যাপে আমাদের অবস্থান
              </h3>
              <p
                style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '0.925rem',
                  marginBottom: '24px',
                  maxWidth: '380px',
                  lineHeight: 1.6,
                }}
              >
                গফরগাঁও পৌর শহরের কেন্দ্রস্থলে সহজেই পৌঁছাতে গুগল ম্যাপে নেভিগেশন ও সঠিক রুট ডিরেকশন দেখুন।
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
