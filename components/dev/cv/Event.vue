<template>
  <div class="">
    <div class="flex flex-row">
      <div class="flex flex-col w-32 h-32 text-3xl  text-rose">
        <font-awesome-icon class="text-rose" :icon="event.icon" ></font-awesome-icon>
      </div>
      <div class="text-golden text-sm w-2/3">
        <div class="">
          {{ event.date }}
        </div>
        <div class="font-bold text-sm">{{ event.title }}</div>
        <div class="">{{ event.description }}</div>
        <div class="">{{ event.techSkills }}</div>
        <div v-if="event.testimony" class="text-xs italic text-darkRose pt-2">
          ’{{ event.testimony }}’
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['event'])
</script>
