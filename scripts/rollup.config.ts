import path from 'path'
import postcss from 'rollup-plugin-postcss'

// export default {
//   plugins: [
//     postcss({
//       plugins: []
//     })
//   ]
// }

export default {
  input: 'packages/ui/src/styles.ts',
  plugins: [

    postcss({
      extract: path.resolve('packages/ui/dist/nujek-ui.css')
    })
  ]
}
