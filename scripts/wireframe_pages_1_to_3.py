# wireframe_pages_1_to_3.py
from wireframe_components import wireframe_img, spec_overlay

def get_page_home():
    return f'''
    <!-- PAGE 1: HOMEPAGE (/) -->
    <div id="page-home" class="page-view space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 1.1: Hero Section (Split Visual Layout) -->
      <section class="max-w-7xl mx-auto" data-spec-metric="Padding: 48px | 8pt System">
        {spec_overlay(
          cmp_id="HERO-SPLIT-01",
          user_story="As a discerning Uttara parent, I want to immediately verify if this school has legal Dhaka Board recognition and true small classes so I feel confident exploring further.",
          psych_trigger="Authority & Legitimacy Inoculation (EIIN 138421 + 1:12 class cap dissolving new-school anxiety).",
          grid_spec="Desktop: 12-col grid (7:5 split) • Tablet: Stacking 1-col • 8pt rhythm",
          a11y_spec="H1 semantic heading • 48px CTA buttons • High contrast 8.5:1 text"
        )}

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-7 space-y-5 text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Session 2026–2027 Admissions Open • Playgroup to Grade 9</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Nurturing Inquiring Minds,<br />
              <span class="text-blue-600">Inspiring Confident Leaders</span>
            </h1>

            <p class="text-base text-slate-600 leading-relaxed max-w-2xl">
              Welcome to Future Vision Academy — a premier purpose-built K-12 sanctuary in Uttara delivering the national NCTB curriculum in <strong>English Version & Bangla Medium</strong> with a guaranteed <strong>1:12 teacher-student ratio</strong> and hands-on STEM innovation from Day One.
            </p>

            <!-- Dual Conversion CTAs -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <button onclick="navigateTo('admissions')" class="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                Apply for 2026–2027 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <button onclick="navigateTo('contact')" class="px-5 py-3 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all flex items-center gap-2 shadow-sm">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Schedule Campus Walkthrough
              </button>
            </div>

            <!-- Trust Chips -->
            <div class="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                EIIN 138421 (Dhaka Board)
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                <svg class="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                Strict 1:12 Class Ratio Cap
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                <svg class="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                Dual Medium Bilingual
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200">
                <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                Playgroup to Grade 10 (SSC)
              </span>
            </div>
          </div>

          <!-- Right Column: Wireframe Image Composition -->
          <div class="lg:col-span-5 relative space-y-3">
            <!-- Main Hero Image -->
            {wireframe_img("16:9", "Collaborative STEM robotics workshop with certified teacher & Arduino pods", "h-64 sm:h-72")}
            
            <!-- Secondary Image Grid -->
            <div class="grid grid-cols-2 gap-3">
              {wireframe_img("4:3", "Early Years discovery reading circle & sensory nook", "h-36")}
              {wireframe_img("4:3", "Outdoor all-weather artificial futsal turf & athletics area", "h-36")}
            </div>

            <!-- Floating Credential Chip -->
            <div class="absolute -bottom-3 -left-3 bg-white border border-slate-200 rounded-lg p-2.5 shadow-lg flex items-center gap-2 max-w-[240px]">
              <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                98%
              </div>
              <div class="text-[11px] text-left">
                <div class="font-bold text-slate-800">Founding Parent Retention</div>
                <div class="text-slate-500">Highest re-enrollment in Uttara</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 1.2: Six Credibility Metric Counters -->
      <section class="max-w-7xl mx-auto" data-spec-metric="8pt Grid • Metric Bar">
        {spec_overlay(
          cmp_id="METRIC-BAR-02",
          user_story="As a prospective parent, I want to glance at concrete quantifiable metrics in 3 seconds to validate the school's investments.",
          psych_trigger="Cognitive Ease & Skimmability (delivers quantitative proof without heavy text reading).",
          grid_spec="6-col grid (desktop) • 2-col (mobile) • 16px internal padding",
          a11y_spec="Semantic dl/dt/dd or clear labelled cards • High contrast figures"
        )}

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div class="studio-card p-4 text-center">
            <div class="text-2xl font-black text-blue-600 mb-0.5">1:12</div>
            <div class="text-xs font-bold text-slate-800">Student:Teacher</div>
            <div class="text-[11px] text-slate-500">Guaranteed Cap</div>
          </div>
          <div class="studio-card p-4 text-center">
            <div class="text-2xl font-black text-slate-900 mb-0.5">100%</div>
            <div class="text-xs font-bold text-slate-800">Certified Faculty</div>
            <div class="text-[11px] text-slate-500">BUET / Monash / Durham</div>
          </div>
          <div class="studio-card p-4 text-center">
            <div class="text-2xl font-black text-blue-600 mb-0.5">28+</div>
            <div class="text-xs font-bold text-slate-800">Hardware Pods</div>
            <div class="text-[11px] text-slate-500">STEM MakerLab</div>
          </div>
          <div class="studio-card p-4 text-center">
            <div class="text-2xl font-black text-slate-900 mb-0.5">15+</div>
            <div class="text-xs font-bold text-slate-800">Character Clubs</div>
            <div class="text-[11px] text-slate-500">Debate, Sports, Arts</div>
          </div>
          <div class="studio-card p-4 text-center">
            <div class="text-2xl font-black text-blue-600 mb-0.5">100%</div>
            <div class="text-xs font-bold text-slate-800">GPS Monitored</div>
            <div class="text-[11px] text-slate-500">Safe Fleet Transit</div>
          </div>
          <div class="studio-card p-4 text-center">
            <div class="text-2xl font-black text-emerald-600 mb-0.5">138421</div>
            <div class="text-xs font-bold text-slate-800">EIIN Code</div>
            <div class="text-[11px] text-slate-500">Dhaka Board Registered</div>
          </div>
        </div>
      </section>

      <!-- Block 1.3: Four Educational Pillars -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • 4 Pillars">
        {spec_overlay(
          cmp_id="PILLARS-03",
          user_story="As a parent, I want to understand the school's holistic balance between academic rigor and character building so my child becomes well-rounded.",
          psych_trigger="Value Inoculation (dissolves fears of either dry rote memorization or undisciplined chaos).",
          grid_spec="4-col grid (desktop) • 1-col (mobile) • 24px gap",
          a11y_spec="Semantic article tags • High-contrast iconography"
        )}

        <div class="text-center max-w-2xl mx-auto mb-8">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Four Pillars of Academic Excellence</h2>
          <p class="text-sm text-slate-600 mt-1">Balancing intellectual mastery, technological fluency, moral virtue, and physical wellness.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="studio-card p-5 border-t-4 border-t-blue-600 space-y-2">
            <div class="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 class="text-base font-bold text-slate-900">Academic Rigor & Inquiry</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Conceptual NCTB mastery using Singapore mathematics frameworks, dual-language articulation, and diagnostic continuous assessment over cramming.
            </p>
          </div>

          <div class="studio-card p-5 border-t-4 border-t-indigo-600 space-y-2">
            <div class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-base font-bold text-slate-900">STEM & Digital Fluency</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Integrated robotics from Grade 1. Hardware prototyping with Arduino, algorithmic problem-solving with Python, and Junior Olympiad preparation.
            </p>
          </div>

          <div class="studio-card p-5 border-t-4 border-t-emerald-600 space-y-2">
            <div class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <h3 class="text-base font-bold text-slate-900">Moral Character & Ethics</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Universal civic responsibility, anti-bullying culture, emotional intelligence, and deep cultural grounding celebrating Bangladeshi heritage.
            </p>
          </div>

          <div class="studio-card p-5 border-t-4 border-t-amber-600 space-y-2">
            <div class="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-base font-bold text-slate-900">Athletics, Arts & Wellbeing</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              FIFA-grade futsal turf, badminton courts, Black Box drama theater, choir, and daily movement drills to nurture physical and mental vigor.
            </p>
          </div>
        </div>
      </section>

      <!-- Block 1.4: Academic Stages Quick Pathing -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Stages Pathing">
        {spec_overlay(
          cmp_id="STAGES-GRID-04",
          user_story="As a parent looking for Grade 3, I want to quickly jump to Primary details without wading through unrelated high school material.",
          psych_trigger="Relevance Filtering (empowers fast discovery based on the parent's immediate child age).",
          grid_spec="4-col card grid • Deep link with tab query parameter",
          a11y_spec="Keyboard focusable cards with active hover elevation"
        )}

        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 class="text-2xl font-black text-slate-900 tracking-tight">Academic Stages & Age Pathways</h2>
            <p class="text-sm text-slate-600">Tailored pedagogy mapped to each developmental milestone from toddlerhood to SSC.</p>
          </div>
          <button onclick="navigateTo('academics')" class="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            Compare All Stages <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Card 1 -->
          <div class="studio-card p-4 flex flex-col justify-between space-y-3">
            {wireframe_img("16:10", "Early Years play-based discovery & phonics room", "h-36")}
            <div class="space-y-1.5">
              <span class="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">Ages 2.5 – 5 Years</span>
              <h3 class="text-base font-bold text-slate-900">Early Years (PG – KG)</h3>
              <p class="text-xs text-slate-600 leading-snug">
                Sensory motor play, Cambridge early phonics, joyful storytelling, and foundational social confidence.
              </p>
            </div>
            <button onclick="navigateTo('academics'); switchAcademicStage('early_years')" class="w-full py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 font-semibold text-xs rounded border border-slate-200 transition-colors flex items-center justify-center gap-1">
              Explore Early Years <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Card 2 -->
          <div class="studio-card p-4 flex flex-col justify-between space-y-3">
            {wireframe_img("16:10", "Primary school science & Singapore math workshop", "h-36")}
            <div class="space-y-1.5">
              <span class="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold uppercase">Ages 6 – 10 Years</span>
              <h3 class="text-base font-bold text-slate-900">Primary (Grades 1 – 5)</h3>
              <p class="text-xs text-slate-600 leading-snug">
                NCTB dual medium foundation, conceptual math, Scratch block coding, and bilingual reading fluency.
              </p>
            </div>
            <button onclick="navigateTo('academics'); switchAcademicStage('primary')" class="w-full py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 font-semibold text-xs rounded border border-slate-200 transition-colors flex items-center justify-center gap-1">
              Explore Primary Years <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Card 3 -->
          <div class="studio-card p-4 flex flex-col justify-between space-y-3">
            {wireframe_img("16:10", "Middle school science laboratory & debate room", "h-36")}
            <div class="space-y-1.5">
              <span class="text-[10px] font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-bold uppercase">Ages 11 – 13 Years</span>
              <h3 class="text-base font-bold text-slate-900">Middle School (6 – 8)</h3>
              <p class="text-xs text-slate-600 leading-snug">
                Specialized sciences (Physics/Chem/Bio), Python logic, formal parliamentary debating, and leadership.
              </p>
            </div>
            <button onclick="navigateTo('academics'); switchAcademicStage('middle')" class="w-full py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 font-semibold text-xs rounded border border-slate-200 transition-colors flex items-center justify-center gap-1">
              Explore Middle School <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Card 4 -->
          <div class="studio-card p-4 flex flex-col justify-between space-y-3">
            {wireframe_img("16:10", "Secondary SSC board exam prep & laboratory bench", "h-36")}
            <div class="space-y-1.5">
              <span class="text-[10px] font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold uppercase">Ages 14 – 16 Years</span>
              <h3 class="text-base font-bold text-slate-900">Secondary (SSC 9 – 10)</h3>
              <p class="text-xs text-slate-600 leading-snug">
                National Board SSC preparation in Science & Business Studies with intensive lab practicals and counseling.
              </p>
            </div>
            <button onclick="navigateTo('academics'); switchAcademicStage('secondary')" class="w-full py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 font-semibold text-xs rounded border border-slate-200 transition-colors flex items-center justify-center gap-1">
              Explore Secondary SSC <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Block 1.5: The Year-2 Advantage (Parent Objection Dissolution) -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Objection Dissolution">
        {spec_overlay(
          cmp_id="YEAR2-ADVANTAGE-05",
          user_story="As an anxious parent weighing a 2nd-year school against 30-year heritage schools, I want clear proof of why this school offers superior care and modern infrastructure.",
          psych_trigger="Risk Inoculation & Social Proof (directly neutralizes the 5 top parental hesitations with concrete institutional facts).",
          grid_spec="6-card responsive matrix • 24px gap • Pure white cards with soft drop shadow",
          a11y_spec="High-contrast SVG badges • Focus indicators on interactive links"
        )}

        <div class="text-center max-w-2xl mx-auto mb-8">
          <div class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold mb-2">
            The Phase 2 Advantage
          </div>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Why Discerning Families Choose Future Vision Academy</h2>
          <p class="text-sm text-slate-600 mt-1">Engineered from Day One to deliver international standards within the national curriculum framework.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Item 1 -->
          <div class="studio-card p-5 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 class="text-base font-bold text-slate-900">Guaranteed 1:12 Class Ratio</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              In heritage schools, classes swell to 40+ children where quiet pupils get overlooked. At FVA, every single child receives direct educator interaction and personalized coaching daily.
            </p>
          </div>

          <!-- Item 2 -->
          <div class="studio-card p-5 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 class="text-base font-bold text-slate-900">Inquiry Over Rote Cramming</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              We discard toxic rote coaching. Our students master concepts through hands-on science experiments, mathematics manipulatives, and daily communicative language tasks.
            </p>
          </div>

          <!-- Item 3 -->
          <div class="studio-card p-5 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 class="text-base font-bold text-slate-900">Multi-Layer Safeguarding</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              128 Full-HD IP CCTV cameras, biometric security turnstiles, on-site resident pediatric nurse, and strict zero-tolerance anti-bullying protocols strictly enforced campus-wide.
            </p>
          </div>

          <!-- Item 4 -->
          <div class="studio-card p-5 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 class="text-base font-bold text-slate-900">Real-Time Parent Portal</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Never wonder about your child's progress. Daily homework, live attendance notifications, termly assessment rubrics, and direct teacher messaging right on your smartphone.
            </p>
          </div>

          <!-- Item 5 -->
          <div class="studio-card p-5 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h3 class="text-base font-bold text-slate-900">GPS Monitored Safe Transit</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Air-conditioned bus fleet with real-time GPS telemetry, speed governors, verified female attendants, and door-to-door handoff procedures across Uttara, Tongi, and Mirpur.
            </p>
          </div>

          <!-- Item 6 -->
          <div class="studio-card p-5 space-y-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              06
            </div>
            <h3 class="text-base font-bold text-slate-900">98% Year-1 Parent Retention</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              The ultimate validation of institutional trust. 98% of our inaugural 2025 scholars re-enrolled for Year 2, with 60% of new admissions arriving via parent word-of-mouth recommendations.
            </p>
          </div>
        </div>
      </section>

      <!-- Block 1.6: Interactive Campus Life Gallery -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Interactive Gallery">
        {spec_overlay(
          cmp_id="GALLERY-MODAL-06",
          user_story="As a working parent who hasn't visited in person yet, I want to explore actual facility specifications and verify the quality of labs and play areas.",
          psych_trigger="Tangible Proof & Curiosity (interactive modal lets parents inspect physical equipment before booking a walkthrough).",
          grid_spec="Interactive category filter tabs • 8 facility cards • Lightbox modal popup",
          a11y_spec="Keyboard navigable tabs • Trap focus inside modal • ARIA dialog attributes"
        )}

        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 class="text-2xl font-black text-slate-900 tracking-tight">Interactive Campus Life & Facilities</h2>
            <p class="text-sm text-slate-600">Inspect our purpose-built learning spaces, laboratories, athletics, and cultural facilities.</p>
          </div>

          <!-- Gallery Filter Tabs -->
          <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button onclick="filterGallery('all')" class="gallery-tab-btn active px-3 py-1.5 rounded-md text-xs font-semibold transition-all bg-blue-600 text-white" data-cat="all">
              All Facilities (8)
            </button>
            <button onclick="filterGallery('classrooms')" class="gallery-tab-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100" data-cat="classrooms">
              Classrooms & Labs
            </button>
            <button onclick="filterGallery('sports')" class="gallery-tab-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100" data-cat="sports">
              Sports & Play
            </button>
            <button onclick="filterGallery('arts')" class="gallery-tab-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100" data-cat="arts">
              Arts & Library
            </button>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="gallery-container">
          <!-- Card 1 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="classrooms" onclick="openFacilityModal('stem-lab')">
            {wireframe_img("16:9", "STEM MakerLab with 28 Arduino & micro:bit pods", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">Cap: 28 Students</span>
                <span class="text-[10px] text-slate-500 font-medium">STEM Suite</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">STEM & Robotics MakerLab</h4>
              <p class="text-xs text-slate-500 mt-0.5">Dual 3D printers, IoT sensors, ESD workbenches.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 2 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="classrooms" onclick="openFacilityModal('science-lab')">
            {wireframe_img("16:9", "Multidisciplinary Science Wet Laboratory with safety fume hoods", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">Cap: 32 Students</span>
                <span class="text-[10px] text-slate-500 font-medium">Science Wing</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">Science Wet Laboratory</h4>
              <p class="text-xs text-slate-500 mt-0.5">Olympus microscopes, titration manifolds, eye-wash.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 3 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="arts" onclick="openFacilityModal('library')">
            {wireframe_img("16:9", "Knowledge Commons & Collaborative Library with 15k+ titles", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">Cap: 120 Readers</span>
                <span class="text-[10px] text-slate-500 font-medium">Commons</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">Knowledge Commons</h4>
              <p class="text-xs text-slate-500 mt-0.5">15,000+ bilingual titles, digital JSTOR junior terminals.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 4 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="sports" onclick="openFacilityModal('futsal-turf')">
            {wireframe_img("16:9", "All-weather artificial futsal turf & athletic sprint track", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Cap: 200 Spectators</span>
                <span class="text-[10px] text-slate-500 font-medium">Athletics</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">Futsal Turf & Sprint Track</h4>
              <p class="text-xs text-slate-500 mt-0.5">FIFA-grade synthetic turf, perimeter net, night floodlights.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 5 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="arts" onclick="openFacilityModal('theater')">
            {wireframe_img("16:9", "Black Box drama theater & acoustic public speaking hall", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded font-bold">Cap: 250 Seats</span>
                <span class="text-[10px] text-slate-500 font-medium">Fine Arts</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">Black Box Drama Theater</h4>
              <p class="text-xs text-slate-500 mt-0.5">DMX stage lighting, acoustic soundproofing, modular risers.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 6 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="sports" onclick="openFacilityModal('cafeteria')">
            {wireframe_img("16:9", "UV-sanitized hygienic cafeteria & dining commons", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-bold">Cap: 180 Diners</span>
                <span class="text-[10px] text-slate-500 font-medium">Nutrition</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">Hygienic Dining Commons</h4>
              <p class="text-xs text-slate-500 mt-0.5">Hot nutritionist-approved lunches, zero processed food.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 7 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="classrooms" onclick="openFacilityModal('infirmary')">
            {wireframe_img("16:9", "Pediatric health bay & first response clinical infirmary", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded font-bold">Clinical Care</span>
                <span class="text-[10px] text-slate-500 font-medium">Infirmary</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">Pediatric Health Bay</h4>
              <p class="text-xs text-slate-500 mt-0.5">Full-time resident nurse, AED, medical oxygen, first aid.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>

          <!-- Card 8 -->
          <div class="gallery-card studio-card p-3 space-y-2.5 cursor-pointer" data-cat="arts" onclick="openFacilityModal('cctv-room')">
            {wireframe_img("16:9", "Central 24/7 CCTV security monitoring operations room", "h-40")}
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">128 Cameras</span>
                <span class="text-[10px] text-slate-500 font-medium">Security</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">24/7 Security Command</h4>
              <p class="text-xs text-slate-500 mt-0.5">Biometric gates, facial-recognition attendance, perimeter alarm.</p>
            </div>
            <button class="w-full py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded transition-colors text-center">
              View Facility Specs →
            </button>
          </div>
        </div>
      </section>

      <!-- Block 1.7: Leadership & Faculty Pedigree Spotlight -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Leadership Showcase">
        {spec_overlay(
          cmp_id="LEADERSHIP-07",
          user_story="As a parent investing in my child's education, I want to know who is leading the school and verify their academic credentials.",
          psych_trigger="Authority Bias (world-class credentials from Durham, BUET, and Monash instill unshakeable trust).",
          grid_spec="4-col card layout • Pedigree badges • Direct email action",
          a11y_spec="Semantic card structure with high-contrast text"
        )}

        <div class="text-center max-w-2xl mx-auto mb-8">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Academic Leadership & Faculty Pedigree</h2>
          <p class="text-sm text-slate-600 mt-1">Our master educators bring decades of international teaching and curriculum leadership.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Leader 1 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("1:1", "Portrait of Dr. Tariqul Chowdhury, Ph.D. Durham", "h-40")}
            <div>
              <span class="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">Ph.D. Durham Univ (UK)</span>
              <h3 class="text-base font-bold text-slate-900 mt-1">Dr. Tariqul Chowdhury</h3>
              <p class="text-xs font-semibold text-blue-600">Principal & Academic Head</p>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                24+ years leading premier international K-12 schools across South Asia and the UK. Specialist in bilingual cognitive development.
              </p>
            </div>
            <button onclick="navigateTo('about')" class="w-full py-1.5 text-xs font-semibold border border-slate-300 rounded text-slate-700 hover:bg-slate-50">
              Read Principal's Letter →
            </button>
          </div>

          <!-- Leader 2 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("1:1", "Portrait of Dr. Nusrat Jahan, M.Sc. BUET", "h-40")}
            <div>
              <span class="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-bold">M.Sc. BUET (First Class)</span>
              <h3 class="text-base font-bold text-slate-900 mt-1">Dr. Nusrat Jahan</h3>
              <p class="text-xs font-semibold text-indigo-600">Head of STEM & Sciences</p>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                Former Senior Lecturer and national Junior Science Olympiad trainer. Spearheads our robotics and practical lab curriculum.
              </p>
            </div>
            <button onclick="navigateTo('academics')" class="w-full py-1.5 text-xs font-semibold border border-slate-300 rounded text-slate-700 hover:bg-slate-50">
              Explore STEM Labs →
            </button>
          </div>

          <!-- Leader 3 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("1:1", "Portrait of Shamima Akhter, M.Ed. Monash", "h-40")}
            <div>
              <span class="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">M.Ed. Monash Univ (Aus)</span>
              <h3 class="text-base font-bold text-slate-900 mt-1">Shamima Akhter</h3>
              <p class="text-xs font-semibold text-emerald-700">Head of Primary Years</p>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                Certified early literacy coach specializing in Cambridge Jolly Phonics and Singapore model drawing mathematics.
              </p>
            </div>
            <button onclick="navigateTo('academics')" class="w-full py-1.5 text-xs font-semibold border border-slate-300 rounded text-slate-700 hover:bg-slate-50">
              Primary Pedagogy →
            </button>
          </div>

          <!-- Leader 4 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("1:1", "Portrait of Faruk Hasan, M.A. Sydney", "h-40")}
            <div>
              <span class="text-[10px] font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-bold">M.A. Univ of Sydney</span>
              <h3 class="text-base font-bold text-slate-900 mt-1">Faruk Hasan</h3>
              <p class="text-xs font-semibold text-purple-700">Head of Pastoral Care & Safeguarding</p>
              <p class="text-xs text-slate-500 mt-1 leading-snug">
                Certified child protection officer directing student welfare, counselor consultations, and anti-bullying policies.
              </p>
            </div>
            <button onclick="navigateTo('about')" class="w-full py-1.5 text-xs font-semibold border border-slate-300 rounded text-slate-700 hover:bg-slate-50">
              Safeguarding Charter →
            </button>
          </div>
        </div>
      </section>

      <!-- Block 1.8: Founding Parent Testimonials -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Social Proof">
        {spec_overlay(
          cmp_id="TESTIMONIALS-08",
          user_story="As a prospective parent in Uttara, I want to hear from actual parents in my neighborhood regarding their real-world experience during Year 1.",
          psych_trigger="Peer Social Proof & Sector Familiarity (referencing Uttara Sectors 4, 9, 11 creates immediate kinship).",
          grid_spec="3-col testimonial card grid • Star rating indicators • Parent credentials",
          a11y_spec="Clear attribution markup • High text legibility"
        )}

        <div class="text-center max-w-2xl mx-auto mb-8">
          <div class="inline-block px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-semibold mb-2">
            Verified Community Stories
          </div>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Voices of Our Founding Families</h2>
          <p class="text-sm text-slate-600 mt-1">Real experiences from parents whose children blossomed during our inaugural year.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Testimonial 1 -->
          <div class="studio-card p-5 space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 leading-relaxed italic">
                "The 1:12 class ratio completely transformed my son. In his previous school of 38 students, he was withdrawn and timid. Within six months at FVA, he was leading class debates and building Arduino circuits."
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                MR
              </div>
              <div class="text-xs">
                <div class="font-bold text-slate-900">Engr. Mahbubur Rahman</div>
                <div class="text-[11px] text-slate-500">Parent of Grade 4 Student • Uttara Sector 4</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="studio-card p-5 space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 leading-relaxed italic">
                "As a working physician, safety was my non-negotiable. The live GPS bus tracking with verified female attendants gives me absolute peace of mind during morning hospital rounds. Their communication is exemplary."
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                SK
              </div>
              <div class="text-xs">
                <div class="font-bold text-slate-900">Dr. Samira Khan, FCPS</div>
                <div class="text-[11px] text-slate-500">Parent of Nursery Child • Uttara Sector 9</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="studio-card p-5 space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 leading-relaxed italic">
                "The dual medium approach is authentic. Our daughter has acquired native-level English fluency without losing her grasp of Bengali literature and national heritage. Zero tuition surprises or hidden fees."
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
                KT
              </div>
              <div class="text-xs">
                <div class="font-bold text-slate-900">Kazi Tanvir Ahmed</div>
                <div class="text-[11px] text-slate-500">Parent of Grade 7 Scholar • Uttara Sector 11</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 1.9: Conversion Banner -->
      <section class="max-w-7xl mx-auto" data-spec-metric="8pt Grid • High-Intent CTA">
        {spec_overlay(
          cmp_id="CONVERSION-BANNER-09",
          user_story="As a convinced parent, I want to immediately take action without hunting for forms so my child's assessment slot is locked in.",
          psych_trigger="Scarcity & Loss Aversion (highlights capped 1:12 seating to incentivize prompt registration).",
          grid_spec="Full-width studio banner • Pure white with border-l-4 blue accent",
          a11y_spec="High-contrast interactive buttons • Clear textual hierarchy"
        )}

        <div class="studio-card p-8 sm:p-10 border-l-8 border-l-blue-600 bg-gradient-to-r from-blue-50/50 to-white text-left flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span> Limited Seats for Session 2026–2027
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Give Your Child the Advantage of an Elite Learning Sanctuary
            </h2>
            <p class="text-sm text-slate-600 leading-relaxed">
              Admissions are now open across Playgroup to Grade 9. Book a personalized campus walkthrough or submit an online application dossier today. Zero application fee for online submissions.
            </p>
            <div class="text-xs text-slate-500 font-medium pt-1">
              • Diagnostic assessment scheduled within 48 hours • Parent-accompanied informal observation for Pre-Primary
            </div>
          </div>

          <div class="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button onclick="navigateTo('admissions')" class="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Start Online Application <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <button onclick="navigateTo('contact')" class="px-6 py-3.5 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm">
              Schedule Campus Walkthrough
            </button>
          </div>
        </div>
      </section>

    </div>
    '''

def get_page_admissions():
    return f'''
    <!-- PAGE 2: ADMISSIONS HUB (/admissions) -->
    <div id="page-admissions" class="page-view hidden space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 2.1: Admissions Hero & Session 2026-27 Tracker -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Admissions Hero">
        {spec_overlay(
          cmp_id="ADM-HERO-01",
          user_story="As a parent seeking admission, I want to clearly see current intake status, deadlines, and seat capacity so I don't miss the enrollment window.",
          psych_trigger="Urgency & Scarcity (68% capacity meter triggers prompt action).",
          grid_spec="Full-width hero • Status tracker banner with metrics",
          a11y_spec="Accessible progress meter with text equivalent"
        )}

        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-300 rounded-full text-emerald-800 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Intake Phase 1: ACTIVE • Academic Year 2026–2027</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Admissions & Enrollment Hub
          </h1>

          <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
            A transparent, student-centered pathway designed to welcome your family into our vibrant academic community. We offer <strong>zero hidden levies</strong>, <strong>guaranteed 1:12 early class ratios</strong>, and an encouraging diagnostic readiness assessment.
          </p>

          <!-- Session 2026-27 Status Tracker Bar -->
          <div class="studio-card p-5 bg-gradient-to-r from-blue-50/60 to-slate-50 border-blue-200">
            <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div>
                <span class="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider">SESSION 2026–2027 INTAKE STATUS</span>
                <h4 class="text-base font-bold text-slate-900">Phase 1 Early Evaluation Window (Nov 15 – Dec 10)</h4>
              </div>
              <div class="text-right">
                <span class="text-xs font-bold text-slate-700">Campus Capacity: <strong class="text-blue-600">68% Filled</strong></span>
                <div class="w-48 h-2 bg-slate-200 rounded-full overflow-hidden mt-1">
                  <div class="w-[68%] h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-3 border-t border-blue-200/60 text-slate-700 font-medium">
              <div>📅 <strong>Assessment Window:</strong> Nov 15 – Dec 10</div>
              <div>⚡ <strong>Evaluation Feedback:</strong> Within 48 Hours</div>
              <div>🎒 <strong>Orientation Day:</strong> 10 January 2027</div>
              <div>🏫 <strong>Class Commences:</strong> 12 January 2027</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 2.2: The 5-Step Admissions Journey -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • 5-Step Journey">
        {spec_overlay(
          cmp_id="ADM-JOURNEY-02",
          user_story="As a parent, I want to understand every step of the admission process in advance so there are no surprises or intimidating tests.",
          psych_trigger="Process Clarity & Friction Dissolution (demystifies the enrollment funnel with tangible deliverables).",
          grid_spec="5-col responsive step cards • Numbered badges • Deliverable tags",
          a11y_spec="Ordered progression with clear screen-reader steps"
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">The 5-Step Admissions Journey</h2>
          <p class="text-sm text-slate-600">A compassionate, structured path from your initial inquiry to your child's first day.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <!-- Step 1 -->
          <div class="studio-card p-4 space-y-2 border-t-4 border-t-blue-600">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black font-mono text-blue-600">STEP 01</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Day 1</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Campus Tour & Inquiry</h3>
            <p class="text-xs text-slate-600 leading-snug">
              Walk through our science labs, robotics studio, and reading nooks with our admissions head.
            </p>
            <div class="pt-2 border-t border-slate-100 text-[11px] text-blue-700 font-semibold">
              Deliverable: Academic Prospectus
            </div>
          </div>

          <!-- Step 2 -->
          <div class="studio-card p-4 space-y-2 border-t-4 border-t-blue-600">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black font-mono text-blue-600">STEP 02</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Day 2-3</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Application Dossier</h3>
            <p class="text-xs text-slate-600 leading-snug">
              Submit the online application form with previous report cards and birth certificate copy.
            </p>
            <div class="pt-2 border-t border-slate-100 text-[11px] text-blue-700 font-semibold">
              Deliverable: Application Tracking ID
            </div>
          </div>

          <!-- Step 3 -->
          <div class="studio-card p-4 space-y-2 border-t-4 border-t-blue-600">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black font-mono text-blue-600">STEP 03</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Day 4</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Diagnostic Readiness</h3>
            <p class="text-xs text-slate-600 leading-snug">
              Play-based observation for Pre-Primary; friendly math/English conceptual puzzle for Primary.
            </p>
            <div class="pt-2 border-t border-slate-100 text-[11px] text-blue-700 font-semibold">
              Deliverable: Developmental Report
            </div>
          </div>

          <!-- Step 4 -->
          <div class="studio-card p-4 space-y-2 border-t-4 border-t-blue-600">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black font-mono text-blue-600">STEP 04</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Day 5</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Family Leadership Meet</h3>
            <p class="text-xs text-slate-600 leading-snug">
              A 30-minute informal conversation with Dr. Tariqul Chowdhury to align family goals and values.
            </p>
            <div class="pt-2 border-t border-slate-100 text-[11px] text-blue-700 font-semibold">
              Deliverable: Values Alignment OK
            </div>
          </div>

          <!-- Step 5 -->
          <div class="studio-card p-4 space-y-2 border-t-4 border-t-emerald-600 bg-emerald-50/20">
            <div class="flex items-center justify-between">
              <span class="text-xs font-black font-mono text-emerald-700">STEP 05</span>
              <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">Within 48h</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Seat Acceptance</h3>
            <p class="text-xs text-slate-600 leading-snug">
              Formal offer letter issued with welcome package, student badge, and uniform fitting appointment.
            </p>
            <div class="pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-800 font-bold">
              Deliverable: Official Student ID
            </div>
          </div>
        </div>
      </section>

      <!-- Block 2.3: Age Criteria & Grade Placement Finder Widget -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Interactive Placement Finder">
        {spec_overlay(
          cmp_id="AGE-FINDER-03",
          user_story="As a parent confused by Ministry age cut-offs, I want to input my child's age and instantly see which grade and curriculum they qualify for.",
          psych_trigger="Cognitive Relief & Reassurance (eliminates guesswork on grade eligibility as of 1st Jan 2027).",
          grid_spec="Split layout: Interactive selector (left) + Dynamic result card (right) + Matrix table",
          a11y_spec="Live ARIA region updating automatically on select change"
        )}

        <div class="mb-6">
          <div class="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold mb-2">
            Interactive Placement Finder
          </div>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Age Criteria & Grade Placement Calculator</h2>
          <p class="text-sm text-slate-600">Calculated as of 1st January 2027 in accordance with Ministry of Education regulations.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Widget Control Panel -->
          <div class="lg:col-span-5 studio-card p-6 space-y-4">
            <h3 class="font-bold text-base text-slate-900">Check Your Child's Grade Eligibility</h3>
            
            <div>
              <label for="finder-age" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Select Child's Age as of Jan 1, 2027:
              </label>
              <select id="finder-age" onchange="lookupPlacement()" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="2.5">2.5 Years (Born mid-2024)</option>
                <option value="3.5">3.5 Years (Born early 2023)</option>
                <option value="4.5">4.5 Years (Born early 2022)</option>
                <option value="5.5" selected>5.5 Years (Born early 2021)</option>
                <option value="7.0">7.0 Years (Born early 2020)</option>
                <option value="9.0">9.0 Years (Born early 2018)</option>
                <option value="11.5">11.5 Years (Born early 2015)</option>
                <option value="14.0">14.0 Years (Born early 2013)</option>
              </select>
            </div>

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <div class="font-bold text-slate-800">Ministry Cut-Off Standard:</div>
              <p>Government directive specifies a minimum age of 6.0 years for Grade 1. Children aged 5.5 to 6.5 undergo a gentle readiness review for optimal class social dynamics.</p>
            </div>

            <button onclick="navigateTo('contact')" class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5">
              Consult Admissions Counselor <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

          <!-- Dynamic Output Card -->
          <div class="lg:col-span-7 studio-card p-6 border-l-4 border-l-emerald-600 space-y-4 bg-emerald-50/10">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span class="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">Recommended Placement</span>
                <h3 id="finder-out-grade" class="text-2xl font-black text-slate-900 mt-1">Grade 1 (Primary)</h3>
              </div>
              <span id="finder-out-ratio" class="text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded">1:15 Cap</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-white rounded-lg border border-slate-200">
                <span class="font-mono text-[10px] text-slate-400 font-bold block uppercase">Curriculum Stream</span>
                <span id="finder-out-medium" class="font-bold text-slate-800 text-xs">NCTB Dual Medium (English & Bangla)</span>
              </div>
              <div class="p-3 bg-white rounded-lg border border-slate-200">
                <span class="font-mono text-[10px] text-slate-400 font-bold block uppercase">Intake Availability</span>
                <span class="font-bold text-emerald-700 text-xs">Seats Active (Evaluation Open)</span>
              </div>
            </div>

            <div class="space-y-1.5 text-xs text-slate-700">
              <div class="font-bold text-slate-900 uppercase tracking-wider font-mono text-[11px]">Key Developmental Focus:</div>
              <p id="finder-out-focus" class="text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                NCTB foundational syllabus, Singapore math problem-solving models, beginner Scratch coding logic, and bilingual reading fluency.
              </p>
            </div>

            <div class="space-y-1 text-xs text-slate-700">
              <div class="font-bold text-slate-900 uppercase tracking-wider font-mono text-[11px]">Assessment Model:</div>
              <p id="finder-out-assess" class="text-slate-600 text-xs">
                Friendly 30-min reading and numeracy diagnostic quiz in a comforting environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 2.4: Interactive Tuition & Sibling Calculator -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Interactive Fee Calculator">
        {spec_overlay(
          cmp_id="TUITION-CALC-04",
          user_story="As a budget-conscious parent with multiple children, I want to calculate our exact monthly tuition with sibling discounts and transit so we avoid financial surprises.",
          psych_trigger="Radical Financial Transparency (dissolves the fear of hidden school fees common in Dhaka private schools).",
          grid_spec="2-col interactive split (inputs vs live receipt) • Real-time calculation on event change",
          a11y_spec="Semantic fieldsets, radio buttons, and accessible live calculation region"
        )}

        <div class="mb-6">
          <div class="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold mb-2">
            100% Financial Transparency
          </div>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Interactive Tuition & Sibling Fee Calculator</h2>
          <p class="text-sm text-slate-600">All academic materials, science wet labs, and ICT pod fees included. Zero hidden development levies.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Calculator Inputs -->
          <div class="lg:col-span-7 studio-card p-6 space-y-6">
            <!-- 1. Select Grade Tier -->
            <div>
              <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                1. Select Academic Grade Tier:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label class="studio-card p-3 cursor-pointer flex flex-col justify-between border-slate-300 hover:border-blue-500 transition-colors">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="calc_tier" value="preprimary" onchange="calculateTuition()" class="text-blue-600 focus:ring-blue-500">
                    <span class="text-xs font-bold text-slate-800">Pre-Primary</span>
                  </div>
                  <div class="mt-2 text-[11px] text-slate-500">PG, Nursery, KG</div>
                  <div class="mt-1 font-mono font-bold text-xs text-blue-600">৳ 6,500/mo</div>
                </label>

                <label class="studio-card p-3 cursor-pointer flex flex-col justify-between border-blue-500 bg-blue-50/30 transition-colors">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="calc_tier" value="primary" checked onchange="calculateTuition()" class="text-blue-600 focus:ring-blue-500">
                    <span class="text-xs font-bold text-slate-800">Primary</span>
                  </div>
                  <div class="mt-2 text-[11px] text-slate-500">Grades 1 – 5</div>
                  <div class="mt-1 font-mono font-bold text-xs text-blue-600">৳ 8,500/mo</div>
                </label>

                <label class="studio-card p-3 cursor-pointer flex flex-col justify-between border-slate-300 hover:border-blue-500 transition-colors">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="calc_tier" value="middle_sec" onchange="calculateTuition()" class="text-blue-600 focus:ring-blue-500">
                    <span class="text-xs font-bold text-slate-800">Middle / SSC</span>
                  </div>
                  <div class="mt-2 text-[11px] text-slate-500">Grades 6 – 10</div>
                  <div class="mt-1 font-mono font-bold text-xs text-blue-600">৳ 10,500/mo</div>
                </label>
              </div>
            </div>

            <!-- 2. Sibling Status -->
            <div>
              <label for="calc_sibling" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                2. Sibling Enrollment Concession:
              </label>
              <select id="calc_sibling" onchange="calculateTuition()" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="0">First Child (Full Tuition • Standard)</option>
                <option value="25" selected>Second Sibling (25% Monthly Tuition Discount)</option>
                <option value="40">Third Sibling or More (40% Monthly Tuition Discount)</option>
              </select>
            </div>

            <!-- 3. Optional Services -->
            <div class="space-y-3">
              <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                3. Optional Campus Services:
              </label>

              <!-- Transport Dropdown -->
              <div>
                <span class="text-xs text-slate-600 mb-1 block">Monitored AC Bus Transit:</span>
                <select id="calc_transport" onchange="calculateTuition()" class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="0">No School Transit (Self Drop-off)</option>
                  <option value="3000" selected>Zone 1: Uttara Model Town (+৳ 3,000/mo)</option>
                  <option value="4200">Zone 2: Tongi / Khilkhet / Airport (+৳ 4,200/mo)</option>
                  <option value="5500">Zone 3: Mirpur DOHS / Bashundhara (+৳ 5,500/mo)</option>
                </select>
              </div>

              <!-- Hot Lunch Checkbox -->
              <label class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer">
                <input type="checkbox" id="calc_lunch" checked onchange="calculateTuition()" class="w-4 h-4 text-blue-600 rounded">
                <div class="text-xs">
                  <span class="font-bold text-slate-800">Nutritious Hot Lunch Program</span>
                  <span class="text-slate-500 block">Freshly prepared hot 2-course meal daily (+৳ 2,200/mo)</span>
                </div>
              </label>

              <!-- STEM Robotics Pass -->
              <label class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer">
                <input type="checkbox" id="calc_stem" onchange="calculateTuition()" class="w-4 h-4 text-blue-600 rounded">
                <div class="text-xs">
                  <span class="font-bold text-slate-800">After-School Robotics & MakerLab Club Pass</span>
                  <span class="text-slate-500 block">2 extra sessions weekly + hardware kit (+৳ 1,500/mo)</span>
                </div>
              </label>
            </div>
          </div>

          <!-- Right: Dynamic Receipt & Total Investment -->
          <div class="lg:col-span-5 studio-card p-6 bg-slate-50/70 border-slate-300 space-y-4">
            <div class="border-b border-slate-200 pb-3">
              <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">ESTIMATED MONTHLY INVESTMENT</span>
              <h3 class="text-lg font-black text-slate-900 mt-1">Tuition & Fee Breakdown</h3>
            </div>

            <!-- Receipt Line Items -->
            <div class="space-y-2 text-xs">
              <div class="flex items-center justify-between text-slate-700">
                <span>Selected Tier: <strong id="out-tier-name" class="text-slate-900">Primary (Grades 1 – 5)</strong></span>
                <span id="out-base-tuition" class="font-mono font-bold text-slate-900">৳ 8,500</span>
              </div>

              <div id="out-sibling-row" class="flex items-center justify-between text-emerald-700 font-medium">
                <span>Sibling Discount:</span>
                <span id="out-sibling-val" class="font-mono font-bold">- ৳ 2,125 (25%)</span>
              </div>

              <div id="out-trans-row" class="flex items-center justify-between text-slate-700">
                <span>AC Transit (Zone 1):</span>
                <span id="out-trans-val" class="font-mono font-bold">+ ৳ 3,000</span>
              </div>

              <div id="out-lunch-row" class="flex items-center justify-between text-slate-700">
                <span>Nutritious Hot Lunch:</span>
                <span id="out-lunch-val" class="font-mono font-bold">+ ৳ 2,200</span>
              </div>

              <div id="out-stem-row" class="hidden flex items-center justify-between text-slate-700">
                <span>Robotics Club Pass:</span>
                <span id="out-stem-val" class="font-mono font-bold">+ ৳ 1,500</span>
              </div>
            </div>

            <!-- Grand Monthly Total -->
            <div class="pt-4 border-t-2 border-dashed border-slate-300">
              <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Net Monthly Total:</div>
              <div id="out-total-monthly" class="text-3xl font-black text-blue-600 tracking-tight font-mono mt-0.5">
                ৳ 11,575
              </div>
              <div class="text-[11px] text-slate-500 mt-1">
                One-time Annual Admission Fee: <strong id="out-adm-fee" class="text-slate-800 font-mono">৳ 35,000</strong>
              </div>
            </div>

            <!-- Zero-Hidden-Fee Pledge Badge -->
            <div class="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
              <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span><strong>Zero-Hidden-Fee Pledge:</strong> All lab consumables, library privileges, exam stationery, and sports equipment are covered without supplemental levies.</span>
            </div>

            <!-- CTA -->
            <button onclick="navigateTo('contact')" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5">
              Lock In This Estimate & Book Tour <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Block 2.5: Document Checklist & Download Center -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Documents Center">
        {spec_overlay(
          cmp_id="DOCS-CENTER-05",
          user_story="As an applicant, I want a concise checklist of needed paperwork so I can bring everything on my evaluation day.",
          psych_trigger="Friction Reduction & Preparation (clear requirements reduce administrative delays).",
          grid_spec="2-col layout (Checklist vs Downloads) • PDF download buttons",
          a11y_spec="Semantic lists with icon bullet indicators"
        )}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Required Documents -->
          <div class="studio-card p-6 space-y-3">
            <h3 class="font-bold text-base text-slate-900 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Required Admissions Documents
            </h3>
            <ul class="space-y-2 text-xs text-slate-700">
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Child's Digital Birth Certificate (Online verified copy)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>4 Recent passport-size photographs of the student</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Copies of Father's and Mother's National ID (NID) or Passport</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Previous 2 academic years' report cards (For Grade 2 onwards)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Transfer Certificate (TC) from prior recognized school</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Blood group report and immunization record card</span>
              </li>
            </ul>
          </div>

          <!-- Download Center -->
          <div class="studio-card p-6 space-y-3">
            <h3 class="font-bold text-base text-slate-900 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download Center
            </h3>
            
            <div class="space-y-3">
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded bg-red-100 text-red-700 font-mono font-bold text-xs flex items-center justify-center">
                    PDF
                  </div>
                  <div class="text-xs">
                    <div class="font-bold text-slate-900">Academic Prospectus 2026–2027</div>
                    <div class="text-[11px] text-slate-500">Curriculum, faculty credentials & fees • 4.2 MB</div>
                  </div>
                </div>
                <button onclick="alert('Downloading FVA Academic Prospectus 2026-27 (Mockup PDF)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 rounded text-xs font-semibold text-slate-700 transition-colors">
                  Download
                </button>
              </div>

              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded bg-red-100 text-red-700 font-mono font-bold text-xs flex items-center justify-center">
                    PDF
                  </div>
                  <div class="text-xs">
                    <div class="font-bold text-slate-900">Printable Offline Application Form</div>
                    <div class="text-[11px] text-slate-500">For desk submission & physical dossier • 1.1 MB</div>
                  </div>
                </div>
                <button onclick="alert('Downloading FVA Offline Application Form (Mockup PDF)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 rounded text-xs font-semibold text-slate-700 transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 2.6: Admissions FAQ Accordion -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • FAQ Accordion">
        {spec_overlay(
          cmp_id="ADM-FAQ-06",
          user_story="As a parent with specific questions about board exams or bus routes, I want quick answers without making a phone call.",
          psych_trigger="Objection Dissolution (handles edge cases like English Version vs Medium differences).",
          grid_spec="Collapsible accordion list • 16px row padding • Smooth chevron animation",
          a11y_spec="Accessible aria-expanded and keyboard enter/space toggle"
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Frequently Asked Admissions Questions</h2>
          <p class="text-sm text-slate-600">Quick answers to common questions regarding curricula, fees, and campus life.</p>
        </div>

        <div class="space-y-2.5 max-w-4xl">
          <!-- FAQ 1 -->
          <div class="studio-card overflow-hidden">
            <button onclick="toggleAccordion(1)" class="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <span>Is Future Vision Academy officially recognized by the Dhaka Education Board?</span>
              <svg id="faq-chevron-1" class="w-4 h-4 text-slate-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="faq-ans-1" class="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
              Yes. Future Vision Academy holds official regulatory authorization under <strong>EIIN: 138421</strong>. All students are registered for primary completion, junior secondary, and national SSC examinations with the Dhaka Education Board.
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="studio-card overflow-hidden">
            <button onclick="toggleAccordion(2)" class="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <span>What is the exact distinction between English Version (NCTB) and English Medium?</span>
              <svg id="faq-chevron-2" class="w-4 h-4 text-slate-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="faq-ans-2" class="hidden p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
              English Version delivers the national NCTB curriculum translated into English. It gives students native-level English fluency while preserving direct entry into Bangladeshi public engineering and medical colleges (BUET, DMC, DU) without equivalence certificate friction, at half the tuition of Cambridge/Edexcel schools.
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="studio-card overflow-hidden">
            <button onclick="toggleAccordion(3)" class="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <span>How does the Sibling Discount policy operate across multiple children?</span>
              <svg id="faq-chevron-3" class="w-4 h-4 text-slate-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="faq-ans-3" class="hidden p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
              When two or more biological siblings are concurrently enrolled, the 2nd child receives a guaranteed <strong>25% monthly tuition waiver</strong>. The 3rd child and subsequent siblings receive a <strong>40% monthly tuition waiver</strong> throughout their tenure at the academy.
            </div>
          </div>

          <!-- FAQ 4 -->
          <div class="studio-card overflow-hidden">
            <button onclick="toggleAccordion(4)" class="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <span>How are young children evaluated during the diagnostic admissions assessment?</span>
              <svg id="faq-chevron-4" class="w-4 h-4 text-slate-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="faq-ans-4" class="hidden p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
              We never subject young children to intimidating paper tests. Pre-Primary candidates participate in a warm, play-based observation session accompanied by parents where our early years specialists observe sensory-motor curiosity and phonemic response. Primary students complete a gentle diagnostic puzzle.
            </div>
          </div>
        </div>
      </section>

    </div>
    '''

def get_page_academics():
    return f'''
    <!-- PAGE 3: ACADEMICS & PEDAGOGY (/academics) -->
    <div id="page-academics" class="page-view hidden space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 3.1: Academics Hero -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Academics Hero">
        {spec_overlay(
          cmp_id="ACAD-HERO-01",
          user_story="As a parent evaluating curricula, I want to understand how the school balances national board rigor with modern inquiry methods.",
          psych_trigger="Intellectual Pedigree (articulates Singapore math, bilingual inquiry, and zero-rote mastery).",
          grid_spec="Full-width header • Credibility chips bar",
          a11y_spec="Semantic heading structure • High-contrast badge tags"
        )}

        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>National Curriculum (NCTB) • Dual Medium Excellence</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Academics, Inquiry & Scientific Discovery
          </h1>

          <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
            Cultivating critical problem solvers, bilingual communicators, and ethical leaders from Playgroup to Secondary School Certificate (SSC). Small cohorts, master educators, and purpose-built research laboratories.
          </p>

          <div class="flex flex-wrap items-center gap-2 pt-2 text-xs font-medium text-slate-700">
            <span class="px-3 py-1 bg-slate-100 rounded-md border border-slate-200">1:12 Early Ratio Cap</span>
            <span class="px-3 py-1 bg-slate-100 rounded-md border border-slate-200">Singapore Mathematics Pedagogy</span>
            <span class="px-3 py-1 bg-slate-100 rounded-md border border-slate-200">28-Pod STEM MakerLab</span>
            <span class="px-3 py-1 bg-slate-100 rounded-md border border-slate-200">Continuous Formative Evaluation</span>
          </div>
        </div>
      </section>

      <!-- Block 3.2: Interactive Academic Stage Tiers Switcher -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Interactive Stage Tabs">
        {spec_overlay(
          cmp_id="ACAD-STAGES-02",
          user_story="As a parent looking for specific grade details, I want to switch between stages (Early Years, Primary, Middle, Secondary) and inspect curriculum, schedule, and facility specs.",
          psych_trigger="Pedagogical Transparency (provides full daily schedule breakdowns and concrete learning outcomes).",
          grid_spec="4-stage tab switcher • Dynamic pane swapping • Responsive split layout",
          a11y_spec="Accessible ARIA tablist / tab / tabpanel pattern"
        )}

        <!-- Stage Switcher Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 mb-6">
          <button onclick="switchAcademicStage('early_years')" class="stage-tab-btn px-4 py-2.5 rounded-lg text-xs font-bold transition-all bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shrink-0" data-stage="early_years">
            Early Years Foundation (PG – KG)
          </button>
          <button onclick="switchAcademicStage('primary')" class="stage-tab-btn active px-4 py-2.5 rounded-lg text-xs font-bold transition-all bg-blue-600 text-white shrink-0 shadow-sm" data-stage="primary">
            Primary School (Grades 1 – 5)
          </button>
          <button onclick="switchAcademicStage('middle')" class="stage-tab-btn px-4 py-2.5 rounded-lg text-xs font-bold transition-all bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shrink-0" data-stage="middle">
            Middle School (Grades 6 – 8)
          </button>
          <button onclick="switchAcademicStage('secondary')" class="stage-tab-btn px-4 py-2.5 rounded-lg text-xs font-bold transition-all bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shrink-0" data-stage="secondary">
            Secondary School (SSC 9 – 10)
          </button>
        </div>

        <!-- Stage Pane 1: Early Years -->
        <div id="stage-pane-early_years" class="academic-stage-pane hidden studio-card p-6 lg:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 01 • AGES 2.5 – 5 YEARS</span>
              <h3 class="text-2xl font-black text-slate-900 mt-1">Early Years Foundation Stage (PG, Nursery, KG)</h3>
            </div>
            <span class="text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 rounded">Strict 1:12 Ratio Cap</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 space-y-4">
              <h4 class="font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">Curricular Philosophy & Key Outcomes:</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Inspired by the Reggio Emilia and Montessori inquiry approaches, our Early Years sanctuary fosters organic curiosity. Children build hand-eye coordination, phonetic sound blending, and early mathematical numeracy through joyful manipulatives and outdoor play.
              </p>
              <ul class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Cambridge Jolly Phonics:</strong> Systematic 42-sound phonetic decoding in English and Bangla.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Singapore Concrete-Pictorial Math:</strong> Hands-on counting blocks, patterns, and quantity intuition.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Sensory & Gross Motor Development:</strong> Dedicated climbing wall, tactile sand pits, and music rhythm circles.</span>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-5 space-y-3">
              {wireframe_img("16:9", "Early Years sensory storytelling nook and soft play area", "h-48")}
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <div class="font-bold text-slate-800">Sample Daily Timetable (8:30 AM – 12:30 PM):</div>
                <div class="text-[11px] text-slate-500 mt-1 space-y-0.5 font-mono">
                  <div>08:30 – 09:00: Joyful Morning Circle & Movement</div>
                  <div>09:00 – 09:45: Cambridge Phonics & Story Time</div>
                  <div>09:45 – 10:30: Sensory Math & Shape Manipulatives</div>
                  <div>10:30 – 11:15: Supervised Snack & Social Etiquette</div>
                  <div>11:15 – 12:00: Outdoor Turf Exploration & Music</div>
                  <div>12:00 – 12:30: Reflective Goodbye Circle & Handoff</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage Pane 2: Primary School (Default Active) -->
        <div id="stage-pane-primary" class="academic-stage-pane studio-card p-6 lg:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 02 • AGES 6 – 10 YEARS</span>
              <h3 class="text-2xl font-black text-slate-900 mt-1">Primary School (Grades 1 to 5)</h3>
            </div>
            <span class="text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded">1:15 Ratio Cap</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 space-y-4">
              <h4 class="font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">Curricular Philosophy & Key Outcomes:</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                At the primary stage, scholars bridge concrete exploration with structured conceptual frameworks. We adhere strictly to the national NCTB syllabus in dual mediums while integrating world-class Singapore bar-model mathematics and weekly Scratch coding pods.
              </p>
              <ul class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Conceptual Mathematics:</strong> Singapore model drawing for word problem visualization and mental math agility.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Bilingual Fluency:</strong> Creative writing, extempore speech, and literature appreciation in both languages.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Junior Science Discovery:</strong> Weekly hands-on lab sessions covering magnetism, plant biology, and circuits.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">✓</span>
                  <span><strong>Digital Literacy & Scratch:</strong> Algorithmic logic, sequence debugging, and junior animation design.</span>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-5 space-y-3">
              {wireframe_img("16:9", "Primary science students measuring magnetism forces in junior lab", "h-48")}
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <div class="font-bold text-slate-800">Sample Daily Timetable (8:00 AM – 2:15 PM):</div>
                <div class="text-[11px] text-slate-500 mt-1 space-y-0.5 font-mono">
                  <div>08:00 – 08:30: Morning Assembly & Civic Reflection</div>
                  <div>08:30 – 09:20: Singapore Mathematics & Problem Solving</div>
                  <div>09:20 – 10:10: English Language & Creative Writing</div>
                  <div>10:10 – 11:00: Junior Science Hands-on Laboratory</div>
                  <div>11:00 – 11:45: Hot Lunch & Supervised Outdoor Play</div>
                  <div>11:45 – 12:35: Bangla Literature & Heritage Articulation</div>
                  <div>12:35 – 01:25: Scratch Block Coding / Robotics Pod</div>
                  <div>01:25 – 02:15: Athletics (Futsal / Badminton) & Dismissal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage Pane 3: Middle School -->
        <div id="stage-pane-middle" class="academic-stage-pane hidden studio-card p-6 lg:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span class="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 03 • AGES 11 – 13 YEARS</span>
              <h3 class="text-2xl font-black text-slate-900 mt-1">Middle School (Grades 6 to 8)</h3>
            </div>
            <span class="text-xs font-mono font-bold bg-purple-50 text-purple-800 border border-purple-200 px-3 py-1 rounded">1:20 Ratio Cap</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 space-y-4">
              <h4 class="font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">Curricular Philosophy & Key Outcomes:</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Middle school is the crucial transition from broad discovery to disciplined academic specialization. Science splits into discrete Physics, Chemistry, and Biology branches with mandatory wet lab periods, accompanied by Python programming and parliamentary debate.
              </p>
              <ul class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">✓</span>
                  <span><strong>Disciplinary Sciences:</strong> Hands-on chemical reactions, optical physics benches, and cell biology microscopy.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">✓</span>
                  <span><strong>Text-Based Python Coding:</strong> Moving beyond blocks into data structures, loops, and automated sensor scripts.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">✓</span>
                  <span><strong>Competitive Debate & Rhetoric:</strong> Formal parliamentary argument construction and rebuttal skills.</span>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-5 space-y-3">
              {wireframe_img("16:9", "Middle school hardware developer pods assembling automated weather sensor", "h-48")}
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <div class="font-bold text-slate-800">Academic Assessment Model:</div>
                <p class="text-[11px] text-slate-600 mt-1 leading-snug">
                  40% Continuous weekly formative quizzes + 60% termly diagnostic examinations. Emphasis on analytical derivation and lab experiment write-ups rather than textbook cramming.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage Pane 4: Secondary SSC -->
        <div id="stage-pane-secondary" class="academic-stage-pane hidden studio-card p-6 lg:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span class="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 04 • AGES 14 – 16 YEARS</span>
              <h3 class="text-2xl font-black text-slate-900 mt-1">Secondary School Certificate (SSC Grades 9 & 10)</h3>
            </div>
            <span class="text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300 px-3 py-1 rounded">Board SSC Track</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 space-y-4">
              <h4 class="font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">Curricular Philosophy & Key Outcomes:</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Rigorous preparation for the Dhaka Education Board Secondary School Certificate (SSC) examination in both <strong>Science</strong> and <strong>Business Studies</strong> streams. Combines master faculty coaching with Olympiad mentorship and university guidance.
              </p>
              <ul class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold">✓</span>
                  <span><strong>Complete Board Practical Mastery:</strong> Individual student lab benches for all compulsory physics, chemistry, and biology board practicals.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold">✓</span>
                  <span><strong>Higher Mathematics & ICT:</strong> Calculus intuition, coordinate geometry, and relational database fundamentals.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold">✓</span>
                  <span><strong>Tertiary Admissions Guidance:</strong> Early orientation for engineering (BUET), medical, and international SAT pathways.</span>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-5 space-y-3">
              {wireframe_img("16:9", "Secondary SSC students conducting organic chemistry titration experiment", "h-48")}
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <div class="font-bold text-slate-800">Faculty Mentorship:</div>
                <p class="text-[11px] text-slate-600 mt-1 leading-snug">
                  Supervised by Senior Faculty with Ph.D. and M.Sc. credentials. Weekly personalized feedback clinics for students requiring targeted concept reinforcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 3.3: Dual Medium Pedagogical Comparison Matrix -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Dual Medium Matrix">
        {spec_overlay(
          cmp_id="DUAL-MATRIX-03",
          user_story="As a parent choosing between English Version and Bangla Medium, I want a side-by-side comparison of textbooks, exams, and university pathways so I make the right choice.",
          psych_trigger="Clarity & Value Certainty (shows complete tuition equality and equal lab access for both streams).",
          grid_spec="Structured 3-column comparative table • Full border borders",
          a11y_spec="Semantic HTML table with th scope attributes"
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Dual Medium Academic Structure: Side-by-Side Comparison</h2>
          <p class="text-sm text-slate-600">Both streams share identical laboratory facilities, campus privileges, and master faculty.</p>
        </div>

        <div class="overflow-x-auto studio-card">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100 border-b border-slate-200 text-slate-900 font-mono">
                <th class="p-3.5 font-bold uppercase tracking-wider">Dimension</th>
                <th class="p-3.5 font-bold uppercase tracking-wider text-blue-700">English Version Stream</th>
                <th class="p-3.5 font-bold uppercase tracking-wider text-emerald-800">Bangla Medium Stream</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Curriculum Framework</td>
                <td class="p-3.5">National NCTB Curriculum</td>
                <td class="p-3.5">National NCTB Curriculum</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Language of Instruction</td>
                <td class="p-3.5">100% English (except Bangla subject)</td>
                <td class="p-3.5">100% Bangla (with intensive English)</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Textbooks & Content</td>
                <td class="p-3.5">Official NCTB English translated editions</td>
                <td class="p-3.5">Official NCTB standard editions</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">National Board Exam</td>
                <td class="p-3.5">Dhaka Board SSC in English Version</td>
                <td class="p-3.5">Dhaka Board SSC in Bangla Medium</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Higher Education Transition</td>
                <td class="p-3.5">Direct entry into BUET/Medical + overseas SAT/IELTS parity</td>
                <td class="p-3.5">Direct entry into all national public & private universities</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 bg-slate-50/50">Monthly Tuition Parity</td>
                <td class="p-3.5 font-bold text-blue-600">Standard Schedule (Zero Premium)</td>
                <td class="p-3.5 font-bold text-emerald-700">Standard Schedule (Equal Parity)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Block 3.4: Co-Curricular & Character Clubs -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Character Clubs">
        {spec_overlay(
          cmp_id="CLUBS-04",
          user_story="As a parent, I want my child to develop leadership, teamwork, and hobbies beyond textbook exams.",
          psych_trigger="Holistic Wellness (assures parents that children won't be trapped in a one-dimensional exam grind).",
          grid_spec="6-club responsive card grid • Meeting frequency chips",
          a11y_spec="Semantic card layout • High contrast typography"
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Co-Curricular & Character Development Clubs</h2>
          <p class="text-sm text-slate-600">Mandatory weekly club participation to uncover talents and build enduring camaraderie.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="studio-card p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">01</span>
              <span class="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Tues & Thu</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Bilingual Debating Society</h3>
            <p class="text-xs text-slate-600 leading-snug">Parliamentary format debate in English and Bangla. Reigning Inter-School Junior Champions.</p>
          </div>

          <div class="studio-card p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">02</span>
              <span class="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Mon & Wed</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Robotics & AI Guild</h3>
            <p class="text-xs text-slate-600 leading-snug">Arduino hardware builds, ultrasonic obstacle-avoiding rovers, and micro:bit IoT experiments.</p>
          </div>

          <div class="studio-card p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">03</span>
              <span class="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Saturday</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Junior Science Olympiad Cohort</h3>
            <p class="text-xs text-slate-600 leading-snug">Specialized coaching for the Bangladesh Mathematical (BdMO) and Science (BdJSO) Olympiads.</p>
          </div>

          <div class="studio-card p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">04</span>
              <span class="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Sun & Wed</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Futsal & Athletics Academy</h3>
            <p class="text-xs text-slate-600 leading-snug">Coached by AFC licensed trainers on our artificial turf. Inter-house league tournaments.</p>
          </div>

          <div class="studio-card p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">05</span>
              <span class="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Thursday</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Fine Arts & Theater Guild</h3>
            <p class="text-xs text-slate-600 leading-snug">Traditional oil painting, clay sculpting, and annual drama productions in the Black Box theater.</p>
          </div>

          <div class="studio-card p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">06</span>
              <span class="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Weekly</span>
            </div>
            <h3 class="font-bold text-sm text-slate-900">Quranic Tajweed & Moral Ethics</h3>
            <p class="text-xs text-slate-600 leading-snug">Optional tajweed recitation circle, universal moral ethics discussions, and civic charity initiatives.</p>
          </div>
        </div>
      </section>

    </div>
    '''
