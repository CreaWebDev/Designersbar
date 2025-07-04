<template>
    <div class="flex flex-col justify-center p-4 md:p-20" >
        <p class="text-xl md:text-4xl font-display text-soft italic">
            "{{ props.tagline }}"
        </p>
        <div>
            <NuxtLink :to="'/apps/' + props.appIndex">
                <p class="text-2xl md:text-6xl font-display text-right text-softRose">
                => {{  props.title }}</p>
                <p class="text-sm text-textSoft text-right">{{ props.text }}</p>
            </NuxtLink>
        </div>
        <!-- <div class="w-20 border-b-4 border-textSoft">
            <img :src="props.imgFile">
        </div> -->
        <!-- <div class="w-screen bg-_white h-20"
            :style="{ 
            backgroundImage: `url(/images/design/${props.imgBg})`, 
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', 
            backgroundPosition:  'center'
            }"
        >
        </div> -->
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    imgFile: String,
    imgBg: String,
    appIndex: Number,
    displaysize: String,
    imgclass: String,
    tagline: String,
    title: String,
    text: String
})

</script>
