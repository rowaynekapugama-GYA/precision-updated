# Changelog

## 2026-09-30 - Smile gallery built from the current site

The gallery was a consent placeholder. It now carries all 87 before and after cases
published on precisiondentistry.com.au, with the practice's own labels and disclaimer.

### What was carried across
- 87 cases, each with the patient first name, suburb and treatment exactly as the
  practice labels them today. Nothing was renamed or reworded.
- The time between the two photographs, printed on each card. Only where the current
  page states one: Invisalign 3 to 8 months, crowns and bridges 1 day to 2 weeks,
  veneers 3 weeks, implants 4 months. Whitening, bonding and full mouth rehabilitation
  show no timeframe on the current site, so those cards carry none rather than a guess.
  Confirm those three with the practice and they can be added.
- The practice's own disclaimer, below the CTA.

### What was not carried across
The current intro says the gallery shows "the drastic transformations we have achieved".
That is an outcome claim of the kind the advertising guidelines treat as creating
unrealistic expectations, so it was left behind. The approved copy from the content team
is used instead, with a short note above the grid saying the photographs are published
with permission, are shown as taken, and that results vary between individuals.

### How it works
- Filter chips for Implant, Invisalign, Composite Veneers, Porcelain Veneers, Whitening,
  Bonding, Crowns and Bridges and Full Mouth Rehabilitation, each with a count. The count
  line under them updates as you filter and is announced to screen readers.
- Clicking a photograph opens it larger. Arrow keys move through the cases, Escape closes,
  focus is trapped in the dialog while it is open and returns to the tile afterwards. The
  arrows stay inside whichever filter is active.
- Photographs are fitted inside their tile, never cropped, because a before and after image
  has to be published as it was taken and cropping one could remove half the comparison.
  Mixed aspect ratios were tested and all sit correctly.
- Thumbnails in the grid at 700px, full size at 1400px, all lazy loaded.

### The images are NOT in this zip
They are pulled from the current website, which the build machine cannot reach. Run the
puller in the site folder once before uploading: `bash pull-gallery-images.sh` on a Mac,
or `powershell -ExecutionPolicy Bypass -File .\pull-gallery-images.ps1` on Windows. Both
write the same file names. See `assets/img/gallery/README.txt`. If that folder is still
empty at go-live the page will show 87 broken images.

## 2026-09-30 - Dr Choi portrait and photos on the Patients and Contact pages

Five further photographs supplied by the practice.

### Dr Billy Choi
- His portrait is now the standing photograph taken in reception, replacing the crop we
  had lifted out of the team photo. It is cut twice from the original: 4:5 for the panel
  beside his introduction, 1:1 for the feature card on the Meet the Team page. Both crops
  are anchored to the top of the frame so the narrower mobile shapes do not clip his face.
- His profile page hero is now the photograph of him with a patient and assistant, so the
  page carries two different pictures of him rather than the same one twice.

### Patients pages
- **Invisalign SmileView**: the treatment-room photograph showing a digital scan and clear
  aligners on screen.
- **Smile Gallery**: a patient in the chair. The gallery grid itself is still the consent
  placeholder, unchanged.
- **Dental Articles and Videos**: the waiting area.

### Contact
- Hero is now the reception desk photograph.
- "Getting Here and Parking" carries the reception wall photograph.

### Also
- `accreditation.webp` was byte for byte identical to `cosmetic.webp`, so the About Us
  "Accreditation and Safety" section was showing the same picture as the Cosmetic Dentistry
  category hero. It now carries the new photograph of a prepared treatment room, which
  suits a section about sterilisation better, and the duplicate file is deleted.
- Removed a stray line reading "GENERAL DENTISTRY" from the Contact page copy. It is a
  section marker from the copy document, not a sentence, and it rendered as a loose line
  of shouting under the enquiry form heading. Flagged to GYA rather than rewritten.
- The shared page shell now finds the header, footer, CTA and contact block in index.html
  by marker instead of by line number, so editing the homepage can no longer silently
  carve the wrong markup into the generated pages.

## 2026-09-30 - Client photography

The practice supplied 14 photographs. They are now placed across the site, and the
repeated stock-style imagery is gone.

### Hero
- The hero is now the reception photograph instead of the video. It shows the practice
  signage and the entrance, so visitors see the real place straight away.
- A slow drift (30 second Ken Burns, scale and a small pan) keeps some life in the still.
  It switches off under prefers-reduced-motion.
- The overlay was retuned for the new picture: lighter at the top so the signage and
  pendant read clearly, deeper behind the copy. Measured contrast improved to 7.5:1 on the
  headline, 9.7:1 on the subheading and 5.8:1 on the intro, all clearing WCAG AA.
- The video and its poster frame have been removed, as nothing referenced them any more.

### Placed to match the section each photo was named for
- **Homepage**: About, Why Choose Us, Patient Benefits and the four service rows.
- **About page**: hero, Our Philosophy, Our Team, Accreditation and Safety, Technology and
  Visit Us, alternating image left and right down the page.
- **Prices**: the fees consultation photograph.
- **Meet the Team** and **Dr Choi's introduction**: the two new image slots requested.
  Dr Choi's portrait sits beside his introduction rather than in the hero, so it does not
  appear twice on one page.

### Repetition
Every page in a category used to carry the same category photograph: 12 general dentistry
pages shared one image. The wider set is now rotated across the service pages, so the
heaviest-used photo appears on 8 pages instead of 12, spread over 7 images instead of 4.

### Weight
49 MB of JPEG became 1.1 MB of WebP. The hero ships at 2400px with a 1200px version for
phones. The whole site is now 4.0 MB including every page and photograph.

### Also
- New `media-split` component for a photograph beside body copy, on the existing tokens.
- Fixed an explore-link icon that rendered at full size on the team feature card.
- **Dr Billy Choi's name is confirmed.** The embroidery on his scrubs in the team photograph
  reads "Dr. Billy Choi", which settles the Phase 1 query. The earlier "Chun" reading came
  from a low resolution thumbnail. The copy document, meta titles and 301 map were right.

### Verified
- 56 pages, zero broken links, zero missing assets.
- No horizontal scrolling at 320, 390, 768, 1024, 1440 and 1920.
- Every new photograph carries meaningful alt text; the decorative band image is correctly
  marked aria-hidden.

### Note
The same photograph was supplied twice, named both "Cosmetic Dentistry" and "Accreditation
and safety". It is used in both places, which are on different pages and at different sizes.
A distinct sterilisation or accreditation photograph would be better if one exists.

## 2026-09-30 - Remaining pages built

The site was a homepage only. Every other page in the copy document is now built in
the same design system, so the menu no longer points at pages that do not exist.

### Built
- **54 new pages**: 28 service pages, 4 category pages, 7 suburb landing pages, 6 practice
  pages (About, Dental Technology, Accreditation, Infection Prevention and Control,
  Invisalign SmileView, Prices and Payment Options), Contact, Meet Our Team, Dr Billy Choi,
  Smile Gallery, Articles, an HTML sitemap and 3 legal placeholders.
- Copy is used **verbatim** from the client document. The only editorial acts were
  structural: grouping the flat copy into sections and moving the disclaimer and risk
  statement below the call to action, where the developer instructions put them.

### Page templates, per the developer instructions
- **Service pages**: intro, body sections, numbered steps for "What Happens at Your
  Appointment", fees module, FAQ accordion with the first question open and every answer
  present in the HTML on load, related services, global CTA, then the disclaimer and, on
  the 10 named pages, the surgical risk statement.
- **Emergency pages**: the Call button sits directly under the introduction, "When to Seek
  Care" is a highlighted alert box with the 000 guidance visible, and "What to Do Before
  Your Appointment" is a highlighted first aid box.
- **Category and suburb pages**: service cards linking through to each treatment.
- **Team**: Dr Choi as a feature card, then the team from the copy. No staff photographs,
  since photos of non-dentist staff need approval and none has been given.

### Design
- Inner page components added to the stylesheet on the existing tokens: page hero,
  numbered steps, alert and first aid boxes, service cards, team cards, credentials block,
  tables, gallery and sitemap columns. No new colour, radius or font was introduced.
- Where the copy opens with a heading rather than a paragraph, that heading becomes the
  serif italic subheading in the page hero, the same shape as the approved homepage hero.
- The sticky Call and Book bar now also holds back behind inner page heroes, so the
  booking button is never offered twice on one screen.

### Verified
- 56 pages, 61 internal URLs, **zero broken links, zero missing assets, zero orphan pages**.
- **No horizontal scrolling** at 320, 390, 768, 1024, 1440 and 1920 across all 14 page types.
- Every page: one H1, a title, a meta description, a canonical, Australian spelling, no em dashes.
- **Schema**: Dentist on all 55 indexable pages, BreadcrumbList on all 54 inner pages,
  FAQPage on the 37 pages with an FAQ. All parse. **No rating or review markup anywhere.**
- **AHPRA scan**: no superlative or expert claims, no guarantees, no pain-free claims, no
  testimonials, star ratings or review counts, no urgency wording.
- Risk statement present on exactly the 10 pages the instructions name. Disclaimer on all
  32 service pages.
- sitemap.xml regenerated with all 55 URLs.

### Open, needs the practice
- **Privacy Policy, Disclaimer and Treatment Risks** are placeholders. These are legal and
  compliance pages and their wording has to come from the practice or the old site. The
  enquiry form links to the privacy policy, so it is needed before go-live.
- **Dr Choi's Dental Board registration number** is a placeholder on his profile. It must
  come from the public register.
- **Smile Gallery** ships with no images. Each needs documented written patient consent for
  advertising use, plus a caption naming the treatment and stating that results vary.
- **Articles** has no posts. Existing ones need reviewing for superlatives, testimonials and
  outcome claims first.
- **Team photographs** are not shown pending approval.
- Page hero imagery reuses the four category photographs. Per-treatment images can be
  dropped in as the client supplies them.

## 2026-09-29 - Client revision round 1: brighter homepage, lighter type

In response to the client's feedback: brighter and clearer landing page, a lighter font, no dark blue sections, and less on the first mobile screen.

- **Hero overlay lightened.** It was up to 95% navy at the bottom, dimming the whole video. The bottom is now 58% and the wash across the middle and right is about half what it was. The copy still sits straight on the video, as before. A soft text shadow on the headline, subheading and intro carries the contrast the removed overlay used to, so the text holds on the bright frames as well as the dark ones. Measured on the poster frame: headline 5.1:1, subheading 7.8:1, intro 4.6:1, all clearing WCAG AA at the worst pixel.
- **Header now white glass** with navy text and `logo.png` in place of `logo-white.png`. The mega menu is unchanged.
- **No navy section fills.** Navy is a text and accent colour only now. Converted: the services band to `--sky-50` with white rows, the Why Choose Us card to white with a blue left edge, the featured offer card to `--sky-50` with a blue border, the footer to `--sky-50`, and the offers photo band overlay from 82% to 46% so it reads as a photo rather than a blue block. `.btn-dark` is redefined as the blue gradient, so no markup changed.
- **Lighter type.** Heading weight 700 to 600 and tracking -0.025em to -0.015em, both now tokens (`--w-head`, `--track-head`). `h1` from `clamp(2.8rem, 6.4vw, 5rem)` to `clamp(2.45rem, 5.4vw, 4.1rem)`.
- **Manrope** replaces Onest and Inter, carrying both headings and body. Instrument Serif italic stays on the hero subheading. Two font families load instead of three.
- **Mobile first view, 320 to 560.** Now the headline, the subheading and one Book button. Previously it stacked the header Book button, headline, subheading, a four line intro, two hero buttons, three chips and the sticky bar, with "Book Online" appearing three times. The intro and chips are hidden below 561px and unchanged above it. Hero height 92svh to 74svh so the About section peeks in. The header Book button drops at 420px and under. The sticky Call and Book bar now stays hidden while the hero is on screen and slides in once it scrolls away, so Book is never offered twice at once.
- **The 404 page is deliberately unchanged**, apart from its font link. It is a full page dark treatment rather than a section on the landing page, so it keeps the white logo.

Files changed: `index.html`, `404.html`, `assets/css/styles.css`, `assets/js/main.js`.

Verified: page height 7909px before, 7776px after. No horizontal scrolling at 320, 390, 768, 1024, 1440 or 1920.

## 2026-09-23 - Homepage prototype v2
- Homepage built from the client copy document, implemented verbatim.
- Full-bleed hero with the practice video (H.264, muted, looping, poster frame, pauses off screen, holds on the poster under reduced motion).
- Full-width dark sticky header with a four column Services mega menu, photo thumbnails on every row.
- Sections: hero, About, service rows, Why Choose Us, Special Offers, CTA, FAQ accordion, enquiry form and map, footer.
- Dentist and FAQPage JSON-LD. No rating or review markup.
- Enquiry form wired to a Vercel serverless function relaying through SMTP2GO.
- Responsive pass across 320px to 1920px.
