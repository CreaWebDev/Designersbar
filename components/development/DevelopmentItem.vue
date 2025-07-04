<template>
  <div 
      class="w-full flex flex-col pb-10 w-72 md:w-80"
      :class="props.app.imgclass"
  >
      <p class="text-4xl font-display text-center text-softRose pb-4">{{  props.app.title }}</p>
      <div class="flex flex-col ">
        <a :href="props.app.appLink" target="_blank">
          <img :src="props.app.imgFile" class="rounded-lg">
        </a>
      </div>
      <p class="text-sm text-textSoft text-center py-4">{{ props.app.text }}</p>
      <div class="flex flex-row justify-center text-textSoft ">
          <a v-if="props.app.appLink" :href="props.app.appLink" target="_blank">
              <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faEye" />
          </a>
          <a v-if="props.app.githubLink" :href="props.app.githubLink" target="_blank">
              <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faGithub" />
          </a>
          <a v-if="props.app.fileLink" :href="props.app.fileLink" target="_blank">
              <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faFile" />
          </a>
      </div>
  </div>

</template>

<script setup lang="ts">
import { faGithub }  from '@fortawesome/free-brands-svg-icons'
import { faEye, faFile } from '@fortawesome/free-solid-svg-icons'

import { type AppItem } from '@/types/Models'

const props = defineProps<{
  app: AppItem
}>()

</script>
