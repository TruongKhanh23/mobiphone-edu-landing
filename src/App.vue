<template>
  <router-view v-if="!isMobile" />
  <MobileNotSupport v-else />
</template>

<script lang="ts">
import { isMobile } from "mobile-device-detect";
import MobileNotSupport from "@/views/MobileNotSupport.vue";

export default {
  components: {
    MobileNotSupport,
  },
  setup() {
    return {
      isMobile,
    };
  },
};
</script>
