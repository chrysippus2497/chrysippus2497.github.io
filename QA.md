# V2 refinement and version archive QA

## Calibre wordmark refinement — October 1, 2026

- Preserved the approved geometric RA paths and paired both home links with the title-case Calibre semibold wordmark, using `0.01em` tracking. The narrow header stacks the name beside a smaller symbol; the footer keeps its horizontal pairing.
- Browser checks passed in light/dark themes at 1440, 1024, 768, 601, 600, 390, and 320px: matching heading font, intended weight/spacing, identical header/footer paths, no horizontal overflow, and no overlap with header controls.
- Refreshed desktop/mobile header/footer previews and visually inspected the pairings. Desktop/mobile Axe checks reported zero violations in both themes; no browser JavaScript errors. Branding/project generation checks, site/archive integrity, theme checks, and whitespace checks passed.

Checked locally in Chrome on 2026-09-30 using a static HTTP server. Automated checks supplement visual and keyboard inspection; they are not accessibility certification.

## Current portfolio

- Root displays V2. Responsive layouts checked at 1440, 1024, 768, 390, and 320px; no horizontal overflow.
- All eight projects retained. Two institutional case studies have purpose, contribution, implementation, and full original stacks. Six other projects remain in the selected-project grid.
- Every screenshot opens and decodes in the native dialog; Escape closes it. Filters, counts, empty-group hiding, and native disclosures work.
- Six menu destinations move focus to the selected section. Escape restores focus, menu focus is contained, and body scrolling is restored. Icon-only controls retain accessible names.
- Axe scans report zero violations for tested root desktop/mobile and open-menu states.
- Reduced motion disables smooth scrolling. All project content, details, and fallback navigation remain usable without JavaScript.
- No JavaScript errors or failed resource requests in the responsive/version checks. PDFs are local and valid; email uses mailto with envelope icons. No inline résumé preview.
- Root canonical, social metadata, refreshed 1200×630 sharing image, Person schema, and eight CreativeWork entries reflect V2. The hero uses inline SVG with optional CSS data-flow pulses; no new runtime dependency.

## Version routes and asset protection

- `/v1/` loads the original design directly at desktop and mobile sizes. All images decode; no document overflow at 1440, 390, and 320px. Original menu section links and Escape work.
- `/v2/?check=1#about` redirects to `/?check=1#about`. A meta refresh and visible link provide fallback navigation.
- Both version routes use noindex/follow and root canonical; V1 has a discreet return-current link.
- V1 preserves the original CSS and 18 other historical assets byte-for-byte from commit `4f01ff2`. Its manifest and integrity checks protect these files. AOS is pinned locally with its license.
- Local resource references, CSS URLs, generated project consistency, unique root IDs, anchors, JSON-LD, PDF signature, JavaScript syntax, and git whitespace checks pass.
- Original project fields and technology arrays remain unchanged. Neither résumé contains the internal service label or IP-address patterns; no operational configuration was added.

## External link audit

Rechecked 2026-09-30. Unavailable links are preserved as historical records, not presented as verified live demos. HTTP failures do not distinguish private from deleted repositories. Aqua Pura's present site identity is unconfirmed; HNHS is a parked domain. No replacement URLs were invented.

| Original URL | Result |
| --- | --- |
| `https://csresourcesequipment.com` | DNS resolution failed |
| `https://cscentralizedportal.com` | DNS resolution failed |
| `https://aimporo.com` | HTTP 402 |
| `https://pwise.com` | Timed out |
| `https://tsibugan-st.com` | DNS resolution failed |
| `https://aquapura.com` | HTTP 200, no page title in returned HTML; identity not confirmed |
| `https://propertyrequirementsph.com` | DNS resolution failed |
| `https://hnhs.com` | HTTP 200, domain-sale title; no longer the school project |
| `https://github.com/chrysippus2497/` | HTTP 200, expected profile |
| `https://github.com/chrysippus2497/Aimporo-original` | HTTP 404 |
| `https://github.com/chrysippus2497/pwise-new` | HTTP 404 |
| `https://github.com/chrysippus2497/tsibugan-st` | HTTP 404 |
| `https://github.com/chrysippus2497/aquapura` | HTTP 404 |
| `https://github.com/chrysippus2497/propertyrequirementsph` | HTTP 404 |
| `https://github.com/chrysippus2497/hnhs` | HTTP 404 |
| `https://codepen.io/devrap2497` | HTTP 403; automated access blocked, retained existing URL |
| `https://www.linkedin.com/rafael-aquino-017623197` | HTTP 404; omitted from public navigation |

## Connected Systems and Dark / Light refinement

- Both themes tested at 1920, 1440, 1024, 768, 390, and 320px, with no horizontal overflow. Existing sections and project content remain intact; the subsequent career correction below updates the hero and role summaries. The graph uses five desktop nodes, a distinct four-node mobile treatment, and a short contact callback.
- Both-theme Axe checks passed on desktop/mobile, open navigation, and expanded case-study details. Corrected light-theme active-layer caption contrast before final checks. Screenshots and portrait use themed frames with their original image content intact.
- Browser tests passed for first-visit light/dark preferences, both manual choices across reload, manual overrides surviving OS changes, returning to System, and live OS preference changes. A delayed-stylesheet test confirmed the saved light preference is applied before styles finish loading, despite a dark OS preference.
- Storage-blocked browsers can still switch themes. No-JavaScript pages follow OS colors through CSS and retain all eight projects. Dependency-free theme tests additionally cover invalid values, cross-tab updates, storage clearing, and V1 storage isolation.
- The header switch and three menu options have accessible names/pressed states and 44px targets. Keyboard checks cover appearance-button activation, focus retention while changing theme, forward/reverse menu containment, Escape, focus restoration, and all six section links in both themes.
- Every screenshot preview and the résumé endpoint were checked. No console errors or warnings were reported. Reduced motion disables existing transitions and smooth scrolling; the later topology revision adds optional motion, described below.
- `/v2/` preserves query/hash and V2 preferences when redirecting. `/v1/` retains its original markup, styles, assets, and separate theme behavior; it does not receive V2's theme attribute. The archive checksum checks pass.
- Removed the V2-only diagonal-background SVG and its CSS; sharing artwork now uses the Connected Systems motif. Project data, résumé content, and archive files were not changed.

## Career progression and active navigation

- The hero now says “Building applications. Keeping systems running.” and explicitly describes starting in web development before expanding into current ICT operations. The career and About copy name networking, Linux server administration, Proxmox virtual machines, website maintenance, and VPN management. All eight development projects remain.
- User-confirmed dates override résumé month-level precision where supplied: Senior ICT Assistant, UP Diliman–CSRC, College of Science, August 2026–present; Project Staff – Full-Stack Developer & System Administrator, July 2025–July 31, 2026. Machine-readable time attributes preserve this precision without inventing an exact August start day.
- Replaced section-navigation arrows with a 6px square shown only beside the link marked `aria-current="location"`. Selection updates immediately; scroll position, viewport changes, hash changes, and layout changes keep the indicator synchronized. Superseded by the Overview item added in the ICT-emphasis revision below.
- Browser checks cover all six sections in both themes, immediate selections, manual scrolling, smooth scrolling, and short final-section behavior. Only one active square is visible at a time. The existing menu focus and Escape behavior remain intact.

## ICT emphasis, active indicator, and contact revision

- Inspected the published hero before editing. It still led with application development and selected Applications; both are replaced by a primary Senior ICT Assistant heading and selected ICT operations control. The current focus and development foundation are explicitly separated throughout the hero, diagram, About, current appointment, metadata, footer, and sharing artwork.
- Current operations list networking, Proxmox VMs, Linux servers, institutional website maintenance, and VPN management. Development is presented first in the career progression as the foundation and ongoing skill. All eight project records and their original technology stacks remain unchanged.
- Added Overview so the sidebar has a visible active indicator even at the hero. An 8px filled square sits next to the active label and inherits its exact color. Scrolling and selection tested for Overview and all six sections.
- Dark and light layouts tested at 1440, 768, 390, and 320px: no horizontal overflow. Desktop/mobile Axe scans report zero violations in the tested page states. Role hierarchy, confirmed dates, initial ICT selection, indicator color, and contact layout checked in-browser.
- Native clipboard write succeeds with an actual browser click. Confirmation clears after 3.5 seconds. A denied-write test verifies manual selection and an accurate fallback message. The mailto link remains available independently of the button.
- Theme behavior checks, generated project/asset integrity, archive checksums, JavaScript syntax, and git whitespace checks pass. V1 and the résumé were not modified.

## Specialty label and animated topology refinement

- Hero, menu, footer, title, and sharing artwork now use Network, Systems & Software. The exact hero tagline is “Building software. Connecting systems. Keeping services running.” Actual job title and confirmed dates remain in About/Experience and structured data.
- Decorative switch, server, VM, browser, and VPN motifs use thin theme-aware strokes. Branches connect switch → server/VM → websites; dashed paths distinguish VPN access. Mobile/tablet use a simpler independent composition, with no actual infrastructure identifiers or configuration.
- Both themes inspected at 1440, 1024, 768, 390, and 320px; no horizontal overflow. Desktop/mobile Axe scans found no violations in tested states.
- Verified signal dash-offset movement, pause/resume, and automatic offscreen pause. Reduced motion disables signals and hides the motion control. No-JavaScript markup remains static.
- The active square and native email copy confirmation still work. Contact markup, all project records, résumé, V1, and version routing are preserved. Local integrity, theme checks, JavaScript syntax, and whitespace checks pass.

## Full-page network refinement — October 1, 2026

- Moved the active square to the far-right edge of the navigation row. Browser geometry checks verify right alignment and vertical centering in both themes on desktop and mobile; the existing scroll and selection logic remains intact.
- Replaced the hero overlay with a complete topology in reserved space and added five quieter connecting diagrams between sections. A continuous margin line links these diagrams visually. Switch, server, VM, browser, and VPN icons stay inside their SVG bounds.
- Checked both themes at 1440, 1024, 768, 600, 390, and 320px: no horizontal overflow or artwork overlap with section content. Inspected full-page captures and individual section gaps, hero, menu, and contact at desktop and mobile sizes. Desktop/mobile Axe scans report zero violations in tested states.
- Verified page-wide pause/resume, independent offscreen suspension, destination arrival opacity, and reduced-motion suppression. Animation uses CSS dash offsets and opacity, with no JavaScript animation loop.
- Native email copying and confirmation still work. Specialty label, exact hero tagline, career information, project records, résumé, contact markup, V1 archive, and version routing remain unchanged. Integrity, theme behavior, JavaScript syntax, and whitespace checks pass.

## Living network and navigation previews

- Both themes: hovering an inactive row shows a second right-aligned square while Overview remains active. Pointer exit hides the preview; keyboard focus shows it again without changing `aria-current`.
- Added recognizable rack servers, port lights, grouped VMs, wireless access, VPN gateways, and miniature browser layouts. Staggered request, branching compute, website response, and return phases share a single clock per diagram; no random particles or JavaScript animation loop.
- Browser checks cover both themes at 1440, 1024, 768, 600, 390, and 320px. Complete device bounds and section-clearance assertions pass, with no horizontal overflow. Desktop/mobile Axe scans report zero violations in tested states. Visually inspected desktop and mobile topology, section connections, and simultaneous active/hover squares.
- Verified request/response phase visibility, browser page reveal, global pause/resume for every animated element, and reduced-motion suppression. Existing IntersectionObserver pauses entire diagrams, including port lights and page reveals, when offscreen.
- Content, career chronology, contact functionality, project data, résumé, and archive remain unchanged. Integrity, theme behavior, JavaScript syntax, and whitespace checks pass.

## Project image and icon refinement

- All eight project screenshots use image-only grayscale at rest and restore color on hover or visible keyboard focus, with a 350ms filter transition and existing reduced-motion support.
- Generated website and GitHub icon links retain all original URLs, new-tab behavior, and safe rel attributes. Each has a destination-specific accessible name and native tooltip; profile URLs are accurately labeled as profiles. All targets are 44 × 44px with consistent spacing.
- Footer email uses the shared social-link styling. Browser assertions confirm matching dimensions, padding, radius, background, color, and transitions across GitHub, CodePen, and email on hover and keyboard focus.
- Checked all eight projects in dark/light themes at 1440, 390, and 320px, including grayscale, hover, focus, link metadata, and overflow. Desktop/mobile Axe scans report zero violations in tested states; visually inspected project and footer captures. Generator consistency, site integrity, theme checks, and whitespace checks pass.
- Network artwork, navigation indicators, career content, project records, and archive remain unchanged.

## Final portfolio review — October 1, 2026

- Added an icon-only Back to top button with accessible label, tooltip, 44px target, theme-aware hover/focus styles, and safe-area positioning. It appears at scrollY = 1 and hides at zero; smooth scrolling and instant reduced-motion behavior both pass. Focus returns to main content. A narrow reserved right margin prevents overlap with text, links, and footer controls.
- Both themes checked at 1440, 1024, 768, 390, and 320px; additional keyboard checks at 320×568 and 844×390. No horizontal overflow, button/content intersection, or network/content overlap. Inspected hero, contact, network stages, and full-page captures.
- Confirmed Senior ICT Assistant at UP Diliman–CSRC, College of Science, August 2026–present; previous appointment ended July 31, 2026. Web development remains the foundation. Downloaded résumé text agrees at month-level precision; Person and project structured data parse correctly.
- All seven navigation destinations track scrolling; menu selection moves focus correctly, Escape restores it, and Tab stays within the modal. Active and preview squares remain independent.
- All eight project image previews decode and close with Escape. Grayscale/hover/focus states, original destination URLs, new-tab attributes, tooltip/accessibility labels, 44px icon targets, footer styles, project filters, and generated markup pass.
- Email link and PDF download are valid. Native clipboard success, 3.5-second confirmation clearing, and denied-write manual-copy feedback pass.
- Network routes remain fully visible. Global pause/resume, offscreen suspension, and reduced-motion suppression pass. All content remains available without JavaScript.
- Desktop/mobile Axe scans report zero violations in tested states; no browser JavaScript errors or failed local resource requests. Metadata, canonical URL, JSON-LD, archive integrity, theme behavior, and syntax/whitespace checks pass.
- Cold local mobile initial load: 8 asset requests, approximately 166 KB transferred excluding HTML; local DOMContentLoaded measured 45–115ms. These are unthrottled local observations, not production Core Web Vitals. Screenshots are lazy-loaded with responsive image variants.
- External URLs were re-audited with bounded GET requests. Previous audit findings remain: four project domains do not resolve, PWise times out, Aimporo returns 402, six repository URLs return 404, and HNHS is parked. Aqua Pura returns 200 but identity is unconfirmed; CodePen blocks automated access (403); GitHub profile returns 200. Existing historical URLs and the availability notice are preserved. The material follow-up is to supply confirmed replacement demos/public repositories or intentionally retire obsolete destinations.

## RA monogram and contribution wording

- CS Resources & Equipment Database contribution now exactly matches the owner-supplied sentence in both projects.json and generated markup.
- Header uses a custom inline SVG RA monogram with a shared crossbar, a network extension, and an accent square. Hover/visible keyboard focus plays a single 1.2-second packet/arrival sequence; reduced motion leaves the mark static. The top link has the exact accessible name “Rafael Aquino — Home.”
- Inspected both themes at 1440, 390, and 320px. Header elements remain separated, with no horizontal overflow. Verified exact contribution text, home navigation, keyboard focus, animation phases, and reduced motion. Desktop/mobile Axe scans report no violations in tested states; generator, integrity, theme, and whitespace checks pass.

## Logo studies and complete CS Resources technology presentation

- Added an isolated, noindex comparison at `design/logo-concepts/`: Circuit RA, Negative-space RA, and Typographic RA, each in both portfolio themes at header size and exactly 16/32 CSS-pixel tab sizes. Custom vector paths; static previews. Current header and favicon remain unchanged pending owner selection; final SVG/ICO/Apple icon installation is deferred until that selection.
- Compared against the original `v1/index.html` project record (all ten technologies were present). Normalized Tailwind → Tailwind CSS, Alpine → Alpine.js, and Gmail SMTP Mail Server → Gmail SMTP to the requested names. Five main frameworks/libraries appear as concise tags; the details group all ten into frameworks/libraries, development tools, integrations, and email service. No technologies were invented.
- Generator validates category membership against the complete techList, preventing omissions or duplication. The contribution sentence remains exactly as supplied. Other project records are unchanged.
- Both themes checked at 1440, 390, and 320px, with no horizontal overflow. Exact contribution, ten unique full-stack entries, five summary tags, and rendered favicon-preview dimensions pass browser assertions. Visually inspected comparison and expanded stack. Axe scans found no violations in tested page states. Generator/integrity checks pass and V1 remains protected.

## Interconnected RA revision and visible technology details

- Replaced the comparison page with three new constructions: Relay (folded shared foot), Keystone (one diagonal serves both letters), and Forge (bold joined silhouette). Each uses one structural square and includes enlarged, actual header-container, and exact 16/32px tab views in light and dark themes. Current site branding and favicon references remain unchanged; final icon exports await selection.
- Moved supporting CS Resources & Equipment Database technology groups into the visible case narrative as well as retaining the complete expandable list. Browser assertions verify all ten unique technologies render with the implementation disclosure CLOSED, including Pusher, Postman, GitHub Desktop, Google reCAPTCHA, and Gmail SMTP.
- Exact contribution wording is unchanged. Checked both themes at 1440, 390, and 320px; no horizontal overflow, and Axe scans report zero violations in tested states. Inspected the concept sheet and visible stack screenshots; checked exact tab-preview dimensions. Project generator, integrity, and theme checks pass.

## Approved Offset identity implementation

- Recreated the attached Offset reference with custom filled SVG paths: rounded R counter, angular A, deliberate diagonal gaps, terracotta connector, and lower diagonal fragment. Installed matching header/footer symbols; footer adds a restrained wordmark. The home links retain “Rafael Aquino — Home.” The mark is static with opacity-only hover, and inherits charcoal/warm off-white theme colors.
- Created theme-aware SVG favicon, optically adjusted small geometry, a verified ICO containing 16/32/48px images, and a 180×180 RGB Apple touch icon. PNG/ICO exports come from the new SVG masters, not the concept-sheet raster. Raster fallback/touch backgrounds are solid warm paper. No existing manifest was found. Updated active icon tags on root, V2 redirect, and concept review page; V1 remains unchanged.
- Captured header/footer screenshots in dark/light themes at 1440px and 390px and checked layout at 320px. Actual-size SVG and raster favicon previews were visually inspected; embedded light/dark SVG rendering and icon HTTP 200 loading confirmed. Preview files are at `design/brand-preview/`.
- Asserted all ten CS Resources technologies are visibly rendered outside collapsed details, with frameworks, development tools, integrations, and email service grouped. Exact contribution wording is unchanged. No new technologies were added.
- Verified unchanged navigation tracking, image grayscale/hover, back-to-top, network playback/pause, and accessible home links. No horizontal overflow, browser JavaScript errors, or Axe violations in tested desktop/mobile states. Branding generation, project generation, theme, integrity, V1 checksums, and whitespace checks pass.
