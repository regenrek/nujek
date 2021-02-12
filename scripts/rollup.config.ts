import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import builtins from 'rollup-plugin-node-builtins';
import { activePackages } from './packages';
import vue from 'rollup-plugin-vue';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import node from 'rollup-plugin-node-resolve'



const globals = {
  '@nujek/shared': '@nujek/shared',
  'lodash.get': 'get',
  vue: 'Vue',
  consola: 'Consola'
};

const babelConfig = {
    // exclude: 'node_modules/**',
    // babelHelpers: 'runtime',
    // babelrc: false,
    // presets: [['@babel/preset-env', { modules: false }]],
    plugins: ['@babel/plugin-proposal-optional-chaining']
}

const vuePluginConfig = {
    template: {
        isProduction: true,
        compilerOptions: {
            whitespace: 'condense'
        }
    }
}

const configs = [];

for (const {
  globals, name, display, external,
} of activePackages) {
  const umdGlobals = {
    '@nujek/shared': 'NujekShared',
    'lodash.get': 'get',
    vue: 'Vue',
    ...(globals || {}),
  };
  const umdName = name === 'core' ? 'Nujek' : `Nujek${display}`;

  configs.push({
    input: `packages/${name}/src/index.ts`,
    output: [
      {
        file: `packages/${name}/dist/index.cjs.js`,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: `packages/${name}/dist/index.esm.js`,
        format: 'es',
      },
      {
        file: `packages/${name}/dist/index.umd.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
      },
      {
        file: `packages/${name}/dist/index.umd.min.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
        plugins: [
          terser({
            format: {
              comments: false,
            },
          }),
        ],
      },
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      builtins()
    ],
    external: ['@nujek/shared', 'vue', 'Vue', ...(external || [])],
  });

  configs.push({
    input: `packages/${name}/src/index.ts`,
    output: {
      file: `packages/${name}/dist/index.d.ts`,
      format: 'es',
    },
    plugins: [dts()],
  });
}

const umdName = 'NujekUi';

configs.push(
  {
    input: 'packages/ui/src/plugin.js',
    output: [
      {
        file: 'packages/ui/dist/plugin.js',
        format: 'umd',
        name: umdName,
        globals
      }
    ],
    plugins: [
      babel()
    ],
    external: Object.keys(globals),
  },


  // Components.ts -> js

  {
    input: 'packages/ui/src/components.ts',
    output: [
      {
        file: 'packages/ui/dist/components.js',
        format: 'umd',
        name: umdName,
        globals
      }
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      babel(babelConfig),
      vue(vuePluginConfig),
    ],
    external: Object.keys(globals),
  },
);

const components = {
  'components/atoms/NjSection': 'NjSection',
  'components/atoms/NjBurger': 'NjBurger',
  'components/atoms/NjImage': 'NjImage',
  'components/atoms/SbImage': 'SbImage',
  'components/atoms/SbRichtext': 'SbRichtext',
  'components/molecules/NjNav/NjNav': 'NjNav',
  'components/molecules/NjSidebar/NjSidebar': 'NjSidebar',
  'components/molecules/SbGrid': 'SbGrid',
  // 'components/organisms/NjVideoBackground/NjVideoBackground': 'NjVideoBackground'
};

const componentsConfig = Object.keys(components).map((component) => {
  const componentName = components[component];

  return {
    input: `packages/ui/src/${component}.vue`, // Path relative to package.json
    output: {
      sourcemap: true,
      dir: 'packages/ui/dist',
      entryFileNames: `${component}.js`,
      format: 'umd',
      name: componentName,
      exports: 'named',
      globals
    },
    external: Object.keys(globals),
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      babel(babelConfig),
      vue(),
    ]
  };
}).flat();

export default configs.concat(componentsConfig);
