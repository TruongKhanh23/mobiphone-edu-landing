<template>
  <div
    class="flex flex-wrap justify-center items-center space-x-16 benefit-school"
  >
    <div
      v-for="(sellingPoint, index) in sellingPoints"
      :key="index"
      :class="`sellingPoint-${index + 1} cursor-pointer shadow-effect`"
    >
      <div
        :class="`${sellingPoint.parentClass} hover:scale-110 text-black rounded-md items-center justify-center border-2-[red]`"
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
        title: "Hỗ trợ \n quản lý \n hệ thống \n giáo dục",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass:
          "font-bold text-center text-2xl text-[#137BB5] min-h-[17vh]",
        descriptionClass: "text-white text-center text-sm px-6",
        parentClass: "w-[15vw] h-[50vh] p-4 bg-white pt-8",
      },
      {
        title: "Xây dựng \n kế hoạch \n năm học \n nhanh chóng",
        description: "nhờ đồng bộ thông tin đa chiều",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass: "font-bold text-xl text-[#137BB5] text-center min-h-[17vh]",
        descriptionClass: "text-white text-center text-lg",
        parentClass: "w-[15vw] h-[50vh] p-4 bg-[#F7C12F] pt-8",
      },
      {
        title: "Đánh giá hiệu quả giáo dục",
        description: "thông qua báo cáo và thống kê",
        iconClass: "w-10 h-10 mb-4",
        contentClass: "",
        titleClass:
          "font-bold text-center text-2xl text-[#137BB5] min-h-[17vh]",
        descriptionClass: "text-white text-center text-lg",
        parentClass: "w-[15vw] h-[50vh] p-4 bg-[#F7C12F] pt-8",
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
  color: white;
  border-radius: 5px;
}

.sellingPoint-2 {
  color: white;
  border-radius: 5px;
}

.sellingPoint-3 {
  color: white;
  border-radius: 5px;
}

.shadow-effect {
  box-shadow: 10px 10px 0 rgb(92, 190, 254), 0 4px 10px rgb(92, 190, 254);
}

.benefit-school {
  position: absolute;
  top: 25%;
  left: 20%;
}
</style>
