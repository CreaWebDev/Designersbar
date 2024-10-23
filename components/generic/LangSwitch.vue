<template>
  <div class="flex flex-row w-28 justify-around">
    <button v-for="lang in locales" :key="lang.name"
        @click="setLocale(lang.code)"
        class="w-10 h-10 rounded-full bg-darkRose text-soft text-xs z-50 hover:font-bold disabled:opacity-50 disabled:bg-golden disabled:hover:font-normal"
        :disabled="lang.code === i18n.localeProperties.value.code"
    >{{ lang.name }}</button>
  </div>
</template>

<script setup lang="ts">
const { locales, setLocale } = useI18n()

const i18n = useI18n()

</script>