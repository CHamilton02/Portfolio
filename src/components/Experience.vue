<template>
  <div class="experience-card-container">
    <ExperienceCard v-for="experience in experiences" :experience />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ExperienceCard from "./ExperienceCard.vue";

const experiences = ref([
  {
    date: "SEPT. 2024 - PRESENT",
    title: "Developer Co-Op",
    organization: "RBC",
    description:
      "Build and maintain critical components used to construct front-end components for various artificial intelligence and machine learning projects. Work closely in an agile environment with a cross-functional team consisting of designers, developers, and product managers to ensure web accessibility.",
    skills: ["JavaScript", "TypeScript", "Vue", "Pinia"],
  },
  {
    date: "OCT. 2024 - PRESENT",
    title: "Portfolio",
    description:
      "Created to showcase my various talents in the Software Development field. Developed using TypeScript and Vue, along with various JavaScript animation libraries.",
    skills: ["TypeScript", "Vue", "Typeit", "Vanta"],
  },
  {
    date: "JUL. 2024",
    title: "SportIQs",
    description: "A Sports trivia website (made with React)",
    skills: ["JavaScript", "React"],
  },
  {
    date: "MAY 2024 - JUN. 2024",
    title: "Djibouti",
    description:
      "Produced an interactive web game using HTML, CSS, and JavaScript, inspired by the popular online game Wordle, with a unique country theme.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    date: "MAR. 2024 - MAY 2024",
    title: "Front-End Developer",
    organization: "Stone Row Farm Inc.",
    description:
      "Developed various business web pages by creating and maintaining code using HTML/CSS, Bootstrap, and JavaScript. Communicated with company owners to gather feedback and refine interface designs, proposing innovative solutions to meet evolving requirements.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
]);
</script>

<style lang="scss">
.experience-card-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  gap: 2rem;
  align-items: center;
  padding-bottom: 1rem;
}
</style>
