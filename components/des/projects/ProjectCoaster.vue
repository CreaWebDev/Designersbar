<template>
  <div class="w-36 h-36 flex flex-col justify-center bg-bluey rounded-full shadow-md shadow-rose hover:animate-wiggle">
    <p class="text-2xl tracking-wider text-rose font-medium text-center flex self-center" style="font-family: Zeyada;">
        <router-link :to="props.linkTo" :target="props.target">
          {{ props.title }}
        </router-link>
    </p>
    <p class="text-sm text-golden font-sans text-center w-32 flex self-center">
      {{ props.subTitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['linkTo', 'target', 'title', 'subTitle'])

</script>

<style>
@keyframes border {
  from {
    border: 0px
  }
  to {
    border: 2px solid gray;
  }
}
</style>