<template>
  <div
    class="flex flex-wrap justify-center items-center space-x-16 sellingPoint-school"
  >
    <div
      v-for="(sellingPoint, index) in sellingPoints"
      :key="index"
      :class="`sellingPoint-${index + 1} cursor-pointer`"
      @click="handleSellingPointClick(index + 1)"
    >
      <div
        :class="`${sellingPoint.parentClass} hover:scale-110 text-white rounded-md flex flex-col items-center justify-center`"
      >
        <div class="flex justify-center items-center">
          <img :src="sellingPoint.icon" :class="sellingPoint.iconClass" alt="icon"/>
        </div>
        <div :class="`${sellingPoint.contentClass} ml-2`">
          <div
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
import humanHead from "@/assets/icon/school/human-head-icon.svg";
import phone from "@/assets/icon/school/phone-icon.svg";

export default defineComponent({
  name: "SellingPoints",
  emits: ["sellingPointClick"],
  setup(_, { emit }) {
    // Đoạn text của các lợi ích
    const sellingPoints = [
      {
        icon: humanHead,
        description:
          "Học sinh có thể tự học, tự luyện tập theo từng chủ đề theo khả năng của mình.",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-bold text-center text-2xl text-[#137BB5]",
        descriptionClass: "font-bold text-white text-center text-lg px-6",
        parentClass:
          "w-[30vw] h-[30vh] p-4 bg-gradient-to-r from-[#0099FF] to-[#03578F] pt-8",
      },
      {
        icon: phone,
        description:
          "Hệ thống phân tích trình độ và đưa ra bài luyện tập phù hợp",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-bold text-xl text-[#137BB5] text-center",
        descriptionClass: "font-bold text-white text-center text-lg px-6",
        parentClass:
          "w-[30vw] h-[30vh] p-4 bg-gradient-to-r from-[#0099FF] to-[#03578F] pt-8",
      },
    ];

    function formattedDescription(text) {
      if (!text) {
        return "";
      }
      return text.replace(/\n/g, "<br>");
    }

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
.sellingPoint-1 {
  border-radius: 5px;
}

.sellingPoint-2 {
  border-radius: 5px;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

.sellingPoint-school {
  position: absolute;
  top: 35%;
  left: 15%;
}
</style>
