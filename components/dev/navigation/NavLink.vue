<template>
    <router-link :to="link.linkTo" @click="$emit('rerenderLogo')">
        <div :class="props.class">
            {{ link.title }}
        </div>
    </router-link>
</template>

<script setup lang="ts">
const props = defineProps(['link', 'class'])

const emit = defineEmits<{ (e: "rerenderLogo"): void }>()

</script>