'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import {
  Calculator,
  GraduationCap,
  Users,
  Bus,
  Utensils,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BadgePercent,
  ArrowRight,
  Info,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button/Button';

// Grade tier configuration
export interface GradeTierOption {
  id: 'pre-primary' | 'primary' | 'secondary';
  label: string;
  grades: string;
  basePrice: number;
  popular?: boolean;
  features: string[];
}

const GRADE_TIERS: GradeTierOption[] = [
  {
    id: 'pre-primary',
    label: 'Pre-Primary Tier',
    grades: 'Playgroup – KG',
    basePrice: 4500,
    features: ['1:12 Teacher Ratio', 'Montessori Materials Included', 'Soft-play Sensory Arena'],
  },
  {
    id: 'primary',
    label: 'Primary School Tier',
    grades: 'Grades 1 – 5',
    basePrice: 5500,
    popular: true,
    features: ['1:15 Teacher Ratio', 'Dual-Medium Instruction', 'Digital STEM & Coding Access'],
  },
  {
    id: 'secondary',
    label: 'Middle & Secondary Tier',
    grades: 'Grades 6 – 10',
    basePrice: 6800,
    features: ['1:20 Teacher Ratio', 'Science Labs & SSC Prep', 'Robotics & Debate Coaching'],
  },
];

// Sibling discount configuration
export interface SiblingDiscountOption {
  id: 'none' | 'second' | 'third';
  label: string;
  discountRate: number;
  badge: string;
  description: string;
}

const SIBLING_DISCOUNTS: SiblingDiscountOption[] = [
  {
    id: 'none',
    label: 'First Child',
    discountRate: 0,
    badge: 'Standard',
    description: 'Full standard monthly tuition for the first enrolled child',
  },
  {
    id: 'second',
    label: '2nd Sibling',
    discountRate: 0.25,
    badge: '25% Off Tuition',
    description: '25% concession applied to monthly tuition for the second child',
  },
  {
    id: 'third',
    label: '3rd Sibling+',
    discountRate: 0.4,
    badge: '40% Off Tuition',
    description: '40% concession applied to monthly tuition for the third child onwards',
  },
];

// Transport zone configuration
export interface TransportOption {
  id: 'none' | 'zone1' | 'zone2';
  label: string;
  coverage: string;
  price: number;
}

const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    id: 'none',
    label: 'Self-Commute / None',
    coverage: 'Parent pick-up & drop-off',
    price: 0,
  },
  {
    id: 'zone1',
    label: 'Zone 1: Uttara Sectors 1–14',
    coverage: 'AC Microbus with female chaperone & GPS',
    price: 2200,
  },
  {
    id: 'zone2',
    label: 'Zone 2: Mirpur / Airport / Nikunja',
    coverage: 'Extended perimeter routes with live tracking',
    price: 3000,
  },
];

// Lunch plan configuration
export interface LunchOption {
  id: 'none' | 'enrolled';
  label: string;
  description: string;
  price: number;
}

const LUNCH_OPTIONS: LunchOption[] = [
  {
    id: 'none',
    label: 'Home-Packed Tiffin',
    description: 'Student brings personal lunch from home',
    price: 0,
  },
  {
    id: 'enrolled',
    label: 'Campus Hot Lunch & Nutrition',
    description: 'Curated balanced hot meals, seasonal fruits & hygienic dining',
    price: 2500,
  },
];

const ONE_TIME_ADMISSION_FEE = 25000;

export function TuitionCalculator() {
  const [selectedTier, setSelectedTier] = useState<GradeTierOption['id']>('primary');
  const [selectedSibling, setSelectedSibling] = useState<SiblingDiscountOption['id']>('none');
  const [selectedTransport, setSelectedTransport] = useState<TransportOption['id']>('none');
  const [selectedLunch, setSelectedLunch] = useState<LunchOption['id']>('none');

  // Derive calculated amounts
  const currentTier = GRADE_TIERS.find((t) => t.id === selectedTier) || GRADE_TIERS[1];
  const currentSibling = SIBLING_DISCOUNTS.find((s) => s.id === selectedSibling) || SIBLING_DISCOUNTS[0];
  const currentTransport = TRANSPORT_OPTIONS.find((t) => t.id === selectedTransport) || TRANSPORT_OPTIONS[0];
  const currentLunch = LUNCH_OPTIONS.find((l) => l.id === selectedLunch) || LUNCH_OPTIONS[0];

  const baseTuition = currentTier.basePrice;
  const discountRate = currentSibling.discountRate;
  const discountAmount = Math.round(baseTuition * discountRate);
  const netTuition = baseTuition - discountAmount;

  const transportCost = currentTransport.price;
  const lunchCost = currentLunch.price;
  const optionalServicesTotal = transportCost + lunchCost;

  const totalMonthlyInvestment = netTuition + optionalServicesTotal;

  // Reset to defaults
  const handleReset = () => {
    setSelectedTier('primary');
    setSelectedSibling('none');
    setSelectedTransport('none');
    setSelectedLunch('none');
  };

  const formatBDT = (amount: number) => {
    return `BDT ${amount.toLocaleString('en-US')}`;
  };

  return (
    <div className="calculator-container" id="fee-calculator">
      <div className="calculator-card">
        {/* Header Bar */}
        <div className="calculator-card__header">
          <div className="calculator-card__header-text">
            <span className="calculator-pill">
              <Calculator size={14} /> Interactive Estimator
            </span>
            <h3 className="calculator-card__title">
              Personalized Tuition &amp; Fee Calculator
            </h3>
            <p className="calculator-card__subtitle">
              Configure your child&apos;s grade tier, family sibling waivers, and optional commute/meal services
              to receive a transparent, real-time fee breakdown with zero hidden charges.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="calculator-reset-btn"
            title="Reset calculator values"
            aria-label="Reset calculator to defaults"
          >
            <RotateCcw size={15} />
            <span>Reset</span>
          </button>
        </div>

        {/* Two-Column Grid: Configurator on Left, Live Summary on Right */}
        <div className="calculator-grid">
          {/* LEFT: Interactive Controls */}
          <div className="calculator-controls">
            {/* 1. Grade Tier Selector */}
            <fieldset className="calc-group">
              <legend className="calc-group__legend">
                <span className="calc-step-badge">1</span>
                <span>Select Academic Grade Level</span>
              </legend>
              <div className="calc-tier-cards" role="radiogroup" aria-label="Grade Level">
                {GRADE_TIERS.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <label
                      key={tier.id}
                      className={`calc-tier-card ${isSelected ? 'calc-tier-card--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="gradeTier"
                        value={tier.id}
                        checked={isSelected}
                        onChange={() => setSelectedTier(tier.id)}
                        className="sr-only"
                      />
                      <div className="calc-tier-card__top">
                        <div className="calc-tier-card__indicator">
                          <div className={`radio-dot ${isSelected ? 'radio-dot--checked' : ''}`} />
                        </div>
                        <div className="calc-tier-card__info">
                          <span className="calc-tier-card__title">{tier.label}</span>
                          <span className="calc-tier-card__grades">{tier.grades}</span>
                        </div>
                        {tier.popular && (
                          <span className="calc-popular-tag">Popular</span>
                        )}
                      </div>
                      <div className="calc-tier-card__price">
                        <span className="calc-tier-card__amount">{formatBDT(tier.basePrice)}</span>
                        <span className="calc-tier-card__period">/month base</span>
                      </div>
                      <ul className="calc-tier-card__features">
                        {tier.features.map((feat, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* 2. Sibling Discount */}
            <fieldset className="calc-group">
              <legend className="calc-group__legend">
                <span className="calc-step-badge">2</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Users size={16} /> Family Sibling Discount
                </span>
              </legend>
              <p className="calc-group__help">
                Future Vision Academy honors growing families with concurrent monthly tuition fee concessions.
              </p>
              <div className="calc-sibling-options" role="radiogroup" aria-label="Sibling Discount">
                {SIBLING_DISCOUNTS.map((opt) => {
                  const isSelected = selectedSibling === opt.id;
                  return (
                    <label
                      key={opt.id}
                      className={`calc-sibling-chip ${isSelected ? 'calc-sibling-chip--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="siblingDiscount"
                        value={opt.id}
                        checked={isSelected}
                        onChange={() => setSelectedSibling(opt.id)}
                        className="sr-only"
                      />
                      <div className="calc-sibling-chip__header">
                        <span className="calc-sibling-chip__label">{opt.label}</span>
                        <span className={`calc-discount-badge ${opt.discountRate > 0 ? 'calc-discount-badge--highlight' : ''}`}>
                          {opt.badge}
                        </span>
                      </div>
                      <span className="calc-sibling-chip__desc">{opt.description}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* 3. Safe Transport Service */}
            <fieldset className="calc-group">
              <legend className="calc-group__legend">
                <span className="calc-step-badge">3</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Bus size={16} /> Safe Air-Conditioned Van / Bus Commute (Optional)
                </span>
              </legend>
              <div className="calc-options-stack" role="radiogroup" aria-label="Safe Transport Service">
                {TRANSPORT_OPTIONS.map((opt) => {
                  const isSelected = selectedTransport === opt.id;
                  return (
                    <label
                      key={opt.id}
                      className={`calc-option-row ${isSelected ? 'calc-option-row--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="transportService"
                        value={opt.id}
                        checked={isSelected}
                        onChange={() => setSelectedTransport(opt.id)}
                        className="sr-only"
                      />
                      <div className={`radio-dot ${isSelected ? 'radio-dot--checked' : ''}`} />
                      <div className="calc-option-row__content">
                        <span className="calc-option-row__title">{opt.label}</span>
                        <span className="calc-option-row__sub">{opt.coverage}</span>
                      </div>
                      <div className="calc-option-row__price">
                        {opt.price === 0 ? (
                          <span className="calc-free-tag">Included / Nil</span>
                        ) : (
                          <span>+{formatBDT(opt.price)}/mo</span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* 4. Hot Lunch & Nutrition Program */}
            <fieldset className="calc-group">
              <legend className="calc-group__legend">
                <span className="calc-step-badge">4</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Utensils size={16} /> Hot Lunch &amp; Wellness Dining Program (Optional)
                </span>
              </legend>
              <div className="calc-options-stack" role="radiogroup" aria-label="Hot Lunch Program">
                {LUNCH_OPTIONS.map((opt) => {
                  const isSelected = selectedLunch === opt.id;
                  return (
                    <label
                      key={opt.id}
                      className={`calc-option-row ${isSelected ? 'calc-option-row--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="lunchProgram"
                        value={opt.id}
                        checked={isSelected}
                        onChange={() => setSelectedLunch(opt.id)}
                        className="sr-only"
                      />
                      <div className={`radio-dot ${isSelected ? 'radio-dot--checked' : ''}`} />
                      <div className="calc-option-row__content">
                        <span className="calc-option-row__title">{opt.label}</span>
                        <span className="calc-option-row__sub">{opt.description}</span>
                      </div>
                      <div className="calc-option-row__price">
                        {opt.price === 0 ? (
                          <span className="calc-free-tag">Self-Catered / Nil</span>
                        ) : (
                          <span>+{formatBDT(opt.price)}/mo</span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* RIGHT: Real-time Live Summary Breakdown */}
          <aside className="calculator-summary" aria-label="Fee Estimate Summary">
            <div className="summary-box">
              <div className="summary-box__header">
                <span className="summary-box__kicker">Live Estimate</span>
                <h4 className="summary-box__title">Estimated Monthly Investment</h4>
              </div>

              {/* Prominent Monthly Total Display */}
              <div className="summary-hero-price">
                <span className="summary-hero-price__amount">
                  {formatBDT(totalMonthlyInvestment)}
                </span>
                <span className="summary-hero-price__period">/ per month</span>
              </div>

              {discountAmount > 0 && (
                <div className="summary-savings-banner">
                  <BadgePercent size={18} />
                  <span>
                    Saving <strong>{formatBDT(discountAmount)}/mo</strong> via {currentSibling.label} discount!
                  </span>
                </div>
              )}

              {/* Itemized Line-by-Line Breakdown */}
              <div className="summary-breakdown">
                <h5 className="summary-breakdown__heading">Transparent Monthly Line Items</h5>

                <div className="summary-line">
                  <div className="summary-line__label">
                    <span>Base Monthly Tuition</span>
                    <small>{currentTier.label} ({currentTier.grades})</small>
                  </div>
                  <span className="summary-line__value">{formatBDT(baseTuition)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="summary-line summary-line--discount">
                    <div className="summary-line__label">
                      <span>Sibling Discount ({Math.round(discountRate * 100)}%)</span>
                      <small>{currentSibling.label} Concession</small>
                    </div>
                    <span className="summary-line__value">- {formatBDT(discountAmount)}</span>
                  </div>
                )}

                <div className="summary-line summary-line--subtotal">
                  <span className="summary-line__label">Net Monthly Tuition:</span>
                  <span className="summary-line__value">{formatBDT(netTuition)}</span>
                </div>

                {/* Transport Line */}
                <div className="summary-line">
                  <div className="summary-line__label">
                    <span>Safe AC Transport</span>
                    <small>{currentTransport.label}</small>
                  </div>
                  <span className="summary-line__value">
                    {transportCost > 0 ? `+ ${formatBDT(transportCost)}` : 'BDT 0'}
                  </span>
                </div>

                {/* Lunch Line */}
                <div className="summary-line">
                  <div className="summary-line__label">
                    <span>Hot Lunch &amp; Dining</span>
                    <small>{currentLunch.label}</small>
                  </div>
                  <span className="summary-line__value">
                    {lunchCost > 0 ? `+ ${formatBDT(lunchCost)}` : 'BDT 0'}
                  </span>
                </div>

                <div className="summary-line summary-line--total">
                  <span>Total Recurring Monthly:</span>
                  <strong className="summary-line__total-amount">
                    {formatBDT(totalMonthlyInvestment)}
                  </strong>
                </div>
              </div>

              {/* One-Time Enrolment Fee Section */}
              <div className="summary-onetime-box">
                <div className="summary-onetime-row">
                  <div>
                    <span className="summary-onetime-label">One-Time Admission Fee</span>
                    <p className="summary-onetime-sub">
                      Due only upon formal offer acceptance. Covers lifetime registration, student ID card &amp; initial dossier.
                    </p>
                  </div>
                  <div className="summary-onetime-badge">
                    {formatBDT(ONE_TIME_ADMISSION_FEE)}
                  </div>
                </div>
              </div>

              {/* Trust & Guarantee Callout */}
              <div className="summary-guarantee">
                <ShieldCheck size={20} className="summary-guarantee__icon" />
                <div className="summary-guarantee__text">
                  <strong>Zero Hidden Levies Guarantee:</strong> All tuition dues include laboratory access,
                  sports facilities, library book lending, digital platform credentials, and standard student clubs.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="summary-actions">
                <Button
                  href="#inquiry-form"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<ArrowRight size={18} />}
                >
                  Proceed with Enrollment Inquiry
                </Button>
                <Button
                  href="#tour"
                  variant="outline"
                  size="md"
                  fullWidth
                >
                  Book a Campus Visit First
                </Button>
              </div>

              <p className="summary-footnote">
                * Note: Annual session charges (BDT 12,000–16,000 based on grade) and board examination registration fees are billed once yearly in January.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
