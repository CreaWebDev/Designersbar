<template>
    <div class="flex flex-col">
        <div class="flex place-self-end w-6 mb-4"><img src="/images/menu.svg"></div>
        <div class="hidden md:block z-50 place-self-end pb-2">
            <LangSwitch />
        </div>
        <hr class="border-darkRose pb-2"/>
        
        <NuxtLink
            to="/"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/' ? 'font-bold' : ''"
        >   {{ $t('menu_home') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/workflow"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/workflow' ? 'font-bold' : ''"
        >   {{ $t('menu_workflow') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/web"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/web' ? 'font-bold' : ''"
        >   {{ $t('menu_web') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/design"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/design' ? 'font-bold' : ''"
        >   {{ $t('menu_gallery') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/cv"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/cv' ? 'font-bold' : ''"
        >   {{ $t('menu_timeline') }} 
        </NuxtLink>
        <NuxtLink
            to="/des/contact"
            class="transition-all text-right text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
            :class="$route.path == '/des/contact' ? 'font-bold' : ''"
        >   {{ $t('menu_contact') }} 
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import LangSwitch from '@/components/generic/LangSwitch.vue'

</script>