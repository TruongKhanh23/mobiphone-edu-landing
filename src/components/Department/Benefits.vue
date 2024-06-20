<template>
  <div>
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1}`"
    >
      <div class="w-[23vw] h-40 hover:scale-110">
        <div :class="benefit.numberClass">
          {{ benefit.number }}
        </div>
        <div :class="benefit.contentClass">
          <div :class="benefit.titleClass">
            {{ benefit.title }}
          </div>
          <div :class="benefit.descriptionClass">
            {{ benefit.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Benefits",
  setup() {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        number: "01",
        title: "Tích hợp công nghệ tiên tiến.",
        description: "Đem lại trải nghiệm học tập tốt nhất.",
        numberClass: "text-left font-black text-4xl text-white",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
      },
      {
        number: "02",
        title: "Tạo dựng cộng đồng học tập trực tuyến.",
        description: "Kết nối giáo viên và học sinh.",
        numberClass: "text-left font-black text-4xl text-white",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
      },
      {
        number: "03",
        title: "Hỗ trợ học tập suốt đời.",
        description: "Đảm bảo chất lượng giáo dục.",
        numberClass: "text-left font-black text-4xl text-white",
        contentClass: "w-[75%] float-right",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
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
  top: 83%;
  left: 78%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.benefit-2 {
  position: absolute;
  top: 60%;
  left: 86%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.benefit-3 {
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
