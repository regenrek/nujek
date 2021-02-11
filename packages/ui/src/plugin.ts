import Vue, { PluginFunction } from 'vue';
import LibrarySettings from './types/LibrarySettings';

export interface InstallFunction extends PluginFunction<LibrarySettings> {
  installed?: boolean;
}

export const getConfig = (component, props) => {
  const componentProps = component?.options?.props;

  if (!props || !componentProps) {
    return component;
  }

  const customProps = {};

  Object.keys(props).forEach((customPropName) => {
    const defaultProp = componentProps[customPropName];

    if (!defaultProp) {
      return;
    }
    const newDefaultValue = props[customPropName];
    customProps[customPropName] = newDefaultValue;
  });

  return customProps;
};

// eslint-disable-next-line max-len
const install: InstallFunction = function installNujek(
  vueInstance: typeof Vue,
  settings: LibrarySettings,
) {
  if (install.installed) return;

  if (!settings) {
    return;
  }

  Vue.mixin({
    // Dependency injection forces us to explicitly require that function
    provide: {
      $nujekConfig(componentName) {
        // eslint-disabled-next-line
        const componentSettings = settings[componentName || this.$options.name];
        if (componentSettings) {
          const { component, props } = componentSettings;
          return getConfig(component, props);
        }
        return null;
      },
    },
    computed: {},
  });
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Default export is library as a whole, registered via Vue.use()
export default plugin;
