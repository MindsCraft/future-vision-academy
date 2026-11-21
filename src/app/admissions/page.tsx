'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  FileText,
  Send,
  HelpCircle,
} from 'lucide-react';
import { siteConfig, googleMapsConfig } from '@/config/site';

export default function AdmissionsPage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  const [studentName, setStudentName] = useState('');
  const [selectedClass, setSelectedClass] = useState('প্লে');
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `আসসালামু আলাইকুম, আমি ফিউচার ভিশন একাডেমিতে ভর্তি সংক্রান্ত তথ্য জানতে চাই।\nশিক্ষার্থীর নাম: ${studentName}\nশ্রেণি: ${selectedClass}\nঅভিভাবকের নাম: ${guardianName}\nমোবাইল: ${guardianPhone}`;
    const url = `https://wa.me/88${rawPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const faqs = [
    {
      q: 'কোন কোন শ্রেণিতে বর্তমানে নতুন শিক্ষার্থী ভর্তি চলছে?',
      a: '২০২৬ শিক্ষাবর্ষে প্লে, নার্সারি, কেজি থেকে শুরু করে ৮ম শ্রেণি পর্যন্ত সরাসরি নতুন শিক্ষার্থী ভর্তি চলছে।',
    },
    {
      q: 'ভর্তির জন্য কী কী কাগজপত্র জমা দিতে হবে?',
      a: '১. শিক্ষার্থীর ডিজিটাল জন্মনিবন্ধন সনদের ফটোকপি\n২. শিক্ষার্থীর পাসপোর্ট সাইজের রঙিন ছবি (৩ কপি)\n৩. পিতা ও মাতার জাতীয় পরিচয়পত্রের (NID) ফটোকপি\n৪. পূর্ববর্তী স্কুলের ছাড়পত্র/প্রোগ্রেস রিপোর্ট (২য় থেকে ৮ম শ্রেণির জন্য প্রযোজ্য হলে)।',
    },
    {
      q: 'ভর্তি ফরম কীভাবে সংগ্রহ ও জমা দেওয়া যাবে?',
      a: 'প্রতিদিন সকাল ৮:০০ থেকে দুপুর ২:০০ পর্যন্ত (শুক্রবার ব্যতিত) ৪২৪, পশু হাসপাতাল রোড, গফরগাঁও পৌরসভা ক্যাম্পাসের অফিস কাউন্টার থেকে সরাসরি ফরম সংগ্রহ ও জমা দেওয়া যাবে।',
    },
    {
      q: 'English Language Club-এ ভর্তির জন্য কি আলাদা কোনো ফি রয়েছে?',
      a: 'না! ফিউচার ভিশন একাডেমিতে ভর্তি হওয়া প্রত্যেক শিক্ষার্থীর সামগ্রিক মেধা ও ভাষা বিকাশের জন্য এই ক্লাব নিয়মিত পাঠদানের অংশ হিসেবে অন্তর্ভুক্ত।',
    },
    {
      q: 'স্কুল ক্যাম্পাসে নিরাপত্তা ব্যবস্থা কেমন?',
      a: 'আমাদের সম্পূর্ণ ক্যাম্পাস সার্বক্ষণিক সিসিটিভি ক্যামেরা দ্বারা নিয়ন্ত্রিত। এছাড়া শিশুদের প্রবেশ ও প্রস্থানের সময় সার্বক্ষণিক নিরাপত্তা তদারকি থাকে।',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="section section--subtle">
        <div className="container text-center">
          <span className="section-tag section-tag--accent">ভর্তি বিজ্ঞপ্তি ২০২৬</span>
          <h1 className="section-title">নতুন শিক্ষাবর্ষে সরাসরি ভর্তি কার্যক্রম</h1>
          <p className="section-desc" style={{ maxWidth: '720px', marginInline: 'auto' }}>
            প্লে থেকে ৮ম শ্রেণিতে আপনার সন্তানের আসনটি এখনই নিশ্চিত করুন। সীমিত আসনে ভর্তি চলছে।
          </p>
        </div>
      </section>

      {/* Main Admission Guide */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-2xl">
            {/* Left: Requirements & Steps */}
            <div>
              <span className="section-tag">ভর্তি নির্দেশিকা</span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBlock: '8px 16px' }}>
                ভর্তি প্রক্রিয়া ও প্রয়োজনীয় কাগজপত্র
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '16px', background: 'var(--color-primary-50)', borderRadius: 'var(--radius-lg)' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-800)', marginBottom: '4px' }}>
                    ১. প্লে, নার্সারি ও কেজি (প্রাক-প্রাথমিক)
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)' }}>
                    কোনো ধরনের জটিল পরীক্ষা নেই। শিশুর বয়স উপযোগী মৌখিক পরিচিতি ও কথোপকথনের মাধ্যমে সহজ ভর্তি।
                  </p>
                </div>

                <div style={{ padding: '16px', background: 'var(--color-accent-50)', borderRadius: 'var(--radius-lg)' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-accent-700)', marginBottom: '4px' }}>
                    ২. ১ম থেকে ৮ম শ্রেণি (প্রাথমিক ও মাধ্যমিক)
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-700)' }}>
                    বাংলা, ইংরেজি ও গণিতের সাধারণ দক্ষতার ওপর প্রাথমিক মূল্যায়নের ভিত্তিতে শ্রেণি নির্ধারণ।
                  </p>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '12px' }}>
                সংযোজনীয় কাগজপত্র তালিকা:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>ডিজিটাল জন্মনিবন্ধন সনদের ফটোকপি</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>শিক্ষার্থীর সদ্যতোলা পাসপোর্ট সাইজের ৩ কপি ছবি</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-600)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-800)' }}>পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি</span>
                </div>
              </div>

              <div style={{ padding: '20px', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Clock size={18} color="var(--color-primary-600)" />
                  <strong style={{ color: 'var(--color-primary-900)' }}>অফিস কাউন্টারে ফরম প্রাপ্তির সময়:</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', margin: 0 }}>
                  শনিবার থেকে বৃহস্পতিবার: প্রতিদিন সকাল ৮:০০ থেকে দুপুর ২:০০ পর্যন্ত স্কুল অফিস থেকে সরাসরি ফরম সংগ্রহ ও জমা দেওয়া যাবে।
                </p>
              </div>
            </div>

            {/* Right: Quick Online Inquiry Form */}
            <div
              style={{
                background: 'var(--color-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 8px 30px rgba(36, 50, 130, 0.08)',
              }}
            >
              <span className="section-tag section-tag--accent">অনলাইন ভর্তি অনুসন্ধান</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBlock: '8px 12px' }}>
                ভর্তি তথ্য জানতে ফর্মটি পূরণ করুন
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginBottom: '20px' }}>
                নিচের তথ্যগুলো জমা দিলে আমাদের ভর্তি শাখা থেকে দ্রুত আপনার সাথে যোগাযোগ করা হবে।
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-gray-700)', marginBottom: '4px' }}>
                    শিক্ষার্থীর নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="যেমন: আরিয়ান আহমেদ"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--color-gray-50)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-gray-200)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-gray-700)', marginBottom: '4px' }}>
                    যে শ্রেণিতে ভর্তি হতে আগ্রহী *
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--color-gray-50)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-gray-200)',
                    }}
                  >
                    <option value="প্লে">প্লে (Playgroup)</option>
                    <option value="নার্সারি">নার্সারি (Nursery)</option>
                    <option value="কেজি">কেজি (KG)</option>
                    <option value="১ম শ্রেণি">১ম শ্রেণি (Class 1)</option>
                    <option value="২য় শ্রেণি">২য় শ্রেণি (Class 2)</option>
                    <option value="৩য় শ্রেণি">৩য় শ্রেণি (Class 3)</option>
                    <option value="৪র্থ শ্রেণি">৪র্থ শ্রেণি (Class 4)</option>
                    <option value="৫ম শ্রেণি">৫ম শ্রেণি (Class 5)</option>
                    <option value="৬ষ্ঠ শ্রেণি">৬ষ্ঠ শ্রেণি (Class 6)</option>
                    <option value="৭ম শ্রেণি">৭ম শ্রেণি (Class 7)</option>
                    <option value="৮ম শ্রেণি">৮ম শ্রেণি (Class 8)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-gray-700)', marginBottom: '4px' }}>
                    অভিভাবকের নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    placeholder="পিতা / মাতার নাম"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--color-gray-50)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-gray-200)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-gray-700)', marginBottom: '4px' }}>
                    মোবাইল নম্বর (হোয়াটসঅ্যাপ থাকলে ভালো) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guardianPhone}
                    onChange={(e) => setGuardianPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'var(--color-gray-50)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-gray-200)',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--full btn--lg" style={{ marginTop: '8px' }}>
                  <Send size={18} />
                  <span>তথ্য জমা দিন ও হোয়াটসঅ্যাপে জানুন</span>
                </button>
              </form>

              {submitted && (
                <div style={{ marginTop: '16px', padding: '12px', background: '#dcfce7', color: '#166534', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', textAlign: 'center' }}>
                  ✓ আপনার তথ্য সংরক্ষিত হয়েছে। হোয়াটসঅ্যাপে সরাসরি চ্যাট ওপেন হচ্ছে।
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section section--subtle">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <span className="section-tag">সচরাচর জিজ্ঞাসা</span>
            <h2 className="section-title">ভর্তি সম্পর্কিত সাধারণ প্রশ্নোত্তর</h2>
            <p className="section-desc">
              অভিভাবকদের সর্বাধিক জিজ্ঞাসিত প্রশ্নগুলোর উত্তর জেনে নিন।
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-white)',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                }}
              >
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: '1.6', whiteSpace: 'pre-line', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
