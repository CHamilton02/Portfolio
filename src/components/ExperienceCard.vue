<template>
  <div class="experience-card">
    <div class="experience-card__dates-and-links">
      <p class="experience-card__dates-and-links__dates">
        {{ experience.date }}
      </p>
      <a
        v-show="experience.website"
        :href="experience.website"
        class="link-button"
      >
        View Website
      </a>
      <a v-show="experience.code" :href="experience.code" class="link-button">
        View Code
      </a>
    </div>
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
  height: 9rem;
  padding: 1rem;
  align-items: stretch;

  &__dates-and-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    &__dates {
      margin: 0;
      font-size: 0.8rem;
      min-width: 9rem;
      margin-right: 2rem;
      color: #ff3f81;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      flex-wrap: wrap;
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

@media only screen and (max-width: 40rem) {
  .experience-card {
    display: block;
    height: auto;
    padding: 1rem;
  }
  .experience-card__dates-and-links {
    flex-direction: row;
    align-items: end;
    margin-bottom: 0.5rem;
  }

  .link-button {
    font-size: 0.5rem;
  }
}
</style>
