<template>
  <div class="relative z-1 flex items-center justify-center w-full h-full">
    <div class="text-center text-[#41F6F9]">
      <!-- Positioned Image -->
      <button
        class="department bg-skyblue min-h-[5vh] min-w-[24vh] rounded-lg uppercase font-black"
        @click="onClickButton('department')"
      >
        Sở giáo dục
      </button>
      <button
        class="teacher bg-skyblue min-h-[5vh] min-w-[20vh] rounded-lg uppercase font-black"
        @click="onClickButton('teacher')"
      >
        Giáo viên
      </button>
      <button
        class="student bg-skyblue min-h-[5vh] min-w-[20vh] rounded-lg uppercase font-black"
        @click="onClickButton('student')"
      >
        Học sinh
      </button>
      <button
        class="school bg-skyblue min-h-[5vh] min-w-[25vh] rounded-lg uppercase font-black"
        @click="onClickButton('school')"
      >
        Trường học
      </button>
      <button
        class="mobiEdu bg-skyblue min-h-[5vh] min-w-[15vh] rounded-lg uppercase font-black"
        @click="onClickButton('mobiEdu')"
      >
        MobiEdu
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ObjectsTitle",
  emits: ["clickButton", "openSchoolSecondFloor", "openMobiEduSecondFloor"],
  setup(_, { emit }) {
    const onClickButton = (value: "") => {
      console.log("on Click Object Title", value);
      emit("clickButton", value);
    };

    return {
      onClickButton,
    };
  },
});
</script>

<style scoped>
/* Animation keyframes */
@keyframes moveUpDown {
  0%,
  100% {
    transform: translateY(0) rotate(30deg);
  }
  50% {
    transform: translateY(-20px) rotate(30deg); /* Di chuyển lên */
  }
}

/* Apply animation to buttons */
.department,
.teacher,
.student,
.school,
.mobiEdu {
  animation: moveUpDown 3s ease-in-out infinite; /* Thời gian và kiểu lặp lại của hiệu ứng */
}

/* Các kiểu vị trí và hover của nút */
.department {
  position: absolute;
  top: 21%;
  left: 55%;
  transform: translate(-75%, -25%) rotate(30deg);
  transition: transform 0.3s ease; /* Thêm transition để có hiệu ứng mượt khi hover */
}

.department:hover {
  transform: translate(-75%, -25%) rotate(30deg) scale(1.1);
  border: 2px solid white;
  border-radius: 10px;
}

.school {
  position: absolute;
  top: 47%;
  left: 60%;
  transform: translate(-75%, -25%) rotate(30deg);
  transition: transform 0.3s ease;
}

.school:hover {
  transform: translate(-75%, -25%) rotate(30deg) scale(1.1);
  border: 2px solid white;
  border-radius: 10px;
}

.teacher {
  position: absolute;
  top: 25%;
  left: 35%;
  transform: translate(-75%, -45%) rotate(30deg);
  transition: transform 0.3s ease; /* Thêm transition để có hiệu ứng mượt khi hover */
}

.teacher:hover {
  transform: translate(-75%, -45%) rotate(30deg) scale(1.1);
  border: 2px solid white;
  border-radius: 10px;
}

.student {
  position: absolute;
  top: 30%;
  left: 28%;
  transform: translate(-75%, -25%) rotate(30deg);
  transition: transform 0.3s ease; /* Thêm transition để có hiệu ứng mượt khi hover */
}

.student:hover {
  transform: translate(-75%, -25%) rotate(30deg) scale(1.1);
  border: 2px solid white;
  border-radius: 10px;
}

.mobiEdu {
  position: absolute;
  top: 43%;
  left: 45%;
  transform: translate(-75%, -25%) rotate(30deg);
  transition: transform 0.3s ease; /* Thêm transition để có hiệu ứng mượt khi hover */
}

.mobiEdu:hover {
  transform: translate(-75%, -25%) rotate(30deg) scale(1.1);
  border: 2px solid white;
  border-radius: 10px;
}
</style>
