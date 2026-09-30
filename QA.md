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
- Root canonical, social metadata, refreshed 1200×630 sharing image, Person schema, and eight CreativeWork entries reflect V2. Geometry is a static local SVG; no animation or new runtime dependency.

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
