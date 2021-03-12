const company = {
  name: 'Kapsalon Ans',
  phone: '0031612312541'
}
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: company.name,
    htmlAttrs: {
      lang: 'NL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: "subject", content:`Website ${company.name} Soest`},
      { name: "language", content:"NL"},
      { 'http-equiv': "X-UA-Compatible", content:"IE=edge"},
      { name: "author", content:"Ans Ros"},
      { name: "keywords", content:"Ans, kapsalon, Soest, Ros, leuke, goede, goeie, kapper, kapster, Baarn, knippen, haar, wax, hairextensions, haarextensions, highlights, afspraak, openingstijden, contact"},
      { name: "viewport", content:"width=device-width, initial-scale=1"},
  
      { property: "og:title", content:`${company.name}`},
      { name: "og:type", content:"website" },
      { property: "og:url", content:"<%= BASE_URL %>"},
      { property: "og:site_name", content:`${company.name}`},
      { property: "og:description", content:"Website ${company.name} Soest" },
      { property: "og:image", content:"<%= BASE_URL %>assets/og-image.png"},
      { property: "og:image:width", content:"1200"},
      { property: "og:image:height", content:"630"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'leaflet/dist/leaflet.css', lang: 'css' },
    { src: 'assets/sass/base/base.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/owl.js', ssr: false} // Only works on client side
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  script: [
    {src: '../instafeed.js/dist/instafeed.min.js'},
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/dotenv',
    '@nuxtjs/svg',
    // 'nuxt-vite',
  ],
  modules: [
    'nuxt-leaflet',
  ],

  
  // TODO:: have a look why implementing modules wont work with vite
  vite: {
    optimizeDeps: {
      exclude: [
        'vue2-leaflet',
      ]
    },
    css: {
        preprocessorOptions: {
            scss: {
                sourceMap: true,
                additionalData: `@import "@/assets/sass/vars/vars.scss";`,
              },
            },
        }, 
    },
  build: {
    loaders: {
        scss: {
            sourceMap: true,
            implementation: require("sass"),
            additionalData: `@import "@/assets/sass/vars/vars.scss";`,
        }
    }
  }
}
