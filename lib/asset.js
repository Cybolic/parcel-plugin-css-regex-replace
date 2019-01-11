const CSSAsset = require('parcel-bundler/src/assets/CSSAsset');

class RegexReplaceCSSPackager extends CSSAsset {
  constructor (filename, options) {
    super(filename, options);
    try {
      this.config = require(`${process.cwd()}/css-regex-replace.config.js`);
    } catch (err) {
      this.config = { regexs: [] };
    }
  }
  
  replaceRegExs (css_string) {
    for (const regex of this.config.regexs) {
      css_string = css_string.replace(regex.replace, regex.with);
    }
    return css_string;
  }

  parse (code) {
    const code_replaced = this.replaceRegExs(code);
    return super.parse(code_replaced);
  }
}

module.exports = RegexReplaceCSSPackager;
