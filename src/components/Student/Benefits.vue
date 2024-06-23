<template>
  <div
    class="flex flex-col justify-center items-center space-y-8 benefit-school"
  >
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1} cursor-pointer`"
    >
      <div
        :class="`${benefit.parentClass} hover:scale-110 text-white rounded-md flex flex-col items-center justify-center`"
      >
        <div :class="`${benefit.contentClass} ml-2`">
          <div
            :class="benefit.titleClass"
            v-html="formattedDescription(benefit.title)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Benefits",
  setup() {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        title: "Dễ dàng truy cập\nkho bài giảng và bài tập\n tất cả các bộ môn",
        contentClass: "",
        titleClass: "font-bold text-center text-2xl text-white",
        parentClass:
          "w-[30vw] h-[20vh] p-4 bg-gradient-to-r from-[#0099FF] to-[#03578F] bg-opacity-60 pt-8",
      },
      {
        title: "Tự giác học tập và\n tiết kiệm thời gian",
        contentClass: "",
        titleClass: "font-bold text-center text-2xl text-white",
        parentClass:
          "w-[30vw] h-[20vh] p-4 bg-gradient-to-r from-[#0099FF] to-[#03578F] pt-8",
      },
    ];

    function formattedDescription(text) {
      if (!text) {
        return "";
      }
      return text.replace(/\n/g, "<br>");
    }

    return {
      benefits,
      formattedDescription,
    };
  },
});
</script>

<style scoped>
.benefit-1 {
  border-radius: 5px;
}

.benefit-2 {
  border-radius: 5px;
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

.benefit-school {
  position: absolute;
  top: 35%;
  left: 15%;
}
</style>
