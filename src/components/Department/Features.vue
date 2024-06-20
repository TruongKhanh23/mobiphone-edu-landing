<template>
  <div>
    <div class="feature-one">
      <div class="w-[23vw] h-40 hover:scale-110">
        <div class="text-right font-black text-4xl text-[#EEBE3A]">01</div>
        <div class="w-[75%]">
          <div class="font-bold text-justify text-[#0C9DEE] italic">
            ĐỊNH DANH cây học liệu theo chương học -
          </div>
          <div class="text-right text-sm">
            bài giảng chi tiết cho toàn Sở/Phòng.
          </div>
        </div>
      </div>
    </div>
    <div class="feature-two">
      <div class="w-[23vw] h-40 hover:scale-110">
        <div class="text-right font-black text-4xl text-[#EEBE3A]">02</div>
        <div class="w-[75%]">
          <div class="font-bold text-justify text-[#0C9DEE] italic">
            Hệ thống quản lý học tập và giảng dạy hiệu quả.
          </div>
          <div class="text-right text-sm">Cải tiến và hiện đại hóa.</div>
        </div>
      </div>
    </div>
    <div class="feature-three">
      <div class="w-[23vw] h-40 hover:scale-110">
        <div class="text-left font-black text-4xl text-[#EEBE3A]">03</div>
        <div class="w-[75%] float-right">
          <div class="font-bold text-left text-[#0C9DEE] italic">
            Tích hợp công nghệ tiên tiến.
          </div>
          <div class="text-left text-sm">
            Đem lại trải nghiệm học tập tốt nhất.
          </div>
        </div>
      </div>
    </div>
    <div class="feature-four">
      <div class="w-[23vw] h-40 hover:scale-110">
        <div class="text-left font-black text-4xl text-[#EEBE3A]">04</div>
        <div class="w-[75%] float-right">
          <div class="font-bold text-left text-[#0C9DEE] italic">
            Tạo dựng cộng đồng học tập trực tuyến.
          </div>
          <div class="text-left text-sm">Kết nối giáo viên và học sinh.</div>
        </div>
      </div>
    </div>
    <div class="feature-five">
      <div class="w-[23vw] h-40 hover:scale-110">
        <div class="text-left font-black text-4xl text-[#EEBE3A]">05</div>
        <div class="w-[75%] float-right">
          <div class="font-bold text-left text-[#0C9DEE] italic">
            Hỗ trợ học tập suốt đời.
          </div>
          <div class="text-left text-sm">Đảm bảo chất lượng giáo dục.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Features",
});
</script>

<style scoped>
/* Các style của các feature có thể được sao chép từ component gốc và dán vào đây */

.feature-one {
  position: absolute;
  top: 40%;
  left: 16%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-two {
  position: absolute;
  top: 85%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-three {
  position: absolute;
  top: 83%;
  left: 78%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-four {
  position: absolute;
  top: 53%;
  left: 86%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
.feature-five {
  position: absolute;
  top: 23%;
  left: 86%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
}
</style>
