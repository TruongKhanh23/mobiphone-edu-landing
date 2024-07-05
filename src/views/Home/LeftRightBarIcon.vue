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
      class="absolute top-[53%] left-12 w-fit h-4/5 overflow-y-auto px-5 py-10 shadow-lg transform -translate-y-1/2 z-10 rounded-lg bg-[#00142C] bg-opacity-[76%] flex items-center flex-col"
    >
      <h1
        v-if="randomText.title"
        class="text-white text-center py-[8px] px-[15px] w-[250px] font-semibold text-[24px] mb-8 bg-gradient-to-b from-[#4A535C] to-[#92989D]"
      >
        {{ randomText.title }}
      </h1>
      <!--Gioi thieu chung-->
      <div v-if="randomText.id === 'gioi-thieu-chung'" class="w-[290px]">
        <p
          v-for="(paragraph, index) in randomText.description"
          :key="index"
          class="text-white text-[16px] text-justify mb-0"
          v-html="formattedDescription(paragraph)"
        ></p>
      </div>
      <!--Chuc nang-->
      <div
        v-if="randomText.id === 'chuc-nang'"
        class="flex flex-col gap-[35px]"
      >
        <div
          v-for="(item, index) in randomText.description"
          :key="index"
          class="text-white text-[14px] text-justify w-[290px] min-h-[50px] bg-gradient-to-b from-[#07B1B9] to-[#031C3B] flex"
        >
          <div class="w-[25%] flex items-center justify-center">
            <!-- Thêm icon của bạn ở đây -->
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="w-[75%] flex items-center">
            <div v-html="formattedDescription(item.text)"></div>
          </div>
        </div>
      </div>
      <!--Lien he-->
      <div
        v-if="randomText.id === 'lien-he'"
        class="flex flex-col gap-[25px] text-white text-[14px] text-justify items-center justify-center"
      >
        <div
          v-for="(item, index) in randomText.description"
          :key="index"
          class="w-[290px] min-h-[50px] flex"
        >
          <div class="w-[30%] flex items-center justify-center">
            <!-- Thêm icon của bạn ở đây -->
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="w-[75%] flex items-center">
            <div v-html="formattedDescription(item.text)"></div>
          </div>
        </div>
        <div class="flex items-center justify-center flex-col">
          <div
            class="w-[250px] min-h-[70px] flex items-center justify-center text-white text-center font-semibold text-[20px] mb-6 bg-[#06D1D3]"
          >
            CÂU HỎI THƯỜNG GẶP
          </div>
          <p class="text-[16px]">
            Xem thêm
            <a
              class="text-[#06D1D3] font-bold underline"
              href="https://mobiedu.vn/ho-tro-khach-hang"
              target="_blank"
              >TẠI ĐÂY</a
            >
          </p>
        </div>
      </div>
      <!--Doi tuong-->
      <div
        v-if="randomText.id === 'doi-tuong'"
        class="flex flex-col gap-[30px] text-white text-[16px] text-justify items-center justify-center"
      >
        <div
          v-for="(item, index) in randomText.description"
          :key="index"
          class="w-[290px] min-h-[50px] flex"
        >
          <div class="w-[20%] flex items-center justify-center">
            <!-- Thêm icon của bạn ở đây -->
            <img :src="item.icon" alt="icon" class="w-full h-full" />
          </div>
          <div class="w-[80%] flex items-center">
            <div v-html="formattedDescription(item.text)"></div>
          </div>
        </div>
      </div>
      <!--Loi ich-->
      <div
        v-if="randomText.id === 'loi-ich'"
        class="flex flex-col gap-[25px] text-white text-[12px] text-justify items-center justify-center"
      >
        <div
          v-for="(item, index) in randomText.description"
          :key="index"
          class="w-[290px]"
        >
          <div
            v-if="item.positionIcon === 'left'"
            class="flex min-h-[60px] bg-gradient-to-r from-[#178486] to-[#042037]"
          >
            <div class="w-[30%] flex items-center justify-center">
              <!-- Thêm icon của bạn ở đây -->
              <img :src="item.icon" alt="icon" />
            </div>
            <div class="w-[70%] flex items-center">
              <div v-html="formattedDescription(item.text)"></div>
            </div>
          </div>
          <div
            v-else
            class="flex min-h-[60px] bg-gradient-to-r from-[#178486] to-[#042037]"
          >
            <div class="w-[75%] flex items-center justify-center">
              <div v-html="formattedDescription(item.text)"></div>
            </div>
            <div class="w-[25%] flex items-center justify-center">
              <!-- Thêm icon của bạn ở đây -->
              <img :src="item.icon" alt="icon" />
            </div>
          </div>
        </div>
      </div>
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
import { leftRightBarData } from "@/assets/data/leftRightBarData.js";
import backgroundPopupDesription from "@/assets/image/background-popup-description.svg";
import formattedDescription from "@/utils/index.js";

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
