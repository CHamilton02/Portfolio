<template>
  <nav>
      <h2 v-for="section in sections" class="section">{{ section }}</h2>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sections = ref(["About", "Experience", "Contact Me"]);
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 8rem;
  width: 100vw;
  background-color: #413429;
}
.name {
  color: #FFE2D6;
}
.section {
  color: #896d55;
  transition: color 0.25s;
}
.section:hover {
  color: #FCBD9D;
  cursor: pointer;
}
</style>
