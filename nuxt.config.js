const site = {
  name: "Kapsalon Ans",
  description: "De website van kapsalon Ans ter Soest",
  url: "https://kapsalonanssoest.nl",
  keywords:
    "Ans, kapsalon, Soest, Ros, leuke, goede, goeie, kapper, kapster, Baarn, knippen, haar, wax, hairextensions, haarextensions, highlights, afspraak, openingstijden, contact",
};
export default {
  ssr: false,
  target: "static",

  head: {
    title: site.name,
    htmlAttrs: {
      lang: "NL",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: site.description },
      { name: "subject", content: `Website ${site.name} Soest` },
      { name: "language", content: "nl/NL" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "author", content: site.name },
      { name: "keywords", content: site.keywords },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { property: "og:title", content: `${site.name}` },
      { name: "og:type", content: "website" },
      { property: "og:url", content: "<%= BASE_URL %>" },
      { property: "og:site_name", content: `${site.name}` },
      { property: "og:description", content: `Website ${site.name} Soest` },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" }],
    script: [
      {
        src: "https://ig.instant-tokens.com/users/51f66933-3d37-44f7-a892-de04dd691753/instagram/17841406972317672/token.js?userSecret=9rhiah0i6anwi5b8n4rs9f",
        body: true,
      },
      // {
      //   innerHTML:
      //     "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-JBFXQQT4LY');",
      //   type: "text/javascript",
      //   charset: "utf-8",
      // },
      // {
      //   async: true,
      //   type: "text/javascript",
      //   charset: "utf-8",
      //   src: "https://www.googletagmanager.com/gtag/js?id=G-JBFXQQT4LY",
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "leaflet/dist/leaflet.css", lang: "css" },
    { src: "assets/sass/base/base.scss", lang: "scss" },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "plugins/owl.js", mode: "client" },
    {
      src: "./plugins/GoogleAnalytics.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/svg"],
  modules: [
    "nuxt-leaflet",
    "nuxt-rfg-icon",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/component-cache",
    [
      "nuxt-font-loader-strategy",
      {
        ignoredEffectiveTypes: ["2g", "slow-2g"],
        fonts: [
          {
            // TODO:: dit font is te dik. als het scherm niet retina is
            fileExtensions: ["ttf"],
            fontFamily: "Muli",
            fontFaces: [
              {
                preload: true,
                src: "@/assets/fonts/Muli",
                fontWeight: 300,
                fontStyle: "light",
              },
            ],
          },
          {
            fileExtensions: ["ttf"],
            fontFamily: "Nexa",
            fontFaces: [
              {
                preload: true,
                src: "@/assets/fonts/Nexa_Light",
                fontWeight: 100,
                fontStyle: "normal",
              },
            ],
          },
        ],
      },
    ],
  ],

  sitemap: {
    hostname: site.url,
  },

  robots: {
    UserAgent: "*",
    allow: "/",
    Sitemap: `${site.url}/sitemap.xml`,
  },

  build: {
    loaders: {
      scss: {
        sourceMap: true,
        implementation: require("sass"),
        additionalData: `@import "@/assets/sass/vars/vars.scss";`,
      },
    },
  },
};
