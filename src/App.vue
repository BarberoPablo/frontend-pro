<template>
  <div class="flex min-h-screen">
    <Navbar />
    <div class="p-5 w-full max-h-screen">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<style scoped></style>
