// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
});
