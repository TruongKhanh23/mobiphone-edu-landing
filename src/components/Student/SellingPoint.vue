<template>
  <div
    class="flex flex-wrap justify-center items-center space-x-16 benefit-school"
  >
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1} cursor-pointer`"
    >
      <div
        :class="`${benefit.parentClass} hover:scale-110 text-white rounded-md flex flex-col items-center justify-center`"
      >
        <div class="flex justify-center items-center">
          <img :src="benefit.icon" :class="benefit.iconClass" />
        </div>
        <div :class="`${benefit.contentClass} ml-2`">
          <div
            :class="benefit.titleClass"
            v-html="formattedDescription(benefit.title)"
          ></div>
          <div
            v-if="benefit.description"
            :class="benefit.descriptionClass"
            v-html="formattedDescription(benefit.description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import humanHead from "@/assets/icon/school/human-head-icon.svg";
import phone from "@/assets/icon/school/phone-icon.svg";

export default defineComponent({
  name: "Benefits",
  setup() {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        icon: humanHead,
        description:
          "Học sinh có thể tự học, tự luyện tập theo từng chủ đề theo khả năng của mình.",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-bold text-center text-2xl text-[#137BB5]",
        descriptionClass: "font-bold text-white text-center text-lg px-6",
        parentClass:
          "w-[30vw] h-[30vh] p-4 bg-gradient-to-r from-[#0099FF] to-[#03578F] pt-8",
      },
      {
        icon: phone,
        description:
          "Hệ thống phân tích trình độ và đưa ra bài luyện tập phù hợp",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-bold text-xl text-[#137BB5] text-center",
        descriptionClass: "font-bold text-white text-center text-lg px-6",
        parentClass:
          "w-[30vw] h-[30vh] p-4 bg-gradient-to-r from-[#0099FF] to-[#03578F] pt-8",
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
