<template>
  <div class="p-4 flex justify-center items-center bg-[#021929]">
    <div class="mx-auto w-[80vw] text-white">
      <div class="p-6">
        <p class="text-[2.2rem] text-center font-bold" v-html=formattedDescription(title)></p>
        <br />
        <div v-for="(item, index) in contents" :key="index">
          <p
            v-if="item.type === 'text'"
            class="text-base my-4 text-[1.2rem]"
            :class="item.cssClass"
          >
            {{ item.content }}
          </p>
          <p v-if="item.type === 'subTitle'" class="text-base my-4 text-[1.2rem] font-bold">
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
            class="my-4 mx-auto w-full"
          />
          <p
            v-if="item.type === 'paragraph'"
            class="text-base my-4 text-[1.2rem] text-justify"
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
import image1 from "@/assets/thirdfloor/department/image1.png";
import image2 from "@/assets/thirdfloor/department/image2.webp";
import image3 from "@/assets/thirdfloor/department/image3.webp";

import formattedDescription from "@/utils/index.js";

export default {
  name: "IdentificationLearningMaterials",
  data() {
    return {
      title:
        "Định danh cây học liệu theo chương học\nbài giảng chi tiết cho toàn Sở/Phòng",
      contents: [
        {
          type: "text",
          cssClass: " indent-4",
          content:
            "● Giáo viên tìm kiếm và lựa chọn được cây giáo trình của bộ môn mong muốn nhân bản và tiến hành nhân bản cây học liệu:",
        },
        {
          type: "image",
          imgUrl: image1,
          altText:
            "Giáo viên tìm kiếm và lựa chọn được cây giáo trình của bộ môn mong muốn nhân bản và tiến hành nhân bản cây học liệu:",
        },
        {
          type: "text",
          cssClass: " indent-4",
          content:
            "● Giáo viên có thể chỉnh sửa danh sách giáo trình theo ý muốn:",
        },
        {
          type: "image",
          imgUrl: image2,
          altText:
            "Giáo viên có thể chỉnh sửa danh sách giáo trình theo ý muốn",
        },
        {
          type: "image",
          imgUrl: image3,
          altText:
            "Giáo viên có thể chỉnh sửa danh sách giáo trình theo ý muốn",
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
