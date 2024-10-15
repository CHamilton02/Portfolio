<template>
  <div class="experience-card">
    <div class="experience-card__dates">{{ experience.date }}</div>
    <div class="experience-card__details">
      <h2 class="experience-card__details__title">
        {{ experience.title }},
        <span class="experience-card__details__title__company">{{
          experience.organization ? experience.organization : "Personal Project"
        }}</span>
      </h2>
      <p class="experience-card__details__description">
        {{ experience.description }}
      </p>
      <div class="experience-card__details__skills-container">
        <button
          class="experience-card__details__skills-container__item"
          v-for="skill in experience.skills"
        >
          {{ skill }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExperienceDetails } from "../types/experience";

defineProps({
  experience: {
    type: Object as () => ExperienceDetails,
    required: true,
  },
});
</script>

<style lang="scss">
.experience-card {
  display: flex;
  padding: 1rem;

  &__dates {
    font-size: 0.8rem;
    min-width: 9rem;
    margin-right: 2rem;
    color: #ff3f81;
  }

  &__details {
    &__title {
      margin: 0;
      padding: 0;
      font-size: 1.25rem;

      &__company {
        color: #ff3f81;
      }
    }

    &__description {
      font-size: 0.9rem;
    }

    &__skills-container {
      display: flex;
      gap: 1rem;

      &__item {
        background-color: #ff3f81;
        font-family: "Inter Tight", Arial, Helvetica, sans-serif;
        border: none;
        color: white;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 1rem;
      }
    }
  }
}
</style>
