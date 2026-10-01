# RA Offset identity

Recreated as custom paths from Rafael Aquino's supplied Offset reference. The mark retains the rounded R counter, angular A, diagonal gaps, terracotta parallelogram connector, and separate lower diagonal fragment. No font glyphs or concept-sheet pixels are used.

- `ra-offset.svg`: full transparent mark; charcoal in light browser themes, warm off-white in dark themes.
- `favicon.svg`: static optical variant with an enlarged R counter/stem, clearer connector gaps, and the smallest lower fragment removed. Adapts to browser light/dark preference independently of the page theme selector.
- `favicon.ico`: 16×16, 32×32, 48×48 images on a warm-paper background for stable contrast in legacy tabs.
- `apple-touch-icon.png`: 180×180, solid warm-paper background.
- `favicon-{16,32,48}.png`: exact-size raster previews.
- `*-source.svg`: reproducible vector masters for raster exports.

Run `node scripts/build-branding.mjs` to regenerate SVG masters and identical header/footer path markup; `--check` verifies synchronization. Raster exports were rendered from these SVG masters in Chrome (256px fallback / 360px touch) and downsampled with Pillow Lanczos. The ICO contains all three requested sizes. Re-export rasters when changing the SVG geometry.

The installed mark is static; link hover only changes opacity slightly. Reference screenshots and actual-size previews are in `design/brand-preview/`. No manifest existed; root, V2 redirect, and concept review pages reference the new icons. Archived V1 assets and head tags remain untouched.

Header and footer pair the unchanged geometric symbol with “Rafael Aquino” in the portfolio's existing Calibre heading family, semibold, with restrained `0.01em` letter spacing and title case. Both wordmarks use 20px type; at widths up to 600px the header uses 18px type on two lines, a 52px symbol, and an 8px gap to leave room for the theme and menu controls. The footer keeps its 62px symbol and 12px gap.
