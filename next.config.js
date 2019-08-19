const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|webp)$/,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 8192,
            fallback: require.resolve('file-loader'),
            publicPath: '/_next/static/images/',
            outputPath: `${options.isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]'
          }
        }
      ]
    });

    return config;
  }
});
