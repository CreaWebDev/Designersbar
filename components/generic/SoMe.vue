<template>
  <div class="flex flex-row justify-center md:space-x-8 pt-4 text-textSoft">
    <p class="">
      <a href="mailto:pia@creawebdev.dk">
        <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faSquareEnvelope" />
      </a>
    </p>
    <p class="">
      <a href="https://www.linkedin.com/in/pia-roel-j%C3%B8rgensen-28808611/" target="_blank">
        <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faLinkedin" />
      </a>
    </p>
    <p class="">
      <a href="https://github.com/CreaWebDev" target="_blank">
        <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faGithub" />
      </a>
    </p>
    <p class="">
      <a href="https://www.instagram.com/danishdesignersbar" target="_blank">
        <font-awesome-icon class="px-4 hover:text-softRose" size="lg" :icon="faInstagram" />
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { faGithub, faInstagram, faLinkedin }  from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

</script>