import utils from '@/utils';

export default {
  install(app) {
    // This is Webpack-specific
    const baseComponents = require.context(
      '../components/base',
      false, // useSubDirectories
      /[A-Za-z0-9-_,\s]+\.vue$/i,
    );

    baseComponents.keys().forEach((fileName) => {
      const componentConfig = baseComponents(fileName);
      const componentName = utils.toPascalCase(
        fileName
          .replace(/^\.\//, '') // Remove initial path
          .replace(/\.\w+$/, ''), // Remove extension
      );
      app.component(
        `Base${componentName}`,
        componentConfig.default || componentConfig,
      );
    });
  },
};
