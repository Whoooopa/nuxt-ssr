// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    componentIslands: {
      selectiveClient: true, // "deep" or "true" https://nuxt.com/docs/guide/directory-structure/components#server-components
    },
  },

  appConfig: {
    ui: {
      primary: 'blue',
      gray: 'cool'
    },
    colorMode: {
      preference: 'system',
    }
  },

  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/image"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  

  imports: {
    dirs: ["./stores/**"],
  },
})