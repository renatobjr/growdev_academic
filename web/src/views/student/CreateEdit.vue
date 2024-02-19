<script setup>
import router from "@/router";
import { ref, onBeforeMount } from "vue";

let isEdit = ref(false);

onBeforeMount(() => {
  if (router.currentRoute.value.name === "edit") {
    isEdit.value = true;
  }
});

</script>

<template>
  <gd-form-student :isEdit="isEdit"/>
</template>
