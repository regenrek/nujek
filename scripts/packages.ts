export interface PackageManifest {
  name: string;
  display: string;
  addon?: boolean;
  author?: string;
  description?: string;
  external?: string[];
  globals?: Record<string, string>;
  manualImport?: boolean;
  deprecated?: boolean;
}

export const packages: PackageManifest[] = [
  {
    name: 'shared',
    display: 'Shared utilities',
  },
  {
    name: 'ui',
    display: 'Ui',
    description: 'Nujek - UI components',
    addon: true,
  },
  {
    name: 'storyblok',
    display: 'Storyblok',
    description: 'Nujek - Storyblok module',
    addon: true,
  },
];

export const activePackages = packages.filter((i) => !i.deprecated);
