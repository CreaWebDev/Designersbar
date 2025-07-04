<template>
  <div class="bg-bgDark">
    <MainHeader />
    <main class="">
      <Container class="grow z-10 my-8 ">
        <slot />
      </Container>
    </main>
    <div class="max-md:mb-12">
      <Footer />
    </div>
    
  </div>
      
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from "~~/components/layout/Container.vue"
import MainHeader from '~/components/layout/MainHeader.vue'
import Footer from '~/components/layout/Footer.vue'
import LangSwitch from '@/components/generic/LangSwitch.vue'

// ToDo - make global
const windowInnerWidth = ref(1)
const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})

onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})

</script>

<style lang="css">
html {
  scroll-behavior: smooth;
}

</style>