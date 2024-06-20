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

      <div class="feature-one">
        <div class="w-[23vw] h-40 hover:scale-110">
          <div class="text-right font-black text-4xl text-[#EEBE3A]">01</div>
          <div class="w-[75%]">
            <div class="font-bold text-justify text-[#0C9DEE] italic">
              ĐỊNH DANH cây học liệu theo chương học -
            </div>
            <div class="text-right text-sm">
              bài giảng chi tiết cho toàn Sở/Phòng.
            </div>
          </div>
        </div>
      </div>
      <div class="feature-two">
        <div class="border-4 border-white w-[30vw] h-40 bg-[red]"></div>
      </div>
      <div class="feature-three">
        <div class="border-4 border-white w-[30vw] h-40 bg-[red]"></div>
      </div>
      <div class="feature-four">
        <div class="border-4 border-white w-[25vw] h-40 bg-[red]"></div>
      </div>
      <div class="feature-five">
        <div class="border-4 border-white w-[25vw] h-40 bg-[red]"></div>
      </div>
    </div>
    <div @click="handleClick" class="image-container mt-[-10px]">
      <img
        :src="backgroundDepartmentBenefits"
        alt="backgroundDepartmentBenefits"
      />
      <div class="overlay-text">Text for Benefits</div>
    </div>
    <div @click="handleClick" class="image-container">
      <img :src="backgroundDepartmentStrong" alt="backgroundDepartmentStrong" />
      <div class="overlay-text">Text for Strong</div>
    </div>
  </AntModal>
</template>

<script lang="ts">
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import DepartmentFeatureOne from "@/views/ThirdFloor/Department/DepartmentFeatureOne.vue";

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
.feature-one {
  position: absolute;
  top: 40%;
  left: 16%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-two {
  position: absolute;
  top: 85%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-three {
  position: absolute;
  top: 83%;
  left: 78%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-four {
  position: absolute;
  top: 53%;
  left: 86%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-five {
  position: absolute;
  top: 23%;
  left: 86%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
</style>
