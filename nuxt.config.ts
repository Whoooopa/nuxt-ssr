// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  appConfig: {
    ui: {
      primary: 'blue',
      gray: 'cool'
    },
    colorMode: {
      preference: 'system',
    }
  },

  routeRules: {
    '/csr': { ssr: false },
    '/isr': { isr: true },
    '/swr': { swr: true },
    '/prerender': { prerender: true },
    '/ssr': { ssr: true },
    '/': { redirect: '/ssr' }

  },

  modules: ["@nuxt/ui", "@pinia/nuxt"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  

  imports: {
    dirs: ["./stores/**"],
  },
})