<template>
  <div class="relative w-full h-screen overflow-hidden font-robotoRegular bg-[#001724]">
    <LoadingModal :isOpen="isOpenLoadingModal" />
    <Department
      :open="isOpenDepartment"
      :handleOk="handleCloseDepartmentSecondFloor"
      :handleCancel="handleCloseDepartmentSecondFloor"
    />
    <School
      :open="isOpenSchool"
      :handleOk="handleCloseSchoolSecondFloor"
      :handleCancel="handleCloseSchoolSecondFloor"
    />
    <MobiEdu
      :open="isOpenMobiEdu"
      :handleOk="handleCloseMobiEduSecondFloor"
      :handleCancel="handleCloseMobiEduSecondFloor"
    />
    <Teacher
      :open="isOpenTeacher"
      :handleOk="handleCloseTeacherSecondFloor"
      :handleCancel="handleCloseTeacherSecondFloor"
    />
    <Student
      :open="isOpenStudent"
      :handleOk="handleCloseStudentSecondFloor"
      :handleCancel="handleCloseStudentSecondFloor"
    />
    <!-- Home Title -->
    <div
      class="absolute top-[5%] left-1/2 transform -translate-x-1/2 flex flex-col z-10 text-center font-robotoBold"
    >
      <div>
        <h1 class="text-3xl font-bold text-white !mb-0">
          Bộ giải pháp quản lí E-learning của mobiEdu
        </h1>
        <p class="text-white font-bold text-sm">
          <span>
            Quản lí chất lượng giáo dục và hỗ trợ mọi đối tượng trong quá trình
            dạy và học.
          </span>
        </p>
      </div>
    </div>
    <!-- Video background -->
    <VideoBackground />

    <!-- Content over the video -->
    <ObjectsTitle @clickButton="onClickButton" />

    <!-- Left Right Bar Icon -->
    <LeftRightBarIcon />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import LoadingModal from "@/components/LoadingModal.vue";
import School from "@/views/SecondFloor/School.vue";
import Department from "@/views/SecondFloor/Department.vue";
import MobiEdu from "@/views/SecondFloor/MobiEdu.vue";
import Teacher from "@/views/SecondFloor/Teacher.vue";
import Student from "@/views/SecondFloor/Student.vue";
import { handlePopup } from "@/composables/loadingModal/index.js";
import "@/assets/css/home.css";
import VideoBackground from "@/views/Home/VideoBackground.vue";
import LeftRightBarIcon from "@/views/Home/LeftRightBarIcon.vue";
import ObjectsTitle from "@/views/Home/ObjectsTitle.vue";

export default {
  name: "Home",
  components: {
    LoadingModal,
    School,
    MobiEdu,
    Department,
    Teacher,
    Student,
    VideoBackground,
    LeftRightBarIcon,
    ObjectsTitle,
  },
  setup() {
    const { isOpenLoadingModal } = handlePopup(1000);
    const isOpenSchool = ref<boolean>(false);
    const isOpenDepartment = ref<boolean>(false);
    const isOpenMobiEdu = ref<boolean>(false);
    const isOpenTeacher = ref<boolean>(false);
    const isOpenStudent = ref<boolean>(false); // Add Student state

    function onClickButton(value: string) {
      console.log("receive emit success: ", value);

      switch (value) {
        case "student":
          console.log("Handling click on Student button");
          isOpenStudent.value = true; // Handle Student button click
          break;
        case "department":
          console.log("Handling click on Department button");
          isOpenDepartment.value = true;
          break;
        case "school":
          console.log("Handling click on School button");
          isOpenSchool.value = true;
          break;
        case "teacher":
          console.log("Handling click on Teacher button");
          isOpenTeacher.value = true;
          break;
        case "mobiEdu":
          console.log("Handling click on MobiEdu button");
          isOpenMobiEdu.value = true;
          break;
        default:
          console.warn(`Unhandled button click with value: ${value}`);
      }
    }

    const handleCloseDepartmentSecondFloor = () => {
      console.log("Ok clicked");
      isOpenDepartment.value = false;
    };

    const handleCloseSchoolSecondFloor = () => {
      console.log("Ok clicked");
      isOpenSchool.value = false;
    };

    const handleCloseMobiEduSecondFloor = () => {
      console.log("handleCloseMobiEduSecondFloor");
      isOpenMobiEdu.value = false;
    };

    const handleCloseTeacherSecondFloor = () => {
      console.log("handleCloseTeacherSecondFloor");
      isOpenTeacher.value = false;
    };

    const handleCloseStudentSecondFloor = () => {
      // Add handler for Student
      console.log("handleCloseStudentSecondFloor");
      isOpenStudent.value = false;
    };

    return {
      isOpenLoadingModal,
      isOpenSchool,
      isOpenMobiEdu,
      isOpenDepartment,
      isOpenTeacher,
      isOpenStudent, // Add Student state to return
      onClickButton,
      handleCloseSchoolSecondFloor,
      handleCloseMobiEduSecondFloor,
      handleCloseDepartmentSecondFloor,
      handleCloseTeacherSecondFloor,
      handleCloseStudentSecondFloor, // Add handler to return
    };
  },
};
</script>

<style scoped>
/* Scoped styles specific to App */
</style>
