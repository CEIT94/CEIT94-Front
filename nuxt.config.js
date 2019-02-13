const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  /*
  ** Headers of the page
  */
 head: {
    title: 'آیین فارغ‌التحصیلی دانشجویان ورودی ۱۳۹۳',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'theme-color', content: '#ffffff'},
      {hid: 'description', name: 'description', content: 'وب‌اپلیکیشن فارغ‌التحصیلی دانشجویان ورودی سال ١٣٩٤ دانشکده مهندسی کامپیوتر و فناوری اطلاعات دانشگاه صنعتی امیرکبیر'},
      {property: 'og:locale', content: 'fa_IR'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes:'32x32'},
      {rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes:'16x16'},
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-640x1136.png', media:'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-750x1294.png', media:'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1242x2148.png', media:'(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1125x2436.png', media:'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1536x2048.png', media:'(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-1668x2224.png', media:'(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'},
      {rel: 'apple-touch-startup-image', href: 'apple-splash-2048x2732.png', media:'(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'}
  ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/css/main.css',
    '~/node_modules/vuetify/dist/vuetify.min.css',
    '~/assets/css/iransharp.css',
    '~/assets/css/bootstrap-grid.min.css',
],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
