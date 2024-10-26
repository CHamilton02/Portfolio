<template>
  <div class="card-container">
    <img :src="images[`../assets/experienceImages/${image}`]" class="image" />
    <h2 class="experience-title">
      {{ title }},
      <span class="experience-card__details__title__company">
        {{ organization ? organization : "Personal Project" }}</span
      >
    </h2>
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
    <div class="link-button_container">
      <button
        class="link-button"
        :class="active ? '' : 'inactive'"
        @click="toggleModal"
      >
        Learn More
      </button>
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

.experience-title {
  font-size: 1.5rem;
  margin: 0;
  height: 4rem;
}

.experience-mini-description {
  font-size: 1rem;
  font-weight: normal;
  height: 4rem;
  margin: 0;
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
  height: 6rem;
}

.skill {
  background-color: #ff6f61;
  font-family: "Inter Tight", Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 1rem;
  height: 2rem;
}

.link-button_container {
  text-align: center;
  margin-top: 1rem;
}

.inactive:hover {
  cursor: default;
  background-color: #23153c;
}
</style>
