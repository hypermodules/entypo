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

module.exports = main
module.exports.path = spritePath
module.exports.rawPath = svgPath
module.exports.htmlToElement = htmlToElement
