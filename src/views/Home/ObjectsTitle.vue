<template>
  <div class="relative z-1 flex items-center justify-center w-full h-full">
    <div class="text-center text-white">
      <!-- Positioned Image -->
      <button
        class="department bg-skyblue min-h-[5vh] min-w-[24vh] rounded-lg"
        @click="onClickButton('department')"
      >
        Sở giáo dục
      </button>
      <button
        class="teacher bg-skyblue min-h-[5vh] min-w-[20vh] rounded-lg"
        @click="onClickButton('teacher')"
      >
        Giáo viên
      </button>
      <button
        class="student bg-skyblue min-h-[5vh] min-w-[20vh] rounded-lg"
        @click="onClickButton('student')"
      >
        Học sinh
      </button>
      <button
        class="school bg-skyblue min-h-[5vh] min-w-[25vh] rounded-lg"
        @click="onClickButton('school')"
      >
        Trường học
      </button>
      <button
        class="mobiEdu bg-skyblue min-h-[5vh] min-w-[15vh] rounded-lg"
        @click="onClickButton('mobiEdu')"
      ></button>
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
/* Scoped styles specific to ObjectsTitle */
</style>
