<template>
  <div class="relative w-full h-screen overflow-hidden font-robotoRegular">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <School
      :visible="isOpenSchool"
      :handleOk="handleCloseSchoolSecondFloor"
      :handleCancel="handleCloseSchoolSecondFloor"
    />
    <MobiEdu
      :visible="isOpenMobiEdu"
      :handleOk="handleCloseMobiEduSecondFloor"
      :handleCancel="handleCloseMobiEduSecondFloor"
    />
    <!-- Home Title -->
    <div
      class="absolute top-[5%] left-1/2 transform -translate-x-1/2 flex flex-col z-10 text-center font-robotoBold"
    >
      <div>
        <h1 class="text-2xl font-bold text-[#004E8D] !mb-0">
          Bộ giải pháp quản lí E-learning của mobiEdu
        </h1>
        <p class="text-white font-bold text-sm">
          <span>Quản lí chất lượng giáo dục và hỗ trợ mọi đối tượng</span><br />
          <span class="text-white font-bold">trong quá trình dạy và học.</span>
        </p>
      </div>
    </div>
    <!-- Video background -->
    <VideoBackground />

    <!-- Content over the video -->
    <ObjectsTitle @clickButton="onClickButton" />

    <!-- Left Right Bar Icon -->
    <LeftRightBarIcon />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import LoadingModal from "@/components/LoadingModal.vue";
import School from "@/views/SecondFloor/School.vue";
import MobiEdu from "@/views/SecondFloor/MobiEdu.vue";
import { handlePopup } from "@/composables/loadingModal/index.js";
import "@/assets/css/home.css";
import VideoBackground from "@/views/Home/VideoBackground.vue";
import LeftRightBarIcon from "@/views/Home/LeftRightBarIcon.vue";
import ObjectsTitle from "@/views/Home/ObjectsTitle.vue";

export default {
  name: "App",
  components: {
    LoadingModal,
    School,
    MobiEdu,
    VideoBackground,
    LeftRightBarIcon,
    ObjectsTitle,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup();
    const isOpenSecondFloor = ref(false);
    const isOpenSchool = ref<boolean>(false);
    const isOpenMobiEdu = ref<boolean>(false);

    function onClickButton(value: string) {
      switch (value) {
        case "student":
          console.log("Handling click on Student button");
          // Xử lý khi click vào button Học sinh
          break;
        case "department":
          console.log("Handling click on Department button");
          // Xử lý khi click vào button Sở/ phòng
          break;
        case "school":
          console.log("Handling click on School button");
          isOpenSchool.value = true;
          // Xử lý khi click vào button Trường học
          break;
        case "teacher":
          console.log("Handling click on Teacher button");
          // Xử lý khi click vào button Giáo viên
          break;
        case "mobiEdu":
          console.log("Handling click on MobiEdu button");
          isOpenMobiEdu.value = true;
          // Xử lý khi click vào button MobiEdu
          break;
        default:
          console.warn(`Unhandled button click with value: ${value}`);
      }
    }

    const handleCloseSchoolSecondFloor = () => {
      console.log("Ok clicked");
      isOpenSchool.value = false;
    };

    const handleCloseMobiEduSecondFloor = () => {
      console.log("handleCloseMobiEduSecondFloor");
      isOpenMobiEdu.value = false;
    };

    return {
      isOpenLoadingModal,
      isOpenSecondFloor,
      isOpenSchool,
      isOpenMobiEdu,
      onClickButton,
      handleCloseSchoolSecondFloor,
      handleCloseMobiEduSecondFloor,
    };
  },
};
</script>

<style scoped>
/* Scoped styles specific to App */
</style>
