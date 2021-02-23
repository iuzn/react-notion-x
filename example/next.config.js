'use strict'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      // redirect the index page to our notion test suite
      {
        source: '/ibrahimuzun',
        destination: '/5f9e54dc684343c3bb1becb2ed6f48fe',
        // don't set permanent to true because it will get cached by browser
        // while developing on localhost
        permanent: false
      }
    ]
  }
})
