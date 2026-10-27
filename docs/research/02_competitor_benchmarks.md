# 02. Competitor Benchmarks & Feature Audit

## 1. Overview of Competitor Landscape

To position **Future Vision Academy** as a leader, we evaluated top institutional websites across both the national curriculum (Bangla & English Version) and private international sectors in Dhaka.

---

## 2. Benchmark Institutions Analyzed

### Benchmark A: RAJUK Uttara Model College
- **Website Profile:** High-volume institutional portal.
- **Key Features:**
  - Fast notice carousel and prominent daily circulars.
  - Integration with national lottery lists and class routines.
  - Dedicated student/parent ERP portal for roll number results lookup.
- **Weaknesses:**
  - Visual layout is outdated, cluttered with dense tables, and lacks responsive breathing room on modern mobile devices.
  - Lacks clear emotional storytelling, hero branding, and modern visual design.

### Benchmark B: South Point School & College
- **Website Profile:** Highly successful multi-campus English Version and English Medium institution.
- **Key Features:**
  - Multi-campus navigation (Baridhara, Malibagh, Mirpur, Uttara, Banani).
  - Online admission registration link with downloadable PDF prospectus.
  - Clear curriculum explanations comparing English Version and English Medium.
- **Weaknesses:**
  - Clunky third-party form redirects; admission application is not fully embedded in the site.
  - Slow asset loading times and generic stock photography.

### Benchmark C: Ideal School & College (Motijheel)
- **Website Profile:** One of Dhaka’s highest-enrollment academic institutions.
- **Key Features:**
  - Prominent online payment module and student admission tracking tab.
  - Notice board categorized by branch (Main, Mugda, Banasree).
  - Regular circulars regarding public board results.
- **Weaknesses:**
  - Server often buckles or shows 504 timeouts under peak traffic (e.g. admission release days).
  - Lacks SEO optimization and semantic accessibility.

### Benchmark D: Scholastica & International School Dhaka (ISD)
- **Website Profile:** Elite private English medium / IB benchmark.
- **Key Features:**
  - Modern, polished brand identity with storytelling videos and interactive campus virtual tours.
  - Frictionless inquiry form and clear admission criteria by age group.
  - Strong emphasis on co-curricular activities, robotics, sports, and university placement records.
- **Weaknesses:**
  - Extremely high barrier to entry; pricing not transparently listed.
  - International curriculum focus that doesn't cater directly to national curriculum (NCTB) aspirants.

---

## 3. Comparative Feature Matrix

| Feature / Capability | Typical Govt./Model School | Top Private English Version | Elite International | Future Vision Academy (Target) |
| :--- | :---: | :---: | :---: | :---: |
| **Mobile-First Responsive UI** | ❌ (Often broken tables) | ⚠️ (Partially responsive) | ✅ (Fully responsive) | ✅ **Modern Next.js 16 UI** |
| **Real-Time Notice Board** | ✅ (Basic PDF links) | ✅ (Categorized list) | ⚠️ (Nested in news) | ✅ **Instant Search & Category filter** |
| **Embedded Admission Application** | ❌ (External portal/PDF) | ⚠️ (Redirects to form) | ✅ (Embedded inquiry) | ✅ **Step-by-step native digital form** |
| **Local MFS Payment (bKash/Nagad)** | ⚠️ (Manual Teletalk code) | ⚠️ (Selected banks) | ❌ (Bank wire / cards only) | ✅ **Seamless bKash/Nagad API link** |
| **Transparent Fee Schedule** | ❌ (Hidden in circulars) | ⚠️ (Downloadable PDF) | ❌ (Inquiry required) | ✅ **Clear tier-based breakdown** |
| **Exam Result / Roll Lookup** | ✅ (Dense board tables) | ⚠️ (Basic lookup) | ❌ (Private portal) | ✅ **Fast student ID / roll query** |
| **Fast Load Speed (< 1.5s)** | ❌ (3–6s latency) | ❌ (2–4s latency) | ⚠️ (2s latency) | ✅ **Sub-second edge rendering** |

---

## 4. Key Gaps in the Market & How Future Vision Academy Wins

1. **The "Modern Look" Gap:**
   - 90% of local school websites in Bangladesh still look like they were built with Bootstrap 3 in 2014 with cramped tables and pixelated logos.
   - *Advantage:* A clean, typography-driven, accessible design creates instant prestige and reassures educated parents that the school embraces 21st-century technology.

2. **The "Broken Mobile PDF" Frustration:**
   - Most schools post scanned images or bloated 10MB PDF notices that parents struggle to view on their phones.
   - *Advantage:* Build an agile Notice system with clean HTML previews, direct download buttons, and lightweight PDF viewing.

3. **The "Admission Friction" Gap:**
   - Parents hate taking leave from work to stand in lines for admission tokens or chasing bank deposit slips.
   - *Advantage:* An intuitive digital admission workflow with online form submission, document upload, and automated confirmation SMS/email.
