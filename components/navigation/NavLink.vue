<template>
    <router-link :to="link.linkTo">
        <div :class="props.class">
            {{ link.title }}
        </div>
    </router-link>
</template>

<script setup lang="ts">
const props = defineProps(['link', 'class'])

</script>