# wireframe_js.py
# Interactive Client Scripts for Light Mode Wireframe Prototyping Suite

JS_SCRIPTS = """
<script>
  // Global State
  const AppState = {
    currentPage: 'home',
    currentViewport: 'desktop',
    specMode: false,
    blueprintGrid: false,
    galleryFilter: 'all',
    noticeFilter: 'all',
    noticeSearch: ''
  };

  // Facility Data for Lightbox Modal
  const facilityData = {
    'stem-lab': {
      title: 'STEM Innovation Suite & Hardware Dev Pods',
      category: 'STEM & Technology',
      capacity: '28 Students (1:1 Hardware Pods)',
      specs: [
        '28 Dedicated Arduino & micro:bit hardware workstations',
        'Dual 3D Prototyping Stations (Creality Ender 3)',
        'Anti-static ESD workbenches with fume extraction',
        'Interactive 75" Smart Interactive Display Board'
      ],
      description: 'Our flagship innovation workspace where students transition from digital consumers to creators. Starting in Grade 1 with block-based Scratch logic, pupils advance to embedded C++ and Python robotics projects.',
      supervisor: 'Dr. Nusrat Jahan, M.Sc. (BUET)'
    },
    'science-lab': {
      title: 'Multidisciplinary Science Wet Laboratory',
      category: 'Classrooms & Labs',
      capacity: '32 Students (Dual Bench Island)',
      specs: [
        'Dedicated gas manifolds and vacuum filtration points',
        'High-resolution compound binocular microscopes (Olympus)',
        'Chemical fume hood with active carbon filtration',
        'Full emergency eye-wash station & safety shower'
      ],
      description: 'Fully compliant with Cambridge and NCTB practical science examination standards. Supports biology dissection, chemistry titration, and physics mechanics with hands-on safety protocols.',
      supervisor: 'Kazi Tanvir Hasan, M.Sc. Chemistry'
    },
    'library': {
      title: 'Knowledge Commons & Collaborative Library',
      category: 'Arts & Library',
      capacity: '120 Readers',
      specs: [
        '15,000+ Curated titles in English and Bengali',
        'Digital catalog terminals with JSTOR Junior access',
        'Acoustically treated quiet reading study carrels',
        'Early Years storytelling pit with ergonomic floor cushions'
      ],
      description: 'The intellectual heart of our campus. Features natural daylight from floor-to-ceiling double-glazed windows, promoting reading stamina and research literacy across all grade tiers.',
      supervisor: 'Tahmina Sultana, Master of Information Science'
    },
    'futsal-turf': {
      title: 'All-Weather Futsal Turf & Athletics Arena',
      category: 'Sports & Play',
      capacity: '200 Spectators / Full Squad',
      specs: [
        'FIFA-grade non-abrasive shock-absorbing synthetic turf',
        'Surrounding high-tensile safety netting & floodlights',
        '200-meter sprint running perimeter track',
        'Dedicated equipment locker with medical ice station'
      ],
      description: 'Designed for year-round athletic excellence. Hosts our inter-house futsal tournaments, morning drill exercises, and after-school sports academy sessions under certified coaches.',
      supervisor: 'Coach Mahfuzur Rahman (AFC Licensed)'
    },
    'theater': {
      title: 'Black Box Performing Arts & Drama Studio',
      category: 'Arts & Library',
      capacity: '250 Attendees',
      specs: [
        'Programmable DMX LED lighting grid',
        'Professional audio acoustic baffling and wireless lapels',
        'Modular stage risers for flexible drama layouts',
        'Backstage dressing room and costume repository'
      ],
      description: 'A versatile venue for bilingual debate tournaments, annual Shakespeare & Tagore drama productions, musical recitals, and public speaking development.',
      supervisor: 'Shamima Akhter, M.Ed. (Monash)'
    },
    'cafeteria': {
      title: 'Hygienic Dining Commons & Nutrition Bar',
      category: 'Facilities',
      capacity: '180 Diners per sitting',
      specs: [
        'Daily hot, balanced chef-prepared balanced meals',
        'UV-sterilized cutlery and touchless wash basins',
        'Nutritional oversight by certified pediatric dietitian',
        'Strictly allergen-labeled dietary zones'
      ],
      description: 'Promoting healthy eating habits and community fellowship. Serving hot, freshly cooked meals with zero processed additives, ensuring sustained cognitive energy for our scholars.',
      supervisor: 'Chef Anisur Rahman & Nutrition Team'
    },
    'infirmary': {
      title: 'Pediatric Medical & First-Aid Health Bay',
      category: 'Safety & Welfare',
      capacity: '4 Clinical Beds',
      specs: [
        'Full-time licensed resident pediatric nurse on duty',
        'Automated External Defibrillator (AED) & Medical Oxygen',
        'Emergency transfer ambulance protocol with nearby hospital',
        'Comprehensive digital student health records'
      ],
      description: 'Equipped to handle acute health issues, preventative screening, growth charting, and immediate first response, giving parents total peace of mind throughout the school day.',
      supervisor: 'Sister Rehana Parvin, B.Sc. Nursing'
    },
    'cctv-room': {
      title: 'Central 24/7 Security & Monitoring Command Hub',
      category: 'Safety & Welfare',
      capacity: 'Security Team Station',
      specs: [
        '128 Full-HD IP security cameras with zero blind spots',
        'Facial-recognition and RFID turnstile attendance tracking',
        '24/7 Monitored perimeter sensors and visitor verification',
        'Dedicated emergency PA system broadcasting to all wings'
      ],
      description: 'Our campus is an impenetrable sanctuary for children. Controlled access gates ensure that only authorized guardians and staff can enter the learning corridors.',
      supervisor: 'Capt. (Retd.) M. A. Karim, Head of Campus Security'
    }
  };

  // Notice Data for Notice Reader Modal
  const noticeData = {
    'not-01': {
      ref: 'FVA/ADM/2026/01',
      date: '28 October 2026',
      category: 'Admissions',
      isUrgent: true,
      title: 'Admissions Open for Academic Year 2026–2027: Playgroup to Grade 9',
      body: `
        <p class="mb-3">Future Vision Academy cordially invites applications for admission into Academic Session 2026–2027 for Playgroup through Grade 9 across both <strong>English Version (NCTB)</strong> and <strong>Bangla Medium</strong> streams.</p>
        <h4 class="font-bold text-slate-900 mt-4 mb-2">Key Timelines & Evaluation Schedule:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>Application Dossier Submissions:</strong> Open now through 10 December 2026.</li>
          <li><strong>Phase 1 Diagnostic Assessment:</strong> 15 November to 20 November 2026.</li>
          <li><strong>Results & Offer Letters:</strong> Dispatched via SMS and Parent Portal within 48 hours of assessment.</li>
          <li><strong>New Session Orientation:</strong> Saturday, 10 January 2027.</li>
        </ul>
        <p class="mb-3">Parents are advised to submit applications early as seats are strictly capped at <strong>1:12 for Pre-Primary</strong> and <strong>1:15 for Primary</strong> to maintain our pedagogical quality standard.</p>
        <div class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs">
          <strong>Note for Sibling Applicants:</strong> Sibling discount concessions (25% for 2nd child, 40% for 3rd child) are processed automatically during verification.
        </div>
      `,
      signatory: 'Dr. Tariqul Islam Chowdhury, Ph.D.',
      designation: 'Principal & Academic Head'
    },
    'not-02': {
      ref: 'FVA/ACAD/2026/14',
      date: '24 October 2026',
      category: 'Academic',
      isUrgent: false,
      title: 'Mid-Term Assessment Routine & Subject-wise Guidelines (Grades 1–8)',
      body: `
        <p class="mb-3">This is to notify all parents and guardians that the Mid-Term Diagnostic Assessments for Grades 1 through 8 will commence from <strong>Sunday, 8 November 2026</strong> according to the published schedule.</p>
        <h4 class="font-bold text-slate-900 mt-4 mb-2">Assessment Philosophy & Conduct:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li>Assessments focus on conceptual understanding and problem-solving, not rote memorization.</li>
          <li>Class timings during assessment days: 8:30 AM to 12:00 PM.</li>
          <li>School bus transit will operate on modified schedules to accommodate early departures.</li>
          <li>No high-stakes pressure: continuous formative weights represent 40% of the term assessment.</li>
        </ul>
        <p class="mb-3">Detailed subject syllabi and question pattern blueprints are downloadable from the Parent Portal.</p>
      `,
      signatory: 'Shamima Akhter, M.Ed.',
      designation: 'Head of Academic Affairs'
    },
    'not-03': {
      ref: 'FVA/ADMIN/2026/09',
      date: '18 October 2026',
      category: 'Administrative',
      isUrgent: false,
      title: 'Circular: National Holiday & Winter Recess Academic Schedule 2026',
      body: `
        <p class="mb-3">In observance of government notifications and the Dhaka Board academic calendar, the academy announces the scheduled winter recess and administrative schedule:</p>
        <ul class="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>Victory Day Holiday:</strong> Wednesday, 16 December 2026.</li>
          <li><strong>Winter Recess:</strong> 20 December 2026 to 2 January 2027.</li>
          <li><strong>Admissions Helpdesk During Recess:</strong> Open daily 9:00 AM – 3:00 PM (except Fridays).</li>
          <li><strong>Faculty Professional Development Week:</strong> 3 January to 7 January 2027.</li>
        </ul>
        <p class="mb-3">Academic classes will resume in full on <strong>Sunday, 10 January 2027</strong>.</p>
      `,
      signatory: 'Admissions Secretariat',
      designation: 'Future Vision Academy'
    },
    'not-04': {
      ref: 'FVA/STEM/2026/04',
      date: '12 October 2026',
      category: 'Events & Sports',
      isUrgent: false,
      title: 'Annual STEM Maker Fair & National Junior Olympiad Selection Camp',
      body: `
        <p class="mb-3">Future Vision Academy is thrilled to unveil the 2nd Annual STEM Maker Fair and Junior Robotics Exhibition scheduled for <strong>Saturday, 21 November 2026</strong> in the Campus Multipurpose Arena.</p>
        <h4 class="font-bold text-slate-900 mt-4 mb-2">Highlights of the Fair:</h4>
        <ul class="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li>Over 45 student-built robotics and automated sensor exhibits.</li>
          <li>Live junior block coding hackathon (Scratch & Python categories).</li>
          <li>Selection trials for the Bangladesh Junior Science Olympiad (BdJSO) cohort.</li>
          <li>Interactive science fun workshops open to visiting prospective students.</li>
        </ul>
        <p class="mb-3">Parents and visiting families are warmly invited to attend between 10:00 AM and 4:00 PM.</p>
      `,
      signatory: 'Dr. Nusrat Jahan, M.Sc.',
      designation: 'Head of STEM & Sciences'
    },
    'not-05': {
      ref: 'FVA/TRANS/2026/02',
      date: '05 October 2026',
      category: 'Administrative',
      isUrgent: false,
      title: 'School Transit Fleet Expansion: New Route Additions for Mirpur & Bashundhara',
      body: `
        <p class="mb-3">To better accommodate demand from neighboring sectors, the school bus transit service has added two new dedicated AC bus routes starting November 1:</p>
        <ul class="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>Route 4 (Bashundhara & Kuril):</strong> Covering Bashundhara R/A (Gates 1, 2, 3), Baridhara DOHS, and Khilkhet.</li>
          <li><strong>Route 5 (Mirpur DOHS & Cantonment):</strong> Covering Mirpur DOHS, ECB Chattar, and Airport Road.</li>
        </ul>
        <p class="mb-3">All buses feature live GPS telemetry via the parent mobile application, speed restrictors (max 40 km/h), first-aid equipment, and vetted female bus attendants.</p>
      `,
      signatory: 'Transport Coordinator',
      designation: 'Campus Operations Unit'
    },
    'not-06': {
      ref: 'FVA/ACAD/2026/15',
      date: '29 September 2026',
      category: 'Academic',
      isUrgent: false,
      title: 'Bilingual Cambridge Phonics Workshop for Pre-Primary Parents',
      body: `
        <p class="mb-3">Our Early Years Department invites parents of Playgroup, Nursery, and Kindergarten scholars to an interactive masterclass on <em>'Phonics at Home: Fostering Early Biliteracy without Pressure'</em>.</p>
        <p class="mb-3">The session will provide hands-on techniques for supporting phonetic sound decoding in English and Bangla, tactile motor play, and screen-free reading habits.</p>
        <p class="mb-2"><strong>Date & Time:</strong> Saturday, 14 November 2026 at 10:30 AM in the Knowledge Commons.</p>
      `,
      signatory: 'Shamima Akhter, M.Ed.',
      designation: 'Head of Primary Years'
    }
  };

  // 1. Navigation Controller
  function navigateTo(pageId) {
    AppState.currentPage = pageId;
    
    // Update pages
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(p => p.classList.add('hidden'));
    
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
      targetPage.classList.remove('hidden');
    }

    // Update active nav button in toolbar
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      if (btn.getAttribute('data-page') === pageId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update address bar
    const urlBar = document.getElementById('mock-url-path');
    if (urlBar) {
      const pathMap = {
        'home': '',
        'admissions': 'admissions',
        'academics': 'academics',
        'about': 'about',
        'contact': 'contact',
        'notices': 'notices',
        'architecture': 'architecture-flow'
      };
      urlBar.textContent = pathMap[pageId] ? '/' + pathMap[pageId] : '/';
    }

    // Scroll smoothly to top of artboard
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 2. Viewport Simulator
  function setViewport(mode) {
    AppState.currentViewport = mode;
    const wrapper = document.getElementById('viewport-wrapper');
    const vpButtons = document.querySelectorAll('.viewport-btn');
    const vpLabel = document.getElementById('vp-label');

    // Remove old vp classes
    wrapper.classList.remove('vp-desktop', 'vp-tablet', 'vp-mobile', 'vp-full');
    wrapper.classList.add('vp-' + mode);

    vpButtons.forEach(btn => {
      if (btn.getAttribute('data-vp') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (vpLabel) {
      const labels = {
        'desktop': '🖥️ Desktop Preview (1280px Standard Canvas)',
        'tablet': '📱 Tablet Preview (768px iPad Portrait)',
        'mobile': '📲 iPhone 15 Pro (390px White Studio Chassis)',
        'full': '🔄 Responsive Full Width (Fluid Canvas)'
      };
      vpLabel.textContent = labels[mode] || mode;
    }
  }

  // 3. Spec & Redline Mode Toggle
  function toggleAnnotations() {
    AppState.specMode = !AppState.specMode;
    const btn = document.getElementById('btn-annotations');
    const statusText = document.getElementById('anno-status');

    if (AppState.specMode) {
      document.body.classList.add('spec-mode-active');
      btn.classList.add('bg-rose-100', 'border-rose-400', 'text-rose-700');
      btn.classList.remove('bg-white', 'text-slate-700');
      if (statusText) statusText.textContent = 'ON';
    } else {
      document.body.classList.remove('spec-mode-active');
      btn.classList.remove('bg-rose-100', 'border-rose-400', 'text-rose-700');
      btn.classList.add('bg-white', 'text-slate-700');
      if (statusText) statusText.textContent = 'OFF';
    }
  }

  // 4. Blueprint Technical Grid Toggle
  function toggleBlueprintGrid() {
    AppState.blueprintGrid = !AppState.blueprintGrid;
    const wrapper = document.getElementById('viewport-wrapper');
    const btn = document.getElementById('btn-grid');
    const statusText = document.getElementById('grid-status');

    if (AppState.blueprintGrid) {
      wrapper.classList.add('blueprint-grid-active');
      btn.classList.add('bg-blue-100', 'border-blue-400', 'text-blue-700');
      btn.classList.remove('bg-white', 'text-slate-700');
      if (statusText) statusText.textContent = 'ON';
    } else {
      wrapper.classList.remove('blueprint-grid-active');
      btn.classList.remove('bg-blue-100', 'border-blue-400', 'text-blue-700');
      btn.classList.add('bg-white', 'text-slate-700');
      if (statusText) statusText.textContent = 'OFF';
    }
  }

  // 5. Tuition & Sibling Calculator
  function calculateTuition() {
    const tierRadios = document.getElementsByName('calc_tier');
    let baseTuition = 8500;
    let tierName = 'Primary (Grades 1 – 5)';
    let admissionFee = 35000;

    for (const r of tierRadios) {
      if (r.checked) {
        if (r.value === 'preprimary') {
          baseTuition = 6500;
          tierName = 'Pre-Primary (Playgroup, Nur, KG)';
          admissionFee = 30000;
        } else if (r.value === 'primary') {
          baseTuition = 8500;
          tierName = 'Primary (Grades 1 – 5)';
          admissionFee = 35000;
        } else if (r.value === 'middle_sec') {
          baseTuition = 10500;
          tierName = 'Middle & Secondary (Grades 6 – 10)';
          admissionFee = 38000;
        }
      }
    }

    const siblingSelect = document.getElementById('calc_sibling');
    const siblingVal = siblingSelect ? siblingSelect.value : '0';
    let discountRate = 0;
    let discountText = 'None (0%)';

    if (siblingVal === '25') {
      discountRate = 0.25;
      discountText = '2nd Child (25% Discount)';
    } else if (siblingVal === '40') {
      discountRate = 0.40;
      discountText = '3rd+ Child (40% Discount)';
    }

    const siblingDiscount = Math.round(baseTuition * discountRate);
    const netTuition = baseTuition - siblingDiscount;

    const transportSelect = document.getElementById('calc_transport');
    const transportVal = transportSelect ? parseInt(transportSelect.value) || 0 : 0;

    const lunchCheck = document.getElementById('calc_lunch');
    const lunchCost = (lunchCheck && lunchCheck.checked) ? 2200 : 0;

    const stemCheck = document.getElementById('calc_stem');
    const stemCost = (stemCheck && stemCheck.checked) ? 1500 : 0;

    const totalMonthly = netTuition + transportVal + lunchCost + stemCost;

    // Update DOM
    const fmt = num => '৳ ' + num.toLocaleString('en-US');

    const outTier = document.getElementById('out-tier-name');
    if (outTier) outTier.textContent = tierName;

    const outBase = document.getElementById('out-base-tuition');
    if (outBase) outBase.textContent = fmt(baseTuition);

    const outSiblingRow = document.getElementById('out-sibling-row');
    const outSiblingVal = document.getElementById('out-sibling-val');
    if (siblingDiscount > 0) {
      if (outSiblingRow) outSiblingRow.classList.remove('hidden');
      if (outSiblingVal) outSiblingVal.textContent = '- ' + fmt(siblingDiscount) + ' (' + Math.round(discountRate * 100) + '%)';
    } else {
      if (outSiblingRow) outSiblingRow.classList.add('hidden');
    }

    const outTransRow = document.getElementById('out-trans-row');
    const outTransVal = document.getElementById('out-trans-val');
    if (transportVal > 0) {
      if (outTransRow) outTransRow.classList.remove('hidden');
      if (outTransVal) outTransVal.textContent = '+ ' + fmt(transportVal);
    } else {
      if (outTransRow) outTransRow.classList.add('hidden');
    }

    const outLunchRow = document.getElementById('out-lunch-row');
    const outLunchVal = document.getElementById('out-lunch-val');
    if (lunchCost > 0) {
      if (outLunchRow) outLunchRow.classList.remove('hidden');
      if (outLunchVal) outLunchVal.textContent = '+ ' + fmt(lunchCost);
    } else {
      if (outLunchRow) outLunchRow.classList.add('hidden');
    }

    const outStemRow = document.getElementById('out-stem-row');
    const outStemVal = document.getElementById('out-stem-val');
    if (stemCost > 0) {
      if (outStemRow) outStemRow.classList.remove('hidden');
      if (outStemVal) outStemVal.textContent = '+ ' + fmt(stemCost);
    } else {
      if (outStemRow) outStemRow.classList.add('hidden');
    }

    const outTotal = document.getElementById('out-total-monthly');
    if (outTotal) outTotal.textContent = fmt(totalMonthly);

    const outAdm = document.getElementById('out-adm-fee');
    if (outAdm) outAdm.textContent = fmt(admissionFee);
  }

  // 6. Age & Grade Placement Finder
  function lookupPlacement() {
    const ageSelect = document.getElementById('finder-age');
    if (!ageSelect) return;
    const age = parseFloat(ageSelect.value);

    let grade = 'Playgroup';
    let medium = 'Bilingual Foundation (English & Bangla)';
    let ratio = '1:12 Max Cap (Strictly Enforced)';
    let focus = 'Sensory discovery, motor dexterity, joyful storytelling & social play.';
    let assess = 'Play-based informal observation (zero stress, accompanied by parents).';

    if (age >= 2.5 && age < 3.5) {
      grade = 'Playgroup';
      medium = 'Bilingual Sensory (English & Bangla)';
      ratio = '1:12 Cap';
      focus = 'Tactile motor coordination, phonemic awareness, interactive nursery rhymes.';
      assess = 'Play-based diagnostic interaction in colorful activity room.';
    } else if (age >= 3.5 && age < 4.5) {
      grade = 'Nursery';
      medium = 'Bilingual Phonics & Numeracy';
      ratio = '1:12 Cap';
      focus = 'Cambridge early phonics, Singapore pre-math quantities, emotional expression.';
      assess = 'Guided puzzle & picture recognition play session.';
    } else if (age >= 4.5 && age < 5.5) {
      grade = 'Kindergarten (KG)';
      medium = 'English Version or Bangla Medium';
      ratio = '1:12 Cap';
      focus = 'Bilingual sentence articulation, foundational arithmetic, junior science inquiry.';
      assess = 'Conversational dialogue and fine-motor pencil grip readiness.';
    } else if (age >= 5.5 && age < 6.5) {
      grade = 'Grade 1 (Primary)';
      medium = 'NCTB English Version & Bangla Medium';
      ratio = '1:15 Cap';
      focus = 'NCTB foundational syllabus, Singapore math problem solving, beginner Scratch coding.';
      assess = 'Friendly 30-min reading and numeracy diagnostic quiz.';
    } else if (age >= 6.5 && age <= 10.5) {
      grade = 'Primary (Grades 2 – 5)';
      medium = 'NCTB English Version & Bangla Medium';
      ratio = '1:15 Cap';
      focus = 'Integrated STEM lab work, bilingual creative writing, computational thinking.';
      assess = 'Formative diagnostic evaluation in English, Bangla & Mathematics.';
    } else if (age > 10.5 && age <= 13.5) {
      grade = 'Middle School (Grades 6 – 8)';
      medium = 'NCTB English Version & Bangla Medium';
      ratio = '1:20 Cap';
      focus = 'Specialized science labs (Bio/Chem/Phys), Python programming, junior debate.';
      assess = 'Curriculum placement test in core sciences and mathematics.';
    } else if (age > 13.5) {
      grade = 'Secondary (Grades 9 – 10 SSC)';
      medium = 'Science & Business Studies Streams';
      ratio = '1:20 Cap';
      focus = 'National Board SSC curriculum mastery, Olympiad training, lab practicals.';
      assess = 'Comprehensive diagnostic evaluation & academic counseling interview.';
    }

    const outGrade = document.getElementById('finder-out-grade');
    const outMedium = document.getElementById('finder-out-medium');
    const outRatio = document.getElementById('finder-out-ratio');
    const outFocus = document.getElementById('finder-out-focus');
    const outAssess = document.getElementById('finder-out-assess');

    if (outGrade) outGrade.textContent = grade;
    if (outMedium) outMedium.textContent = medium;
    if (outRatio) outRatio.textContent = ratio;
    if (outFocus) outFocus.textContent = focus;
    if (outAssess) outAssess.textContent = assess;
  }

  // 7. Academics Stage Switcher
  function switchAcademicStage(stageId) {
    const stageTabs = document.querySelectorAll('.stage-tab-btn');
    stageTabs.forEach(btn => {
      if (btn.getAttribute('data-stage') === stageId) {
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      }
    });

    const stages = document.querySelectorAll('.academic-stage-pane');
    stages.forEach(p => p.classList.add('hidden'));

    const activePane = document.getElementById('stage-pane-' + stageId);
    if (activePane) activePane.classList.remove('hidden');
  }

  // 8. Gallery Filter & Modal
  function filterGallery(cat) {
    AppState.galleryFilter = cat;
    const buttons = document.querySelectorAll('.gallery-tab-btn');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-cat') === cat) {
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      }
    });

    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(c => {
      if (cat === 'all' || c.getAttribute('data-cat') === cat) {
        c.classList.remove('hidden');
      } else {
        c.classList.add('hidden');
      }
    });
  }

  function openFacilityModal(id) {
    const data = facilityData[id];
    if (!data) return;

    const modal = document.getElementById('facility-modal');
    document.getElementById('modal-fac-title').textContent = data.title;
    document.getElementById('modal-fac-cat').textContent = data.category;
    document.getElementById('modal-fac-cap').textContent = data.capacity;
    document.getElementById('modal-fac-desc').textContent = data.description;
    document.getElementById('modal-fac-sup').textContent = data.supervisor;

    const specsList = document.getElementById('modal-fac-specs');
    specsList.innerHTML = '';
    data.specs.forEach(s => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-xs text-slate-700';
      li.innerHTML = '<span class="text-blue-600 font-bold">✓</span> <span>' + s + '</span>';
      specsList.appendChild(li);
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeFacilityModal() {
    const modal = document.getElementById('facility-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  // 9. Notice Search, Filter & Modal
  function filterNotices() {
    const searchInput = document.getElementById('notice-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const cat = AppState.noticeFilter;

    const cards = document.querySelectorAll('.notice-item');
    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.getAttribute('data-title').toLowerCase();
      const cardCat = card.getAttribute('data-cat');
      const cardRef = card.getAttribute('data-ref').toLowerCase();

      const matchCat = (cat === 'all' || cardCat === cat);
      const matchQuery = (title.includes(query) || cardRef.includes(query));

      if (matchCat && matchQuery) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    const emptyNotice = document.getElementById('notice-empty-state');
    if (emptyNotice) {
      if (visibleCount === 0) {
        emptyNotice.classList.remove('hidden');
      } else {
        emptyNotice.classList.add('hidden');
      }
    }
  }

  function setNoticeCategory(cat) {
    AppState.noticeFilter = cat;
    const buttons = document.querySelectorAll('.notice-cat-btn');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-cat') === cat) {
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      }
    });
    filterNotices();
  }

  function openNoticeModal(id) {
    const data = noticeData[id];
    if (!data) return;

    const modal = document.getElementById('notice-modal');
    document.getElementById('modal-not-ref').textContent = data.ref;
    document.getElementById('modal-not-date').textContent = data.date;
    document.getElementById('modal-not-title').textContent = data.title;
    document.getElementById('modal-not-body').innerHTML = data.body;
    document.getElementById('modal-not-signatory').textContent = data.signatory;
    document.getElementById('modal-not-desig').textContent = data.designation;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeNoticeModal() {
    const modal = document.getElementById('notice-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  // 10. Tour Booking Form Submission
  function handleTourBooking(e) {
    e.preventDefault();
    const btn = document.getElementById('tour-submit-btn');
    const origText = btn.innerHTML;
    btn.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Confirming Walkthrough...';
    btn.disabled = true;

    const parentName = document.getElementById('tour-name').value || 'Prospective Parent';
    const grade = document.getElementById('tour-grade').value || 'Grade 1';
    const tourDate = document.getElementById('tour-date').value || 'Tomorrow';
    const tourSlot = document.getElementById('tour-slot').value || '10:00 AM';

    setTimeout(() => {
      btn.innerHTML = origText;
      btn.disabled = false;

      const randomRef = 'AHIA-TOUR-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('conf-ref-id').textContent = randomRef;
      document.getElementById('conf-parent').textContent = parentName;
      document.getElementById('conf-grade').textContent = grade;
      document.getElementById('conf-schedule').textContent = tourDate + ' at ' + tourSlot;

      document.getElementById('tour-form-container').classList.add('hidden');
      document.getElementById('tour-confirmation-card').classList.remove('hidden');
    }, 450);
  }

  function resetTourForm() {
    document.getElementById('tour-booking-form').reset();
    document.getElementById('tour-confirmation-card').classList.add('hidden');
    document.getElementById('tour-form-container').classList.remove('hidden');
  }

  // 11. Admissions Accordion
  function toggleAccordion(id) {
    const item = document.getElementById('faq-ans-' + id);
    const chevron = document.getElementById('faq-chevron-' + id);
    if (!item) return;

    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden');
      chevron.style.transform = 'rotate(180deg)';
    } else {
      item.classList.add('hidden');
      chevron.style.transform = 'rotate(0deg)';
    }
  }

  // 12. Milestone Roadmap Selection
  function selectMilestone(idx) {
    const buttons = document.querySelectorAll('.milestone-btn');
    buttons.forEach((btn, i) => {
      if (i === idx) {
        btn.classList.add('border-blue-600', 'bg-blue-50/50', 'shadow-sm');
        btn.classList.remove('border-slate-200', 'bg-white');
      } else {
        btn.classList.remove('border-blue-600', 'bg-blue-50/50', 'shadow-sm');
        btn.classList.add('border-slate-200', 'bg-white');
      }
    });

    const cards = document.querySelectorAll('.milestone-detail-card');
    cards.forEach((card, i) => {
      if (i === idx) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    calculateTuition();
    lookupPlacement();
    filterGallery('all');
    filterNotices();

    // Close modals on Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeFacilityModal();
        closeNoticeModal();
      }
    });
  });
</script>
"""
