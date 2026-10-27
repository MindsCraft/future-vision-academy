# wireframe_styles.py
# Comprehensive Light Mode & Figma Engineering Stylesheet

STYLES = """
<style>
  /* Base Figma Light Mode Design Tokens */
  :root {
    --canvas-bg: #F8FAFC;
    --artboard-bg: #FFFFFF;
    --border-light: #E2E8F0;
    --border-strong: #CBD5E1;
    --text-primary: #0F172A;
    --text-secondary: #334155;
    --text-muted: #64748B;
    --accent-blue: #2563EB;
    --accent-blue-hover: #1D4ED8;
    --accent-blue-soft: #EFF6FF;
    --accent-emerald: #059669;
    --accent-emerald-soft: #ECFDF5;
    --accent-amber: #D97706;
    --accent-amber-soft: #FFFBEB;
    --accent-rose: #E11D48;
    --accent-rose-soft: #FFF1F2;
  }

  body {
    background-color: var(--canvas-bg);
    color: var(--text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Studio Millimeter Dot Grid Canvas */
  .studio-canvas {
    background-color: #F8FAFC;
    background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
    background-size: 24px 24px;
  }

  /* Blueprint Technical Grid Mode */
  .blueprint-grid-active {
    background-image: 
      linear-gradient(to right, rgba(37, 99, 235, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(37, 99, 235, 0.08) 1px, transparent 1px) !important;
    background-size: 20px 20px !important;
  }

  /* Viewport Wrapper Variants */
  #viewport-wrapper {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #viewport-wrapper.vp-desktop {
    max-width: 1280px;
    margin: 24px auto;
    border-radius: 12px;
    border: 1px solid var(--border-light);
    box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.05);
    background: #FFFFFF;
    overflow: hidden;
  }

  #viewport-wrapper.vp-tablet {
    max-width: 768px;
    margin: 24px auto;
    border-radius: 16px;
    border: 1px solid var(--border-strong);
    box-shadow: 0 15px 35px -10px rgba(15, 23, 42, 0.1), 0 2px 4px rgba(15, 23, 42, 0.06);
    background: #FFFFFF;
    overflow: hidden;
  }

  /* Clean White iPhone Chassis (Mobile Mode) */
  #viewport-wrapper.vp-mobile {
    max-width: 390px;
    margin: 24px auto;
    border-radius: 46px;
    border: 12px solid #E2E8F0;
    outline: 2px solid #CBD5E1;
    box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.15), 0 4px 6px -2px rgba(15, 23, 42, 0.05);
    background: #FFFFFF;
    overflow: hidden;
    position: relative;
  }

  #viewport-wrapper.vp-full {
    max-width: 100%;
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: #FFFFFF;
  }

  /* Studio Device Chrome Bar */
  .device-chrome {
    background: #F8FAFC;
    color: #64748B;
    padding: 10px 16px;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E2E8F0;
    user-select: none;
  }

  /* iPhone Speaker & Dynamic Island Pill */
  .iphone-notch {
    display: none;
  }
  .vp-mobile .iphone-notch {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0 4px 0;
    background: #FFFFFF;
  }
  .iphone-island {
    width: 110px;
    height: 24px;
    background: #0F172A;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: #94A3B8;
  }

  /* iPhone Home Indicator Pill */
  .iphone-home-bar {
    display: none;
  }
  .vp-mobile .iphone-home-bar {
    display: flex;
    justify-content: center;
    padding: 10px 0 6px 0;
    background: #FFFFFF;
  }
  .iphone-home-indicator {
    width: 130px;
    height: 4px;
    background: #CBD5E1;
    border-radius: 4px;
  }

  /* Mobile Sticky Bottom Conversion Bar */
  .mobile-sticky-bar {
    display: none;
  }
  .vp-mobile .mobile-sticky-bar {
    display: flex;
  }

  /* Figma Spec & Redline Mode */
  .spec-mode-active .spec-redline-card {
    display: block !important;
  }
  .spec-mode-active [data-spec-metric] {
    outline: 1.5px dashed rgba(225, 29, 72, 0.45) !important;
    position: relative;
  }
  .spec-mode-active [data-spec-metric]::after {
    content: attr(data-spec-metric);
    position: absolute;
    top: 0;
    right: 0;
    background: #E11D48;
    color: white;
    font-size: 9px;
    font-family: monospace;
    padding: 2px 5px;
    border-bottom-left-radius: 4px;
    z-index: 20;
    pointer-events: none;
  }

  /* Active Toolbar Pills */
  .nav-btn.active {
    background-color: #2563EB !important;
    color: #FFFFFF !important;
    border-color: #2563EB !important;
  }
  .viewport-btn.active {
    background-color: #2563EB !important;
    color: #FFFFFF !important;
    border-color: #2563EB !important;
  }

  /* Custom Scrollbar for Light Mode */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #F1F5F9;
  }
  ::-webkit-scrollbar-thumb {
    background: #CBD5E1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #94A3B8;
  }

  /* Card elevation */
  .studio-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.04), 0 2px 4px -2px rgba(15, 23, 42, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .studio-card:hover {
    box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.07), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  }

  /* Print Styles */
  @media print {
    .no-print {
      display: none !important;
    }
    #viewport-wrapper {
      max-width: 100% !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
</style>
"""
