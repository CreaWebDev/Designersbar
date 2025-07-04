<template>
  <div 
      class="md:w-full flex flex-col justify-center pb-10"
      :class="props.imgclass"
  >
    <p class="text-4xl font-display text-center text-softRose pb-4">
        {{  props.title }}
    </p>
      <div 
        class="flex flex-col justify-center place-self-center"
        :class="props.displaysize"
      >
        <a :href="props.appLink" target="_blank">
            <img :src="props.imgFile" class="rounded-lg">
        </a>
      </div>
      <p class="text-sm text-textSoft text-center py-4">
        {{ props.text }}
      </p>
      <div class="flex flex-row justify-center">
        <a v-if="props.appLink" :href="props.appLink" target="_blank">
            <font-awesome-icon class="px-4" size="lg" :icon="faEye" />
        </a>
        <a v-if="props.githubLink" :href="props.githubLink" target="_blank">
            <font-awesome-icon class="px-4" size="lg" :icon="faGithub" />
        </a>
        <a v-if="props.fileLink" :href="props.fileLink" target="_blank">
            <font-awesome-icon class="px-4" size="lg" :icon="faFile" />
        </a>
      </div>
  </div>

</template>

<script setup lang="ts">
import { faGithub }  from '@fortawesome/free-brands-svg-icons'
import { faEye, faFile } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  imgFile: String,
  appLink: String,
  githubLink: String,
  fileLink: String,
  displaysize: String,
  imgclass: String,
  title: String,
  text: String
})

</script>
