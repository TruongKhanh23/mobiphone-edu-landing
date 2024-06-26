<template>
  <div
    class="flex justify-center items-center space-x-16 benefit-school"
  >
    <div
      v-for="(benefit, index) in benefits"
      :key="index"
      :class="`benefit-${index + 1} shadow-effect`"
    >
      <div
        :class="`${benefit.parentClass} hover:scale-110 text-black rounded-md items-center justify-center border-2-[red]`"
      >
        <div v-if="benefit.icon" class="flex justify-center items-center">
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
import magnifyingGlass from "@/assets/icon/school/magnifying-glass-icon.svg";
import humanHead from "@/assets/icon/school/human-head-icon.svg";
import phone from "@/assets/icon/school/phone-icon.svg";

export default defineComponent({
  name: "Benefits",
  setup() {
    // Đoạn text của các lợi ích
    const benefits = [
      {
        title: "Đánh giá và theo dõi \n chính xác năng lực học sinh",
        description:
          "\nGiúp đánh giá năng lực\ntừng học sinh một cách chính xác.\n \n Đồng thời theo dõi tiến độ học tập và cung cấp phản hồi chi tiết để \n cải thiện hiệu quả học tập.",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "text-2xl font-bold text-[#009AFE]",
        descriptionClass: "text-lg",
        parentClass: "w-[24vw] h-[55vh] p-4 bg-white pt-6",
      },
      {
        title: "Tiết kiệm thời gian và \n giảm tải công việc \n",
        description:
          "\nVới nguồn học liệu phong phú và \n chuẩn hóa, giúp tiết kiệm 80% \n thời gian biên soạn đề. \n \n Hệ thống hỗ trợ giảm tải 70% các \n công việc hàng ngày như tìm kiếm \n nội dung, phân bổ chương trình, \n chấm điểm tự động, và theo dõi việc \n làm bài tập.",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "text-2xl font-bold text-[#009AFE]",
        descriptionClass: "text-lg",
        parentClass: "w-[24vw] h-[55vh] p-4 bg-white pt-6",
      },
      {
        title: "Quản lí dữ liệu học tập \n dễ dàng \n",
        description:
          "\nCho phép tạo và quản lí dữ liệu \n học tập một cách dễ dàng. \n \n Giúp giáo viên và học sinh tổ chức và \n lưu trữ thông tin học tập một cách \n hiệu quả.",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "text-justify",
        titleClass: "text-2xl font-bold text-[#009AFE]",
        descriptionClass: "text-lg text-justify",
        parentClass: "w-[24vw] h-[55vh] p-4 bg-white pt-6",
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
  color: white;
  border-radius: 5px;
}

.benefit-2 {
  color: white;
  border-radius: 5px;
}

.benefit-3 {
  color: white;
  border-radius: 5px;
}

.shadow-effect {
  box-shadow: 10px 10px 0 rgb(92, 190, 254), 0 4px 10px rgb(92, 190, 254);
}
.benefit-school {
  position: absolute;
  top: 57.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
