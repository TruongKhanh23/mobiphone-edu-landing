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
    <ObjectsTitle
      @clickButton="onClickButton"
      @openSchoolSecondFloor="openSchoolSecondFloor"
    />

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
import ObjectsTitle from "@/views/Home/ObjectsTitle.vue";

export default {
  name: "App",
  components: {
    LoadingModal,
    SchoolSecondFloor,
    VideoBackground,
    LeftRightBarIcon,
    ObjectsTitle,
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
