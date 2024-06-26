<template>
  <div class="p-4 flex justify-center items-center bg-[#021929]">
    <div class="mx-auto w-[40vw] text-3xl text-white">
      <!-- Part 1 -->
      <div class="p-6">
        <p class="text-2xl font-bold">{{ lessonData.title }}</p>
        <p class="text-base mt-2">{{ lessonData.description }}</p>
        <p class="text-base mt-2">{{ lessonData.subDescription }}</p>
        <ul class="list-disc list-inside ml-4 mt-2">
          <li
            v-for="item in lessonData.lessonTypes"
            :key="item"
            class="text-base"
          >
            {{ item }}
          </li>
        </ul>
        <img
          :src="lessonData.image"
          class="mt-4 w-full max-w-xl"
          alt="Example Image"
        />
        <ol class="list-inside ml-4 mt-4">
          <li class="text-base font-bold">{{ lessonData.h5p.title }}</li>
        </ol>
        <p class="text-base mt-2">{{ lessonData.h5p.description }}</p>
        <p class="text-base mt-2">{{ lessonData.h5p.usage }}</p>
        <p class="text-base mt-2">{{ lessonData.h5p.build }}</p>
        <p class="text-base font-bold ml-4">
          <img
            :src="lessonData.h5p.image"
            alt="Example Image"
            class="w-full max-w-xl"
          />
        </p>
        <p class="text-base ml-4">{{ lessonData.h5p.types }}</p>
        <p class="text-base text-blue-600 underline font-bold ml-4">
          <img
            :src="lessonData.h5p.designImage"
            alt="Example Image"
            class="w-full max-w-xl"
          />
        </p>
        <p class="text-base mt-2 font-bold">
          {{ lessonData.h5p.designIllustration }}
        </p>
      </div>

      <!-- Part 2 -->
      <div class="space-y-4">
        <div v-for="(item, index) in lessonData.scorm" :key="index">
          <ol class="pl-12 text-sm font-bold">
            <li>
              <p class="text-lg">{{ item.title }}</p>
            </li>
          </ol>
          <p class="text-sm">
            {{ item.content }}
          </p>
          <div class="flex justify-center" v-if="item.image">
            <!-- Add this v-if condition -->
            <img
              :src="item.image"
              alt="SCORM"
              class="w-full max-w-screen-md h-auto"
            />
          </div>
          <p class="text-sm">
            {{ item.upload }}
            <a :href="item.link" class="underline text-blue-700"></a>
          </p>
          <ol class="pl-12 text-sm font-bold" start="2">
            <li v-for="(item, index) in lessonData.youtubeCanva" :key="index">
              <p class="text-lg">{{ item.title }}</p>
            </li>
          </ol>
          <p
            v-for="(item, index) in lessonData.youtubeCanva"
            :key="index"
            class="text-sm"
          >
            {{ item.content }}
          </p>
          <div class="flex justify-center">
            <img
              :src="item.image"
              :alt="item.alt"
              class="w-full max-w-screen-md h-auto"
            />
          </div>
        </div>
        <div v-for="(item, index) in lessonData.youtubeCanva" :key="index">
          <p class="text-sm">
            {{ item.interactivity }}
          </p>
          <div class="flex justify-center">
            <img
              :src="item.image2"
              :alt="item.alt2"
              class="w-full max-w-screen-md h-auto"
            />
          </div>
        </div>
      </div>

      <!-- Part 3 -->
      <div class="lesson-container p-4 shadow-md rounded-md">
        <!-- Phần trên -->
        <div class="mb-8">
          <ol class="pl-4 text-sm font-bold" start="2">
            <li>
              <p class="text-lg">{{ lessonData.quiz.title }}</p>
            </li>
          </ol>
          <ul class="list-disc pl-4">
            <li
              v-for="(item, index) in lessonData.quiz.questions"
              :key="index"
              class="text-sm mb-2"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Phần dưới -->
        <div class="lesson-section mb-8">
          <ol class="pl-4 text-sm font-bold" start="2">
            <li>
              <p class="text-lg">{{ lessonData.embed.title }}</p>
            </li>
          </ol>
          <p class="text-sm">{{ lessonData.embed.description }}</p>
        </div>

        <!-- Hình ảnh minh họa -->
        <div class="lesson-image mb-8">
          <img
            :src="lessonData.embed.image"
            alt="Hình ảnh minh họa"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonDesign",
  data() {
    return {
      lessonData: {
        title: "Đa dạng cách thức thiết kế bài giảng.",
        description:
          "Kết hợp với việc giao cho học sinh các bài tập để củng cố kiến thức đã học và cho phép giáo viên xem kết quả đồng thời",
        subDescription:
          "Hệ thống có 07 loại bài giảng để thầy/cô linh hoạt lựa chọn:",
        lessonTypes: [
          "Bài giảng dạng tài liệu",
          "Bài giảng dạng kiểm tra",
          "Bài giảng dạng tương tác h5p",
          "Bài giảng dạng SCORM",
          "Bài giảng dạng Youtube",
          "Bài giảng dạng Canva",
          "Bài giảng dạng nhúng",
        ],
        image:
          "https://lh7-us.googleusercontent.com/docsz/AD_4nXc-Bq0bczFVn85pJ5VR_Jxl5wB99lgTGIDU7_Gi5IlMHOBn1zCRU57wJjWhX_ZjVwe-wCE2ZPZUQxcliUP4yRLoYTHqDLrH-wsS-iQo8DxpLfnKRjaEyo6xYd8nzb5w_KTIGEmTetczdDg2_8f0c0N0ZbQl?key=Z491W6RtqKIzS9KLnqskzA",
        h5p: {
          title: "1. Bài giảng dạng tương tác h5p",
          description:
            "H5P là viết tắt của HTML5 Package. H5P là mô-đun, nó bao gồm một số loại nội dung và các ứng dụng, được thiết kế đặc biệt để sử dụng trong dạy học trực tuyến.",
          usage:
            "H5P có thể được tích hợp với các nền tảng học tập và hệ thống quản lý nội dung, đồng thời cho phép giáo viên tạo nội dung tương tác phong phú và học sinh có thể trải nghiệm chúng trên laptop, máy tính bảng hoặc điện thoại thông minh.",
          build: "Xây dựng bài giảng tương tác h5p:",
          types:
            "Có rất nhiều dạng nội dung thiết kế bài giảng cho giáo viên lựa chọn như video tương tác, trình bày khoá học, trắc nghiệm, câu đố",
          image:
            "https://lh7-us.googleusercontent.com/docsz/AD_4nXeho1K8uIzdR_u03UVXIprDA8HX8l8gPkoVMgtBb0hTQr-bS31htzooWqWsMWc3GO6Nyk5xcvPIy9Hop16q160smXCJhcDB-1rbjKngC9OPkzoOF7ZCLDhBkjYaktWXTSmvOEtIrSc8nYI7lqYSfB7L4iM?key=Z491W6RtqKIzS9KLnqskzA",
          designImage:
            "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
          designIllustration: "Minh hoạ thiết kế nội dung video tương tác:",
        },
        scorm: [
          {
            title: "2. Bài giảng dạng SCORM:",
            content:
              "SCORM (Sharable Content Object Reference Model) có nghĩa là Mô hình tham chiếu đối tượng nội dung có thể chia sẻ. SCORM là một tiêu chuẩn quốc tế cho các bài giảng điện tử, giúp đảm bảo bài giảng sẽ tương thích với hầu hết mọi hệ thống quản lí học tập (LMS) trong quá trình triển khai đào tạo trực tuyến.",
            image:
              "https://lh7-us.googleusercontent.com/docsz/AD_4nXd2cEsIwYNxOVa6ybF4nSswHjQ2bOEDMfSOu1fR3Gu1654otmIHHfmkqwwTR_SgNKsP6ZKwOmfrdFmcCrrpCglINE4n884CrbNoOpHXD53PbGUS6s-lVWmQC0smEJfBgGq1n5YvCQJvxT__wX29aeOIshE?key=Z491W6RtqKIzS9KLnqskzA",
            upload:
              "Giáo viên chọn 'tải lên bài giảng SCORM' và tải file lên hệ thống. Hệ thống báo hiển thị tạo bài giảng thành công",
            link: "https://prnt.sc/oLYMqagwlUiG",
          },
        ],
        youtubeCanva: [
          {
            title: "3. Bài giảng dạng Youtube/Canva",
            content:
              "Giáo viên điền đầy đủ thông tin bài giảng điện tử và chọn loại bài giảng 'Dạng Youtube (hoặc Canva)'. Đưa file từ thiết bị cá nhân lên hệ thống.",
            image:
              "https://lh7-us.googleusercontent.com/docsz/AD_4nXdgS9M9ZVf3jmIgDQ5cFa_C6WTFCF7Ko6Y_evu3wEIBjd4QQ1NmF46k1V4MgO40vx1Lp9elhvfLbNrfAMRe2vdkD6aAckkJ9Xb7Frv9yu1CpkKg6QsRYYwekuYJgl3ihIORXFEgv1sc6uD3HJSs1t7F6A5j?key=Z491W6RtqKIzS9KLnqskzA",
            interactivity:
              "Bài giảng Youtube/Canva cho phép giáo viên chỉnh sửa, lồng ghép hoạt động tương tác vào video bài giảng",
            image2:
              "https://lh7-us.googleusercontent.com/docsz/AD_4nXeaMlasas5KkjC2UcfqrvNg_zAFD3NVhVo29kYoz1tUQa6MXXmfbJaXnRlVTDDfwtmTGdAch19vTQFhkooP9Fhs0tZr5OjDbXzhsuE2PaKa3mAHaNVZ10-lrRseLpSIbwJKn46beAei16MU7gJyZQb2rznT?key=Z491W6RtqKIzS9KLnqskzA",
            alt2: "Youtube/Canva 2",
          },
        ],
        quiz: {
          title: "4. Bài giảng dạng kiểm tra",
          questions: [
            "- Giáo viên có thể biên soạn câu hỏi cho đề kiểm tra, thêm câu học trực tiếp từ kho ngân hàng câu hỏi có sẵn hoặc thêm câu hỏi từ file docx",
            "- Giáo viên biên soạn câu hỏi lên hệ thống và giao cho học sinh",
          ],
        },
        embed: {
          title: "5. Bài giảng dạng nhúng",
          description:
            "Giáo chọn loại bài giảng 'Dạng nhúng' và điền đủ các thông tin bài giảng và cập nhật bài giảng'. Bài giảng 'Dạng nhúng' hoàn thành",
          image:
            "https://lh7-us.googleusercontent.com/docsz/AD_4nXcCnd2Ado2s9Z0mJ_c17AT-xCiuLkGLIhzBKXw_4KpJJpdnMNL3LIl-ClUStAGQq1D6Wgz5wmGtjh3AKBrDaWhjzeHFzkUJeDQaxmTd1-NViVRoe8LwiFp5TbUybOyVk4hRynzHME43kTNFW5ZPOmfJ0LQK?key=Z491W6RtqKIzS9KLnqskzA",
        },
      },
    };
  },
};
</script>

<style scoped>
.bg-custom-background-image {
  background-image: url('@/assets/inforgraphic-1.jpg');
  background-size: cover; /* Chỉnh kích thước ảnh để nó phù hợp với phần nền */
  background-position: center center; /* Đặt vị trí ảnh trong phần nền */
}
</style>
