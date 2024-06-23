<template>
  <div>
    <div class="container-left flex flex-col gap-10 w-[80%]">
      <div
        v-for="(feature, index) in features.slice(0, 3)"
        :key="index"
        :class="`feature-${index + 1} cursor-pointer`"
      >
        <div
          :class="`${feature.parentClass} flex justify-end items-center gap-2 hover:scale-110 text-black`"
        >
          <div :class="`${feature.contentClass} ml-4`">
            <div
              v-if="feature.title"
              :class="feature.titleClass"
              v-html="formattedDescription(feature.title)"
            ></div>
            <div
              v-if="feature.description"
              :class="feature.descriptionClass"
              v-html="formattedDescription(feature.description)"
            ></div>
          </div>
          <div
            class="flex items-center justify-center p-3"
            :class="feature.divIconClass"
          >
            <img :src="feature.icon" :class="feature.iconClass" />
          </div>
        </div>
      </div>
    </div>
    <div class="container-right flex flex-col justify-center gap-10 w-[80%]">
      <div
        v-for="(feature, index) in features.slice(-2)"
        :key="index"
        :class="`feature-${index + 1} cursor-pointer`"
      >
        <div
          :class="`${feature.parentClass} flex hover:scale-110 text-black items-center`"
        >
          <!--Column 1 30%-->
          <div
            class="flex items-center justify-center p-3"
            :class="feature.divIconClass"
          >
            <img :src="feature.icon" :class="feature.iconClass" />
          </div>
          <!-- Column 2 70%-->
          <div :class="`${feature.contentClass} ml-4`">
            <div
              v-if="feature.title"
              :class="feature.titleClass"
              v-html="formattedDescription(feature.title)"
            ></div>
            <div
              v-if="feature.description"
              :class="feature.descriptionClass"
              v-html="formattedDescription(feature.description)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import clock from "@/assets/icon/teacher/icon-clock.svg";
import computer from "@/assets/icon/teacher/icon-computer.svg";
import data from "@/assets/icon/teacher/icon-data.svg";
import teacher from "@/assets/icon/teacher/icon-teacher.svg";

import formattedDescription from "@/utils/index.js";

export default defineComponent({
  name: "Features",
  setup() {
    // Đoạn text của các điểm bán hàng
    const features = [
      {
        id: 1,
        icon: teacher,
        description:
          "Cung cấp kho giáo án, tài liệu, \n bài giảng có sẵn cho các \n cấp học từ Tiểu học đến THPT",
        divIconClass: "",
        iconClass: "w-16 h-16",
        contentClass: "text-right",
        titleClass: "font-bold text-2xl text-white mb-2",
        descriptionClass: "text-white",
        parentClass: "min-h-[10vh] w-[27vw]",
      },
      {
        id: 2,
        icon: data,
        description:
          " Hỗ trợ giáo viên tạo các học liệu \n đa phương tiện, từ đó xây dựng \n thư viện điện tử",
        divIconClass: "",
        iconClass: "w-16 h-16",
        contentClass: "text-right float-right",
        titleClass: "font-bold text-md text-white",
        descriptionClass: "text-white",
        parentClass: "min-h-[10vh] w-[27vw]",
      },
      {
        id: 3,
        icon: clock,
        description:
          "Quản lí kho bài tập và giao \n bài tập dễ dàng cho học sinh \n kiểm soát được chất lượng dạy học.",
        divIconClass: "border-[#36437F]",
        iconClass: "w-16 h-16",
        contentClass: "text-right float-right",
        titleClass: "font-bold text-md text-white mb-2",
        descriptionClass: "text-white",
        parentClass: "min-h-[10vh] w-[27vw]",
      },
      {
        id: 4,
        icon: teacher,
        title:
          "Hỗ trợ giáo viên thiết kế \n bài giảng tương tác trực tuyến \n với nhiều định dạng",
        description:
          "+ Thiết kế trực tiếp trên hệ thống \n+ Gắn link bài giảng từ các nền tảng khác",
        divIconClass: "border-[#36437F]",
        iconClass: "w-16 h-16",
        contentClass: "",
        titleClass: "font-bold text-md text-white",
        descriptionClass: "text-white",
        parentClass: "min-h-[10vh] w-fit",
      },
      {
        id: 5,
        icon: computer,
        description:
          "Hỗ trợ nộp và quản lý trực tuyến \n các KHGD, KHBD và các báo cáo \n khác theo lớp phân công, \n tiết kiệm thời gian tìm kiếm và \n lưu trữ sổ sách giấy tờ",
        divIconClass: "border-[#36437F]",
        iconClass: "w-16 h-16",
        contentClass: "",
        titleClass: "font-bold text-md text-white",
        descriptionClass: "text-white",
        parentClass: "min-h-[10vh] w-fit",
      },
    ];
    function getFeatureClass(index) {
      const leftSide = [1, 2, 3];
      const side = leftSide.includes(index) ? "left" : "right";
      return `feature-${index + 1}-${side}`;
    }

    return {
      features,
      formattedDescription,
      getFeatureClass,
    };
  },
});
</script>

<style scoped>
.container-left {
  position: absolute;
  top: 21%;
}
.container-right {
  position: absolute;
  top: 28%;
  left: 68%;
}

.feature-1 {
  border-radius: 5px;
}

.feature-2 {
  border-radius: 5px;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>
