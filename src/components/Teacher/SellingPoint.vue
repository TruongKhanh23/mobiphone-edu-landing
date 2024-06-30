<template>
  <div class="container flex flex-col justify-center gap-10 w-[80%]">
    <div
      v-for="(sellingPoint, index) in sellingPoints"
      :key="index"
      :class="`sellingPoint-${index + 1}`"
      @click="handleSellingPointClick(index + 1)"
    >
      <div
        :class="`${sellingPoint.parentClass} flex hover:scale-110 text-black items-center`"
      >
        <!--Column 1 30%-->
        <div
          class="border-2 rounded-full flex items-center justify-center p-3"
          :class="sellingPoint.divIconClass"
        >
          <img :src="sellingPoint.icon" :class="sellingPoint.iconClass" />
        </div>
        <!-- Column 2 70%-->
        <div :class="`${sellingPoint.contentClass} ml-4`">
          <div
            v-if="sellingPoint.title"
            :class="sellingPoint.titleClass"
            v-html="formattedDescription(sellingPoint.title)"
          ></div>
          <div
            v-if="sellingPoint.description"
            :class="sellingPoint.descriptionClass"
            v-html="formattedDescription(sellingPoint.description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import idea from "@/assets/icon/teacher/idea-icon.svg";
import location from "@/assets/icon/teacher/location-icon.svg";
import magnifyingGlass from "@/assets/icon/teacher/magnifying-glass-icon.svg";
import multipleHuman from "@/assets/icon/teacher/multiple-human-icon.svg";

import formattedDescription from "@/utils/index.js";

export default defineComponent({
  name: "SellingPoints",
  emits: ["sellingPointClick"],
  setup(_, { emit }) {
    // Đoạn text của các điểm bán hàng
    const sellingPoints = [
      {
        icon: location,
        description: "Đa dạng cách thức thiết kế bài giảng",
        divIconClass: "",
        iconClass: "w-10 h-10",
        contentClass: "",
        titleClass: "font-bold text-2xl text-white mb-2",
        descriptionClass: "text-lg text-white",
        parentClass: "min-h-[10vh] w-fit cursor-pointer",
      },
      {
        icon: magnifyingGlass,
        description:
          "Được truy cập vào kho bài giảng và \n giáo án trong trường",
        divIconClass: "",
        iconClass: "w-10 h-10",
        contentClass: "",
        titleClass: "font-bold text-xl text-white min-h-[17vh]",
        descriptionClass: "text-white text-lg",
        parentClass: "min-h-[10vh] w-fit cursor-pointer",
      },
      {
        icon: multipleHuman,
        description:
          "Giáo viên có thể giao bài tập, tổ chức \n kiểm tra trực tuyến và nhận đánh giá \n từ hệ thống AI",
        divIconClass: "border-[#36437F]",
        iconClass: "w-10 h-10",
        contentClass: "",
        titleClass: "font-bold text-xl text-white mb-2",
        descriptionClass: "text-lg text-white",
        parentClass: "min-h-[10vh] w-fit",
      },
      {
        icon: idea,
        description:
          "Đánh giá chi tiết về tính chuyên cần, năng lực, \nvà kết quả học tập của từng học sinh",
        divIconClass: "border-[#36437F]",
        iconClass: "w-10 h-10",
        contentClass: "",
        titleClass: "font-bold text-xl text-white min-h-[17vh]",
        descriptionClass: "text-white text-lg",
        parentClass: "min-h-[10vh] w-fit",
      },
    ];

    const handleSellingPointClick = (sellingPointNumber) => {
      emit("sellingPointClick", sellingPointNumber);
    };

    return {
      sellingPoints,
      formattedDescription,
      handleSellingPointClick,
    };
  },
});
</script>

<style scoped>
.container {
  position: absolute;
  top: 52.5%;
  left: 45%;
  transform: translate(-50%, -50%);
}

.sellingPoint-1 {
  border-radius: 5px;
}

.sellingPoint-2 {
  border-radius: 5px;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>
