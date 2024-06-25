<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <SchoolBenefit
      :open="isOpenSchoolBenefit"
      :itemNumber="benefitNumber"
      :handleOk="handleCloseSchoolBenefit"
      :handleCancel="handleCloseSchoolBenefit"
      class="z-20"
    />
    <div class="bg-[#021929]">
      <div class="image-container mt-[-10px]">
        <img :src="backgroundSchoolBenefits" alt="backgroundSchoolBenefits" />
        <div class="school-title font-black text-4xl text-white">LỢI ÍCH</div>
        <Benefits @benefitClick="handleOnClick" />
      </div>
      <div class="image-container overflow-hidden">
        <img :src="backgroundSchoolFeatures" alt="backgroundSchoolFeatures" />
        <div class="school-feature-title font-black text-5xl text-[#F7C12F]">
          TÍNH NĂNG
        </div>

        <!-- Sử dụng component Features -->
        <Features />
      </div>

      <div class="image-container mt-[-10px]">
        <img :src="backgroundSchoolStrong" alt="backgroundSchoolStrong" />
        <div class="school-strong-title font-black text-5xl text-white">
          ĐIỂM MẠNH
        </div>
        <SellingPoint />
      </div>
    </div>
  </AntModal>
</template>

<script>
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import SchoolBenefit from "@/views/ThirdFloor/School/SchoolBenefit.vue";
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
    SchoolBenefit,
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
    const isOpenSchoolBenefit = ref(false);
    const benefitNumber = ref(1);

    const handleCloseSchoolBenefit = () => {
      console.log("Ok clicked Close School Feature");
      isOpenSchoolBenefit.value = false;
    };

    const openSchoolBenefit = () => {
      console.log("click open school Benefits");
      isOpenSchoolBenefit.value = true;
    };

    const handleOnClick = (value) => {
      console.log(`Benefits ${value} clicked`);
      const itemsHasDetails = [2, 3];
      if (itemsHasDetails.includes(value)) {
        benefitNumber.value = value;
        openSchoolBenefit();
      }
    };

    return {
      benefitNumber,
      isOpenLoadingModal,
      isOpenSchoolBenefit,
      backgroundSchoolStrong,
      backgroundSchoolBenefits,
      backgroundSchoolFeatures,
      openSchoolBenefit,
      handleCloseSchoolBenefit,
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
.school-strong-title {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
</style>
