<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <TeacherFeature
      :open="isOpenTeacherFeature"
      :featureNumber="featureNumber"
      :handleOk="handleCloseTeacherFeature"
      :handleCancel="handleCloseTeacherFeature"
      class="z-20"
    />
    <div class="bg-[#021929]">
      <div class="image-container mt-[-10px]">
        <img :src="backgroundTeacherStrong" alt="backgroundTeacherStrong" />
        <div class="teacher-title text-white flex flex-col gap-2">
          <span class="font-black text-4xl">ĐIỂM MẠNH</span>
          <span class="font-bold"
            >Tính năng quản lí và đánh giá của giáo viên</span
          >
        </div>
        <SellingPoint />
      </div>
      <div class="image-container overflow-hidden">
        <img :src="backgroundTeacherFeatures" alt="backgroundTeacherFeatures" />

        <!-- Sử dụng component Features -->
        <Features @featureClick="handleOnClick" />
      </div>
      <div class="image-container mt-[-10px]">
        <img :src="backgroundTeacherBenefits" alt="backgroundTeacherBenefits" />
        <div class="teacher-benefit-title text-white flex flex-col gap-2">
          <span class="font-black text-5xl">LỢI ÍCH</span>
        </div>
        <Benefits />
      </div>
    </div>
  </AntModal>
</template>

<script>
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import TeacherFeature from "@/views/ThirdFloor/Teacher/TeacherFeature.vue";
import Features from "@/components/Teacher/Features.vue";
import Benefits from "@/components/Teacher/Benefits.vue";
import SellingPoint from "@/components/Teacher/SellingPoint.vue";
import LoadingModal from "@/components/LoadingModal.vue";

import backgroundTeacherFeatures from "@/assets/image/teacher/background-teacher-features.svg";
import backgroundTeacherBenefits from "@/assets/image/teacher/background-teacher-benefits.svg";
import backgroundTeacherStrong from "@/assets/image/teacher/background-teacher-strong.svg";

import { handlePopup } from "@/composables/loadingModal/index.js";

export default {
  name: "Teacher",
  components: {
    AntModal,
    TeacherFeature,
    Features,
    Benefits,
    SellingPoint,
    LoadingModal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup(2000);
    const isOpenTeacherFeature = ref(false);
    const featureNumber = ref(1);

    const handleClick = () => {
      openTeacherFeature();
    };

    const handleCloseTeacherFeature = () => {
      console.log("Ok clicked Close Teacher Feature");
      isOpenTeacherFeature.value = false;
    };

    const openTeacherFeature = () => {
      console.log("click open teacher feature");
      isOpenTeacherFeature.value = true;
    };

    const handleOnClick = (value) => {
      console.log(`Feature ${value} clicked`);
      featureNumber.value = value;
      if (value === 1) {
        openTeacherFeature();
      } else if (value === 2) {
        openTeacherFeature();
        console.log("Feature 2 clicked");
      }
    };

    return {
      featureNumber,
      isOpenLoadingModal,
      isOpenTeacherFeature,
      backgroundTeacherStrong,
      backgroundTeacherBenefits,
      backgroundTeacherFeatures,
      openTeacherFeature,
      handleClick,
      handleCloseTeacherFeature,
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

.teacher-title {
  position: absolute;
  top: 12%;
  left: 16%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.teacher-benefit-title {
  position: absolute;
  top: 10%;
  left: 15%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
  color: #efd763;
}
.teacher-strong-title {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
</style>
