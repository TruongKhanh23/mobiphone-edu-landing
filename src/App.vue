<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- <Navigator /> -->
    <div
      class="max-w-3xl mx-auto my-6 flex flex-col items-center justify-center text-center"
    >
      <div>
        <img :src="logoMobiEdu" class="w-36 mb-4" alt="Mobi Edu Logo" />
      </div>
      <div>
        <p>Welcome to Mobiphone Edu Landing Page</p>
      </div>
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logoMobiEdu from "../../assets/logo-mobi-edu.png";

//import Navigator from "./components/shared/Navigator.vue";

export default defineComponent({
  // components: {
  //   Navigator,
  // },
  setup() {
    return { logoMobiEdu };
  },
});
</script>
