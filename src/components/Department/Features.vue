<template>
  <div>
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="`feature-${index + 1}`"
    >
      <div class="w-[23vw] h-40 hover:scale-110">
        <div :class="`font-black text-4xl ${feature.numberClass}`">
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Features",
  setup() {
    // Đoạn text của các tính năng
    const features = [
      {
        number: "01",
        title: "ĐỊNH DANH cây học liệu theo chương học -",
        description: "bài giảng chi tiết cho toàn Sở/Phòng.",
        numberClass: "text-right font-black text-4xl text-[#EEBE3A]",
        contentClass: "w-[75%]",
        titleClass: "font-bold text-justify text-[#0C9DEE] italic",
        descriptionClass: "text-right text-sm",
      },
      {
        number: "02",
        title: "Hệ thống quản lý học tập và giảng dạy hiệu quả.",
        description: "Cải tiến và hiện đại hóa.",
        numberClass: "text-right font-black text-4xl text-[#EEBE3A]",
        contentClass: "w-[90%]",
        titleClass: "font-bold text-justify text-[#0C9DEE] italic",
        descriptionClass: "text-right text-sm",
      },
      {
        number: "03",
        title: "Tích hợp công nghệ tiên tiến.",
        description: "Đem lại trải nghiệm học tập tốt nhất.",
        numberClass: "text-left font-black text-4xl text-white",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
      },
      {
        number: "04",
        title: "Tạo dựng cộng đồng học tập trực tuyến.",
        description: "Kết nối giáo viên và học sinh.",
        numberClass: "text-left font-black text-4xl text-white",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
      },
      {
        number: "05",
        title: "Hỗ trợ học tập suốt đời.",
        description: "Đảm bảo chất lượng giáo dục.",
        numberClass: "text-left font-black text-4xl text-white",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
      },
    ];

    return {
      features,
    };
  },
});
</script>

<style scoped>
/* Các style của các feature có thể được sao chép từ component gốc và dán vào đây */

.feature-1 {
  position: absolute;
  top: 40%;
  left: 16%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-2 {
  position: absolute;
  top: 85%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-3 {
  position: absolute;
  top: 83%;
  left: 78%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-4 {
  position: absolute;
  top: 60%;
  left: 86%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-5 {
  position: absolute;
  top: 30%;
  left: 80%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
</style>
