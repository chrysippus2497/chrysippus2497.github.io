/** Render search-readable case studies and projects from the single source of truth. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const projects = JSON.parse(readFileSync(new URL('projects.json', root), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const description = value => value.split(/<br\s*\/?\s*>/i).map(escape).join('<br>');
const tags = (list, className = 'tech-list') => `<ul class="${className}">${list.map(tech => `<li>${escape(tech)}</li>`).join('')}</ul>`;
function completeStack(p) {
  if (!p.techGroups) return tags(p.techList);
  const grouped = p.techGroups.flatMap(group => group.items);
  if (new Set(grouped).size !== grouped.length || grouped.length !== p.techList.length || p.techList.some(tech => !grouped.includes(tech))) throw new Error(`Incomplete technology groups: ${p.id}`);
  return `<div class="project-stack-groups">${p.techGroups.map(group => `<div><h6>${escape(group.title)}</h6>${tags(group.items)}</div>`).join('')}</div>`;
}
function visual(p, i) {
  return `<a class="project-visual" href="${escape(p.imageSrc)}" data-title="${escape(p.title)}" aria-label="View screenshot of ${escape(p.title)}">
    <picture><source type="image/webp" srcset="${escape(p.imageSmall)} 640w, ${escape(p.imageWebp)} ${Math.min(p.width, 1280)}w" sizes="(max-width: 600px) 85vw, (max-width: 900px) ${p.featured ? '85vw' : '42vw'}, ${p.featured ? '720px' : '550px'}"><img src="${escape(p.imageSrc)}" alt="${escape(p.title)} — ${escape(p.summary)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async"></picture>
    <span class="image-caption"><span>${p.featured ? 'UP DILIMAN / COLLEGE OF SCIENCE' : 'PROJECT / ' + String(i + 1).padStart(2, '0')}</span><span>View screenshot ↗</span></span>
  </a>`;
}
const projectIcons = { website: '<svg class="social-icon" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"/></svg>', github: '<svg class="social-icon" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>' };
function links(p) {
  const sourceLabel = /^https:\/\/github\.com\/[^/]+\/?$/.test(p.githubLink) ? 'GitHub profile' : 'GitHub repository';
  const websiteLabel = `Visit the original ${p.title} website (opens in a new tab)`;
  const githubLabel = `${sourceLabel} for ${p.title} (opens in a new tab)`;
  const link = (url, label, icon) => `<a class="social-link" href="${escape(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(label)}" title="${escape(label)}">${icon}</a>`;
  return `<div class="project-links">${link(p.externalLink, websiteLabel, projectIcons.website)}${link(p.githubLink, githubLabel, projectIcons.github)}</div>`;
}
function card(p, i) {
  const number = String(i + 1).padStart(2, '0');
  if (p.featured && p.caseStudy) {
    const c = p.caseStudy;
    return `<article class="project case-study" id="project-${escape(p.id)}" data-category="${escape(p.category)}">
      <header class="case-heading"><p class="project-meta"><span class="project-number">${number}</span><span>${escape(p.type)}</span></p><h4 class="project-title">${escape(p.title)}</h4><p class="case-context">${escape(c.context)}</p></header>
      <div class="case-layout">${visual(p, i)}
        <div class="case-narrative"><div><h5>Purpose</h5><p>${escape(c.purpose)}</p></div><div><h5>My contribution</h5><p>${escape(c.contribution)}</p></div>${tags(p.primaryTech || p.techList.slice(0, 4), 'stack-preview')}${links(p)}</div>
      </div>
      <details class="project-details case-details"><summary>Implementation & complete project stack</summary>
        <div class="case-implementation">${c.implementation.map(item => `<div><h5>${escape(item.title)}</h5><p>${escape(item.description)}</p></div>`).join('')}</div>
        <div class="case-record"><div><h5>Project context</h5><p class="project-description">${description(p.description)}</p></div><div><h5>Project stack</h5>${completeStack(p)}</div></div>
      </details>
    </article>`;
  }
  return `<article class="project compact-project" id="project-${escape(p.id)}" data-category="${escape(p.category)}">
    ${visual(p, i)}<div class="project-content">
      <p class="project-meta"><span class="project-number">${number}</span><span>${escape(p.type)}</span></p>
      <h4 class="project-title">${escape(p.title)}</h4><p class="project-summary">${escape(p.summary)}</p>
      <p class="contribution"><span>My contribution</span>${escape(p.contribution)}</p>
      ${tags(p.primaryTech || p.techList.slice(0, 4), 'stack-preview')}
      <details class="project-details"><summary>Project context & complete stack</summary><p class="project-description">${description(p.description)}</p><h5>Project stack</h5>${completeStack(p)}</details>
      ${links(p)}
    </div>
  </article>`;
}
function group(featured, heading, id) {
  const entries = projects.map((p, i) => ({p, i})).filter(({p}) => Boolean(p.featured) === featured);
  return `<section class="work-group" aria-labelledby="${id}"><header class="work-group-heading"><h3 id="${id}">${heading}</h3><span class="work-group-count mono">${entries.length} projects</span></header><div class="${featured ? 'case-studies' : 'project-grid'}">${entries.map(({p, i}) => card(p, i)).join('\n')}</div></section>`;
}
const schema = { '@context':'https://schema.org', '@type':'ItemList', name:'Rafael Aquino — Selected Work', itemListElement:projects.map((p, i) => ({ '@type':'ListItem', position:i+1, item:{ '@type':'CreativeWork', name:p.title, description:p.summary, url:`https://chrysippus2497.github.io/#project-${p.id}`, image:`https://chrysippus2497.github.io/${p.imageSrc.replace(/^\.\//, '')}` } })) };
const generated = `<!-- PROJECTS:START -->\n${group(true, 'Featured case studies', 'featured-work-title')}\n${group(false, 'Selected projects', 'selected-projects-title')}\n<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>\n<!-- PROJECTS:END -->`;
const path = new URL('index.html', root);
const old = readFileSync(path, 'utf8');
if (!old.includes('<!-- PROJECTS:START -->')) throw new Error('Missing project generation markers');
const updated = old.replace(/<!-- PROJECTS:START -->[\s\S]*?<!-- PROJECTS:END -->/, generated);
if (process.argv.includes('--check')) {
  if (old !== updated) throw new Error('Project markup is out of date. Run node scripts/build-projects.mjs');
  console.log(`${projects.length} project entries are in sync.`);
} else {
  writeFileSync(path, updated);
  console.log(`Rendered ${projects.length} projects into ${fileURLToPath(path)}`);
}
