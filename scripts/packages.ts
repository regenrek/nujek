export interface PackageManifest {
  name?: string;
  deprecated?: boolean;
  disabled?: boolean;
}

export const packages: PackageManifest[] = [
  {
    name: 'shared',
    disabled: true
  },
  {
    name: 'ui'
  },
  {
    name: 'storyblok'
  },
  {
    name: 'bundle'
  }
]

export const activePackages = packages.filter(i => (!i.deprecated || i.disabled))
