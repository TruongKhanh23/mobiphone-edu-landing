<template>
  <div class="p-6 flex justify-center bg-[#021929] min-h-screen">
    <div class="mx-auto w-[70vw] text-white">
      <div class="">
        <p class="text-2xl text-center font-bold">{{ title }}</p>
        <br />
        <div v-for="(item, index) in contents" :key="index">
          <p v-if="item.type === 'text'" class="text-base mt-2">
            {{ item.content }}
          </p>
          <p v-if="item.type === 'subTitle'" class="text-base mt-2 font-bold">
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
            class="mx-auto w-full"
          />
          <p
            v-if="item.type === 'paragraph'"
            class="text-base mt-2 text-justify"
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
import image1 from "@/assets/thirdfloor/student/2.4.2/trang3_hocsinh_strong2_thongkenangluc.png";
export default {
  name: "AnalyzeRecommend",
  data() {
    return {
      title:
        "Báo cáo thống kê năng lực của bản thân, điểm mạnh điểm yếu của từng môn học",
      contents: [
        {
          type: "paragraph",
          content:
            "Báo cáo thống kê năng lực của bản thân, điểm mạnh điểm yếu của từng môn học",
        },
        {
          type: "image",
          imgUrl: image1,
        },
      ],
    };
  },
};
</script>

<style>
/* Nếu bạn cần thêm CSS cho component này, bạn có thể thêm ở đây */
</style>
