<template>
  <div>
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="`feature-${index + 1} cursor-pointer`"
      @click="handleFeatureClick(index + 1)"
    >
      <div class="hover:scale-110" :class="feature.parentClass">
        <div :class="`font-black ${feature.numberClass}`">
          {{ feature.number }}
        </div>
        <div :class="feature.contentClass">
          <div :class="`font-bold ${feature.titleClass}`">
            {{ feature.title }}
          </div>
          <div :class="feature.descriptionClass">
            {{ feature.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Features",
  emits: ["featureClick"], // Declare the emitted event
  setup(_, { emit }) {
    const features = [
      {
        number: "01",
        title: "ĐỊNH DANH cây học liệu theo chương học",
        description: "bài giảng chi tiết cho toàn Sở/Phòng.",
        numberClass: "text-right font-black text-5xl text-[#FCBF19]",
        contentClass: "text-right",
        titleClass: "font-bold text-right text-[#0C9DEE] italic",
        descriptionClass: "text-right text-lg",
        parentClass: "w-[23vw] h-40 ",
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
        parentClass: "w-[23vw] h-40",
      },
      {
        number: "03",
        title: "XEM CÁC BÁO CÁO tổng quan và chi tiết",
        description:
          "Về tình hình học tập và giảng dạy của toàn bộ trường do Sở/Phòng quản lí",
        numberClass: "font-black text-5xl text-white w-[45%] text-center",
        contentClass: "float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-lg",
        parentClass: "flex w-[33vw] h-30",
      },
      {
        number: "04",
        title: "THEO DÕI tiến độ, xem và đọc kết quả",
        description: "nhà trường, giáo viên",
        numberClass: "font-black text-5xl text-white w-[30%] text-center",
        contentClass: "float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-lg",
        parentClass: "flex w-[30vw] h-30",
      },
      {
        number: "05",
        title: "DUYỆT đăng tải/CHIA SẺ bài giảng",
        description: "của giáo viên trên trang của Tỉnh",
        numberClass: "font-black text-5xl text-white w-[30%] text-center",
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
  left: 80%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-4 {
  position: absolute;
  top: 45%;
  left: 83%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-5 {
  position: absolute;
  top: 20%;
  left: 80%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
</style>
