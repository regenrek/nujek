// Based on https://stackoverflow.com/questions/27078285/simple-throttle-in-js
export default (callback, limit) => {
  let timeoutHandler = 'null'

  return (...args) => {
    if (timeoutHandler === 'null') {
      timeoutHandler = setTimeout(() => {
        // eslint-disable-next-line node/no-callback-literal
        callback(...args)
        timeoutHandler = 'null'
      }, limit)
    }
  }
}
