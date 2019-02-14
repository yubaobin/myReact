const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    'components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    'views': path.resolve(__dirname, `${paths.appSrc}/views/`),
    'styles': path.resolve(__dirname, `${paths.appSrc}/styles/`),
    'images': path.resolve(__dirname, `${paths.appSrc}/assets/images/`)
  })(config, env);
  return config;
}