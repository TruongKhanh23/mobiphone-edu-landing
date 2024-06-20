<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <DepartmentFeatureOne
      :visible="isOpenDepartmentFeatureOne"
      :handleOk="handleCloseDepartmentFeatureOne"
      :handleCancel="handleCloseDepartmentFeatureOne"
      class="z-20"
    />
    <div @click="handleClick" class="image-container overflow-hidden">
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
      <Features />
    </div>
    <div @click="handleClick" class="image-container mt-[-10px]">
      <img
        :src="backgroundDepartmentBenefits"
        alt="backgroundDepartmentBenefits"
      />
      <Benefits />
    </div>
    <div @click="handleClick" class="image-container">
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

import departmentHighlightFeatures from "@/assets/image/department-hightlight-features.png";
import departmentOtherInfo from "@/assets/image/department-other-info.png";
import circleFeatures from "@/assets/image/circle-features.png";

import backgroundDepartmentFeatures from "@/assets/image/background-department-features.png";
import backgroundDepartmentBenefits from "@/assets/image/background-department-benefits.png";
import backgroundDepartmentStrong from "@/assets/image/background-department-strong.png";

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
    const dataImage = [departmentHighlightFeatures, departmentOtherInfo];

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

    return {
      isOpenDepartmentFeatureOne,
      dataImage,
      circleFeatures,
      backgroundDepartmentStrong,
      backgroundDepartmentBenefits,
      backgroundDepartmentFeatures,
      openDepartmentFeatureOne,
      handleClick,
      handleCloseDepartmentFeatureOne,
    };
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  cursor: pointer;
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
