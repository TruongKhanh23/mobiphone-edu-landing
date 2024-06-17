<template>
  <a-modal
    class="custom-modal"
    width="93%"
    height="93%"
    footer=""
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div class="h-screen flex items-center justify-center">
      <!-- Phần tử cha với chiều rộng và chiều cao 100% -->
      <div
        class="w-full h-full border border-black flex items-center justify-center"
      >
        <iframe
          src="https://mobiedu.vn/gioi-thieu"
          class="w-full h-full"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </a-modal>
</template>

<script lang="ts">
import { ref } from "vue";
import { Modal } from "ant-design-vue";

import infographicHealthLong from "@/assets/image/infographic-health-long.png";

export default {
  name: "ModalContent",
  components: {
    AModal: Modal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const current = ref<string[]>([""]);

    return {
      current,
      infographicHealthLong,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
