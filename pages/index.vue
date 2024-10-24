<template>
  <!-- <div class="bg-soft h-screen w-screen flex flex-col md:flex-row justify-center place-items-center">
    <LinkRounded 
      :linkTo="'/indexDev'"
      :class="'bg-golden'"
      :text="'Frontend Development'">
    </LinkRounded>
    
    <LinkRounded
      :linkTo="'/indexDes'"
      :class="'bg-darkRose'"
      :text="'Digital Design'">
    </LinkRounded>
    
  </div> -->
  <div class="pl-8">
    <div class="z-50">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col">
          <h3 class="text-darkRose font-medium text-4xl tracking-wide"
            style="font-family: Zeyada;">{{ $t("home_headline") }}</h3>
          <p class="text-golden font-sans text-sm max-w-md">
           {{ $t("home_description")}}
          </p>
        </div>
      </div>
      <div class="pt-8">
        <p class="text-darkRose font-medium text-4xl tracking-wide" style="font-family: Zeyada;">{{ $t("home_end_text")}}</p>
        <SoMe />
      </div>
        <NuxtPage />
    </div>
    <AsideBar :showAsideBar="true"/>
  </div>
</template>

<script setup lang="ts">
// import LinkRounded from '~/components/generic/LinkRounded.vue';
import AsideBar from '~/components/des/layout/AsideBar.vue'
import SoMe from '@/components/generic/SoMe.vue'

useHead({
  title: "Portfolio",
})

definePageMeta({
  layout: "des-layout",
})

</script>
