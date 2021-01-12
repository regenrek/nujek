// rollup.config.js
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'
// import renameExtensions from '@betit/rollup-plugin-rename-extensions'

const packages = require('./scripts/packages')
const configs = []

for (const [pkg, options] of packages) {
  configs.push({
    input: `packages/${pkg}/index.ts`,
    output: [
      // format: 'esm', // This is what tells rollup to use ES6 modules
      // dir: 'dist',
      {
        file: `dist/${pkg}/index.cjs.js`,
        format: 'cjs'
      }
    ],
    plugins: [
      //   typescript({
      //     tsconfig: path.resolve(__dirname, 'tsconfig.rollup.json'),
      //     tsconfigOverride: {
      //       declaration: false,
      //       declarationDir: null,
      //       declarationMap: false,
      //     },
      //     rollupCommonJSResolveHack: true,
      //     clean: true,
      //   }),
      // This extension renames all .vue and .ts to .js
      // (and updates the imports)
      // renameExtensions({
      //   include: ['**/*.ts', '**/*.vue'],
      //   mappings: { '.vue': '.vue.js', '.ts': '.js' },
      // }),
      vue()
    ],
    external: [
      'vue-demi',
      'vue',
      '@vue/composition-api',
      '@vue/runtime-dom',
      ...(options.external || [])
    ]
    // Prevents bundling, but doesn’t rename files
    // preserveModules: true,
  })

  // configs.push({
  //   input: `./typings/${pkg}/index.d.ts`,
  //   output: {
  //     file: `dist/${pkg}/index.d.ts`,
  //     format: 'es',
  //   },
  //   plugins: [
  //     dts(),
  //   ],
  // })
}

export default configs
