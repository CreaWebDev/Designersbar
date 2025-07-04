
<template>
  <div class="mt-8 px-12">
    <div class="flex space-x-4 text-textSoft opacity-75 text-6xl tracking-wide">
        <h3>The</h3>
        <h3>
          Customer
        </h3> 
        <h3>is always right</h3>
      </div>
    

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DesignItem from '@/components/design/DesignItem.vue'

definePageMeta({
  layout: "main-layout",
})

useHead({
  title: "Ux",
})

const designItems = ref([
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', title: 'Visual identity', description: 'Visual identity incl. logo, brochures, biz cards etc. for the international book keeping system "Reconcilliation Express".', communication: 'The user is given a signal of total control, due to the checkmark', bgImg: '/images/design/recExp.png'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', title: 'Campaign', description: 'Concept, font and graphics for the winter bather´s club "Odins Vig"',  bgImg: '/images/design/kulden.png'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', frameSize:'w-56 h-auto', title: 'Poster', description: 'Poster for launching of new chair from Farstrup Furniture',  bgImg: '/images/design/black_oak_thumbnail.png', linkToExt: '/images/design/black_oak.pdf'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', frameSize:'w-56 h-auto', title: 'Poster', description: 'Commercial poster for from Farstrup Furniture',  bgImg: '/images/design/stolebus_thumbnail.png', linkToExt: '/images/design/stolebus_plakat.pdf'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', frameSize:'w-56 h-auto', title: 'SlideShow', description: 'SlideShow Presentation of Farstrup Furniture',  bgImg: '/images/design/farstrup_thumbnail.png', linkToExt: '/images/design/farstrup_present.pdf'},
])

</script>

<style scoped lang="css">

h3:nth-child(2) {
  color: #479860; 
}

</style>