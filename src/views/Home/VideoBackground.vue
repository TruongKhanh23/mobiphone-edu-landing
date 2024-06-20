<template>
  <div class="absolute top-0 left-0 w-full h-full">
    <video
      v-if="useVideo"
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source :src="videoCloudBackground" type="video/mp4" />
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
import videoCloudBackground from "@/assets/video-cloud-background.mp4";
import homeBackGroundImage from "@/assets/image/home-background-image.png";

export default defineComponent({
  name: "VideoBackground",
  setup() {
    const useVideo = ref(false); // Thay đổi giá trị này để kiểm soát việc hiển thị video hoặc hình ảnh

    return {
      useVideo,
      videoCloudBackground,
      homeBackGroundImage,
    };
  },
});
</script>

<style scoped>
/* Styles specific to VideoBackground */
</style>
