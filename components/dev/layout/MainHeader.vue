<template>
    <header class="">
        <div class="flex flex-row w-full p-8 h-24"
        >
            <MainLogo :imgHeight="'h-16'"/>
            <button
                @click="openMenu"
                @focusout="closeMenu"
                class="fixed top-10 right-10 md:hidden z-40 text-golden"
            >
                <font-awesome-icon icon="fa-solid fa-bars" size="lg"/>
            </button>
            <div class="hidden fixed md:block top-10 right-10 z-40">
                <MainNavigation :links="navLinks" />
            </div>
        </div>
    </header>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-96 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="translate-y-0"
      leave-to-class="-translate-y-96 opacity-0"
    >
        <div v-if="open" class="fixed md:w-44 z-40 top-0 right-0 md:right-24 bg-golden border border-2 border-golden p-6">
            <MainNavigation :links="navLinks" />
        </div>
    </transition>
</template>

<script setup lang="ts">
import MainNavigation from '@/components/dev/navigation/MainNavigation.vue'
import MainLogo from '~/components/generic/MainLogo.vue'
import { ref } from 'vue'

// definePageMeta({
//     pageTransition: {
//         name: 'color'
//     }
// })

const open = ref(false)

const navLinks = ref([
    { linkTo: '/indexDev/', title: 'Home', class: 'bg-dbRose'},
    { linkTo: '/dev/techstack', title: 'My Tech Stack', class: 'bg-dbRose'},
    { linkTo: '/dev/cv', title: 'My timeline', class: 'bg-dbRose'},
    { linkTo: '/dev/contact', title: 'Contact', class: 'bg-dbRose'}
])

const openMenu = () => {
    open.value = true
    setTimeout(closeMenu, 4000)
}

const closeMenu = () => {
    open.value = false
}

</script>