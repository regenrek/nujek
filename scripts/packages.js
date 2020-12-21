export const packages = [
  {
    name: 'shared',
    display: 'Shared utilities'
  },
  {
    name: 'core',
    display: 'Nujek',
    description: 'Nujek core framework'
  },
  {
    name: 'ui',
    display: 'Ui',
    description: 'Nujek ui',
    addon: true
  },
  {
    name: 'storyblok',
    display: 'Storyblok',
    description: 'Nujek Storyblok',
    addon: true
  }
]

export const activePackages = packages.filter((i) => !i.deprecated)
