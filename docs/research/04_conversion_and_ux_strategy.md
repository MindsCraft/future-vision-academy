# 04. Parent Conversion & UX Strategy

## 1. The Psychology of Bangladeshi School Admissions

Choosing a school is one of the highest-stakes emotional and financial commitments for Bangladeshi parents. The decision cycle is driven by three fundamental questions:

1. **"Will my child be safe and well-cared for?"** (Physical security, CCTV, female attendants for primary students, hygienic cafeteria/washrooms).
2. **"Will my child excel academically and speak fluent English?"** (Quality of teachers, board exam results, spoken English culture, modern STEM/computer facilities).
3. **"Is the institution authentic, disciplined, and legitimate?"** (Government board recognition, EIIN number, experienced leadership, clear fee policies).

---

## 2. Trust Architecture: Key On-Page Trust Signals

To convert prospective visitors into applicants, the website must immediately surface high-trust indicators:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HOMEPAGE TRUST ARCHITECTURE                     │
├────────────────────────────────────────────────────────────────────────┤
│ [Top Banner]: EIIN: XXXXXX | Affiliated with BISE Dhaka | Estd. 2012   │
│                                                                        │
│ [Hero Section]:                                                        │
│ • Clear Value Proposition: "Future-Ready Education Rooted in Values"   │
│ • Primary CTAs: [ Apply for Admission 2026-27 ] [ Book Campus Tour ]   │
│                                                                        │
│ [Stat Counters]:                                                       │
│ • 100% SSC Pass Rate  • 1:18 Teacher-Student Ratio  • 15+ Modern Labs   │
│                                                                        │
│ [Principal's Welcome]:                                                 │
│ • Photo + Credentials + Short 2-paragraph inspiring mission message     │
│                                                                        │
│ [Campus Facilities Grid]:                                              │
│ • Air-conditioned Classrooms • Science & Robotics Lab • Library        │
│ • Indoor Play Area • CCTV Monitored 24/7 Security                     │
│                                                                        │
│ [Parent Testimonials & Video Clips]:                                   │
│ • Quotes from actual parents highlighting individual care and progress │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Mobile-First Optimization Principles

In Bangladesh, statistics indicate that **over 80% of parent web visits occur on mobile phones** (predominantly 4G Android devices). A clunky desktop-only design leads to immediate drop-off.

### Design Imperatives:
- **Sticky Call-to-Action:** On mobile screens, keep a lightweight persistent bottom bar or prominent header CTA: `Apply Now` and `Call / WhatsApp`.
- **One-Tap WhatsApp & Phone Dialing:** In Bangladesh, WhatsApp and direct phone calls are the preferred quick inquiry channels for parents. Phone links (`tel:+880...`) and direct WhatsApp chat links must be active throughout.
- **Fast Image Optimization:** Use Next.js `<Image />` optimization with modern `.webp` formats to ensure pages load instantaneously even on slower 3G/4G connections.
- **Thumb-Friendly Touch Targets:** Minimum button and touch targets of at least 44px × 44px for smooth mobile navigation.

---

## 4. Bilingual Strategy (English + Bengali)

While Future Vision Academy offers English and Bangla medium tracks, English is the primary language of the website. However, strategic Bengali elements dramatically improve accessibility:

- **Key Form Labels:** In the online admission form, provide dual-language helper text (e.g., `Student Full Name / শিক্ষার্থীর পূর্ণ নাম`, `Father's Name / পিতার নাম`).
- **Official Notices:** Allow PDF notices to be uploaded in Bengali (the standard format for Dhaka Education Board and NCTB circulars) while keeping the web summary in English.
- **Campus Directions / Address:** Include address in both English and Bengali so drivers and local visitors can easily identify landmarks.

---

## 5. Annual Admission Timeline & Campaign Phases

| Month | Campaign Stage | Website Focus |
| :--- | :--- | :--- |
| **August – September** | Teaser & Early Awareness | "Admissions Opening Soon" banners, newsletter signup for prospectus release. |
| **October – November** | Peak Admission Application | "Admissions Open 2027" hero banner, active digital application form, open campus days. |
| **December – January** | Selection, Lottery & Enrollment | Status checker, lottery/viva lists published on Notice Board, orientation dates. |
| **February – July** | Academic Routine & Student Life | Notice board updates, exam schedules, sports days, student achievements. |
