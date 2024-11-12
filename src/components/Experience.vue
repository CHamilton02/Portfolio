<template>
  <div class="experience-container">
    <h2 class="header">My Experience</h2>
    <div class="experience-card-container">
      <ExperienceCard
        v-for="experience in experienceStore.experiences"
        :date="experience.date"
        :website="experience.website"
        :code="experience.code"
        :title="experience.title"
        :organization="experience.organization"
        :miniDescription="experience.miniDescription"
        :description="experience.description"
        :skills="experience.skills"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
import { useExperienceStore } from "../stores/experience";

const experienceStore = useExperienceStore();
</script>

<style lang="scss">
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
