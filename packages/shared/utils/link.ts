export function getButtonLinkType(button) {
  switch (button.link?.linktype) {
    case 'url':
      return 'a'
    case 'story':
      return 'nuxt-link'
    default:
      return 'div'
  }
}

export function getButtonLink(button) {
  switch (button.link?.linktype) {
    case 'url':
      return { href: button.link.url, target: 'blank' }
    case 'story':
      return { to: '/' + button.link.story.full_slug }
    default:
      return {}
  }
}
