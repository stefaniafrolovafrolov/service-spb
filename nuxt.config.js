export default {

  generate: {
    router: {
      base: '/app/'
    },
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'service-spb',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Автосервис по ремонту коробок передач DSG-6,' +
          ' DSG-7,замена моховиков, Замена сцепления Powershift DCT250, Снятие/установка мехатроника,' +
          'Снятие/установка Гидроблока, Снятие/установка АКПП'
      },
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: "~/assets/scss/main.scss", lang: "scss"},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    // extractCSS: isProd,
    // extend(config, ctx) {
    //   config.module.rules.push(globSassLoader);
    // },


    // analyze: false,
    // extractCSS: true,
    // babel: {
    //   plugins: [
    //     ['@babel/plugin-proposal-private-methods', {loose: true}]
    //   ]
    // },
    // hotMiddleware: false
    // extend(config) {
    //   const hmrIndex = config.plugins.findIndex(p => p.constructor.name === 'HotModuleReplacementPlugin')
    //   config.plugins.splice(hmrIndex, 1)
    // }
  }
}
