'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Calendar, Clock, User, Phone, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button/Button';

export interface InquiryFormData {
  parentName: string;
  phone: string;
  email: string;
  studentName: string;
  grade: string;
  medium: string;
  inquiryType: string;
  tourDate: string;
  tourTime: string;
  notes: string;
}

const initialForm: InquiryFormData = {
  parentName: '',
  phone: '',
  email: '',
  studentName: '',
  grade: 'Playgroup',
  medium: 'English Version',
  inquiryType: 'Book a Campus Tour',
  tourDate: '',
  tourTime: '10:00 AM – 11:30 AM',
  notes: '',
};

export const AdmissionsInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      const generatedRef = `FVA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setRefId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setIsSubmitted(false);
    setRefId('');
  };

  if (isSubmitted) {
    return (
      <div className="inquiry-card" id="inquiry-form">
        <div className="form-success-banner">
          <div className="form-success-banner__icon">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="h3" style={{ color: '#065f46', marginBottom: 'var(--space-xs)' }}>
            Inquiry &amp; Tour Request Confirmed!
          </h3>
          <p style={{ fontSize: '0.9375rem', marginBottom: 'var(--space-md)', color: '#047857' }}>
            Reference ID: <strong>{refId}</strong>
          </p>
          <p style={{ maxWidth: '600px', marginInline: 'auto', marginBottom: 'var(--space-xl)', lineHeight: 1.6 }}>
            Thank you, <strong>{formData.parentName}</strong>. We have registered your request for{' '}
            <strong>{formData.studentName}</strong> ({formData.grade} &bull; {formData.medium}).{' '}
            Our admissions admissions counselor will reach out via <strong>{formData.phone}</strong> or{' '}
            <strong>{formData.email}</strong> within one working day to finalize your appointment.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)' }}>
            <Button type="button" variant="outline" size="md" onClick={handleReset}>
              Submit Another Request
            </Button>
            <Button href="/contact" variant="primary" size="md">
              View Campus Location
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="inquiry-card" id="inquiry-form">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
        <span className="admissions-kicker">Direct Admissions Desk</span>
        <h3 className="h3" style={{ marginBottom: 'var(--space-xs)' }}>
          Request Information or Schedule an In-Person Tour
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', margin: 0 }}>
          Fill out this brief form and our academic counselor will arrange your private campus walkthrough.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        {/* Parent Full Name */}
        <div className="form-group">
          <label htmlFor="parentName" className="form-label">
            Parent / Guardian Name <span className="form-label__required">*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              placeholder="e.g. Dr. Farhana Rahman"
              value={formData.parentName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        {/* Child Full Name */}
        <div className="form-group">
          <label htmlFor="studentName" className="form-label">
            Student Full Name <span className="form-label__required">*</span>
          </label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            required
            placeholder="e.g. Aryan Rahman"
            value={formData.studentName}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Contact Phone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="form-label__required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+880 1XXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
          <span className="form-helper">SMS updates and call confirmation will be sent here.</span>
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="form-label__required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Grade Applying For */}
        <div className="form-group">
          <label htmlFor="grade" className="form-label">
            Grade Applying For <span className="form-label__required">*</span>
          </label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Playgroup">Playgroup (Age 2.5 – 3.5)</option>
            <option value="Nursery">Nursery (Age 3.5 – 4.5)</option>
            <option value="Kindergarten (KG)">Kindergarten / KG (Age 4.5 – 5.5)</option>
            <option value="Grade 1">Grade 1 (Age 5.5 – 6.5)</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9 (Science)">Grade 9 (Science Track)</option>
            <option value="Grade 9 (Business)">Grade 9 (Business Studies)</option>
            <option value="Grade 10">Grade 10 (SSC Candidate)</option>
          </select>
        </div>

        {/* Medium Preference */}
        <div className="form-group">
          <label htmlFor="medium" className="form-label">
            Curriculum Medium <span className="form-label__required">*</span>
          </label>
          <select
            id="medium"
            name="medium"
            value={formData.medium}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="English Version">English Version (NCTB in English)</option>
            <option value="Bangla Medium">Bangla Medium (NCTB in Bangla)</option>
          </select>
        </div>

        {/* Inquiry Type */}
        <div className="form-group">
          <label htmlFor="inquiryType" className="form-label">
            Primary Objective <span className="form-label__required">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Book a Campus Tour">Schedule an In-Person Campus Tour</option>
            <option value="Admission Application">Request Full Admission Packet</option>
            <option value="Fee & Scholarship Query">Fee Structure &amp; Scholarship Assessment</option>
            <option value="Transport & Logistics">Transportation &amp; Day-Care Query</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div className="form-group">
          <label htmlFor="tourDate" className="form-label">
            Preferred Date (Sun – Thu)
          </label>
          <input
            id="tourDate"
            name="tourDate"
            type="date"
            value={formData.tourDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Preferred Slot */}
        <div className="form-group">
          <label htmlFor="tourTime" className="form-label">
            Preferred Time Slot
          </label>
          <select
            id="tourTime"
            name="tourTime"
            value={formData.tourTime}
            onChange={handleChange}
            className="form-select"
          >
            <option value="10:00 AM – 11:30 AM">Morning Session (10:00 AM – 11:30 AM)</option>
            <option value="2:00 PM – 3:30 PM">Afternoon Session (2:00 PM – 3:30 PM)</option>
            <option value="3:30 PM – 4:30 PM">Late Afternoon (3:30 PM – 4:30 PM)</option>
          </select>
        </div>

        {/* Additional Questions / Notes */}
        <div className="form-group form-group--full">
          <label htmlFor="notes" className="form-label">
            Additional Questions or Special Requirements (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Tell us about your child's interests, previous schooling, or any specific concerns..."
            value={formData.notes}
            onChange={handleChange}
            className="form-textarea"
          />
        </div>

        {/* Submit Button */}
        <div className="form-group form-group--full" style={{ marginTop: 'var(--space-sm)' }}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            icon={isSubmitting ? undefined : <Send size={18} />}
          >
            {isSubmitting ? 'Submitting Request...' : 'Submit Admission Inquiry / Book Tour'}
          </Button>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              textAlign: 'center',
              marginTop: 'var(--space-sm)',
            }}
          >
            🔒 Your information is confidential and used solely for Future Vision Academy admissions communications.
          </p>
        </div>
      </form>
    </div>
  );
};
