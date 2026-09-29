# Changelog

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
