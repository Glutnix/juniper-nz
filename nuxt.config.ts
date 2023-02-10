import { createResolver } from '@nuxt/kit'
const { resolve: resolveThemeDir } = createResolver(import.meta.url)

const titleTemplateFunction = function (titleChunk?: string): string {
  // If undefined or blank then we don't need the hyphen
  return titleChunk ? `🦨 ${titleChunk} - Juniper's Site 🦨` : "🦨 Juniper Skunktaur's Site 🦨";
};

console.log(resolveThemeDir('./assets/main.css'));
export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: [
    '@/assets/main.css',
  ],
  app: {
    head: {
      titleTemplate: titleTemplateFunction,
    },
  },
})
