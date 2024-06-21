<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <SchoolFeature
      :open="isOpenSchoolFeature"
      :featureNumber="featureNumber"
      :handleOk="handleCloseSchoolFeature"
      :handleCancel="handleCloseSchoolFeature"
      class="z-20"
    />
    <div class="bg-[#021929]">
      <div class="image-container mt-[-10px]">
        <img :src="backgroundSchoolBenefits" alt="backgroundSchoolBenefits" />
        <div class="school-title font-black text-4xl text-white">LỢI ÍCH</div>
        <Benefits />
      </div>
      <div class="image-container overflow-hidden">
        <img :src="backgroundSchoolFeatures" alt="backgroundSchoolFeatures" />
        <div class="school-feature-title font-black text-5xl text-[#F7C12F]">
          TÍNH NĂNG
        </div>

        <!-- Sử dụng component Features -->
        <Features @featureClick="handleOnClick" />
      </div>

      <div class="image-container mt-[-10px]">
        <img :src="backgroundSchoolStrong" alt="backgroundSchoolStrong" />
        <SellingPoint />
      </div>
    </div>
  </AntModal>
</template>

<script>
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import SchoolFeature from "@/views/ThirdFloor/School/SchoolFeature.vue";
import Features from "@/components/School/Features.vue";
import Benefits from "@/components/School/Benefits.vue";
import SellingPoint from "@/components/School/SellingPoint.vue";
import LoadingModal from "@/components/LoadingModal.vue";

import backgroundSchoolFeatures from "@/assets/image/school/background-school-features.svg";
import backgroundSchoolBenefits from "@/assets/image/school/background-school-benefits.svg";
import backgroundSchoolStrong from "@/assets/image/school/background-school-strong.svg";

import { handlePopup } from "@/composables/loadingModal/index.js";

export default {
  name: "School",
  components: {
    AntModal,
    SchoolFeature,
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
    const isOpenSchoolFeature = ref(false);
    const featureNumber = ref(1);

    const handleClick = () => {
      openSchoolFeature();
    };

    const handleCloseSchoolFeature = () => {
      console.log("Ok clicked Close School Feature");
      isOpenSchoolFeature.value = false;
    };

    const openSchoolFeature = () => {
      console.log("click open school feature");
      isOpenSchoolFeature.value = true;
    };

    const handleOnClick = (value) => {
      console.log(`Feature ${value} clicked`);
      featureNumber.value = value;
      if (value === 1) {
        openSchoolFeature();
      } else if (value === 2) {
        openSchoolFeature();
        console.log("Feature 2 clicked");
      }
    };

    return {
      featureNumber,
      isOpenLoadingModal,
      isOpenSchoolFeature,
      backgroundSchoolStrong,
      backgroundSchoolBenefits,
      backgroundSchoolFeatures,
      openSchoolFeature,
      handleClick,
      handleCloseSchoolFeature,
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

.school-title {
  position: absolute;
  top: 12%;
  left: 16%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
.school-feature-title {
  position: absolute;
  top: 45%;
  left: 23%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
</style>
