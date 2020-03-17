<template>
  <div class="page-container">
    <h1>setUp</h1>
  </div>
</template>
<script>
import {} from "@vue/composition-api";
export default {
  setup() {
    console.log("setup");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  }
}
</script>
