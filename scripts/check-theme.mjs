/** Dependency-free behavior checks for pre-paint theme initialization. */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
const source = readFileSync(new URL('../theme-init.js', import.meta.url), 'utf8');
function browser({ light = false, saved = null, blocked = false } = {}) {
  const dataset = {}, listeners = {}, media = { matches: light, addEventListener(_, fn) { this.change = fn; } };
  let value = saved, meta;
  const window = { matchMedia: () => media, dispatchEvent() {}, addEventListener(name, fn) { listeners[name] = fn; } };
  const storage = {
    getItem() { if (blocked) throw Error('Storage blocked'); return value; },
    setItem(_, next) { if (blocked) throw Error('Storage blocked'); value = next; },
    removeItem() { if (blocked) throw Error('Storage blocked'); value = null; }
  };
  runInNewContext(source, { window, document: { documentElement: { dataset }, querySelector: () => ({ setAttribute(_, next) { meta = next; } }) }, localStorage: storage, Event: class {} });
  return { dataset, media, listeners, set: window.portfolioTheme.set, saved: () => value, meta: () => meta };
}
for (const light of [false, true]) {
  const page = browser({ light });
  assert.equal(page.dataset.theme, light ? 'light' : 'dark');
  assert.equal(page.dataset.themePreference, 'system');
  page.media.matches = !light;
  page.media.change();
  assert.equal(page.dataset.theme, light ? 'dark' : 'light');
}
for (const saved of ['dark', 'light']) {
  const page = browser({ light: saved === 'dark', saved });
  assert.equal(page.dataset.theme, saved, 'Manual preference wins before first paint');
  page.media.change();
  assert.equal(page.dataset.theme, saved, 'System changes preserve manual selection');
  page.set(saved === 'dark' ? 'light' : 'dark');
  assert.equal(page.saved(), page.dataset.theme);
  assert.equal(browser({ saved: page.saved() }).dataset.theme, page.dataset.theme, 'Choice survives reload');
  page.set('system');
  assert.equal(page.saved(), null);
  assert.equal(page.dataset.themePreference, 'system');
}
const blocked = browser({ light: true, blocked: true });
blocked.set('dark');
assert.equal(blocked.dataset.theme, 'dark');
assert.equal(blocked.meta(), '#141514');
const invalid = browser({ light: true, saved: 'unexpected' });
assert.equal(invalid.dataset.theme, 'light');
invalid.set('unexpected');
assert.equal(invalid.dataset.themePreference, 'system');
invalid.listeners.storage({ key: 'portfolio-v2-theme', newValue: 'dark' });
assert.equal(invalid.dataset.theme, 'dark');
invalid.listeners.storage({ key: 'portfolio-v1-mode', newValue: 'enabled' });
assert.equal(invalid.dataset.theme, 'dark', 'V1 preference is isolated');
invalid.listeners.storage({ key: null, newValue: null });
assert.equal(invalid.dataset.theme, 'light', 'Storage clear restores system preference');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert(html.indexOf('src="theme-init.js"') < html.indexOf('rel="stylesheet"'), 'Theme initializes before stylesheet');
console.log('Theme checks passed: system, manual choice, persistence, blocked storage, cross-tab sync, archive isolation, pre-paint ordering.');
