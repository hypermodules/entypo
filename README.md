# entypo

SVG sprite for the [Entypo+](http://entypo.com) icon collection.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![devDependencies Status][davidDev-img]][davidDev-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/entypo.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/entypo
[travis-image]: https://img.shields.io/travis/hypermodules/entypo.svg?style=flat-square
[travis-url]: https://travis-ci.org/hypermodules/entypo
[davidDev-img]: https://david-dm.org/hypermodules/entypo/dev-status.svg?style=flat-square
[davidDev-url]: https://david-dm.org/hypermodules/entypo?type=dev
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## About

This is a [node](https://nodejs.org) module that packages the [Entypo+](http://entypo.com) icon collection as a SVG sprite.

### What is Entypo?

__411 carefully crafted premium pictograms by [Daniel Bruce](http://www.danielbruce.se/) - [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).__

<img height="500" src="screenshot.png" />

See [entypo.com](http://entypo.com) for more information.

### What is a SVG sprite?

A SVG sprite is a hidden SVG element inserted at the top of the body element that defines a set of icons with unique IDs. These icons can later be referenced throughout the document with the [`<use>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use).

Read [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) by [Chris Coyier](http://chriscoyier.net/) for more information.

## Install

```
npm install entypo
```

## Usage

In your JavaScript:

```js
const entypo = require('entypo')

document.body.insertBefore(entypo.getNode(), document.body.firstChild)
```

In your HTML:

```html
<svg><use xlink:href="#entypo-star" /></svg>
```

In your CSS:

```css
svg {
  fill: #fff;
}
```

### API

#### `entypo()`

- [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function): returns svg sprite file contents as utf-8 text

You can insert this into the page easily using the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).  You will need to use something like [brfs](https://github.com/substack/brfs) to make this function work.

#### `entypo.getNode()`

- [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function): returns svg sprite DOM node

This a convenience function that returns the svg sprite as a [DOM Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) so that it can be inserted into the `body` element using the DOM API.

##### Example

```js
document.body.insertBefore(entypo.getNode(), document.body.firstChild)
```

#### `entypo.htmlToElement(html: string)`

- [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function): converts a string to a DOM node

This is a utility function used by `getNode()` to convert the raw SVG text provided by the main `entypo()` function into a DOM node.

#### `entypo.path`

- [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String): path to svg sprite (e.g. `node_modules/entypo/dist/sprite.svg`)


### Icon Names

#### Entypo+

Icon | Name
:--: | ----
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/add-to-list.svg"> | `entypo-add-to-list`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/add-user.svg"> | `entypo-add-user`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/address.svg"> | `entypo-address`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/adjust.svg"> | `entypo-adjust`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/air.svg"> | `entypo-air`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/aircraft-landing.svg"> | `entypo-aircraft-landing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/aircraft-take-off.svg"> | `entypo-aircraft-take-off`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/aircraft.svg"> | `entypo-aircraft`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/align-bottom.svg"> | `entypo-align-bottom`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/align-horizontal-middle.svg"> | `entypo-align-horizontal-middle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/align-left.svg"> | `entypo-align-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/align-right.svg"> | `entypo-align-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/align-top.svg"> | `entypo-align-top`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/align-vertical-middle.svg"> | `entypo-align-vertical-middle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/archive.svg"> | `entypo-archive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/area-graph.svg"> | `entypo-area-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-bold-down.svg"> | `entypo-arrow-bold-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-bold-left.svg"> | `entypo-arrow-bold-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-bold-right.svg"> | `entypo-arrow-bold-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-bold-up.svg"> | `entypo-arrow-bold-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-down.svg"> | `entypo-arrow-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-left.svg"> | `entypo-arrow-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-long-down.svg"> | `entypo-arrow-long-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-long-left.svg"> | `entypo-arrow-long-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-long-right.svg"> | `entypo-arrow-long-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-long-up.svg"> | `entypo-arrow-long-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-right.svg"> | `entypo-arrow-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-up.svg"> | `entypo-arrow-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-with-circle-down.svg"> | `entypo-arrow-with-circle-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-with-circle-left.svg"> | `entypo-arrow-with-circle-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-with-circle-right.svg"> | `entypo-arrow-with-circle-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/arrow-with-circle-up.svg"> | `entypo-arrow-with-circle-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/attachment.svg"> | `entypo-attachment`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/awareness-ribbon.svg"> | `entypo-awareness-ribbon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/back-in-time.svg"> | `entypo-back-in-time`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/back.svg"> | `entypo-back`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bar-graph.svg"> | `entypo-bar-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/battery.svg"> | `entypo-battery`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/beamed-note.svg"> | `entypo-beamed-note`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bell.svg"> | `entypo-bell`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/blackboard.svg"> | `entypo-blackboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/block.svg"> | `entypo-block`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/book.svg"> | `entypo-book`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bookmark.svg"> | `entypo-bookmark`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bookmarks.svg"> | `entypo-bookmarks`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bowl.svg"> | `entypo-bowl`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/box.svg"> | `entypo-box`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/briefcase.svg"> | `entypo-briefcase`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/browser.svg"> | `entypo-browser`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/brush.svg"> | `entypo-brush`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bucket.svg"> | `entypo-bucket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/bug.svg"> | `entypo-bug`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cake.svg"> | `entypo-cake`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/calculator.svg"> | `entypo-calculator`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/calendar.svg"> | `entypo-calendar`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/camera.svg"> | `entypo-camera`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/ccw.svg"> | `entypo-ccw`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chat.svg"> | `entypo-chat`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/check.svg"> | `entypo-check`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-down.svg"> | `entypo-chevron-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-left.svg"> | `entypo-chevron-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-right.svg"> | `entypo-chevron-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-small-down.svg"> | `entypo-chevron-small-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-small-left.svg"> | `entypo-chevron-small-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-small-right.svg"> | `entypo-chevron-small-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-small-up.svg"> | `entypo-chevron-small-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-thin-down.svg"> | `entypo-chevron-thin-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-thin-left.svg"> | `entypo-chevron-thin-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-thin-right.svg"> | `entypo-chevron-thin-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-thin-up.svg"> | `entypo-chevron-thin-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-up.svg"> | `entypo-chevron-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-with-circle-down.svg"> | `entypo-chevron-with-circle-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-with-circle-left.svg"> | `entypo-chevron-with-circle-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-with-circle-right.svg"> | `entypo-chevron-with-circle-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/chevron-with-circle-up.svg"> | `entypo-chevron-with-circle-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/circle-with-cross.svg"> | `entypo-circle-with-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/circle-with-minus.svg"> | `entypo-circle-with-minus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/circle-with-plus.svg"> | `entypo-circle-with-plus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/circle.svg"> | `entypo-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/circular-graph.svg"> | `entypo-circular-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/clapperboard.svg"> | `entypo-clapperboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/classic-computer.svg"> | `entypo-classic-computer`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/clipboard.svg"> | `entypo-clipboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/clock.svg"> | `entypo-clock`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cloud.svg"> | `entypo-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/code.svg"> | `entypo-code`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cog.svg"> | `entypo-cog`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/colours.svg"> | `entypo-colours`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/compass.svg"> | `entypo-compass`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-fast-backward.svg"> | `entypo-controller-fast-backward`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-fast-forward.svg"> | `entypo-controller-fast-forward`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-jump-to-start.svg"> | `entypo-controller-jump-to-start`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-next.svg"> | `entypo-controller-next`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-paus.svg"> | `entypo-controller-paus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-play.svg"> | `entypo-controller-play`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-record.svg"> | `entypo-controller-record`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-stop.svg"> | `entypo-controller-stop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/controller-volume.svg"> | `entypo-controller-volume`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/copy.svg"> | `entypo-copy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-attribution.svg"> | `entypo-creative-commons-attribution`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-noderivs.svg"> | `entypo-creative-commons-noderivs`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-noncommercial-eu.svg"> | `entypo-creative-commons-noncommercial-eu`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-noncommercial-us.svg"> | `entypo-creative-commons-noncommercial-us`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-public-domain.svg"> | `entypo-creative-commons-public-domain`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-remix.svg"> | `entypo-creative-commons-remix`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-share.svg"> | `entypo-creative-commons-share`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons-sharealike.svg"> | `entypo-creative-commons-sharealike`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/creative-commons.svg"> | `entypo-creative-commons`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/credit-card.svg"> | `entypo-credit-card`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/credit.svg"> | `entypo-credit`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/crop.svg"> | `entypo-crop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cross.svg"> | `entypo-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cup.svg"> | `entypo-cup`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cw.svg"> | `entypo-cw`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/cycle.svg"> | `entypo-cycle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/database.svg"> | `entypo-database`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/dial-pad.svg"> | `entypo-dial-pad`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/direction.svg"> | `entypo-direction`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/document-landscape.svg"> | `entypo-document-landscape`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/document.svg"> | `entypo-document`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/documents.svg"> | `entypo-documents`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/dot-single.svg"> | `entypo-dot-single`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/dots-three-horizontal.svg"> | `entypo-dots-three-horizontal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/dots-three-vertical.svg"> | `entypo-dots-three-vertical`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/dots-two-horizontal.svg"> | `entypo-dots-two-horizontal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/dots-two-vertical.svg"> | `entypo-dots-two-vertical`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/download.svg"> | `entypo-download`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/drink.svg"> | `entypo-drink`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/drive.svg"> | `entypo-drive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/drop.svg"> | `entypo-drop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/edit.svg"> | `entypo-edit`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/email.svg"> | `entypo-email`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/emoji-flirt.svg"> | `entypo-emoji-flirt`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/emoji-happy.svg"> | `entypo-emoji-happy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/emoji-neutral.svg"> | `entypo-emoji-neutral`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/emoji-sad.svg"> | `entypo-emoji-sad`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/erase.svg"> | `entypo-erase`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/eraser.svg"> | `entypo-eraser`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/export.svg"> | `entypo-export`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/eye-with-line.svg"> | `entypo-eye-with-line`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/eye.svg"> | `entypo-eye`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/feather.svg"> | `entypo-feather`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/fingerprint.svg"> | `entypo-fingerprint`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flag.svg"> | `entypo-flag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flash.svg"> | `entypo-flash`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flashlight.svg"> | `entypo-flashlight`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flat-brush.svg"> | `entypo-flat-brush`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flow-branch.svg"> | `entypo-flow-branch`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flow-cascade.svg"> | `entypo-flow-cascade`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flow-line.svg"> | `entypo-flow-line`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flow-parallel.svg"> | `entypo-flow-parallel`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flow-tree.svg"> | `entypo-flow-tree`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/flower.svg"> | `entypo-flower`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/folder-images.svg"> | `entypo-folder-images`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/folder-music.svg"> | `entypo-folder-music`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/folder-video.svg"> | `entypo-folder-video`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/folder.svg"> | `entypo-folder`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/forward.svg"> | `entypo-forward`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/funnel.svg"> | `entypo-funnel`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/game-controller.svg"> | `entypo-game-controller`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/gauge.svg"> | `entypo-gauge`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/globe.svg"> | `entypo-globe`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/graduation-cap.svg"> | `entypo-graduation-cap`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/grid.svg"> | `entypo-grid`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/hair-cross.svg"> | `entypo-hair-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/hand.svg"> | `entypo-hand`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/heart-outlined.svg"> | `entypo-heart-outlined`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/heart.svg"> | `entypo-heart`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/help-with-circle.svg"> | `entypo-help-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/help.svg"> | `entypo-help`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/home.svg"> | `entypo-home`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/hour-glass.svg"> | `entypo-hour-glass`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/image-inverted.svg"> | `entypo-image-inverted`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/image.svg"> | `entypo-image`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/images.svg"> | `entypo-images`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/inbox.svg"> | `entypo-inbox`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/infinity.svg"> | `entypo-infinity`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/info-with-circle.svg"> | `entypo-info-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/info.svg"> | `entypo-info`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/install.svg"> | `entypo-install`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/key.svg"> | `entypo-key`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/keyboard.svg"> | `entypo-keyboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/lab-flask.svg"> | `entypo-lab-flask`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/landline.svg"> | `entypo-landline`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/language.svg"> | `entypo-language`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/laptop.svg"> | `entypo-laptop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/layers.svg"> | `entypo-layers`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/leaf.svg"> | `entypo-leaf`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/level-down.svg"> | `entypo-level-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/level-up.svg"> | `entypo-level-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/lifebuoy.svg"> | `entypo-lifebuoy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/light-bulb.svg"> | `entypo-light-bulb`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/light-down.svg"> | `entypo-light-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/light-up.svg"> | `entypo-light-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/line-graph.svg"> | `entypo-line-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/link.svg"> | `entypo-link`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/list.svg"> | `entypo-list`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/location-pin.svg"> | `entypo-location-pin`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/location.svg"> | `entypo-location`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/lock-open.svg"> | `entypo-lock-open`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/lock.svg"> | `entypo-lock`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/log-out.svg"> | `entypo-log-out`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/login.svg"> | `entypo-login`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/loop.svg"> | `entypo-loop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/magnet.svg"> | `entypo-magnet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/magnifying-glass.svg"> | `entypo-magnifying-glass`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/mail.svg"> | `entypo-mail`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/man.svg"> | `entypo-man`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/map.svg"> | `entypo-map`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/mask.svg"> | `entypo-mask`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/medal.svg"> | `entypo-medal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/megaphone.svg"> | `entypo-megaphone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/menu.svg"> | `entypo-menu`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/merge.svg"> | `entypo-merge`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/message.svg"> | `entypo-message`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/mic.svg"> | `entypo-mic`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/minus.svg"> | `entypo-minus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/mobile.svg"> | `entypo-mobile`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/modern-mic.svg"> | `entypo-modern-mic`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/moon.svg"> | `entypo-moon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/mouse-pointer.svg"> | `entypo-mouse-pointer`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/mouse.svg"> | `entypo-mouse`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/music.svg"> | `entypo-music`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/network.svg"> | `entypo-network`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/new-message.svg"> | `entypo-new-message`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/new.svg"> | `entypo-new`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/news.svg"> | `entypo-news`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/newsletter.svg"> | `entypo-newsletter`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/note.svg"> | `entypo-note`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/notification.svg"> | `entypo-notification`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/notifications-off.svg"> | `entypo-notifications-off`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/old-mobile.svg"> | `entypo-old-mobile`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/old-phone.svg"> | `entypo-old-phone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/open-book.svg"> | `entypo-open-book`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/palette.svg"> | `entypo-palette`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/paper-plane.svg"> | `entypo-paper-plane`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/pencil.svg"> | `entypo-pencil`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/phone.svg"> | `entypo-phone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/pie-chart.svg"> | `entypo-pie-chart`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/pin.svg"> | `entypo-pin`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/plus.svg"> | `entypo-plus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/popup.svg"> | `entypo-popup`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/power-plug.svg"> | `entypo-power-plug`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/price-ribbon.svg"> | `entypo-price-ribbon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/price-tag.svg"> | `entypo-price-tag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/print.svg"> | `entypo-print`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/progress-empty.svg"> | `entypo-progress-empty`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/progress-full.svg"> | `entypo-progress-full`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/progress-one.svg"> | `entypo-progress-one`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/progress-two.svg"> | `entypo-progress-two`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/publish.svg"> | `entypo-publish`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/quote.svg"> | `entypo-quote`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/radio.svg"> | `entypo-radio`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/remove-user.svg"> | `entypo-remove-user`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/reply-all.svg"> | `entypo-reply-all`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/reply.svg"> | `entypo-reply`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/resize-100%25.svg"> | `entypo-resize-100%`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/resize-full-screen.svg"> | `entypo-resize-full-screen`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/retweet.svg"> | `entypo-retweet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/rocket.svg"> | `entypo-rocket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/round-brush.svg"> | `entypo-round-brush`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/rss.svg"> | `entypo-rss`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/ruler.svg"> | `entypo-ruler`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/save.svg"> | `entypo-save`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/scissors.svg"> | `entypo-scissors`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/select-arrows.svg"> | `entypo-select-arrows`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/share-alternative.svg"> | `entypo-share-alternative`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/share.svg"> | `entypo-share`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shareable.svg"> | `entypo-shareable`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shield.svg"> | `entypo-shield`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shop.svg"> | `entypo-shop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shopping-bag.svg"> | `entypo-shopping-bag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shopping-basket.svg"> | `entypo-shopping-basket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shopping-cart.svg"> | `entypo-shopping-cart`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/shuffle.svg"> | `entypo-shuffle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/signal.svg"> | `entypo-signal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/sound-mix.svg"> | `entypo-sound-mix`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/sound-mute.svg"> | `entypo-sound-mute`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/sound.svg"> | `entypo-sound`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/sports-club.svg"> | `entypo-sports-club`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/spreadsheet.svg"> | `entypo-spreadsheet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/squared-cross.svg"> | `entypo-squared-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/squared-minus.svg"> | `entypo-squared-minus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/squared-plus.svg"> | `entypo-squared-plus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/star-outlined.svg"> | `entypo-star-outlined`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/star.svg"> | `entypo-star`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/stopwatch.svg"> | `entypo-stopwatch`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/suitcase.svg"> | `entypo-suitcase`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/swap.svg"> | `entypo-swap`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/sweden.svg"> | `entypo-sweden`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/switch.svg"> | `entypo-switch`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/tablet-mobile-combo.svg"> | `entypo-tablet-mobile-combo`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/tablet.svg"> | `entypo-tablet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/tag.svg"> | `entypo-tag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/text-document-inverted.svg"> | `entypo-text-document-inverted`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/text-document.svg"> | `entypo-text-document`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/text.svg"> | `entypo-text`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/thermometer.svg"> | `entypo-thermometer`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/thumbs-down.svg"> | `entypo-thumbs-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/thumbs-up.svg">"> | `entypo-thumbs-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/thunder-cloud.svg"> | `entypo-thunder-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/ticket.svg"> | `entypo-ticket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/time-slot.svg"> | `entypo-time-slot`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/tools.svg"> | `entypo-tools`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/traffic-cone.svg"> | `entypo-traffic-cone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/trash.svg"> | `entypo-trash`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/tree.svg"> | `entypo-tree`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/triangle-down.svg"> | `entypo-triangle-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/triangle-left.svg"> | `entypo-triangle-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/triangle-right.svg"> | `entypo-triangle-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/triangle-up.svg"> | `entypo-triangle-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/trophy.svg"> | `entypo-trophy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/tv.svg"> | `entypo-tv`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/typing.svg"> | `entypo-typing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/uninstall.svg"> | `entypo-uninstall`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/unread.svg"> | `entypo-unread`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/untag.svg"> | `entypo-untag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/upload-to-cloud.svg"> | `entypo-upload-to-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/upload.svg"> | `entypo-upload`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/user.svg"> | `entypo-user`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/users.svg"> | `entypo-users`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/v-card.svg"> | `entypo-v-card`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/video-camera.svg"> | `entypo-video-camera`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/video.svg"> | `entypo-video`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/vinyl.svg"> | `entypo-vinyl`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/voicemail.svg"> | `entypo-voicemail`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/wallet.svg"> | `entypo-wallet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/warning.svg"> | `entypo-warning`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B/water.svg"> | `entypo-water`

#### Entypo+ Social Extension


Icon | Name
---- | ----
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/500px-with-circle.svg"> | `entypo-500px-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/500px.svg"> | `entypo-500px`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/app-store.svg"> | `entypo-app-store`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/baidu.svg"> | `entypo-baidu`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/basecamp.svg"> | `entypo-basecamp`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/behance.svg"> | `entypo-behance`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/creative-cloud.svg"> | `entypo-creative-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/dribbble-with-circle.svg"> | `entypo-dribbble-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/dribbble.svg"> | `entypo-dribbble`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/dropbox.svg"> | `entypo-dropbox`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/evernote.svg"> | `entypo-evernote`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/facebook-with-circle.svg"> | `entypo-facebook-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/facebook.svg"> | `entypo-facebook`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/flattr.svg"> | `entypo-flattr`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/flickr-with-circle.svg"> | `entypo-flickr-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/flickr.svg"> | `entypo-flickr`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/foursquare.svg"> | `entypo-foursquare`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/github-with-circle.svg"> | `entypo-github-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/github.svg"> | `entypo-github`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/google+-with-circle.svg"> | `entypo-google+-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/google+.svg"> | `entypo-google+`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/google-drive.svg"> | `entypo-google-drive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/google-hangouts.svg"> | `entypo-google-hangouts`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/google-play.svg"> | `entypo-google-play`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/grooveshark.svg"> | `entypo-grooveshark`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/houzz.svg"> | `entypo-houzz`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/icloud.svg"> | `entypo-icloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/instagram-with-circle.svg"> | `entypo-instagram-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/instagram.svg"> | `entypo-instagram`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/lastfm-with-circle.svg"> | `entypo-lastfm-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/lastfm.svg"> | `entypo-lastfm`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/linkedin-with-circle.svg"> | `entypo-linkedin-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/linkedin.svg"> | `entypo-linkedin`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/mail-with-circle.svg"> | `entypo-mail-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/medium-with-circle.svg"> | `entypo-medium-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/medium.svg"> | `entypo-medium`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/mixi.svg"> | `entypo-mixi`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/onedrive.svg"> | `entypo-onedrive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/paypal.svg"> | `entypo-paypal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/picasa.svg"> | `entypo-picasa`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/pinterest-with-circle.svg"> | `entypo-pinterest-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/pinterest.svg"> | `entypo-pinterest`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/qq-with-circle.svg"> | `entypo-qq-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/qq.svg"> | `entypo-qq`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/raft-with-circle.svg"> | `entypo-raft-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/raft.svg"> | `entypo-raft`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/rainbow.svg"> | `entypo-rainbow`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/rdio-with-circle.svg"> | `entypo-rdio-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/rdio.svg"> | `entypo-rdio`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/renren.svg"> | `entypo-renren`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/scribd.svg"> | `entypo-scribd`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/sina-weibo.svg"> | `entypo-sina-weibo`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/skype-with-circle.svg"> | `entypo-skype-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/skype.svg"> | `entypo-skype`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/slideshare.svg"> | `entypo-slideshare`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/smashing.svg"> | `entypo-smashing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/soundcloud.svg"> | `entypo-soundcloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/spotify-with-circle.svg"> | `entypo-spotify-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/spotify.svg"> | `entypo-spotify`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/stumbleupon-with-circle.svg"> | `entypo-stumbleupon-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/stumbleupon.svg"> | `entypo-stumbleupon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/swarm.svg"> | `entypo-swarm`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/tripadvisor.svg"> | `entypo-tripadvisor`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/tumblr-with-circle.svg"> | `entypo-tumblr-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/tumblr.svg"> | `entypo-tumblr`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/twitter-with-circle.svg"> | `entypo-twitter-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/twitter.svg"> | `entypo-twitter`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vimeo-with-circle.svg"> | `entypo-vimeo-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vimeo.svg"> | `entypo-vimeo`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vine-with-circle.svg"> | `entypo-vine-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vine.svg"> | `entypo-vine`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vk-alternitive.svg"> | `entypo-vk-alternitive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vk-with-circle.svg"> | `entypo-vk-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/vk.svg"> | `entypo-vk`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/windows-store.svg"> | `entypo-windows-store`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/xing-with-circle.svg"> | `entypo-xing-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/xing.svg"> | `entypo-xing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/yelp.svg"> | `entypo-yelp`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/youko-with-circle.svg"> | `entypo-youko-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/youko.svg"> | `entypo-youko`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/youtube-with-circle.svg"> | `entypo-youtube-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/Entypo%2B/Entypo%2B%20Social%20Extension/youtube.svg"> | `entypo-youtube`

## Example

To see an example implementation, try `npm run example`. Source code is in [`example.js`](example.js).

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

Daniel Bruce, if you are reading this, send me an email if you want commit / release access.

## License

- Module: [ISC](LICENSE.md)
- Icons: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
