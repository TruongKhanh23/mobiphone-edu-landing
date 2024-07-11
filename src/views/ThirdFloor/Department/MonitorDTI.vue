<template>
  <div class="p-4 flex justify-center items-center bg-[#021929] h-full">
    <div class="mx-auto w-[70vw] text-white">
      <div class="p-6">
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
            class="mt-4 mx-auto w-full"
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
import image4 from "@/assets/thirdfloor/department/image4.png";

export default {
  name: "MonitorDTI",
  data() {
    return {
      title:
        "Theo dõi được tỉ lệ chuyển đổi số DTI trong giáo dục phổ thông do Bộ Giáo dục và Đào tạo ban hành đối với toàn bộ trường mà Sở/Phòng quản lí",
      contents: [
        {
          type: "text",
          content:
            "Sở/Phòng theo dõi được các chỉ số hoạt động theo từng trường trên hệ thống số như hoạt động kiểm tra, đánh giá, giao bài, xây dựng bài giảng điện tử. Phụ huynh tham gia và các hoạt động học tập của học sinh ➜ Toàn bộ thông qua môi trường số, gọi là Chuyển đổi số trong giáo dục",
        },
        {
          type: "image",
          imgUrl: image4,
          altText: "Sở/Phòng theo dõi được các chỉ số...",
        },
      ],
    };
  },
};
</script>

<style>
/* Nếu bạn cần thêm CSS cho component này, bạn có thể thêm ở đây */
</style>
