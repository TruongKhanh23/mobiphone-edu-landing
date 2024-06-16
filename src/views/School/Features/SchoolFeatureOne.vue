<template>
  <a-modal
    class="custom-modal"
    width="80%"
    height="80%"
    footer=""
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <img :src="inforgraphic1" alt="long image" class="w-full h-auto" />
  </a-modal>
</template>

<script lang="ts">
import { h, ref } from "vue";
import { Modal, Menu, MenuProps } from "ant-design-vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";

import inforgraphic1 from "@/assets/inforgraphic-1.jpg";

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
    const current = ref<string[]>(["mail"]);
    const items = ref<MenuProps["items"]>([
      {
        key: "mail",
        icon: () => h(AppstoreOutlined),
        label: "Tính năng 1 - Tầng 3",
        title: "Tính năng 1",
      },
      {
        key: "app",
        icon: () => h(AppstoreOutlined),
        label: "Tính năng 2",
        title: "Tính năng 2",
      },
      {
        key: "three",
        icon: () => h(AppstoreOutlined),
        label: "Tính năng 3",
        title: "Tính năng 3",
      },
    ]);

    return {
      current,
      items,
      inforgraphic1,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
