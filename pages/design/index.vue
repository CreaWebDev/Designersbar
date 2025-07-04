
<template>
  <div class="md:mt-12 md:px-12">
    <div class="flex ml-4 md:hidden text-textSoft opacity-75 text-3xl tracking-wide">
      some designs of mine
    </div>
    <p class="text-textSoft text-center md:text-left opacity-75 text-4xl md:text-6xl tracking-wide my-8 md:px-8">
      poster art:
    </p>
    
    
    <section class="flex flex-col max-md:place-self-center md:flex-row md:flex-wrap md:justify-around">
      <div v-for="item in posterElements" class="w-60 md:w-80">
        <DesignItem 
          :imgFile="item.imgFile"
          :text="item.text" 
        />
      </div>
    </section>

    <p class="text-textSoft text-center md:text-left opacity-75 text-4xl md:text-6xl tracking-wide my-8 md:px-8">
      layout:
    </p>
    <section class="flex flex-col max-md:place-self-center md:flex-row md:flex-wrap md:justify-around">
      <div v-for="item in layoutElements" :class="item.imgSize">
        <DesignItem 
          :imgFile="item.imgFile"
          :imgclass="item.imgClass"
          :text="item.text" 
        />
      </div>
    </section>
    <p class="text-textSoft text-center md:text-left opacity-75 text-4xl md:text-6xl tracking-wide my-8 md:px-8">
      graphic design:
    </p>
    <section class="flex flex-col max-md:place-self-center md:flex-row md:flex-wrap md:justify-around">
      <div v-for="item in graphicDesignElements" :class="item.imgSize">
        <DesignItem 
          :imgFile="item.imgFile"
          :imgclass="item.imgClass"
          :text="item.text" 
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import DesignItem from '@/components/design/DesignItem.vue'
import AnimatedComponent from '~/components/generic/AnimatedComponent.vue';

definePageMeta({
  layout: "main-layout",
})

useHead({
  title: "Design gallery",
})

const posterElements = ([
  { 
    imgFile: '/images/design/poster_slik.png', imgSize: 'w-60 md:w-80',
    imgClass: 'text-softRose', 
    title: '', text: 'Ideation  |  Design'
  },
  { 
    imgFile: '/images/design/liclove.png', imgSize: 'w-60 md:w-80',
    imgClass: 'text-softRose', 
    title: '', text: 'Ideation  |  Design'
  },
  { 
    imgFile: '/images/design/coffee-posters.png', imgSize: 'w-60 md:w-80',
    imgClass: 'text-softRose', 
    title: '', text: 'Ideation | Passion |  Design'
  },
])

const graphicDesignElements = ([
    { 
      imgFile: '/images/design/young_graphic.png', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'Personal Invitation', text: 'Ideation  |  Graphic elements '
    },
    { 
      imgFile: '/images/design/invite.jpg', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'Personal Invitation', text: 'Ideation  |  Design  |  Print & Cut'
    },
    { 
      imgFile: '/images/design/urban.png', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'Urban Precinct', text: 'Ideation  |  Logo Design '
    },
     { 
      imgFile: '/images/design/logo_v.png', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'Victoria Lashes', text: 'Logo Design  |  Color palette'
    },
    { 
      imgFile: '/images/design/kulden.png', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'Kulden til velvære', text: 'Ideation & Concept  |  Logo Design'
    },
    { 
      imgFile: '/images/design/recExp.png', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'Visuel identity', text: 'Logo Design  |  Brochure | Design manual'
    },
    { 
      imgFile: '/images/design/lifeLong.png', imgSize: 'w-60 md:w-80',
      imgClass: 'text-softRose', 
      title: 'love', text: 'Logo design  |  Ideation & concept'
    }
  ])

  const layoutElements = ([
    { 
      imgFile: '/images/design/black_oak.jpg', imgSize: 'w-60 md:w-96',
      imgClass: 'text-softRose', 
      title: 'Chair', text: 'Layout  |  Copy writing'
    },
    { 
      imgFile: '/images/design/layout/forårskup.png', imgSize: 'w-60 md:w-96',
      imgClass: 'text-softRose', 
      title: 'Forårskup', text: 'Layout  |  Copy writing'
    },
    { 
      imgFile: '/images/design/layout/farstrup.png', imgSize: 'w-60',
      imgClass: 'text-softRose', 
      title: 'Stolebus', text: 'Layout  |  Copy writing'
    },
    { 
      imgFile: '/images/design/layout/plakat_dgae.png', imgSize: 'w-60',
      imgClass: 'text-softRose', 
      title: 'Stolebus', text: 'Layout  |  Graphic elements'
    }
  ])

</script>

<style scoped lang="css">

h3:nth-child(1) {
  color: #cfbc81; 
}

</style>