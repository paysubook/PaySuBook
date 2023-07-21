const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://port-0-server-20zynm2mljszeksw.sel4.cloudtype.app',
      changeOrigin: true,
    })
  );
};
