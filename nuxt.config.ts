// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '@': resolve(__dirname, '/') },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/index.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
