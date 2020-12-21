import Vue from 'vue'

Vue.filter('dashify', function (value) {
  if (typeof value === 'undefined') {
    return 'undefined'
  }

  let dashified = value
    .toString()
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, '-')

  return dashified
})

Vue.filter('truncate', (str, num, clamp = '...') => {
  if (str.length > num) {
    return str.slice(0, num) + clamp
  } else {
    return str
  }
})
