import { oneLine } from 'common-tags'

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
        return (field?.link?.story === 'object' &&
          Object.keys(field.link.story).length && 'nuxt-link') || 'span'
      case 'url':
        return isAbsolute(field?.link?.url) ? 'a' : 'nuxt-link'
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
          : { to: field.link.url }
      case 'story':
        return field.link.story &&
          typeof field.link.story === 'object' &&
          Object.keys(field.link.story).length
          ? {
              to: field.link.story?.fullSlug
                ? `/${field.link.story.fullSlug}`
                : field.link.story?.full_slug
                  ? `/${field.link.story.full_slug}`
                  : ''
            }
          : {}
      default:
        return {}
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

  const getSliderItemLink = (item) => {
    switch (item.linktype) {
      case 'url':
        return item.url ? { href: item.url || '#', target: '_blank' } : {}
      case 'story':
        return item.story &&
          typeof item.story === 'object' &&
          Object.keys(item.story).length
          ? {
              to: item.story?.fullSlug
                ? `/${item.story.fullSlug}`
                : item.story?.full_slug
                  ? `/${item.story.full_slug}`
                  : ''
            }
          : {}
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
    oneLine,
    truncate
  }

  inject('$sbutils', utils)
  context.$sbutils = utils
}
