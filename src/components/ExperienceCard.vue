<template>
  <div class="experience-card">
    <div class="experience-card__dates-and-links">
      <p class="experience-card__dates-and-links__dates">
        {{ date }}
      </p>
      <div v-show="!mobileView" class="experience-card__dates-and-links__links">
        <a v-show="website" :href="website" target="_blank" class="link-button">
          View Website
        </a>
        <a v-show="code" :href="code" target="_blank" class="link-button">
          View Code
        </a>
      </div>
    </div>
    <div class="experience-card__details">
      <h2 class="experience-card__details__title">
        {{ title }},
        <span class="experience-card__details__title__company">{{
          organization ? organization : "Personal Project"
        }}</span>
      </h2>
      <p class="experience-card__details__description">
        {{ description }}
      </p>
      <div class="experience-card__details__skills-container">
        <button
          class="experience-card__details__skills-container__item"
          v-for="skill in skills"
          tabindex="-1"
        >
          {{ skill }}
        </button>
      </div>
    </div>
    <div
      v-show="mobileView"
      class="experience-card__dates-and-links__links-mobile"
    >
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

defineProps({
  date: String,
  website: String,
  code: String,
  title: String,
  organization: String,
  description: String,
  skills: Array,
});

const mobileView = ref(window.innerWidth <= 640);

window.addEventListener("resize", () => {
  if (window.innerWidth <= 640) {
    mobileView.value = true;
  } else {
    mobileView.value = false;
  }
});
</script>

<style lang="scss">
.experience-card {
  display: flex;
  min-height: 9rem;
  align-items: stretch;

  &__dates-and-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    &__dates {
      margin: 0;
      font-size: 0.8rem;
      min-width: 9rem;
      margin-right: 2rem;
      color: #ff6f61;
    }
    &__links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
        color: #ff6f61;
      }
    }

    &__skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      &__item {
        background-color: #ff6f61;
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
  }
  .experience-card__dates-and-links {
    flex-direction: row;
    align-items: end;
    margin-bottom: 0.5rem;

    &__links-mobile {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      margin-top: 1rem;
    }
  }

  .link-button {
    font-size: 0.75rem;
  }
}

@media only screen and (max-width: 25rem) {
  .link-button {
    font-size: 0.5rem;
  }
}
</style>
