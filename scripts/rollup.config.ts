// rollup.config.js
// import vue from 'rollup-plugin-vue'
// import typescript from 'rollup-plugin-typescript2'
// import path from 'path'
// import renameExtensions from '@betit/rollup-plugin-rename-extensions'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'
import { activePackages } from './packages'
import builtins from 'rollup-plugin-node-builtins'

const configs = []

for (const { globals, name, display, external } of activePackages) {
  const umdGlobals = {
    '@nujek/shared': 'NujekShared',
    '@nujek/core': 'Nujek',
    ...(globals || {})
  }
  const umdName = name === 'core' ? 'Nujek' : `Nujek${display}`

  configs.push({
    input: `packages/${name}/index.ts`,
    output: [
      {
        file: `packages/${name}/dist/index.cjs.js`,
        format: 'cjs',
        exports: 'named'
      },
      {
        file: `packages/${name}/dist/index.esm.js`,
        format: 'es'
      },
      {
        file: `packages/${name}/dist/index.umd.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals
      },
      {
        file: `packages/${name}/dist/index.umd.min.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
        plugins: [
          terser({
            format: {
              comments: false
            }
          })
        ]
      }
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false
          }
        }
      }),
      builtins()
    ],
    external: ['@nujek/shared', ...(external || [])]
  })

  configs.push({
    input: `packages/${name}/index.ts`,
    output: {
      file: `packages/${name}/dist/index.d.ts`,
      format: 'es'
    },
    plugins: [dts()]
  })
}

export default configs

// for (const [pkg, options] of packages) {
//   configs.push({
//     input: `packages/${pkg}/index.ts`,
//     output: [
//       // format: 'esm', // This is what tells rollup to use ES6 modules
//       // dir: 'dist',
//       {
//         file: `dist/${pkg}/index.cjs.js`,
//         format: 'cjs'
//       }
//     ],
//     plugins: [
//       vue()
//     ],
//     external: [
//       'vue',
//       '@vue/composition-api',
//       '@vue/runtime-dom',
//       ...(options.external || [])
//     ]
//   })
// }
