<template>
    <div class="flex flex-row justify-around md:justify-start md:ml-12 md:space-x-8 text-sm font-sans hover:text-rose md:py-2">
        <NuxtLink
            to="/"
            class="transition-all hover:text-softRose"
            :class="$route.path == '/' ? 'font-bold text-superGreen' : 'text-textSoft '"
        >  
            <p class="max-md:hidden">
                main entrance
            </p>
            <p class="md:hidden hover:text-softRose">
                <font-awesome-icon size="lg" :icon="faDoorOpen"/>
            </p>
        </NuxtLink>
        <NuxtLink
            to="/design"
            class="transition-all hover:text-softRose"
            :class="checkForSub('design')  ? 'font-bold text-superGreen md:text-5xl' : 'text-textSoft'"
        >   
            <p class="max-md:hidden">
                design
            </p>
            <p class="md:hidden hover:text-softRose">
                <font-awesome-icon size="lg" :icon="faPalette"/>
            </p>
        </NuxtLink>
        <NuxtLink
            to="/apps"
            class="transition-all hover:text-softRose"
            :class="checkForSub('apps') ? 'font-bold text-superGreen md:text-5xl' : 'text-textSoft'"
        > 
            <p class="max-md:hidden">
                development & UX
            </p>
            <p class="md:hidden hover:text-softRose">
                <font-awesome-icon size="lg" :icon="faCode"/>
            </p>
        </NuxtLink>
        <NuxtLink
            to="/workflow"
            class="transition-all hover:text-softRose"
            :class="checkForSub('workflow') ? 'font-bold text-superGreen md:text-5xl' : 'text-textSoft'"
        >   
            <p class="max-md:hidden">
                workflow
            </p>
            <p class="md:hidden hover:text-softRose">
                <font-awesome-icon size="lg" :icon="faUserCheck"/>
            </p>

        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import LangSwitch from '@/components/generic/LangSwitch.vue'
import { faGithub }  from '@fortawesome/free-brands-svg-icons'
import { faCode, faDoorOpen, faFile, faPalette, faUserCheck } from '@fortawesome/free-solid-svg-icons'

const route = useRoute()

const checkForSub = (name: string) => {
    return route.path.includes(name)
}
</script>