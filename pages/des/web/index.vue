<template>
    <div class="w-screen h-1/1 pb-32 flex flex-col justify-center md:justify-start pl-8">
      <p class="text-darkRose font-medium text-2xl md:text-4xl tracking-wide" style="font-family: Zeyada;">
      {{ $t("web_headline")}}
      </p>
      <section class="w-5/6 md:w-3/5 border border-golden rounded-lg"> 
        <div ref="horizontal_scroll" 
          class="p-8 flex flex-row justify-around md:overflow-x-hidden overflow-x-scroll md:overflow-y-hidden"
        >
          <div v-for="item in web" >
            <DisplayItem 
              :title="item.title"
              :description="item.description"
              :graphicDisplayImg="item.graphicDisplayImg"
              :imgDisplay="item.imgDisplay"
              :imgClass="item.imgClass"
              :linkToExt="item.linkToExt"
              :linkToGit="item.linkToGit"
            />
          </div>
          <div v-for="item in docs">
            <DisplayItem
              :title="item.title"
              :description="item.description"
              :graphicDisplayImg="item.graphicDisplayImg"
              :imgDisplay="item.imgDisplay"
              :imgClass="item.imgClass"
              :oddSizeClass="item.oddSizeClass"
              :linkToExt="item.linkToExt"
            />
          </div>
        </div>
      </section>
      <!-- <p class="text-darkRose font-medium text-sm pt-2">
        [ Horizontal scroll ]
      </p> -->
      <NuxtPage />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  
  import DisplayItem from '@/components/dev/web/DisplayItem.vue'
  
  definePageMeta({
    layout: "des-layout",
  })
  
  useHead({
    title: "Portfolio",
  })
  
  const web = ref([
    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-32', title: 'Web App (SPA)', 
      linkToGit: 'https://github.com/CreaWebDev/lillekunstner', linkToExt: 'https://lillekunstner.dk', 
      description: 'My dream for a side geschäft "Lillekunstner", making art from children´s drawings, still in progress. I have done the coding and styling myself with Vue3 & TailwindCSS. All the graphics used on the site is made from children´s drawings.', 
      graphicDisplayImg: '/images/design/face.png', imgDisplay: '/images/design/lk.png'
    },
    
    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-24 ', title: 'Web App (SPA)', 
      linkToGit: 'https://github.com/CreaWebDev/VinoLaVida', linkToExt: 'https://vinolavida.dk', 
      description: 'My own idea for a wine tasting app, still in progress. I have done the coding and styling myself with Vue3 & TailwindCSS', 
      graphicDisplayImg: '/images/design/vino.png', imgDisplay: '/images/design/vino.jpg'
    },
    
    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-40', title: 'This portfolio',  
      linkToGit: 'https://github.com/CreaWebDev/Designersbar', 
      description: 'My  own website, this portfolio. All design and graphics are my own. I continously improve it and try out my ideas', 
      graphicDisplayImg: '/images/bubbles_graphic.svg', imgDisplay: '/images/bubbles_graphic.png'
    },

    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-44', title: 'Vanilla JS',  
      linkToGit: 'https://github.com/CreaWebDev/fun-with-javascript', linkToExt: 'https://vanillafun.netlify.app/', 
      description: 'Fun with good old JavaScript.The most simple setup, an index-file and linked css-file. Hosted on Netlify', 
      graphicDisplayImg: '/images/design/funJS.png', imgDisplay: '/images/design/funJS.png'
    },
  
    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-34', title: 'First Angular App',  
      linkToGit: 'https://github.com/CreaWebDev/Movies',
      description: 'One small app but one giant step for me;-) A project for a job interview, made with Angular', 
      graphicDisplayImg: '/images/design/popcorn.png', imgDisplay: '/images/design/popcorn.png'
    },

    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-5/6 rotate-90 ', title: 'Mockup', 
      linkToExt: '/images/design/mockup.png', 
      description: 'This is a mockup from a school project "ShortfliX", a short film platform for international film makers. All graphics are designed by me, including the logo.', 
      graphicDisplayImg: '/images/design/logo.png', imgDisplay: '/images/design/mockup.png'
    },
  
    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-5/6', title: 'Prototype', 
      linkToExt: 'https://xd.adobe.com/view/6057b3b8-3dbd-4679-7e79-213b4ac0cc24-1666/', 
      description: 'This is a clickable prototype made with Adobe XD, for Givskud Zoo as a school project. The app is for mobile only.', 
      graphicDisplayImg: '/images/design/marker.svg', imgDisplay: '/images/design/app.png'
    },
  
    { type: 'Web Design & UX' , imgClass: 'w-2/3 md:w-4/6', title: 'Prototype', 
      linkToExt: 'https://xd.adobe.com/view/a63711af-7ffe-4b96-96d0-ad4261eeab00-f364/?fullscreen', 
      description: 'This image shows the moodboard I made for the school project "ShortfliX", a short film platform for international film makers. A clickable prototype was also made with Adobe XD, mobile only.',
      graphicDisplayImg: '/images/design/clip.png', imgDisplay: '/images/design/shortflix.jpg'
    },
  ])
  
  const docs = ref([
    { type: 'Documentation' , imgClass: 'w-2/3 md:w-5/6', oddSizeClass: 'w-28 place-self-center', title: 'Style tile', 
      description: 'Style tile for SDU app, a display of all UI elements used.', 
      graphicDisplayImg: '/images/design/sdu_icon.png', imgDisplay: '/images/design/sdu.png', linkToExt: '/images/design/sdu.png'
    },
  
    { type: 'Documentation' , imgClass: 'w-48 md:w-4/6', oddSizeClass: 'w-28 place-self-center', title: 'Style tile', 
      description: 'Style tile for ShortFlix film platform, a display of all UI elements used.', 
      graphicDisplayImg: '/images/design/short_icons.png', imgDisplay: '/images/design/short.png', linkToExt: '/images/design/short.png'
    },
  
    { type: 'Documentation' , imgClass: 'h-52 md:h-4/6', title: 'UML', 
      description: 'Activity Diagram for student profile in Vue app.', 
      graphicDisplayImg: '/images/design/act.png', imgDisplay: '/images/design/activity.png', linkToExt: '/images/design/activity.png'
    },
  ])
  
  const scrollBar = useTemplateRef('horizontal_scroll')
  
  onMounted(() => {
    scrollBar.value?.addEventListener('wheel', (event: any) => {
      event.preventDefault();
  
      scrollBar.value?.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      })
    })
  })
  
  </script>
  