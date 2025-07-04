<template>
    <header class="">
        <div class="flex flex-col md:mb-4">
            <NuxtLink to="/" class="w-screen xl:w-2/3 opacity-75">
                <img src="/images/logo_large.svg">
            </NuxtLink>
            <div class="max-md:flex max-md:flex-col max-md:justify-center max-md:w-full max-md:fixed max-md:bottom-0 max-md:bg-_black max-md:h-20 z-40">
                <MainNavigation />
            </div>
        </div>
        <div id="scroll" class="hidden md:block w-20 fixed right-20 top-10">
            <img src="/images/designIcons/drink.png">
        </div>
    </header>
</template>

<script setup lang="ts">
import MainNavigation from '@/components/navigation/MainNavigation.vue'

import { ref } from 'vue'

import { useI18n } from 'petite-vue-i18n'

// definePageMeta({
//     pageTransition: {
//         name: 'color'
//     }
// })
const { t } = useI18n()

const open = ref(false)

const openMenu = () => {
    open.value = true
    setTimeout(closeMenu, 4000)
}

const closeMenu = () => {
    open.value = false
}

onMounted(() => {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
})

</script>

<style lang="css">

#scroll {
  animation: rotate 1s linear infinite;
  animation: rotate 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
}

@keyframes rotate {
  to {
    transform: rotate(-360deg);
  }
}
</style>