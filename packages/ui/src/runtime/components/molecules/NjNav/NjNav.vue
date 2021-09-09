<template>
  <div :class="getThemeClass('wrapper')">
    <div :class="getThemeClass('container')">
      <slot name="header">
        <header :class="getThemeClass('header')">
          <slot
            v-if="enableBurgerMenu"
            name="burger-menu"
            v-bind="{ isOpenBurgerComp }"
          >
            <NjBurger :open.sync="isOpenBurgerComp" :classes="{ bar: burgerBarColorClass, wrapper: burgerWrapperClass }" />
          </slot>

          <slot
            name="logo"
            v-bind="{ logoLink, logoImage }"
          >
            <div :class="getThemeClass('logoWrapper')">
              <nuxt-link :to="logoLink" :class="getThemeClass('logoLink')">
                <img :src="logoImage" :alt="logoAlt">
              </nuxt-link>
            </div>
          </slot>

          <div :class="getThemeClass('navItemsWrapper')">
            <slot
              name="nav"
              v-bind="{ navItems }"
            >
              <NjNavItems
                :items="navItems"
                :class="getThemeClass('mainNavItemsWrapper')"
              />
            </slot>

            <slot
              name="aside"
              v-bind="{ asideNavItems }"
            >
              <NjNavItems :items="asideNavItems" :class="getThemeClass('asideNavItemsWrapper')" />
            </slot>
          </div>
        </header>
        <slot name="panel" />
      </slot>
    </div>
  </div>
</template>
<script>

import Component from '../../../base/Component'
const NjNav = Component.extend({
  name: 'NjNav',
  props: {
    isOpenBurger: {
      type: Boolean,
      default: false
    },
    burgerBarColorClass: {
      type: String,
      default: 'bg-gray-800'
    },
    burgerWrapperClass: {
      type: String,
      default: ''
    },
    enableBurgerMenu: {
      type: Boolean,
      default: true
    },
    classes: {
      type: Object,
      default () {
        return {
          wrapper: 'flex justify-center w-full',
          container: 'py-2 max-w-screen-xl w-full px-6',
          header: 'flex items-center',
          logoWrapper: 'flex flex-shrink-0 w-40 lg:w-48',
          logoLink: 'block',
          navItemsWrapper: 'flex flex-grow justify-end md:justify-between',
          mainNavItemsWrapper: 'hidden md:flex space-x-4',
          asideNavItemsWrapper: 'flex items-center space-x-4'
        }
      }
    },
    navItems: {
      type: Array,
      default () {
        return []
      },
      required: false
    },
    asideNavItems: {
      type: Array,
      default () {
        return []
      }
    },
    logoImage: {
      type: String,
      default: '',
      required: false
    },
    logoAlt: {
      type: String,
      default: 'logo',
      required: false
    },
    logoLink: {
      type: [String, Object],
      default: '/',
      required: false
    }
  },
  computed: {
    isOpenBurgerComp: {
      get () {
        return this.isOpenBurger
      },
      set (val) {
        this.$emit('update:isOpenBurger', val)
      }
    }
  }
})
export default NjNav
</script>
