var path = require('path')
var fs = require('fs')

var spritePath = path.join(__dirname, 'sprite.svg')
var svgPath = path.join(__dirname, 'Entypo+')

function main () {
  var svgSprite = fs.readFileSync(spritePath, 'utf8')
  return svgSprite
}

module.exports = main
module.exports.path = spritePath
module.exports.rawPath = svgPath
