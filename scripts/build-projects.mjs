/** Regenerate search-readable project markup from the single source of truth. No dependencies. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const projects = JSON.parse(readFileSync(new URL('projects.json', root), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const description = value => value.split(/<br\s*\/?\s*>/i).map(escape).join('<br>');
const cards = projects.map((p, i) => {
  const sourceLabel = /^https:\/\/github\.com\/[^/]+\/?$/.test(p.githubLink) ? 'GitHub profile' : 'Repository link';
  return `      <article class="project${p.featured ? ' featured' : ''}" id="project-${escape(p.id)}" data-category="${escape(p.category)}">
        <a class="project-visual" href="${escape(p.imageSrc)}" data-title="${escape(p.title)}" aria-label="View screenshot of ${escape(p.title)}">
          <picture><source type="image/webp" srcset="${escape(p.imageSmall)} 640w, ${escape(p.imageWebp)} ${Math.min(p.width,1280)}w" sizes="(max-width: 460px) 85vw, (max-width: 760px) ${p.featured ? '85vw' : '40vw'}, 550px"><img src="${escape(p.imageSrc)}" alt="${escape(p.title)} — ${escape(p.summary)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async"></picture>
          <span class="image-caption"><span>${p.featured ? 'UP DILIMAN / COLLEGE OF SCIENCE' : 'PROJECT / '+String(i+1).padStart(2,'0')}</span><span>View screenshot ↗</span></span>
        </a>
        <div class="project-content">
          <p class="project-meta"><span class="project-number">${String(i+1).padStart(2,'0')}</span><span>${escape(p.type)}</span></p>
          <h3>${escape(p.title)}</h3>
          <p class="project-summary">${escape(p.summary)}</p>
          <p class="contribution"><span>My contribution</span>${escape(p.contribution)}</p>
          <details class="project-details"><summary>Project details & technology</summary>
            <p class="project-description">${description(p.description)}</p>
            <h4>Project stack</h4><ul class="tech-list">${p.techList.map(tech => `<li>${escape(tech)}</li>`).join('')}</ul>
          </details>
          <div class="project-links"><a href="${escape(p.externalLink)}" target="_blank" rel="noopener noreferrer" aria-label="Visit the original ${escape(p.title)} website (opens in a new tab)">Original website <span aria-hidden="true">↗</span></a><a href="${escape(p.githubLink)}" target="_blank" rel="noopener noreferrer" aria-label="${sourceLabel} for ${escape(p.title)} (opens in a new tab)">${sourceLabel} <span aria-hidden="true">↗</span></a></div>
        </div>
      </article>`;
}).join('\n');
const schema = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Rafael Aquino — Selected Work', itemListElement: projects.map((p, i) => ({ '@type':'ListItem', position:i+1, item:{'@type':'CreativeWork', name:p.title, description:p.summary, url:`https://chrysippus2497.github.io/#project-${p.id}`, image:`https://chrysippus2497.github.io/${p.imageSrc.replace(/^\.\//,'')}`}})) };
const generated = `<!-- PROJECTS:START -->\n${cards}\n<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>\n<!-- PROJECTS:END -->`;
const path = new URL('index.html', root);
const old = readFileSync(path, 'utf8');
const updated = old.replace(/<!-- PROJECTS:START -->[\s\S]*?<!-- PROJECTS:END -->/, generated);
if (process.argv.includes('--check')) {
  if (old !== updated) throw new Error('Project markup is out of date. Run node scripts/build-projects.mjs');
  console.log(`${projects.length} project entries are in sync.`);
} else {
  writeFileSync(path, updated);
  console.log(`Rendered ${projects.length} projects into ${fileURLToPath(path)}`);
}
