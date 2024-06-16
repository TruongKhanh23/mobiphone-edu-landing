<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 h-screen w-screen flex items-center justify-center"
  >
    <div
      class="h-[80%] w-[80%] mx-4 md:mx-0 flex flex-col items-center rounded-lg bg-white"
    >
      <a-button
        class="back-button absolute top-[10%] right-[10%] z-10"
        size="large"
        @click="onClickBackButton"
      >
        <div class="flex items-center justify-center">
          <RollbackOutlined />
          <span class="ml-2">Quay lại</span>
        </div>
      </a-button>
      <a-tabs v-model="activeKey" type="card" centered>
        <a-tab-pane key="1" tab="Tính năng 1">
          <div class="tab-content custom-scrollbar">
            <img :src="infographicHealthLong" alt="long image" />
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tính năng 2"
          >Content of Tính năng Pane 2</a-tab-pane
        >
        <a-tab-pane năng-pane key="3" tab="Tính năng 3"
          >Content of Tính năng Pane 3</a-tab-pane
        >
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Tabs, TabPane, Button } from "ant-design-vue";
import { RollbackOutlined } from "@ant-design/icons-vue";
import inforgraphic1 from "@/assets/inforgraphic-1.jpg";
import infographicHealthLong from "@/assets/image/infographic-health-long.png";
import secondFloorData from "@/assets/data/secondFloor.json";
export default {
  components: {
    ATabs: Tabs,
    ATabPane: TabPane,
    AButton: Button,
    RollbackOutlined,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["action:closeSecondFloor"],
  setup(_, { emit }) {
    const activeKey = ref("1");
    const data = secondFloorData.secondFloor.one;
    function onClickBackButton() {
      console.log("Click back");
      emit("action:closeSecondFloor");
    }
    return {
      data,
      activeKey,
      inforgraphic1,
      infographicHealthLong,
      onClickBackButton,
    };
  },
};
</script>

<style>
.ant-tabs-top {
  margin-top: 0 !important;
}
.ant-tabs-nav-operations {
  display: none !important;
}
.back-button {
  line-height: 1.5714285714285714 !important;
}
.tab-content {
  max-height: 77%; /* Adjust this value as needed */
  overflow-y: auto;
  padding: 16px; /* Optional: Add some padding */
}
.custom-scrollbar {
  &:hover {
    &::-webkit-scrollbar-track {
      @apply block;
    }

    &::-webkit-scrollbar-thumb {
      @apply block;
    }
  }

  &::-webkit-scrollbar {
    @apply w-2.5 h-2.5;
  }

  &::-webkit-scrollbar-track {
    @apply hidden px-1 bg-[white];
  }

  &::-webkit-scrollbar-thumb {
    @apply hidden bg-[#C4DDEC] rounded-full;

    &:hover {
      @apply bg-[black];
    }
  }
}
</style>
