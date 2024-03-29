export default (context, inject) => {
  // check if absolute (http/s) -> <a> or relative / -> <nuxt-link>
  const isAbsolute = url => /^(?:[a-z]+:)?\/\//i.test(url)

  const arrayCheck = (field) => {
    return Array.isArray(field) ? field[0] : field
  }

  const tag = (field) => {
    field = arrayCheck(field)

    switch (field?.link?.linktype) {
      case 'story':
        // @TODO If span is sent back there is something missing story linking
        return (typeof field.link.story === 'object' &&
          Object.keys(field.link.story).length && 'nuxt-link') || 'span'
      case 'url':
        return isAbsolute(field.link.url) ? 'a' : 'nuxt-link'
      default:
        return 'span'
    }
  }

  const label = (field) => {
    field = arrayCheck(field)
    return field?.label || field?.name || 'undefined on storyblok'
  }

  const description = (field) => {
    field = arrayCheck(field)

    return field?.description || ''
  }

  const fullSlug = (field) => {
    field = arrayCheck(field)
    if (field?.link?.linktype === 'url') { return field.link.url || '' }
    if (field?.link?.linktype === 'story') { return field.link.story?.fullSlug ? `/${field.link.story.fullSlug}` : '' }
    return ''
  }

  const linkTo = (field) => {
    field = arrayCheck(field)

    switch (field?.link?.linktype) {
      case 'url':
        return isAbsolute(field?.link?.url)
          ? { href: field.link.url || '#', target: '_blank' }
          : toNuxtLink(field.link.url)
      case 'story':
        if (field.link.story &&
          typeof field.link.story === 'object' &&
          Object.keys(field.link.story).length) {
          return toNuxtLink(field.link.story.fullSlug || field.link.story.full_slug)
        } else {
          // eslint-disable-next-line no-console
          console.warn(`No url/story for type Link (${field.label})  found. Try publish the linked story first`)
          return ''
        }
      default:
        return {}
    }
  }

  const toNuxtLink = (link) => {
    if (!link) {
      return {}
    }

    return {
      // remove first slash if exists
      to: '/' + (link.replace(/^\//, '') || '')
    }
  }

  const getSliderItemLinkType = (item) => {
    switch (item.linktype) {
      case 'url':
        return item.url ? 'a' : 'div'
      case 'story':
        return item.story &&
          typeof item.story === 'object' &&
          Object.keys(item.story).length
          ? 'nuxt-link'
          : 'div'
      default:
        return 'div'
    }
  }

  const getSliderItemLink = (field) => {
    switch (field.linktype) {
      case 'url':
        return field.url ? { href: field.url || '#', target: '_blank' } : {}
      case 'story':
        return field.story &&
          typeof field.story === 'object' &&
          Object.keys(field.story).length &&
          toNuxtLink(field.story.fullSlug || field.story.full_slug)
      default:
        return {}
    }
  }

  const truncate = (text, length = 80) => {
    if (text.length > length) {
      return `${text.split('').splice(0, length).join('')}...`
    } else {
      return text
    }
  }

  const utils = {
    linkTo,
    tag,
    label,
    description,
    fullSlug,
    getSliderItemLinkType,
    getSliderItemLink,
    truncate,
    toNuxtLink
  }

  inject('sbutils', utils)
  context.$sbutils = utils
}
