const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    PRISMTHEME: 'tomorrow',
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
