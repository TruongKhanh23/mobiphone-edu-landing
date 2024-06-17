<template>
  <div class="relative w-full h-screen overflow-hidden">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <SchoolSecondFloor
      :visible="isOpenSchool"
      :handleOk="handleCloseSchoolSecondFloor"
      :handleCancel="handleCloseSchoolSecondFloor"
    />
    <!-- Video background -->
    <VideoBackground />

    <!-- Content over the video -->
    <div class="relative z-1 flex items-center justify-center w-full h-full">
      <div class="text-center text-white">
        <!-- Positioned Image -->
        <a-button
          class="deparment border-2 border-white bg-skyblue"
          type="primary"
          @click="onClickButton"
          >Sở/ phòng</a-button
        >
        <a-button
          class="school border-2 border-white bg-skyblue"
          type="primary"
          @click="openSchoolSecondFloor"
          >Trường học</a-button
        >
        <a-button
          class="teacher border-2 border-white bg-skyblue"
          type="primary"
          >Giáo viên</a-button
        >
        <a-button
          class="student border-2 border-white bg-skyblue"
          type="primary"
          >Học sinh</a-button
        >
        <a-button
          class="mobiEdu border-2 border-white bg-skyblue"
          type="primary"
          >MobiEdu</a-button
        >
      </div>
    </div>

    <!-- Left Right Bar Icon -->
    <LeftRightBarIcon />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import LoadingModal from "@/components/LoadingModal.vue";
import SchoolSecondFloor from "@/views/School/SchoolSecondFloor.vue";
import { handlePopup, open, close } from "@/composables/loadingModal/index.js";
import "@/assets/css/home.css";
import VideoBackground from "@/views/Home/VideoBackground.vue";
import LeftRightBarIcon from "@/views/Home/LeftRightBarIcon.vue";

export default {
  name: "App",
  components: {
    LoadingModal,
    SchoolSecondFloor,
    VideoBackground,
    LeftRightBarIcon,
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

<style scoped>
/* Scoped styles specific to App */
</style>
