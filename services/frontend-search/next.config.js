const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'frontend-search',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './components': './components',
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      }),
    );

    return config;
  },
};
