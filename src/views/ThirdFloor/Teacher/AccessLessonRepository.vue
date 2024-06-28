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
import image1 from "@/assets/thirdfloor/teacher/2.3.2/trang3_giaovien__strong2_motachung.png";
import image2 from "@/assets/thirdfloor/teacher/2.3.2/trang3_giaovien_strong2_motachung2.png";
import image3 from "@/assets/thirdfloor/teacher/2.3.2/trang3_strong2_giaovien_giaovienxemketquatuhoc.jpg";
import image4 from "@/assets/thirdfloor/teacher/2.3.2/trang3_giaovien_strong2_giaovienxemchitiet.png";

export default {
  name: "AccessLessonRepository",
  setup() {
    const styles = {
      container: "p-4 flex justify-center items-center bg-[#021929]",
      innerContainer: "mx-auto w-[70vw] text-3xl text-white",
      contentContainer: "p-4 space-y-4",
      heading: "text-2xl font-bold text-center space-y-4 p-6",
      paragraph: "text-sm",
      image: "w-full h-auto mx-auto",
      link: "text-blue-700 underline",
    };
    const heading = "Được truy cập vào kho bài giảng và giáo án trong trường";
    const content = [
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
        imgSrc: image1,
        imgAlt: "Example",
      },
      {
        text: "",
        imgSrc: image2,
        imgAlt: "Example",
      },
      {
        text: "- GV chọn chia sẻ bài giảng cho Sở. Admin PhòngSở duyệt thì các GV khác thuộc các trường cùng Phòng/Sở quàn lí sẽ xem được của nhau",
        imgSrc: "",
        imgAlt: "Example",
      },
      {
        text: "- Giáo viên xem kết quả tự học của học sinh: ",
        imgSrc: image3,
        imgAlt: "Example",
      },
      {
        text: "- Giáo viên chọn học sinh để xem chi tiết mức độ thành thạo của học sinh. Tại đây, giáo viên có thể xem được nhật ký học tập, mức độ thành thạo của các đơn vị kiến thức, độ bao phủ mức thành thạo kiến thức của học sinh.",
        imgSrc: image4,
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
