export default (context, inject) => {
  const getButtonLinkType = (button) => {
    if (Array.isArray(button)) {
      button = button[0]
    }

    switch (button?.link?.linktype) {
      case 'url':
        return button.link.url ? 'a' : 'div'
      case 'story':
        return button.link.story &&
                    typeof button.link.story === 'object' &&
                    Object.keys(button.link.story).length
          ? 'nuxt-link'
          : 'div'
      default:
        return 'div'
    }
  }

  const getButtonLabel = (button) => {
    if (Array.isArray(button)) {
      button = button[0]
    }
    return button?.label || button?.name || 'undefined on storyblok'
  }

  const getButtonDescription = (button) => {
    if (Array.isArray(button)) {
      button = button[0]
    }
    return button?.description || ''
  }

  const getFullSlug = (button) => {
    if (Array.isArray(button)) {
      button = button[0]
    }
    if (button?.link?.linktype === 'url') { return button.link.url || '' }
    if (button?.link?.linktype === 'story') { return button.link.story?.fullSlug ? `/${button.link.story.fullSlug}` : '' }
    return ''
  }

  const getButtonLink = (button) => {
    if (Array.isArray(button)) {
      button = button[0]
    }

    switch (button?.link?.linktype) {
      case 'url':
        return button.link.url
          ? { href: button.link.url || '#', target: '_blank' }
          : {}
      case 'story':
        return button.link.story &&
                    typeof button.link.story === 'object' &&
                    Object.keys(button.link.story).length
          ? {
              to: button.link.story?.fullSlug
                ? `/${button.link.story.fullSlug}`
                : button.link.story?.full_slug
                  ? `/${button.link.story.full_slug}`
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

  const utils = {
    getButtonLink,
    getButtonLinkType,
    getButtonLabel,
    getButtonDescription,
    getFullSlug,
    getSliderItemLinkType,
    getSliderItemLink
  }

  inject('sbutils', utils)
  context.$sbutils = utils
}
