/**
 * Clears out all undefined properties from an object.
 * @param {Object} props
 * @returns {Object} Sanitized object with defined values.
 */
export function forwardProps(props) {
  const pure = {}
  for (const prop in props) {
    if (props[prop] !== undefined) {
      pure[prop] = props[prop]
    }
  }
  return pure
}

/**
 * Checks if object has a specific property.
 * @param {Object} obj
 * @param {String} prop
 */
export const hasOwn = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop)
