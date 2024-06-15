<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Video background -->
    <video
      autoplay
      loop
      muted
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source :src="videoCloudBackground" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Content over the video -->
    <div
      class="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    >
      <div class="text-center text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Mobiphone Edu
        </h1>
        <p class="text-lg md:text-2xl">
          Enhancing your learning experience with cutting-edge technology
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import videoCloudBackground from "@/assets/video-cloud-background.mp4";
export default {
  name: "App",
  setup() {
    return { videoCloudBackground };
  },
};
</script>

<style scoped>
/* Optional: Additional styles */
</style>
