<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 h-screen w-screen flex items-center justify-center gradient-bg"
  >
    <div
      class="h-16 w-[400px] mx-4 md:mx-0 flex flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <div><LoadingOutlined /></div>
      <p class="font-bold mb-0">Đang tải...</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #00101f, #043a4e);
}
</style>
