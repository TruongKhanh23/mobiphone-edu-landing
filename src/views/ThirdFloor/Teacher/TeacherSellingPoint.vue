<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <div class="image-container mt-[-10px]">
      <component :is="currentComponent" />
    </div>
  </AntModal>
</template>

<script>
import AntModal from "@/components/reusable/AntModal.vue";
import inforgraphic1 from "@/assets/inforgraphic-1.jpg";
import inforgraphic2 from "@/assets/inforgraphic-2.jpg";
import LessonDesign from "@/views/ThirdFloor/Teacher/LessonDesign.vue";
import AccessLessonRepository from "@/views/ThirdFloor/Teacher/AccessLessonRepository.vue";

export default {
  name: "ModalContent",
  components: {
    AntModal,
    LessonDesign,
    AccessLessonRepository,
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
      return this.sellingPointNumber === 1 ? 'LessonDesign' : 'AccessLessonRepository';
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
.image-container {
  position: relative;
  width: 100%;
}
</style>
