<template>
  <div>
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1}`"
    >
      <div
        :class="`${benefit.parentClass} hover:scale-110 border-2 border-white bg-white text-black shadow-effect flex rounded-md items-center justify-center`"
      >
        <!--Column 1 30%-->
        <div class="w-3/10">
          <img :src="benefit.icon" :class="benefit.iconClass" />
        </div>
        <!-- Column 2 70%-->
        <div :class="`${benefit.contentClass} w-7/10 ml-2`">
          <div :class="benefit.titleClass" v-html="formattedDescription(benefit.title)">
          </div>
          <div v-if="benefit.description" :class="benefit.descriptionClass" v-html="formattedDescription(benefit.description)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import magnifyingGlass from "@/assets/icon/magnifying-glass.svg";
import statistic from "@/assets/icon/statistic.svg";
import multipleEclipse from "@/assets/icon/multiple-eclipse.svg";

import formattedDescription from "@/utils/index.js";

export default defineComponent({
  name: "Benefits",
  setup() {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        icon: statistic,
        title:
          "Đánh giá toàn diện và thúc đẩy \n chuyển đổi số nhanh chóng & dễ dàng",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-center italic text-lg",
        descriptionClass: "text-center text-sm px-6",
        parentClass: "w-[35vw] h-[13vh]",
      },
      {
        icon: magnifyingGlass,
        title: "Đánh giá hiệu quả giáo dục thông",
        description: "qua báo cáo & thống kê.",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-center italic text-lg",
        descriptionClass: "text-center text-lg",
        parentClass: "w-[35vw] h-[13vh]",
      },
      {
        icon: multipleEclipse,
        title: "Hỗ trợ quản lý hệ thống giáo dục.",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-center italic text-lg",
        descriptionClass: "text-center text-sm",
        parentClass: "w-[35vw] h-[13vh]",
      },
    ];

    return {
      benefits,
      formattedDescription,
    };
  },
});
</script>

<style scoped>
.benefit-1 {
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.benefit-2 {
  position: absolute;
  top: 46%;
  left: 60%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.benefit-3 {
  position: absolute;
  top: 25%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.shadow-effect {
  box-shadow: 10px 10px 0 rgb(92, 190, 254), 0 4px 10px rgb(92, 190, 254);
}
</style>
