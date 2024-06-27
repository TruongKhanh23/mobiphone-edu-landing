<template>
  <div>
    <div
      v-for="(sellingPoint, index) in sellingPoints"
      :key="index"
      :class="`sellingPoint-${index + 1}`"
    >
      <div
        :class="`${sellingPoint.parentClass} hover:scale-110 text-white items-center justify-center border-2-[red]`"
      >
        <div :class="`${sellingPoint.contentClass} ml-2`">
          <div
            :class="sellingPoint.titleClass"
            v-html="formattedDescription(sellingPoint.title)"
          ></div>
          <div
            v-if="sellingPoint.description"
            :class="sellingPoint.descriptionClass"
            v-html="formattedDescription(sellingPoint.description)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SellingPoints",
  setup() {
    // Đoạn text của các điểm bán hàng
    const sellingPoints = [
      {
        title: "Giải pháp cung cấp tính năng \n quản lí trường học",
        description: "bao gồm giao bài tập, quản lí \n học sinh và tổ chức thi.",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-semibold text-2xl text-white mb-2",
        descriptionClass: "font-semibold text-sm",
        parentClass: "w-[30vw] h-[50vh] p-4 pt-8",
      },
      {
        title:
          "Nhà trường có thể quản lí nhân sự \n và nhận báo cáo dễ dàng và \n chuyên nghiệp",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-semibold text-2xl text-white min-h-[17vh]",
        descriptionClass: "text-white text-lg",
        parentClass: "w-[30vw] h-[50vh] p-4 pt-8",
      },
    ];

    function formattedDescription(text) {
      if (!text) {
        return "";
      }
      return text.replace(/\n/g, "<br>");
    }

    return {
      sellingPoints,
      formattedDescription,
    };
  },
});
</script>

<style scoped>
.sellingPoint-1 {
  position: absolute;
  top: 60%;
  left: 36%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

.sellingPoint-2 {
  position: absolute;
  top: 60%;
  left: 82.5%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
</style>
