import Vue from 'vue';

Vue.filter('dashify', (value) => {
  if (typeof value === 'undefined') {
    return 'undefined';
  }

  const dashified = value
    .toString()
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, '-');

  return dashified;
});
