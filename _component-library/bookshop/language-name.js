/**
 * `{{ "es" | languageName }}` -> "Español"
 *
 * A locale's name written in that language itself (its endonym), for language
 * pickers: a visitor looking for their language recognises "Deutsch" or "日本語",
 * not "German" or "Japanese" rendered in whatever language the page is in.
 *
 * Names come from the runtime's CLDR data via `Intl.DisplayNames`, so any code
 * Rosey accepts works without a lookup table to maintain. The first letter is
 * upper-cased the way the language itself would ("español" -> "Español"), which
 * is a no-op for scripts without case. An unknown or malformed code falls back
 * to the code itself rather than failing the render.
 *
 * Registered in both engines — `.eleventy.js` for the build and
 * `bookshop.config.cjs` for Bookshop's live editor — so a component renders the
 * same names in each. Node and browsers both ship `Intl.DisplayNames`.
 */
function languageName(code) {
  const locale = code === null || code === undefined ? "" : String(code).trim();
  if (!locale) {
    return "";
  }
  try {
    const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
    if (!name) {
      return locale;
    }
    // Spread rather than charAt(0), so a first character outside the BMP stays whole.
    const [first, ...rest] = name;
    return first.toLocaleUpperCase(locale) + rest.join("");
  } catch (error) {
    return locale;
  }
}

module.exports = function () {
  this.registerFilter("languageName", languageName);
};
module.exports.languageName = languageName;
