// https://stackoverflow.com/questions/61240655/how-to-allownamespaces-in-cra

/* config-overrides.js */
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(addBabelPlugin(['@babel/plugin-transform-typescript', { allowNamespaces: true }]));