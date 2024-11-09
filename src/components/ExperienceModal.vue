<template>
  <div class="experience-modal-container">
    <div class="experience-modal">
      <button class="close-button" @click="emit('close')">
        <img :src="CloseIcon" />
      </button>
      <img
        :src="images[`../assets/experienceImages/${image}`]"
        class="experience-modal__image"
      />
      <div class="experience-modal__title-container">
        <h2 class="experience-modal__title">
          {{ title + ", " }}
          <span class="experience-modal__company">
            {{ organization ? organization : "Personal Project" }}
          </span>
        </h2>
      </div>
      <p class="experience-date">{{ date }}</p>
      <h3>Skills</h3>
      <div class="skills-container">
        <button class="skill" v-for="skill in skills" tabindex="-1">
          {{ skill }}
        </button>
      </div>
      <h3>Responsibilities</h3>
      <ul>
        <li>
          Contributed to the development of a machine-learning-powered advisor
          insights web application, using TypeScript, Vue.js, SCSS, and FastAPI
          to enhance functionality and user experience
        </li>
        <li>
          Developed 8 new full features, including a global search function and
          back-end functionality for favouriting advisor opportunities, directly
          supporting business intelligence and decision-making for advisors.
        </li>
        <li>
          Worked in an agile environment with a cross-functional team of
          designers, developers, and product managers to ensure high-quality and
          accessible web applications
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "../assets/Close Icon.svg";

const images = import.meta.glob("../assets/experienceImages/*", {
  eager: true,
  as: "url",
});

defineProps({
  title: String,
  image: String,
  organization: String,
  date: String,
  skills: { type: Array, required: true },
});

const emit = defineEmits(["close"]);
</script>

<style lang="scss">
.experience-modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.experience-modal {
  width: 75%;
  max-width: 40rem;
  height: 75%;
  border-radius: 1rem;
  padding: 3rem;
  background-color: #23153c;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &__image {
    height: 60%;
    width: 100%;
    object-fit: cover;
  }

  &__title-container {
    margin-bottom: 0.25rem;
  }

  &__title,
  &__company {
    font-size: 1.5rem;
  }

  &__company {
    color: #ff6f61;
    font-weight: bold;
  }
}

.skills-container {
  display: flex;
  gap: 0.5rem;
  flex-flow: wrap;
  min-height: 5rem;
}

.skill {
  background-color: #ff6f61;
  font-family: "Inter Tight", Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 0.3rem 0.75rem 0.3rem 0.75rem;
  border-radius: 1rem;
  height: 2rem;
}
.close-button {
  position: fixed;
  right: 1rem;
  top: 1rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>
