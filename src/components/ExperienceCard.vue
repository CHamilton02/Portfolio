<template>
  <div class="card-container" :class="{ active: active }" @click="toggleModal">
    <img :src="images[`../assets/experienceImages/${image}`]" class="image" />
    <div class="experience-title-container">
      <h2 class="experience-title">
        {{ title }}
      </h2>
      <h2 class="company">
        {{ organization ? organization : "Personal Project" }}
      </h2>
    </div>
    <p class="experience-date">{{ date }}</p>
    <p class="experience-mini-description">
      {{ description }}
    </p>
    <div class="skills-container">
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

    <teleport to="body">
      <ExperienceModal
        v-show="showModal"
        :title="title"
        :image="image"
        :organization="organization"
        :date="date"
        :skills="skills"
        @close="showModal = false"
      />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ExperienceModal from "./ExperienceModal.vue";

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
  image: { type: String, required: true },
  active: Boolean,
});

const showModal = ref<boolean>(false);

function toggleModal() {
  if (props.active) {
    showModal.value = !showModal.value;
  }
}
</script>

<style lang="scss">
.card-container {
  text-align: start;
  padding: 1rem;
  min-height: 500px;
}

.active {
  cursor: pointer;
}

.experience-title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.25rem;
}

.experience-title,
.company {
  font-size: 1.25rem;
  margin: 0.25rem 0 0 0;
}

.company {
  color: #ff6f61;
}

.experience-date,
.experience-mini-description {
  font-size: 1rem;
  font-weight: normal;
  min-height: 4rem;
  margin: 0 0 0.25rem 0;
}

.experience-date {
  font-size: 0.75rem;
  color: #ff6f61;
  min-height: auto;
}

.image {
  height: 10rem;
  width: 100%;
  object-fit: cover;
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

.link-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

@media only screen and (max-width: 500px) {
  .card-container {
    padding: 1.5rem;
  }
}
</style>
