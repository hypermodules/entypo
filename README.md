# entypo

411 carefully crafted premium pictograms by Daniel Bruce as a module.  [entypo.com](http://www.entypo.com/) CC BY-SA 4.0.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![devDependencies Status][davidDev-img]][davidDev-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/entypo.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/entypo
[travis-image]: https://img.shields.io/travis/bcomnes/entypo.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/entypo
[davidDev-img]: https://david-dm.org/hypermodules/entypo/dev-status.svg?style=flat-square
[davidDev-url]: https://david-dm.org/hypermodules/entypo?type=dev
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

<img height="500" src="screenshot.png" />

## Install

```
npm install entypo
```

## Usage

```js
var svgSprite = require('entypo') // Spritesheet contents
console.log(svgSprite.path) // node_modules/entypo/dist/sprite.svg
console.log(svgSprite.rawPath) // node_modules/entypo/Entypo+
// Then put the contents into the page somehow
document.body.insertBefore(htmlToElement(svgSprite), document.body.firstChild)

function htmlToElement (html) {
  var template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstChild
}
```

This module packages Entypo+ as a npm installable module, and ships a sprite-sheet for convenience.  The sprite-sheet ran the original assets through [svgo](https://github.com/svg/svgo).

The JS module exports 3 things:

- The contents of the sprite sheet.  You can insert this into the page easily using the DOM api.  You will need to use something like [BRFS](https://github.com/substack/brfs) to make this function work.
- The path to the sprite sheet is also exported.  You can use this with some other kind of asset loading method.
- A path to the original Entypo+ folder with all of the untouched raw SVGs.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

Daniel Bruce, if you are reading this, send me an email if you want commit / release access.

## License

- Module: [ISC](LICENSE.md)
- Icons: CC BY-SA 4.0.
