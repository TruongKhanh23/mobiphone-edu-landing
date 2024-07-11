<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <component :is="currentComponent" />
  </AntModal>
</template>

<script>
import AntModal from "@/components/reusable/AntModal.vue";

import inforgraphic1 from "@/assets/inforgraphic-1.jpg";
import inforgraphic2 from "@/assets/inforgraphic-2.jpg";

import IdentificationLearningMaterials from "@/views/ThirdFloor/Department/IdentificationLearningMaterials.vue";
import MonitorDTI from "@/views/ThirdFloor/Department/MonitorDTI.vue";

export default {
  name: "DepartmentFeatures",
  components: {
    AntModal,
    MonitorDTI,
    IdentificationLearningMaterials,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
    featureNumber: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentComponent() {
      return this.featureNumber === 1
        ? "IdentificationLearningMaterials"
        : "MonitorDTI";
    },
  },
  setup() {
    function getFeatureImage(feature) {
      console.log("featureNumber", feature);
      switch (feature) {
        case 1:
          return inforgraphic1;
        case 2:
          return inforgraphic2;
      }
      return feature;
    }
    return {
      inforgraphic1,
      getFeatureImage,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
