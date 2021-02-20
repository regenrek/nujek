const postcss = require('postcss')
const cssnano = require('cssnano')
const queries = require('css-mqpacker')
const perfect = require('perfectionist')
const prefixer = require('autoprefixer')
const atImport = require('postcss-import')
const media = require('postcss-custom-media')
const vars = require('postcss-css-variables')
const extend = require('postcss-extend-rule')
const conditionals = require('postcss-conditionals')
const rmComments = require('postcss-discard-comments')
const classRepeat = require('postcss-class-repeat')
const calc = require('postcss-calc')
const nested = require('postcss-nested')
const mixins = require('postcss-mixins')
const hexrgba = require('postcss-hexrgba')

export const getPlugins = function (options) {
  options = options || {}

  const perfectionistOptions = options.perfectionist || {
    format: 'compact',
    trimTrailingZeros: false
  }

  const atImportOptions = options.atImport || {}

  const plugins = [
    atImport(atImportOptions), mixins(), nested(), hexrgba(), conditionals(), media(), queries(), perfect(perfectionistOptions),
    prefixer(), extend()
  ]

  if (!options.preserveVariables) {
    plugins.splice(1, 0, calc())
    plugins.splice(1, 0, vars())
  }

  if (options.minify) {
    plugins.push(cssnano())
    plugins.push(rmComments())
  }

  if (options.repeat) {
    let repeatNum = parseInt(options.repeat) || 4

    if (repeatNum < 2) {
      repeatNum = 4
    }

    plugins.push(classRepeat({ repeat: repeatNum }))
  }

  if (options.plugins) {
    options.plugins.forEach(plugin => plugins.push(plugin))
  }

  return plugins
}

const postcssBuild = (css, options) => {
  const plugins = getPlugins(options)

  return postcss(plugins).process(css, options)
}

export default postcssBuild
