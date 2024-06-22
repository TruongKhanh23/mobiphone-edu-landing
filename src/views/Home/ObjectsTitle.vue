<template>
  <div class="relative z-1 flex items-center justify-center w-full h-full">
    <div class="text-center text-[#41F6F9]">
      <!-- Positioned Image -->
      <img
        :src="department"
        alt="department"
        class="h-24 department cursor-pointer bg-skyblue font-black hover:h-28"
        @click="onClickButton('department')"
      />
      <img
        :src="teacher"
        alt="teacher"
        class="h-24 teacher cursor-pointer bg-skyblue font-black hover:h-28"
        @click="onClickButton('teacher')"
      />
      <img
        :src="student"
        alt="student"
        class="h-24 student cursor-pointer bg-skyblue font-black hover:h-28"
        @click="onClickButton('student')"
      />
      <img
        :src="school"
        alt="school"
        class="h-24 school cursor-pointer bg-skyblue font-black hover:h-28"
        @click="onClickButton('school')"
      />
      <img
        :src="mobiEdu"
        alt="mobiEdu"
        class="h-24 mobiEdu cursor-pointer bg-skyblue font-black hover:h-28"
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
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.department,
.teacher,
.student,
.school,
.mobiEdu {
  animation: moveUpDown 3s ease-in-out infinite;
}

.department {
  position: absolute;
  top: 14%;
  left: 58%;
  transition: transform 0.3s ease;
}

.school {
  position: absolute;
  top: 39%;
  left: 58.5%;
  transition: transform 0.3s ease;
}

.teacher {
  position: absolute;
  top: 15%;
  left: 35%;
  transition: transform 0.3s ease;
}

.student {
  position: absolute;
  top: 20%;
  left: 26%;
  transition: transform 0.3s ease;
}

.mobiEdu {
  position: absolute;
  top: 37%;
  left: 41%;
  transition: transform 0.3s ease;
}
.mobiEdu:hover {
  position: absolute;
  top: 35%;
  left: 40%;
  transition: transform 0.3s ease;
}
</style>
