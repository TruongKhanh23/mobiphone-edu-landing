<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <DepartmentFeature
      :open="isOpenDepartmentFeature"
      :handleOk="handleCloseDepartmentFeature"
      :handleCancel="handleCloseDepartmentFeature"
      class="z-20"
    />
    <div class="image-container overflow-hidden">
      <img
        :src="backgroundDepartmentFeatures"
        alt="backgroundDepartmentFeatures"
      />
      <div
        class="feature-title font-montserratExtraBold font-black text-4xl text-[#D7DEFF]"
      >
        TÍNH NĂNG
      </div>

      <!-- Sử dụng component Features -->
      <Features @featureClick="handleOnClick" />
    </div>
    <div class="image-container mt-[-10px]">
      <img
        :src="backgroundDepartmentBenefits"
        alt="backgroundDepartmentBenefits"
      />
      <Benefits />
    </div>
    <div class="image-container mt-[-10px]">
      <img :src="backgroundDepartmentStrong" alt="backgroundDepartmentStrong" />
      <SellingPoint />
    </div>
  </AntModal>
</template>

<script lang="ts">
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import DepartmentFeature from "@/views/ThirdFloor/Department/DepartmentFeature.vue";
import Features from "@/components/Department/Features.vue";
import Benefits from "@/components/Department/Benefits.vue";
import SellingPoint from "@/components/Department/SellingPoint.vue";

import backgroundDepartmentFeatures from "@/assets/image/background-department-features.svg";
import backgroundDepartmentBenefits from "@/assets/image/background-department-benefits.svg";
import backgroundDepartmentStrong from "@/assets/image/background-department-strong.svg";

import { handlePopup } from "@/composables/loadingModal/index.js";

export default {
  name: "Department",
  components: {
    AntModal,
    DepartmentFeature,
    Features,
    Benefits,
    SellingPoint,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup();
    const isOpenDepartmentFeature = ref<boolean>(false);

    const handleClick = () => {
      openDepartmentFeature();
    };

    const handleCloseDepartmentFeature = () => {
      console.log("Ok clicked Close Department Feature");
      isOpenDepartmentFeature.value = false;
    };

    const openDepartmentFeature = () => {
      console.log("click open department feature");
      isOpenDepartmentFeature.value = true;
    };

    const handleOnClick = (featureNumber: number) => {
      console.log(`Feature ${featureNumber} clicked`);
      if (featureNumber === 1) {
        openDepartmentFeature();
      } else if (featureNumber === 2) {
        openDepartmentFeature();
        console.log("Feature 2 clicked");
      }
    };

    return {
      isOpenLoadingModal,
      isOpenDepartmentFeature,
      backgroundDepartmentStrong,
      backgroundDepartmentBenefits,
      backgroundDepartmentFeatures,
      openDepartmentFeature,
      handleClick,
      handleCloseDepartmentFeature,
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

.feature-title {
  position: absolute;
  top: 12%;
  left: 16%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
</style>
