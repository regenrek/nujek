<template>
  <component
    :is="getType"
    v-bind="{ ...getLink }"
    @click.capture="handleClick"
    @click.capture.native="handleClick"
  >
    <slot />
  </component>
</template>
<script>
// DON'T USE type === a !!!
// .native modifier is not allowed -> Known issue
// https://github.com/vuejs/ui/issues/32
// https://github.com/vuejs/vue/issues/10939
// https://github.com/vuejs/vue/pull/11052

export default {
  name: 'NjNavItem',
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    getType() {
      if (this.type === 'url') {
        return 'a';
      } if (this.to) {
        return 'nuxt-link';
      }

      return 'span';
    },
    getLink() {
      if (this.type === 'url') {
        return { href: this.to, target: '_blank' };
      } if (this.to) {
        return { to: `/${this.to}` };
      }

      return '';
    },
  },
  methods: {
    handleClick(e) {
      if (this.getType === 'url') {
        e.preventDefault();
      } else {
        this.$emit('onClick', e);
      }
    },
  },
};
</script>
