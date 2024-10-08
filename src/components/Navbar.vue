<template>
  <nav>
    <h2 v-for="(section, index) in sections" class="section" :class="{ 'active-section': activeSection === index }">{{
      section }}</h2>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sections = ref(["About", "Experience", "Contact Me"]);
const activeSection = ref(0);
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 8rem;
  width: 100vw;
}

.name {
  color: #FFE2D6;
}

.section {
  color: white;
  transition: color 0.25s;
}

.section:hover {
  color: #FCBD9D;
  cursor: pointer;
}

.active-section {
  color: #ff3f81;
}
</style>
