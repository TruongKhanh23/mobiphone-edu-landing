<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <img :src="inforgraphic1" alt="long image" class="w-full h-auto" />
  </AntModal>
</template>

<script lang="ts">
import AntModal from "@/components/reusable/AntModal.vue";

import inforgraphic1 from "@/assets/inforgraphic-1.jpg";

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
    return {
      inforgraphic1,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
