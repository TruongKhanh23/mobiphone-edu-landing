<template>
  <div class="p-4 flex justify-center items-center bg-[#021929]">
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
import image1 from "@/assets/thirdfloor/student/2.4.1/trang3_hocsinh_strong1_motachung.png";
import image2 from "@/assets/thirdfloor/student/2.4.1/trang3_hocsinh_strong1_khungctrthichung.jpg";

export default {
  name: "AdaptiveLearning",
  data() {
    return {
      title: "Tính năng Adaptive learning cho học sinh:",
      contents: [
        {
          type: "text",
          content:
            "- Học sinh có thể tự học, tự luyện tập theo từng chủ đề theo khả năng của mình.",
        },
        {
          type: "text",
          content:
            "- Hệ thống phân tích trình độ và đưa ra bài luyện tập phù hợp.",
        },
        {
          type: "text",
          content:
            "- Gợi ý bài luyện tập dựa theo năng lực của học sinh qua adaptive learning:",
        },
        {
          type: "image",
          imgUrl: image1,
          altText: "Adaptive learning example",
        },
        {
          type: "subTitle",
          content:
            "Công nghệ Adaptive learning - công nghệ học tập thích ứng, cho phép các nội dung luyện tập liên tục được thay đổi dựa trên năng lực hiện tại của người học.",
        },
        {
          type: "paragraph",
          content:
            "Lấy ví dụ: nếu em trả lời câu 1: chiến tranh thế giới 2 có bao nhiêu nước tham gia? Nếu trả lời sai, thì hệ thống khi đưa ra đáp án đồng thời giải nghĩa, và đến câu hỏi 2 sẽ là: chiến tranh thế giới 2 có x nước tham gia là các nước nào? - tức để lặp lại nội dung, kiến thức của câu hỏi trước, giúp cho người học được nhận diện thông tin đó liên tục, Và cuối cùng câu hỏi sai sẽ được quay lại hỏi 1 lượt nửa sau khoảng 5 câu tiếp theo để kiểm tra mức độ nắm thông tin của người học. Như vậy câu hỏi luyện tập của em sẽ khác với bạn A, khác với bạn B; thậm chí khi luyện tập lại chủ đề Chiến tranh thế giới 2, thì các câu hỏi hiển thị với em cũng sẽ khác, vì lúc đó kiến thức cơ bản em đã nắm tốt rồi, hệ thống ghi nhận và chuyển sang trình độ cao hơn. Adaptive learning giúp cho các bạn giỏi tiết kiệm thời gian làm các bài tập quá dễ, các bạn còn chậm sẽ không bị ngợp bởi các câu hỏi trung bình khó. Điều này giúp cho việc khắc phục được nhược điểm của bài tập 'cào bằng' - trở về với bản chất và mục đích thực sự của giáo dục - đó là giúp học sinh tiến bộ hơn mỗi ngày và với chính bản thân mình.",
        },
        {
          type: "subTitle",
          content:
            "Adaptive Learning – luyện tập thích ứng còn cao hơn 1 bậc so với customization – cá nhân hóa học tập.",
        },
        {
          type: "paragraph",
          content:
            "Cá nhân hóa, tức là hệ thống có thể gợi ý nội dung dựa theo mục tiêu, sở thích, sự quan tâm của người đó. Nhưng việc này áp dụng trong giải trí rất dễ, áp dụng trong giáo dục không dễ. Rất dễ để hỏi loại nhạc, ca sĩ con yêu thích. Nhưng khi anh/chị hỏi học sinh của mình: con thích môn gì, trong tiếng Anh con thích học cái gì, con có mục tiêu gì không? – rất khó để nhận được câu trả lời từ học sinh. Thì Luyện tập thích ứng sẽ giúp chính học sinh phát hiện ra điều đó: chủ đề kiến thức đã mạnh, chủ đề kiến thức còn yếu, mức độ mạnh yếu như thế nào – cũng giúp giáo viên đọc dữ liệu này để đưa ra định hướng đào tạo tiếp theo.",
        },
        {
          type: "image",
          imgUrl: image2,
          altText: "Adaptive learning example 2",
        },
      ],
    };
  },
};
</script>

<style>
/* Nếu bạn cần thêm CSS cho component này, bạn có thể thêm ở đây */
</style>
