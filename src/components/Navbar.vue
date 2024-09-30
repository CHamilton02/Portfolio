<template>
  <nav>
    <h1 class="name">Camdyn Hamilton</h1>
    <div class="sections">
      <button v-for="section in sections" class="section">{{ section }}</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import RightIndex from "../assets/index-pointing-right.png";
import { ref } from "vue";

const sections = ref(["Home", "About", "Projects", "Contact Me"]);
const japaneseName = ref(false);
</script>

<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  color: #FFE2D6;
}
.sections {
  display: flex;
  justify-content: center;
}
.section {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  background-color: #FFE2D6;
  color: #514033;
  border: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 1rem;
  transition: background-color 0.25s;
  margin-right: 2rem;
}
.section:hover {
  background-color: #FCBD9D;
  cursor: pointer;
}
</style>
