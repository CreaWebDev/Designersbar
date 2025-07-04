<template>
  <section class="flex flex-col">
    <div class="flex flex-col max-md:px-4">
      <div v-for="(po, index) in portFolioItems">
        <PortfolioItem
          :appIndex="index"
          :imgFile="po.imgFile"
          :imgBg="po.imgBg"
          :displaysize="po.displaySize"
          :imgclass="po.imgClass"
          :title="po.title"
          :text="po.text" 
          :tagline="po.tagline"
        />
          <!-- <AnimatedComponent animationType="zoom">
          </AnimatedComponent> -->
        </div>
    </div>
    <p class="hidden md:block text-textSoft opacity-75 text-4xl md:text-6xl tracking-wide my-12 px-8">
      View more:
      <MainNavigation></MainNavigation>
    </p>
  </section>
</template>
  
  <script setup lang="ts">
  import PortfolioItem from '@/components/portfolio/PortfolioItem.vue'
  import AnimatedComponent from '../generic/AnimatedComponent.vue';
  import MainNavigation from '../navigation/MainNavigation.vue';

  const props = defineProps([''])

  const portFolioItems = ([
    { 
      imgFile: '/images/design/vlv_bottle.png', displaySize: '', imgBg: 'vlv_bg.png',
      imgClass: 'text-textSoft', appLink: 'https://vinolavida.dk',
      fileLink: 'ux/styletiles-vlv.pdf', tagline: 'Wine is constant proof that God loves us and wants to see us happy.',
      title: 'Vino La Vida', text: 'Concept & Ideation  |  UI/UX Design |  Development'
    },
    { 
      imgFile: '/images/design/lk_display.png',  displaySize: '',
      imgClass: 'text-textSoft', appLink: 'https://lillekunstner.dk',
      fileLink: 'ux/styletiles-lk.pdf', tagline: 'You didn´t know, you have a little artist at home?',
      title: 'Lillekunstner', text: 'Concept & Ideation  |  UI/UX Design |  Development'
    },
    { 
      imgFile: '/images/design/sf-display.png',  displaySize: '',
      imgClass: 'text-textSoft', appLink: 'ux/mockup.png', tagline: 'Life is too short. Shortfilms are not',
      title: 'ShortFlix', text: 'Mockup  | UI/UX Design  |  Logo design'
    }
  ])

  
</script>

<style lang="css">

</style>

  
