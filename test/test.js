const test = require('tape')

test('smoke test', t => {
  t.plan(2)

  t.equal(true, true, 'true is equal to true')
  t.equal(false, false, 'false is equal to false')
})
