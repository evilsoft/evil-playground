const eyes = require('eyes')

const styles = Object.assign({}, eyes.defaults.styles, {
  all:      'grey',
  string:   'red',
  label:    'yellow',
  key :     'cyan',
  bool:     'green',
  regexp:   'magenta',
})

const inspect = eyes.inspector({ styles })

module.exports = function log(...args) {
  inspect(...args.slice().reverse())
}
