<template>
  <div
    class="mobile-not-support flex flex-col items-center justify-center h-screen bg-gray-100"
  >
    <div class="text-center">
      <h1 class="text-2xl font-bold text-black">
        Bộ giải pháp quản lý E-learning
      </h1>
      <div class="flex flex-row items-center justify-center">
        <p class="text-2xl mb-0 font-bold text-black">của</p>
        <img
          :src="logoMobiEdu"
          class="ml-2 h-[1.1rem] w-auto !mb-0 pb-[1px]"
          alt="logo"
        />
      </div>
      <p class="text-lg text-gray-700 mt-4 mx-4">
        Trang web này không hỗ trợ cho thiết bị di động. Vui lòng truy cập bằng
        máy tính để bàn hoặc máy tính xách tay để có trải nghiệm tốt nhất.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import logoMobiEdu from "@/assets/logo-mobi-edu.png";

export default {
  name: "MobileNotSupport",
  setup() {
    return {
      logoMobiEdu,
    };
  },
};
</script>

<style scoped>
.mobile-not-support {
  background-color: #f0f0f0;
  color: #333;
}
</style>
