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

You can insert this into the page easily using the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).  This works by specifying [brfs](https://github.com/substack/brfs) in the [browserify transform field](https://github.com/browserify/browserify-handbook#browserifytransform-field).  You may need a special fs loader in webpack if its not picking up the transform.

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
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/add-to-list.svg"> | `entypo-add-to-list`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/add-user.svg"> | `entypo-add-user`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/address.svg"> | `entypo-address`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/adjust.svg"> | `entypo-adjust`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/air.svg"> | `entypo-air`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/aircraft-landing.svg"> | `entypo-aircraft-landing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/aircraft-take-off.svg"> | `entypo-aircraft-take-off`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/aircraft.svg"> | `entypo-aircraft`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/align-bottom.svg"> | `entypo-align-bottom`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/align-horizontal-middle.svg"> | `entypo-align-horizontal-middle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/align-left.svg"> | `entypo-align-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/align-right.svg"> | `entypo-align-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/align-top.svg"> | `entypo-align-top`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/align-vertical-middle.svg"> | `entypo-align-vertical-middle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/archive.svg"> | `entypo-archive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/area-graph.svg"> | `entypo-area-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-bold-down.svg"> | `entypo-arrow-bold-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-bold-left.svg"> | `entypo-arrow-bold-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-bold-right.svg"> | `entypo-arrow-bold-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-bold-up.svg"> | `entypo-arrow-bold-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-down.svg"> | `entypo-arrow-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-left.svg"> | `entypo-arrow-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-long-down.svg"> | `entypo-arrow-long-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-long-left.svg"> | `entypo-arrow-long-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-long-right.svg"> | `entypo-arrow-long-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-long-up.svg"> | `entypo-arrow-long-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-right.svg"> | `entypo-arrow-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-up.svg"> | `entypo-arrow-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-with-circle-down.svg"> | `entypo-arrow-with-circle-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-with-circle-left.svg"> | `entypo-arrow-with-circle-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-with-circle-right.svg"> | `entypo-arrow-with-circle-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/arrow-with-circle-up.svg"> | `entypo-arrow-with-circle-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/attachment.svg"> | `entypo-attachment`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/awareness-ribbon.svg"> | `entypo-awareness-ribbon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/back-in-time.svg"> | `entypo-back-in-time`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/back.svg"> | `entypo-back`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bar-graph.svg"> | `entypo-bar-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/battery.svg"> | `entypo-battery`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/beamed-note.svg"> | `entypo-beamed-note`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bell.svg"> | `entypo-bell`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/blackboard.svg"> | `entypo-blackboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/block.svg"> | `entypo-block`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/book.svg"> | `entypo-book`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bookmark.svg"> | `entypo-bookmark`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bookmarks.svg"> | `entypo-bookmarks`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bowl.svg"> | `entypo-bowl`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/box.svg"> | `entypo-box`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/briefcase.svg"> | `entypo-briefcase`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/browser.svg"> | `entypo-browser`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/brush.svg"> | `entypo-brush`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bucket.svg"> | `entypo-bucket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/bug.svg"> | `entypo-bug`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cake.svg"> | `entypo-cake`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/calculator.svg"> | `entypo-calculator`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/calendar.svg"> | `entypo-calendar`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/camera.svg"> | `entypo-camera`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/ccw.svg"> | `entypo-ccw`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chat.svg"> | `entypo-chat`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/check.svg"> | `entypo-check`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-down.svg"> | `entypo-chevron-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-left.svg"> | `entypo-chevron-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-right.svg"> | `entypo-chevron-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-small-down.svg"> | `entypo-chevron-small-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-small-left.svg"> | `entypo-chevron-small-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-small-right.svg"> | `entypo-chevron-small-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-small-up.svg"> | `entypo-chevron-small-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-thin-down.svg"> | `entypo-chevron-thin-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-thin-left.svg"> | `entypo-chevron-thin-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-thin-right.svg"> | `entypo-chevron-thin-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-thin-up.svg"> | `entypo-chevron-thin-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-up.svg"> | `entypo-chevron-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-with-circle-down.svg"> | `entypo-chevron-with-circle-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-with-circle-left.svg"> | `entypo-chevron-with-circle-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-with-circle-right.svg"> | `entypo-chevron-with-circle-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/chevron-with-circle-up.svg"> | `entypo-chevron-with-circle-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/circle-with-cross.svg"> | `entypo-circle-with-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/circle-with-minus.svg"> | `entypo-circle-with-minus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/circle-with-plus.svg"> | `entypo-circle-with-plus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/circle.svg"> | `entypo-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/circular-graph.svg"> | `entypo-circular-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/clapperboard.svg"> | `entypo-clapperboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/classic-computer.svg"> | `entypo-classic-computer`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/clipboard.svg"> | `entypo-clipboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/clock.svg"> | `entypo-clock`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cloud.svg"> | `entypo-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/code.svg"> | `entypo-code`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cog.svg"> | `entypo-cog`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/colours.svg"> | `entypo-colours`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/compass.svg"> | `entypo-compass`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-fast-backward.svg"> | `entypo-controller-fast-backward`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-fast-forward.svg"> | `entypo-controller-fast-forward`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-jump-to-start.svg"> | `entypo-controller-jump-to-start`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-next.svg"> | `entypo-controller-next`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-paus.svg"> | `entypo-controller-paus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-play.svg"> | `entypo-controller-play`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-record.svg"> | `entypo-controller-record`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-stop.svg"> | `entypo-controller-stop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/controller-volume.svg"> | `entypo-controller-volume`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/copy.svg"> | `entypo-copy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-attribution.svg"> | `entypo-creative-commons-attribution`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-noderivs.svg"> | `entypo-creative-commons-noderivs`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-noncommercial-eu.svg"> | `entypo-creative-commons-noncommercial-eu`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-noncommercial-us.svg"> | `entypo-creative-commons-noncommercial-us`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-public-domain.svg"> | `entypo-creative-commons-public-domain`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-remix.svg"> | `entypo-creative-commons-remix`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-share.svg"> | `entypo-creative-commons-share`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons-sharealike.svg"> | `entypo-creative-commons-sharealike`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/creative-commons.svg"> | `entypo-creative-commons`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/credit-card.svg"> | `entypo-credit-card`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/credit.svg"> | `entypo-credit`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/crop.svg"> | `entypo-crop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cross.svg"> | `entypo-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cup.svg"> | `entypo-cup`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cw.svg"> | `entypo-cw`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/cycle.svg"> | `entypo-cycle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/database.svg"> | `entypo-database`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/dial-pad.svg"> | `entypo-dial-pad`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/direction.svg"> | `entypo-direction`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/document-landscape.svg"> | `entypo-document-landscape`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/document.svg"> | `entypo-document`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/documents.svg"> | `entypo-documents`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/dot-single.svg"> | `entypo-dot-single`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/dots-three-horizontal.svg"> | `entypo-dots-three-horizontal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/dots-three-vertical.svg"> | `entypo-dots-three-vertical`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/dots-two-horizontal.svg"> | `entypo-dots-two-horizontal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/dots-two-vertical.svg"> | `entypo-dots-two-vertical`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/download.svg"> | `entypo-download`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/drink.svg"> | `entypo-drink`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/drive.svg"> | `entypo-drive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/drop.svg"> | `entypo-drop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/edit.svg"> | `entypo-edit`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/email.svg"> | `entypo-email`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/emoji-flirt.svg"> | `entypo-emoji-flirt`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/emoji-happy.svg"> | `entypo-emoji-happy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/emoji-neutral.svg"> | `entypo-emoji-neutral`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/emoji-sad.svg"> | `entypo-emoji-sad`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/erase.svg"> | `entypo-erase`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/eraser.svg"> | `entypo-eraser`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/export.svg"> | `entypo-export`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/eye-with-line.svg"> | `entypo-eye-with-line`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/eye.svg"> | `entypo-eye`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/feather.svg"> | `entypo-feather`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/fingerprint.svg"> | `entypo-fingerprint`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flag.svg"> | `entypo-flag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flash.svg"> | `entypo-flash`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flashlight.svg"> | `entypo-flashlight`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flat-brush.svg"> | `entypo-flat-brush`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flow-branch.svg"> | `entypo-flow-branch`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flow-cascade.svg"> | `entypo-flow-cascade`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flow-line.svg"> | `entypo-flow-line`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flow-parallel.svg"> | `entypo-flow-parallel`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flow-tree.svg"> | `entypo-flow-tree`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/flower.svg"> | `entypo-flower`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/folder-images.svg"> | `entypo-folder-images`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/folder-music.svg"> | `entypo-folder-music`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/folder-video.svg"> | `entypo-folder-video`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/folder.svg"> | `entypo-folder`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/forward.svg"> | `entypo-forward`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/funnel.svg"> | `entypo-funnel`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/game-controller.svg"> | `entypo-game-controller`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/gauge.svg"> | `entypo-gauge`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/globe.svg"> | `entypo-globe`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/graduation-cap.svg"> | `entypo-graduation-cap`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/grid.svg"> | `entypo-grid`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/hair-cross.svg"> | `entypo-hair-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/hand.svg"> | `entypo-hand`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/heart-outlined.svg"> | `entypo-heart-outlined`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/heart.svg"> | `entypo-heart`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/help-with-circle.svg"> | `entypo-help-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/help.svg"> | `entypo-help`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/home.svg"> | `entypo-home`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/hour-glass.svg"> | `entypo-hour-glass`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/image-inverted.svg"> | `entypo-image-inverted`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/image.svg"> | `entypo-image`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/images.svg"> | `entypo-images`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/inbox.svg"> | `entypo-inbox`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/infinity.svg"> | `entypo-infinity`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/info-with-circle.svg"> | `entypo-info-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/info.svg"> | `entypo-info`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/install.svg"> | `entypo-install`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/key.svg"> | `entypo-key`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/keyboard.svg"> | `entypo-keyboard`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/lab-flask.svg"> | `entypo-lab-flask`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/landline.svg"> | `entypo-landline`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/language.svg"> | `entypo-language`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/laptop.svg"> | `entypo-laptop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/layers.svg"> | `entypo-layers`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/leaf.svg"> | `entypo-leaf`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/level-down.svg"> | `entypo-level-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/level-up.svg"> | `entypo-level-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/lifebuoy.svg"> | `entypo-lifebuoy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/light-bulb.svg"> | `entypo-light-bulb`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/light-down.svg"> | `entypo-light-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/light-up.svg"> | `entypo-light-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/line-graph.svg"> | `entypo-line-graph`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/link.svg"> | `entypo-link`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/list.svg"> | `entypo-list`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/location-pin.svg"> | `entypo-location-pin`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/location.svg"> | `entypo-location`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/lock-open.svg"> | `entypo-lock-open`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/lock.svg"> | `entypo-lock`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/log-out.svg"> | `entypo-log-out`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/login.svg"> | `entypo-login`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/loop.svg"> | `entypo-loop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/magnet.svg"> | `entypo-magnet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/magnifying-glass.svg"> | `entypo-magnifying-glass`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/mail.svg"> | `entypo-mail`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/man.svg"> | `entypo-man`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/map.svg"> | `entypo-map`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/mask.svg"> | `entypo-mask`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/medal.svg"> | `entypo-medal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/megaphone.svg"> | `entypo-megaphone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/menu.svg"> | `entypo-menu`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/merge.svg"> | `entypo-merge`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/message.svg"> | `entypo-message`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/mic.svg"> | `entypo-mic`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/minus.svg"> | `entypo-minus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/mobile.svg"> | `entypo-mobile`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/modern-mic.svg"> | `entypo-modern-mic`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/moon.svg"> | `entypo-moon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/mouse-pointer.svg"> | `entypo-mouse-pointer`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/mouse.svg"> | `entypo-mouse`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/music.svg"> | `entypo-music`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/network.svg"> | `entypo-network`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/new-message.svg"> | `entypo-new-message`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/new.svg"> | `entypo-new`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/news.svg"> | `entypo-news`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/newsletter.svg"> | `entypo-newsletter`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/note.svg"> | `entypo-note`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/notification.svg"> | `entypo-notification`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/notifications-off.svg"> | `entypo-notifications-off`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/old-mobile.svg"> | `entypo-old-mobile`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/old-phone.svg"> | `entypo-old-phone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/open-book.svg"> | `entypo-open-book`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/palette.svg"> | `entypo-palette`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/paper-plane.svg"> | `entypo-paper-plane`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/pencil.svg"> | `entypo-pencil`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/phone.svg"> | `entypo-phone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/pie-chart.svg"> | `entypo-pie-chart`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/pin.svg"> | `entypo-pin`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/plus.svg"> | `entypo-plus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/popup.svg"> | `entypo-popup`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/power-plug.svg"> | `entypo-power-plug`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/price-ribbon.svg"> | `entypo-price-ribbon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/price-tag.svg"> | `entypo-price-tag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/print.svg"> | `entypo-print`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/progress-empty.svg"> | `entypo-progress-empty`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/progress-full.svg"> | `entypo-progress-full`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/progress-one.svg"> | `entypo-progress-one`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/progress-two.svg"> | `entypo-progress-two`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/publish.svg"> | `entypo-publish`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/quote.svg"> | `entypo-quote`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/radio.svg"> | `entypo-radio`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/remove-user.svg"> | `entypo-remove-user`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/reply-all.svg"> | `entypo-reply-all`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/reply.svg"> | `entypo-reply`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/resize-100%25.svg"> | `entypo-resize-100%`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/resize-full-screen.svg"> | `entypo-resize-full-screen`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/retweet.svg"> | `entypo-retweet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/rocket.svg"> | `entypo-rocket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/round-brush.svg"> | `entypo-round-brush`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/rss.svg"> | `entypo-rss`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/ruler.svg"> | `entypo-ruler`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/save.svg"> | `entypo-save`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/scissors.svg"> | `entypo-scissors`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/select-arrows.svg"> | `entypo-select-arrows`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/share-alternative.svg"> | `entypo-share-alternative`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/share.svg"> | `entypo-share`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shareable.svg"> | `entypo-shareable`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shield.svg"> | `entypo-shield`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shop.svg"> | `entypo-shop`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shopping-bag.svg"> | `entypo-shopping-bag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shopping-basket.svg"> | `entypo-shopping-basket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shopping-cart.svg"> | `entypo-shopping-cart`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/shuffle.svg"> | `entypo-shuffle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/signal.svg"> | `entypo-signal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/sound-mix.svg"> | `entypo-sound-mix`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/sound-mute.svg"> | `entypo-sound-mute`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/sound.svg"> | `entypo-sound`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/sports-club.svg"> | `entypo-sports-club`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/spreadsheet.svg"> | `entypo-spreadsheet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/squared-cross.svg"> | `entypo-squared-cross`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/squared-minus.svg"> | `entypo-squared-minus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/squared-plus.svg"> | `entypo-squared-plus`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/star-outlined.svg"> | `entypo-star-outlined`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/star.svg"> | `entypo-star`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/stopwatch.svg"> | `entypo-stopwatch`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/suitcase.svg"> | `entypo-suitcase`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/swap.svg"> | `entypo-swap`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/sweden.svg"> | `entypo-sweden`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/switch.svg"> | `entypo-switch`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/tablet-mobile-combo.svg"> | `entypo-tablet-mobile-combo`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/tablet.svg"> | `entypo-tablet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/tag.svg"> | `entypo-tag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/text-document-inverted.svg"> | `entypo-text-document-inverted`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/text-document.svg"> | `entypo-text-document`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/text.svg"> | `entypo-text`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/thermometer.svg"> | `entypo-thermometer`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/thumbs-down.svg"> | `entypo-thumbs-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/thumbs-up.svg">"> | `entypo-thumbs-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/thunder-cloud.svg"> | `entypo-thunder-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/ticket.svg"> | `entypo-ticket`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/time-slot.svg"> | `entypo-time-slot`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/tools.svg"> | `entypo-tools`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/traffic-cone.svg"> | `entypo-traffic-cone`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/trash.svg"> | `entypo-trash`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/tree.svg"> | `entypo-tree`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/triangle-down.svg"> | `entypo-triangle-down`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/triangle-left.svg"> | `entypo-triangle-left`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/triangle-right.svg"> | `entypo-triangle-right`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/triangle-up.svg"> | `entypo-triangle-up`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/trophy.svg"> | `entypo-trophy`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/tv.svg"> | `entypo-tv`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/typing.svg"> | `entypo-typing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/uninstall.svg"> | `entypo-uninstall`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/unread.svg"> | `entypo-unread`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/untag.svg"> | `entypo-untag`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/upload-to-cloud.svg"> | `entypo-upload-to-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/upload.svg"> | `entypo-upload`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/user.svg"> | `entypo-user`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/users.svg"> | `entypo-users`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/v-card.svg"> | `entypo-v-card`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/video-camera.svg"> | `entypo-video-camera`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/video.svg"> | `entypo-video`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/vinyl.svg"> | `entypo-vinyl`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/voicemail.svg"> | `entypo-voicemail`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/wallet.svg"> | `entypo-wallet`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/warning.svg"> | `entypo-warning`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo/water.svg"> | `entypo-water`

#### Entypo+ Social Extension


Icon | Name
---- | ----
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/500px-with-circle.svg"> | `entypo-500px-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/500px.svg"> | `entypo-500px`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/app-store.svg"> | `entypo-app-store`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/baidu.svg"> | `entypo-baidu`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/basecamp.svg"> | `entypo-basecamp`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/behance.svg"> | `entypo-behance`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/creative-cloud.svg"> | `entypo-creative-cloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/dribbble-with-circle.svg"> | `entypo-dribbble-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/dribbble.svg"> | `entypo-dribbble`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/dropbox.svg"> | `entypo-dropbox`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/evernote.svg"> | `entypo-evernote`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/facebook-with-circle.svg"> | `entypo-facebook-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/facebook.svg"> | `entypo-facebook`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/flattr.svg"> | `entypo-flattr`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/flickr-with-circle.svg"> | `entypo-flickr-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/flickr.svg"> | `entypo-flickr`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/foursquare.svg"> | `entypo-foursquare`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/github-with-circle.svg"> | `entypo-github-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/github.svg"> | `entypo-github`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/google+-with-circle.svg"> | `entypo-google+-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/google+.svg"> | `entypo-google+`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/google-drive.svg"> | `entypo-google-drive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/google-hangouts.svg"> | `entypo-google-hangouts`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/google-play.svg"> | `entypo-google-play`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/grooveshark.svg"> | `entypo-grooveshark`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/houzz.svg"> | `entypo-houzz`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/icloud.svg"> | `entypo-icloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/instagram-with-circle.svg"> | `entypo-instagram-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/instagram.svg"> | `entypo-instagram`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/lastfm-with-circle.svg"> | `entypo-lastfm-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/lastfm.svg"> | `entypo-lastfm`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/linkedin-with-circle.svg"> | `entypo-linkedin-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/linkedin.svg"> | `entypo-linkedin`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/mail-with-circle.svg"> | `entypo-mail-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/medium-with-circle.svg"> | `entypo-medium-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/medium.svg"> | `entypo-medium`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/mixi.svg"> | `entypo-mixi`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/onedrive.svg"> | `entypo-onedrive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/paypal.svg"> | `entypo-paypal`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/picasa.svg"> | `entypo-picasa`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/pinterest-with-circle.svg"> | `entypo-pinterest-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/pinterest.svg"> | `entypo-pinterest`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/qq-with-circle.svg"> | `entypo-qq-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/qq.svg"> | `entypo-qq`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/raft-with-circle.svg"> | `entypo-raft-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/raft.svg"> | `entypo-raft`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/rainbow.svg"> | `entypo-rainbow`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/rdio-with-circle.svg"> | `entypo-rdio-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/rdio.svg"> | `entypo-rdio`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/renren.svg"> | `entypo-renren`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/scribd.svg"> | `entypo-scribd`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/sina-weibo.svg"> | `entypo-sina-weibo`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/skype-with-circle.svg"> | `entypo-skype-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/skype.svg"> | `entypo-skype`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/slideshare.svg"> | `entypo-slideshare`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/smashing.svg"> | `entypo-smashing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/soundcloud.svg"> | `entypo-soundcloud`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/spotify-with-circle.svg"> | `entypo-spotify-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/spotify.svg"> | `entypo-spotify`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/stumbleupon-with-circle.svg"> | `entypo-stumbleupon-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/stumbleupon.svg"> | `entypo-stumbleupon`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/swarm.svg"> | `entypo-swarm`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/tripadvisor.svg"> | `entypo-tripadvisor`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/tumblr-with-circle.svg"> | `entypo-tumblr-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/tumblr.svg"> | `entypo-tumblr`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/twitter-with-circle.svg"> | `entypo-twitter-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/twitter.svg"> | `entypo-twitter`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vimeo-with-circle.svg"> | `entypo-vimeo-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vimeo.svg"> | `entypo-vimeo`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vine-with-circle.svg"> | `entypo-vine-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vine.svg"> | `entypo-vine`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vk-alternitive.svg"> | `entypo-vk-alternitive`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vk-with-circle.svg"> | `entypo-vk-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/vk.svg"> | `entypo-vk`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/windows-store.svg"> | `entypo-windows-store`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/xing-with-circle.svg"> | `entypo-xing-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/xing.svg"> | `entypo-xing`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/yelp.svg"> | `entypo-yelp`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/youko-with-circle.svg"> | `entypo-youko-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/youko.svg"> | `entypo-youko`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/youtube-with-circle.svg"> | `entypo-youtube-with-circle`
<img width="32px" src="https://cdn.rawgit.com/hypermodules/entypo/master/src/Entypo%20Social%20Extension/youtube.svg"> | `entypo-youtube`

## Example

To see an example implementation, try `npm run example`. Source code is in [`example.js`](example.js).

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

Daniel Bruce, if you are reading this, send me an email if you want commit / release access.

## License

- Module: [ISC](LICENSE.md)
- Icons: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
