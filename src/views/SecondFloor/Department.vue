<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <DepartmentFeatureOne
      :visible="isOpenDepartmentFeatureOne"
      :handleOk="handleCloseDepartmentFeatureOne"
      :handleCancel="handleCloseDepartmentFeatureOne"
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
import DepartmentFeatureOne from "@/views/ThirdFloor/Department/DepartmentFeatureOne.vue";
import Features from "@/components/Department/Features.vue"; // Import component Features
import Benefits from "@/components/Department/Benefits.vue";
import SellingPoint from "@/components/Department/SellingPoint.vue";

import backgroundDepartmentFeatures from "@/assets/image/background-department-features.svg";
import backgroundDepartmentBenefits from "@/assets/image/background-department-benefits.svg";
import backgroundDepartmentStrong from "@/assets/image/background-department-strong.svg";

export default {
  name: "ModalContent",
  components: {
    AntModal,
    DepartmentFeatureOne,
    Features,
    Benefits,
    SellingPoint,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const isOpenDepartmentFeatureOne = ref<boolean>(false);

    const handleClick = () => {
      openDepartmentFeatureOne();
    };

    const handleCloseDepartmentFeatureOne = () => {
      console.log("Ok clicked Close Department Feature One");
      isOpenDepartmentFeatureOne.value = false;
    };

    const openDepartmentFeatureOne = () => {
      console.log("click open department feature one");
      isOpenDepartmentFeatureOne.value = true;
    };

    const handleOnClick = (featureNumber: number) => {
      console.log(`Feature ${featureNumber} clicked`);
      if (featureNumber === 1) {
        openDepartmentFeatureOne();
      } else if (featureNumber === 2) {
        openDepartmentFeatureOne();
        console.log("Feature 2 clicked");
      }
    };

    return {
      isOpenDepartmentFeatureOne,
      backgroundDepartmentStrong,
      backgroundDepartmentBenefits,
      backgroundDepartmentFeatures,
      openDepartmentFeatureOne,
      handleClick,
      handleCloseDepartmentFeatureOne,
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

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Nền đen mờ để chữ dễ đọc hơn */
  padding: 10px;
  border-radius: 5px;
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
