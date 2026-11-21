'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Send,
  Navigation,
  Mail,
} from 'lucide-react';
import { siteConfig, googleMapsConfig } from '@/config/site';

export default function ContactPage() {
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/88${rawPhone}?text=${encodeURIComponent(
    'আসসালামু আলাইকুম, ফিউচার ভিশন একাডেমি সম্পর্কিত তথ্য জানতে চাই।'
  )}`;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('ভর্তি তথ্য');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const text = `আসসালামু আলাইকুম,\nনাম: ${name}\nফোন: ${phone}\nবিষয়: ${subject}\nবার্তা: ${message}`;
    const url = `https://wa.me/88${rawPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* Header */}
      <section className="section section--subtle">
        <div className="container text-center">
          <span className="section-tag section-tag--accent">যোগাযোগ ও অবস্থান</span>
          <h1 className="section-title">ক্যাম্পাস পরিদর্শন ও সরাসরি যোগাযোগ</h1>
          <p className="section-desc" style={{ maxWidth: '720px', marginInline: 'auto' }}>
            যেকোনো তথ্য, পরামর্শ বা ক্যাম্পাস পরিদর্শনের জন্য আমরা সর্বদা আপনার পাশে আছি।
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-2xl">
            {/* Contact Information */}
            <div>
              <span className="section-tag">যোগাযোগের ঠিকানা</span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBlock: '8px 20px' }}>
                ফিউচার ভিশন একাডেমি ক্যাম্পাস
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-primary-50)',
                      color: 'var(--color-primary-600)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>ক্যাম্পাস ঠিকানা</h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--color-gray-700)', marginTop: '2px', lineHeight: '1.5' }}>
                      {siteConfig.contact.address}
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>গফরগাঁও পশু হাসপাতাল রোড সংলগ্ন</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-accent-50)',
                      color: 'var(--color-accent-600)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>হটলাইন ও হোয়াটসঅ্যাপ</h3>
                    <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-700)', marginTop: '2px' }}>
                      <a href={`tel:${rawPhone}`}>{phoneNumber}</a>
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>সরাসরি ফোন কল ও হোয়াটসঅ্যাপে মেসেজ দেওয়া যাবে</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-primary-50)',
                      color: 'var(--color-primary-600)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>অফিস ও হেল্পডেস্ক সময়</h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--color-gray-700)', marginTop: '2px' }}>
                      {siteConfig.contact.hours}
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>শুক্রবার সাপ্তাহিক ছুটি</span>
                  </div>
                </div>

                {siteConfig.socials?.facebook && (
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-primary-50)',
                        color: 'var(--color-primary-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <ExternalLink size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>ফেসবুক অফিসিয়াল পেজ</h3>
                      <p style={{ marginTop: '2px' }}>
                        <a
                          href={siteConfig.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--color-primary-600)', fontWeight: 700, textDecoration: 'underline' }}
                        >
                          আমাদের ফেসবুক পেজ ভিজিট করুন
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={`tel:${rawPhone}`} className="btn btn--primary btn--lg">
                  <Phone size={18} />
                  <span>সরাসরি কল দিন</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--lg"
                >
                  <MessageCircle size={18} />
                  <span>হোয়াটসঅ্যাপ চ্যাট</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form & Map Navigation */}
            <div>
              <div
                style={{
                  background: 'var(--color-white)',
                  padding: 'var(--space-2xl)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 8px 30px rgba(36, 50, 130, 0.08)',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '8px' }}>
                  আমাদের বার্তা পাঠান
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginBottom: '18px' }}>
                  কোনো প্রশ্ন বা পরামর্শ থাকলে নিচের বক্সে লিখে পাঠান:
                </p>

                <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="আপনার নাম"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                    <input
                      type="tel"
                      required
                      placeholder="আপনার মোবাইল নম্বর"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                        border: '1px solid var(--color-gray-200)',
                      }}
                    >
                      <option value="ভর্তি তথ্য">ভর্তি তথ্য</option>
                      <option value="English Language Club">English Language Club</option>
                      <option value="ক্যাম্পাস পরিদর্শন">ক্যাম্পাস পরিদর্শন</option>
                      <option value="সাধারণ পরামর্শ">সাধারণ পরামর্শ</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="আপনার বার্তা বা প্রশ্ন..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.95rem',
                        border: '1px solid var(--color-gray-200)',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn--primary btn--full btn--lg">
                    <Send size={18} />
                    <span>বার্তা পাঠান (হোয়াটসঅ্যাপ)</span>
                  </button>
                </form>

                {sent && (
                  <div style={{ marginTop: '12px', padding: '10px', background: '#dcfce7', color: '#166534', borderRadius: 'var(--radius-sm)', fontSize: '0.84rem', textAlign: 'center' }}>
                    ✓ বার্তা তৈরি হয়েছে। হোয়াটসঅ্যাপ ওপেন হচ্ছে।
                  </div>
                )}
              </div>

              {/* Google Maps Action */}
              <div
                style={{
                  background: 'var(--color-primary-50)',
                  padding: 'var(--space-xl)',
                  borderRadius: 'var(--radius-xl)',
                  textAlign: 'center',
                }}
              >
                <Navigation size={32} color="var(--color-primary-600)" style={{ marginInline: 'auto', marginBottom: '8px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '4px' }}>
                  গুগল ম্যাপে আমাদের ক্যাম্পাস
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)', marginBottom: '16px' }}>
                  গফরগাঁও পৌর শহরের কেন্দ্রস্থলে পশু হাসপাতাল রোডে অবস্থিত।
                </p>
                <a
                  href={googleMapsConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <Navigation size={16} />
                  <span>গুগল ম্যাপে লাইভ ডিরেকশন</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
