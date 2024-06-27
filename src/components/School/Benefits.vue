<template>
  <div
    class="flex justify-center items-center space-x-16 benefit-school"
  >
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1} shadow-effect`"
      @click="handleBenefitClick(index + 1)"
    >
      <div
        :class="`${benefit.parentClass} hover:scale-110 text-black rounded-md items-center justify-center border-2-[red]`"
      >
        <div class="flex justify-center items-center">
          <img :src="benefit.icon" :class="benefit.iconClass" alt="icon" />
        </div>
        <div :class="`${benefit.contentClass} ml-2`">
          <div
            class="mt-2"
            :class="benefit.titleClass"
            v-html="formattedDescription(benefit.title)"
          ></div>
          <div
            v-if="benefit.description"
            :class="benefit.descriptionClass"
            v-html="formattedDescription(benefit.description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import magnifyingGlass from "@/assets/icon/school/magnifying-glass-icon.svg";
import humanHead from "@/assets/icon/school/human-head-icon.svg";
import phone from "@/assets/icon/school/phone-icon.svg";

export default defineComponent({
  name: "Benefits",
  emits: ["benefitClick"],
  setup(_, { emit }) {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        icon: humanHead,
        title: "Hỗ trợ quản lí \n hệ thống giáo dục",
        description: "cho nhà trường",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass:
          "font-bold text-xl text-[#137BB5] min-h-[13vh]",
        descriptionClass: "text-lg",
        parentClass: "w-[18vw] h-[55vh] p-4 bg-white pt-8",
      },
      {
        icon: phone,
        title: "Xây dựng kế hoạch \n năm học nhanh chóng",
        description: "nhờ đồng bộ thông tin \n đa chiều",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-bold text-xl text-[#137BB5] min-h-[13vh]",
        descriptionClass: "text-lg",
        parentClass: "w-[18vw] h-[55vh] p-4 bg-[#F7C12F] pt-8 cursor-pointer",
      },
      {
        icon: magnifyingGlass,
        title: "Đánh giá hiệu quả \n giáo dục",
        description: "thông qua báo cáo \n và thống kê",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass:
          "font-bold text-xl text-[#137BB5] min-h-[13vh]",
        descriptionClass: "text-lg",
        parentClass: "w-[18vw] h-[55vh] p-4 bg-[#F7C12F] pt-8 cursor-pointer",
      },
    ];

    function formattedDescription(text) {
      if (!text) {
        return "";
      }
      return text.replace(/\n/g, "<br>");
    }

    const handleBenefitClick = (benefitNumber) => {
      emit("benefitClick", benefitNumber);
    };

    return {
      benefits,
      formattedDescription,
      handleBenefitClick,
    };
  },
});
</script>

<style scoped>
.benefit-1 {
  color: white;
  border-radius: 5px;
}

.benefit-2 {
  color: white;
  border-radius: 5px;
}

.benefit-3 {
  color: white;
  border-radius: 5px;
}

.shadow-effect {
  box-shadow: 10px 10px 0 rgb(92, 190, 254), 0 4px 10px rgb(92, 190, 254);
}
.benefit-school {
  position: absolute;
  left: 50%;
  top: 53.5%;
  transform: translate(-50%, -50%)
}
</style>
