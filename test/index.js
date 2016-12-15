var test = require('tape')
var entypo = require('../')

test('Example Test', function (t) {
  t.plan(3)
  t.equal(typeof entypo, 'function', 'main export is a  function')
  t.equal(typeof entypo.path, 'string', 'path exports a string')
  t.equal(typeof entypo.rawPath, 'string', 'rawPath exports a string')
})
