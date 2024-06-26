<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <DepartmentFeature
      :open="isOpenDepartmentFeature"
      :featureNumber="featureNumber"
      :handleOk="handleCloseDepartmentFeature"
      :handleCancel="handleCloseDepartmentFeature"
      class="z-20"
    />
    <div class="bg-[#021929]">
      <div class="image-container overflow-hidden">
        <img
          :src="backgroundDepartmentFeatures"
          alt="backgroundDepartmentFeatures"
        />
        <div
          class="department-title font-black text-5xl text-white"
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
        <img
          :src="backgroundDepartmentStrong"
          alt="backgroundDepartmentStrong"
        />
        <div
          class="department-strong-title flex flex-col items-center"
        >
          <span class="font-black text-5xl text-[#EEBE3A]">ĐIỂM MẠNH</span>
          <span class="text-white text-xl font-bold mt-2">Tính linh hoạt và thuận tiện cho Nhà trường và Sở/Phòng GD&ĐT</span>
        </div>
        <SellingPoint />
      </div>
    </div>
  </AntModal>
</template>

<script>
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import DepartmentFeature from "@/views/ThirdFloor/Department/DepartmentFeature.vue";
import Features from "@/components/Department/Features.vue";
import Benefits from "@/components/Department/Benefits.vue";
import SellingPoint from "@/components/Department/SellingPoint.vue";
import LoadingModal from "@/components/LoadingModal.vue";

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
    LoadingModal, // Đăng ký LoadingModal như một component
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup(2000);
    const isOpenDepartmentFeature = ref(false);
    const featureNumber = ref(1);

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

    const handleOnClick = (value) => {
      console.log(`Feature ${value} clicked`);
      featureNumber.value = value;
      if (value === 1) {
        openDepartmentFeature();
      } else if (value === 2) {
        openDepartmentFeature();
        console.log("Feature 2 clicked");
      }
    };

    return {
      featureNumber,
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

.department-title {
  position: absolute;
  top: 12%;
  left: 16%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
.department-strong-title {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
}
</style>
