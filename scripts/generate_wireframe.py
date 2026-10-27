import os
import sys

def wireframe_img(ratio, desc, height_class="h-52"):
    return f'''
    <div class="relative w-full {height_class} bg-slate-100 border border-slate-300 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 text-center select-none group">
      <!-- Subtle diagonal crosshairs -->
      <svg class="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.75" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.75" />
      </svg>
      <div class="relative z-10 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-md px-3 py-2 shadow-sm max-w-[90%]">
        <div class="flex items-center justify-center gap-1.5 text-slate-500 mb-1">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{ratio}</span>
        </div>
        <p class="text-xs font-medium text-slate-700 leading-snug">{desc}</p>
      </div>
    </div>
    '''

def spec_overlay(cmp_id, user_story, psych_trigger, grid_spec="Padding: 48px (6x8pt) • Gap: 24px (3x8pt)", a11y_spec="WCAG 2.1 AA Compliant • Contrast 7.2:1 (AAA) • Keyboard Navigable"):
    return f'''
    <div class="spec-redline-card hidden mb-4 p-3 bg-rose-50/95 border-l-4 border-rose-500 rounded-r-lg border-y border-r border-rose-200 text-rose-950 font-sans shadow-sm transition-all text-left">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-rose-200/80 pb-2 mb-2">
        <div class="flex items-center gap-2">
          <span class="bg-rose-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Figma Spec: {cmp_id}</span>
          <span class="text-[11px] font-semibold text-rose-800">8pt Engineering System</span>
        </div>
        <span class="font-mono text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded border border-rose-300/60">{grid_spec}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
        <div>
          <span class="font-bold text-rose-900 block text-[11px] uppercase tracking-wider font-mono">User Story</span>
          <p class="text-rose-800 text-[11px] leading-relaxed italic">{user_story}</p>
        </div>
        <div>
          <span class="font-bold text-rose-900 block text-[11px] uppercase tracking-wider font-mono">Psychology Trigger</span>
          <p class="text-rose-800 text-[11px] leading-relaxed">{psych_trigger}</p>
        </div>
        <div>
          <span class="font-bold text-rose-900 block text-[11px] uppercase tracking-wider font-mono">Accessibility & States</span>
          <p class="text-rose-800 text-[11px] leading-relaxed font-mono text-[10px]">{a11y_spec}</p>
        </div>
      </div>
    </div>
    '''

print("Helper functions defined successfully")
