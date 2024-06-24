<template>
  <div>
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1} cursor-pointer`"
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
          <div :class="benefit.titleClass">
            {{ benefit.title }}
          </div>
          <div v-if="benefit.description" :class="benefit.descriptionClass">
            {{ benefit.description }}
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

export default defineComponent({
  name: "Benefits",
  setup() {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        icon: statistic,
        title:
          "Tham gia các kì thi trực tuyến",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left italic text-lg",
        descriptionClass: "text-center text-sm px-6",
        parentClass: "w-[35vw] h-[13vh]",
      },
      {
        icon: magnifyingGlass,
        title: "Gợi ý bài luyện tập dựa theo năng lực của học sinh qua adaptive learning.",
        description: "qua báo cáo & thống kê.",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-center italic text-lg",
        descriptionClass: "text-center text-lg",
        parentClass: "w-[35vw] h-[13vh]",
      },
      {
        icon: multipleEclipse,
        title: "Cung cấp kho bài tập tự luyện có sẵn trên hệ thống và kho bài tập được giao bởi giáo viên bộ môn",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-center italic text-lg",
        descriptionClass: "text-center text-sm",
        parentClass: "w-[35vw] h-[13vh]",
      },
      {
        icon: multipleEclipse,
        title: "Cung cấp kho bài giảng với đầy đủ môn học bám sát chương trình GDPT giúp học sinh tự học",
        iconClass: "w-10 h-10",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-center italic text-lg",
        descriptionClass: "text-center text-sm",
        parentClass: "w-[35vw] h-[13vh]",
      },
    ];

    return {
      benefits,
    };
  },
});
</script>

<style scoped>
.benefit-1 {
  position: absolute;
  top: 70%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.benefit-2 {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.benefit-3 {
  position: absolute;
  top: 36%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.benefit-4 {
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
