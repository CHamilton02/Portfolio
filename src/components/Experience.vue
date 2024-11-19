<template>
  <div class="experience-container">
    <h2 class="header">My Experience</h2>
    <div class="experience-card-container">
      <ExperienceCard
        v-for="i in experienceStore.experiences.length"
        v-show="i - 1 < numberOfViewableExperiences"
        :key="i"
        :index="i - 1"
      />
    </div>
    <div
      v-if="numberOfViewableExperiences < experienceStore.experiences.length"
      class="toggle-view"
    >
      <button
        id="view-more-button"
        class="toggle-view__button"
        @click="toggleNumberOfViewableExperiences"
      >
        <img src="../assets/Down Arrow Icon.png" class="icon" />
        View More
      </button>
    </div>
    <div v-else class="toggle-view">
      <button
        id="view-less-button"
        class="toggle-view__button"
        @click="toggleNumberOfViewableExperiences"
      >
        <img src="../assets/Up Arrow Icon.png" class="icon" />
        View Less
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
import { useExperienceStore } from "../stores/experience";
import { ref } from "vue";

const experienceStore = useExperienceStore();

const numberOfViewableExperiences = ref(4);

function toggleNumberOfViewableExperiences() {
  if (
    numberOfViewableExperiences.value <
    experienceStore.experiences.length - 1
  ) {
    numberOfViewableExperiences.value += 2;
  } else if (
    numberOfViewableExperiences.value < experienceStore.experiences.length
  ) {
    numberOfViewableExperiences.value += 1;
  } else {
    numberOfViewableExperiences.value = 4;
  }
}
</script>

<style scoped lang="scss">
.experience-container {
  padding-top: 2.5rem;
  margin-bottom: 20rem;
}

.experience-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media only screen and (max-width: 56.25rem) {
  .experience-container {
    margin-bottom: 10rem;
  }

  .experience-card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 40rem) {
  .experience-card-container {
    grid-template-columns: 1fr;
  }
}
</style>
