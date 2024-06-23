<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <img
      :src="getFeatureImage(sellingPointNumber)"
      alt="long image"
      class="w-full h-auto"
    />
  </AntModal>
</template>

<script>
import AntModal from "@/components/reusable/AntModal.vue";

import inforgraphic1 from "@/assets/inforgraphic-1.jpg";
import inforgraphic2 from "@/assets/inforgraphic-2.jpg";

export default {
  name: "ModalContent",
  components: {
    AntModal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
    sellingPointNumber: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    function getFeatureImage(feature) {
      console.log("sellingPointNumber", feature);
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
