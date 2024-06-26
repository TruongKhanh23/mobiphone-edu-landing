<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <div class="p-4 flex justify-center items-center bg-[#021929]">
      <div class="mx-auto w-[70vw] text-3xl text-white">
        <component :is="currentComponent" />
      </div>
    </div>
  </AntModal>
</template>

<script>
import AntModal from "@/components/reusable/AntModal.vue";

import inforgraphic1 from "@/assets/inforgraphic-1.jpg";
import inforgraphic2 from "@/assets/inforgraphic-2.jpg";
import AdaptiveLearning from "./AdaptiveLearning.vue";
import AnalyzeRecommend from "./AnalyzeRecommend.vue"

export default {
  name: "StudentSellingPoint",
  components: {
    AntModal,
    AdaptiveLearning,
    AnalyzeRecommend,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
    sellingPointNumber: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentComponent() {
      return this.sellingPointNumber === 1 ? 'AdaptiveLearning' : 'AnalyzeRecommend';
    },
  },
  setup() {
    function getImage(feature) {
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
      getImage,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
