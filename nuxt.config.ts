import { createResolver } from '@nuxt/kit'
const { resolve: resolveThemeDir } = createResolver(import.meta.url)
console.log(resolveThemeDir('./assets/main.css'));
export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: [
    '@/assets/main.css',
  ]
})
