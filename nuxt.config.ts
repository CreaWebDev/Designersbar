// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets", 
    public: "/<rootDir>/public"
  },

  modules: [
  // "@pinia/nuxt",
  ['@nuxtjs/google-fonts', {
    families: {
      Roboto: true,
      Zeyada: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  }], "@nuxtjs/i18n"],

  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    langDir: 'i18n',
    defaultLocale: 'en',
    skipSettingLocaleOnNavigate: false,
    vueI18n: './i18n.config.ts',
    locales: [
      { name: 'DA', code: 'da', file: 'da.json' },
      { name: 'EN', code: 'en', file: 'en.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
    },
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,
  compatibilityDate: '2024-10-18'
})