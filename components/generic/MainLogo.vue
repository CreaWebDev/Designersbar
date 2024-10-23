<template>
  <div :key="props.reloadAnimationKey" class="p-8">
    <NuxtLink to="/">
      <img src="/images/logo_anima/logo_anima.svg" id="anima" :class="props.imgHeight">
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  reloadAnimationKey: Number,
  imgHeight: String
})

</script>