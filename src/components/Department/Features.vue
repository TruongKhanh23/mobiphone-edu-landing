<template>
  <div>
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="`feature-${index + 1}`"
      @click="handleFeatureClick(index + 1)"
    >
      <div class="hover:scale-110" :class="feature.parentClass">
        <div :class="`font-black ${feature.numberClass}`">
          {{ feature.number }}
        </div>
        <div :class="feature.contentClass">
          <div :class="`font-bold ${feature.titleClass}`" v-html="formattedDescription(feature.title)">
          </div>
          <div :class="feature.descriptionClass" v-html="formattedDescription(feature.description)">
          </div>
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
  emits: ["featureClick"], // Declare the emitted event
  setup(_, { emit }) {
    const features = [
      {
        number: "01",
        title: "ĐỊNH DANH cây học liệu theo chương học",
        description: "bài giảng chi tiết cho toàn \n Sở/Phòng.",
        numberClass: "text-right font-black text-5xl text-[#FCBF19]",
        contentClass: "text-right",
        titleClass: "font-bold text-right text-[#0C9DEE] italic",
        descriptionClass: "text-right text-lg",
        parentClass: "w-[23vw] h-40 cursor-pointer",
      },
      {
        number: "02",
        title: "THEO DÕI tỷ lệ chuyển đổi số DTI trong giáo dục phổ thông",
        description:
          "Do Bộ Giáo dục và Đào tạo ban hành đối với toàn bộ trường mà Sở/Phòng quản lí",
        numberClass: "text-right font-black text-5xl text-[#FCBF19]",
        contentClass: "text-right",
        titleClass: "font-bold text-right text-[#0C9DEE] italic",
        descriptionClass: "w-[80%] float-right text-right text-lg",
        parentClass: "w-[23vw] h-40 cursor-pointer",
      },
      {
        number: "03",
        title: "XEM CÁC BÁO CÁO tổng quan \n và chi tiết",
        description:
          "Về tình hình học tập và giảng dạy của \n  toàn bộ trường do Sở/Phòng quản lí",
        numberClass: "font-black text-5xl text-white w-[20%] text-center",
        contentClass: "float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-lg",
        parentClass: "flex w-[33vw] h-30",
      },
      {
        number: "04",
        title: "THEO DÕI tiến độ, xem và \n đọc kết quả",
        description: "nhà trường, giáo viên",
        numberClass: "font-black text-5xl text-white w-[20%] text-center",
        contentClass: "float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-lg",
        parentClass: "flex w-[30vw] h-30",
      },
      {
        number: "05",
        title: "DUYỆT đăng tải/CHIA SẺ \n bài giảng",
        description: "của giáo viên trên trang của Tỉnh",
        numberClass: "font-black text-5xl text-white w-[20%] text-center",
        contentClass: "float-right",
        titleClass: "w-[90%] font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-lg",
        parentClass: "flex w-[30vw] h-30",
      },
    ];

    const handleFeatureClick = (featureNumber) => {
      emit("featureClick", featureNumber);
    };

    return {
      features,
      formattedDescription,
      handleFeatureClick,
    };
  },
});
</script>

<style scoped>
/* Các style của các feature có thể được sao chép từ component gốc và dán vào đây */

.feature-1 {
  position: absolute;
  top: 35%;
  left: 16%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-2 {
  position: absolute;
  top: 75%;
  left: 18%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-3 {
  position: absolute;
  top: 75%;
  left: 81%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-4 {
  position: absolute;
  top: 45%;
  left: 84%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-5 {
  position: absolute;
  top: 20%;
  left: 81%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
</style>
