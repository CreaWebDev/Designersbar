<template>
  <div class="text-sm text-golden ">
   <form>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="da">da</option>
      </select>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'petite-vue-i18n'

const { t, messages, setLocaleMessage } = useI18n()

const i18n = useI18n()
console.log(i18n.locale.value)

</script>