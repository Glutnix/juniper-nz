<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'journals'
  }
})

// @ts-ignore
const { data: _journals } = await useAsyncData('journals', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())
const journals = computed(() => _journals.value || [])
console.log(journals);
</script>

<template>
  <div v-if="journals?.length" class="journals-list">
    <div class="featured">
      <JournalsListItem :journal="journals[0]" :featured="true" />
    </div>
    <div class="layout">
      <JournalsListItem v-for="(journal, index) in journals.slice(1)" :key="index" :journal="journal" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no journals yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">creating</ProseA> one in the <ProseCodeInline>journals</ProseCodeInline> folder.
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.journals-list': {
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.featured': {
      my: '{space.12}',
      '@md': {
        my: '{space.8}',
      }
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
      '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '{space.8}',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
    }
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
</style>
