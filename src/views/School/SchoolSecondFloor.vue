<template>
  <a-modal
    class="custom-modal"
    width="93%"
    height="93%"
    footer=""
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-menu
      :selectedKeys="current"
      mode="horizontal"
      :items="items"
      class="flex items-center justify-center"
      @click="handleClick"
    />
    <SchoolFeatureOne
      :visible="isOpenSchoolFeatureOne"
      :handleOk="handleCloseSchoolFeatureOne"
      :handleCancel="handleCloseSchoolFeatureOne"
      class="z-20"
    />
    <img :src="infographicHealthLong" alt="long image" class="w-full h-auto" />
  </a-modal>
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
    const isOpenSchoolFeatureOne = ref<boolean>(false);
    const current = ref<string[]>([""]);
    const items = ref<MenuProps["items"]>([
      {
        key: "feature-one",
        icon: () => h(AppstoreOutlined),
        label: "Tính năng 1",
        title: "Tính năng 1",
      },
      {
        key: "feature-two",
        icon: () => h(AppstoreOutlined),
        label: "Tính năng 2",
        title: "Tính năng 2",
      },
      {
        key: "feature-three",
        icon: () => h(AppstoreOutlined),
        label: "Tính năng 3",
        title: "Tính năng 3",
      },
    ]);
    const handleClick: MenuProps["onClick"] = (e) => {
      //console.log("click", e);
      const { key } = e;
      switch (key) {
        case "feature-one":
          openSchoolFeatureOne();
          break;
        case "feature-two":
          console.log("feature-two");
          break;
        case "feature-three":
          console.log("feature-three");
          break;
      }
    };

    const openSchoolFeatureOne = () => {
      console.log("click open school feature one");
      isOpenSchoolFeatureOne.value = true;
      current.value = "";
    };
    const handleCloseSchoolFeatureOne = () => {
      console.log("Ok clicked Close School Feature One");
      isOpenSchoolFeatureOne.value = false;
    };

    return {
      isOpenSchoolFeatureOne,
      current,
      items,
      infographicHealthLong,
      handleClick,
      openSchoolFeatureOne,
      handleCloseSchoolFeatureOne,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
