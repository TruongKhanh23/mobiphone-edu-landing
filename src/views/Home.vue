<template>
  <div class="relative w-full h-screen overflow-hidden">
    <LoadingModal :isOpen="isOpenLoadingModal" />
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
    <div class="relative z-10 flex items-center justify-center w-full h-full">
      <div class="text-center text-white">
        <!-- Positioned Image -->
        <a-button
          class="deparment border-2 border-[#ffffff] bg-[skyblue]"
          type="primary"
          >Sở/ phòng</a-button
        >
        <a-button
          class="school border-2 border-[#ffffff] bg-[skyblue]"
          type="primary"
          >Trường học</a-button
        >
        <a-button
          class="teacher border-2 border-[#ffffff] bg-[skyblue]"
          type="primary"
          >Giáo viên</a-button
        >
        <a-button
          class="student border-2 border-[#ffffff] bg-[skyblue]"
          type="primary"
          >Học sinh</a-button
        >
        <a-button
          class="mobiEdu border-2 border-[#ffffff] bg-[skyblue]"
          type="primary"
          >MobiEdu</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import LoadingModal from "@/components/LoadingModal.vue";
import handlePopup from "@/composables/loadingModal/index.js";
import videoCloudBackground from "@/assets/video-cloud-background.mp4";
export default {
  name: "App",
  components: {
    LoadingModal,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup();
    return { videoCloudBackground, LoadingModal, isOpenLoadingModal };
  },
};
</script>

<style scoped>
/* Optional: Additional styles */
.deparment {
  position: absolute;
  top: 25%;
  left: 75%;
  transform: translate(-75%, -25%);
}

.school {
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-75%, -25%);
}

.teacher {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-75%, -25%);
}

.student {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-75%, -25%);
}

.mobiEdu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-75%, -25%);
}
</style>
