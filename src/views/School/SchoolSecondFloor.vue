<template>
  <div>
    <SchoolFeatureOne
      :visible="isOpenFeatureOne"
      :handleOk="handleCloseFeatureOne"
      :handleCancel="handleCloseFeatureOne"
    />
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
        @click="handleClick"
      />
      <img
        :src="infographicHealthLong"
        alt="long image"
        class="w-full h-auto"
      />
    </a-modal>
  </div>
</template>

<script lang="ts">
import { h, ref } from "vue";
import { Modal, Menu, MenuProps } from "ant-design-vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";

import SchoolFeatureOne from "@/views/School/Features/SchoolFeatureOne.vue";
import infographicHealthLong from "@/assets/image/infographic-health-long.png";

export default {
  name: "ModalContent",
  components: {
    AModal: Modal,
    AMenu: Menu,
    SchoolFeatureOne,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const isOpenFeatureOne = ref<boolean>(false);
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

    const openFeatureOne = () => {
      console.log("click show modal");
      isOpenFeatureOne.value = true;
    };
    const handleCloseFeatureOne = () => {
      console.log("Ok clicked");
      isOpenFeatureOne.value = false;
    };
    const handleClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };

    return {
      current,
      items,
      infographicHealthLong,
      isOpenFeatureOne,
      openFeatureOne,
      handleCloseFeatureOne,
      handleClick,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
