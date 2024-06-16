<template>
  <div class="relative w-full h-screen overflow-hidden">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <SchoolSecondFloor
      :visible="isOpenSchool"
      :handleOk="handleCloseSchoolSecondFloor"
      :handleCancel="handleCloseSchoolSecondFloor"
    />
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
          @click="onClickButton"
          >Sở/ phòng</a-button
        >
        <a-button
          class="school border-2 border-[#ffffff] bg-[skyblue]"
          type="primary"
          @click="openSchoolSecondFloor"
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

<script lang="ts">
import { ref } from "vue";
import LoadingModal from "@/components/LoadingModal.vue";
import videoCloudBackground from "@/assets/video-cloud-background.mp4";
import SchoolSecondFloor from "@/views/School/SchoolSecondFloor.vue";
import { handlePopup, open, close } from "@/composables/loadingModal/index.js";
import "@/assets/css/home.css";

export default {
  name: "App",
  components: {
    LoadingModal,
    SchoolSecondFloor,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup();
    const isOpenSecondFloor = ref(false);
    const isOpenSchool = ref<boolean>(false);

    function onClickButton() {
      isOpenSecondFloor.value = open();
      console.log("On Click");
    }
    function handleCloseSecondFloor() {
      isOpenSecondFloor.value = close();
    }
    const openSchoolSecondFloor = () => {
      console.log("click show modal");
      isOpenSchool.value = true;
    };
    const handleCloseSchoolSecondFloor = () => {
      console.log("Ok clicked");
      isOpenSchool.value = false;
    };

    return {
      videoCloudBackground,
      isOpenLoadingModal,
      isOpenSecondFloor,
      isOpenSchool,
      onClickButton,
      handleCloseSecondFloor,
      handleCloseSchoolSecondFloor,
      openSchoolSecondFloor,
    };
  },
};
</script>

<style>
/* Các styles tùy chỉnh cho component App.vue có thể được thêm vào đây */
</style>
