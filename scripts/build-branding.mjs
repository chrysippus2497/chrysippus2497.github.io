/** Offset monogram traced from the owner's approved reference; no font glyphs. */
import {readFileSync,writeFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const r='M0 6H276C421 6 421 229 276 229H230L401 383H291L117 227H72V383H0Z M65 79V169H272C332 169 332 79 278 79Z';
const a='M393 191 521 0 743 384H640L517 137 479 191Z';
const connector='M382 206H469L411 293H324Z';
const fragment='M350 308H402L465 384H423Z';
const paths=`<path fill="currentColor" fill-rule="evenodd" d="${r}"/><path fill="currentColor" d="${a}"/><path class="offset-connector" fill="var(--brand-accent,#b65f3f)" d="${connector}"/><path fill="currentColor" d="${fragment}"/>`;
const theme='<style>:root{color:#292b28;--brand-accent:#b65f3f}@media(prefers-color-scheme:dark){:root{color:#eeeae2}}</style>';
const symbol=(className,width=76,height=40)=>`<svg class="${className}" width="${width}" height="${height}" viewBox="0 0 744 384" aria-hidden="true" focusable="false">${paths}</svg>`;
const full=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744 384" role="img" aria-label="Rafael Aquino Offset monogram">${theme}${paths}</svg>`;
// Optical small-size master: larger R counter and stem, wider connector gaps,
// and no separate lower fragment to avoid a muddy extra pixel at 16px.
const smallR='M0 6H276C421 6 421 229 276 229H225L391 383H279L111 227H82V383H0Z M72 70V178H269C343 178 343 70 277 70Z';
const small=`<path fill="currentColor" fill-rule="evenodd" d="${smallR}"/><path fill="currentColor" d="${a}"/><path fill="var(--brand-accent,#b65f3f)" d="M388 213H466L412 294H333Z"/>`;
const favicon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${theme}<g transform="translate(2 16.5) scale(.08065)">${small}</g></svg>`;
const touch=`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" style="color:#292b28;--brand-accent:#b65f3f"><path fill="#f4f1e9" d="M0 0H180V180H0Z"/><g transform="translate(18 53) scale(.19355)">${paths}</g></svg>`;
const fallback=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" style="color:#292b28;--brand-accent:#b65f3f"><rect width="64" height="64" rx="6" fill="#f4f1e9"/><g transform="translate(3 17) scale(.078)">${small}</g></svg>`;
const outputs={'images/brand/ra-offset.svg':full,'images/brand/favicon.svg':favicon,'images/brand/apple-touch-source.svg':touch,'images/brand/favicon-fallback-source.svg':fallback};
const path=new URL('index.html',root);let html=readFileSync(path,'utf8');
html=html.replace(/<a class="brand"[\s\S]*?<\/a>/,`<a class="brand" href="#home" aria-label="Rafael Aquino — Home" title="Rafael Aquino — Home">${symbol('brand-monogram')}</a>`);
html=html.replace(/<div class="footer-identity">[\s\S]*?<\/div>/,`<div class="footer-identity"><a class="footer-brand" href="#home" aria-label="Rafael Aquino — Home">${symbol('footer-monogram',62,32)}<span class="footer-wordmark">Rafael Aquino</span></a><span>Network, Systems &amp; Software</span></div>`);
outputs['index.html']=html;
for(const [file,content] of Object.entries(outputs)){const target=new URL(file,root);if(process.argv.includes('--check')){if(readFileSync(target,'utf8')!==content)throw new Error(`Branding out of sync: ${file}`);}else writeFileSync(target,content);}
console.log('Offset SVG masters and header/footer branding '+(process.argv.includes('--check')?'verified.':'generated.'));
