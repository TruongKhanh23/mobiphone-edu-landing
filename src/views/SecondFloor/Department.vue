<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <DepartmentFeatureOne
      :visible="isOpenDepartmentFeatureOne"
      :handleOk="handleCloseDepartmentFeatureOne"
      :handleCancel="handleCloseDepartmentFeatureOne"
      class="z-20"
    />
    <div class="background-image" @click="handleClick"></div>
  </AntModal>
</template>

<script lang="ts">
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import DepartmentFeatureOne from "@/views/ThirdFloor/Department/DepartmentFeatureOne.vue";

import departmentHighlightFeatures from "@/assets/image/department-hightlight-features.png";
import departmentOtherInfo from "@/assets/image/department-other-info.png";
import circleFeatures from "@/assets/image/circle-features.png";

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
      openDepartmentFeatureOne,
      handleClick,
      handleCloseDepartmentFeatureOne,
    };
  },
};
</script>

<style scoped>
.background-image {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/image/background-department.svg");
  background-size: cover;
  background-position: center;
  cursor: pointer;
  overflow: auto;
}
</style>
