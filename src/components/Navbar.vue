<template>
  <nav>
    <h1
      v-for="section in sections"
      class="section"
      @click="$emit(`toggle${section}`)"
      @keydown.enter="$emit(`toggle${section}`)"
      @keydown.space="$emit(`toggle${section}`)"
      tabindex="0"
    >
      {{ section }}
    </h1>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sections = ref<("Home" | "About" | "Experience" | "Contact")[]>([
  "Home",
  "About",
  "Experience",
  "Contact",
]);
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.name {
  color: #ffe2d6;
}

.section {
  color: white;
  transition: color 0.25s;
}

.section:hover {
  color: #ff6f61;
  cursor: pointer;
}
</style>
