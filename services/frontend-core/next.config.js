/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            search: 'search@http://localhost:3002/remote.js',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
