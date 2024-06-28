<template>
  <div class="p-4 flex justify-center items-center bg-[#021929]">
    <div class="mx-auto w-[70vw] text-3xl text-white">
      <p class="text-2xl text-center font-bold p-6 space-y-4">
        {{ "Đa dạng cách thức thiết kế bài giảng" }}
      </p>
      <!-- Loop through lessons -->
      <div v-for="lesson in newData" :key="lesson.id" class="my-2">
        <!-- Lesson Title -->
        <p class="text-xl font-bold">{{ lesson.title }}</p>

        <!-- Lesson Content -->
        <div v-for="(content, index) in lesson.content" :key="index">
          <template v-if="content.type === 'subTitle'">
            <p class="text-xl font-bold">{{ content.text }}</p>
          </template>
          <template v-else-if="content.type === 'paragraph'">
            <p class="text-base">{{ content.text }}</p>
          </template>
          <template v-else-if="content.type === 'list'">
            <ul class="list-disc list-inside ml-4">
              <li v-for="item in content.text" :key="item" class="text-base">
                {{ item }}
              </li>
            </ul>
          </template>
          <template v-else-if="content.type === 'link'">
            <a :href="content.text" class="text-blue-600 underline">{{
              content.text
            }}</a>
          </template>
          <template v-else-if="content.type === 'image'">
            <img :src="content.text" alt="Lesson" class="mx-auto my-4 w-full" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image1.png";
import image2 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image2.webp";
import image3 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image3.webp";
import image4 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image4.png";
import image5 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image5.png";
import image6 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image6.png";
import image7 from "@/assets/thirdfloor/teacher/2.3.1/h5p/image7.png";

import image1Scrom from "@/assets/thirdfloor/teacher/2.3.1/scrom/image1.png";
import image2Scrom from "@/assets/thirdfloor/teacher/2.3.1/scrom/image2.png";

import image1YoutubeCanva from "@/assets/thirdfloor/teacher/2.3.1/youtube-canva/image1.webp";
import image2YoutubeCanva from "@/assets/thirdfloor/teacher/2.3.1/youtube-canva/image2.png";

import image1Test from "@/assets/thirdfloor/teacher/2.3.1/test/image1.webp";
import image2Test from "@/assets/thirdfloor/teacher/2.3.1/test/image2.webp";

import image1Embeded from "@/assets/thirdfloor/teacher/2.3.1/embeded/image1.webp";

export default {
  name: "LessonDesign",
  setup() {
    const newData = [
      {
        id: 1,
        title: "",
        content: [
          {
            type: "paragraph",
            text: "Kết hợp với việc giao cho học sinh các bài tập để củng cố kiến thức đã học và cho phép giáo viên xem kết quả đồng thời",
          },
          {
            type: "paragraph",
            text: "Hệ thống có 07 loại bài giảng để thầy/cô linh hoạt lựa chọn:",
          },
          {
            type: "list",
            text: [
              "Bài giảng dạng tài liệu",
              "Bài giảng dạng kiểm tra",
              "Bài giảng dạng tương tác h5p",
              "Bài giảng dạng SCORM",
              "Bài giảng dạng Youtube",
              "Bài giảng dạng Canva",
              "Bài giảng dạng nhúng",
            ],
          },
          {
            type: "image",
            text: image1,
          },
          {
            type: "subTitle",
            text: "1. Bài giảng dạng tương tác h5p",
          },
          {
            type: "paragraph",
            text: "H5P là viết tắt của HTML5 Package. H5P là mô-đun, nó bao gồm một số loại nội dung và các ứng dụng, được thiết kế đặc biệt để sử dụng trong dạy học trực tuyến.",
          },
          {
            type: "paragraph",
            text: "H5P có thể được tích hợp với các nền tảng học tập và hệ thống quản lí nội dung, đồng thời cho phép giáo viên tạo nội dung tương tác phong phú và học sinh có thể trải nghiệm chúng trên laptop, máy tính bảng hoặc điện thoại thông minh.",
          },
          {
            type: "paragraph",
            text: "- Xây dựng bài giảng tương tác h5p:",
          },
          {
            type: "paragraph",
            text: "+ Giáo viên có thể tạo nội dung trực tiếp hoặc tải lên file tài liệu H5P có sẵn",
          },
          {
            type: "image",
            text: image2,
          },
          {
            type: "paragraph",
            text: "+ Có rất nhiều dạng nội dung thiết kế bài giảng cho giáo viên lựa chọn như video tương tác, trình bày khoá học, trắc nghiệm, câu đố,,,, ",
          },
          {
            type: "image",
            text: image3,
          },
          {
            type: "paragraph",
            text: "+ Minh hoạ thiết kế nội dung video tương tác:",
          },
          {
            type: "image",
            text: image4,
          },

          {
            type: "image",
            text: image5,
          },
          {
            type: "image",
            text: image6,
          },
          {
            type: "paragraph",
            text: "Hệ thống báo tải lên thành công, thầy/cô có thể kiểm tra và điều chỉnh nội dung trong tệp H5P đã tải.",
          },
          {
            type: "image",
            text: image7,
          },
        ],
      },
      {
        id: 2,
        title: "2. Bài giảng dạng SCORM",
        content: [
          {
            type: "paragraph",
            text: "SCORM (Sharable Content Object Reference Model) có nghĩa là Mô hình tham chiếu đối tượng nội dung có thể chia sẻ. SCORM là một tiêu chuẩn quốc tế cho các bài giảng điện tử, giúp đảm bảo bài giảng sẽ tương thích với hầu hết mọi hệ thống quản lí học tập (LMS) trong quá trình triển khai đào tạo trực tuyến.",
          },
          {
            type: "paragraph",
            text: "- Xây dựng bài giảng dạng SCORM:",
          },
          {
            type: "paragraph",
            text: "+ Giáo viên nhập tên bài, chọn loại bài giảng dạng SCORM.",
          },
          {
            type: "image",
            text: image1Scrom,
          },
          {
            type: "paragraph",
            text: "+ Giáo viên chọn 'tải lên bài giảng SCORM' và tải file lên hệ thống. Hệ thống báo hiển thị tạo bài giảng thành công ",
          },
          {
            type: "image",
            text: image2Scrom,
          },
        ],
      },
      {
        id: 3,
        title: "3. Bài giảng dạng Youtube/Canva",
        content: [
          {
            type: "paragraph",
            text: "Giáo viên điền đầy đủ thông tin bài giảng điện tử và chọn loại bài giảng 'Dạng Youtube (hoặc Canva)'. Đưa file từ thiết bị cá nhân lên hệ thống.",
          },
          {
            type: "image",
            text: image1YoutubeCanva,
          },
          {
            type: "paragraph",
            text: "Bài giảng Youtube/Canva cho phép giáo viên chỉnh sửa, lồng ghép hoạt động tương tác vào video bài giảng.",
          },
          {
            type: "image",
            text: image2YoutubeCanva,
          },
        ],
      },
      {
        id: 4,
        title: "4. Bài giảng dạng kiểm tra",
        content: [
          {
            type: "paragraph",
            text: "Giáo viên có thể biên soạn câu hỏi cho đề kiểm tra, thêm câu học trực tiếp từ kho ngân hàng câu hỏi có sẵn hoặc thêm câu hỏi từ file docx.",
          },
          {
            type: "image",
            text: image1Test,
          },
          {
            type: "paragraph",
            text: "Giáo viên biên soạn câu hỏi lên hệ thống và giao cho học sinh.",
          },
          {
            type: "image",
            text: image2Test,
          },
        ],
      },
      {
        id: 5,
        title: "5. Bài giảng dạng nhúng",
        content: [
          {
            type: "paragraph",
            text: "Giáo chọn loại bài giảng 'Dạng nhúng' và điền đủ các thông tin bài giảng và cập nhật bài giảng'. Bài giảng 'Dạng nhúng' hoàn thành.",
          },
          {
            type: "image",
            text: image1Embeded,
          },
        ],
      },
    ];
    return { newData };
  },
};
</script>

<style scoped>
.bg-custom-background-image {
  background-image: url("@/assets/inforgraphic-1.jpg");
  background-size: cover; /* Chỉnh kích thước ảnh để nó phù hợp với phần nền */
  background-position: center center; /* Đặt vị trí ảnh trong phần nền */
}
</style>
