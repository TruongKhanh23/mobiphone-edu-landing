<!-- AntModal.vue -->
<template>
  <a-modal
    class="custom-modal"
    width="93%"
    height="93%"
    footer=""
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <slot></slot>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Modal } from "ant-design-vue";

export default defineComponent({
  name: "AntModal",
  components: {
    AModal: Modal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
});
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
