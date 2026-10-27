# build_full_suite.py
# Master Assembler for Elite Light Mode Wireframe Specification Suite

import os
import sys

from wireframe_styles import STYLES
from wireframe_components import (
    get_top_toolbar,
    get_device_chrome,
    get_announcement_ribbon,
    get_global_header,
    get_global_footer,
    get_modals
)
from wireframe_pages_1_to_3 import (
    get_page_home,
    get_page_admissions,
    get_page_academics
)
from wireframe_pages_4_to_7 import (
    get_page_about,
    get_page_contact,
    get_page_notices,
    get_page_architecture
)
from wireframe_js import JS_SCRIPTS

def assemble_html():
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  {STYLES}
</head>
<body class="studio-canvas text-slate-900 antialiased min-h-screen selection:bg-blue-600 selection:text-white">

  {get_top_toolbar()}

  <!-- Viewport Preview Outer Canvas Container -->
  <main class="w-full py-4 sm:py-6 px-2 sm:px-4">
    <div id="viewport-wrapper" class="w-full transition-all duration-300 vp-desktop">
      
      {get_device_chrome()}

      {get_announcement_ribbon()}

      {get_global_header()}

      <!-- Dynamic Page Container Views -->
      <div id="artboard-body" class="bg-white min-h-[800px]">
        {get_page_home()}
        {get_page_admissions()}
        {get_page_academics()}
        {get_page_about()}
        {get_page_contact()}
        {get_page_notices()}
        {get_page_architecture()}
      </div>

      {get_global_footer()}

    </div>
  </main>

  {get_modals()}

  {JS_SCRIPTS}

</body>
</html>
'''
    return html

def main():
    print("Assembling Elite Light Mode Wireframe Specification Suite...")
    html_content = assemble_html()

    target_paths = [
        r"j:\WorkSpace\Ongoing\school\wireframe.html",
        r"j:\WorkSpace\Ongoing\school\public\wireframe.html",
        r"C:\Users\Izhaan\.gemini\antigravity\brain\d39e1c68-8f31-44b7-900c-c98139a8d00d\school_wireframe_suite.html"
    ]

    for p in target_paths:
        dir_name = os.path.dirname(p)
        if not os.path.exists(dir_name):
            os.makedirs(dir_name, exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            f.write(html_content)
        size_kb = len(html_content.encode("utf-8")) / 1024
        print(f"[OK] Successfully written {size_kb:.1f} KB to: {p}")

if __name__ == "__main__":
    main()
