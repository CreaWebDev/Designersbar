<template>
  <aside v-if="props.showAsideBar" class="select-none w-1/3 h-screen flex md:justify-start z-0">
    <div class="md:hidden w-32 md:w-1/8 fixed bottom-0 right-8 md:right-48">
      <img class="" src="/images/aside_img.svg">
    </div>
    <div class="h-full hidden md:block md:fixed bottom-0 right-12 z-10">
      <img class="h-full opacity-25" src="/images/glass.svg">
    </div>
  </aside>
</template>

<script setup lang="ts">
const props = defineProps(['showAsideBar'])

</script>