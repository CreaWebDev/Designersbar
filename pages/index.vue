<template>
  <div class="w-full md:w-3/4">
    <div class="md:mt-12 px-4 md:px-12">
      <div class="flex space-x-2 md:space-x-4 text-textSoft opacity-75 text-3xl md:text-6xl tracking-wide">
        <h3>a digital</h3>
        <h3>design</h3>
        <h3>&</h3>
      </div>
      <div class="flex space-x-2 md:space-x-4 text-textSoft opacity-75 text-3xl md:text-6xl tracking-wide">
        <h4>development</h4>
        <h4>portfolio</h4>
      </div>
    </div>
    
    <div class="flex md:flex-row flex-wrap justify-end w-full md:w-3/4 my-8 text-textSoft md:py-12 px-8 md:px-12">
      <p :style="isMobile ? 'column-count: 1' : 'column-count: 2' ">Welcome to the bar! The bar owner is me, Pia, a graphical/digital designer and frontend developer.<br><br>
      I currently work freelance on digital projects, including my own, but I am open for the right job offer.<br><br>
      Design is my life. Creativity  is my most important skill, and I use it in everything I do.<br>
      My style can be wild and organic, experimental, sometimes humoristic, but most of all it is very personal.<br><br>
      Designing is more than going crazy on colors and graphics. I love the challenge in targeting
      the right audience. <br>The user is always on my mind.</p>
    </div>
    
      <p class="text-textSoft opacity-75 text-3xl md:text-6xl tracking-wide my-4 md:my-12 pl-4 md:px-8">
        a selection of my work:
      </p>
        <PortfolioItems />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import PortfolioItems from '~/components/portfolio/PortfolioItems.vue'

useHead({
  title: "Portfolio",
})

definePageMeta({
  layout: "main-layout",
})

const windowInnerWidth = ref(1)

const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})

onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})

</script>

<style scoped lang="css">

h3:nth-child(2), h4:nth-child(1) {
  color: #a26e84; 
}

</style>