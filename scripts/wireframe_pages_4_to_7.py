# wireframe_pages_4_to_7.py
from wireframe_components import wireframe_img, spec_overlay

def get_page_about():
    return f'''
    <!-- PAGE 4: ABOUT US (/about) -->
    <div id="page-about" class="page-view hidden space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 4.1: About Hero -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • About Hero">
        {spec_overlay(
          cmp_id="ABOUT-HERO-01",
          user_story="As a parent exploring the school's heritage, I want to learn the institutional vision and values behind its founding.",
          psych_trigger="Ethical Alignment & Purpose (establishes high moral integrity and child-first commitment).",
          grid_spec="Full-width header • Institutional badge tags",
          a11y_spec="Semantic heading • Screen-reader accessible layout"
        )}

        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Purpose-Built K-12 Academy • Uttara Sector 11</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            A Sanctuary of Learning, Character & Discovery
          </h1>

          <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
            Established to redefine schooling in Dhaka through unyielding academic rigor, modern experiential inquiry, and a child-first safeguarding infrastructure that guarantees every child is known, protected, and championed.
          </p>
        </div>
      </section>

      <!-- Block 4.2: Founder & Principal Vision Letter -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Principal Vision">
        {spec_overlay(
          cmp_id="PRINCIPAL-LETTER-02",
          user_story="As a prospective parent, I want to hear directly from the Principal to assess their character, pedagogical vision, and leadership stability.",
          psych_trigger="Authority & Human Connection (a personal letter signed by an educator with a Ph.D. from Durham dissolves institutional skepticism).",
          grid_spec="Split layout: Letter copy (7-col) vs Portrait and Credentials (5-col)",
          a11y_spec="Accessible blockquote semantics • High contrast typography"
        )}

        <div class="studio-card p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-slate-50 to-white">
          <div class="lg:col-span-7 space-y-4">
            <div class="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
              From the Desk of the Principal
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              "Every Child Has a Spark of Genius That Blooms with Individual Care"
            </h2>
            <div class="space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>Dear Parents and Guardians,</strong>
              </p>
              <p>
                When we laid the foundations of Future Vision Academy, we envisioned an institution that would break free from the twin traps of conventional schooling: the soulless rote memorization factory on one hand, and the superficial commercial coaching hub on the other.
              </p>
              <p>
                As we enter our second operational year and unveil our Phase 2 STEM wings, our guiding promise remains unbreakable: <em>every single child in our care is personally known, scientifically nurtured, and morally anchored.</em> We keep our classes strictly capped at 1:12 in early years because genuine mentorship cannot occur in crowded classrooms of forty children.
              </p>
              <p>
                Whether in our robotics maker suites, on our futsal turf, or in our bilingual debate halls, our students are taught not what to think, but how to think critically and lead with empathy. I invite you to walk our corridors and witness this vibrant sanctuary firsthand.
              </p>
            </div>
            <div class="pt-3 border-t border-slate-200">
              <div class="font-bold text-slate-900 text-sm">Dr. Tariqul Islam Chowdhury</div>
              <div class="text-xs text-slate-500 font-mono">Principal & Managing Director • Ph.D. (Durham Univ, UK) • M.A. (DU)</div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            {wireframe_img("4:5", "Portrait of Principal Dr. Tariqul Islam Chowdhury, Ph.D. Durham", "h-72")}
            <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2 text-xs">
              <div class="font-bold text-slate-900">Dr. Chowdhury's Leadership Credentials:</div>
              <ul class="space-y-1 text-slate-600 text-[11px]">
                <li>• 24+ Years senior leadership in K-12 international education</li>
                <li>• Ph.D. in Bilingual Cognitive Linguistics, Durham University (UK)</li>
                <li>• Former Senior Academic Consultant for Cambridge Assessment</li>
                <li>• Member, International Council of Educational Leaders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 4.3: Mission, Vision & Core Values Quadrant -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Values Quadrant">
        {spec_overlay(
          cmp_id="VALUES-QUAD-03",
          user_story="As a parent, I want to see which ethical values are actively modeled and practiced in the daily student culture.",
          psych_trigger="Ethical Grounding (parents value character and integrity as much as academic marks).",
          grid_spec="4-card quadrant grid • Custom icon badges • 16px internal padding",
          a11y_spec="Semantic card articles with high-contrast text"
        )}

        <div class="text-center max-w-2xl mx-auto mb-8">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Our Guiding Mission & Core Values</h2>
          <p class="text-sm text-slate-600 mt-1">Four cornerstones that govern every policy, lesson plan, and teacher interaction.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="studio-card p-5 space-y-2 border-t-4 border-t-blue-600">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              I
            </div>
            <h3 class="text-base font-bold text-slate-900">Integrity & Honor</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Uncompromising honesty, intellectual authenticity, and moral courage in words and deeds across all academic endeavors.
            </p>
          </div>

          <div class="studio-card p-5 space-y-2 border-t-4 border-t-indigo-600">
            <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              C
            </div>
            <h3 class="text-base font-bold text-slate-900">Curiosity & Inquiry</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Nurturing an insatiable hunger to ask 'why', explore scientific phenomena, and challenge assumptions through evidence.
            </p>
          </div>

          <div class="studio-card p-5 space-y-2 border-t-4 border-t-emerald-600">
            <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              R
            </div>
            <h3 class="text-base font-bold text-slate-900">Respect & Empathy</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Honoring human dignity, embracing neurodiversity, actively rejecting bullying, and cultivating compassionate civic service.
            </p>
          </div>

          <div class="studio-card p-5 space-y-2 border-t-4 border-t-amber-600">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
              E
            </div>
            <h3 class="text-base font-bold text-slate-900">Excellence & Resilience</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Striving for personal mastery in academics, arts, and athletics while developing grit to view setbacks as stepping stones.
            </p>
          </div>
        </div>
      </section>

      <!-- Block 4.4: Institutional Legitimacy & Accreditation Anchor -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Legal Credentials">
        {spec_overlay(
          cmp_id="LEGAL-ANCHOR-04",
          user_story="As a skeptical parent, I want to verify official ministry registration numbers so I know my child can sit for national board exams without hindrance.",
          psych_trigger="Government Validation (EIIN 138421 dissolves the fear of unaccredited pop-up schools).",
          grid_spec="3-col credential card row • Institutional seals",
          a11y_spec="High-contrast credential badges"
        )}

        <div class="studio-card p-6 border-slate-300 bg-slate-50">
          <div class="text-center max-w-xl mx-auto mb-6">
            <span class="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">OFFICIAL REGULATORY STANDARDS</span>
            <h3 class="text-xl font-bold text-slate-900 mt-1">Government Recognition & Board Registration</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <span class="font-mono text-[10px] text-slate-400 font-bold block uppercase">Ministry Accreditation</span>
              <div class="text-base font-black text-slate-900 font-mono">EIIN: 138421</div>
              <p class="text-slate-600 text-[11px] leading-snug">
                Official Education Institute Identification Number assigned by Ministry of Education, Government of Bangladesh.
              </p>
            </div>

            <div class="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <span class="font-mono text-[10px] text-slate-400 font-bold block uppercase">Board Registration</span>
              <div class="text-base font-black text-slate-900 font-mono">Dhaka Education Board</div>
              <p class="text-slate-600 text-[11px] leading-snug">
                Fully registered exam center affiliate for Primary Completion, Junior Secondary, and Secondary SSC board candidates.
              </p>
            </div>

            <div class="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <span class="font-mono text-[10px] text-slate-400 font-bold block uppercase">Curriculum Approval</span>
              <div class="text-base font-black text-slate-900 font-mono">NCTB Dual Medium</div>
              <p class="text-slate-600 text-[11px] leading-snug">
                Certified compliant with the National Curriculum and Textbook Board syllabus in English Version and Bangla Medium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 4.5: Campus Safeguarding Charter -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Safeguarding Charter">
        {spec_overlay(
          cmp_id="SAFEGUARDING-05",
          user_story="As a working mother, I want to know every detail of physical campus security, medical readiness, and transit safety.",
          psych_trigger="Safety Inoculation (dissolves the core maternal anxiety of child vulnerability in Dhaka).",
          grid_spec="3-col safety architecture cards • High-detail technical specifications",
          a11y_spec="Clear textual hierarchy with bulleted safeguards"
        )}

        <div class="mb-6">
          <div class="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full text-xs font-semibold mb-2">
            Child Welfare Priority
          </div>
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Our Child Safeguarding & Welfare Charter</h2>
          <p class="text-sm text-slate-600">A tri-pillar safety infrastructure engineered to provide an impenetrable sanctuary for learners.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Pillar 1 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("16:9", "Central CCTV command room with 128 live security monitors", "h-40")}
            <h3 class="text-base font-bold text-slate-900">1. 24/7 CCTV & Physical Security</h3>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li class="flex items-start gap-1.5">• <span><strong>128 Full-HD IP Cameras:</strong> Covering 100% of corridors, gates, and play zones with zero blind spots.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Biometric Turnstiles:</strong> RFID student badges and facial check-in with instant parent SMS alert.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Strict Visitor Vetting:</strong> No outside visitors permitted into teaching wings during operational hours.</span></li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("16:9", "Pediatric infirmary with resident certified nurse and AED unit", "h-40")}
            <h3 class="text-base font-bold text-slate-900">2. Pediatric Health Suite</h3>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li class="flex items-start gap-1.5">• <span><strong>Resident Pediatric Nurse:</strong> Full-time licensed clinical nurse on duty from 7:30 AM to 5:00 PM.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Emergency Equipment:</strong> Automated External Defibrillator (AED), medical oxygen, and nebulizers.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Hospital Link:</strong> Standing rapid emergency transfer protocol with nearby Uttara Ad-din Hospital.</span></li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="studio-card p-5 space-y-3">
            {wireframe_img("16:9", "Air-conditioned school transit bus fleet with female attendant", "h-40")}
            <h3 class="text-base font-bold text-slate-900">3. GPS Safe Transit Fleet</h3>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li class="flex items-start gap-1.5">• <span><strong>Live Mobile GPS Tracking:</strong> Parents track their child's bus location, speed, and ETA in real time.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Female Bus Attendant:</strong> Certified female caregiver on every bus assisting children at boarding.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Speed Restrictors:</strong> Electronic 40 km/h engine governors installed on all vehicles.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Block 4.6: Interactive Milestone Roadmap -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Interactive Roadmap">
        {spec_overlay(
          cmp_id="ROADMAP-06",
          user_story="As a parent looking at a Year 2 school, I want to see the school's trajectory of actual achievements from Year 1 to Year 2.",
          psych_trigger="Momentum Proof (chronicles tangible progress and expansion, proving the school is growing rapidly).",
          grid_spec="5-node horizontal interactive timeline • Dynamic detail expansion on click",
          a11y_spec="Accessible buttons with active state highlights"
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Institutional Milestone Trajectory (2025–2027)</h2>
          <p class="text-sm text-slate-600">Click any milestone below to review achievements and operational expansion phases.</p>
        </div>

        <!-- Interactive Milestone Buttons -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          <button onclick="selectMilestone(0)" class="milestone-btn p-3 rounded-lg border-2 border-blue-600 bg-blue-50/50 text-left transition-all shadow-sm">
            <span class="text-[10px] font-mono text-blue-700 font-bold block">JAN 2025</span>
            <div class="font-bold text-xs text-slate-900 mt-1">Campus Opening</div>
            <div class="text-[10px] text-slate-500">120 Scholars Enrolled</div>
          </button>

          <button onclick="selectMilestone(1)" class="milestone-btn p-3 rounded-lg border border-slate-200 bg-white text-left transition-all hover:bg-slate-50">
            <span class="text-[10px] font-mono text-slate-500 font-bold block">JUN 2025</span>
            <div class="font-bold text-xs text-slate-900 mt-1">STEM Lab Unveiling</div>
            <div class="text-[10px] text-slate-500">28 Maker Pods Online</div>
          </button>

          <button onclick="selectMilestone(2)" class="milestone-btn p-3 rounded-lg border border-slate-200 bg-white text-left transition-all hover:bg-slate-50">
            <span class="text-[10px] font-mono text-slate-500 font-bold block">NOV 2025</span>
            <div class="font-bold text-xs text-slate-900 mt-1">Debate Trophy</div>
            <div class="text-[10px] text-slate-500">Junior Champions</div>
          </button>

          <button onclick="selectMilestone(3)" class="milestone-btn p-3 rounded-lg border border-slate-200 bg-white text-left transition-all hover:bg-slate-50">
            <span class="text-[10px] font-mono text-slate-500 font-bold block">JAN 2026</span>
            <div class="font-bold text-xs text-slate-900 mt-1">98% Retention</div>
            <div class="text-[10px] text-slate-500">Year-1 Parent Trust</div>
          </button>

          <button onclick="selectMilestone(4)" class="milestone-btn p-3 rounded-lg border border-slate-200 bg-white text-left transition-all hover:bg-slate-50">
            <span class="text-[10px] font-mono text-blue-700 font-bold block">OCT 2026</span>
            <div class="font-bold text-xs text-slate-900 mt-1">Phase 2 Launch</div>
            <div class="text-[10px] text-blue-600 font-semibold">2026-27 Intake Open</div>
          </button>
        </div>

        <!-- Detail Cards -->
        <div class="studio-card p-6 bg-slate-50/50">
          <div id="milestone-detail-0" class="milestone-detail-card space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">MILESTONE 01</span>
              <h4 class="text-base font-bold text-slate-900">Inaugural Campus Opening (January 2025)</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Future Vision Academy opened its doors in Uttara Sector 11 with 120 founding scholars across Playgroup to Grade 7. The campus opened fully completed with certified faculty and central CCTV security from Day One.
            </p>
          </div>

          <div id="milestone-detail-1" class="milestone-detail-card hidden space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-bold">MILESTONE 02</span>
              <h4 class="text-base font-bold text-slate-900">STEM MakerLab & Robotics Suite Unveiled (June 2025)</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Under the leadership of Dr. Nusrat Jahan (BUET), the 28-pod hardware development suite came online, introducing Scratch coding and Arduino logic into the primary school curriculum.
            </p>
          </div>

          <div id="milestone-detail-2" class="milestone-detail-card hidden space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">MILESTONE 03</span>
              <h4 class="text-base font-bold text-slate-900">Inter-School Junior Debate Championship Trophy (November 2025)</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Our Grade 6 & 7 bilingual debating contingent defeated twelve seasoned heritage academies to lift the Uttara Inter-School Junior Debating Championship trophy in parliamentary format.
            </p>
          </div>

          <div id="milestone-detail-3" class="milestone-detail-card hidden space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">MILESTONE 04</span>
              <h4 class="text-base font-bold text-slate-900">98% Parent Retention & Re-enrollment Triumph (January 2026)</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              98% of founding 2025 families re-enrolled for their children's second academic year, establishing Future Vision Academy as the most trusted emergent school in the Uttara education corridor.
            </p>
          </div>

          <div id="milestone-detail-4" class="milestone-detail-card hidden space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">MILESTONE 05</span>
              <h4 class="text-base font-bold text-slate-900">Phase 2 Academic Wing & Session 2026–27 Intake (October 2026)</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Formal unveiling of the Phase 2 academic wing adding 8 smart classrooms, the Black Box drama theater, and expansion of admissions up to Grade 9 for the upcoming 2026–2027 academic year.
            </p>
          </div>
        </div>
      </section>

    </div>
    '''

def get_page_contact():
    return f'''
    <!-- PAGE 5: CONTACT & VISIT (/contact) -->
    <div id="page-contact" class="page-view hidden space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 5.1: Contact Hero -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Contact Hero">
        {spec_overlay(
          cmp_id="CONTACT-HERO-01",
          user_story="As an interested parent, I want to easily schedule a campus walkthrough and find direct contact details without hunting through menus.",
          psych_trigger="Frictionless Accessibility (immediate phone numbers and tour appointment selector).",
          grid_spec="Full-width header • 4-hour response guarantee chip",
          a11y_spec="Semantic heading • Screen-reader accessible layout"
        )}

        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Admissions Desk Open Daily • 4-Hour Response Guarantee</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Connect with Future Vision Academy
          </h1>

          <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
            Whether you wish to schedule a personalized campus walkthrough, speak with our academic counselors regarding dual medium streams, or inspect our STEM labs, we warmly welcome your visit.
          </p>
        </div>
      </section>

      <!-- Block 5.2: Dual-Column Conversion Core (Tour Booking Form + Direct Directory) -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Tour Booking Core">
        {spec_overlay(
          cmp_id="TOUR-FORM-02",
          user_story="As a prospective parent, I want to submit my preferred date and child details so the admissions desk prepares a personalized tour packet for our arrival.",
          psych_trigger="Commitment & Micro-Conversion (booking a physical tour is the #1 conversion event leading to enrollment).",
          grid_spec="8-field tour booking form with instant confirmation feedback state • Right column directory",
          a11y_spec="Semantic form labels, required aria-required attributes, instant focus on error"
        )}

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: 8-Field Interactive Tour Booking Form -->
          <div class="lg:col-span-7">
            <!-- Form Container -->
            <div id="tour-form-container" class="studio-card p-6 sm:p-8 space-y-6">
              <div class="border-b border-slate-200 pb-3">
                <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">PERSONALISED CAMPUS WALKTHROUGH</span>
                <h3 class="text-xl font-black text-slate-900 mt-1">Schedule a Guided Campus Tour</h3>
                <p class="text-xs text-slate-500 mt-0.5">Meet with our Admissions Head and inspect classrooms, wet labs, and athletics spaces.</p>
              </div>

              <form id="tour-booking-form" onsubmit="handleTourBooking(event)" class="space-y-4">
                <!-- Field 1 & 2: Parent Name & Phone -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="tour-name" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Parent / Guardian Name: *
                    </label>
                    <input type="text" id="tour-name" required placeholder="e.g. Dr. Kazi Tanvir Ahmed" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  </div>
                  <div>
                    <label for="tour-phone" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Mobile Number: *
                    </label>
                    <input type="tel" id="tour-phone" required placeholder="+880 17XXXXXXXX" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  </div>
                </div>

                <!-- Field 3 & 4: Email & Child Age -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="tour-email" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Email Address: *
                    </label>
                    <input type="email" id="tour-email" required placeholder="parent@example.com" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  </div>
                  <div>
                    <label for="tour-child" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Child's Name & Current Age:
                    </label>
                    <input type="text" id="tour-child" placeholder="e.g. Rayan (5.5 years)" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  </div>
                </div>

                <!-- Field 5 & 6: Grade Applying & Medium -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="tour-grade" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Grade Applying For: *
                    </label>
                    <select id="tour-grade" required class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option value="Playgroup">Playgroup (Ages 2.5–3.5)</option>
                      <option value="Nursery">Nursery (Ages 3.5–4.5)</option>
                      <option value="Kindergarten">Kindergarten (Ages 4.5–5.5)</option>
                      <option value="Grade 1" selected>Primary Grade 1</option>
                      <option value="Grade 2">Primary Grade 2</option>
                      <option value="Grade 3">Primary Grade 3</option>
                      <option value="Grade 4">Primary Grade 4</option>
                      <option value="Grade 5">Primary Grade 5</option>
                      <option value="Grade 6">Middle School Grade 6</option>
                      <option value="Grade 7">Middle School Grade 7</option>
                      <option value="Grade 8">Middle School Grade 8</option>
                      <option value="Grade 9">Secondary SSC Grade 9</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Curriculum Stream:
                    </label>
                    <div class="flex items-center gap-4 pt-2 text-xs text-slate-800">
                      <label class="flex items-center gap-1.5 cursor-pointer">
                        <input type="radio" name="tour_medium" value="ev" checked class="text-blue-600 focus:ring-blue-500">
                        <span>English Version</span>
                      </label>
                      <label class="flex items-center gap-1.5 cursor-pointer">
                        <input type="radio" name="tour_medium" value="bm" class="text-blue-600 focus:ring-blue-500">
                        <span>Bangla Medium</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Field 7: Date & Time Slot -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="tour-date" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Preferred Date: *
                    </label>
                    <input type="date" id="tour-date" required value="2026-11-16" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  </div>
                  <div>
                    <label for="tour-slot" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                      Preferred Time Slot:
                    </label>
                    <select id="tour-slot" class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option value="09:30 AM – 10:30 AM">Morning Slot: 09:30 AM – 10:30 AM</option>
                      <option value="11:00 AM – 12:00 PM" selected>Morning Slot: 11:00 AM – 12:00 PM</option>
                      <option value="01:30 PM – 02:30 PM">Afternoon Slot: 01:30 PM – 02:30 PM</option>
                      <option value="03:00 PM – 04:00 PM">Afternoon Slot: 03:00 PM – 04:00 PM</option>
                    </select>
                  </div>
                </div>

                <!-- Field 8: Specific Inquiries -->
                <div>
                  <label for="tour-notes" class="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 font-mono">
                    Special Questions or Child Learning Needs:
                  </label>
                  <textarea id="tour-notes" rows="3" placeholder="Tell us about your child's interests, previous schooling, bus route requirements, or questions..." class="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                </div>

                <button type="submit" id="tour-submit-btn" class="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5">
                  Confirm Campus Tour Appointment →
                </button>
              </form>
            </div>

            <!-- Instant Confirmation Feedback State Card (Initially Hidden) -->
            <div id="tour-confirmation-card" class="hidden studio-card p-8 border-l-8 border-l-emerald-600 bg-emerald-50/20 space-y-5 text-left">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <div>
                  <span class="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">CONFIRMED APPOINTMENT</span>
                  <h3 class="text-xl font-black text-slate-900 mt-0.5">Your Campus Walkthrough is Scheduled!</h3>
                </div>
              </div>

              <div class="p-4 bg-white rounded-lg border border-slate-200 space-y-2 text-xs">
                <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span class="text-slate-500">Booking Reference:</span>
                  <strong id="conf-ref-id" class="font-mono text-blue-700 text-sm">AHIA-TOUR-2026-8942</strong>
                </div>
                <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span class="text-slate-500">Parent Name:</span>
                  <strong id="conf-parent" class="text-slate-800"></strong>
                </div>
                <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span class="text-slate-500">Applying Grade:</span>
                  <strong id="conf-grade" class="text-slate-800"></strong>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-500">Scheduled Time:</span>
                  <strong id="conf-schedule" class="text-slate-800"></strong>
                </div>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed">
                An instant SMS and calendar invitation have been dispatched to your mobile number. Please arrive 10 minutes prior to your slot at Gate 1 (Sector 11). Our Admissions Officer will have your personalized prospectus dossier waiting.
              </p>

              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button onclick="alert('Downloading calendar invite (.ics) mockup')" class="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                  📅 Download Calendar Invite (.ics)
                </button>
                <button onclick="window.open('https://maps.google.com/?q=Uttara+Sector+11+Dhaka', '_blank')" class="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                  📍 Open in Google Maps
                </button>
                <button onclick="resetTourForm()" class="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-xs rounded-lg transition-colors ml-auto">
                  Book Another Appointment
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Direct Directory Cards -->
          <div class="lg:col-span-5 space-y-4">
            <div class="studio-card p-5 space-y-3">
              <h4 class="font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">Direct Campus Directory</h4>
              
              <!-- Card 1 -->
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                <div class="font-bold text-slate-900 flex items-center justify-between">
                  <span>Admissions Helpdesk</span>
                  <span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono">Room 102</span>
                </div>
                <div class="text-slate-600">Tel: <strong class="text-slate-800">+880 2 8954120</strong></div>
                <div class="text-slate-600">Mobile / WhatsApp: <strong class="text-slate-800">+880 1711 000000</strong></div>
                <div class="text-slate-500 text-[11px]">Email: admissions@fva.edu.bd</div>
              </div>

              <!-- Card 2 -->
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                <div class="font-bold text-slate-900 flex items-center justify-between">
                  <span>Principal's Secretariat</span>
                  <span class="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-mono">By Appt</span>
                </div>
                <div class="text-slate-600">Email: principal@fva.edu.bd</div>
                <div class="text-slate-500 text-[11px]">Appointment coordination for enrolled parents</div>
              </div>

              <!-- Card 3 -->
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                <div class="font-bold text-slate-900 flex items-center justify-between">
                  <span>Accounts & Tuition Section</span>
                  <span class="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono">Ground Fl</span>
                </div>
                <div class="text-slate-600">Email: accounts@fva.edu.bd</div>
                <div class="text-slate-500 text-[11px]">Fee receipts, online bKash/Nagad/Bank deposits</div>
              </div>

              <!-- Card 4 -->
              <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                <div class="font-bold text-slate-900 flex items-center justify-between">
                  <span>Safe Transit & Bus Coordinator</span>
                  <span class="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono">24/7 Hotline</span>
                </div>
                <div class="text-slate-600">Mobile: <strong class="text-slate-800">+880 1711 999888</strong></div>
                <div class="text-slate-500 text-[11px]">Route allocation, bus GPS access, escort queries</div>
              </div>
            </div>

            <!-- Campus Visiting Hours -->
            <div class="studio-card p-5 space-y-2 text-xs">
              <h4 class="font-bold text-slate-900 uppercase tracking-wider font-mono">Campus Office Hours:</h4>
              <div class="space-y-1 text-slate-600 font-mono text-[11px]">
                <div>• <strong>Sunday – Thursday:</strong> 8:00 AM – 4:30 PM</div>
                <div>• <strong>Saturday:</strong> 9:00 AM – 3:00 PM (Admissions Only)</div>
                <div>• <strong>Friday:</strong> Campus Closed for sanitization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Block 5.3: Campus Location & Interactive Map Container -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Location Map">
        {spec_overlay(
          cmp_id="MAP-LOC-03",
          user_story="As a visiting driver or commuter, I want to find the exact street address, transit links, and parking drop-off lanes.",
          psych_trigger="Physical Reality & Convenience (proves convenient access from Sonargaon Janapath and MRT-6 Metro Rail).",
          grid_spec="Full-width styled map container • Technical blueprint layout",
          a11y_spec="Semantic address markup • High contrast labels"
        )}

        <div class="mb-4">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Campus Location & Transit Guide</h2>
          <p class="text-sm text-slate-600">Plot 42, Road 18, Sector 11, Uttara Model Town, Dhaka-1230 (Adjacent to Sonargaon Janapath).</p>
        </div>

        <div class="studio-card p-6 relative overflow-hidden bg-slate-100">
          <!-- Architectural Blueprint Wireframe Map Placeholder -->
          <div class="w-full h-72 bg-slate-200 border border-slate-300 rounded-lg flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <svg class="absolute inset-0 w-full h-full text-slate-300 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" stroke-width="1.5" />
              <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" stroke-width="2" />
              <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" stroke-width="2" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" stroke-width="1" />
            </svg>

            <!-- Custom School Pin Mockup -->
            <div class="relative z-10 bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-sm">
              <div class="flex items-center gap-2 mb-1">
                <div class="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  FVA
                </div>
                <div class="text-left">
                  <div class="font-bold text-xs text-slate-900">Future Vision Academy Campus</div>
                  <div class="text-[10px] text-slate-500">Plot 42, Road 18, Sector 11, Uttara</div>
                </div>
              </div>
              <p class="text-[11px] text-slate-600 text-left mt-2">
                Dedicated parent parking inside Gate 1 • 15-minute express student drop-off lane.
              </p>
              <button onclick="window.open('https://maps.google.com/?q=Uttara+Sector+11+Dhaka', '_blank')" class="w-full mt-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded transition-colors flex items-center justify-center gap-1">
                Open in Google Maps Navigation →
              </button>
            </div>
          </div>

          <!-- Transit Guide Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs text-left">
            <div class="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
              <span class="font-bold text-slate-900 flex items-center gap-1.5">
                🚇 Metro Rail (MRT-6)
              </span>
              <p class="text-slate-600 leading-snug">
                7 minutes from Uttara North Metro Station. School campus feeder shuttles connect the station to school gates during morning & afternoon bells.
              </p>
            </div>

            <div class="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
              <span class="font-bold text-slate-900 flex items-center gap-1.5">
                🚌 AC Bus Transit Routes
              </span>
              <p class="text-slate-600 leading-snug">
                Covering all sectors of Uttara, Tongi, Khilkhet, Baridhara DOHS, Bashundhara R/A, and Mirpur DOHS with female attendants.
              </p>
            </div>

            <div class="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
              <span class="font-bold text-slate-900 flex items-center gap-1.5">
                🚗 Private Drop-Off Lane
              </span>
              <p class="text-slate-600 leading-snug">
                One-way traffic circular loop off Road 18 ensures zero congestion on Sonargaon Janapath with security marshals assisting children.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
    '''

def get_page_notices():
    return f'''
    <!-- PAGE 6: NOTICES & CALENDAR (/notices) -->
    <div id="page-notices" class="page-view hidden space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 6.1: Notices Hero -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Notices Hero">
        {spec_overlay(
          cmp_id="NOTICES-HERO-01",
          user_story="As a current or prospective parent, I want to review official school notices, circulars, and the academic calendar.",
          psych_trigger="Institutional Transparency (live published gazette proves active, disciplined administrative operations).",
          grid_spec="Full-width header • Gazetted publication badge",
          a11y_spec="Semantic header layout"
        )}

        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Official Academy Gazette & Notice Board</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Notices, Circulars & Academic Updates
          </h1>

          <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
            Official circulars, exam routines, admissions announcements, and administrative schedules published by the Academy Secretariat for our school community.
          </p>
        </div>
      </section>

      <!-- Block 6.2: High-Priority Urgent Admissions Alert Banner -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Urgent Banner">
        {spec_overlay(
          cmp_id="URGENT-BANNER-02",
          user_story="As an applicant, I want urgent alerts immediately highlighted so I don't overlook critical intake deadlines.",
          psych_trigger="Loss Aversion & Timeliness (urgent amber highlight commands immediate visual focus).",
          grid_spec="Pinned notice banner • Dual action buttons",
          a11y_spec="Role alert with high color contrast"
        )}

        <div class="studio-card p-5 border-l-8 border-l-amber-500 bg-amber-50/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="space-y-1 max-w-3xl">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-amber-200 text-amber-900 rounded font-mono font-bold text-[10px] uppercase">URGENT CIRCULAR</span>
              <span class="text-xs text-slate-500 font-mono">Ref: FVA/ADM/2026/01 • 28 Oct 2026</span>
            </div>
            <h3 class="text-base font-bold text-slate-900">
              Session 2026–2027 Admissions Open: Phase 1 Diagnostic Assessment Registration Active
            </h3>
            <p class="text-xs text-slate-600 leading-snug">
              Early assessment slots commence November 15. Parents are requested to register online to secure preferred morning evaluation appointments.
            </p>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <button onclick="openNoticeModal('not-01')" class="px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs rounded-lg transition-colors shadow-sm">
              Read Online
            </button>
            <button onclick="navigateTo('admissions')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors shadow-sm">
              Admissions Hub →
            </button>
          </div>
        </div>
      </section>

      <!-- Block 6.3: Real-Time Search & Category Filter Toolbar -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Filter Toolbar">
        {spec_overlay(
          cmp_id="FILTER-TOOLBAR-03",
          user_story="As a parent searching for exam syllabi, I want a live search bar and category filter to isolate academic circulars instantly.",
          psych_trigger="Instant Gratification (real-time filtering with 0ms lag gives users complete command of the information).",
          grid_spec="Live search input + 5 category pills • Instant filtering on input event",
          a11y_spec="Search landmark • Clear label • Filter pills with aria-pressed"
        )}

        <div class="studio-card p-4 space-y-3">
          <!-- Search Input -->
          <div class="relative">
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="notice-search-input" onkeyup="filterNotices()" placeholder="Search notices by keyword, subject, or reference code..." class="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          </div>

          <!-- Category Filter Pills -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button onclick="setNoticeCategory('all')" class="notice-cat-btn active px-3 py-1.5 rounded-md text-xs font-semibold transition-all bg-blue-600 text-white" data-cat="all">
              All Notices (6)
            </button>
            <button onclick="setNoticeCategory('Admissions')" class="notice-cat-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100 border border-slate-200" data-cat="Admissions">
              Admissions (1)
            </button>
            <button onclick="setNoticeCategory('Academic')" class="notice-cat-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100 border border-slate-200" data-cat="Academic">
              Academic (2)
            </button>
            <button onclick="setNoticeCategory('Administrative')" class="notice-cat-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100 border border-slate-200" data-cat="Administrative">
              Administrative (2)
            </button>
            <button onclick="setNoticeCategory('Events & Sports')" class="notice-cat-btn px-3 py-1.5 rounded-md text-xs font-semibold transition-all text-slate-700 bg-white hover:bg-slate-100 border border-slate-200" data-cat="Events & Sports">
              Events & Sports (1)
            </button>
          </div>
        </div>
      </section>

      <!-- Block 6.4: Notice Cards Feed -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Notice Cards Feed">
        {spec_overlay(
          cmp_id="NOTICE-FEED-04",
          user_story="As a parent reading circulars on my phone, I want to read the notice right in the browser or download an official PDF copy.",
          psych_trigger="Convenience & Trust (split-date badges facilitate swift chronological scanning; modal reader prevents PDF storage clutter).",
          grid_spec="Vertical feed • Split-date badge column • Direct modal inspection",
          a11y_spec="Semantic article tags with date time attributes"
        )}

        <div class="space-y-3" id="notice-cards-container">
          
          <!-- Notice 1 -->
          <div class="notice-item studio-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-title="Admissions Open for Academic Year 2026-2027 Playgroup to Grade 9" data-cat="Admissions" data-ref="FVA/ADM/2026/01">
            <div class="flex items-start gap-4">
              <!-- Split Date Badge -->
              <div class="w-14 h-14 rounded-lg bg-blue-50 border border-blue-200 flex flex-col items-center justify-center shrink-0 text-center">
                <span class="font-black text-lg text-blue-700 leading-none">28</span>
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase">OCT 2026</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">Admissions</span>
                  <span class="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold uppercase">Urgent</span>
                  <span class="text-[10px] font-mono text-slate-400">Ref: FVA/ADM/2026/01</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">
                  Admissions Open for Academic Year 2026–2027: Playgroup to Grade 9
                </h3>
                <p class="text-xs text-slate-500 line-clamp-1">
                  Application guidelines, assessment calendar, sibling concessions, and seat matrix for upcoming academic session.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button onclick="openNoticeModal('not-01')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg transition-colors">
                Read Online
              </button>
              <button onclick="alert('Downloading Official Circular PDF (340 KB)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
                Download PDF (340 KB)
              </button>
            </div>
          </div>

          <!-- Notice 2 -->
          <div class="notice-item studio-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-title="Mid-Term Assessment Routine & Subject-wise Guidelines Grades 1 to 8" data-cat="Academic" data-ref="FVA/ACAD/2026/14">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center">
                <span class="font-black text-lg text-slate-800 leading-none">24</span>
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase">OCT 2026</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">Academic</span>
                  <span class="text-[10px] font-mono text-slate-400">Ref: FVA/ACAD/2026/14</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">
                  Mid-Term Assessment Routine & Subject-wise Guidelines (Grades 1–8)
                </h3>
                <p class="text-xs text-slate-500 line-clamp-1">
                  Timetable, room distribution, conceptual question patterns, and modified bus timings during exam week.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button onclick="openNoticeModal('not-02')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg transition-colors">
                Read Online
              </button>
              <button onclick="alert('Downloading Exam Routine PDF (512 KB)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
                Download PDF (512 KB)
              </button>
            </div>
          </div>

          <!-- Notice 3 -->
          <div class="notice-item studio-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-title="Circular National Holiday & Winter Recess Academic Schedule 2026" data-cat="Administrative" data-ref="FVA/ADMIN/2026/09">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center">
                <span class="font-black text-lg text-slate-800 leading-none">18</span>
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase">OCT 2026</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold uppercase">Administrative</span>
                  <span class="text-[10px] font-mono text-slate-400">Ref: FVA/ADMIN/2026/09</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">
                  Circular: National Holiday & Winter Recess Academic Schedule 2026
                </h3>
                <p class="text-xs text-slate-500 line-clamp-1">
                  Schedule for Victory Day holiday, winter break dates, and admissions helpdesk operating hours.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button onclick="openNoticeModal('not-03')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg transition-colors">
                Read Online
              </button>
              <button onclick="alert('Downloading Recess Schedule PDF (180 KB)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
                Download PDF (180 KB)
              </button>
            </div>
          </div>

          <!-- Notice 4 -->
          <div class="notice-item studio-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-title="Annual STEM Maker Fair & National Junior Olympiad Selection Camp" data-cat="Events & Sports" data-ref="FVA/STEM/2026/04">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center">
                <span class="font-black text-lg text-slate-800 leading-none">12</span>
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase">OCT 2026</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold uppercase">Events & Sports</span>
                  <span class="text-[10px] font-mono text-slate-400">Ref: FVA/STEM/2026/04</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">
                  Annual STEM Maker Fair & National Junior Olympiad Selection Camp
                </h3>
                <p class="text-xs text-slate-500 line-clamp-1">
                  Exhibition guidelines, junior robotics project submissions, and parent visitor registration pass.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button onclick="openNoticeModal('not-04')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg transition-colors">
                Read Online
              </button>
              <button onclick="alert('Downloading STEM Maker Fair Circular PDF (420 KB)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
                Download PDF (420 KB)
              </button>
            </div>
          </div>

          <!-- Notice 5 -->
          <div class="notice-item studio-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-title="School Transit Fleet Expansion New Route Additions Mirpur Bashundhara" data-cat="Administrative" data-ref="FVA/TRANS/2026/02">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center">
                <span class="font-black text-lg text-slate-800 leading-none">05</span>
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase">OCT 2026</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold uppercase">Administrative</span>
                  <span class="text-[10px] font-mono text-slate-400">Ref: FVA/TRANS/2026/02</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">
                  School Transit Fleet Expansion: New Route Additions for Mirpur & Bashundhara
                </h3>
                <p class="text-xs text-slate-500 line-clamp-1">
                  Route 4 and 5 launch details, pickup stop schedules, safety parameters, and live GPS app setup guide.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button onclick="openNoticeModal('not-05')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg transition-colors">
                Read Online
              </button>
              <button onclick="alert('Downloading Bus Routes PDF (210 KB)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
                Download PDF (210 KB)
              </button>
            </div>
          </div>

          <!-- Notice 6 -->
          <div class="notice-item studio-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-title="Bilingual Cambridge Phonics Workshop for Pre-Primary Parents" data-cat="Academic" data-ref="FVA/ACAD/2026/15">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center">
                <span class="font-black text-lg text-slate-800 leading-none">29</span>
                <span class="text-[9px] font-mono font-bold text-slate-500 uppercase">SEP 2026</span>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">Academic</span>
                  <span class="text-[10px] font-mono text-slate-400">Ref: FVA/ACAD/2026/15</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 leading-snug">
                  Bilingual Cambridge Phonics Workshop for Pre-Primary Parents
                </h3>
                <p class="text-xs text-slate-500 line-clamp-1">
                  Practical masterclass on supporting early biliteracy, phonics decoding, and screen-free reading at home.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button onclick="openNoticeModal('not-06')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-lg transition-colors">
                Read Online
              </button>
              <button onclick="alert('Downloading Workshop Guide PDF (290 KB)')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
                Download PDF (290 KB)
              </button>
            </div>
          </div>

          <!-- Empty Search State -->
          <div id="notice-empty-state" class="hidden studio-card p-8 text-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-lg">
              🔍
            </div>
            <h4 class="font-bold text-sm text-slate-800">No circulars match your search</h4>
            <p class="text-xs text-slate-500">Try modifying your keyword query or resetting the category filter to 'All Notices'.</p>
          </div>
        </div>
      </section>

      <!-- Block 6.5: Academic Calendar & Key Dates Matrix -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Academic Calendar">
        {spec_overlay(
          cmp_id="CALENDAR-05",
          user_story="As a working parent, I want to review the full 3-term academic year schedule so I can plan family holidays and study periods.",
          psych_trigger="Predictability & Organization (clear term schedules build operational credibility).",
          grid_spec="3-column term matrix • Official single-sheet PDF download button",
          a11y_spec="Semantic grid with clear term headers"
        )}

        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Academic Calendar Highlights (2026–2027)</h2>
          <p class="text-sm text-slate-600">The academic year is organized into three balanced terms with planned assessment windows.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Term 1 -->
          <div class="studio-card p-5 space-y-3 border-t-4 border-t-blue-600">
            <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">TERM 01: JAN – APR 2027</span>
            <h3 class="text-base font-bold text-slate-900">Foundational Term</h3>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li>• <strong>10 Jan:</strong> New Academic Session Commences</li>
              <li>• <strong>21 Feb:</strong> International Mother Language Day</li>
              <li>• <strong>26 Mar:</strong> Independence Day Commemoration</li>
              <li>• <strong>14 Apr:</strong> Pahela Baishakh Celebration</li>
              <li>• <strong>22 Apr:</strong> Term 1 Formative Progress Review</li>
            </ul>
          </div>

          <!-- Term 2 -->
          <div class="studio-card p-5 space-y-3 border-t-4 border-t-emerald-600">
            <span class="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">TERM 02: MAY – AUG 2027</span>
            <h3 class="text-base font-bold text-slate-900">Inquiry & Half-Yearly</h3>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li>• <strong>04 May:</strong> Term 2 Classes Resume</li>
              <li>• <strong>15 Jun:</strong> Half-Yearly Diagnostic Assessments</li>
              <li>• <strong>01 Jul:</strong> Summer Recess & Faculty Workshops</li>
              <li>• <strong>01 Aug:</strong> Inter-House Athletics & Futsal Tourney</li>
              <li>• <strong>15 Aug:</strong> National Day Observance</li>
            </ul>
          </div>

          <!-- Term 3 -->
          <div class="studio-card p-5 space-y-3 border-t-4 border-t-amber-600">
            <span class="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold uppercase">TERM 03: SEP – DEC 2027</span>
            <h3 class="text-base font-bold text-slate-900">Culmination & Annual Board</h3>
            <ul class="space-y-1.5 text-xs text-slate-600">
              <li>• <strong>01 Sep:</strong> Final Term Commences</li>
              <li>• <strong>18 Oct:</strong> Annual STEM Maker & Science Fair</li>
              <li>• <strong>20 Nov:</strong> Annual Comprehensive Evaluations</li>
              <li>• <strong>10 Dec:</strong> Annual Result Carnival & Awards</li>
              <li>• <strong>16 Dec:</strong> Victory Day & Winter Break Begins</li>
            </ul>
          </div>
        </div>

        <div class="mt-4 p-4 studio-card flex flex-wrap items-center justify-between gap-3 bg-slate-50">
          <div class="text-xs text-slate-600">
            <strong>Download Complete Single-Sheet Academic Calendar:</strong> Printable PDF containing all gazetted government holidays, exam routines, and term dates.
          </div>
          <button onclick="alert('Downloading 2026-27 Complete Academic Calendar PDF (Mockup)')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors shadow-sm">
            Download 2026–27 Calendar PDF (Single Sheet) →
          </button>
        </div>
      </section>

    </div>
    '''

def get_page_architecture():
    return f'''
    <!-- PAGE 7: USER FLOW & ARCHITECTURE (/architecture) -->
    <div id="page-architecture" class="page-view hidden space-y-12 py-6 px-4 sm:px-6">
      
      <!-- Block 7.1: Architecture Hero -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • UX Architecture">
        {spec_overlay(
          cmp_id="ARCH-HERO-01",
          user_story="As the Lead UX Architect and Product Engineering team, I want to review the complete prospective parent conversion funnel, information architecture, and psychological inoculation matrix.",
          psych_trigger="System Rigor (demonstrates disciplined, intentional design aligned to real user anxiety models).",
          grid_spec="Full-width header • Blueprint architecture badges",
          a11y_spec="High-contrast typography • Structured diagram nodes"
        )}

        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>UX Systems Engineering • Conversion Funnel Blueprint</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            User Flow, Sitemap & Conversion Psychology
          </h1>

          <p class="text-base text-slate-600 max-w-3xl leading-relaxed">
            The complete architectural map illustrating how prospective parents navigate from awareness to diagnostic assessment, enrolment, and long-term community retention.
          </p>
        </div>
      </section>

      <!-- Block 7.2: Prospective Parent Conversion Funnel Flowchart -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Conversion Flowchart">
        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Prospective Parent 7-Stage Conversion Funnel</h2>
          <p class="text-sm text-slate-600">How our UX dissolves hesitations and accelerates decision-making at every step.</p>
        </div>

        <div class="space-y-4">
          <!-- Funnel Stage 1 -->
          <div class="studio-card p-5 border-l-4 border-l-blue-600 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 01: DISCOVERY</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Awareness & First Impression</h4>
              <p class="text-[11px] text-slate-500">Google Search, Facebook, Word of Mouth</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Is this a real school or a coaching center in a rented flat?"
            </div>
            <div class="md:col-span-5 text-xs text-blue-900 bg-blue-50 p-2.5 rounded-lg border border-blue-200">
              <strong>UX Solution:</strong> Prominent EIIN 138421 badge, Dhaka Board registration, hero metrics (1:12 ratio cap, 100% certified faculty).
            </div>
          </div>

          <!-- Funnel Stage 2 -->
          <div class="studio-card p-5 border-l-4 border-l-indigo-600 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 02: CREDIBILITY</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Trust Building & Pedigree</h4>
              <p class="text-[11px] text-slate-500">About Us, Principal Letter, Faculty Roster</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Who is running this? Will the school survive beyond Year 2?"
            </div>
            <div class="md:col-span-5 text-xs text-indigo-900 bg-indigo-50 p-2.5 rounded-lg border border-indigo-200">
              <strong>UX Solution:</strong> Dr. Tariqul Chowdhury feature (Ph.D. Durham), verified 98% Year-1 parent retention metric, interactive milestone roadmap.
            </div>
          </div>

          <!-- Funnel Stage 3 -->
          <div class="studio-card p-5 border-l-4 border-l-purple-600 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 03: FIT & CURRICULUM</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Educational Alignment</h4>
              <p class="text-[11px] text-slate-500">Academics Hub, Dual Medium Matrix</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Is English Version truly bilingual? Will my child pass SSC exams?"
            </div>
            <div class="md:col-span-5 text-xs text-purple-900 bg-purple-50 p-2.5 rounded-lg border border-purple-200">
              <strong>UX Solution:</strong> Dual medium comparison table, Singapore math breakdown, 28-pod STEM maker lab proof, Olympiad preparation.
            </div>
          </div>

          <!-- Funnel Stage 4 -->
          <div class="studio-card p-5 border-l-4 border-l-amber-500 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 04: TRANSPARENCY</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Financial & Placement Clarity</h4>
              <p class="text-[11px] text-slate-500">Tuition Calculator, Age Placement Finder</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Will they surprise us with hidden fees? What class does my 5-year-old qualify for?"
            </div>
            <div class="md:col-span-5 text-xs text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
              <strong>UX Solution:</strong> Interactive Tuition Calculator with 25%/40% sibling discounts, Age Finder widget, zero-hidden-fee pledge.
            </div>
          </div>

          <!-- Funnel Stage 5 -->
          <div class="studio-card p-5 border-l-4 border-l-emerald-600 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 05: CONVERSION</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Walkthrough Booking & Dossier</h4>
              <p class="text-[11px] text-slate-500">Tour Booking Form, Online Application</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Will scheduling a tour be cumbersome? Will my inquiry be ignored?"
            </div>
            <div class="md:col-span-5 text-xs text-emerald-900 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <strong>UX Solution:</strong> 8-field tour form with instant appointment confirmation ID, downloadable .ics calendar invite, 4-hour desk callback guarantee.
            </div>
          </div>

          <!-- Funnel Stage 6 -->
          <div class="studio-card p-5 border-l-4 border-l-teal-600 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-bold uppercase">STAGE 06: EVALUATION</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Diagnostic Assessment & Meet</h4>
              <p class="text-[11px] text-slate-500">Campus Walkthrough, Play Observation</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Will my toddler be intimidated by high-stress entrance exams?"
            </div>
            <div class="md:col-span-5 text-xs text-teal-900 bg-teal-50 p-2.5 rounded-lg border border-teal-200">
              <strong>UX Solution:</strong> Explicitly labelled "Play-based readiness observation" accompanied by parents, rapid 48-hour feedback cycle.
            </div>
          </div>

          <!-- Funnel Stage 7 -->
          <div class="studio-card p-5 border-l-4 border-l-blue-800 bg-white grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div class="md:col-span-3">
              <span class="text-[10px] font-mono bg-blue-200 text-blue-900 px-2 py-0.5 rounded font-bold uppercase">STAGE 07: RETENTION</span>
              <h4 class="font-bold text-sm text-slate-900 mt-1">Parent Portal & Community</h4>
              <p class="text-[11px] text-slate-500">Mobile Portal, GPS Bus App, Circulars</p>
            </div>
            <div class="md:col-span-4 text-xs text-slate-600">
              <strong>Parent Anxieties:</strong> "Will the school ignore us after tuition is paid?"
            </div>
            <div class="md:col-span-5 text-xs text-blue-900 bg-blue-50 p-2.5 rounded-lg border border-blue-200">
              <strong>UX Solution:</strong> Daily mobile portal homework/attendance tracking, live bus GPS telemetry, weekly teacher consultations driving 98% retention.
            </div>
          </div>
        </div>
      </section>

      <!-- Block 7.3: Complete Information Architecture Sitemap -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Sitemap Tree">
        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">Information Architecture & Page Hierarchy</h2>
          <p class="text-sm text-slate-600">Clean modular structure with zero dead ends and persistent admissions access.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <!-- Page 1 IA -->
          <div class="studio-card p-4 space-y-2">
            <div class="font-bold text-sm text-blue-700 flex items-center justify-between">
              <span>🏠 Home (/)</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Conversion Hub</span>
            </div>
            <ul class="space-y-1 text-slate-600 pl-3 border-l-2 border-slate-200">
              <li>1.1 Split Hero with Credibility Chips</li>
              <li>1.2 Six Quantitative Metric Counters</li>
              <li>1.3 Four Educational Pillars</li>
              <li>1.4 Academic Stages Quick-Pathing</li>
              <li>1.5 Year-2 Advantage (6 Objections)</li>
              <li>1.6 Campus Life Gallery & Modal</li>
              <li>1.7 Academic Leadership Pedigree</li>
              <li>1.8 Founding Parent Testimonials</li>
              <li>1.9 Session 2026-27 Intake Banner</li>
            </ul>
          </div>

          <!-- Page 2 IA -->
          <div class="studio-card p-4 space-y-2">
            <div class="font-bold text-sm text-emerald-800 flex items-center justify-between">
              <span>🎓 Admissions (/admissions)</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Enrollment Hub</span>
            </div>
            <ul class="space-y-1 text-slate-600 pl-3 border-l-2 border-slate-200">
              <li>2.1 Admissions Hero & 68% Capacity Meter</li>
              <li>2.2 The 5-Step Admissions Journey</li>
              <li>2.3 Interactive Age & Grade Placement Finder</li>
              <li>2.4 Interactive Tuition & Sibling Calculator</li>
              <li>2.5 Required Documents Checklist & PDFs</li>
              <li>2.6 Admissions FAQ Accordion</li>
            </ul>
          </div>

          <!-- Page 3 IA -->
          <div class="studio-card p-4 space-y-2">
            <div class="font-bold text-sm text-purple-700 flex items-center justify-between">
              <span>🔬 Academics (/academics)</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Pedagogy Suite</span>
            </div>
            <ul class="space-y-1 text-slate-600 pl-3 border-l-2 border-slate-200">
              <li>3.1 Academics Hero & Inquiry Principles</li>
              <li>3.2 4-Stage Tab Switcher (PG to SSC)</li>
              <li>3.3 Dual Medium Comparison Matrix</li>
              <li>3.4 28-Pod STEM MakerLab Spotlight</li>
              <li>3.5 6 Co-Curricular & Character Clubs</li>
            </ul>
          </div>

          <!-- Page 4 IA -->
          <div class="studio-card p-4 space-y-2">
            <div class="font-bold text-sm text-indigo-700 flex items-center justify-between">
              <span>🏛️ About Us (/about)</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Institutional Pedigree</span>
            </div>
            <ul class="space-y-1 text-slate-600 pl-3 border-l-2 border-slate-200">
              <li>4.1 Purpose-Built Sanctuary Mission</li>
              <li>4.2 Principal Dr. Tariqul Letter & Credentials</li>
              <li>4.3 Mission, Vision & Values Quadrant</li>
              <li>4.4 EIIN 138421 Government Legitimacy</li>
              <li>4.5 Tri-Pillar Safeguarding Charter</li>
              <li>4.6 Interactive Milestone Roadmap (2025-27)</li>
            </ul>
          </div>

          <!-- Page 5 IA -->
          <div class="studio-card p-4 space-y-2">
            <div class="font-bold text-sm text-amber-800 flex items-center justify-between">
              <span>📍 Contact & Visit (/contact)</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Tour Booking Core</span>
            </div>
            <ul class="space-y-1 text-slate-600 pl-3 border-l-2 border-slate-200">
              <li>5.1 Contact Hero & 4-Hour Response Guarantee</li>
              <li>5.2 8-Field Interactive Tour Booking Form</li>
              <li>5.3 Instant Confirmation Feedback State</li>
              <li>5.4 Direct Campus Department Directory</li>
              <li>5.5 Location Blueprint Map & Metro Guide</li>
            </ul>
          </div>

          <!-- Page 6 IA -->
          <div class="studio-card p-4 space-y-2">
            <div class="font-bold text-sm text-rose-700 flex items-center justify-between">
              <span>📢 Notices (/notices)</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Official Gazette</span>
            </div>
            <ul class="space-y-1 text-slate-600 pl-3 border-l-2 border-slate-200">
              <li>6.1 Official Gazette Header</li>
              <li>6.2 High-Priority Urgent Admissions Alert</li>
              <li>6.3 Real-Time Search & Category Filters</li>
              <li>6.4 6 Detailed Circulars with Split-Dates</li>
              <li>6.5 Interactive Notice Reader Modal</li>
              <li>6.6 3-Term Academic Calendar Matrix</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Block 7.4: The 5 Compensating Trust Anchors Psychology Matrix -->
      <section class="max-w-7xl mx-auto text-left" data-spec-metric="8pt Grid • Psychology Matrix">
        <div class="mb-6">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight">The 5 Compensating Trust Anchors (Psychology Matrix)</h2>
          <p class="text-sm text-slate-600">How every parental anxiety is neutralized with deliberate UX evidence.</p>
        </div>

        <div class="overflow-x-auto studio-card">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-slate-100 border-b border-slate-200 text-slate-900 font-mono">
                <th class="p-3.5 font-bold uppercase tracking-wider">Parent Hesitation</th>
                <th class="p-3.5 font-bold uppercase tracking-wider">Cognitive Friction Point</th>
                <th class="p-3.5 font-bold uppercase tracking-wider text-blue-700">UX Compensating Anchor</th>
                <th class="p-3.5 font-bold uppercase tracking-wider text-emerald-800">Measurable Result</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td class="p-3.5 font-bold text-slate-900">1. Institutional Permanence</td>
                <td class="p-3.5">"Will this school survive long-term or fold like other startups?"</td>
                <td class="p-3.5 text-blue-700 font-medium">Official EIIN 138421, Dhaka Board registration seal, Phase 2 campus blueprints</td>
                <td class="p-3.5 text-emerald-700 font-bold">100% Legal Legitimacy</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900">2. Overcrowding & Attention</td>
                <td class="p-3.5">"Will my child be an anonymous number in an overcrowded room?"</td>
                <td class="p-3.5 text-blue-700 font-medium">Strictly capped 1:12 Early Years and 1:15 Primary ratios, master faculty profiles</td>
                <td class="p-3.5 text-emerald-700 font-bold">Guaranteed Personal Care</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900">3. Financial Obscurity</td>
                <td class="p-3.5">"Will they lure us in and surprise us with sudden levies?"</td>
                <td class="p-3.5 text-blue-700 font-medium">Interactive fee calculator, 25%/40% sibling discounts, zero hidden fees pledge</td>
                <td class="p-3.5 text-emerald-700 font-bold">Zero Financial Skepticism</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900">4. Child Safety & Welfare</td>
                <td class="p-3.5">"Is my child safe from traffic, bullying, and emergencies?"</td>
                <td class="p-3.5 text-blue-700 font-medium">128-camera CCTV perimeter, resident pediatric nurse, GPS bus with female escort</td>
                <td class="p-3.5 text-emerald-700 font-bold">Total Maternal Peace of Mind</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900">5. Board Exam Rigor</td>
                <td class="p-3.5">"Can a new school prepare kids for competitive SSC exams?"</td>
                <td class="p-3.5 text-blue-700 font-medium">Dual Medium NCTB parity, full science wet labs, Junior Olympiad trainer</td>
                <td class="p-3.5 text-emerald-700 font-bold">98% Year-1 Re-Enrollment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
    '''
