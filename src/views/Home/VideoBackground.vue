<template>
  <div class="absolute top-16 left-0 w-full h-full">
    <video
      v-if="useVideo"
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source :src="videoBackground" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <img
      v-else
      :src="homeBackGroundImage"
      alt="Background Image"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import videoBackground from "@/assets/video-background.mp4";
import homeBackGroundImage from "@/assets/image/home-background-image.png";

export default defineComponent({
  name: "VideoBackground",
  setup() {
    const useVideo = ref(true); // Thay đổi giá trị này để kiểm soát việc hiển thị video hoặc hình ảnh

    return {
      useVideo,
      videoBackground,
      homeBackGroundImage,
    };
  },
});
</script>

<style scoped>
/* Styles specific to VideoBackground */
</style>
