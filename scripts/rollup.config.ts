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
      builtins(),
      babel({
        plugins: ['@babel/plugin-proposal-optional-chaining']
      })
    ],
    external: ['@nujek/shared', ...(external || [])],
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
const umdGlobals = {
  '@nujek/shared': 'NujekShared',
};

configs.push(
  {
    input: 'packages/ui/src/plugin.js',
    output: [
      {
        file: 'packages/ui/dist/plugin.js',
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
      }
    ],
    plugins: [
      commonjs(),
      babel({
        plugins: ['@babel/plugin-proposal-optional-chaining']
      })
    ],
    external: ['@nujek/shared'],
  },
  {
    input: 'packages/ui/src/components.ts',
    output: [
      {
        file: 'packages/ui/dist/components.js',
        format: 'umd',
        name: umdName,
        globals: umdGlobals
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
      babel({
        plugins: ['@babel/plugin-proposal-optional-chaining']
      }),
      builtins(),
      vue(),
    ],
    external: ['@nujek/shared'],
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
  'components/organisms/NjVideoBackground/NjVideoBackground': 'NjVideoBackground'
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
      globals: umdGlobals,
    },
    external: Object.keys(umdGlobals),
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      babel({
        plugins: ['@babel/plugin-proposal-optional-chaining']
      }),
      vue(),
    ],
  };
}).flat();

export default configs.concat(componentsConfig);
