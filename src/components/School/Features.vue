<template>
  <div>
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="`feature-${index + 1}`"
    >
      <div class="hover:scale-110 shadow-effect" :class="feature.parentClass">
        <div :class="`font-black ${feature.numberClass}`">
          {{ feature.number }}
        </div>
        <div :class="feature.contentClass">
          <div v-if="title" :class="`font-bold ${feature.titleClass}`">
            {{ feature.title }}
          </div>
          <div
            :class="feature.descriptionClass"
            v-html="formattedDescription(feature.description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import formattedDescription from "@/utils/index.js";

export default defineComponent({
  name: "Features",
  setup() {
    const features = [
      {
        number: "01",
        description:
          "Quản lý hệ thống và toàn bộ tài khoản \n người dùng, phân quyền chuyên môn/bộ môn \n theo các cấp giáo viên trong trường",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[25%] text-center",
        contentClass: "font-bold flex items-center pr-4",
        titleClass: "font-bold text-left text-black italic",
        descriptionClass: "text-black text-left text-sm",
        parentClass: "py-3 flex w-[35vw] h-30 bg-white rounded-lg",
      },
      {
        number: "02",
        description:
          "Quản trị kết quả học tập và giảng dạy của \n học sinh, giáo viên do nhà trường quản lí",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[30%]  text-center",
        contentClass: "font-bold flex items-center pr-4",
        titleClass: "font-bold text-left text-black italic",
        descriptionClass: "text-black text-left text-sm",
        parentClass: "py-3 flex w-[35vw] h-30 bg-white rounded-lg",
      },
      {
        number: "03",
        description:
          "Quản trị tiến độ giảng dạy và theo dõi KHGD của giáo viên",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[40%]  text-center",
        contentClass: "font-bold flex items-center pr-4",
        titleClass: "w-[90%] font-bold text-left text-black italic",
        descriptionClass: "text-black text-left text-sm",
        parentClass: "py-3 flex w-[30vw] h-30 bg-white rounded-lg",
      },
      {
        number: "04",
        description: "Quản trị và tổ chức thi, kiểm tra cho \n nhà trường",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[40%]  text-center",
        contentClass: "font-bold flex items-center pr-4",
        titleClass: "w-[90%] font-bold text-left text-black italic",
        descriptionClass: "text-black text-left text-sm",
        parentClass: "py-3 flex w-[30vw] h-30 bg-white rounded-lg",
      },
      {
        number: "05",
        description: "Báo cáo sở ban ngành",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[30%]  text-center",
        contentClass: "font-bold flex items-center",
        titleClass: "font-bold text-left text-black italic",
        descriptionClass: "text-black text-left text-sm",
        parentClass: "py-3 flex w-[30vw] h-30 bg-white rounded-lg",
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
/* Các style của các feature có thể được sao chép từ component gốc và dán vào đây */
.feature-1 {
  position: absolute;
  top: 10%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-2 {
  position: absolute;
  top: 28%;
  left: 65%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-3 {
  position: absolute;
  top: 45%;
  left: 75%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-4 {
  position: absolute;
  top: 62%;
  left: 65%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-5 {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.shadow-effect {
  box-shadow: 10px 10px 0 rgb(92, 190, 254), 0 4px 10px rgb(92, 190, 254);
}
</style>
