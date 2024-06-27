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
            <img
              :src="content.text"
              alt="Lesson"
              class="mx-auto my-4 w-full max-w-xl"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc-Bq0bczFVn85pJ5VR_Jxl5wB99lgTGIDU7_Gi5IlMHOBn1zCRU57wJjWhX_ZjVwe-wCE2ZPZUQxcliUP4yRLoYTHqDLrH-wsS-iQo8DxpLfnKRjaEyo6xYd8nzb5w_KTIGEmTetczdDg2_8f0c0N0ZbQl?key=Z491W6RtqKIzS9KLnqskzA",
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
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXeho1K8uIzdR_u03UVXIprDA8HX8l8gPkoVMgtBb0hTQr-bS31htzooWqWsMWc3GO6Nyk5xcvPIy9Hop16q160smXCJhcDB-1rbjKngC9OPkzoOF7ZCLDhBkjYaktWXTSmvOEtIrSc8nYI7lqYSfB7L4iM?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "+ Có rất nhiều dạng nội dung thiết kế bài giảng cho giáo viên lựa chọn như video tương tác, trình bày khoá học, trắc nghiệm, câu đố,,,, ",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "+ Minh hoạ thiết kế nội dung video tương tác:",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
          },

          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "Hệ thống báo tải lên thành công, thầy/cô có thể kiểm tra và điều chỉnh nội dung trong tệp H5P đã tải.",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
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
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXd2cEsIwYNxOVa6ybF4nSswHjQ2bOEDMfSOu1fR3Gu1654otmIHHfmkqwwTR_SgNKsP6ZKwOmfrdFmcCrrpCglINE4n884CrbNoOpHXD53PbGUS6s-lVWmQC0smEJfBgGq1n5YvCQJvxT__wX29aeOIshE?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "Giáo viên chọn 'tải lên bài giảng SCORM' và tải file lên hệ thống. Hệ thống báo hiển thị tạo bài giảng thành công.",
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
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXdgS9M9ZVf3jmIgDQ5cFa_C6WTFCF7Ko6Y_evu3wEIBjd4QQ1NmF46k1V4MgO40vx1Lp9elhvfLbNrfAMRe2vdkD6aAckkJ9Xb7Frv9yu1CpkKg6QsRYYwekuYJgl3ihIORXFEgv1sc6uD3HJSs1t7F6A5j?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "Bài giảng Youtube/Canva cho phép giáo viên chỉnh sửa, lồng ghép hoạt động tương tác vào video bài giảng.",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXeaMlasas5KkjC2UcfqrvNg_zAFD3NVhVo29kYoz1tUQa6MXXmfbJaXnRlVTDDfwtmTGdAch19vTQFhkooP9Fhs0tZr5OjDbXzhsuE2PaKa3mAHaNVZ10-lrRseLpSIbwJKn46beAei16MU7gJyZQb2rznT?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXc6EGUU552GPDVuK1bmSRwo_ohUdJp79VUE1eMQt4dG21Z72_I8U2tfJOVnP64m5ebCNxDhWywTOxLXnL-mAFR6HsPu5WcYXfjqyGQcj6LZqBvsoyWDR5nCqBn2J6n-qtlTmRKhVa8hqrU4j-cXEFQauG5e?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "Giáo viên có thể chỉnh sửa, lồng ghép hoạt động tương tác vào video bài giảng.",
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
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXcCnd2Ado2s9Z0mJ_c17AT-xCiuLkGLIhzBKXw_4KpJJpdnMNL3LIl-ClUStAGQq1D6Wgz5wmGtjh3AKBrDaWhjzeHFzkUJeDQaxmTd1-NViVRoe8LwiFp5TbUybOyVk4hRynzHME43kTNFW5ZPOmfJ0LQK?key=Z491W6RtqKIzS9KLnqskzA",
          },
          {
            type: "paragraph",
            text: "Giáo viên biên soạn câu hỏi lên hệ thống và giao cho học sinh.",
          },
          {
            type: "image",
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXcCnd2Ado2s9Z0mJ_c17AT-xCiuLkGLIhzBKXw_4KpJJpdnMNL3LIl-ClUStAGQq1D6Wgz5wmGtjh3AKBrDaWhjzeHFzkUJeDQaxmTd1-NViVRoe8LwiFp5TbUybOyVk4hRynzHME43kTNFW5ZPOmfJ0LQK?key=Z491W6RtqKIzS9KLnqskzA",
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
            text: "https://lh7-us.googleusercontent.com/docsz/AD_4nXcCnd2Ado2s9Z0mJ_c17AT-xCiuLkGLIhzBKXw_4KpJJpdnMNL3LIl-ClUStAGQq1D6Wgz5wmGtjh3AKBrDaWhjzeHFzkUJeDQaxmTd1-NViVRoe8LwiFp5TbUybOyVk4hRynzHME43kTNFW5ZPOmfJ0LQK?key=Z491W6RtqKIzS9KLnqskzA",
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
