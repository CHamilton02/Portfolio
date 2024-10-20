<template>
  <div class="experience">
    <h2 class="header">My Experience</h2>
    <div class="experience__card-container">
      <ExperienceCard
        v-for="experience in experienceStore.experiences"
        :date="experience.date"
        :website="experience.website"
        :code="experience.code"
        :title="experience.title"
        :organization="experience.organization"
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
.experience {
  padding-top: 2.5rem;
  margin-bottom: 10rem;

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
  }
}

@media only screen and (max-width: 56.25rem) {
  .experience {
    padding-top: 5rem;
    &__title {
      font-size: 2rem;
    }
  }
}
</style>
