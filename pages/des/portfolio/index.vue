<!-- this is the template for all children to portfolio -->
<template>
  <div class="flex flex-col md:flex-row justify-evenly">
    <div class="flex flex-col">
      <p class="text-rose font-medium text-4xl tracking-wide" style="font-family: Zeyada;">It´s me. Hi!</p>
      <p class="text-golden font-sans text-sm">
        I am Pia Roel, a frontend developer with clear focus on UX/UI and a passion for graphic design.<br>
        Design is my life. <br>
        <br>
        My personal style can be wild and organic, experimental, sometimes humoristic, but most of all it is very personal.<br>
      </p>
    </div>
    
    <section class="w-32 pt-8  md:pt-0 md:w-96">
      <img src="/images/me.png" class="z-20 rotate-12 hover:rotate-0 transition-all ">
    </section>
        
    <!-- <p class="text-rose pt-4">
        <a href="mailto:pia@creawebdev.dk"><font-awesome-icon icon="fa-solid fa-hand-spock" size="lg"></font-awesome-icon></a>
    </p> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

definePageMeta({
  layout: "des-layout",
})

useHead({
  title: "Portfolio",
})

const open = ref(false)
const route = useRoute()

const asideBarVisible = computed(() => {
  if(route.path == '/des/portfolio/designgallery' || route.path == '/des/portfolio/cv' || route.path == '/des/portfolio/workflow') {
    return false
  }
  return true
})

</script>
