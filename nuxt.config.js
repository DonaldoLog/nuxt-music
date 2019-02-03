module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'app-music-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/plugins/plugins.js'
  ],
  modules: [
    ['nuxt-i18n', {
      locales: ['en', 'es'],
      defaultLocale: 'en',
      vueI18n:{
        fallbackLocale: 'en',
        messages : {
          en: {
            search: 'Search',
            about: 'About',
            searchPlaceHolder: 'Search songs...',
            responseSearch: 'Results: ',
            loading: 'Loading...',
            errorNotif: 'Something went wrong'
          },
          es: {
            search: 'Buscar',
            about: 'Nosotros',
            searchPlaceHolder: 'Buscar canciones...',
            responseSearch:'Encontrados: ',
            loading: 'Cargando...',
            errorNotif:'Algo salio mal'
          }
        }
      }
    }]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

