<template>
  <div class="">
    <div class="flex flex-row">
      <div class="flex flex-col w-32 h-32 text-3xl text-rose">
        <font-awesome-icon class="text-rose w-20 md:w-32" :icon="props.icon" ></font-awesome-icon>
      </div>
      <div class="text-textSoft text-sm md:w-2/3 mr-8">
        <div class="">
          <slot name="date"></slot>
        </div>
        <div class="font-bold text-sm"><slot name="title"></slot></div>
        <div class=""><slot name="description"></slot></div>
        <div class=""><slot name="techSkills"></slot></div>
        <div class="text-xs italic text-darkRose pt-2">
          <slot name="testimony"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['icon'])
</script>
