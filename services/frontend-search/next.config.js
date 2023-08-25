const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'search',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './SearchBar': './components/SearchBar',
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
