<template>
  <video width="240" height="240" controls autoplay>
    <source
      :src="props.videoLink"
      type="video/mp4"
    />
      Your browser does not support the video tag.
  </video>
  <!-- <div>
    <button class="bg-golden py-2 px-4 m-2 text-xs font-sans hover:text-darkRose rounded-lg hover:bg-rose transition-all" 
      @click="play">play</button>
    <button @click="pause">pause</button>
    <button @click="stop">stop</button>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['videoLink'])

const videoPlayer = ref()

const play = () => {
  videoPlayer.value.play()
}
const pause = () => {

}

const stop = () => {

}

</script>