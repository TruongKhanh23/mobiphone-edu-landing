<template>
  <div :class="styles.container">
    <div :class="styles.innerContainer">
      <div :class="styles.contentContainer">
        <p :class="styles.heading">{{ heading }}</p>
        <div v-for="(item, index) in content" :key="index">
          <p v-if="item.text" :class="styles.paragraph">{{ item.text }}</p>
          <img
            v-if="item.imgSrc"
            :src="item.imgSrc"
            :alt="item.imgAlt"
            :class="styles.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessLessonRepository",
  setup() {
    const styles = {
      container: "p-4 flex justify-center items-center bg-[#021929]",
      innerContainer: "mx-auto w-[70vw] text-3xl text-white",
      contentContainer: "p-4 space-y-4",
      heading: "text-lg font-bold text-center",
      paragraph: "text-sm",
      image: "w-full max-w-screen-md h-auto mx-auto",
      link: "text-blue-700 underline",
    };
    const heading = "Được truy cập vào kho bài giảng và giáo án trong trường";
    const content = [
      {
        text: "Được truy cập vào kho bài giảng và giáo án trong trường",
        imgSrc: null,
        imgAlt: null,
      },
      {
        text: "Giáo viên có thể yêu cầu học sinh xem bài giảng nhằm giúp các em chuẩn bị trước cho lớp học hoặc phục vụ cho những trường hợp học sinh vắng để xem lại. Các hoạt động xem bài giảng được ghi nhận và tổng hợp qua báo cáo",
        imgSrc: null,
        imgAlt: null,
      },
      {
        text: "Sau khi giáo viên chọn “Chia sẻ bài giảng điện tử” lên Trường/Phòng/Sở",
        imgSrc: null,
        imgAlt: null,
      },
      {
        text: "- TBM duyệt thành bài giảng điện tử của trường. Sau khi trưởng bộ môn duyệt thì giáo viên toàn trường được xem bài giảng",
        imgSrc:
          "https://lh7-us.googleusercontent.com/docsz/AD_4nXet3-RkoC58FIBgGIvyxFZFTJkPhtkXUBfZ6XIX4UX61ETC-EgfSrCEzQskPI_-jiZHf_-yTsy82ErNeXoyWbOWi2r1NOTQkPL-FkUELEIgA45Xg2mmYG4nqqsiQaTTfbE56uLI2H3ZOLR-fgHk5RwiIpk?key=Z491W6RtqKIzS9KLnqskzA",
        imgAlt: "Example",
      },
      {
        text: "- GV chọn chia sẻ bài giảng cho Sở. Admin PhòngSở duyệt thì các GV khác thuộc các trường cùng Phòng/Sở quàn lí sẽ xem được của nhau",
        imgSrc:
          "https://lh7-us.googleusercontent.com/docsz/AD_4nXcpfA9PPt7OF8a2er2HQPftcn6hCCx_1UHRLIQ4kA0kO-RlXbmr9k0a0TFVzNCHIyOnVJGvgqeJc5z0SQDNByHxpbDDD98RNxFovU3T0HS0Y_Y2y8Dri-2pmUtXXePdVN1klu8rwLrb03bZKcT3gdWX-cxy?key=Z491W6RtqKIzS9KLnqskzA",
        imgAlt: "Example",
      },
      {
        text: "- Giáo viên xem kết quả tự học của học sinh: ",
        imgSrc:
          "https://lh7-us.googleusercontent.com/docsz/AD_4nXezVCFF7vEmEqWI-isAEPpukxfaNuEYfbuHLnqThuudFtO8Qw0t72ZhQoPoS6VB4zUzvJvD5-MLVsx43LtkqgcOHCmniwPhO6wnC_D0ip9XRQyuw1HSj9Di0t8FMBE567Ptas_68DPq4kDFFZIzyk4YDACK?key=Z491W6RtqKIzS9KLnqskzA",
        imgAlt: "Example",
      },
      {
        text: "- Giáo viên chọn học sinh để xem chi tiết mức độ thành thạo của học sinh. Tại đây, giáo viên có thể xem được nhật ký học tập, mức độ thành thạo của các đơn vị kiến thức, độ bao phủ mức thành thạo kiến thức của học sinh.",
        imgSrc:
          "https://lh7-us.googleusercontent.com/docsz/AD_4nXeMslf3JoIkzxU6HR0mMKHxRC-dxuMPJfd69qlDBd2RQHgAfLAG_02XE8XYh3T948zCflB5fM2oRqkHuB9xqzjzKy_3NXmItjVM04X9WNvdmdO0BnXonzanAUGF4D9Eaev2RnyQNQdASdYJVNwOOxsGH0x7?key=Z491W6RtqKIzS9KLnqskzA",
        imgAlt: "Example",
      },
    ];

    return {
      styles,
      content,
      heading,
    };
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
