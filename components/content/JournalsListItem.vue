<script setup lang="ts">
type Journal = {
  _path: string
  title: string
  date: string
  description: string
}

defineProps({
  journal: {
    type: Object,
    required: true,
    validator: (value: Journal) => {
      if (value?._path && value.title) { return true }
      return false
    }
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article v-if="journal._path && journal.title" :class="{ 'featured': featured }">
    <div class="image">
      <NuxtLink :to="journal._path">
        <NuxtImg v-if="journal.cover" :src="journal.cover" :alt="journal.title" />
      </NuxtLink>
    </div>

    <div class="content">
      <NuxtLink :to="journal._path" class="headline">
        <h1>
          {{ journal.title }}
        </h1>
      </NuxtLink>

      <p class="description">
        {{ journal.description }}
      </p>
      <time>
        {{ formatDate(journal.date) }}
      </time>
    </div>
  </article>
</template>

<style scoped lang="ts">
css({
  article: {
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.4}',
    '&.featured': {
      '@md': {
        flexDirection: 'row',
        gap: '{space.8}',
      }
    },
    img: {
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      borderRadius: '{radii.md}',
    },
    '.image': {
      flex: 1,
    },
    '.content': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      '.headline': {
        text: '2xl',
        marginBottom: '{space.2}',
        fontWeight: '{fontWeight.semibold}',
        lineClamp: 2,
        '.featured &&': {
          text: '4xl',
          lineClamp: 3,
        },
      },
      '.description': {
        marginBottom: '{space.4}',
        lineClamp: 2,
        '.featured &&': {
          lineClamp: 4,
        }
      },
      time: {
        text: 'sm',
        // TODO: add secondary color token
        color: '{color.gray.500}',
        '@dark': {
          color: '{color.gray.500}',
        }
      }
    },
  }
})
</style>
