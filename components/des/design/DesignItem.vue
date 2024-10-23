<template>
  <div class="flex flex-col p-4 m-4">
    <button 
      :class="props.frameSize"
      class="rounded-lg relative bg-rose border-4 border-mint flex flex-col justify-center z-30"
      @click="openModal = true"
      @focusout="closeModal"
    >
      <img :src="props.bgImg" class="">
    </button>
  </div>
  <div 
    v-if="openModal == true" 
    style="background-color: rgba(219, 191, 203, 0.9);"
    class="w-full md:w-3/4 h-auto fixed left-0 md:left-20 top-20 flex flex-col md:flex-row border-4 border-mint rounded-lg px-12 py-8 z-50 transition-all"
  >
    <video v-if="props.videoLink" width="320" height="320" controls autoplay>
      <source
        :src="props.videoLink"
        type="video/mp4"
      />
        Your browser does not support the video tag.
    </video>
    <img v-if="!props.videoLink"
      :src="props.displayImg? props.displayImg : props.bgImg"
      :class="props.imgSize"
      class="self-center"
    >
    <div class="place-self-center">
      <button @click="closeModal"
        class="absolute top-4 right-4 text-rose hover:text-darkRose"
      >
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
      <h3 class="text-lg font-bold text-golden px-4">{{ props.title }}</h3>
      <p class="text-sm font-sans px-4 pt-4 text-golden">{{ props.description }}</p>
      <!-- <p class="text-sm font-sans px-4 pt-4 text-golden">Communicating: {{ props.communication }}</p> -->
      <a :href="props.linkTo" v-if="props.linkTo">
        <p class="text-sm font-sans px-4 pt-4 text-darose hover:text-darkRose">
          Click to view
        </p>
      </a>
      <a :href="props.linkToExt" v-if="props.linkToExt" target="_blank">
        <p class="text-sm font-sans px-4 pt-4 text-rose hover:text-darkRose">
          Click to view
        </p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['title', 'description', 'communication', 'bgImg', 'displayImg', 'imgSize', 'frameSize', 'videoLink', 'linkTo', 'linkToExt'])
const openModal = ref(false)

const closeModal = () => {
  // delay just a bit or external links won´t open
  setTimeout(delayCloseModal, 300)
}

const delayCloseModal = () => {
  openModal.value = false
}
</script>