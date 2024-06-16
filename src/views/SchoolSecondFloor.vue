<template>
  <a-modal
    class="custom-modal"
    width="80%"
    height="80%"
    footer=""
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-menu
      :selectedKeys="current"
      @update:selected-keys="(val: string[]) => (current = val)"
      mode="horizontal"
      :items="items"
      class="flex items-center justify-center"
    />
    <img :src="infographicHealthLong" alt="long image" class="w-full h-auto" />
  </a-modal>
</template>

<script lang="ts">
import { h, ref } from "vue";
import { Modal, Menu, MenuProps } from "ant-design-vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";

import infographicHealthLong from "@/assets/image/infographic-health-long.png";

export default {
  name: "ModalContent",
  components: {
    AModal: Modal,
    AMenu: Menu,
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
        label: "Tính năng 1",
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
      infographicHealthLong,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
