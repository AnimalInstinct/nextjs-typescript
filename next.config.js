const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
