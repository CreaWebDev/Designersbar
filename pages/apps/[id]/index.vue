<template>
  <div class="hidden md:flex flex-col md:flex-row space-x-8 ml-12">
    <p class="text-textSoft text-lg font-display">
      All apps:
    </p>
    <div v-for="(app, index) in currentApp">
      <NuxtLink :to="'/apps/' + index">
        <p class="uppercase hover:text-softRose text-lg"
          :class="app.title == CurrentApp?.title ? 'text-superGreen' : 'text-textSoft' "
        >
          {{ app.title }}
        </p>
      </NuxtLink>
    </div>
  </div>
    <DevelopmentItemPage :app="CurrentApp"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DevelopmentItemPage from '~/components/development/DevelopmentItemPage.vue'
import { type AppItem } from '@/types/Models'
import currentApp from '@/static/apps.json'

const route = useRoute()
const appId = parseInt(route.params.id)

const CurrentApp = ref<AppItem>()

definePageMeta({
  layout: "main-layout",
})
  
useHead({
  title: "Portfolio",
})

onBeforeMount(() => {
  CurrentApp.value = currentApp[appId]
})
</script>