/**
 * Fork from: https://github.com/vue-bulma/click-outside
 */
function validate(binding) {
  if (typeof binding.value !== 'function') {
    // eslint-disable-next-line no-console
    console.warn(
      '[Vue-click-outside:] provided expression',
      binding.expression,
      'is not a function.'
    )
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements) {
    return false
  }

  for (const element of elements) {
    try {
      if (popupItem.contains(element)) {
        return true
      }
      if (element.contains(popupItem)) {
        return false
      }
    } catch (e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return (
    typeof vNode.componentInstance !== 'undefined' &&
    vNode.componentInstance.$isServer
  )
}

const directive = {
  bind(el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      const elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)

      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) {
        return
      }

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update(el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },

  unbind(el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) &&
      document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}

export default directive
