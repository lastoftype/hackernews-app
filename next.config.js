const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(withSass(withCSS({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})))