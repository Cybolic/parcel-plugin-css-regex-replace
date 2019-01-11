# 📦🚀 parcel-plugin-css-regex-replace
A Parcel plugin to replace text in CSS files by regular expression.

## Installation

```bash
npm install parcel-plugin-css-regex-replace -s
or
yarn add parcel-plugin-css-regex-replace --dev
```

## Example

css-regex-replace.config.js
```js
module.exports = {
  regexs: [
    {
      replace: /(\/\*! normalize.css v\d[^]*)(\/\* Our styles \*\/)/m,
      with: '$2'
    }
  ]
};

```

This would remove `normalize.css` from any included file (that also contains `"/* Our styles */"`). This is useful if you're using a different reset library (or preloading `normalize.css` yourself) and want to load Tachyons or Bootstrap without modifying their CSS file manually.

## License
MIT License
