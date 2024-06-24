<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <StudentFeature
      :open="isOpenStudentFeature"
      :featureNumber="featureNumber"
      :handleOk="handleCloseStudentFeature"
      :handleCancel="handleCloseStudentFeature"
      class="z-20"
    />
    <div class="bg-[#021929]">
      <div class="image-container mt-[-10px]">
        <img :src="backgroundStudentStrong" alt="backgroundStudentStrong" />
        <div class="student-strong-title flex flex-col items-center text-white">
          <span class="font-black text-4xl">ĐIỂM MẠNH</span>
          <span class="font-bold italic"
            >Tính năng Adaptive Learning cho học sinh</span
          >
        </div>
        <SellingPoint />
      </div>
      <div class="image-container overflow-hidden">
        <img :src="backgroundStudentFeatures" alt="backgroundStudentFeatures" />
        <!-- Sử dụng component Features -->
        <Features @featureClick="handleOnClick" />
      </div>
      <div class="image-container mt-[-10px]">
        <img :src="backgroundStudentBenefits" alt="backgroundStudentBenefits" />
        <div class="student-title font-black text-5xl text-white">LỢI ÍCH</div>
        <Benefits />
      </div>
    </div>
  </AntModal>
</template>

<script>
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import StudentFeature from "@/views/ThirdFloor/Student/StudentFeature.vue";
import Features from "@/components/Student/Features.vue";
import Benefits from "@/components/Student/Benefits.vue";
import SellingPoint from "@/components/Student/SellingPoint.vue";
import LoadingModal from "@/components/LoadingModal.vue";

import backgroundStudentFeatures from "@/assets/image/student/background-student-features.svg";
import backgroundStudentBenefits from "@/assets/image/student/background-student-benefits.svg";
import backgroundStudentStrong from "@/assets/image/student/background-student-strong.svg";

import { handlePopup } from "@/composables/loadingModal/index.js";

export default {
  name: "Student",
  components: {
    AntModal,
    StudentFeature,
    Features,
    Benefits,
    SellingPoint,
    LoadingModal, // Đăng ký LoadingModal như một component
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup(2000);
    const isOpenStudentFeature = ref(false);
    const featureNumber = ref(1);

    const handleClick = () => {
      openStudentFeature();
    };

    const handleCloseStudentFeature = () => {
      console.log("Ok clicked Close Student Feature");
      isOpenStudentFeature.value = false;
    };

    const openStudentFeature = () => {
      console.log("click open student feature");
      isOpenStudentFeature.value = true;
    };

    const handleOnClick = (value) => {
      console.log(`Feature ${value} clicked`);
      featureNumber.value = value;
      if (value === 1) {
        openStudentFeature();
      } else if (value === 2) {
        openStudentFeature();
        console.log("Feature 2 clicked");
      }
    };

    return {
      featureNumber,
      isOpenLoadingModal,
      isOpenStudentFeature,
      backgroundStudentStrong,
      backgroundStudentBenefits,
      backgroundStudentFeatures,
      openStudentFeature,
      handleClick,
      handleCloseStudentFeature,
      handleOnClick,
    };
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
}

.image-container img {
  width: 100%;
  height: auto;
}

.student-title {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
.student-strong-title {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
.student-feature-title {
  position: absolute;
  top: 40%;
  left: 15%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
</style>
