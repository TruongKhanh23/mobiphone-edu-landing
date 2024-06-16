<template>
  <a-modal
    :visible="visible"
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
    />
    <img :src="infographicHealthLong" alt="long image" class="w-full h-auto" />
  </a-modal>
</template>

<script lang="ts">
import { h, ref } from "vue";
import { Modal, Menu, MenuProps } from "ant-design-vue";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons-vue";

import infographicHealthLong from "@/assets/image/infographic-health-long.png";

export default {
  name: "ModalContent",
  components: {
    AModal: Modal,
    AMenu: Menu,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const current = ref<string[]>(["mail"]);
    const items = ref<MenuProps["items"]>([
      {
        key: "mail",
        icon: () => h(MailOutlined),
        label: "Navigation One",
        title: "Navigation One",
      },
      {
        key: "app",
        icon: () => h(AppstoreOutlined),
        label: "Navigation Two",
        title: "Navigation Two",
      },
      {
        key: "three",
        icon: () => h(AppstoreOutlined),
        label: "Navigation Three",
        title: "Navigation Three",
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
