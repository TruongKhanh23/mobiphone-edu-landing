<template>
  <div class="relative z-1 flex items-center justify-center w-full h-full">
    <div class="text-center text-white">
      <!-- Positioned Image -->
      <a-button
        class="department border-2 border-white bg-skyblue"
        type="primary"
        @click="onClickButton('department')"
        >Sở/ phòng</a-button
      >
      <a-button
        class="teacher border-2 border-white bg-skyblue"
        type="primary"
        @click="onClickButton('teacher')"
        >Giáo viên</a-button
      >
      <a-button
        class="student border-2 border-white bg-skyblue"
        type="primary"
        @click="onClickButton('student')"
        >Học sinh</a-button
      >
      <a-button
        class="school border-2 border-white bg-skyblue"
        @click="onClickButton('school')"
        type="primary"
        >Trường học</a-button
      >
      <a-button
        class="mobiEdu border-2 border-white bg-skyblue"
        @click="onClickButton('mobiEdu')"
        type="primary"
        >MobiEdu</a-button
      >
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
