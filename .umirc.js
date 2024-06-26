
// ref: https://umijs.org/config/
const path = require('path');

export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      dll: {
        exclude: ['ace'],
      },
      title: 'ices',
      locale: {
        enable: true,
        // default: 'en-US',
        default: 'zh-CN',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    components: path.resolve(__dirname, './src/components'),
    '@': path.resolve(__dirname, './src'),
  },
  proxy: {
    '/api': {
      //target: 'http://localhost:8000/',
      // target: 'http://172.20.51.5:8240/',
      target:'http://39.105.125.118:8000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    }
  }
}
