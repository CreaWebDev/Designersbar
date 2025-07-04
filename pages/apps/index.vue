<template>
    <div class="md:w-screen">
      <section class=" flex flex-col md:flex-row md:flex-wrap md:space-x-2 md:justify-evenly mt-12"> 
        <div v-for="(item, index) in Apps">
          <NuxtLink :to="`/apps/${index}`">
            <DevelopmentItem :app="item"/>
          </NuxtLink>
        </div>
      </section>
      <NuxtPage :apps="Apps"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import DevelopmentItem from '~/components/development/DevelopmentItem.vue'
  import apps from '@/static/apps.json'
  import { type AppItem } from '@/types/Models'
  
  definePageMeta({
    layout: "main-layout",
  })
  
  useHead({
    title: "Portfolio",
  })
  
  const Apps = ref<AppItem[]>()

  onMounted(() => {
    Apps.value = apps
  })
  
  </script>
  