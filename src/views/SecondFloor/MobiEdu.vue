<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <img :src="mobiEdu" alt="mobiEdu" />
  </AntModal>
</template>

<script lang="ts">
import AntModal from "@/components/reusable/AntModal.vue";
import mobiEdu from "@/assets/image/mobiEdu.svg";

export default {
  name: "ModalContent",
  components: {
    AntModal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    return { mobiEdu };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
