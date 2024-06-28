<template>
  <div>
    <!-- Floating icons -->
    <div
      class="absolute top-1/2 right-12 transform -translate-y-1/2 flex flex-col gap-2"
    >
      <div
        v-for="(icon, index) in icons"
        :key="index"
        :class="{
          'scale-150': activeIconIndex === index,
          'hover:scale-110': activeIconIndex !== index,
        }"
        class="cursor-pointer transition-transform transform z-2"
        @click="showPopup(index)"
      >
        <img :src="icon" alt="Icon" class="w-10 h-10 mb-4" />
      </div>
    </div>

    <!-- Popup -->
    <div
      v-if="isPopupVisible"
      class="absolute top-1/2 left-12 w-1/5 max-h-4/5 overflow-y-auto p-5 shadow-lg transform -translate-y-1/2 z-10 rounded-lg"
      :style="{
        height: popupHeight,
        backgroundImage: `url(${backgroundPopupDesription})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <h1 class="text-white font-bold text-2xl mb-5">
        {{ randomText.title }}
      </h1>
      <p
        class="text-white text-sm"
        :class="[1].includes(activeIconIndex) ? 'leading-8' : ''"
        v-html="formattedDescription"
      ></p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import consultantIcon from "@/assets/icon/consultant-icon.png";
import contributeIcon from "@/assets/icon/contribute-icon.png";
import networkIcon from "@/assets/icon/network-icon.png";
import personIcon from "@/assets/icon/person-icon.png";
import settingIcon from "@/assets/icon/setting-icon.png";
import leftRightBarData from "@/assets/data/leftRightBarData.json";
import backgroundPopupDesription from "@/assets/image/background-popup-description.svg";

export default {
  name: "LeftRightBarIcon",
  setup() {
    const isPopupVisible = ref(false);
    const randomText = ref({ title: "", description: "" });
    const popupHeight = ref("auto");
    const activeIconIndex = ref(null);

    const icons = [
      networkIcon,
      settingIcon,
      contributeIcon,
      personIcon,
      consultantIcon,
    ];

    const showPopup = (index) => {
      if (activeIconIndex.value === index) {
        // If the same icon is clicked again, toggle the popup visibility
        isPopupVisible.value = !isPopupVisible.value;
        if (!isPopupVisible.value) {
          activeIconIndex.value = null;
        }
      } else {
        randomText.value = leftRightBarData[index];
        popupHeight.value = "auto"; // Adjust based on text length
        isPopupVisible.value = true;
        activeIconIndex.value = index;
      }
      console.log("activeIconIndex.value", activeIconIndex.value);
    };

    const formattedDescription = computed(() => {
      return randomText.value.description.replace(/\n/g, "<br>");
    });

    return {
      icons,
      isPopupVisible,
      randomText,
      popupHeight,
      activeIconIndex,
      backgroundPopupDesription,
      showPopup,
      formattedDescription,
    };
  },
};
</script>

<style scoped>
/* Floating icons styles */
</style>
