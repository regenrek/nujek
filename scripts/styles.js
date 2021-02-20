import { resolve } from 'path'
import builder from './compile-styles'
const fs = require('fs')
const uidir = resolve(__dirname, '../packages/ui/')

const input = fs.readFileSync(resolve(uidir, 'src/css/nujek-ui.css'), 'utf8')

builder(input, {
  from: resolve(uidir, 'src/css/nujek-ui.css'),
  to: resolve(uidir, 'dist/nujek-ui.css'),
  minify: false
}).then((result) => {
  fs.writeFileSync(resolve(uidir, 'dist/nujek-ui.css'), result.css)
})
