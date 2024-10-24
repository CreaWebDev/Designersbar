<template>
    <header class="">
        <div class="flex flex-row md:mb-4">
            <MainLogo :img-height="''"/>
            <button
                @click="openMenu"
                @focusout="closeMenu"
                class="fixed top-10 right-10 md:hidden z-40 text-golden"
            >
                <font-awesome-icon icon="fa-solid fa-bars" size="lg"/>
            </button>
            <div class="hidden fixed md:block top-10 right-10 z-40">
                <MainNavigation />
            </div>
        </div>
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="-translate-y-96 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="translate-y-0"
          leave-to-class="-translate-y-96 opacity-0"
        >
            <div v-if="open" class="fixed md:w-44 z-40 top-0 right-0 md:right-24 bg-golden border border-2 border-golden p-6">
                <MainNavigation  />
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import MainNavigation from '@/components/des/navigation/MainNavigation.vue'
import MainLogo from '~/components/generic/MainLogo.vue'

import { ref } from 'vue'

import { useI18n } from 'petite-vue-i18n'

// definePageMeta({
//     pageTransition: {
//         name: 'color'
//     }
// })
const { t } = useI18n()

const open = ref(false)

// const navLinks = ref([
//     { linkTo: '/indexDes', title: t("menu.home"), class: 'bg-dbRose'},
//     { linkTo: '/des/workflow', title: 'My Workflow', class: 'bg-dbRose'},
//     { linkTo: '/des/design', title: 'Design Gallery', class: 'bg-dbRose'},
//     { linkTo: '/des/cv', title: 'My timeline', class: 'bg-dbRose'},
//     { linkTo: '/des/contact', title: 'Contact', class: 'bg-dbRose'},
// ])

const openMenu = () => {
    open.value = true
    setTimeout(closeMenu, 4000)
}

const closeMenu = () => {
    open.value = false
}

</script>