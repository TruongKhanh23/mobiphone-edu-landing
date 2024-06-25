<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <StudentSellingPoint
      :open="isOpenStudentSellingPoint"
      :sellingPointNumber="sellingPointNumber"
      :handleOk="handleCloseStudentSellingPoint"
      :handleCancel="handleCloseStudentSellingPoint"
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
        <SellingPoint @sellingPointClick="handleOnClick" />
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
import StudentSellingPoint from "@/views/ThirdFloor/Student/StudentSellingPoint.vue";
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
    StudentSellingPoint,
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
    const isOpenStudentSellingPoint = ref(false);
    const sellingPointNumber = ref(1);

    const handleClick = () => {
      openStudentSellingPoint();
    };

    const handleCloseStudentSellingPoint = () => {
      console.log("Ok clicked Close Student SellingPoint");
      isOpenStudentSellingPoint.value = false;
    };

    const openStudentSellingPoint = () => {
      console.log("click openStudentSellingPoint");
      isOpenStudentSellingPoint.value = true;
    };

    const handleOnClick = (value) => {
      const hasDetails = [1, 2];
      if (hasDetails.includes(value)) {
        openStudentSellingPoint();
        sellingPointNumber.value = value;
      }
    };

    return {
      sellingPointNumber,
      isOpenLoadingModal,
      isOpenStudentSellingPoint,
      backgroundStudentStrong,
      backgroundStudentBenefits,
      backgroundStudentFeatures,
      openStudentSellingPoint,
      handleClick,
      handleCloseStudentSellingPoint,
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
