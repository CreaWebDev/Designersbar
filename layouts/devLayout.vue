<template>
  <div class="bg-gradient-to-r from-mint to-soft h-screen flex overflow-x-hidden">
    <div class="">
      <MainHeader />
      <main class="">
        <Container class="grow">
          <slot />
        </Container>
      </main>
    </div>
    <div class="fixed bottom-4 pl-8">
      <Footer />
    </div>
  </div>
      
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from "~/components/generic/Container.vue"
import MainHeader from '~/components/dev/layout/MainHeader.vue'
import Footer from '~/components/dev/layout/Footer.vue'

const windowInnerWidth = ref(1)
const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})


onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})
</script>