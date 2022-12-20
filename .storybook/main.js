const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|tsx)'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  babel: async options => ({
    // Update your babel configuration here.
    // Note: by default uses V7 mode, which uses .babelrc file.
    ...options
  }),
  webpackFinal: async (config, {
    configType
  }) => {
    // Fix paths not resolving in storybook.
    // @see https://github.com/storybookjs/storybook/issues/3291
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];
    // Return the altered config.
    return config;
  }
};