<template>
    <div class="flex flex-col md:flex-row md:space-x-8">
        <div v-for="link in props.links" class="text-right">
            <NavLink 
                :link="link"
                class="transition-all text-sm font-sans text-bluey md:text-golden hover:text-rose py-2"
                :class="$route.path == link.linkTo ? 'font-bold' : ''"
                @rerender-logo="$emit('rerenderLogo')"
            />
        </div>
        <!-- <LangSwitch /> -->
    </div>
</template>

<script setup lang="ts">
import NavLink from '@/components/dev/navigation/NavLink.vue'
import LangSwitch from '@/components/generic/LangSwitch.vue'

const props = defineProps({
    links: Object
})

const emit = defineEmits<{ (e: "rerenderLogo"): void }>()

</script>