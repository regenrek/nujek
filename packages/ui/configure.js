// import configureDialogGlobals from './utils/configureDialogGlobals'

const configure = (component, props) => {
  const componentProps = component?.options?.props
  // const componentName = component?.options?.name

  //   if (componentName === 'TModal') {
  //     // eslint-disable-next-line no-param-reassign
  //     Vue.prototype.$modal = new Vue({
  //       methods: {
  //         show(name, params = undefined) {
  //           this.$emit(`show-${name}`, params)
  //         },
  //         hide(name) {
  //           this.$emit(`hide-${name}`)
  //         }
  //       }
  //     })
  //   } else if (componentName === 'TDialog') {
  //     configureDialogGlobals(Vue, props)
  //   }

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

export default configure
