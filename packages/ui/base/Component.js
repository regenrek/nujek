import Vue from 'vue'
import get from 'lodash.get'

const mergeClasses = (classesA, classesB) => {
  let a = classesA
  let b = classesB

  // Convert array of string classes to a single string
  if (
    Array.isArray(classesA) &&
    classesA.every((className) => typeof className === 'string' || !!className)
  ) {
    a = classesA.filter((className) => !!className).join(' ')
  }

  // Convert array of string classes to a single string
  if (
    Array.isArray(classesB) &&
    classesB.every((className) => typeof className === 'string' || !!className)
  ) {
    b = classesB.filter((className) => !!className).join(' ')
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return `${a} ${b}`
  }

  if (typeof a === 'string' && Array.isArray(b)) {
    return [a].concat(b)
  }

  if (typeof b === 'string' && Array.isArray(a)) {
    return a.concat([b])
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b)
  }

  return [a, b]
}

// @TODO: $nujekConfig has to be initialized in the future but for now we check
const isFun = (obj) => !!(obj && obj.constructor && obj.call && obj.apply)

const Component = Vue.extend({
  inject: ['$nujekConfig'],
  props: {
    classes: {
      type: [String, Array, Object],
      default: undefined
    },
    fixedClasses: {
      type: [String, Array, Object],
      default: undefined
    },
    variants: {
      type: Object,
      default: undefined
    },
    variant: {
      type: [String, Object],
      default: undefined
    }
  },
  computed: {
    componentClass() {
      return this.getElementCssClass()
    },
    activeVariant() {
      if (!this.variant) {
        return undefined
      }

      if (typeof this.variant === 'object') {
        const truthyVariant = Object.keys(this.variant).find(
          (variant) => !!this.variant[variant]
        )
        return truthyVariant || undefined
      }

      return this.variant
    },
    getClasses() {
      return this.$nujekConfig()?.classes || this.classes || []
    },
    getVariants() {
      return this.$nujekConfig()?.variants || this.variants || []
    },
    getFixedClasses() {
      return this.$nujekConfig()?.fixedClasses || this.fixedClasses || []
    }
  },
  methods: {
    getThemeClass(elementName, overrideDefaultClasses = '') {
      let classes

      if (elementName) {
        if (this.activeVariant) {
          const elementVariant = get(
            this.getVariants,
            `${this.activeVariant}.${elementName}`
          )

          // If the variant exists but not for the element fallback to the default
          if (
            elementVariant === undefined &&
            get(this.getVariants, this.activeVariant) !== undefined
          ) {
            classes = get(this.getClasses, elementName, overrideDefaultClasses)
          } else {
            classes =
              elementVariant === undefined
                ? overrideDefaultClasses
                : elementVariant
          }
        } else {
          classes = get(this.getClasses, elementName, overrideDefaultClasses)
        }

        const fixedClasses = get(this.getFixedClasses, elementName)

        if (fixedClasses) {
          return mergeClasses(fixedClasses, classes)
        }

        return classes
      }

      if (this.activeVariant) {
        classes = get(this.variants, this.activeVariant, overrideDefaultClasses)
      } else {
        classes =
          this.getClasses === undefined
            ? overrideDefaultClasses
            : this.getClasses
      }

      if (this.getFixedClasses) {
        return mergeClasses(this.getFixedClasses, classes)
      }

      return classes
    }
  }
})

export default Component
