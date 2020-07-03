import px2viewport from 'postcss-px-to-viewport';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [{ path: '/', component: '../pages/index' }],
  //   },
  // ],
  history: 'hash',
  publicPath: './',
  base: './',
  extraPostCSSPlugins: [px2viewport({ viewportWidth: 750, exclude: [/(node_modules)/i] })],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'code',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ]
  ],
};