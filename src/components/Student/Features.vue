<template>
  <div>
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="`feature-${index + 1}`"
    >
      <div
        :class="`${feature.parentClass} hover:scale-110 border-2 border-white bg-white text-black shadow-effect flex rounded-md items-center justify-center`"
      >
        <!--Column 1 30%-->
        <div class="w-3/10">
          <img :src="feature.icon" :class="feature.iconClass" alt="icon">
        </div>
        <!-- Column 2 70%-->
        <div :class="`${feature.contentClass} w-7/10 ml-6`">
          <div :class="feature.titleClass" v-html="formattedDescription(feature.title)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import book from "@/assets/icon/student/icon_book.svg";
import card from "@/assets/icon/student/icon_card.svg";
import computerHeavy from "@/assets/icon/student/icon_computerheavy.svg";
import universe from "@/assets/icon/student/icon_univer.svg";

import formattedDescription from "@/utils/index.js";

export default defineComponent({
  name: "features",
  setup() {
    // Đoạn text của các lợi ích
    const features = [
      {
        icon: computerHeavy,
        title:
          "Tham gia các kì thi trực tuyến",
        iconClass: "w-12 h-12",
        contentClass: "",
        titleClass: "font-semibold text-left text-md",
        descriptionClass: "text-center text-sm px-6",
        parentClass: "w-[30vw] h-[13vh]",
      },
      {
        icon: card,
        title: "Gợi ý bài luyện tập dựa theo năng lực \n của học sinh qua adaptive learning.",
        iconClass: "w-12 h-12",
        contentClass: "",
        titleClass: "font-semibold text-md",
        descriptionClass: "text-center text-md",
        parentClass: "w-[30vw] h-[13vh]",
      },
      {
        icon: book,
        title: "Cung cấp kho bài tập tự luyện có sẵn \n trên hệ thống và kho bài tập được giao \n bởi giáo viên bộ môn",
        iconClass: "w-12 h-12",
        contentClass: "",
        titleClass: "font-semibold text-md",
        descriptionClass: "text-center text-sm",
        parentClass: "w-[30vw] h-[13vh]",
      },
      {
        icon: universe,
        title: "Cung cấp kho bài giảng với đầy đủ \n môn học bám sát chương trình GDPT \n giúp học sinh tự học",
        iconClass: "w-12 h-12",
        contentClass: "",
        titleClass: "font-semibold text-md",
        descriptionClass: "text-center text-sm",
        parentClass: "w-[30vw] h-[13vh]",
      },
    ];

    return {
      features,
      formattedDescription,
    };
  },
});
</script>

<style scoped>
.feature-1 {
  position: absolute;
  top: 69%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.feature-2 {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.feature-3 {
  position: absolute;
  top: 35%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.feature-4 {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.shadow-effect {
  box-shadow: 10px 10px 0 rgb(92, 190, 254), 0 4px 10px rgb(92, 190, 254);
}
</style>
