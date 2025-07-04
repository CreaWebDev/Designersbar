<template>
    <div class="mt-12">
      <div class="design-icons relative h-20 w-screen overflow-hidden">
        <div v-for="(i, index) in designIcons" :class="'icon icon-' + (index + 1)">
          <img :src="i.icon">
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

const designIcons = ([
  { icon: '/images/designIcons/birdy.png' },
  { icon: '/images/designIcons/face.png' },
  { icon: '/images/designIcons/fjer_pink.png' },
  { icon: '/images/designIcons/grapes.png' },
  { icon: '/images/designIcons/hug.png' },
  { icon: '/images/designIcons/rocks.png' },
  { icon: '/images/designIcons/drink.png' },
  { icon: '/images/designIcons/compare.png' },
  { icon: '/images/designIcons/vino.png' },
])

</script>

<style scoped lang="css">

.designs {
  overflow: hidden;
}

.design-icons:hover {
  animation-play-state: paused;
}

.icon {
  width: 24px;
  position: absolute;
  left: 100%;
  animation: scrollTo 18s linear infinite;
}

.icon-1 {
  animation-delay: calc(18s / 9 * (9 - 1) * -1);
}

.icon-2 {
  animation-delay: calc(18s / 9 * (9 - 2) * -1);
}

.icon-3 {
  animation-delay: calc(18s / 9 * (9 - 3) * -1);
}

.icon-4 {
  animation-delay: calc(18s / 9 * (9 - 4) * -1);
}

.icon-5 {
  animation-delay: calc(18s / 9 * (9 - 5) * -1);
}

.icon-6 {
  animation-delay: calc(18s / 9 * (9 - 6) * -1);
}

.icon-7 {
  animation-delay: calc(18s / 9 * (9 - 7) * -1);
}

.icon-8 {
  animation-delay: calc(18s / 9 * (9 - 8) * -1);
}

.icon-9 {
  animation-delay: calc(18s / 9 * (9 - 9) * -1);
}

@keyframes scrollTo {
    to {
      left: -10%;
    }
}

</style>