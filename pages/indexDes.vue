<template>
  <div class="">
    <div class="z-50">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <h3 class="text-darkRose font-medium text-4xl tracking-wide"
            style="font-family: Zeyada;">{{ $t("home.headline") }}</h3>
          <p class="text-golden font-sans text-sm max-w-md">
           {{ $t("home.description")}}
          </p>
        </div>
      </div>
      <div class="pt-8">
        <p class="text-darkRose font-medium text-4xl tracking-wide" style="font-family: Zeyada;">{{ $t("home.end_text")}}</p>
        <SoMe />
      </div>
        <NuxtPage />
    </div>
    <AsideBar :showAsideBar="true"/>
  </div>
</template>

<script setup lang="ts">
import AsideBar from '~/components/des/layout/AsideBar.vue'
import SoMe from '@/components/generic/SoMe.vue'

useHead({
  title: "Portfolio",
})

definePageMeta({
  layout: "des-layout",
})

</script>
