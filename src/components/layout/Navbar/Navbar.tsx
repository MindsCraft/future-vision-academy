'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig, mainNavItems } from '@/config/site';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const phoneNumber = siteConfig.contact.phone || '01713-503854';
  const rawPhone = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <header className="navbar-wrapper">
      <div className="navbar container">
        {/* Main Logo with Name */}
        <Link href="/" className="navbar__brand" aria-label="ফিউচার ভিশন একাডেমি — হোম">
          <Image
            src="/images/logo-with-name.png"
            alt={`${siteConfig.name} (${siteConfig.shortName})`}
            width={280}
            height={52}
            className="navbar__logo-img"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="প্রধান নেভিগেশন">
          <div className="navbar__menu">
            {mainNavItems.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="navbar__link-badge">{link.badge}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a
            href={`tel:${rawPhone}`}
            className="navbar__btn-call"
            title={`কল করুন ${phoneNumber}`}
          >
            <Phone size={15} />
            <span>{phoneNumber}</span>
          </a>

          <Link href="/admissions" className="navbar__btn-admissions">
            <span>ভর্তি আবেদন</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar__toggle"
            aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`navbar__mobile-drawer ${
          mobileMenuOpen ? 'navbar__mobile-drawer--open' : ''
        }`}
      >
        <div className="container">
          <nav className="navbar__mobile-list" aria-label="মোবাইল নেভিগেশন">
            {mainNavItems.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`navbar__mobile-link ${
                    isActive ? 'navbar__mobile-link--active' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="navbar__link-badge">{link.badge}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="navbar__mobile-actions">
            <a
              href={`tel:${rawPhone}`}
              className="btn btn--secondary btn--full"
            >
              <Phone size={16} />
              <span>সরাসরি কল: {phoneNumber}</span>
            </a>
            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn--primary btn--full"
            >
              <span>ভর্তি নির্দেশিকা ও ফরম</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
