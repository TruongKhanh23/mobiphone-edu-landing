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
import image6 from "@/assets/thirdfloor/school/image6.png";
import image7 from "@/assets/thirdfloor/school/image7.png";
import image8 from "@/assets/thirdfloor/school/image8.png";

import formattedDescription from "@/utils/index.js";

export default {
  name: "EvaluateEducationalEffectiveness",
  data() {
    return {
      title: "Đánh giá hiệu quả giáo dục\nthông qua báo cáo và thống kê",
      contents: [
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-4",
          content: "● Nhà trường xem báo cáo thống kê kỳ thi toàn trường: ",
        },
        {
          type: "image",
          imgUrl: image6,
          altText: "Nhà trường xem báo cáo...",
        },
        {
          type: "image",
          imgUrl: image7,
          altText: "Nhà trường xem báo cáo...",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-4",
          content:
            "● Nhà trường xem báo cáo thống kê toàn trường theo môn học:",
        },
        {
          type: "image",
          imgUrl: image8,
          altText: "Nhà trường xem báo cáo...",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-8",
          content:
            "     Thông qua việc phân tích dữ liệu và số liệu thống kê, nhà trường có thể đánh giá mức độ tiến bộ của học sinh và nhận biết những khía cạnh cần cải thiện.",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-8",
          content:
            "     Với thông tin từ báo cáo, nhà trường có thể xác định những điểm mạnh và yếu của học sinh, từ đó tạo ra một lộ trình học tập cá nhân hóa. Lộ trình này sẽ tập trung vào việc củng cố những kỹ năng cần thiết và đưa ra các bài học và tài liệu phù hợp để giúp học sinh phát triển. Nhà trường cũng có thể theo dõi tiến độ của từng học viên và cung cấp sự hỗ trợ và chỉ đạo để đảm bảo sự tiến bộ liên tục.",
        },
        {
          type: "text",
          cssClass: "mt-4 mb-4 indent-8",
          content:
            "Nhà trường không chỉ có khả năng quản lý học tập một cách hiệu quả mà còn tạo ra môi trường học tập tốt nhất cho học sinh. đáp ứng nhu cầu học tập đa dạng và giúp học sinh đạt được thành công trong học tập và phát triển toàn diện.",
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
