import Vue from 'vue'

export const getConfig = (component, props) => {
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
    customProps[customPropName] = newDefaultValue
  })

  return customProps
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const install = function installNujek (vueInstance, settings) {
  Vue.mixin({
    // Dependency injection forces us to explicitly require that function
    provide: {
      $nujekConfig (componentName) {
        const componentSettings = settings[componentName || this.$options.name]
        if (componentSettings) {
          const { component, props } = componentSettings
          return getConfig(component, props)
        }
      }
    },
    computed: {}
  })
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
