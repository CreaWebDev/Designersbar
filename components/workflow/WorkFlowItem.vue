<template>
  <div 
    class="flex flex-col m-8"
  >
    <div class="flex flex-row align-center text-textSoft pt-2 pb-4">
        <font-awesome-icon class="text-softRose pr-4" :icon="props.icon" size="2xl" />
      <div class="text-3xl font-display text-softRose">
        <slot name="title"></slot>
      </div>
    </div>
    <p class="text-lg text-textSoft italic">
      <slot name="text"></slot>
    </p>
      <slot name="bullets"></slot>
    </div>
</template>

<script setup lang="ts">
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';

  const props = defineProps<{
    icon?: FontAwesomeIconProps
    no?: string
  }>()

</script>