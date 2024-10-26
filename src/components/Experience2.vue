<template>
  <div class="experience2-container">
    <h2 class="header">My Experience</h2>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(experience, index) in experiences" class="glide__slide">
            <ExperienceCard2
              :date="experience.date"
              :website="experience.website"
              :code="experience.code"
              :title="experience.title"
              :organization="experience.organization"
              :description="experience.description"
              :skills="experience.skills"
              :image="experience.image"
              :active="currentActiveCard === index"
            />
          </li>
        </ul>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Glide from "@glidejs/glide";
import ExperienceCard2 from "./ExperienceCard2.vue";
import { ref, onMounted } from "vue";

const currentActiveCard = ref<number>(0);

const experiences = [
  {
    date: "SEPT. 2024 - PRESENT",
    title: "Developer Co-Op",
    organization: "RBC",
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
      "A personal portfolio to showcase my software development skills.",
    code: "https://github.com/CHamilton02/Portfolio",
    skills: [
      "TypeScript",
      "Vue",
      "SCSS",
      "Glide",
      "Axios",
      "HTML",
      "Pinia",
      "Typeit",
      "Vanta",
    ],
    image: "Portfolio.png",
  },
  {
    date: "JUL. 2024",
    title: "SportIQs",
    description: "A Sports trivia website.",
    skills: ["CSS", "HTML", "JavaScript", "React", "Vite"],
    website: "https://chamilton02.github.io/SportIQs/",
    code: "https://github.com/CHamilton02/SportIQs",
    image: "SportIQs.png",
  },
  {
    date: "MAY 2024 - JUN. 2024",
    title: "Djibouti",
    description: "A country version of Wordle!",
    skills: ["CSS", "HTML", "JavaScript", "Jasmine"],
    website: "https://chamilton02.github.io/Djibouti/",
    code: "https://github.com/CHamilton02/Djibouti",
    image: "Djibouti.png",
  },
  {
    date: "MAY 2024",
    title: "Password Manager",
    description: "Password Manager application built in Python",
    skills: ["Base64.py", "Cryptography.py", "Python", "Tkinter.py"],
    code: "https://github.com/CHamilton02/Password-Manager",
    image: "PasswordManager.png",
  },
  {
    date: "MAR. 2024 - MAY 2024",
    title: "Front-End Developer",
    organization: "Stone Row Farm Inc.",
    description: "My first real-world front-end experience",
    skills: ["Bootstrap", "CSS", "HTML", "JavaScript"],
    image: "StoneRowFarm.png",
  },
];

onMounted(() => {
  const glide = new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 3,
  }).mount();

  glide.on("run.after", (move) => {
    if (move.direction === "<") {
      if (currentActiveCard.value - 1 < 0) {
        currentActiveCard.value = experiences.length - 1;
      } else {
        currentActiveCard.value -= 1;
      }
    } else {
      if (currentActiveCard.value + 1 >= experiences.length) {
        currentActiveCard.value = 0;
      } else {
        currentActiveCard.value += 1;
      }
    }
  });
});
</script>

<style lang="scss">
.experience2-container {
  margin-top: 0;
  margin-bottom: 10rem;
}

.glide__slides {
  height: 510px;
  display: flex;
  align-items: end;
}

.glide__slide {
  text-align: center;
  height: 500px;
  color: #fff;
  background-color: #2e1a4d;
  font-size: 1em;
  font-weight: 900;
  border-radius: 1rem;
  opacity: 50%;
}

.glide__slide[class*="active"] {
  transition: 0.5s;
  opacity: 100%;
}

.glide__slide[class*="active"]:hover {
  background-color: #371f5d;
  transform: translate(0, -10px);
}

.glide__arrow {
  text-align: center;
  height: 2rem;
  width: 2rem;
  padding: 0;
}

.glide__arrow:hover {
  border-color: #ff6f61;
}
</style>
