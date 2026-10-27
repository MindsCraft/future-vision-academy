# 📐 K-12 Academy Wireframe UX Architecture & Specifications

**Institution:** Future Vision Academy (Uttara Model Town, Dhaka-1230)  
**EIIN:** 138421 | **Operating Stage:** 2nd Year of Operations (Campus Phase 2)  
**Curriculum:** National Curriculum (NCTB) Dual Medium (English Version & Bangla Medium) | Playgroup to Grade 10 (SSC)  
**Role:** Lead Wireframe UX Architect  
**Target Document:** Production Wireframe Blueprints & Psychological Conversion Architecture  

---

## 📑 Table of Contents
1. [Executive UX Strategy & 2nd-Year Psychological Framework](#1-executive-ux-strategy--2nd-year-psychological-framework)
2. [Global Navigation & Persistent Shell Wireframe](#2-global-navigation--persistent-shell-wireframe)
3. [Page 1: Homepage (`/`) — Conversion Hub & Trust Anchors](#3-page-1-homepage---conversion-hub--trust-anchors)
4. [Page 2: Admissions Hub (`/admissions`) — 5-Step Journey, Fee Calculator & Verification](#4-page-2-admissions-hub-admissions--5-step-journey-fee-calculator--verification)
5. [Page 3: Academics & Pedagogy (`/academics`) — Stage Tiers, STEM Labs & Co-Curriculars](#5-page-3-academics--pedagogy-academics--stage-tiers-stem-labs--co-curriculars)
6. [Page 4: About Us (`/about`) — Leadership, Safeguarding Charter & Institutional Pedigree](#6-page-4-about-us-about--leadership-safeguarding-charter--institutional-pedigree)
7. [Page 5: Contact & Campus Visit (`/contact`) — Tour Booking, Transit Guide & Direct Hotline](#7-page-5-contact--campus-visit-contact--tour-booking-transit-guide--direct-hotline)
8. [Page 6: Notices & Circulars (`/notices`) — Filterable Circulars, Urgent Banners & Academic Calendar](#8-page-6-notices--circulars-notices--filterable-circulars-urgent-banners--academic-calendar)
9. [Component State Standards & Responsive Touch Ergonomics](#9-component-state-standards--responsive-touch-ergonomics)

---

## 1. Executive UX Strategy & 2nd-Year Psychological Framework

### 1.1 The 2nd-Year Institutional Context
Operating in its second academic year presents a distinct UX and psychological challenge:
* **The Opportunity:** Modern purpose-built infrastructure, enthusiastic founding faculty, uncrowded student-to-teacher ratios, agile administrative responsiveness, and fresh technology-enabled labs.
* **The Parent Hesitation:** Parents naturally evaluate newer schools against decades-old heritage schools with trepidation. They ask: *"Will this school survive long-term?", "Are the teachers vetted and qualified?", "Will they surprise us with hidden fees?", "Is the campus truly safe?"*, and *"Will my child pass board exams?"*

### 1.2 The 5 Compensating Trust Anchors (Psychological Inoculation)
Every wireframe block in this specification is designed to dissolve one or more of these core parental anxieties:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          5 COMPENSATING TRUST ANCHORS                                  │
├──────────────────────────┬─────────────────────────────────┬───────────────────────────┤
│ Parent Objection         │ Cognitive Friction              │ UX Compensating Anchor    │
├──────────────────────────┼─────────────────────────────────┼───────────────────────────┤
│ 1. Institutional         │ "Is this a temporary venture    │ Official EIIN (138421),   │
│    Permanence            │  in a leased commercial space?" │ Dhaka Board approval seal,│
│                          │                                 │ Phase 2 campus blueprint. │
├──────────────────────────┼─────────────────────────────────┼───────────────────────────┤
│ 2. Faculty Pedigree      │ "Will my child be an experiment │ 100% Certified Educator   │
│    & Class Attention     │  in an overcrowded room?"       │ roster, verified degrees, │
│                          │                                 │ strict 1:12 class ratio.  │
├──────────────────────────┼─────────────────────────────────┼───────────────────────────┤
│ 3. Financial Obscurity   │ "Will there be sudden levies,   │ Dynamic interactive fee   │
│                          │  surprise donation demands?"    │ calculator, zero-hidden-  │
│                          │                                 │ fee pledge, sibling rules │
├──────────────────────────┼─────────────────────────────────┼───────────────────────────┤
│ 4. Child Safeguarding    │ "Are my kids safe in traffic    │ 128-camera CCTV perimeter,│
│    & Transit Welfare     │  and on the campus premises?"   │ on-site pediatrician bay, │
│                          │                                 │ GPS bus with female escort│
├──────────────────────────┼─────────────────────────────────┼───────────────────────────┤
│ 5. Academic Rigor        │ "Can a new school prepare kids  │ Dual Medium NCTB parity,  │
│    & Board Readiness     │  for competitive SSC exams?"    │ practical science labs,   │
│                          │                                 │ Olympiad coaching program.│
└──────────────────────────┴─────────────────────────────────┴───────────────────────────┘
```

---

## 2. Global Navigation & Persistent Shell Wireframe

The global shell provides continuous orientation, safety reassurance, and persistent admissions access without cluttering the mobile viewport.

### 2.1 Top Persistent Announcement Ribbon
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [BADGE: Pulsing Green Dot] ADMISSIONS OPEN 2026–2027 | Playgroup to Grade 9 (Limited)  │
│  [LINK: Book Campus Tour ->]              [ICON: Phone] Admissions Desk: +880 2 8954120│
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Wireframe Placeholders:**
  * `[BADGE: Pulsing Green Dot]` Live campaign activity indicator.
  * `[LINK: Book Campus Tour ->]` Anchor link jumping directly to the tour booking form.
  * `[ICON: Phone] +880 2 8954120` Direct tap-to-dial hotline for working parents on mobile.
* **UX Intent & Conversion Rationale:**  
  Establishes scarcity and active operations immediately upon page load. Caters to busy parents who want immediate phone contact without hunting through menus.
* **Interactive States:**
  * *Default:* Sticky top ribbon, subtle accent background.
  * *Mobile (<768px):* Collapses into a single marquee line: *"Admissions 2026–27 Open [Apply Now]"* with sticky phone icon in quick actions bar.

### 2.2 Primary Header & Navigation Bar
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO: FVA Shield + Crest] Future Vision Academy        [BADGE: EIIN 138421]           │
│                                                                                        │
│ [NAV: Home]  [NAV: Admissions (Badge: Open)]  [NAV: Academics]  [NAV: About]           │
│ [NAV: Notices]  [NAV: Contact]                                                         │
│                                                                                        │
│ [BUTTON: Schedule Tour (Outline)]            [BUTTON: Apply Online 2026-27 (Solid)]    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Wireframe Placeholders:**
  * `[LOGO: FVA Shield + Crest]` High-trust academic crest + typography.
  * `[BADGE: EIIN 138421]` Discrete government credential badge embedded right beside brand mark.
  * `[NAV: Admissions (Badge: Open)]` Contextual pill badge highlighting the admissions cycle.
  * `[BUTTON: Schedule Tour]` Secondary soft conversion CTA.
  * `[BUTTON: Apply Online]` Primary high-intent conversion CTA.
* **Interactive States:**
  * *Scroll State:* Shrinks padding from 20px to 12px; applies glassmorphism blur and subtle drop shadow.
  * *Mobile (<1024px):* Desktop menu hidden; replaces with `[BUTTON: Call]` + `[HAMBURGER TOGGLE]`. When tapped, opens full-height sliding drawer containing all navigation links, EIIN credential seal, and WhatsApp chat launcher.

### 2.3 Global High-Credibility Footer
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ COLUMN 1: ACADEMY PROFILE │ COLUMN 2: ACADEMICS   │ COLUMN 3: ADMISSIONS │ COLUMN 4: VISIT & DIRECT │
│ [LOGO + Motto]            │ • Early Years (PG-KG) │ • 5-Step Process     │ Plot 42, Sector 11,      │
│ EIIN: 138421              │ • Primary (Gr 1-5)    │ • Fee Calculator     │ Uttara Model Town, Dhaka │
│ Dhaka Board Registered    │ • Middle (Gr 6-8)     │ • Age Criteria       │ Tel: +880 2 8954120      │
│ NCTB Dual Medium          │ • Secondary (SSC)     │ • Document Checklist │ Email: info@fva.edu.bd   │
│ [BADGE: 100% CCTV Safe]   │ • STEM & Robotics     │ • Tour Booking       │ Sun-Thu: 8:00am - 4:00pm │
├───────────────────────────┴───────────────────────┴──────────────────────┴──────────────────────────┤
│ [LEGAL & ACCREDITATION BANNER]                                                                       │
│ © 2026 Future Vision Academy. Ministry of Education Recognized. Dhaka Board Code: 138421.          │
│ Child Protection & Anti-Bullying Protocol Enforced. Privacy Policy | Safeguarding Policy | Terms   │
└──────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
* **UX Intent:**  
  Assures parents at the very bottom of any page that the school operates transparently with recognized government compliance, clear physical address, and dedicated campus visiting hours.

---

## 3. Page 1: Homepage (`/`) — Conversion Hub & Trust Anchors

### 3.1 Structural Blueprint & Visual Flow
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 1.1 HERO BLOCK: Dual-Col Split (Emotional Promise + Trust Chips + Visual Media Grid)   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.2 CREDIBILITY COUNTER RIBBON: 6 Key Metrics (Ratio, Faculty, Labs, Safe Transit, etc)│
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.3 FOUR EDUCATIONAL PILLARS: Dual Medium, STEM Innovation, Moral Character, Athletics │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.4 ACADEMIC STAGES OVERVIEW: 4 Cards (Early Years, Primary, Middle, Secondary SSC)    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.5 WHY CHOOSE US (YEAR-2 ADVANTAGE): 6-Card Grid Addressing Every Parent Objection    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.6 CAMPUS LIFE MEDIA GALLERY: Tabbed Interactive Showcase (Classrooms, Labs, Arts)   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.7 LEADERSHIP & EDUCATOR PEDIGREE: Principal & Department Heads Profile Showcase      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.8 FOUNDING PARENT TESTIMONIALS: 3 Verified Parent Stories with Child's Grade Badges  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1.9 CONVERSION BANNER: "Limited Seats for Session 2026-2027" Dual Action Anchor        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Block-by-Block Wireframe Specification

#### Block 1.1: Hero Section (Split Visual Layout)
```
┌──────────────────────────────────────────────────────────┬─────────────────────────────┐
│ [BADGE: Admissions Open 2026–2027 • Limited Seats]        │ [PHOTO: Collaborative STEM  │
│                                                          │  Workbench with Robot Pod]  │
│ <h1>Nurturing Inquiring Minds,                           │                             │
│     Inspiring Confident Leaders</h1>                     │ [GLASS CHIP: 1:12 Ratio]    │
│                                                          │                             │
│ <p>Welcome to Future Vision Academy — an innovative K-12 │ [PHOTO: Young Students in   │
│  institution delivering the national NCTB curriculum in  │  Early Years Reading Nook]  │
│  English & Bangla with a guaranteed 1:12 teacher-student │                             │
│  ratio in a modern, purpose-built Uttara sanctuary.</p>  │ [GLASS CHIP: 100% Certified │
│                                                          │              Faculty]       │
│ [BUTTON: Apply for 2026–27 ->] [BUTTON: Schedule Tour]   │                             │
│                                                          │ [GLASS CHIP: EIIN 138421]   │
│ [CHIP: Ministry Approved]  [CHIP: Dual Medium Fluency]   │                             │
│ [CHIP: 1:12 Classroom Cap] [CHIP: Playgroup to Gr 10]   │                             │
└──────────────────────────────────────────────────────────┴─────────────────────────────┘
```
* **Wireframe Placeholders:**
  * `[BADGE: Admissions Open 2026–2027 • Limited Seats]` High-contrast accent pill badge.
  * `[PHOTO: Collaborative STEM Workbench]` High-res real photo of students assembling robotics sensors.
  * `[PHOTO: Early Years Reading Nook]` High-res photo of engaged children in a brightly lit learning space.
  * `[GLASS CHIP: 1:12 Ratio]` Floating backdrop-blur chip anchored over the image.
  * `[GLASS CHIP: 100% Certified Faculty]` Floating credential marker.
  * `[GLASS CHIP: EIIN 138421]` Formal regulatory registration tag.
* **UX Intent & Conversion Rationale:**  
  * *Primary Objection Dissolved:* "Is this just an ordinary coaching center or a real school?"  
  * *Mechanism:* The split layout pairs emotional parental aspiration (*"Inspiring Confident Leaders"*) with four concrete, factual rationales (*EIIN, 1:12 Ratio, Dual Medium, NCTB accreditation*). Immediate dual CTAs allow hot leads to apply and warming leads to book a campus walkthrough.
* **Interactive States:**
  * *Hover on Glass Chips:* Elevates `translateY(-3px)` with increased border illumination.
  * *Mobile Breakdown:* Stacks vertically; text appears first, followed by a consolidated 2-photo carousel, with persistent CTA buttons pinned to viewport bottom.

#### Block 1.2: Six Credibility Metric Counters
```
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ [ICON: Users]│ [ICON: Cert] │ [ICON: Cpu]  │ [ICON: Cup]  │ [ICON: Bus]  │ [ICON: Book] │
│ 1:12         │ 100%         │ Modern       │ 15+          │ GPS Safe     │ Dual Medium  │
│ Student-     │ Certified    │ STEM & Robot │ Co-Curricular│ Monitored    │ English &    │
│ Teacher Ratio│ Faculty      │ Suites       │ Clubs        │ Transit      │ Bangla NCTB  │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```
* **Wireframe Placeholders:**
  * 6 micro-cards featuring SVG line icons, bold quantitative metric headlines, and short sub-labels.
* **UX Intent & Conversion Rationale:**  
  * *Cognitive Ease & Skimmability:* Parents spend an average of 4.2 seconds scanning above the fold. A 6-stat bar delivers proof-points immediately without requiring reading dense paragraphs.

#### Block 1.3: Four Educational Pillars
```
┌───────────────────────────┬───────────────────────────┐
│ [CARD 1: Academic Rigor]   │ [CARD 2: STEM & Digital]  │
│ [ICON: BookOpen]          │ [ICON: Cpu]               │
│ Conceptual NCTB mastery,  │ Computational thinking,   │
│ bilingual English/Bangla  │ robotics hardware pods,   │
│ articulation.             │ early algorithmic logic.  │
├───────────────────────────┼───────────────────────────┤
│ [CARD 3: Character & Moral│ [CARD 4: Athletics & Arts]│
│ [ICON: Heart]             │ [ICON: Trophy]            │
│ Universal ethics, civic   │ Futsal turf, badminton,   │
│ empathy, cultural pride.  │ martial arts, debate.     │
└───────────────────────────┴───────────────────────────┘
```
* **UX Intent:**  
  Assures holistic balance. Dhaka parents fear schools that are either *too exam-obsessed (rote memorization)* or *too unstructured*. Demonstrating both academic rigor and character building strikes the ideal middle ground.

#### Block 1.4: Academic Stages Grid (Quick Pathing)
```
┌─────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
│ [PHOTO: Early Years]│ [PHOTO: Primary]    │ [PHOTO: Middle]     │ [PHOTO: Secondary]  │
│ [BADGE: Ages 2.5-5] │ [BADGE: Ages 6-10]  │ [BADGE: Ages 11-13] │ [BADGE: Ages 14-16] │
│ Early Years (PG-KG) │ Primary (Gr 1-5)    │ Middle School (6-8) │ Secondary SSC (9-10)│
│ Play-based inquiry, │ Foundational STEAM, │ Analytical science, │ National Board exam │
│ phonics, motor skills│ language & numeracy │ debate, coding labs │ rigor & lab mastery │
│ [LINK: Explore ->]  │ [LINK: Explore ->]  │ [LINK: Explore ->]  │ [LINK: Explore ->]  │
└─────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘
```
* **Interactive State:**  
  Clicking any card directs the user directly to `/academics?tier={stage}` with that specific tab pre-activated.

#### Block 1.5: The Year-2 Advantage (Parent Objection Dissolution)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Why Discerning Families Choose Future Vision Academy</h2>                          │
│ <p>Engineered from Day One to deliver international standards within the national      │
│    curriculum framework.</p>                                                           │
│                                                                                        │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐             │
│ │ [ICON: Users]        │ │ [ICON: Sparkles]     │ │ [ICON: ShieldCheck]  │             │
│ │ 1:12 Ratio Cap       │ │ Inquiry Pedagogy     │ │ Multi-Layer Safety   │             │
│ │ Guaranteed small     │ │ Discards rote cram   │ │ 128 CCTV cameras,    │             │
│ │ cohort where teachers│ │ for experiential,    │ │ biometric gates, full│             │
│ │ know your child.     │ │ project-based study. │ │ pediatric infirmary. │             │
│ └──────────────────────┘ └──────────────────────┘ └──────────────────────┘             │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐             │
│ │ [ICON: Clock]        │ │ [ICON: Bus]          │ │ [ICON: Award]        │             │
│ │ Transparent Portal   │ │ GPS School Transit   │ │ Year-2 Proven Trust  │             │
│ │ Real-time attendance,│ │ Fleet with live app  │ │ 98% re-enrollment    │             │
│ │ homework & teacher   │ │ tracking & verified  │ │ rate from founding   │             │
│ │ communication.       │ │ female attendants.   │ │ 2025 cohort.         │             │
│ └──────────────────────┘ └──────────────────────┘ └──────────────────────┘             │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **UX Intent & Conversion Rationale:**  
  Directly addresses: *Lack of attention in overcrowded schools*, *Cram culture*, *Physical security*, *Commute safety*, and *School viability*. Explicit mention of the **98% Year-1 retention rate** provides instant social proof that existing parents are delighted.

#### Block 1.6: Interactive Campus Life Gallery
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [TAB: All (12)] [TAB: Classrooms (3)] [TAB: STEM & Labs (3)] [TAB: Sports (3)] [Arts] │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐   │
│ │ [PHOTO: Science Wet Lab]│ │ [PHOTO: Robotics Pods]  │ │ [PHOTO: Library Commons]│   │
│ │ "Capacity: 32 Students" │ │ "Arduino Workstations"  │ │ "15,000+ Volume Library"│   │
│ └─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘   │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐   │
│ │ [PHOTO: Artificial Turf]│ │ [PHOTO: Art Studio]     │ │ [PHOTO: Music & Drama]  │   │
│ │ "Futsal & Sprint Track" │ │ "Creative Expression"   │ │ "Black Box Theater"     │   │
│ └─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Interactive State:**  
  * Tapping a category tab filters the photo cards with a smooth 200ms opacity transition.
  * Tapping any card opens a full-screen Lightbox Modal displaying high-resolution imagery, photo description, facility specifications, and a `[Schedule Campus Visit]` button.

#### Block 1.7: Leadership & Faculty Pedigree Spotlight
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Academic Leadership & Faculty Pedigree</h2>                                        │
│ ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐  │
│ │ [PORTRAIT: Dr. Tariqul]   │ │ [PORTRAIT: Dr. Nusrat]  │ │ [PORTRAIT: Shamima A.]  │  │
│ │ Dr. Tariqul Chowdhury     │ │ Dr. Nusrat Jahan        │ │ Shamima Akhter          │  │
│ │ Principal & Academic Head │ │ Head of STEM & Science  │ │ Head of Primary Years   │  │
│ │ [BADGE: Ph.D. Durham]     │ │ [BADGE: M.Sc. BUET]     │ │ [BADGE: M.Ed. Monash]   │  │
│ │ "24+ Yrs Leadership in    │ │ "Former Senior Lecturer,│ │ "Specialist in Early    │  │
│ │  International K-12"      │ │  Olympiad Team Trainer" │ │  Childhood Phonics"     │  │
│ └───────────────────────────┴───────────────────────────┴───────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **UX Intent & Conversion Rationale:**  
  * *Authority Bias:* Elite academic credentials (Ph.D. Durham, BUET, Monash) immediately reassure parents that the leadership has the pedigree to outperform older legacy schools.

#### Block 1.8: Founding Community Testimonials
```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [STARS: ★★★★★]            │ [STARS: ★★★★★]            │ [STARS: ★★★★★]            │
│ "The 1:12 ratio transformed│ "As a working mother, the │ "The dual medium approach │
│  my son's reading fluency. │  live GPS bus tracking and│  gives our daughter strong│
│  In one year, he went from │  female attendant give me │  English skills without   │
│  shy to class debater."    │  complete peace of mind." │  losing Bangla heritage." │
│                           │                           │                           │
│ [AVATAR] Engr. M. Rahman  │ [AVATAR] Dr. Samira Khan  │ [AVATAR] Kazi Tanvir      │
│ Parent of Grade 4 Student │ Parent of Playgroup Child │ Parent of Grade 7 Student │
│ Uttara Sector 4           │ Uttara Sector 9           │ Uttara Sector 11          │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```
* **UX Intent:**  
  Social proof grounded in relatable, prestigious professions (Engineer, Doctor, Professional) from nearby Uttara sectors proves that peers in their exact demographic trust the school.

#### Block 1.9: Conversion Banner
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Ready to Experience Future Vision Academy?</h2>                                    │
│ <p>Limited admissions open for 2026–2027 across Playgroup to Grade 9. Secure your      │
│    child's assessment slot today.</p>                                                  │
│ [BUTTON: Start Online Application ->]       [BUTTON: Schedule Campus Walkthrough]      │
│ [MICRO-COPY: "Zero application fee for online submissions • Assessment within 48 hrs"] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Page 2: Admissions Hub (`/admissions`) — 5-Step Journey, Fee Calculator & Verification

### 4.1 Structural Blueprint & Visual Flow
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 2.1 ADMISSIONS HERO & SESSION TRACKER: Intake Status, Deadlines, Limited Seat Urgency  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2.2 FIVE-STEP ADMISSIONS JOURNEY: Visual Step-by-Step Pathway with Deliverables        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2.3 AGE & GRADE PLACEMENT MATRIX: Playgroup to Grade 10 Minimum Age & Ratio Table      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2.4 INTERACTIVE TUITION & FEE CALCULATOR: Dynamic Tier, Siblings, Transport & Meals    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2.5 DOCUMENT CHECKLIST & DOWNLOAD CENTER: Pre-Primary vs Primary/Secondary Requisites   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2.6 INTEGRATED CAMPUS TOUR & INQUIRY FORM: 6-Field Fast Submission Form                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2.7 ADMISSIONS FAQ ACCORDION: Categorized Questions (Fees, Safety, Curriculum, Seat)  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Block-by-Block Wireframe Specification

#### Block 2.1: Admissions Hero & Session Tracker Bar
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [BADGE: Academic Year 2026–2027]                                                       │
│ <h1>Admissions & Enrollment Hub</h1>                                                  │
│ <p>A transparent, student-centered pathway designed to welcome your family into our     │
│    vibrant learning community. Zero hidden charges. Guaranteed 1:12 class ratios.</p>  │
│                                                                                        │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ SESSION 2026–2027 STATUS BAR                                                       │ │
│ │ • Phase 1 Admissions: ACTIVE   • Early Assessment Window: Nov 15 – Dec 10, 2026    │ │
│ │ • Class Orientation: Jan 10, 2027  • Current Capacity: 68% Filled Across All Tiers │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 2.2: The 5-Step Admissions Journey (Interactive Pathway)
```
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ STEP 01      │ STEP 02      │ STEP 03      │ STEP 04      │ STEP 05      │
│ [ICON: Eye]  │ [ICON: Form] │ [ICON: Brain]│ [ICON: Chat] │ [ICON: Badge]│
│ Discover &   │ Submit       │ Diagnostic   │ Parent &     │ Formal Seat  │
│ Tour Campus  │ Application  │ Readiness    │ Student Meet │ Acceptance   │
│              │ Dossier      │ Assessment   │ & Feedback   │ & Welcome    │
│ Walkthrough  │ Fill online  │ Play-based   │ 30-min dialog│ Offer letter │
│ with head of │ form or pick │ for Pre-Pri; │ with Head of │ issued in 48h│
│ admissions.  │ hardcopy pkg.│ math/eng test│ School.      │ + starter kit│
│ Deliverable: │ Deliverable: │ Deliverable: │ Deliverable: │ Deliverable: │
│ Prospectus   │ Tracking ID  │ Eval Report  │ Alignment OK │ Student ID   │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```
* **UX Intent & Conversion Rationale:**  
  Demystifies the enrollment process. Parents fear unpredictable assessments that intimidate children. Labeling Step 3 as *"Play-based diagnostic observation"* softens anxiety and positions the school as nurturing rather than punitive.

#### Block 2.3: Age Criteria & Grade Placement Matrix
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Age Criteria & Grade Placement Framework (Session 2026–2027)</h2>                  │
│ <p>Calculated as of 1st January 2027 in compliance with Ministry of Education rules.</p>│
│                                                                                        │
│ ┌──────────────┬──────────────────┬─────────────────┬───────────┬────────────────────┐ │
│ │ Grade Level  │ Age as of Jan 1  │ Available Medium│ Max Ratio │ Key Curricular Focus│ │
│ ├──────────────┼──────────────────┼─────────────────┼───────────┼────────────────────┤ │
│ │ Playgroup    │ 2.5 – 3.5 Years  │ Bilingual       │ 1:12 Cap  │ Sensory & Motor    │ │
│ │ Nursery      │ 3.5 – 4.5 Years  │ Bilingual       │ 1:12 Cap  │ Phonics & Numeracy │ │
│ │ Kindergarten │ 4.5 – 5.5 Years  │ English/Bangla  │ 1:12 Cap  │ Reading & Writing  │ │
│ │ Grade 1      │ 5.5 – 6.5 Years  │ English/Bangla  │ 1:15 Cap  │ NCTB Foundation    │ │
│ │ Grades 2 – 5 │ 6.5 – 10.5 Years │ English/Bangla  │ 1:15 Cap  │ STEAM & ICT Labs   │ │
│ │ Grades 6 – 8 │ 10.5 – 13.5 Years│ English/Bangla  │ 1:20 Cap  │ Sciences & Debate  │ │
│ │ Grades 9 – 10│ 13.5 – 16.0 Years│ Science/Business│ 1:20 Cap  │ SSC Board Prep     │ │
│ └──────────────┴──────────────────┴─────────────────┴───────────┴────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **UX Intent:**  
  Eliminates phone calls regarding age cut-offs. Gives parents clear validation on which exact class their child qualifies for.

#### Block 2.4: Interactive Tuition & Fee Calculator
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Interactive Tuition & Fee Calculator</h2>                                          │
│ <p>Total financial transparency. All academic materials, labs, and ICT fees included.   │
│    Zero hidden year-end levies.</p>                                                    │
│                                                                                        │
│ ┌──────────────────────────────────────────┬─────────────────────────────────────────┐ │
│ │ 1. SELECT GRADE TIER:                    │ YOUR ESTIMATED TUITION BREAKDOWN:       │ │
│ │ ( ) Pre-Primary (Playgroup, Nur, KG)     │                                         │ │
│ │ (*) Primary (Grades 1 – 5)               │ • Selected Tier: Primary (Grades 1 – 5) │ │
│ │ ( ) Middle & Secondary (Grades 6 – 10)   │ • Base Monthly Tuition:     ৳ 8,500/mo  │ │
│ │                                          │ • Sibling Discount (25%):   -৳ 2,125/mo │ │
│ │ 2. SIBLING ENROLLMENT STATUS:            │ • Monitored AC Bus (Zone 1):+৳ 3,000/mo │ │
│ │ [SELECT: Second Child (25% Discount)  v] │ • Hot Nutritious Lunch:     +৳ 2,200/mo │ │
│ │                                          │ ─────────────────────────────────────── │ │
│ │ 3. OPTIONAL SERVICES:                    │ NET MONTHLY INVESTMENT:    ৳ 11,575/mo │ │
│ │ [x] AC Bus Transport (Zone 1: Uttara)    │ Annual Admission Fee:       ৳ 35,000    │ │
│ │ [x] Nutritious Hot Lunch Program         │                                         │ │
│ │ [ ] After-School Robotics & Club Pass    │ [BADGE: 100% Zero Hidden Levies Pledge] │ │
│ │                                          │ [BUTTON: Lock In This Estimate & Apply] │ │
│ └──────────────────────────────────────────┴─────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Interactive States:**
  * Changing Grade Tier updates base tuition immediately (`৳6,500` -> `৳8,500` -> `৳10,500`).
  * Changing Sibling status dynamically deducts 25% (2nd child) or 40% (3rd child).
  * Toggling Transport or Meal checkboxes adds/removes line items with instant animated recalculation.
* **UX Intent & Conversion Rationale:**  
  * *Dissolves Skepticism:* Private schools in Dhaka are notorious for concealing charges until parents arrive at the counter. Full transparency builds immediate credibility and respect.

#### Block 2.5: Document Checklist & Download Center
```
┌─────────────────────────────────────────────┬──────────────────────────────────────────┐
│ [ICON: FolderCheck] REQUIRED DOCUMENTS      │ [ICON: Download] DOWNLOAD CENTER         │
│ • Child's Digital Birth Certificate (Bilingual│ [PDF ICON] 2026–27 Academic Prospectus    │
│ • 4 Recent Passport-size Photographs        │            (Complete curriculum & fees)  │
│ • Parents' NID / Passport Copies            │            [BUTTON: Download PDF (4.2MB)]│
│ • Previous 2 Years' Academic Report Cards   │                                          │
│   (For Grade 2 onwards)                     │ [PDF ICON] Printable Application Form    │
│ • Transfer Certificate / TC (Upon admission)│            (For offline desk submission) │
│ • Child's Immunization / Blood Group Record │            [BUTTON: Download PDF (1.1MB)]│
└─────────────────────────────────────────────┴──────────────────────────────────────────┘
```

#### Block 2.6: Campus Tour Booking & Direct Inquiry Form
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Schedule a Personalized Campus Tour</h2>                                           │
│ ┌─────────────────────────────────────────┬──────────────────────────────────────────┐ │
│ │ Parent Full Name: [TextInput          ] │ Phone Number: [TextInput (+880...)     ] │ │
│ ├─────────────────────────────────────────┼──────────────────────────────────────────┤ │
│ │ Email Address:   [TextInput           ] │ Child's Age:  [TextInput (e.g. 5 yrs)  ] │ │
│ ├─────────────────────────────────────────┼──────────────────────────────────────────┤ │
│ │ Applying For:    [SELECT: Grade 1    v] │ Medium:       [SELECT: English Version v]│ │
│ ├─────────────────────────────────────────┼──────────────────────────────────────────┤ │
│ │ Preferred Tour Date: [DatePicker      ] │ Preferred Time Slot: [SELECT: 10:00 AM v]│ │
│ ├─────────────────────────────────────────┴──────────────────────────────────────────┤ │
│ │ Specific Questions or Special Learning Needs:                                      │ │
│ │ [TextArea: Tell us about your child's interests or questions...                  ] │ │
│ ├────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ [BUTTON: Confirm Tour Appointment (Instant SMS Confirmation Sent)]                 │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 2.7: Admissions FAQ Accordion
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Frequently Asked Questions Regarding Admissions</h2>                              │
│                                                                                        │
│ [v] Is the school officially registered with the Dhaka Education Board?                │
│     Yes. Future Vision Academy is fully recognized under EIIN 138421. All students are  │
│     formally registered with the Board for primary, junior, and SSC examinations.      │
│                                                                                        │
│ [>] What is the difference between English Version and English Medium?                 │
│ [>] Does the school offer a sibling discount?                                          │
│ [>] What safety protocols are followed in the school bus transit service?              │
│ [>] How are children evaluated during the admissions assessment?                       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Interactive State:**  
  Clicking a question expands the panel with an animated accordion disclosure (`aria-expanded="true"`), auto-collapsing neighboring accordions.

---

## 5. Page 3: Academics & Pedagogy (`/academics`) — Stage Tiers, STEM Labs & Co-Curriculars

### 5.1 Structural Blueprint & Visual Flow
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 3.1 ACADEMICS HERO: Dual Medium Framework, Conceptual Inquiry, Excellence Principles   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3.2 DYNAMIC STAGE TIERS SWITCHER: 4 Tabs (Early Years, Primary, Middle, Secondary SSC) │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3.3 DUAL MEDIUM COMPARISON MATRIX: English Version vs. Bangla Medium Alignment         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3.4 PURPOSE-BUILT STEM & INNOVATION SUITE: Robotics, Arduino, Wet Labs, Coding Pods    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3.5 SIX PURPOSE-BUILT CAMPUS FACILITIES: Science Lab, Library, Turf, Studio, Cafeteria │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3.6 CO-CURRICULAR & CHARACTER CLUBS: Debating, Robotics, Sports, Ethics, Olympiads     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3.7 ASSESSMENT & CONTINUOUS FEEDBACK PHILOSOPHY: Diagnostic over High-Stakes Cramming  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Block-by-Block Wireframe Specification

#### Block 3.1: Academics Hero
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [BADGE: Comprehensive NCTB Curriculum • Bilingual Mastery]                             │
│ <h1>Academics, Inquiry & Scientific Discovery</h1>                                     │
│ <p>Cultivating critical thinking, bilingual fluency, and technological literacy from    │
│    Playgroup to Secondary School Certificate (SSC). Small classes, master educators.</p>│
│                                                                                        │
│ [CHIP: 1:12 Early Ratio]  [CHIP: Dual Medium Tracks]  [CHIP: Integrated STEM Labs]     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 3.2: Interactive Academic Stage Tiers Switcher
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [TAB: Early Years (PG-KG)] [TAB*: Primary (Gr 1-5)] [TAB: Middle (6-8)] [TAB: Secondary]
├────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────┬─────────────────────────────────────────┐ │
│ │ PRIMARY SCHOOL (GRADES 1 – 5)            │ [PHOTO: Primary Science Students        │ │
│ │ [BADGE: Ages 6 – 10 Yrs] [RATIO: 1:15 Cap│         Conducting Magnetism Experiment]│ │
│ │                                          │                                         │ │
│ │ KEY LEARNING OUTCOMES:                   │ FACILITY HIGHLIGHT:                     │ │
│ │ • Conceptual Mathematics & Problem-      │ • Access to Junior Science Discovery Lab│ │
│ │   Solving frameworks (Singapore model).  │ • Dedicated Library reading circle hour │ │
│ │ • Bilingual Reading Fluency in both      │ • 45-min weekly Scratch coding workshop │ │
│ │   English and Bangla literature.         │                                         │ │
│ │ • Environmental Studies & Hands-on       │ ASSESSMENT MODEL:                       │ │
│ │   Junior Science investigations.         │ • Continuous weekly formative feedback  │ │
│ │ • ICT & Beginner Scratch block coding.   │ • Zero high-stress rote exams           │ │
│ │                                          │                                         │ │
│ │ [BUTTON: View Grade 1-5 Booklist ->]     │ [BUTTON: Book Primary Campus Visit ->]  │ │
│ └──────────────────────────────────────────┴─────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Interactive State:**  
  Selecting a tab changes content dynamically without full page reload. Supports keyboard arrow navigation (`role="tablist"`). Deep-linking supported via URL hash (`/academics#middle`).

#### Block 3.3: Dual Medium Pedagogical Comparison Matrix
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Dual Medium Academic Structure: Side-by-Side Comparison</h2>                       │
│                                                                                        │
│ ┌───────────────────────────┬─────────────────────────────┬──────────────────────────┐ │
│ │ Feature                   │ English Version Stream      │ Bangla Medium Stream     │ │
│ ├───────────────────────────┼─────────────────────────────┼──────────────────────────┤ │
│ │ Curriculum Framework      │ National NCTB Curriculum    │ National NCTB Curriculum │ │
│ │ Medium of Instruction     │ 100% English (Bangla subj)  │ 100% Bangla (Eng subj)   │ │
│ │ National Board Exam       │ SSC in English Version      │ SSC in Bangla Medium     │ │
│ │ Global University Parity  │ Exceptional TOEFL/IELTS ease│ Direct National Tertiary │ │
│ │ Cultural Grounding        │ Rich Bangladeshi heritage   │ Deep Bengali literature  │ │
│ └───────────────────────────┴─────────────────────────────┴──────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **UX Intent:**  
  Resolves parent confusion. Many parents want the English language advantage of English Medium schools but desire the recognized national board validation and reasonable tuition of the NCTB curriculum.

#### Block 3.4: Purpose-Built STEM & Innovation Suite Spotlight
```
┌──────────────────────────────────────────────────────────┬─────────────────────────────┐
│ <h2>STEM Innovation Suite & MakerLab</h2>                 │ [PHOTO: Student Assembling  │
│ <p>We prepare learners for the algorithmic world not by  │         Arduino Sensor Pod] │
│    talking about technology, but by building it.</p>     │                             │
│                                                          │ [CAPTION: 28 Hardware Pods, │
│ • 28 Dedicated Hardware Dev Pods (Arduino, micro:bit)    │  3D Printers, Soldering Bay]│
│ • Hands-on Python & Scratch algorithmic thinking courses │                             │
│ • Inter-School Robotics & Olympiad preparation cohort    │ [BADGE: National Olympiad   │
│ • Fully ventilated Wet & Dry chemistry/physics benches   │         Training Center]    │
└──────────────────────────────────────────────────────────┴─────────────────────────────┘
```

#### Block 3.5: Six Purpose-Built Campus Facilities
```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [PHOTO: Science Wet Lab]  │ [PHOTO: Robotics Pods]    │ [PHOTO: Library Commons]  │
│ Science Wet Laboratory    │ Robotics & Coding Suite   │ Knowledge Commons         │
│ Cap: 32 | Wet workstations│ Cap: 28 | IoT dev pods    │ Cap: 120 | 15k+ volumes   │
├───────────────────────────┼───────────────────────────┼───────────────────────────┤
│ [PHOTO: Athletic Turf]    │ [PHOTO: Black Box Theater]│ [PHOTO: Cafeteria Lounge] │
│ Artificial Futsal Turf    │ Performing Arts Studio    │ Hygiene Dining Commons    │
│ FIFA-grade | 200m track   │ Cap: 250 | Pro acoustics  │ Safe hot meals, UV sterile│
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

#### Block 3.6: Co-Curricular & Character Clubs
```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [ICON: MessageSquare]     │ [ICON: BrainCircuit]      │ [ICON: Trophy]            │
│ Debating Club             │ Robotics & Coding Club    │ Sports & Athletics Club   │
│ Bilingual rhetoric & logic│ Arduino, Python, hardware │ Futsal, cricket, track    │
├───────────────────────────┼───────────────────────────┼───────────────────────────┤
│ [ICON: Palette]           │ [ICON: HeartHandshake]    │ [ICON: Award]             │
│ Art, Drama & Culture      │ Quran & Universal Ethics  │ Math & Science Olympiads  │
│ Fine arts, stage theater  │ Tajweed, civic values     │ Junior Olympiad circles   │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

---

## 6. Page 4: About Us (`/about`) — Leadership, Safeguarding Charter & Institutional Pedigree

### 6.1 Structural Blueprint & Visual Flow
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 4.1 ABOUT HERO: Institutional Mission, Uttara Campus Purpose, Founding Principles     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4.2 FOUNDER & PRINCIPAL VISION LETTER: Dr. Tariqul Chowdhury Letter + Portrait         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4.3 MISSION, VISION & CORE VALUES QUADRANT: Integrity, Curiosity, Respect, Excellence  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4.4 INSTITUTIONAL LEGITIMACY & EIIN ANCHOR: EIIN 138421, Dhaka Board Accreditation     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4.5 CAMPUS SAFEGUARDING & WELFARE CHARTER: 24/7 CCTV, Pediatric Bay, GPS Bus Fleet     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4.6 YEAR 1 MILESTONES TO YEAR 2 EXPANSION: Interactive Visual Growth Timeline          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4.7 SENIOR ACADEMIC LEADERSHIP TEAM: Pedigree Profiles with Direct Email Access        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Block-by-Block Wireframe Specification

#### Block 4.1: About Hero
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [BADGE: Purpose-Built K-12 Academy • Uttara Sector 11]                                 │
│ <h1>A Sanctuary of Learning, Character & Discovery</h1>                                │
│ <p>Established to redefine education in Dhaka through unyielding academic standards,    │
│    modern experiential learning, and child-first safeguarding infrastructure.</p>      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 4.2: Founder & Principal Vision Letter
```
┌──────────────────────────────────────────────────────────┬─────────────────────────────┐
│ <h2>A Message from Our Principal</h2>                     │ [PORTRAIT: Dr. Tariqul      │
│                                                          │  Islam Chowdhury, Ph.D.]    │
│ "Dear Parents and Guardians,                             │                             │
│ When we laid the cornerstone of Future Vision Academy, we│ [BADGE: 24+ Yrs Experience] │
│ envisioned an institution where education is not an      │                             │
│ assembly line of memorization, but an awakening of       │ [BADGE: Ph.D. Durham Univ.] │
│ curiosity. In our second year, as we expand into Phase 2,│                             │
│ our promise remains unbreakable: every single child is   │ [CALLOUT QUOTE:             │
│ known, nurtured, and championed."                        │ "Every child has a spark of │
│                                                          │  genius that blooms with    │
│ [SIGNATURE: Dr. Tariqul Islam Chowdhury]                 │  individualized care."]     │
│ Principal & Managing Director, Future Vision Academy     │                             │
└──────────────────────────────────────────────────────────┴─────────────────────────────┘
```
* **UX Intent & Conversion Rationale:**  
  * *Humanizing the Institution:* Parents don't trust faceless corporations. A signed letter from a credible leader with an elite international doctorate builds immense personal trust.

#### Block 4.3: Mission, Vision & Core Values Quadrant
```
┌───────────────────────────┬───────────────────────────┐
│ [ICON: ShieldCheck]       │ [ICON: Sparkles]          │
│ INTEGRITY                 │ CURIOSITY                 │
│ Uncompromising honesty,   │ Nurturing an insatiable   │
│ ethical responsibility,   │ hunger for exploration    │
│ and moral courage.        │ and inquiry.              │
├───────────────────────────┼───────────────────────────┤
│ [ICON: Heart]             │ [ICON: Award]             │
│ RESPECT                   │ EXCELLENCE                │
│ Empathy, cultural pride,  │ Striving for personal best│
│ and honoring individual   │ in academics, sports, and │
│ human dignity.            │ creative expression.      │
└───────────────────────────┴───────────────────────────┘
```

#### Block 4.4: Institutional Legitimacy & Accreditation Anchor
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Government Recognition & Institutional Accreditation</h2>                          │
│                                                                                        │
│ ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐  │
│ │ [ICON: Building]          │ │ [ICON: FileCheck]         │ │ [ICON: Award]             │  │
│ │ EIIN CODE: 138421         │ │ Dhaka Education Board   │ │ NCTB Approved Syllabus  │  │
│ │ Officially assigned by    │ │ Fully registered for    │ │ Dual medium curriculum  │  │
│ │ Ministry of Education     │ │ Primary, JSC & SSC      │ │ compliant with all      │  │
│ │ for national exams.       │ │ candidate enrollments.  │ │ national standards.     │  │
│ └───────────────────────────┴───────────────────────────┴───────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **UX Intent:**  
  * *Directly kills the "Is it fake?" objection:* Displaying the official EIIN Code prominently provides immediate administrative legitimacy.

#### Block 4.5: Campus Safeguarding Charter (Tri-Pillar Safety Architecture)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Our Child Safeguarding & Safety Infrastructure</h2>                                │
│                                                                                        │
│ ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐  │
│ │ [PHOTO: CCTV Center]      │ │ [PHOTO: Pediatric Bay]    │ │ [PHOTO: GPS Bus Fleet]    │  │
│ │ 24/7 CCTV & Security      │ │ Pediatric Health Suite  │ │ GPS-Monitored Transit   │  │
│ │ • 128 Full-HD IP Cameras  │ │ • Attending Doctor/Nurse│ │ • Live GPS speed alerts │  │
│ │ • Biometric gate access   │ │ • Oxygen & AED ready    │ │ • Female bus attendant  │  │
│ │ • Zero campus blind spots │ │ • Annual health checkup │ │ • Door-to-door escort   │  │
│ └───────────────────────────┴───────────────────────────┴───────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 4.6: Year-1 Milestones to Year-2 Expansion Timeline
```
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ JAN 2025     │ JUN 2025     │ NOV 2025     │ JAN 2026     │ OCT 2026     │
│ Inaugural    │ STEM Lab &   │ Inter-School │ 98% Parent   │ Phase 2 Wing │
│ Campus       │ Robotics     │ Junior Debate│ Retention    │ & Admissions │
│ Opening      │ Unveiling    │ Champions    │ & Re-enroll  │ for 2026-27  │
│ 120 founding │ 28 developer │ Defeated 12  │ Highest trust│ Adding 8 new │
│ scholars.    │ pods online. │ academies.   │ rate in zone.│ smart labs.  │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```
* **UX Intent:**  
  Chronicles real, verified momentum. Proves that Year 1 was an enormous triumph, giving Year 2 applicants total confidence in institutional durability.

#### Block 4.7: Senior Department Heads Showcase
```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [PORTRAIT: Dr. Nusrat]    │ [PORTRAIT: Shamima A.]    │ [PORTRAIT: Faruk Hasan]   │
│ Dr. Nusrat Jahan          │ Shamima Akhter            │ Faruk Hasan               │
│ Head of STEM & Sciences   │ Head of Primary Years     │ Head of Pastoral Care     │
│ M.Sc. BUET                │ M.Ed. Monash University   │ M.A. University of Sydney │
│ [BUTTON: Email Faculty]   │ [BUTTON: Email Faculty]   │ [BUTTON: Email Faculty]   │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

---

## 7. Page 5: Contact & Campus Visit (`/contact`) — Tour Booking, Transit Guide & Direct Hotline

### 7.1 Structural Blueprint & Visual Flow
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 5.1 CONTACT HERO: Welcoming Invitation, Urgent Admissions Office Help Desk Hours       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 5.2 DUAL-COLUMN CONVERSION CORE: Direct Tour Booking Form + Contact Directory Cards    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 5.3 CAMPUS LOCATION & INTERACTIVE MAP: Embedded Map Container, GPS Pin, Directions CTA  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 5.4 OFFICE & VISITING HOURS SCHEDULE: Weekday, Weekend & Admissions Desk Special Times │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 5.5 TRANSIT & COMMUTER GUIDE: Metro Rail, School Bus Routes, Driving & Drop-off Rules  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Block-by-Block Wireframe Specification

#### Block 5.1: Contact Hero
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [BADGE: We Are Here to Assist Your Family]                                             │
│ <h1>Connect with Future Vision Academy</h1>                                            │
│ <p>Whether you wish to schedule a personal campus walkthrough, inquire about our dual   │
│    medium streams, or meet with our academic team, we welcome your visit.</p>          │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 5.2: Dual-Column Conversion Core (Tour Booking Form + Direct Directory)
```
┌──────────────────────────────────────────────────────────┬─────────────────────────────┐
│ [FORM: Schedule a Campus Tour & Consultation]            │ [DIRECTORY CARDS]           │
│                                                          │                             │
│ Parent/Guardian Name: *                                  │ [CARD 1: Admissions Desk]   │
│ [TextInput: e.g. Dr. Kazi Tanvir Ahmed                ]  │ Tel: +880 2 8954120         │
│                                                          │ Mobile: +880 1711 000000    │
│ Mobile Number: *                                         │ admissions@fva.edu.bd       │
│ [TextInput: +880 17XXXXXXXX                          ]  │                             │
│                                                          │ [CARD 2: Principal's Office]│
│ Email Address: *                                         │ principal@fva.edu.bd        │
│ [TextInput: parent@example.com                        ]  │ By prior appointment only   │
│                                                          │                             │
│ Grade Level Applying For: *                              │ [CARD 3: Accounts & Fees]   │
│ [SELECT: Select Grade Level (Playgroup to Gr 10)     v]  │ accounts@fva.edu.bd         │
│                                                          │                             │
│ Curriculum Preference:                                   │ [CARD 4: Transport Hotline] │
│ (*) English Version     ( ) Bangla Medium                │ transport@fva.edu.bd        │
│                                                          │                             │
│ Preferred Visit Date:       Preferred Time Slot:         │ [BADGE: Instant Response    │
│ [DatePicker: YYYY-MM-DD  ]  [SELECT: 10:00 AM – 11:30AM] │         Within 4 Hours]     │
│                                                          │                             │
│ Special Questions / Inquiry:                             │                             │
│ [TextArea: How can our academic counselors assist?    ]  │                             │
│                                                          │                             │
│ [BUTTON: Confirm Campus Visit Appointment ->]            │                             │
└──────────────────────────────────────────────────────────┴─────────────────────────────┘
```
* **Interactive States:**
  * *Client-Side Validation:* If phone or required fields are omitted, highlights field in red with assistive error text (`"Please enter a valid 11-digit phone number"`).
  * *Submitting State:* Disables submit button and shows animated spinner (`"Confirming Appointment..."`).
  * *Success State:* Replaces form box with a celebratory confirmation card displaying the appointment tracking number, calendar download link (.ics), and Google Maps pin link.

#### Block 5.3: Campus Location & Interactive Map
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Campus Location & Navigation</h2>                                                  │
│ <p>Plot 42, Sector 11, Uttara Model Town, Dhaka-1230 (Near Sonargaon Janapath)</p>     │
│                                                                                        │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ [MAP EMBED: High-Resolution Styled Map Container with Custom School Pin]           │ │
│ │                                                                                    │ │
│ │ [FLOATING CARD OVER MAP: "Future Vision Academy Campus"]                           │ │
│ │ Plot 42, Road 18, Sector 11, Uttara | [BUTTON: Open in Google Maps ->]             │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 5.4: Office & Visiting Hours Schedule
```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [ICON: Calendar]          │ [ICON: Clock]             │ [ICON: ShieldCheck]       │
│ ACADEMIC CLASS HOURS      │ ADMISSIONS OFFICE HOURS   │ CAMPUS TOUR SLOTS         │
│ Sun – Thu: 8:00am – 2:30pm│ Sun – Thu: 8:00am – 4:30pm│ Morning: 9:30am – 11:00am │
│ Friday: Closed            │ Saturday: 9:00am – 3:00pm │ Afternoon: 1:00pm – 2:30pm│
│ Saturday: Co-Curriculars  │ Friday: Closed            │ (Pre-booking recommended) │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

#### Block 5.5: Transit & Commuter Accessibility Guide
```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ [ICON: Train]             │ [ICON: Bus]               │ [ICON: Car]               │
│ METRO RAIL (MRT-6)        │ DEDICATED BUS SERVICE     │ PRIVATE DROP-OFF & PARKING│
│ 7 minutes from Uttara     │ Safe AC transit routes    │ Dedicated parent parking  │
│ North Metro Station.      │ covering Uttara, Tongi,   │ bay inside security gate. │
│ Dedicated shuttle linking │ Khilkhet, Bashundhara,    │ 15-min express drop-off   │
│ station to campus gates.  │ and Mirpur DOHS.          │ lane during peak hours.   │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```
* **UX Intent:**  
  Dhaka traffic is one of the top reasons parents reject school admissions. Demonstrating convenient access via the MRT-6 Metro Rail and dedicated school bus routes eliminates transit friction immediately.

---

## 8. Page 6: Notices & Circulars (`/notices`) — Filterable Circulars, Urgent Banners & Academic Calendar

### 8.1 Structural Blueprint & Visual Flow
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 6.1 NOTICES HERO: Official Academy Gazette & Live Notice Dispatch Hub                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6.2 HIGH-PRIORITY ADMISSIONS ALERT BANNER: Pinned Mandatory Circular with CTA          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6.3 REAL-TIME SEARCH & CATEGORY FILTER BAR: All, Admissions, Academic, Recess, Events  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6.4 NOTICE CARDS FEED: Split-Date Badges, Category Chips, Summary & PDF Downloads      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6.5 NOTICE DETAIL MODAL: In-browser Reading Drawer for Instant Inspection              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6.6 ACADEMIC CALENDAR & KEY DATES MATRIX: Term Schedules, Assessments & Holidays       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6.7 CIRCULAR NOTIFICATION SUBSCRIPTION: Instant WhatsApp & Email Circular Alerts       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Block-by-Block Wireframe Specification

#### Block 6.1: Notices Hero
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [BADGE: Official Academy Gazette]                                                      │
│ <h1>Notices, Circulars & Academic Updates</h1>                                         │
│ <p>Official communications, examination routines, admissions deadlines, and administrative│
│    circulars for current and prospective academy families.</p>                         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 6.2: High-Priority Admissions Alert Banner
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [ALERT ICON: Pulsing Amber Warning] URGENT ADMISSIONS CIRCULAR                         │
│ Admissions Open for Academic Year 2026–2027: Playgroup to Grade 9                      │
│ Evaluation test sessions commence November 15. Ensure early registration to guarantee   │
│ assessment seat preference.                                                            │
│ [BUTTON: View Admissions Guidelines ->]        [BUTTON: Download Circular PDF (340 KB)]│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 6.3: Search & Category Filter Toolbar
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [SEARCH INPUT: [Search notices by keyword or reference ID...            ] [ICON: Lens]]│
│                                                                                        │
│ [PILL*: All Notices (8)] [PILL: Admissions (2)] [PILL: Academic (3)]                  │
│ [PILL: Administrative (2)] [PILL: Events & Sports (1)]                                 │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Interactive State:**  
  * Real-time client-side keyword search filters notices on keystroke without lag.
  * Tapping any category pill updates the active filter, resetting search query if desired.

#### Block 6.4: Notice Cards Feed
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ┌────────────┬───────────────────────────────────────────────────────────────────────┐ │
│ │ 28         │ [BADGE: Admissions] [BADGE: Urgent]                                   │ │
│ │ OCT 2026   │ Admissions Open for Academic Year 2026–2027: Playgroup to Grade 9     │ │
│ │ Ref: AD-01 │ Application guidelines, prospectus, seat matrix, and admission test   │ │
│ │            │ schedule for upcoming session. [Size: 340 KB]                         │ │
│ │            │ [BUTTON: Read Online]              [BUTTON: Download Official PDF]    │ │
│ ├────────────┼───────────────────────────────────────────────────────────────────────┤ │
│ │ 24         │ [BADGE: Academic]                                                     │ │
│ │ OCT 2026   │ Mid-Term Examination Routine & Subject-wise Syllabus Guidelines (1-8) │ │
│ │ Ref: AC-04 │ Detailed timetable, room allocation, question formats, and practicals.│ │
│ │            │ [Size: 512 KB]                                                        │ │
│ │            │ [BUTTON: Read Online]              [BUTTON: Download Official PDF]    │ │
│ ├────────────┼───────────────────────────────────────────────────────────────────────┤ │
│ │ 18         │ [BADGE: Administrative]                                               │ │
│ │ OCT 2026   │ Circular: National Holiday & Winter Recess Academic Schedule          │ │
│ │ Ref: ADM-09│ Official notification regarding school holidays and office hours.     │ │
│ │            │ [Size: 180 KB]                                                        │ │
│ │            │ [BUTTON: Read Online]              [BUTTON: Download Official PDF]    │ │
│ └────────────┴───────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Wireframe Placeholders:**
  * High-visibility **Split Date Badge** on the left with prominent day numerals, abbreviated month, and reference code.
  * Color-coded category tags (Admissions = Amber, Academic = Blue, Administrative = Slate, Urgent = Red).
  * Direct PDF download CTA with file size metadata.

#### Block 6.5: Notice Detail Modal / Drawer
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [MODAL OVERLAY (Backdrop Blur)]                                                        │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ NOTICE REF: AD-01 | DATE: 28 OCTOBER 2026                              [BUTTON: X] │ │
│ │ <h3>Admissions Open for Academic Year 2026–2027: Playgroup to Grade 9</h3>         │ │
│ │ [BADGE: Admissions] [BADGE: Urgent]                                                │ │
│ │                                                                                    │ │
│ │ <div>                                                                              │ │
│ │   <p>Future Vision Academy announces the commencement of student admissions...</p> │ │
│ │   <h4>Important Milestones:</h4>                                                   │ │
│ │   <ul>                                                                             │ │
│ │     <li>Application Submission Opens: October 28, 2026</li>                        │ │
│ │     <li>Phase 1 Diagnostic Assessment: November 15, 2026</li>                      │ │
│ │     <li>Results & Seat Allocation: Within 48 Hours</li>                            │ │
│ │   </ul>                                                                            │ │
│ │ </div>                                                                             │ │
│ │                                                                                    │ │
│ │ [BUTTON: Download PDF Document]             [BUTTON: Go to Admissions Hub]         │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
* **Interactive State:**  
  Clicking *"Read Online"* launches this accessible modal (`role="dialog"`, trap focus, Esc key closes). Eliminates the need to download PDFs on mobile devices with limited storage.

#### Block 6.6: Integrated Academic Calendar & Key Dates Matrix
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ <h2>Academic Calendar Highlights (2026–2027)</h2>                                     │
│                                                                                        │
│ ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐  │
│ │ FIRST TERM (JAN – APR)    │ SECOND TERM (MAY – AUG)   │ FINAL TERM (SEP – DEC)    │  │
│ • Jan 10: New Session Starts│ • May 04: Term 2 Resumes  │ • Sep 01: Final Term Starts│  │
│ • Feb 21: Mother Language   │ • Jun 15: Half-Yearly Exam│ • Oct 12: Science & STEM  │  │
│ • Mar 26: Independence Day │ • Jul 01: Summer Break    │ • Nov 20: Annual Exam Prep│  │
│ • Apr 14: Pahela Baishakh   │ • Aug 15: National Day    │ • Dec 15: Result Carnival │  │
│ └───────────────────────────┴───────────────────────────┴───────────────────────────┘  │
│ [BUTTON: Download Complete 2026–27 Academic Calendar PDF (Single Sheet)]               │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Block 6.7: Circular Subscription / Instant Notification Form
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [ICON: Bell] Never Miss an Academic Notice or Admissions Update                        │
│ Get official circulars delivered directly to your WhatsApp or Email inbox.             │
│ [INPUT: Enter Parent Mobile or Email...]          [BUTTON: Subscribe to Alerts ->]     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Component State Standards & Responsive Touch Ergonomics

### 9.1 Interactive State Standards Matrix
All wireframe components adhere to rigorous accessibility and ergonomic state variations:

```
┌──────────────┬──────────────────┬─────────────────┬─────────────────┬──────────────────┐
│ Component    │ Default State    │ Hover / Focus   │ Active / Tap    │ Disabled / Error │
├──────────────┼──────────────────┼─────────────────┼─────────────────┼──────────────────┤
│ Primary CTA  │ Solid Navy/Gold  │ Scale 1.02      │ Scale 0.98      │ Opacity 0.5      │
│ Button       │ 12px Radius      │ Glow border     │ Deep shadow     │ Cursor not-allow │
├──────────────┼──────────────────┼─────────────────┼─────────────────┼──────────────────┤
│ Form Text    │ Neutral 1px line │ Gold 2px ring   │ Filled typed    │ Red 2px ring     │
│ Input        │ Clear placeholder│ Elevate shadow  │ text state      │ Error label under│
├──────────────┼──────────────────┼─────────────────┼─────────────────┼──────────────────┤
│ Fee Slider / │ Slate card       │ Border glow     │ Instant numeric │ Loading pulse    │
│ Checkbox     │ Checkbox uncheck │ Hover background│ recalculation   │ during API sync  │
├──────────────┼──────────────────┼─────────────────┼─────────────────┼──────────────────┤
│ Tab Pill     │ Subtle background│ Text highlights │ Solid Gold pill │ None             │
│ Switcher     │ Slate text       │ Cursor pointer  │ White bold text │                  │
├──────────────┼──────────────────┼─────────────────┼─────────────────┼──────────────────┤
│ Accordion    │ Single line row  │ Icon moves down │ Expands 250ms   │ None             │
│ Header       │ Chevron right    │ Background soft │ Chevron 180° rot│                  │
└──────────────┴──────────────────┴─────────────────┴─────────────────┴──────────────────┘
```

### 9.2 Mobile Ergonomics & Breakpoint Rules
1. **The 44px Minimum Touch Target Rule:** All buttons, accordion headers, category pills, and form fields possess a minimum clickable height of `48px` on screens `<768px` to prevent mis-clicks.
2. **Sticky Mobile Conversion Anchor:** On mobile viewports, when scrolling past the Hero section, a bottom floating bar appears containing:
   `[ICON: Phone] +880 2 8954120` and `[BUTTON: Book Tour]`. This guarantees instant conversion without requiring the user to scroll back up.
3. **No Horizontal Scroll Tables on Mobile:** The Age/Grade Placement table and Fee breakdowns adapt into collapsible stacked cards on screens narrower than `640px`.

---

## 10. Summary Verification

This specification provides the engineering and design teams with:
* Exact block placement for all 6 core pages
* Clear visual wireframe representations
* Concrete visual placeholders for photography, icons, and interactive elements
* Psychological conversion rationales dissolving 2nd-year school anxieties
* Complete interactive state definitions for forms, calculators, tabs, and modals

*Architectural specification authored for Future Vision Academy digital engineering squad.*
