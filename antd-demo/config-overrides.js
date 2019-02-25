const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const { paths } = require('react-app-rewired');
const path = require('path');
const variables = require('./src/utils/variables');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modules: true,
    modifyVars: variables
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, paths.appSrc)
  })
);