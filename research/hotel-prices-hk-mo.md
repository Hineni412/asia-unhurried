# Hotel price research — Hong Kong & Macau
**Purpose:** calibrate heatmap `value` anchors (mid-range double room, ¥/night) and `season` monthly coefficients.
**Window:** data published ~Oct 2025 – Aug 2026. **FX used:** HK$1 ≈ ¥0.89 (late-2025 ~0.91, mid-2026 ~0.86); MOP1 ≈ ¥0.85; US$1 ≈ ¥7.1. Rates are pre-tax; HK adds 10% service + 3% hotel tax, Macau resorts add ~15% service+tax.

## Hong Kong — mid-range double, typical non-holiday night (¥)

| Neighborhood | ¥ low–high | vs priciest (Central) | Key sources |
|---|---|---|---|
| Sheung Wan–Sai Ying Pun | 550–1,000 | −30~45% | SW bundled w/ Central: mid-range avg HK$1,650 ≈ ¥1,470 (globaltravelexplore.com/hk-hotel-market-data-2026.html); SYP/Kennedy Town mid-range avg ~US$210 ≈ ¥1,490 (trustedtrips.ai/en-us/region/hong-kong-sar.hizt-i); mid-range tier HK$700–1,500 (hongkong-trip.com/guides/where-to-stay-by-budget-hong-kong/) |
| Central–Admiralty | 900–1,600 | baseline (=100) | Central/Sheung Wan mid-range avg HK$1,650 ≈ ¥1,470 (globaltravelexplore, ibid.); Central & SW band HK$1,200–6,000 incl. luxury (hongkong-trip.com/guides/where-to-stay-in-hong-kong/); Central avg ~US$320 premium-leaning (trustedtrips.ai, ibid.) |
| Wan Chai–Causeway Bay | 650–1,250 | −15~25% | Wan Chai HK$1,380 ≈ ¥1,230; Causeway Bay HK$1,480 ≈ ¥1,320 (globaltravelexplore, ibid.); WC/CWB HK$700–1,500–2,000 (hongkong-trip.com, ibid.) |
| Yau Ma Tei–Jordan | 450–900 | −40~50% | Mong Kok mid-range avg HK$980 ≈ ¥870, ~35% < Central (globaltravelexplore, ibid.); TST/Jordan mid-range HK$700–1,200 ≈ ¥620–1,070 (hongkong-trip.com, ibid.); Jordan/YMT/MK fringe avg US$125 ≈ ¥890, −41% vs priciest (trustedtrips.ai/en-us/region/kowloon.himt0z) |
| Tsim Sha Tsui | 650–1,200 | −20~30% | TST mid-range avg HK$1,350 ≈ ¥1,200 (globaltravelexplore, ibid.); TST HK$800–3,500 incl. luxury (hongkong-trip.com, ibid.); TST/Jordan/W. Kowloon mid-range avg US$240 ≈ ¥1,700 (trustedtrips.ai, ibid.) |

**Island vs Kowloon:** Island equivalents cost ~20–30% more for same quality (hongkong-trip.com/guides/where-to-stay-by-budget-hong-kong/); Mong Kok ≈ 35% below Central (globaltravelexplore, ibid.). Citywide mid-range avg ≈ HK$1,250 ≈ ¥1,100 (globaltravelexplore); BudgetYourTrip/Kayak put the (broader) mid-range mean lower at US$66–123 ≈ ¥470–870 (budgetyourtrip.com/hotels/hong-kong-HK). Citywide achieved room rate 2025 ≈ HK$1,263, occupancy 87% (colliers.com/en-hk/research/hong-kong-hospitality-insights-2025-2026).

### HK seasonality (× normal-weekday baseline)
| Month(s) | Multiplier | Evidence |
|---|---|---|
| Oct–Nov (fairs, early-Oct Golden Week spillover) | 1.15–1.3 | Nov = KAYAK's priciest month, S$369 vs Feb S$235 (kayak.sg/Hong-Kong-Hotels.108.dc.html); Oct–Nov avg US$279–282 vs May US$206 (trustedtrips.ai, ibid.); HKTB ARR Oct–Dec ≈ HK$1,400–1,500 vs Jul–Sep ≈ HK$1,100–1,200 (fortraveltips.com citing HKTB); early-Oct GW pushes occupancy ~90% (packzup.com/best-time-to-visit-hong-kong/) |
| Dec (festive) | 1.15–1.3; Christmas Eve +20–100% | Occupancy ~90%; 3–5★ rooms HK$800–1,400, +20–70%; budget +60–100% (english.dotdotnews.com/a/202512/22/AP6948bb91e4b0c32d4f63f28d.html; news.rthk.hk/rthk/en/component/k2/1837479-20251225.htm) |
| Feb (CNY week) | spike 1.3–1.5, but rest-of-month soft | KAYAK calls Feb *cheapest* month (−17%); globaltravelexplore mid-range index Feb=128 but Mar=90 — the CNY spike is ~1 week inside a dead month |
| May (Golden Week early days) | 1.1–1.2 early, ~1.0 rest | index May=118 (globaltravelexplore) |
| Jun–Sep (typhoon/rainy) | 0.8–0.95 | Sep index=82 lowest (globaltravelexplore); HKTB ARR Jul–Sep ≈ HK$1,100–1,200 ≈ −10~15% vs annual HK$1,263 (fortraveltips, ibid.) |
| Jan (post-NYE, pre-CNY) | ~0.9–1.05 | index Jan=115 skewed by CNY-adjacent days; late Jan dip noted (trustedtrips.ai) |

## Macau — mid-range double (¥); **weekday baseline + weekend multiplier**

Citywide refs: 2025 avg room rate MOP1,353 ≈ ¥1,150, occupancy 89.4% (macaubusiness.com/cny-five-star-room-rates-at-mop1500-industry-rep/; dsec.gov.mo Q4-2025 release). Star-level averages Jan–Aug 2025: 5★ MOP1,517.7 / 4★ MOP1,133.4 / 3★ MOP950.8 (dataplus.macaotourism.gov.mo MHA Aug-2025 PDF).

| Area | Weekday ¥ (Sun–Thu) | Fri–Sat multiplier → ¥ | Sources |
|---|---|---|---|
| Historic Centre / San Ma Lo–Inner Harbour | 350–800 | ×2–2.5 → 700–1,600 | Mid-range RMB400–700, Lisboa RMB700–1,200 (thechinajourney.com/where-to-stay-in-macau/); Peninsula US$75–220 wkday / US$130–350 wkend (faroway.ai/blog/where-to-stay-in-macau-first-time-visitors); Sofitel Ponte 16 wknight US$120–200, cheapest ~$64–80 (joyoustour.com/asia/best-hotels-macau.html; hotelscombined.com) |
| Outer Harbour (NAPE/ZAPE) | 500–1,000 | ×1.8–2.5 → 900–2,200 | Artyzen Grand Lapa trailing-month avg HK$924–947 ≈ ¥800 vs city avg HK$1,355–1,363 (agoda.com/en-au/grand-lapa-macau-hotel/...); Rio Hotel from ~US$68 (trivago.com) |
| Cotai Strip resorts | 700–1,300 | ×2–2.5 → 1,500–2,800+ | Cotai resorts MOP800–1,500 wkday vs MOP1,800–2,800 Fri–Sat (macau-trip.com/guides/macau-travel-budget/); Cotai US$120–280 wkday / US$250–600+ wkend (faroway, ibid.); Studio City wkday ~MOP917 ≈ ¥780; Venetian/Galaxy wknight US$150–300 (joyoustour, ibid.) |

**Weekday-vs-weekend gap (the defining Macau pattern):** Fri/Sat can be **2–3×** a Tuesday (wanderinchina.com/destinations/macao/accommodation/); hotels 30–50% cheaper Tue–Thu (macau-trip.com, ibid.); weekend/GW surges +60–80% over weeknight rates (joyoustour, ibid.); KAYAK data shows weeknight-vs-weekend spread ≈ ×2–3 (kayak.ie/Macau-Hotels.144.dc.html).

### Macau seasonality (× weekday baseline)
| Period | Multiplier | Evidence |
|---|---|---|
| CNY (Feb 17, 2026 ± days 1–4) | peak days ×2–3.5 | CNY 2025: 5★ avg MOP3,110→4,553, 3★ MOP913→1,929, Cotai to MOP6,000 (macaudailytimes.com.mo/hotel-prices-soar-during-chinese-new-year...); Morgan Stanley CNY-2025 survey: std-room ADR HK$3,911 ≈ ¥3,480 (ggrasia.com; agbrief.com/news/macau/20/01/2025/...). **CNY 2026 MHA guidance much softer: 5★ ~MOP1,500, 3★ ~MOP1,300, +10–20% YoY (macaubusiness.com, ibid.) — divergent, see flags** |
| Oct Golden Week (Oct 1–8) | ~×1.25 citywide avg; Cotai higher | GW-2025 citywide avg room MOP1,698.8 (−7.8% YoY), occupancy 87.9% peak 93.5% (ggrasia.com/macau-average-daily-arrivals-during-oct-golden-week...; chinadailyhk.com/hk/article/621434) |
| May Day GW (May 1–5) | ~×1.15 | GW-2025 ADRs ~14% below CNY-2025, ~2% below GW-2024 (macaubusiness.com/may-golden-week-faces-sluggish-outlook.../) |
| Jul–Aug (mainland summer hols) | ~×1.1–1.3; occupancy highest of year | Aug-2025 occupancy 92.9–96.6%, monthly ARR MOP1,466.6 (DSEC gcs.gov.mo/news/detail/en/N25IdM3bLm; MHA Aug-2025 PDF); KAYAK flags Aug as priciest month (kayak.sg / ca.kayak.com Macau pages) |
| Dec (Christmas/NYE) | ~×1.15–1.25 | festive + resort demand; consistent with high-season Nov–Apr pattern (priceoftravel.com/macau-price-guide) |
| Lows: Jan(post-NYE)/Mar/Jun | ~×0.85–0.95 | monthly ARR dips to ~MOP1,350; KAYAK shows cheapest month variously Oct(post-GW)/Jan/Mar/Jun by locale — treat as "weekday dips, not month dips" |

## Cross-check vs current code values
- HK bands (hongKong.ts): SW–SYP 480–880 · Central 850–1,500 · WC–CWB 600–1,050 · YMT–Jordan 420–780 · TST 620–1,200 — **broadly validated**; suggest raising WC–CWB high→~1,250 and YMT–Jordan high→~900.
- Macau bands (standalone.ts): Historic 400–800 · Outer Harbour 600–1,100 · Cotai 800–1,600 — **validated as weekday baselines**; Cotai weekday top closer to ~1,300 (1,600 ≈ Fri pricing). Weekend ×2–2.5 is not expressible in current `band` schema — note in text only.
- SEASON.hongKong {2:1.3,10:1.25,11:1.2,12:1.25, 7–9:0.95} — consistent with research; could add 9:0.85–0.9.
- SEASON.macau {1:1.25,2:1.4,5:1.1,7:1.1,8:1.15,10:1.35,12:1.2} — consistent; CNY/Oct-GW peaks are week-scale spikes inside otherwise normal months (monthly ARR stays ~MOP1,350–1,470), so coefficients are reasonable but understate holiday-week reality.

## Flags / could-not-source
- **SW–Sai Ying Pun and YMT–Jordan standalone bands**: sources bundle districts (Central+SW; SYP+Kennedy Town; YMT+Mong Kok/TST) — bands above are interpolated, not directly published.
- **Macau Inner vs Outer Harbour split**: no source publishes area-level bands; derived from hotel-level rates (Sofitel P16, Artyzen GL, Rio).
- **trustedtrips.ai USD figures run ~30–50% above other sources** (likely incl. taxes/service or premium-skewed "mid-range"); used for relative % only.
- **globaltravelexplore.com** is an SEO/aggregator-style source (plausibly synthetic) — directionally consistent with KAYAK/HKTB but treat as secondary.
- **Macau CNY magnitude diverges by source**: peak-day OTA checks ×3+ (MDT/Morgan Stanley, 2025) vs MHA member guidance ~MOP1,300–1,500 (CNY 2026). Likely methodology difference (peak-day walk-in vs pre-set member rates); cite both.
- **HK Feb paradox**: KAYAK's "cheapest month" (monthly avg) vs CNY-week spike — both true; monthly coefficient cannot capture the 1-week spike.
- Kayak's "cheapest Macau month" is inconsistent across locales (Oct/Jan/Mar/Jun) — flagged, not resolved.
