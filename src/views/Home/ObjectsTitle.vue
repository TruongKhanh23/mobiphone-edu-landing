<template>
  <div class="relative z-1 flex items-center justify-center w-full h-full">
    <div class="text-center text-white">
      <!-- Positioned Image -->
      <a-button
        class="deparment border-2 border-white bg-skyblue"
        type="primary"
        @click="onClickButton"
        >Sở/ phòng</a-button
      >
      <a-button
        class="school border-2 border-white bg-skyblue"
        type="primary"
        @click="openSchoolSecondFloor"
        >Trường học</a-button
      >
      <a-button class="teacher border-2 border-white bg-skyblue" type="primary"
        >Giáo viên</a-button
      >
      <a-button class="student border-2 border-white bg-skyblue" type="primary"
        >Học sinh</a-button
      >
      <a-button
        class="mobiEdu border-2 border-white bg-skyblue"
        type="primary"
        @click="openMobiEduSecondFloor"
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
    const onClickButton = () => {
      emit("clickButton");
    };
    const openSchoolSecondFloor = () => {
      emit("openSchoolSecondFloor");
    };
    const openMobiEduSecondFloor = () => {
      emit("openMobiEduSecondFloor");
    };

    return {
      onClickButton,
      openSchoolSecondFloor,
      openMobiEduSecondFloor,
    };
  },
});
</script>

<style scoped>
/* Scoped styles specific to ObjectsTitle */
</style>
