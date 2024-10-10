<template>
  <nav>
    <h2 v-for="section in sections"
      :class="{ 'active-section': activeSection === section, 'section': activeSection !== section }"
      @click="$emit(`toggle${section}`)">{{
        section }}</h2>
  </nav>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";

const props = defineProps({
  activeSection: String as PropType<"About" | "Experience" | "Contact">
})

console.log(props.activeSection)

const sections = ref(["About", "Experience", "Contact"]);
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.name {
  color: #FFE2D6;
}

.section {
  color: white;
  transition: color 0.25s;
}

.section:hover,
.active-section:hover {
  cursor: pointer;
}

.section:hover {
  color: #ff73a4;
}

.active-section {
  color: #ff3f81;
}
</style>
