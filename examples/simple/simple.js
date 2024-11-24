// Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Engage.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
  styleTag.innerHTML = compiledCSS;
}
// End Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.

insertHTMLBefore(
  'body > div > div > div > div > main > div > div > div.hero.astro-jbfsktt5 > div > div.sl-flex.copy.astro-jbfsktt5',
  'pers-'
);

