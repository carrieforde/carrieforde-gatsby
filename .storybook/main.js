const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-css-modules-preset",
    "storybook-addon-gatsby",
  ],
  webpackFinal: async (config) => {
    // For TS absolute imports.
    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ];

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
