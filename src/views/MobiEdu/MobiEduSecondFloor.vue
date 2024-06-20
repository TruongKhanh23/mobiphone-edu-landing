<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <iframe
      src="https://mobiedu.vn/gioi-thieu"
      class="w-full h-full"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </AntModal>
</template>

<script lang="ts">
import AntModal from "@/components/reusable/AntModal.vue";

export default {
  name: "ModalContent",
  components: {
    AntModal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
