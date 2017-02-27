var test = require('tape')
var entypo = require('../')

test('API contract', function (t) {
  t.equal(typeof entypo, 'function', 'main export is a  function')
  t.equal(typeof entypo.path, 'string', 'path exports a string')
  // t.equal(typeof entypo.rawPath, 'string', 'rawPath exports a string')
  t.equal(typeof entypo.htmlToElement, 'function', 'htmlToElement exports a function')
  t.equal(typeof entypo.getNode, 'function', 'getNode exports a function')
  t.end()
})
