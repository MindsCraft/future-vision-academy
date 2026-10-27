import os
import subprocess
import time
import sys

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"J:\WorkSpace\Ongoing\school\docs\research\screenshots"

os.makedirs(OUTPUT_DIR, exist_ok=True)

competitors = [
    ("01_phillips_exeter", "https://www.exeter.edu", "Phillips Exeter Academy", "USA"),
    ("02_phillips_andover", "https://www.andover.edu", "Phillips Academy Andover", "USA"),
    ("03_eton_college", "https://www.etoncollege.com", "Eton College", "UK"),
    ("04_harrow_school", "https://www.harrowschool.org.uk", "Harrow School", "UK"),
    ("05_wellington_college", "https://www.wellingtoncollege.org.uk", "Wellington College", "UK"),
    ("06_choate_rosemary", "https://www.choate.edu", "Choate Rosemary Hall", "USA"),
    ("07_deerfield_academy", "https://www.deerfield.edu", "Deerfield Academy", "USA"),
    ("08_lawrenceville", "https://www.lawrenceville.org", "Lawrenceville School", "USA"),
    ("09_sevenoaks_school", "https://www.sevenoaksschool.org", "Sevenoaks School", "UK"),
    ("10_cheltenham_ladies", "https://www.cheltladiescollege.org", "Cheltenham Ladies College", "UK"),
    ("11_le_rosey", "https://www.rosey.ch/en/", "Institut Le Rosey", "Switzerland"),
    ("12_aiglon_college", "https://www.aiglon.ch", "Aiglon College", "Switzerland"),
    ("13_dulwich_college", "https://www.dulwich.org.uk", "Dulwich College", "UK"),
    ("14_winchester_college", "https://www.winchestercollege.org", "Winchester College", "UK"),
    ("15_horace_mann", "https://www.horacemann.org", "Horace Mann School", "USA"),
    ("16_trinity_school_nyc", "https://www.trinityschoolnyc.org", "Trinity School NYC", "USA"),
    ("17_groton_school", "https://www.groton.org", "Groton School", "USA"),
    ("18_upper_canada_college", "https://www.ucc.on.ca", "Upper Canada College", "Canada"),
    ("19_singapore_american_school", "https://www.sas.edu.sg", "Singapore American School", "Singapore"),
    ("20_uwcsea_singapore", "https://www.uwcsea.edu.sg", "UWC South East Asia", "Singapore"),
    ("21_tanglin_trust", "https://www.tts.edu.sg", "Tanglin Trust School", "Singapore"),
    ("22_dubai_college", "https://www.dubaicollege.org", "Dubai College", "UAE"),
    ("23_jess_dubai", "https://www.jess.sch.ae", "JESS Dubai", "UAE"),
    ("24_american_school_dubai", "https://www.asdubai.org", "American School of Dubai", "UAE"),
    ("25_hk_international_school", "https://www.hkis.edu.hk", "Hong Kong International School", "Hong Kong"),
    ("26_chinese_intl_school_hk", "https://www.cis.edu.hk", "Chinese International School", "Hong Kong"),
    ("27_intl_school_bangkok", "https://www.isb.ac.th", "International School Bangkok", "Thailand"),
    ("28_nist_intl_school", "https://www.nist.ac.th", "NIST International School", "Thailand"),
    ("29_alice_smith_school", "https://www.alice-smith.edu.my", "Alice Smith School", "Malaysia"),
    ("30_jakarta_intercultural", "https://www.jisedu.or.id", "Jakarta Intercultural School", "Indonesia"),
    ("31_british_school_delhi", "https://www.british-school.org", "The British School New Delhi", "India"),
    ("32_woodstock_school", "https://www.woodstockschool.in", "Woodstock School", "India"),
    ("33_dais_mumbai", "https://www.dais.edu.in", "Dhirubhai Ambani Intl School", "India"),
    ("34_doon_school", "https://www.doonschool.com", "The Doon School", "India"),
    ("35_aitchison_college", "https://www.aitchison.edu.pk", "Aitchison College", "Pakistan"),
    ("36_scholastica_bd", "https://www.scholasticabd.com", "Scholastica", "Bangladesh"),
    ("37_isd_dhaka", "https://www.isdbd.org", "International School Dhaka", "Bangladesh"),
    ("38_st_pauls_school", "https://www.stpaulsschool.org.uk", "St Paul's School", "UK"),
    ("39_harvard_westlake", "https://www.hw.com", "Harvard-Westlake School", "USA"),
    ("40_nord_anglia_shanghai", "https://www.nordangliaeducation.com/biss-puxi", "British Intl School Shanghai", "China"),
]

def capture(slug, url):
    out_file = os.path.join(OUTPUT_DIR, f"{slug}.png")
    if os.path.exists(out_file) and os.path.getsize(out_file) > 10000:
        print(f"[SKIP] {slug} already exists.")
        return True

    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1440,900",
        "--hide-scrollbars",
        f"--screenshot={out_file}",
        url
    ]
    try:
        print(f"[CAPTURING] {slug} from {url}...")
        res = subprocess.run(cmd, timeout=25, capture_output=True)
        time.sleep(1)
        if os.path.exists(out_file) and os.path.getsize(out_file) > 10000:
            print(f"[SUCCESS] {slug} ({os.path.getsize(out_file)} bytes)")
            return True
        else:
            print(f"[FAIL] {slug} generated small or no file")
            return False
    except Exception as e:
        print(f"[ERROR] {slug}: {e}")
        return False

success = 0
failed = []
for slug, url, name, country in competitors:
    ok = capture(slug, url)
    if ok:
        success += 1
    else:
        failed.append((slug, url, name))

print(f"\nFinished: {success}/{len(competitors)} captured.")
if failed:
    print("Failed items:", failed)
