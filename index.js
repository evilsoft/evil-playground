import log from './lib/log'

log('data', {
  happy:    true,
  awesome:  'of course',
  level:    1337,
  list:     ['pretty', 'rainbows', 'flood'],
  regex:    /tickles/,
  obj: {
    great() { return true },
    obj: {
      great: true,
    },
  }
})
