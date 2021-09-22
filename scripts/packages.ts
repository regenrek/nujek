export interface PackageManifest {
  name?: string;
  deprecated?: boolean;
  disabled?: boolean;
  tests?: boolean;
}

export const packages: PackageManifest[] = [
  {
    name: 'shared',
    tests: false
  },
  {
    name: 'ui',
    tests: true,
  },
  {
    name: 'storyblok',
    tests: true,
  },
  {
    name: 'bundle',
    tests: false
  }
]

export const activePackages = packages.filter(i => (!i.deprecated || i.disabled))
