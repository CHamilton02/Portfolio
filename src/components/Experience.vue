<template>
  <div class="experience">
    <h2 class="experience__title">My Experience</h2>
    <div class="experience__card-container">
      <ExperienceCard v-for="experience in experiences" :experience />
    </div>
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
    description:
      "Developed a sports trivia game using React, featuring interactive quizzes across various sports categories. Utilized Vite for efficient builds and fast development cycles, with deployment on GitHub Pages for easy access. Implemented state management to ensure smooth user interactions and seamless quiz progress tracking.",
    skills: ["JavaScript", "React", "Vite"],
    website: "https://chamilton02.github.io/SportIQs/",
    code: "https://github.com/CHamilton02/SportIQs",
  },
  {
    date: "MAY 2024 - JUN. 2024",
    title: "Djibouti",
    description:
      "Created an interactive web-based game inspired by Wordle, where users guess country names. Leveraged JavaScript classes to manage data and user interactions. Utilized Jasmine for unit and integration testing, ensuring the game’s functionality worked as intended and provided an engaging experience.",
    skills: ["HTML", "CSS", "JavaScript", "Jasmine"],
    website: "https://chamilton02.github.io/Djibouti/",
    code: "https://github.com/CHamilton02/Djibouti",
  },
  {
    date: "MAY 2024",
    title: "Password Manager",
    description:
      "Built a secure password manager using Python, incorporating encryption techniques to protect user data. Applied cryptographic methods such as password-based key derivation and the Fernet encryption scheme for enhanced security. Designed a user-friendly interface with Tkinter, allowing for efficient password management, viewing, and generation.",
    skills: ["Python", "Base64.py", "Cryptography.py", "Tkinter.py"],
    code: "https://github.com/CHamilton02/Password-Manager",
  },
  {
    date: "MAR. 2024 - MAY 2024",
    title: "Front-End Developer",
    organization: "Stone Row Farm Inc.",
    description:
      "Developed and maintained business web pages using HTML, CSS, Bootstrap, and JavaScript to enhance the company’s online presence. Worked closely with the company owners to gather feedback, iterating on the interface to meet evolving needs. Proposed and implemented UI/UX improvements that aligned the design with business goals and enhanced the user experience.",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
]);
</script>

<style lang="scss">
.experience {
  &__title {
    font-size: 2.5rem;
    text-align: center;
  }

  &__card-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-bottom: 4rem;
    max-width: 60rem;
  }
}

@media only screen and (max-width: 56.25rem) {
  .experience {
    width: 100vw;
    margin-top: 10rem;
  }
}
</style>
