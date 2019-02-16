const withOffline = require('next-offline')
const withOptimization = require('next-optimized-images')

const config = {
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: {
            statuses: [ 0, 200 ]
          }
        }
      }
    ]
  }
}

module.exports = withOptimization(withOffline(config))