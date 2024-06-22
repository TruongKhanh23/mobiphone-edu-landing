<template>
  <AntModal :handleOk="handleOk" :handleCancel="handleCancel">
    <img
      :src="getItemImage(itemNumber)"
      alt="long image"
      class="w-full h-auto"
    />
  </AntModal>
</template>

<script>
import AntModal from "@/components/reusable/AntModal.vue";

import inforgraphic1 from "@/assets/inforgraphic-1.jpg";
import inforgraphic2 from "@/assets/inforgraphic-2.jpg";
import inforgraphic3 from "@/assets/inforgraphic-1.jpg";

export default {
  name: "ModalContent",
  components: {
    AntModal,
  },
  props: {
    handleOk: Function,
    handleCancel: Function,
    itemNumber: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    function getItemImage(item) {
      console.log("itemNumber", item);
      switch (item) {
        case 1:
          return inforgraphic1;
        case 2:
          return inforgraphic2;
        case 3:
          return inforgraphic3;
      }
      return item;
    }
    return {
      inforgraphic1,
      getItemImage,
    };
  },
};
</script>

<style scoped>
/* Các styles tùy chỉnh cho modal có thể được thêm vào đây */
</style>
