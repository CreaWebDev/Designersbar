
<template>
  <div class="w-2/3 pl-8">
    <p class="text-darkRose font-medium text-4xl tracking-wide" style="font-family: Zeyada;">{{  $t("design_headline") }}</p>
    <section class="hidden md:flex flex-row justify-start flex-wrap fixed top-20 right-2 z-40 md:right-0 md:sticky md:top-0  mt-4">
      <button v-for="filter in filters" @click="filterDesign(filter)"
        class="py-2 px-2 md:px-4 m-2 text-xs font-sans hover:text-darkRose rounded-lg hover:bg-rose transition-all"
        :class="currentFilter == filter ? 'bg-darkRose text-rose' : 'bg-golden text-rose'"
      >
        {{ filter }}
      </button>
      <button v-if="currentFilter != 'all'" @click="currentFilter = 'all'" 
        class="bg-golden py-2 px-4 m-2 text-xs font-sans text-rose hover:text-darkRose rounded-lg hover:bg-rose transition-all"
      >{{ toggleText }}</button>
    </section>
    
    <p class="text-golden pt-8 uppercase font-semibold" v-if="currentFilter == 'all'">
      {{ $t("design_logos") }}
    </p>
    <section class="flex flex-row flex-wrap justify-start">
      <div v-for="item in logoItems" >
        <DesignItem 
          v-if="currentFilter == item.type || currentFilter == 'all'"
          :title="item.title"
          :description="item.description"
          :bgImg="item.bgImg"
          :imgSize="item.imgSize"
          :frameSize="'w-56 h-56'"
        />
      </div>
    </section>
    
    <p class="text-golden pt-8 uppercase font-semibold" v-if="currentFilter == 'all'">
      {{ $t("design_graph_com") }}
    </p>
    <section class="flex flex-row flex-wrap justify-start">
      <div v-for="item in designItems" >
        <DesignItem 
          v-if="currentFilter == item.type || currentFilter == 'all'"
          :title="item.title"
          :description="item.description"
          :communication="item.communication"
          :bgImg="item.bgImg"
          :linkToExt="item.linkToExt"
          :imgSize="item.imgSize"
          :frameSize="item.frameSize? item.frameSize : 'w-56 h-56'"
        />
      </div>
    </section>
    <p class="text-golden pt-8 uppercase font-semibold" v-if="currentFilter == 'all'">
      {{ $t("design_pas_graph") }}
    </p>
    <section class="flex flex-row flex-wrap justify-start">
      <div v-for="item in passionItems" >
        <DesignItem 
          v-if="currentFilter == item.type || currentFilter == 'all'"
          :title="item.title"
          :description="item.description"
          :bgImg="item.bgImg"
          :imgSize="item.imgSize"
          :frameSize="'w-56 h-56'"
          :linkToExt="item.linkToExt"
        />
      </div>
    </section>
   
    <p class="text-golden pt-8 uppercase font-semibold" v-if="currentFilter == 'all'">
      {{ $t("design_vid_mot") }}
    </p>
    <section class="flex flex-row flex-wrap justify-start">
      <div v-for="item in motion">
        <DesignItem
          v-if="currentFilter == item.type || currentFilter == 'all'"
          :title="item.title"
          :description="item.description"
          :bgImg="item.bgImg"
          :imgSize="item.imgSize"
          :frameSize="'w-56 h-56'"
          :linkToExt="item.linkToExt"
          :videoLink="item.videoLink"
        />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DesignItem from '@/components/des/design/DesignItem.vue'

definePageMeta({
  layout: "des-layout",
})

useHead({
  title: "Design gallery",
})

const filters = ref(['Logos', 'Graphical Communication', 'Passion Graphics', 'Video & Motion'])
const currentFilter = ref('all')
const toggleText = ref('Show all')

const filterDesign = (currentF: string) => {
  currentFilter.value = currentF
}
const designItems = ref([
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', title: 'Visual identity', description: 'Visual identity incl. logo, brochures, biz cards etc. for the international book keeping system "Reconcilliation Express".', communication: 'The user is given a signal of total control, due to the checkmark', bgImg: '/images/design/recExp.png'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', title: 'Campaign', description: 'Concept, font and graphics for the winter bather´s club "Odins Vig"',  bgImg: '/images/design/kulden.png'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', frameSize:'w-56 h-auto', title: 'Poster', description: 'Poster for launching of new chair from Farstrup Furniture',  bgImg: '/images/design/black_oak_thumbnail.png', linkToExt: '/images/design/black_oak.pdf'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', frameSize:'w-56 h-auto', title: 'Poster', description: 'Commercial poster for from Farstrup Furniture',  bgImg: '/images/design/stolebus_thumbnail.png', linkToExt: '/images/design/stolebus_plakat.pdf'},
  {type: 'Graphical Communication' , imgSize: 'w-80 h-80', frameSize:'w-56 h-auto', title: 'SlideShow', description: 'SlideShow Presentation of Farstrup Furniture',  bgImg: '/images/design/farstrup_thumbnail.png', linkToExt: '/images/design/farstrup_present.pdf'},
])

const passionItems = ref([
  {type: 'Passion Graphics' , imgSize: 'w-80 h-auto', title: 'Poster Art', description: 'I really enjoy making art posters. My style is very personal, abstract, with a simple, graphical expression.',  bgImg: '/images/design/poster_slik.png'},
  {type: 'Passion Graphics' , imgSize: 'w-80 h-auto', title: 'Poster Art', description: 'One more art poster for the licorice lover',  bgImg: '/images/design/licLove.png'},
  {type: 'Passion Graphics' , imgSize: 'w-80 h-auto', title: 'Posters', description: 'Personal poster design for coffee lover.',  bgImg: '/images/design/coffee-posters.png'},
  {type: 'Passion Graphics' , imgSize: 'w-80 h-auto', title: 'Invitation', description: 'Personal invitations or greeting cards. I always have plenty of different ideas for layout and theme.',  bgImg: '/images/design/invite.jpg'},
  { type: 'Passion Graphics' , imgSize: 'w-48 md:w-60', title: 'Project report', 
    description: 'Project report for Multimedia Production', 
    bgImg: '/images/design/shortFlix.png', 
    linkToExt: '/images/design/shortflix-report.pdf'
  },
])

const logoItems = ref([
  {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Logo', description: 'Logo for my own web application "lillekunsner". Designed and constructed in Adobe Illustrator.', bgImg: '/images/design/logo_face.svg'},
  // {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Logo', description: 'My own brand logo. Also made with Adobe Illustrator and animated as svg.', bgImg: '/images/logo_anima/logo_anima.svg', displayImg: 'images/logo_anima/logo_anima_display.svg'},
  {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Logo', description: 'Logo for a thoughtful copy writer', bgImg: '/images/design/logo_fjer.png'},  
  {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Logo', description: 'Logo for the independent record company "Urban Precinct"', bgImg: '/images/design/urban.png'},
  {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Logo', description: 'Logo for a young lade who recently started her own beauty store.', bgImg: '/images/design/logo-vl.png'},
  {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Logo', description: 'Logo idea for shop that sells wedding accessories.', bgImg: '/images/design/lifeLong.png'},
  {type: 'Logos' , imgSize: 'w-80 h-auto', title: 'Monogram', description: 'The wedding monogram for my husband Peter and I.', bgImg: '/images/design/pp.png'},
])

const motion = ref([
  {type: 'Video & Motion' , imgSize: 'w-52 md:w-80 h-auto', title: 'Motion graphic', linkToExt: 'https://www.youtube.com/watch?v=VqBkUZZSzdU', description: 'I am quite the story teller, so getting ideas for videos and the making of these, comes natural to me. This video is a promotion Motion graphic of an augmented reality app for OFF.', bgImg: '/images/design/motion/motion.png'},
  {type: 'Video & Motion' , imgSize: 'w-80 h-auto', title: 'Advertising', description: 'Short commercial video for norwegian bike register', videoLink: '/images/design/motion/register.mp4', bgImg: '/images/design/motion/hipster.png'},
  {type: 'Video & Motion' , imgSize: 'w-80 h-auto', title: 'Advertising', description: 'Short commercial video for norwegian bike register', videoLink: '/images/design/motion/prisinfo.mp4', bgImg: '/images/design/motion/city_bikes.png'},
  // {type: 'Video & Motion' , imgSize: 'w-80 h-auto', title: 'Advertising', description: 'Short commercial video for norwegian bike register', videoLink: '/images/design/motion/lady_bike.mp4', bgImg: '/images/design/motion/girl.png'},
  // {type: 'Video & Motion' , imgSize: 'w-80 h-auto', title: 'Advertising', description: 'Short commercial video for norwegian bike register', videoLink: '/images/design/motion/huskatregistrere.mp4', bgImg: '/images/design/motion/city_guy.png'}
])


</script>