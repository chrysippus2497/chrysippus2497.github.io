/** Local content/asset checks; no dependencies or network access required. */
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
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
for (const [, payload] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  JSON.parse(payload);
}
assert(existsSync(new URL('images/social-preview.png', root)), 'Missing social sharing image');
assert(readFileSync(new URL('resume/resume.pdf', root)).subarray(0, 5).toString() === '%PDF-', 'Invalid resume file');
console.log(`Integrity passed: ${projects.length} projects, unique IDs, anchors, local assets, structured data, and résumé.`);
