# Verify all directory city pages render correctly via Python Playwright.
import json, sys
from playwright.sync_api import sync_playwright

BASE = "http://localhost:43123"
CITIES = [
    "/places/japan/tokyo", "/places/japan/kyoto", "/places/south-korea/seoul",
    "/places/taiwan/taipei", "/places/vietnam/hanoi", "/places/vietnam/hoi-an",
    "/places/thailand/chiang-mai", "/places/thailand/bangkok",
    "/places/malaysia/kuala-lumpur", "/places/singapore", "/places/macau",
    "/places/japan/osaka", "/places/japan/fukuoka",
    "/places/south-korea/busan", "/places/south-korea/jeju",
]
TABS = ["overview", "places", "eat", "practical", "itinerary", "safety"]

errors = []
def check(page, desc, cond, detail=""):
    status = "OK " if cond else "FAIL"
    print(f"{status} {desc} {detail}")
    if not cond:
        errors.append(f"{desc} {detail}")

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=r"C:\Users\89418\AppData\Local\ms-playwright\chromium-1228\chrome-win64\chrome.exe"
    )
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    console_errors = []
    page.on("pageerror", lambda e: console_errors.append(str(e)))

    for path in CITIES:
        page.goto(BASE + path, wait_until="networkidle")
        h1 = page.locator("h1").first.inner_text()
        tabs = page.locator('[role="tab"], nav[aria-label*="分页"] a, .city-tabs a, .city-tabs button').count()
        check(page, path, h1.strip() != "", f"h1='{h1.strip()[:20]}'")
        # count visible tab-like links
        tablinks = page.locator('a[href*="tab="]').count()
        check(page, f"  tabs {path}", tablinks >= 5, f"tablinks={tablinks}")

    # Tab content checks on tokyo
    page.goto(BASE + "/places/japan/tokyo?tab=places", wait_until="networkidle")
    check(page, "tokyo places attractions", page.locator(".attractions-grid article, .attractions-grid > *").count() >= 4,
          f"cards={page.locator('.attractions-grid article, .attractions-grid > *').count()}")
    # deep link expands neighborhood
    page.goto(BASE + "/places/japan/tokyo?tab=places#area-ueno", wait_until="networkidle")
    open_details = page.locator("details.stay-area[open], details#area-ueno[open]").count()
    check(page, "tokyo #area-ueno expands", open_details >= 1, f"open={open_details}")
    # eat tab restaurants
    page.goto(BASE + "/places/japan/tokyo?tab=eat", wait_until="networkidle")
    cats = page.locator("section.food-category").count()
    rests = page.locator("article.restaurant-entry").count()
    check(page, "tokyo eat content", cats >= 3 and rests >= 10, f"cats={cats} rests={rests}")
    # guide anchor
    page.goto(BASE + "/places/japan/tokyo?tab=practical#guide-documents", wait_until="networkidle")
    gd = page.locator("#guide-documents").count()
    check(page, "tokyo #guide-documents", gd >= 1)

    # attraction detail pages — sample several cities
    att = [
        "/places/japan/tokyo/attractions/senso-ji",
        "/places/japan/kyoto/attractions/fushimi-inari",
        "/places/south-korea/seoul/attractions/gyeongbokgung",
        "/places/taiwan/taipei/attractions/cks-memorial",
        "/places/vietnam/hanoi/attractions/hoan-kiem-lake",
        "/places/vietnam/hoi-an/attractions/japanese-bridge",
        "/places/thailand/chiang-mai/attractions/wat-chedi-luang",
        "/places/thailand/bangkok/attractions/grand-palace",
        "/places/malaysia/kuala-lumpur/attractions/petronas-towers",
        "/places/singapore/attractions/gardens-by-the-bay",
        "/places/macau/attractions/ruins-st-paul",
        "/places/japan/osaka/attractions/osaka-castle",
        "/places/japan/fukuoka/attractions/dazaifu-tenmangu",
        "/places/south-korea/jeju/attractions/seongsan-ilchulbong",
        "/places/south-korea/busan/attractions/jagalchi-market",
    ]
    for path in att:
        page.goto(BASE + path, wait_until="networkidle")
        h1 = page.locator("h1").first.inner_text()
        check(page, f"att {path}", h1.strip() != "", f"h1='{h1.strip()[:24]}'")
        facts = page.locator(".attraction-facts dd").count()
        check(page, f"  facts {path}", facts >= 3, f"facts={facts}")

    # mobile overflow check on 3 cities
    mob = ctx.new_page()
    mob.set_viewport_size({"width": 390, "height": 844})
    for path in ["/places/japan/tokyo", "/places/vietnam/hanoi?tab=eat", "/places/singapore?tab=places", "/places/macau", "/places/south-korea/jeju?tab=places", "/places/japan/osaka?tab=eat"]:
        mob.goto(BASE + path, wait_until="networkidle")
        overflow = mob.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
        check(mob, f"mobile 390 {path}", overflow <= 0, f"overflow={overflow}px")

    # screenshots
    page.goto(BASE + "/places/japan/tokyo", wait_until="networkidle")
    page.screenshot(path="shot-tokyo-overview.png", full_page=False)
    page.goto(BASE + "/places/japan/tokyo?tab=places", wait_until="networkidle")
    page.screenshot(path="shot-tokyo-places.png", full_page=False)
    page.goto(BASE + "/places/japan/tokyo/attractions/senso-ji", wait_until="networkidle")
    page.screenshot(path="shot-sensoji.png", full_page=False)
    page.goto(BASE + "/places/macau?tab=eat", wait_until="networkidle")
    page.screenshot(path="shot-macau-eat.png", full_page=False)

    if console_errors:
        print("\nCONSOLE ERRORS:")
        for e in console_errors[:10]:
            print(" -", e[:200])
    browser.close()

print(f"\n{len(errors)} failures")
sys.exit(1 if errors else 0)
