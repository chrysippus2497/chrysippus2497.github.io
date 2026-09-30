/** Local content/asset checks; no dependencies or network access required. */
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const projects = JSON.parse(readFileSync(new URL('projects.json', root), 'utf8'));
execFileSync(process.execPath, [new URL('build-projects.mjs', import.meta.url).pathname, '--check']);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
for (const [, href] of html.matchAll(/\bhref="(#[^"]+)"/g)) {
  assert(ids.includes(href.slice(1)), `Missing anchor: ${href}`);
}
for (const [, path] of html.matchAll(/\b(?:src|href)="([^"#:]+)"/g)) {
  assert(existsSync(new URL(path, root)), `Missing local resource: ${path}`);
}
for (const project of projects) {
  for (const key of ['imageSrc', 'imageSmall', 'imageWebp']) {
    assert(existsSync(new URL(project[key], root)), `${project.title}: missing ${key}`);
  }
  assert(project.techList.length > 0, `${project.title}: missing project stack`);
  assert(project.width > 0 && project.height > 0, `${project.title}: missing image dimensions`);
  for (const key of ['githubLink', 'externalLink']) assert.equal(new URL(project[key]).protocol, 'https:');
  assert(ids.includes(`project-${project.id}`), `${project.title}: missing rendered project`);
}
for (const [, payload] of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  JSON.parse(payload);
}
assert(existsSync(new URL('images/social-preview.png', root)), 'Missing social sharing image');
assert(readFileSync(new URL('resume/resume.pdf', root)).subarray(0, 5).toString() === '%PDF-', 'Invalid resume file');
console.log(`Integrity passed: ${projects.length} projects, unique IDs, anchors, local assets, structured data, and résumé.`);

for (const route of ['v1/', 'v2/']) {
  const page = readFileSync(new URL(`${route}index.html`, root), 'utf8');
  assert(page.includes('noindex, follow'), `${route}: archive indexing`);
  assert(page.includes('rel="canonical" href="https://chrysippus2497.github.io/"'), `${route}: canonical`);
  for (const [, path] of page.matchAll(/\b(?:src|href)="([^"#:]+)"/g)) {
    if (path.includes('${')) continue; // V1 runtime project interpolation; protected below.
    assert(existsSync(new URL(path, new URL(route, root))), `${route}: missing ${path}`);
  }
}
const manifest = JSON.parse(readFileSync(new URL('v1/archive-manifest.json', root)));
for (const [path, expected] of Object.entries(manifest.sha256)) {
  const bytes = readFileSync(new URL(`v1/${path}`, root));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `Archived asset changed: ${path}`);
}
for (const stylesheet of ['style.css', 'v1/style.css', 'v1/archive.css']) {
  const css = readFileSync(new URL(stylesheet, root), 'utf8');
  for (const [, path] of css.matchAll(/url\(['"]?([^'"()]+)['"]?\)/g)) {
    if (/^(data:|https?:)/.test(path)) continue;
    assert(existsSync(new URL(path, new URL(stylesheet, root))), `${stylesheet}: missing ${path}`);
  }
}
console.log(`Version integrity passed: routes, canonical URLs, CSS resources, ${Object.keys(manifest.sha256).length} protected V1 files.`);
