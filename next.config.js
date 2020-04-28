var path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve("./components"),
      styles: path.resolve("./styles"),
    };
    return config;
  },
};
