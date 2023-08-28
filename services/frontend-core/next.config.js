const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
require('dotenv').config();

const remotes = isServer => {
  /**
   * creates remotes url depending on context (server side or client side)
   */

  const location = isServer ? 'ssr' : 'chunks';

  return {
    search: `search@${process.env.SEARCH_REMOTE_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        shared: {},
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
