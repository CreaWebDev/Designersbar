<template>
  <div class="p-4 -rotate-12 ">
    <button
      class="z-50 w-40 h-80 rounded-lg border-2 hover:border-4 border-darkRose flex flex-col justify-center transition-all scale-90 md:scale-100"
      :class="isOpen? 'z-50 mx-72 ': 'z-0'"
      style="background-color: rgba(128, 101, 67, 0.2);"
      :style="isOpen?  'transform: rotate(-78deg) scale(1.5)' : ''"
      @click="openModal()"
      @focusout="closeModal"
    >
      <div v-if="!isOpen" class="flex flex-col space-y-8">
        <h3 class="text-lg font-bold text-golden px-4">{{ props.title }}</h3>
        <img :src="props.graphicDisplayImg" 
          class="place-self-center"
          :class="props.imgClass"
        >
      </div>
      <div v-if="isOpen" 
        class="rotate-90 absolute rounded-lg top-2 p-4 scale-75 md-scale-100"
        :class="props.oddSizeClass"
      >
        <img :src="props.imgDisplay" >
      </div>
      <div v-if="isOpen" class="scale-50">
        <div class="rotate-90 absolute top-20 w-72 flex flex-col text-left">
          <h3 class="text-lg font-bold text-golden px-4">{{ props.title }}</h3>
          <p class="text-sm font-sans px-4 pt-4 text-golden">{{ props.description }}</p>
          <div class="flex flex-row">
            <a :href="props.linkToPdf" v-if="props.linkToPdf">
              <p class="text-sm font-sans px-4 pt-4 text-darkRose hover:font-bold">
                Bonus info
              </p>
            </a>
            <a :href="props.linkToExt" v-if="props.linkToExt" target="_blank">
              <p class="text-sm font-sans px-4 pt-4 text-darkRose hover:font-bold">
                Click to view
              </p>
            </a>
            <a :href="props.linkToGit" v-if="props.linkToGit" target="_blank">
              <p class="text-sm font-sans px-4 pt-4 text-darkRose hover:font-bold">
                GitHubRepo
              </p>
            </a>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['title', 'description', 'graphicDisplayImg', 'imgDisplay', 'imgClass', 'oddSizeClass', 'linkToGit', 'linkToPdf','linkToExt'])
const emit = defineEmits<{
   (e: "openModal"): void 
   (e: "closeModal"): void 
}>()


const isOpen = ref(false)

const openModal = () => {
  emit("openModal")
  isOpen.value = true
}

const closeModal = () => {
  emit("closeModal")
  // delay just a bit or external links won´t open
  setTimeout(delayCloseModal, 300)
}

const delayCloseModal = () => {
  isOpen.value = false
}

window.onscroll = () => {
}
</script>