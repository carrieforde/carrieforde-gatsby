import { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config, options) => {
    if (!config.resolve) {
      return config;
    }

    // For TS absolute imports.
    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ];

    config.resolve.extensions?.push(".ts", ".tsx");
    return config;
  },
};
export default config;
