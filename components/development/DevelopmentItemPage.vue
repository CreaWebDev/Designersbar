<template>
  <div class="w-screen px-4 md:px-10 md:pt-20">
    <p class="text-4xl md:text-6xl font-display text-left text-softRose pb-8">
      {{  props.app.title }}
    </p>
    <div class="flex flex-col md:flex-row md:justify-around md:flex-wrap px-4">
      <div class="flex flex-row justify-center md:justify-start space-x-2 md:space-x-8">
        <a :href="props.app.appLink">
          <img :src="props.app.imgDisplay1" class="w-24 md:w-40">
        </a>
        <a :href="props.app.appLink">
          <img :src="props.app.imgDisplay2" class="w-24 md:w-40">
        </a>
        <a :href="props.app.appLink">
          <img :src="props.app.imgDisplay3" class="w-24 md:w-40">
        </a>
      </div>
      <div class="flex flex-col md:w-96 max-md:pt-2 md:justify-center">
        <p class="text-xl text-textSoft ">{{ props.app.text }}</p>
        <p class="text-lg text-textSoft text-left pt-8 pb-12">{{ props.app.descriptiveText }}</p>
        <div class="flex flex-row justify-start md:justify-start text-textSoft">
            <a v-if="props.app.appLink" :href="props.app.appLink" target="_blank">
                <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faEye" />
            </a>
            <a v-if="props.app.githubLink" :href="props.app.githubLink" target="_blank">
                <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faGithub" />
            </a>
            <a v-if="props.app.fileLink" :href="props.app.fileLink" target="_blank">
                <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faFile" />
            </a>
            <a v-if="props.app.extraFile" :href="props.app.extraFile" target="_blank">
                <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faFile" />
            </a>
        </div>
      </div>
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
