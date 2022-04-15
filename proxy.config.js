const HttpsProxyAgent = require('https-proxy-agent');

/*
 * API proxy configuration.
 * This allows you to proxy HTTP request like `http.get('/api/stuff')` to another server/port.
 * This is especially useful during app development to avoid CORS issues while running a local server.
 * For more details and options, see https://angular.io/guide/build#using-corporate-proxy
 */
const proxy = [
  {
    context: '/api',
    pathRewrite: { '^/api': '' },
    secure: false,
    changeOrigin: true,
    target: 'http://167.71.249.87:3000'
  }
];

module.exports = proxy
