<template>
  <div class="experience-container">
    <h2 class="header">My Experience</h2>
    <div class="experience-card-container">
      <ExperienceCard
        v-if="experienceStore.experiences"
        v-for="i in experienceStore.experiences.length"
        v-show="i - 1 < numberOfViewableExperiences"
        :key="`${experienceStore.experiences[i - 1].title}-${
          experienceStore.experiences[i - 1].organization
        }`"
        :date="experienceStore.experiences[i - 1].date"
        :website="experienceStore.experiences[i - 1].website"
        :code="experienceStore.experiences[i - 1].code"
        :title="experienceStore.experiences[i - 1].title"
        :organization="experienceStore.experiences[i - 1].organization"
        :miniDescription="experienceStore.experiences[i - 1].miniDescription"
        :description="experienceStore.experiences[i - 1].description"
        :skills="experienceStore.experiences[i - 1].skills"
      />
    </div>
    <div
      v-if="numberOfViewableExperiences < experiencesLength"
      class="toggle-experiences"
    >
      <button
        id="view-more-button"
        class="toggle-experiences__button"
        @click="toggleNumberOfViewableExperiences"
      >
        <img src="../assets/Down Arrow Icon.png" class="icon" />
        View More
      </button>
    </div>
    <div v-else class="toggle-experiences">
      <button
        id="view-less-button"
        class="toggle-experiences__button"
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
import { computed, ref } from "vue";

const experienceStore = useExperienceStore();
const experiencesLength = computed(() => {
  if (experienceStore.experiences) {
    return experienceStore.experiences.length;
  }
  return 0;
});

const numberOfViewableExperiences = ref(4);

function toggleNumberOfViewableExperiences() {
  if (numberOfViewableExperiences.value < experiencesLength.value - 1) {
    numberOfViewableExperiences.value += 2;
  } else if (numberOfViewableExperiences.value < experiencesLength.value) {
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

.toggle-experiences {
  display: flex;
  justify-content: center;
  align-items: center;

  &__button {
    background: none;
    border: none;
    display: flex;
    color: #ff6f61;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
  }
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
