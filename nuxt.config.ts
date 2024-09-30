import type { ModuleOptions } from '@nuxtjs/sitemap'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // 仅在服务器端可用的私有密钥
    openaiApiKey: process.env.OPENAI_API_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    stripeServerKey: process.env.STRIPE_SERVER_KEY,
    // 公开的键，也会暴露给客户端
    public: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      stripeClientKey: process.env.STRIPE_CLIENT_KEY,
      publicUrl: process.env.PUBLIC_URL
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-08-19',
  modules: [
    '@nuxtjs/sitemap',
    "@unlok-co/nuxt-stripe",  
    '@nuxtjs/i18n',
  ],
  sitemap: <Partial<ModuleOptions>>{
    hostname: 'https://headshotgenerator.net',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    routes: [
      '/',
      '/terms',
      '/privacy',
      '/refund',
      '/links',
      '/success',
      '/cancel',
      '/blog',
      '/price',
      '/contact'
    ]
  },
  stripe: {
    // Server
    server: {
      key: process.env.STRIPE_SERVER_KEY,
      options: {
        maxNetworkRetries: 1,
        telemetry: true,
        // https://github.com/stripe/stripe-node?tab=readme-ov-file#configuration
      },
      // CLIENT
    },
    client: {
      key: process.env.STRIPE_CLIENT_KEY,
      // your api options override for stripe client side https://stripe.com/docs/js/initializing#init_stripe_js-options
      options: {},
    },
  },
  site: {
    url: 'https://headshotgenerator.net',
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' },
      { code: 'de', language: 'de-DE' }
    ],
    defaultLocale: 'en',
    lazy: true,
    strategy: 'prefix_except_default',
  }
})

