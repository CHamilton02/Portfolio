<template>
  <div class="card-container">
    <img :src="images[`../assets/experienceImages/${image}`]" class="image" />
    <div class="experience-title-container">
      <h2 class="experience-title">
        {{ title }},
        <span class="experience-card__details__title__company">
          {{ organization ? organization : "Personal Project" }}</span
        >
      </h2>
    </div>
    <p class="experience-date">{{ date }}</p>
    <p class="experience-mini-description">
      {{ description }}
    </p>
    <div class="skills_container">
      <button
        v-if="skills.length > 5"
        class="skill"
        v-for="skill in skills.slice(0, 5)"
        tabindex="-1"
      >
        {{ skill }}
      </button>
      <button v-if="skills.length > 5" class="skill">And More!</button>
      <button v-else class="skill" v-for="skill in skills" tabindex="-1">
        {{ skill }}
      </button>
    </div>
    <div class="link-container">
      <a v-show="website" :href="website" target="_blank" class="link-button">
        View Website
      </a>
      <a v-show="code" :href="code" target="_blank" class="link-button">
        View Code
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const images = import.meta.glob("../assets/experienceImages/*", {
  eager: true,
  as: "url",
});

const props = defineProps({
  date: String,
  website: String,
  code: String,
  title: String,
  organization: String,
  description: String,
  skills: { type: Array, required: true },
  image: String,
  active: Boolean,
});

// console.log(props.title + " " + props.date);

const showModal = ref<boolean>(false);

function toggleModal() {
  if (props.active) {
    showModal.value = true;
  }
}
</script>

<style lang="scss">
.card-container {
  text-align: start;
  padding: 1rem;
  height: 500px;
}

.experience-title-container {
  height: 4rem;
  display: flex;
  align-items: center;
}

.experience-title {
  font-size: 1.25rem;
  margin: 0.25rem 0 0 0;
}

.experience-date,
.experience-mini-description {
  font-size: 1rem;
  font-weight: normal;
  height: 4rem;
  margin: 0;
}

.experience-date {
  font-size: 0.75rem;
  color: #ff6f61;
  height: auto;
  margin-bottom: 0.15rem;
}

.image {
  height: 10rem;
  width: 100%;
  object-fit: cover;
}

.skills_container {
  display: flex;
  gap: 0.5rem;
  flex-flow: wrap;
  height: 5rem;
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

.link-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.inactive:hover {
  cursor: default;
  background-color: #23153c;
}
</style>
