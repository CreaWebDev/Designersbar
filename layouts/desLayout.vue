<template>
  <div class="bg-gradient-to-r from-soft to-mint h-full flex">
    <div class="">
      <MainHeader />
      <main class="">
        <Container class="grow z-10 my-8">
          <slot />
        </Container>
      </main>
      <div v-show="bubbleUp" class="hidden md:block w-80 fixed bottom-0 right-96 transition-all">
        <img class="" src="/images/bubbles.svg">
      </div>
    </div>
    <div class="md:hidden z-50 fixed bottom-4 right-4">
        <LangSwitch />
    </div>
    <div class="fixed bottom-4 pl-8">
      <Footer />
    </div>
    
  </div>
      
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from "~~/components/des/layout/Container.vue"
import MainHeader from '~/components/des/layout/MainHeader.vue'
import Footer from '~/components/des/layout/Footer.vue'
import LangSwitch from '@/components/generic/LangSwitch.vue'

const windowInnerWidth = ref(1)
const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})
const bubbleUp = ref(false)
window.onscroll = () => {
  bubbleUp.value = true
  setTimeout(() => {
    bubbleUp.value = false}, 3000)
}

onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})
</script>