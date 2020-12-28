const configure = (component, props) => {
  const componentProps = component?.options?.props

  if (!props || !componentProps) {
    return component
  }

  const customProps = {}

  Object.keys(props).forEach((customPropName) => {
    const defaultProp = componentProps[customPropName]

    if (!defaultProp) {
      return
    }
    const newDefaultValue = props[customPropName]

    console.log('install', newDefaultValue)

    customProps[customPropName] = {
      type: defaultProp?.type,
      default: ['object', 'function'].includes(typeof newDefaultValue)
        ? () => newDefaultValue
        : newDefaultValue
    }
  })

  return component.extend({
    props: customProps
  })
}

// install function executed by Vue.use()
// eslint-disable-next-line max-len
const install = function installNujek(vueInstance, settings) {
  if (install.installed) return

  install.installed = true

  // eslint-disable-next-line no-param-reassign
  vueInstance.prototype.$nujek = true

  if (!settings) {
    return
  }

  Object.keys(settings).forEach((componentName) => {
    const componentSettings = settings[componentName]

    if (
      typeof componentSettings === 'function' &&
      typeof componentSettings.extend !== undefined
    ) {
      const component = componentSettings
      vueInstance.component(componentName, configure(component))
      return
    }

    const { component, props } = componentSettings

    vueInstance.component(
      componentName.replace('nj', 'n'),
      configure(component, props)
    )
  })
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
