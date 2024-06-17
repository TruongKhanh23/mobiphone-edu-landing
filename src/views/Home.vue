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

    <!-- Floating icons -->
    <div
      class="absolute top-1/2 right-12 transform -translate-y-1/2 flex flex-col gap-2"
    >
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="cursor-pointer transition-transform transform hover:scale-110 z-2"
        @click="showPopup(index)"
      >
        <img :src="icon" alt="Icon" class="w-10 h-10" />
      </div>
    </div>

    <!-- Popup -->
    <div
      v-if="isPopupVisible"
      class="absolute top-1/2 left-12 w-1/5 max-h-4/5 overflow-y-auto bg-white bg-opacity-90 p-5 shadow-lg transform -translate-y-1/2 z-50 rounded-lg"
      :style="{ height: popupHeight }"
    >
      <p>{{ randomText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import LoadingModal from "@/components/LoadingModal.vue";
import SchoolSecondFloor from "@/views/School/SchoolSecondFloor.vue";
import { handlePopup, open, close } from "@/composables/loadingModal/index.js";
import "@/assets/css/home.css";
import consultantIcon from "@/assets/icon/consultant-icon.png";
import contributeIcon from "@/assets/icon/contribute-icon.png";
import networkIcon from "@/assets/icon/network-icon.png";
import personIcon from "@/assets/icon/person-icon.png";
import settingIcon from "@/assets/icon/setting-icon.png";
import VideoBackground from "@/views/Home/VideoBackground.vue";

export default {
  name: "App",
  components: {
    LoadingModal,
    SchoolSecondFloor,
    VideoBackground,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup();
    const isOpenSecondFloor = ref(false);
    const isOpenSchool = ref<boolean>(false);
    const isPopupVisible = ref(false);
    const randomText = ref("");
    const popupHeight = ref("auto");
    const activeIconIndex = ref<number | null>(null);

    const icons = [
      consultantIcon,
      contributeIcon,
      networkIcon,
      personIcon,
      settingIcon,
    ];

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

    const showPopup = (index: number) => {
      if (activeIconIndex.value === index) {
        // If the same icon is clicked again, toggle the popup visibility
        isPopupVisible.value = !isPopupVisible.value;
      } else {
        const texts = [
          "Random text 1",
          "Random text 2",
          "Random text 3",
          "Random text 4",
          "Random text 5",
        ];
        randomText.value = texts[index];
        popupHeight.value = "auto"; // Adjust based on text length
        isPopupVisible.value = true;
        activeIconIndex.value = index;
      }
    };

    return {
      isOpenLoadingModal,
      isOpenSecondFloor,
      isOpenSchool,
      onClickButton,
      handleCloseSecondFloor,
      handleCloseSchoolSecondFloor,
      openSchoolSecondFloor,
      icons,
      isPopupVisible,
      randomText,
      popupHeight,
      activeIconIndex,
      showPopup,
    };
  },
};
</script>

<style scoped>
/* Floating icons styles */
</style>
