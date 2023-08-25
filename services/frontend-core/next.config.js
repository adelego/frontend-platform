/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    search: `search@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
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
