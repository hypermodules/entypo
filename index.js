var path = require('path')
var fs = require('fs')

var spritePath = path.join(__dirname, 'sprite.svg')
var svgPath = path.join(__dirname, 'Entypo+')

function main () {
  var svgSprite = fs.readFileSync(spritePath, 'utf8')
  return svgSprite
}

function htmlToElement (html) {
  var template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstChild
}

function getNode () {
  var svg = main()
  var node = htmlToElement(svg)
  return node
}

module.exports = main
module.exports.path = spritePath
module.exports.rawPath = svgPath
module.exports.htmlToElement = htmlToElement
module.exports.getNode = getNode
