# Rafael Aquino — Portfolio

A static portfolio with dark and warm-paper light themes, grounded in web development, reflecting an expanded role in networks and systems administration. The site runs directly on GitHub Pages, with no framework, backend, runtime dependencies, or deployment build step.

## Preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8765/`. The checked-in HTML also contains every project without JavaScript.

## Navigation and résumé access

The header uses an icon-only hamburger at every width. It opens a native modal side panel with an Overview link and six numbered section links, a small square marking the active section, contact icons, and a direct résumé link. Escape, the X control, and the desktop backdrop dismiss it; focus returns to the opener or moves to the selected section. The background is inert and scroll-locked while the menu is open. A simple navigation fallback remains available without JavaScript.

GitHub and CodePen use inline SVG icons with accessible labels, hover titles, and 44px touch targets. Primary document and project actions retain descriptive text. “View résumé” opens the full PDF in a new tab; the contact section also provides a download. There is no embedded résumé viewer or preview-image dependency.

## Maintain the content

- `index.html`: professional identity, experience, infrastructure, expertise, education, certifications, contact, and metadata.
- `projects.json`: authoritative project records. Original descriptions, technology lists, screenshots, and URLs are retained. New presentation fields contain supported categories, summaries, and contributions.
- `scripts/build-projects.mjs`: renders project records and project structured data into the marked region in `index.html`. Do not edit that region by hand.
- `style.css`: local fonts, design tokens, layout, breakpoints, interactions, reduced-motion, and print styles.
- `theme-init.js`: small pre-stylesheet initializer for system preference, saved themes, browser theme color, and cross-tab synchronization.
- `javascript.js`: progressive enhancement for the all-width modal navigation, filters, stack explanation, and screenshot previews.
- `project-assets/`: original screenshots. `optimized/` contains 640px and up-to-1280px WebP derivatives; original images remain available in the screenshot viewer.
- `resume/resume.pdf`: public copy of the supplied latest résumé. The internal VPN service label was removed to respect the brief's confidentiality requirement; all three pages and professional content remain. The source PDF outside this repository was not modified.
- `images/social-preview.png`: social sharing image using the site's design and local typography.

After editing project records:

```sh
node scripts/build-projects.mjs
node scripts/build-projects.mjs --check
node scripts/check-integrity.mjs
node --check javascript.js
node --check theme-init.js
node scripts/check-theme.mjs
```

Adding a project requires an original image, responsive derivatives, accurate dimensions, a stable `id`, and supported factual fields. Keep descriptions as text; `<br>` is the only supported markup. Project metadata is HTML-escaped during rendering.

The supplied résumé is authoritative for career details. The repository is authoritative for project history; the redesign brief also explicitly supplies tools such as Caddy and Let's Encrypt. Do not infer that every tool is used in every project.

## Deployment

Publish the repository root through the existing GitHub Pages configuration. All local asset references are relative. The `.nojekyll` file requests static serving. No package installation or build service is required. Regenerate and commit `index.html` whenever `projects.json` changes.

The canonical and sharing URLs assume `https://chrysippus2497.github.io/`; update those if the public domain changes. The repository root is the GitHub Pages publishing source.

## Historical links and assets

Original project URLs have been retained and labeled as original websites or repository links, rather than promising live demos or publicly accessible source. Two institutional GitHub URLs point to the profile and are labeled accordingly. Several historical URLs are unavailable; see `QA.md` before replacing them. The original malformed LinkedIn URL returned 404 and is not shown in the redesigned site. No substitute account was invented.

Original portraits, favicon/logo variations, and project screenshots are preserved as branding and historical source assets. Runtime AOS, external font requests, obsolete theme/cursor/splash code, generated legacy selectors, and duplicate inline project-rendering code have been removed. All four bundled font files are used. Existing ignored `node_modules` is not a site dependency; QA tools were installed separately under the temporary directory.

## Major portfolio versions

| Route | Purpose | Indexing |
| --- | --- | --- |
| `/` | Current portfolio, V2 | Canonical |
| `/v1/` | Original portfolio from commit `4f01ff2` | noindex, follow; canonical root |
| `/v2/` | Redirect to current V2, preserving query and fragment with JavaScript | noindex, follow; canonical root |

V1 is self-contained: original CSS, images, screenshots, fonts, and its historical two-page résumé live inside `v1/`. These are **intentional archive dependencies**, even when similar files exist at root. `v1/archive-manifest.json` records the source commit and checksums for 19 unchanged historical files. The integrity script protects them against accidental cleanup or mutation.

Archive-only changes: relative local dependencies, scalable viewport, archive notice, canonical/noindex metadata, labeled project links, isolated theme storage, keyboard focus handling, reduced-motion support, and locally vendored AOS 3.0.0-beta.6 with its MIT license. V1 retains its historical copy, layout, project rendering, theme switch, and links. Root V2 has no runtime library dependencies.

For V3: first replace the `/v2/` redirect with a self-contained frozen V2 snapshot, preserving its dependencies and adding an archive notice/noindex/canonical metadata. Then update root to V3 and add `/v3/` as its alias. Never redirect an archived version to a newer design. Include every version in asset checks before removing resources.

## Case-study content

`caseStudy` is optional project data: `context`, `purpose`, `contribution`, and an array of `implementation` titles/descriptions. The two institutional cases use the original project records for purpose, screenshots, and technologies, and the supplied résumé for development, maintenance, authentication, and administration responsibilities. Operational descriptions refer to work across the College's platforms; they do not claim every project uses every infrastructure tool. No performance metrics, project dates, or claims of sole authorship were added.

The generator renders featured case studies separately from selected projects while preserving the eight original records and complete project-specific technology lists. Filters hide empty groups; native disclosures provide details without JavaScript. Header/menu navigation remains unchanged in structure. Résumé access is a direct PDF link, with no embedded viewer.

## V2 appearance and Connected Systems

The header sun/moon button switches directly between Dark and Light. The menu utility area offers Dark, Light, and System; System removes the manual override and follows live OS preference changes. First visits follow `prefers-color-scheme`; dark remains the fallback when no light preference is reported. V1 retains its independent historical theme.

`theme-init.js` runs before the stylesheet to apply `data-theme` before paint. Manual preferences use `portfolio-v2-theme` in localStorage. Storage failures fall back to a working in-memory choice; other open V2 tabs synchronize through the storage event. CSS supplies system-aware colors even without JavaScript. There are no cookies or server-side preferences.

Theme tokens live at the top of `style.css`: backgrounds, surfaces, text, accent/on-accent, borders, selection/focus, image frames/shadows, overlays, and graph colors. The light-token fallback under the system media query intentionally matches the explicit light theme. Components consume tokens; existing project images are unchanged. `scripts/check-theme.mjs` verifies initialization, persistence, system changes, invalid/blocked storage, cross-tab synchronization, and isolation from V1.

The decorative inline SVG network occupies reserved whitespace: a prominent hero topology connects switches, Linux servers, virtual machines, websites, and VPN access; five quieter diagrams between sections connect to a continuous margin line. Complete routes and destination icons remain outside content cards. Mobile uses compact compositions. Packets and destination pulses use staggered 14-second hero, 20-second supporting, and 22-second mobile cycles. Pause data flow stops all artwork; an IntersectionObserver suspends each offscreen diagram independently. Reduced-motion and JavaScript-disabled views remain static. The artwork is hidden from assistive technology and represents capabilities, not an actual university network. No archived assets were modified.

Career chronology starts with web development and expands into current ICT operations. Confirmed dates: Senior ICT Assistant at UP Diliman–CSRC, College of Science, August 2026–present; the previous Project Staff role ended July 31, 2026. The résumé remains the source for responsibilities; the user's confirmed end date supplies day-level precision on the timeline.

The navigation square follows the link with `aria-current="location"`; JavaScript updates it on selection, scrolling, resize, hash changes, and content-height changes. At the hero, Overview is active. Reduced-motion preferences disable the indicator's short opacity/scale transition.

## Current professional hierarchy and contact

Network, Systems & Software is the prominent specialty label. Senior ICT Assistant remains the actual job title in About, Experience, and Person metadata. The current focus is Networks, Virtual Machines, Servers, Websites & VPNs. Full-Stack Web Development is labeled as the professional foundation and ongoing skill; all eight original project records remain unchanged. The hero progression starts with that foundation, then highlights current ICT operations and its five responsibility areas. About, the current timeline entry, the current-focus diagram preserve that role hierarchy; the specialty label appears in the menu, footer, and sharing artwork. Confirmed appointment dates remain August 2026–present and July 31, 2026 for the previous role's end.

The active navigation indicator is an 8px filled square at the far right of the active row, vertically centered with its label, inheriting the active text color. Overview provides an active destination at the top of the page; six content sections retain their existing numbering.

The contact area uses a clickable email link and a native Clipboard API action. Successful copies announce “Email copied.” briefly through a live status region. Denied or unavailable clipboard access selects the address and offers a manual-copy instruction; the email link works without JavaScript.

The hero tagline is “Building software. Connecting systems. Keeping services running.” It connects the development foundation with the current infrastructure responsibilities. The square navigation indicator and Let’s Connect contact area remain unchanged.
