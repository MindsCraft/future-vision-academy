# wireframe_components.py
# Core Reusable Components for Elite Light Mode Wireframe Suite

def wireframe_img(ratio, desc, height_class="h-48"):
    return f'''
    <div class="relative w-full {height_class} bg-slate-50 border border-slate-300 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 text-center select-none group">
      <!-- Crosshairs wireframe X -->
      <svg class="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.8" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.8" />
      </svg>
      <div class="relative z-10 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-md px-3 py-2 shadow-sm max-w-[90%]">
        <div class="flex items-center justify-center gap-1.5 text-slate-500 mb-1">
          <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{ratio}</span>
        </div>
        <p class="text-xs font-medium text-slate-700 leading-snug">{desc}</p>
      </div>
    </div>
    '''

def spec_overlay(cmp_id, user_story, psych_trigger, grid_spec="Padding: 48px (6x8pt) • Gap: 24px (3x8pt)", a11y_spec="WCAG 2.1 AA Compliant • Contrast 7.2:1 (AAA) • 48px Min Touch Target"):
    return f'''
    <div class="spec-redline-card hidden mb-4 p-3.5 bg-rose-50/95 border-l-4 border-rose-500 rounded-r-lg border-y border-r border-rose-200 text-rose-950 font-sans shadow-sm transition-all text-left">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-rose-200/80 pb-2 mb-2">
        <div class="flex items-center gap-2">
          <span class="bg-rose-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">Figma Spec: {cmp_id}</span>
          <span class="text-[11px] font-semibold text-rose-800">8pt Engineering System</span>
        </div>
        <span class="font-mono text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded border border-rose-300/60 font-semibold">{grid_spec}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div>
          <span class="font-bold text-rose-900 block text-[10px] uppercase tracking-wider font-mono mb-0.5">Parent User Story</span>
          <p class="text-rose-800 text-[11px] leading-relaxed italic">"{user_story}"</p>
        </div>
        <div>
          <span class="font-bold text-rose-900 block text-[10px] uppercase tracking-wider font-mono mb-0.5">Psychology Trigger</span>
          <p class="text-rose-800 text-[11px] leading-relaxed">{psych_trigger}</p>
        </div>
        <div>
          <span class="font-bold text-rose-900 block text-[10px] uppercase tracking-wider font-mono mb-0.5">Accessibility & States</span>
          <p class="text-rose-800 text-[11px] leading-relaxed font-mono text-[10px]">{a11y_spec}</p>
        </div>
      </div>
    </div>
    '''

def get_top_toolbar():
    return '''
    <!-- Top Professional UX Engineering Toolbar (Strictly Light Mode) -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm no-print">
      <div class="max-w-[1500px] mx-auto px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <!-- Brand & System Tag -->
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-sm ring-2 ring-blue-100">
            FVA
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs uppercase tracking-wider font-bold text-blue-700">Figma UX Specification Workbench</span>
              <span class="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-semibold">v3.0 Light Suite</span>
              <span class="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-semibold">EIIN: 138421</span>
            </div>
            <p class="text-[11px] text-slate-500">Future Vision Academy • Dhaka Board Recognized NCTB Dual Medium • Uttara Sector 11</p>
          </div>
        </div>

        <!-- Screen Navigator -->
        <nav class="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none" id="screen-navigator">
          <button onclick="navigateTo('home')" class="nav-btn active px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="home">
            🏠 Home
          </button>
          <button onclick="navigateTo('admissions')" class="nav-btn px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="admissions">
            🎓 Admissions Hub
          </button>
          <button onclick="navigateTo('academics')" class="nav-btn px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="academics">
            🔬 Academics
          </button>
          <button onclick="navigateTo('about')" class="nav-btn px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="about">
            🏛️ About Us
          </button>
          <button onclick="navigateTo('contact')" class="nav-btn px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="contact">
            📍 Contact & Visit
          </button>
          <button onclick="navigateTo('notices')" class="nav-btn px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="notices">
            📢 Notices & Calendar
          </button>
          <button onclick="navigateTo('architecture')" class="nav-btn px-3 py-1.5 rounded-md text-xs font-medium transition-all text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-transparent" data-page="architecture">
            🗺️ User Flow & Architecture
          </button>
        </nav>

        <!-- Viewport Modes & System Controls -->
        <div class="flex items-center gap-2">
          <!-- Viewport Switcher -->
          <div class="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <button onclick="setViewport('desktop')" class="viewport-btn active px-2.5 py-1 rounded text-xs text-slate-700 font-mono flex items-center gap-1 transition-all" data-vp="desktop" title="Desktop Preview (1280px)">
              🖥️ <span class="hidden md:inline">1280px</span>
            </button>
            <button onclick="setViewport('tablet')" class="viewport-btn px-2.5 py-1 rounded text-xs text-slate-700 font-mono flex items-center gap-1 transition-all" data-vp="tablet" title="Tablet Preview (768px)">
              📱 <span class="hidden md:inline">768px</span>
            </button>
            <button onclick="setViewport('mobile')" class="viewport-btn px-2.5 py-1 rounded text-xs text-slate-700 font-mono flex items-center gap-1 transition-all" data-vp="mobile" title="iPhone 15 Mobile (390px)">
              📲 <span class="hidden md:inline">390px</span>
            </button>
            <button onclick="setViewport('full')" class="viewport-btn px-2.5 py-1 rounded text-xs text-slate-700 font-mono flex items-center gap-1 transition-all" data-vp="full" title="Responsive Auto">
              🔄 <span class="hidden md:inline">Auto</span>
            </button>
          </div>

          <!-- Feature Toggles -->
          <button onclick="toggleAnnotations()" id="btn-annotations" class="px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-rose-300 text-rose-700 bg-white hover:bg-rose-50 flex items-center gap-1.5 transition-all shadow-sm">
            <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span>Spec & Redlines: <strong id="anno-status">OFF</strong></span>
          </button>

          <button onclick="toggleBlueprintGrid()" id="btn-grid" class="px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-blue-300 text-blue-700 bg-white hover:bg-blue-50 flex items-center gap-1.5 transition-all shadow-sm" title="Toggle Technical Grid Lines">
            📐 <span>Grid: <strong id="grid-status">OFF</strong></span>
          </button>
        </div>
      </div>
    </header>
    '''

def get_device_chrome():
    return '''
    <!-- Studio Device Chrome Bar -->
    <div id="device-chrome-bar" class="device-chrome">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-slate-300 inline-block border border-slate-400"></span>
        <span class="w-3 h-3 rounded-full bg-slate-300 inline-block border border-slate-400"></span>
        <span class="w-3 h-3 rounded-full bg-slate-300 inline-block border border-slate-400"></span>
        <span class="ml-2 font-mono text-slate-600 font-medium" id="vp-label">🖥️ Desktop Preview (1280px Standard Canvas)</span>
      </div>
      <div class="flex items-center gap-2 bg-white px-3 py-1 rounded-md text-[11px] text-slate-600 border border-slate-200 shadow-sm">
        <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        <span class="text-slate-400 font-mono">https://fva.edu.bd</span><span id="mock-url-path" class="text-blue-700 font-mono font-bold">/</span>
      </div>
      <div class="text-[10px] font-mono text-slate-500 hidden sm:block">
        FVA Production UX Architecture • Session 2026-27
      </div>
    </div>

    <!-- iPhone Specific Chassis Elements (Mobile Mode) -->
    <div class="iphone-notch">
      <div class="iphone-island">
        <span class="text-[10px] font-bold text-slate-300">9:41</span>
        <div class="flex items-center gap-1.5 text-slate-300">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.57 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v18h10V4z"/></svg>
        </div>
      </div>
    </div>
    '''

def get_announcement_ribbon():
    return '''
    <!-- Persistent Top Announcement Ribbon (Light Mode) -->
    <div class="bg-blue-50/90 text-blue-900 text-xs py-2 px-4 border-b border-blue-200">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
          </span>
          <span class="font-bold tracking-wide uppercase text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded font-mono">
            ADMISSIONS OPEN 2026–2027
          </span>
          <span class="hidden sm:inline text-slate-700 font-medium">Playgroup to Grade 9 • Guaranteed 1:12 Class Ratio • Diagnostic Assessments Commencing</span>
        </div>
        <div class="flex items-center gap-4 text-xs font-medium">
          <button onclick="navigateTo('contact')" class="underline hover:text-blue-700 flex items-center gap-1 font-semibold text-blue-600 transition-colors">
            Book Campus Tour <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          <span class="text-slate-300">|</span>
          <a href="tel:+88028954120" class="hover:text-blue-700 text-slate-700 flex items-center gap-1 font-mono transition-colors">
            <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> <span>+880 2 8954120</span>
          </a>
        </div>
      </div>
    </div>
    '''

def get_global_header():
    return '''
    <!-- Primary Header & Navigation Bar (Crisp Light Mode) -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <!-- Logo & Brand Badge -->
        <div class="flex items-center gap-3 cursor-pointer" onclick="navigateTo('home')">
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-sm ring-1 ring-blue-700/20">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-base tracking-tight text-slate-900">Future Vision Academy</span>
              <span class="font-mono text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-semibold">
                EIIN 138421
              </span>
            </div>
            <p class="text-xs text-slate-500 font-medium">Nurturing Inquiring Minds, Inspiring Confident Leaders</p>
          </div>
        </div>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <a href="javascript:void(0)" onclick="navigateTo('home')" class="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="javascript:void(0)" onclick="navigateTo('admissions')" class="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5">
            Admissions <span class="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-1.5 py-0.5 rounded-full font-bold">Open</span>
          </a>
          <a href="javascript:void(0)" onclick="navigateTo('academics')" class="text-slate-700 hover:text-blue-600 transition-colors">Academics</a>
          <a href="javascript:void(0)" onclick="navigateTo('about')" class="text-slate-700 hover:text-blue-600 transition-colors">About Us</a>
          <a href="javascript:void(0)" onclick="navigateTo('notices')" class="text-slate-700 hover:text-blue-600 transition-colors">Notices</a>
          <a href="javascript:void(0)" onclick="navigateTo('contact')" class="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        <!-- CTA Action Buttons -->
        <div class="hidden sm:flex items-center gap-3">
          <button onclick="navigateTo('contact')" class="px-3.5 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            Schedule Tour
          </button>
          <button onclick="navigateTo('admissions')" class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm flex items-center gap-1.5">
            Apply Online 2026-27 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

        <!-- Mobile Drawer Toggle -->
        <button onclick="document.getElementById('mobile-drawer').classList.toggle('hidden')" class="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      <!-- Mobile Dropdown Navigation -->
      <div id="mobile-drawer" class="hidden lg:hidden border-t border-slate-200 bg-slate-50 px-4 py-3 space-y-2">
        <a href="javascript:void(0)" onclick="navigateTo('home'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-slate-800">🏠 Home</a>
        <a href="javascript:void(0)" onclick="navigateTo('admissions'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-emerald-700">🎓 Admissions Hub (Open)</a>
        <a href="javascript:void(0)" onclick="navigateTo('academics'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-slate-800">🔬 Academics & Pedagogy</a>
        <a href="javascript:void(0)" onclick="navigateTo('about'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-slate-800">🏛️ About Us & Leadership</a>
        <a href="javascript:void(0)" onclick="navigateTo('contact'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-slate-800">📍 Contact & Campus Tour</a>
        <a href="javascript:void(0)" onclick="navigateTo('notices'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-slate-800">📢 Notices & Circulars</a>
        <a href="javascript:void(0)" onclick="navigateTo('architecture'); document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-2 text-sm font-semibold text-blue-700">🗺️ User Flow & Architecture</a>
      </div>
    </header>
    '''

def get_global_footer():
    return '''
    <!-- Global High-Credibility Footer (Always Light Mode) -->
    <footer class="bg-slate-50 border-t border-slate-200 pt-12 pb-8 text-slate-600 text-xs mt-12">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Col 1: Institutional Profile -->
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
              FVA
            </div>
            <span class="font-bold text-sm text-slate-900">Future Vision Academy</span>
          </div>
          <p class="text-slate-500 mb-4 leading-relaxed">
            A premier purpose-built K-12 institution in Uttara delivering the national NCTB curriculum in English Version and Bangla Medium with uncompromising pastoral safeguarding.
          </p>
          <div class="space-y-1 text-slate-600 font-mono text-[11px]">
            <div><strong>EIIN:</strong> 138421 (Dhaka Board)</div>
            <div><strong>Registration:</strong> Ministry of Education Approved</div>
            <div><strong>Safety:</strong> 128-Camera CCTV & Pediatric Bay</div>
          </div>
        </div>

        <!-- Col 2: Academic Tiers -->
        <div>
          <h4 class="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider font-mono">Academic Stages</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" onclick="navigateTo('academics')" class="hover:text-blue-600 transition-colors">Early Years Foundation (PG – KG)</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('academics')" class="hover:text-blue-600 transition-colors">Primary School (Grades 1 – 5)</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('academics')" class="hover:text-blue-600 transition-colors">Middle School (Grades 6 – 8)</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('academics')" class="hover:text-blue-600 transition-colors">Secondary School Certificate (SSC 9–10)</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('academics')" class="hover:text-blue-600 transition-colors">STEM MakerLab & Robotics Suite</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('academics')" class="hover:text-blue-600 transition-colors">Bilingual Debating & Arts Guild</a></li>
          </ul>
        </div>

        <!-- Col 3: Admissions & Transparency -->
        <div>
          <h4 class="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider font-mono">Admissions Hub</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" onclick="navigateTo('admissions')" class="hover:text-blue-600 transition-colors">5-Step Enrollment Pathway</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('admissions')" class="hover:text-blue-600 transition-colors">Tuition & Sibling Calculator</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('admissions')" class="hover:text-blue-600 transition-colors">Age & Grade Criteria Matrix</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('admissions')" class="hover:text-blue-600 transition-colors">Document Checklist & Download</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('contact')" class="hover:text-blue-600 transition-colors">Book Personalized Campus Tour</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('notices')" class="hover:text-blue-600 transition-colors">Session 2026-27 Intake Circular</a></li>
          </ul>
        </div>

        <!-- Col 4: Campus Visit & Contact -->
        <div>
          <h4 class="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider font-mono">Campus & Hours</h4>
          <p class="text-slate-600 mb-2 leading-relaxed">
            Plot 42, Road 18, Sector 11, Uttara Model Town, Dhaka-1230 (Near Sonargaon Janapath)
          </p>
          <div class="space-y-1.5 text-slate-600">
            <div><span class="font-semibold text-slate-800">Admissions Desk:</span> +880 2 8954120</div>
            <div><span class="font-semibold text-slate-800">WhatsApp Hotline:</span> +880 1711 000000</div>
            <div><span class="font-semibold text-slate-800">Email:</span> admissions@fva.edu.bd</div>
            <div><span class="font-semibold text-slate-800">Office Hours:</span> Sun–Thu 8:00am – 4:30pm</div>
          </div>
        </div>
      </div>

      <!-- Legal & Accreditation Banner -->
      <div class="border-t border-slate-200 max-w-7xl mx-auto px-4 pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © 2026 Future Vision Academy. Ministry of Education Recognized. Board EIIN: 138421. All Rights Reserved.
        </div>
        <div class="flex items-center gap-4">
          <a href="javascript:void(0)" onclick="navigateTo('about')" class="hover:text-blue-600">Child Safeguarding Charter</a>
          <span>•</span>
          <a href="javascript:void(0)" onclick="navigateTo('admissions')" class="hover:text-blue-600">Fee Transparency Pledge</a>
          <span>•</span>
          <a href="javascript:void(0)" onclick="navigateTo('architecture')" class="hover:text-blue-600 font-mono text-blue-600">UX Architecture Flow</a>
        </div>
      </div>
    </footer>

    <!-- iPhone Chassis Bottom Home Indicator (Mobile Mode Only) -->
    <div class="iphone-home-bar">
      <div class="iphone-home-indicator"></div>
    </div>

    <!-- Mobile Sticky Conversion Bar -->
    <div class="mobile-sticky-bar sticky bottom-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 items-center justify-between gap-2 shadow-lg w-full">
      <a href="tel:+88028954120" class="flex-1 py-2 px-3 rounded-lg border border-slate-300 text-center font-bold text-xs text-slate-800 bg-white flex items-center justify-center gap-1.5 shadow-sm">
        <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        Call Desk
      </a>
      <button onclick="navigateTo('contact')" class="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-center font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1">
        Book Tour <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    </div>
    '''

def get_modals():
    return '''
    <!-- Facility Lightbox Modal (Light Mode) -->
    <div id="facility-modal" class="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm items-center justify-center p-4">
      <div class="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative text-left" onclick="event.stopPropagation()">
        <!-- Close Button -->
        <button onclick="closeFacilityModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="flex items-center gap-2 mb-2">
          <span id="modal-fac-cat" class="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-semibold uppercase">Category</span>
          <span id="modal-fac-cap" class="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-semibold">Capacity</span>
        </div>

        <h3 id="modal-fac-title" class="text-xl font-bold text-slate-900 mb-3">Facility Title</h3>
        
        <!-- Wireframe Photo Box -->
        <div class="w-full h-44 bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center relative overflow-hidden mb-4">
          <svg class="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="1" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="1" />
          </svg>
          <div class="relative z-10 bg-white/95 px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-600 flex items-center gap-1.5 shadow-sm">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            High-Resolution Facility Inspection Blueprint
          </div>
        </div>

        <p id="modal-fac-desc" class="text-sm text-slate-600 mb-4 leading-relaxed"></p>

        <div class="border-t border-slate-100 pt-3 mb-4">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">Technical Specifications & Equipment:</h4>
          <ul id="modal-fac-specs" class="space-y-1.5"></ul>
        </div>

        <div class="flex items-center justify-between border-t border-slate-100 pt-3">
          <div class="text-[11px] text-slate-500">
            <strong>Supervised by:</strong> <span id="modal-fac-sup" class="text-slate-800 font-medium"></span>
          </div>
          <div class="flex gap-2">
            <button onclick="closeFacilityModal()" class="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50">
              Close
            </button>
            <button onclick="closeFacilityModal(); navigateTo('contact')" class="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm flex items-center gap-1">
              Schedule Tour to See This <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Notice Reader Modal (Light Mode) -->
    <div id="notice-modal" class="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm items-center justify-center p-4">
      <div class="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
        <!-- Close Button -->
        <button onclick="closeNoticeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <!-- Official Header -->
        <div class="border-b border-slate-200 pb-4 mb-4">
          <div class="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-slate-500">
            <span>REF: <strong id="modal-not-ref" class="text-slate-800"></strong></span>
            <span>DATE: <strong id="modal-not-date" class="text-slate-800"></strong></span>
          </div>
          <h3 id="modal-not-title" class="text-lg font-bold text-slate-900 leading-snug"></h3>
        </div>

        <!-- Body Content -->
        <div id="modal-not-body" class="text-sm text-slate-700 leading-relaxed mb-6"></div>

        <!-- Official Stamp & Signatory Block -->
        <div class="border-t border-slate-200 pt-4 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center text-[9px] font-mono font-bold text-blue-700 text-center uppercase tracking-tighter p-1 bg-blue-50/50">
              OFFICIAL SEAL
            </div>
            <div>
              <div id="modal-not-signatory" class="font-bold text-xs text-slate-900"></div>
              <div id="modal-not-desig" class="text-[11px] text-slate-500"></div>
            </div>
          </div>
          <div class="flex gap-2">
            <button onclick="window.print()" class="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              Print Notice
            </button>
            <button onclick="closeNoticeModal(); navigateTo('admissions')" class="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm flex items-center gap-1">
              Go to Admissions Hub <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    '''
