// TODO

export default {
  install(app) {
    // This is Webpack-specific
    const dir = '../components/base';
    const useSubDirs = false;
    const regex = /[A-Za-z0-9-_,\s]+\.vue$/i;
    const baseComponents = require.context(dir, useSubDirs, regex);
    baseComponents.keys().forEach((fileName) => {
      const componentConfig = baseComponents(fileName);
    });
  }
}
