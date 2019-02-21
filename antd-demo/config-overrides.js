const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const { paths } = require('react-app-rewired');
const path = require('path');
const variables = require('./src/config/variables');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: variables
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, paths.appSrc)
  })
);