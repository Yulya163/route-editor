const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {...config.resolve.alias, react: path.resolve('./node_modules/framer-motion/node_modules/react')}

  return config;
};