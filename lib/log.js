import eyes from 'eyes'

const styles = Object.assign({}, eyes.defaults.styles, {
  all:      'grey',
  string:   'red',
  label:    'yellow',
  key :     'cyan',
  bool:     'green',
  regexp:   'magenta',
})

const inspect = eyes.inspector({ styles })

export default function log(...args) {
  inspect(...args.slice().reverse())
}
