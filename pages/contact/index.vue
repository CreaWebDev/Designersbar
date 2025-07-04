<template>
  <div class="flex flex-col pl-8">
    <p class="text-darkRose font-medium text-4xl tracking-wide mb-4" style="font-family: Zeyada;">
      {{ $t("contact_title")}}
    </p>
    <SoMe />      
    <section class="w-full pt-8 md:w-96">
      <img src="/images/new_me.png" class="z-20 rounded-md">
    </section>
  </div>
</template>

<script setup lang="ts">
import SoMe from '@/components/generic/SoMe.vue'

definePageMeta({
  layout: "main-layout",
})

useHead({
  title: "Contact",
})
</script>

<style>
.svg {
  fill: #806543;
}
.svg:hover {
  fill: #a6607c;
}
</style>