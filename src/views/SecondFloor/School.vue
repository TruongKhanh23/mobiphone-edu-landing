<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <SchoolFeatureOne
      :open="isOpenSchoolFeatureOne"
      :handleOk="handleCloseSchoolFeatureOne"
      :handleCancel="handleCloseSchoolFeatureOne"
      class="z-20"
    />
    <div v-for="(item, index) in dataImage" :key="index">
      <img
        :src="item"
        alt="image"
        class="w-full h-auto cursor-pointer"
        @click="handleClick"
      />
    </div>
  </AntModal>
</template>

<script lang="ts">
import { ref } from "vue";
import AntModal from "@/components/reusable/AntModal.vue";
import SchoolFeatureOne from "@/views/ThirdFloor/School/SchoolFeatureOne.vue";

import schoolHighlightFeatures from "@/assets/image/school-hightlight-features.png";
import schoolOtherInfo from "@/assets/image/school-other-info.png";

export default {
  name: "School",
  components: {
    AntModal,
    SchoolFeatureOne,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
  },
  setup() {
    const isOpenSchoolFeatureOne = ref<boolean>(false);
    const dataImage = [schoolHighlightFeatures, schoolOtherInfo];

    const handleClick = () => {
      //console.log("click", e);
      openSchoolFeatureOne();
    };

    const handleCloseSchoolFeatureOne = () => {
      console.log("Ok clicked Close School Feature One");
      isOpenSchoolFeatureOne.value = false;
    };

    const openSchoolFeatureOne = () => {
      console.log("click open school feature one");
      isOpenSchoolFeatureOne.value = true;
    };

    return {
      isOpenSchoolFeatureOne,
      dataImage,
      openSchoolFeatureOne,
      handleClick,
      handleCloseSchoolFeatureOne,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
