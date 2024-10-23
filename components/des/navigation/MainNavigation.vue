<template>
    <div class="flex flex-col">
        <div class="flex self-end w-6 mb-4"><img src="/images/menu.svg"></div>
        <hr class="border-darkRose pb-2"/>
        <NuxtLink
            to="/"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/' ? 'font-bold' : ''"
        >   {{ $t('menu.home') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/workflow"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/workflow' ? 'font-bold' : ''"
        >   {{ $t('menu.workflow') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/web"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/web' ? 'font-bold' : ''"
        >   {{ $t('menu.web') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/design"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/design' ? 'font-bold' : ''"
        >   {{ $t('menu.gallery') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/cv"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/cv' ? 'font-bold' : ''"
        >   {{ $t('menu.timeline') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/contact"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/contact' ? 'font-bold' : ''"
        >   {{ $t('menu.contact') }} 
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import NavLink from '@/components/des/navigation/NavLink.vue'

// const { t } = useI18n()
// const props = defineProps({
//     links: Object
// })

// const navLinks = ref([
//     { linkTo: '/indexDes', title: t("menu.home"), class: 'bg-dbRose'},
//     { linkTo: '/des/workflow', title: 'My Workflow', class: 'bg-dbRose'},
//     { linkTo: '/des/design', title: 'Design Gallery', class: 'bg-dbRose'},
//     { linkTo: '/des/cv', title: 'My timeline', class: 'bg-dbRose'},
//     { linkTo: '/des/contact', title: 'Contact', class: 'bg-dbRose'},
// ])

</script>