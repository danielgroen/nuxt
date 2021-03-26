const company = {
  name: 'Kapsalon Ans',
}
export default {
  target: 'static',

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
      { property: "og:description", content:`Website ${company.name} Soest` },
      { property: "og:image", content:"/og-image.png"},
      { property: "og:image:width", content:"1200"},
      { property: "og:image:height", content:"630"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' }
    ],
    script: [
      {
        src: "https://ig.instant-tokens.com/users/51f66933-3d37-44f7-a892-de04dd691753/instagram/17841406972317672/token.js?userSecret=9rhiah0i6anwi5b8n4rs9f",
        body: true,
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'leaflet/dist/leaflet.css', lang: 'css' },
    { src: 'assets/sass/base/base.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/owl.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
    // 'nuxt-vite',
  ],
  modules: [
    'nuxt-leaflet',
    'nuxt-rfg-icon',
    [
      'nuxt-font-loader-strategy',
      {
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          {
            // TODO:: dit font is te dik. als het scherm niet retina is
            fileExtensions: ['ttf'],
            fontFamily: 'Muli',
            fontFaces: [
              {
                preload: true,
                src: '@/assets/fonts/Muli',
                fontWeight: 300,
                fontStyle: 'light',
              },
            ],
          },
          {
            fileExtensions: ['ttf'],
            fontFamily: 'Nexa',
            fontFaces: [
              {
                preload: true,
                src: '@/assets/fonts/Nexa_Light',
                fontWeight: 100,
                fontStyle: 'normal',
              },
            ],
          },
        ],
      },
    ],
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
          // TODO:: zelfde environment maken als bij gkn
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
