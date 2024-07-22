<template>
  <div class="p-4 flex justify-center items-center bg-[#021929]">
    <div class="mx-auto w-[80vw] text-white">
      <div class="p-6">
        <p class="text-[2.2rem] text-center font-bold" v-html="formattedDescription(title)"></p>
        <br />
        <div v-for="(item, index) in contents" :key="index">
          <p
            v-if="item.type === 'text'"
            class="text-[1.2rem] mt-2"
            :class="item.cssClass"
          >
            {{ item.content }}
          </p>
          <p v-if="item.type === 'subTitle'" class="text-[1.4rem] mt-2 font-bold">
            {{ item.content }}
          </p>
          <a
            v-if="item.type === 'link'"
            :href="item.url"
            class="text-blue-700 underline"
          >
            <img
              v-if="item.imgUrl"
              :src="item.imgUrl"
              :alt="item.altText"
              class="mt-4 mx-auto w-full max-w-xl"
            />
          </a>
          <img
            v-if="item.type === 'image'"
            :src="item.imgUrl"
            :alt="item.altText"
            class="mt-4 mx-auto w-full"
          />
          <p
            v-if="item.type === 'paragraph'"
            class="text-[1.2rem] mt-2 text-justify"
          >
            {{ item.content }}
          </p>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/thirdfloor/school/image1.webp";
import image2 from "@/assets/thirdfloor/school/image2.webp";
import image3 from "@/assets/thirdfloor/school/image3.webp";
import image4 from "@/assets/thirdfloor/school/image4.webp";
import image5 from "@/assets/thirdfloor/school/image5.png";

import formattedDescription from "@/utils/index.js";

export default {
  name: "DevelopeSchoolPlan",
  data() {
    return {
      title:
        "Xây dựng kế hoạch năm học nhanh chóng nhờ đồng bộ\nthông tin đa chiều",
      contents: [
        {
          type: "text",
          cssClass: "font-bold",
          content:
            "Quy trình xây dựng kế hoạch giảng dạy, kế hoạch bài giảng cho năm học:",
        },
        {
          type: "text",
          cssClass: "",
          content:
            "Tổ trưởng trình kế hoạch giảng dạy ➜ BGH nhà trường duyệt ➜ Tổ bộ môn public KHGD cho toàn giáo viên bộ môn ➜ Giáo viên soạn bài giảng và upload -➜ Tổ bộ môn duyệt ➜ Nhà trường duyệt➜ Sở/ Phòng duyệt ➜ Hoàn thành kế hoạch giảng dạy, kế hoạch bài giảng cho năm học.",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-4",
          content: "● Ban giám hiệu nhà trường duyệt kế hoạch giảng dạy: ",
        },
        {
          type: "image",
          imgUrl: image1,
          altText: "Ban giám hiệu nhà trường...",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-4",
          content: "● Giáo viên bộ môn nộp kế hoạch giáo dục:",
        },
        {
          type: "image",
          imgUrl: image2,
          altText: "Giáo viên bộ môn nộp kế hoạch giáo dục...",
        },
        {
          type: "image",
          imgUrl: image3,
          altText: "Giáo viên bộ môn nộp kế hoạch giáo dục...",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-4",
          content: "● Trưởng bộ môn nộp kế hoạch giáo dục của tổ chuyên môn:",
        },
        {
          type: "image",
          imgUrl: image4,
          altText: "Giáo viên bộ môn nộp kế hoạch giáo dục...",
        },
        {
          type: "text",
          cssClass: "font-bold mt-4 mb-4 text-xl",
          content: "Tối ưu hoá quy trình đồng bộ thông tin đa chiều:",
        },
        {
          type: "image",
          imgUrl: image5,
          altText: "Giáo viên bộ môn nộp kế hoạch giáo dục...",
        },
      ],
    };
  },
  setup(){
    return { formattedDescription }
  },
};
</script>

<style>
/* Nếu bạn cần thêm CSS cho component này, bạn có thể thêm ở đây */
</style>
