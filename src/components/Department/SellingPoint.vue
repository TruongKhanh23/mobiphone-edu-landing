<template>
  <div>
    <div
      v-for="(sellingPoint, index) in sellingPoints"
      :key="index"
      :class="`sellingPoint-${index + 1} cursor-pointer`"
    >
      <div :class="`${sellingPoint.parentClass} hover:scale-110`">
        <div>
          <div :class="`${sellingPoint.titleClass}`">
            {{ sellingPoint.title }}
          </div>
          <div :class="sellingPoint.descriptionClass">
            {{ sellingPoint.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SellingPoints",
  setup() {
    // Đoạn text của các điểm bán hàng
    const sellingPoints = [
      {
        title: "Nhà trường dễ dàng quản lý",
        description: "giáo viên, học sinh, tổ chức các buổi thi",
        numberClass: "text-center font-black text-4xl text-[#EEBE3A]",
        titleClass: "font-bold text-center text-2xl italic",
        descriptionClass: "text-lg text-center text-sm",
        parentClass: "w-[35vw] h-[13vh] p-3",
      },
      {
        title: "Sở/ Phòng GD & ĐT có thể tiếp nhận & đánh giá một cách",
        description: "đồng bộ & dễ dàng.",
        numberClass: "text-left font-black text-4xl text-white",
        titleClass: "text-lg text-left italic",
        descriptionClass: "text-right font-bold text-2xl italic mt-2",
        parentClass: "w-[25vw] h-[13vh] p-3",
      },
    ];

    return {
      sellingPoints,
    };
  },
});
</script>

<style scoped>
/* Các style của các sellingPoint có thể được sao chép từ component gốc và dán vào đây */
.sellingPoint-1 {
  position: absolute;
  top: 40%;
  left: 37%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
.sellingPoint-2 {
  position: absolute;
  top: 41%;
  left: 80%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
