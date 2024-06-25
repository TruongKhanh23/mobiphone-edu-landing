<template>
  <div class="relative z-1 flex items-center justify-center w-full h-full">
    <div class="text-center text-[#41F6F9]">
      <!-- Positioned Image -->
      <img
        :src="department"
        alt="department"
        class="h-28 department cursor-pointer bg-skyblue font-black hover:h-32"
        @click="onClickButton('department')"
      />
      <img
        :src="teacher"
        alt="teacher"
        class="h-28 teacher cursor-pointer bg-skyblue font-black hover:h-32"
        @click="onClickButton('teacher')"
      />
      <img
        :src="student"
        alt="student"
        class="h-28 student cursor-pointer bg-skyblue font-black hover:h-32"
        @click="onClickButton('student')"
      />
      <img
        :src="school"
        alt="school"
        class="h-32 school cursor-pointer bg-skyblue font-black hover:h-36"
        @click="onClickButton('school')"
      />
      <img
        :src="mobiEdu"
        alt="mobiEdu"
        class="h-28 mobiEdu cursor-pointer bg-skyblue font-black hover:h-32"
        @click="onClickButton('mobiEdu')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import school from "@/assets/image/home/school.png";
import teacher from "@/assets/image/home/teacher.png";
import student from "@/assets/image/home/student.png";
import department from "@/assets/image/home/department.png";
import mobiEdu from "@/assets/image/home/mobiEdu.png";

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
      school,
      teacher,
      student,
      department,
      mobiEdu,
    };
  },
});
</script>

<style scoped>
@keyframes moveUpDown {
  0%,
  100% {
    transform: translateY(0) translate(-50%, -50%);
  }
  50% {
    transform: translateY(-10px) translate(-50%, -50%);
  }
}

.department,
.teacher,
.student,
.school,
.mobiEdu {
  animation: moveUpDown 3s ease-in-out infinite;
  transform: translate(-50%, -50%);
}

.department {
  position: absolute;
  top: 23%;
  left: 62%;
  transition: transform 0.3s ease;
}

.school {
  position: absolute;
  top: 53%;
  left: 65%;
  transition: transform 0.3s ease;
}

.teacher {
  position: absolute;
  top: 25%;
  left: 40%;
  transition: transform 0.3s ease;
}

.student {
  position: absolute;
  top: 32%;
  left: 32%;
  transition: transform 0.3s ease;
}

.mobiEdu {
  position: absolute;
  top: 51%;
  left: 47%;
  transition: transform 0.3s ease;
}
.mobiEdu:hover {
  position: absolute;
  top: 51%;
  left: 47%;
  transition: transform 0.3s ease;
}
</style>
