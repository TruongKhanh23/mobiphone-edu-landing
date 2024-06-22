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
          <div v-if="title" :class="`font-bold ${feature.titleClass}`">
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
        description:
          "Quản lý hệ thống và toàn bộ tài khoản người dùng, phân quyền chuyên môn/bộ môn theo các cấp giáo viên trong trường",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[35%] text-center",
        contentClass: "flex items-center pr-4",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
        parentClass: "py-3 flex w-[45vw] h-30 bg-[#0093FF] rounded-lg",
      },
      {
        number: "02",
        description:
          "Quản trị kết quả học tập và giảng dạy của học sinh, giáo viên do nhà trường quản lý",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[30%] text-center",
        contentClass: "flex items-center pr-4",
        titleClass: "font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
        parentClass: "py-3 flex w-[35vw] h-30 bg-[#0093FF] rounded-lg",
      },
      {
        number: "03",
        description:
          "Quản trị tiến độ giảng dạy và theo dõi KHGD của giáo viên",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[30%] text-center",
        contentClass: "flex items-center pr-4",
        titleClass: "w-[90%] font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
        parentClass: "py-3 flex w-[35vw] h-30 bg-[#0093FF] rounded-lg",
      },
      {
        number: "04",
        description: "Quản trị và tổ chức thi, kiểm tra cho nhà trường",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[30%] text-center",
        contentClass: "flex items-center pr-4",
        titleClass: "w-[90%] font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
        parentClass: "py-3 flex w-[35vw] h-30 bg-[#0093FF] rounded-lg",
      },
      {
        number: "05",
        description: "Báo cáo sở ban ngành",
        numberClass:
          "italic text-[#FFBB00] font-black text-5xl w-[30%] text-center",
        contentClass: "flex items-center pr-4",
        titleClass: "w-[90%] font-bold text-left text-[#0C9DEE] italic",
        descriptionClass: "text-left text-sm",
        parentClass: "py-3 flex w-[35vw] h-30 bg-[#0093FF] rounded-lg",
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
  top: 15%;
  left: 55%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-2 {
  position: absolute;
  top: 30%;
  left: 60%;
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
  top: 60%;
  left: 65%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-5 {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
</style>
