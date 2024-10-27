<template>
  <div class="experience2-container">
    <h2 class="header">My Experience</h2>
    <carousel v-bind="config">
      <slide v-for="experience in experiences" :key="experience.title">
        <ExperienceCard2
          :date="experience.date"
          :website="experience.website"
          :code="experience.code"
          :title="experience.title"
          :organization="experience.organization"
          :description="experience.description"
          :skills="experience.skills"
          :image="experience.image"
        />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ExperienceCard2 from "./ExperienceCard2.vue";

const experiences = [
  {
    date: "SEPT. 2024 - PRESENT",
    title: "Developer Co-Op",
    organization: "Royal Bank of Canada",
    description:
      "My first co-op where I gained lots of web development experience and skills.",
    skills: [
      "TypeScript",
      "Vue",
      "SCSS",
      "FastAPI",
      "Node.js",
      "Axios",
      "Express.js",
      "HTML",
      "Pinia",
    ],
    image: "RBC.jpg",
  },
  {
    date: "SEP. 2024 - OCT. 2024",
    title: "Portfolio",
    description:
      "A personal portfolio showcasing my software development abilities, with a focus on interactive features.",
    code: "https://github.com/CHamilton02/Portfolio",
    skills: [
      "TypeScript",
      "Vue",
      "SCSS",
      "Vanta",
      "Axios",
      "HTML",
      "Pinia",
      "Typeit",
    ],
    image: "Portfolio.png",
  },
  {
    date: "JUL. 2024",
    title: "SportIQs",
    description:
      "A dynamic sports trivia website developed to offer an engaging experience with interactive quizzes.",
    skills: ["CSS", "HTML", "JavaScript", "React", "Vite"],
    website: "https://chamilton02.github.io/SportIQs/",
    code: "https://github.com/CHamilton02/SportIQs",
    image: "SportIQs.png",
  },
  {
    date: "MAY 2024 - JUN. 2024",
    title: "Djibouti",
    description:
      "An educational game inspired by Wordle, designed to help players learn about countries through daily puzzles.",
    skills: ["CSS", "HTML", "JavaScript", "Jasmine"],
    website: "https://chamilton02.github.io/Djibouti/",
    code: "https://github.com/CHamilton02/Djibouti",
    image: "Djibouti.png",
  },
  {
    date: "MAY 2024",
    title: "Password Manager",
    description:
      "A secure password manager application built in Python to store and encrypt user credentials.",
    skills: ["Base64.py", "Cryptography.py", "Python", "Tkinter.py"],
    code: "https://github.com/CHamilton02/Password-Manager",
    image: "PasswordManager.png",
  },
  {
    date: "MAR. 2024 - MAY 2024",
    title: "Front-End Developer",
    organization: "Stone Row Farm Inc.",
    description:
      "Worked with business stakeholders to build and maintain web pages, applying design feedback to improve usability.",
    skills: ["Bootstrap", "CSS", "HTML", "JavaScript"],
    image: "StoneRowFarm.png",
  },
];

const config = {
  breakpoints: {
    0: {
      itemsToShow: 1,
    },
    400: {
      itemsToShow: 1.5,
    },
    600: {
      itemsToShow: 2,
    },
    750: {
      itemsToShow: 2.5,
    },
    850: {
      itemsToShow: 3,
    },
  },
  wrapAround: true,
  transition: 500,
};
</script>

<style lang="scss">
.experience2-container {
  padding-top: 2.5rem;
  margin-bottom: 10rem;
}

.carousel__slide {
  padding: 5;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.carousel__prev {
  margin-left: 0;
}

.carousel__next {
  margin-right: 0;
}

.carousel__icon {
  fill: #ff6f61;
}
</style>
