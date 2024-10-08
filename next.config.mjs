const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  basePath: '/docs',
  assetPrefix: '/docs/',
  images: {
    unoptimized: true,
  },
})
