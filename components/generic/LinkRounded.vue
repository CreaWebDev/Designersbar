<template>
  <RouterLink :to="props.linkTo">
    <div 
      class="w-44 h-44 rounded-full m-4 flex flex-col justify-center"
      :class="props.class"  
    >
      <p class="text-soft hover:text-mint text-2xl text-center">
        {{ props.text }}
      </p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">

const props = defineProps(['linkTo', 'text', 'class'])

</script>