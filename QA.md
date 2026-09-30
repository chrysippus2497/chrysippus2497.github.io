# V2 refinement and version archive QA

Checked locally in Chrome on 2026-09-30 using a static HTTP server. Automated checks supplement visual and keyboard inspection; they are not accessibility certification.

## Current portfolio

- Root displays V2. Responsive layouts checked at 1440, 1024, 768, 390, and 320px; no horizontal overflow.
- All eight projects retained. Two institutional case studies have purpose, contribution, implementation, and full original stacks. Six other projects remain in the selected-project grid.
- Every screenshot opens and decodes in the native dialog; Escape closes it. Filters, counts, empty-group hiding, and native disclosures work.
- Six menu destinations move focus to the selected section. Escape restores focus, menu focus is contained, and body scrolling is restored. Icon-only controls retain accessible names.
- Axe scans report zero violations for tested root desktop/mobile and open-menu states.
- Reduced motion disables smooth scrolling. All project content, details, and fallback navigation remain usable without JavaScript.
- No JavaScript errors or failed resource requests in the responsive/version checks. PDFs are local and valid; email uses mailto with envelope icons. No inline résumé preview.
- Root canonical, social metadata, refreshed 1200×630 sharing image, Person schema, and eight CreativeWork entries reflect V2. The hero uses static inline Connected Systems SVG; no decorative animation or new runtime dependency.

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
- Every screenshot preview and the résumé endpoint were checked. No console errors or warnings were reported. Reduced motion disables existing transitions and smooth scrolling; the graph is static in every mode.
- `/v2/` preserves query/hash and V2 preferences when redirecting. `/v1/` retains its original markup, styles, assets, and separate theme behavior; it does not receive V2's theme attribute. The archive checksum checks pass.
- Removed the V2-only diagonal-background SVG and its CSS; sharing artwork now uses the Connected Systems motif. Project data, résumé content, and archive files were not changed.

## Career progression and active navigation

- The hero now says “Building applications. Keeping systems running.” and explicitly describes starting in web development before expanding into current ICT operations. The career and About copy name networking, Linux server administration, Proxmox virtual machines, website maintenance, and VPN management. All eight development projects remain.
- User-confirmed dates override résumé month-level precision where supplied: Senior ICT Assistant, UP Diliman–CSRC, College of Science, August 2026–present; Project Staff – Full-Stack Developer & System Administrator, July 2025–July 31, 2026. Machine-readable time attributes preserve this precision without inventing an exact August start day.
- Replaced section-navigation arrows with a 6px square shown only beside the link marked `aria-current="location"`. Selection updates immediately; scroll position, viewport changes, hash changes, and layout changes keep the indicator synchronized. No square is shown while the hero is the current view because Home is not a sidebar item.
- Browser checks cover all six sections in both themes, immediate selections, manual scrolling, smooth scrolling, and short final-section behavior. Only one active square is visible at a time. The existing menu focus and Escape behavior remain intact.
