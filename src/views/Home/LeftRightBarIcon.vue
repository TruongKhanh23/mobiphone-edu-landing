<template>
  <div>
    <!-- Floating icons -->
    <div
      class="absolute top-1/2 right-12 transform -translate-y-1/2 flex flex-col gap-2"
    >
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="cursor-pointer transition-transform transform hover:scale-110 z-2"
        @click="showPopup(index)"
      >
        <img :src="icon" alt="Icon" class="w-10 h-10" />
      </div>
    </div>

    <!-- Popup -->
    <div
      v-if="isPopupVisible"
      class="absolute top-1/2 left-12 w-1/6 max-h-4/5 overflow-y-auto bg-white bg-opacity-90 p-5 shadow-lg transform -translate-y-1/2 z-50 rounded-lg"
      :style="{ height: popupHeight }"
    >
      <p>{{ randomText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import consultantIcon from "@/assets/icon/consultant-icon.png";
import contributeIcon from "@/assets/icon/contribute-icon.png";
import networkIcon from "@/assets/icon/network-icon.png";
import personIcon from "@/assets/icon/person-icon.png";
import settingIcon from "@/assets/icon/setting-icon.png";
import leftRightBarData from "@/assets/data/leftRightBarData.json";

export default {
  name: "LeftRightBarIcon",
  setup() {
    const isPopupVisible = ref(false);
    const randomText = ref("");
    const popupHeight = ref("auto");
    const activeIconIndex = ref<number | null>(null);

    const icons = [
      consultantIcon,
      contributeIcon,
      networkIcon,
      personIcon,
      settingIcon,
    ];

    const texts = leftRightBarData.texts;

    const showPopup = (index: number) => {
      if (activeIconIndex.value === index) {
        // If the same icon is clicked again, toggle the popup visibility
        isPopupVisible.value = !isPopupVisible.value;
      } else {
        randomText.value = texts[index];
        popupHeight.value = "auto"; // Adjust based on text length
        isPopupVisible.value = true;
        activeIconIndex.value = index;
      }
    };

    return {
      icons,
      isPopupVisible,
      randomText,
      popupHeight,
      activeIconIndex,
      showPopup,
    };
  },
};
</script>

<style scoped>
/* Floating icons styles */
</style>
