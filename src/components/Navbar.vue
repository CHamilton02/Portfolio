<template>
  <nav>
    <div class="name-and-icon">
      <img :src="RightIndex" class="icon" />
      <h1 class="name">Camdyn Hamilton</h1>
    </div>
    <div class="sections">
      <h2 v-for="section in sections" class="section">{{ section }}</h2>
    </div>
  </nav>
</template>

<script setup lang="ts">
import RightIndex from "../assets/index-pointing-right.png";
import { ref } from "vue";

const sections = ref(["Home", "About", "Projects", "Contact Me"]);
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #685343;
}
.name-and-icon {
  display: flex;
  margin-left: 0.5rem;
  align-items: center;
}
.icon {
  width: auto;
  height: 2rem;
  padding-right: 0.5rem;
}
.name {
}
.sections {
  display: flex;
  margin-right: 0.5rem;
}
.section {
  margin-left: 1rem;
}
.section:hover {
  color: #FFE2D6;
  cursor: pointer;
}
</style>