<template>
  <video
    autoplay
    loop
    muted
    class="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source :src="videoCloudBackground" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import videoCloudBackground from "@/assets/video-cloud-background.mp4";

export default defineComponent({
  name: "VideoBackground",
  setup() {
    return {
      videoCloudBackground,
    };
  },
});
</script>

<style scoped>
/* Styles specific to VideoBackground */
</style>
