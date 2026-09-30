# Redesign verification — September 30, 2026

## Content and assets

- All eight original project records were compared with the pre-edit data. Names, original image paths, descriptions, project-specific stacks, repository URLs, external URLs, and original project-link fields are unchanged.
- All original screenshots and branding files remain. The 1280px-or-smaller WebP set totals **335,518 bytes**, compared with **4,798,107 bytes** for the original screenshots (approximately **93% smaller**). Small 640px alternatives serve narrow layouts.
- Experience dates, titles, responsibilities, education, and six Cisco Networking Academy certificates were checked against the supplied résumé. No graduation dates or unsupported project metrics were added.
- The missing résumé asset was restored with a public copy of the latest three-page PDF. The internal VPN service label was removed; the source file in Downloads is untouched.
- Every local image, responsive image alternative, stylesheet, script, font reference, and résumé path tested returned HTTP 200. The résumé response is `application/pdf`.
- Project descriptions and stacks are pre-rendered, HTML-escaped, and readable by search engines. Native disclosure controls expose the full records. Data-driven generation requires only Node's standard library.

## Browser and interaction checks

Tested with installed Google Chrome using a temporary Puppeteer environment and a local HTTP server.

- Viewports: **320, 390, 760, 768, 1024, 1440, and 1920px**. No horizontal document overflow or elements extending past the viewport.
- Desktop and tablet screenshots visually reviewed; mobile hero, navigation, content, and screenshot layouts inspected.
- All four filters produce the expected results: all 8, institutional 3, business/commerce 3, web applications 2.
- All eight project disclosures open and close and retain their complete stack lists.
- All eight original screenshot previews load, close with Escape, and return keyboard focus to their trigger. The native modal dialog provides focus containment and background inertness.
- Mobile menu: toggle state, keyboard Tab, Escape with focus return, and link selection with focus moving to the destination section.
- All internal navigation targets exist. Skip link, mailto address, project URLs, and résumé links retain valid destinations or formats. Mail sending was not initiated.
- All seven stack controls update their pressed state and explanation.
- Reduced motion: computed scroll behavior is `auto`; image transitions are `0s`.
- With JavaScript disabled, all eight projects and navigation remain available; native project details still work.
- No page JavaScript errors, console warnings, or failed resource requests during the browser test.
- Axe WCAG 2 A/AA and WCAG 2.1 AA scans returned **zero violations** in the tested desktop and mobile states. This is an automated check, not a claim of formal accessibility certification.

## External link audit

Point-in-time checks from this environment; an error does not establish whether a repository was deleted or made private. Original project links are retained with historical labels and a short availability note. No guessed replacements were added.

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

## Architecture and cleanup

- HTML/CSS/JavaScript with local assets; no runtime packages, backend, CDN scripts, or external font requests.
- The existing GitHub Pages repository layout is preserved; asset links remain relative and `.nojekyll` enables ordinary static GitHub Pages serving. A published deployment was not triggered or tested.
- Removed legacy AOS calls, light-theme inline style mutations, splash delays, cursor tracking, duplicate navigation markup, old generated class names, redundant counters, and commented-out legacy code.
- Retained source imagery and branding variations deliberately; only the optimized derivatives are requested for the normal gallery. Original screenshots load on demand in previews.
- Generated markup consistency, JavaScript syntax, local path checks, unique IDs, anchors, JSON-LD parsing, and Git whitespace checks are covered by the documented local commands.

## Navigation and inline résumé update

- Restored an inline, three-page résumé preview with previous/next controls, page status, enlarge/fit controls, and open/download PDF links. The hero's résumé link now targets this section.
- The previews are rendered from the existing public PDF; the PDF itself and the user's intervening edits to professional content were preserved.
- Replaced the desktop link row and mobile dropdown with one all-width hamburger and a native modal side panel. Added seven numbered sections, current-section metadata, and contact links. The reference menu was inspected for its right-side panel, hierarchy, and restrained interaction principles; site typography and branding remain Rafael's.
- Browser-tested at 1920×1080, 1440×1000, 768×1024, 390×844, and 320×568. Menu opening/closing, every section link, focus restoration, forward/reverse Tab containment, Escape, desktop backdrop dismissal, and body scroll restoration passed.
- All three résumé pages load; pagination boundaries, control focus, enlarge/fit state, and contained horizontal scrolling passed. No document-wide overflow, including while enlarged.
- Axe WCAG 2 A/AA and 2.1 AA: zero violations in tested desktop/mobile menus and résumé-page states. No page JavaScript errors.
- Reduced motion disables the panel animation. Without JavaScript, seven fallback navigation links and all three résumé pages remain available.
- Local asset existence, anchor targets, unique IDs, JavaScript syntax, and Git whitespace checks passed. No public deployment was performed.

## Final icon and résumé refinement

This revision supersedes the inline résumé preview above. The preview section, generated page images, renderer, controls, and unused viewer styles have been removed. The original public PDF remains intact; the hero and menu open it directly, and contact retains a download link.

- Hamburger and both close controls are icon-only, with accessible names and hover titles. GitHub and CodePen profile links use consistent inline SVG icons and 44px touch targets.
- Six numbered navigation sections remain. The header derives its total from the actual links and correctly marks Contact active at the bottom of the page.
- Refined social-link spacing and retained descriptive text for document and project actions.
- Chrome checks passed at 1440px, 390px, and 320px: control labels, touch targets, menu focus containment and restoration, direct PDF links, screenshot closing, active-section state, and no horizontal overflow.
- Axe WCAG 2 A/AA and 2.1 AA checks found zero violations in tested menu and page states. No JavaScript errors. Local assets, anchors, unique IDs, PDF signature, syntax, and whitespace checks passed.

## Pre-publication checks

- Both email links now use decorative envelope SVGs instead of outbound-link arrows; mailto destinations are unchanged.
- Verified the email controls at 1440px and 320px, including a single-line contact address and no horizontal overflow.
- Regenerated the project block after confirming its content and attributes matched the existing formatted markup exactly. All eight project entries are in sync with `projects.json`.
- Local integrity checks, JavaScript syntax, and Git whitespace checks passed before the publication commit.
