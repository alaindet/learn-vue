import utils from '@/utils';

const requireModule = require.context('.', false, /\.js$/);

const modules = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js' || fileName.endsWith('.lazy.js')) {
    return;
  }

  const moduleConfig = requireModule(fileName);
  const moduleName = utils.toCamelCase(
    fileName.replace(/(\.\/|\.js)/g, ''),
  );
  modules[moduleName] = moduleConfig.default || moduleConfig;
});

export default modules;
