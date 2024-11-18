<template>
  <div class="experience-modal-container">
    <div
      class="experience-modal-container__background"
      @click="emit('close')"
    ></div>
    <div id="experience-modal" class="experience-modal" tabindex="0">
      <div class="close-button-container">
        <button class="close-button" @click="emit('close')">
          <img :src="CloseIcon" />
        </button>
      </div>
      <img
        :src="
          images[
            `../assets/experienceImages/${(experience.organization
              ? experience.organization
              : experience.title
            )?.replace('.', '')} Modal Image.png`
          ] as string
        "
        class="experience-modal__image"
      />
      <div class="experience-modal__title-container">
        <h2 class="experience-modal__title">
          {{ experience.title + ", " }}
          <span class="experience-modal__company">
            {{
              experience.organization
                ? experience.organization
                : "Personal Project"
            }}
          </span>
        </h2>
      </div>
      <p class="experience-date">{{ experience.date }}</p>
      <p class="description" v-html="experience.description"></p>
      <h3 class="section-title">Skills</h3>
      <div class="experience-modal__skills-container">
        <button class="skill" v-for="skill in experience.skills" tabindex="-1">
          {{ skill }}
        </button>
      </div>
      <div class="experience-modal__link-container">
        <a
          v-show="experience.website"
          :href="experience.website"
          target="_blank"
          class="link-button"
        >
          View Website
        </a>
        <a
          v-show="experience.code"
          :href="experience.code"
          target="_blank"
          class="link-button"
        >
          View Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "../assets/Close Icon.svg";
import { useExperienceStore } from "../stores/experience";
import { Experience } from "../types/ExperienceTypes";

const images = import.meta.glob("../assets/experienceImages/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const props = defineProps({
  index: { type: Number, required: true },
});

const experienceStore = useExperienceStore();
let experience: Experience;
if (experienceStore.experiences) {
  experience = experienceStore.experiences[props.index];
}

const emit = defineEmits(["close"]);
</script>

<style lang="scss">
.experience-modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.experience-modal {
  width: 75%;
  max-width: 40rem;
  height: 75%;
  max-height: 35rem;
  border-radius: 1rem;
  padding: 3rem;
  background-color: #23153c;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;

  &__image {
    height: 60%;
    width: 100%;
    object-fit: cover;
  }

  &__title-container {
    margin-bottom: 0.25rem;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 0.15rem;
  }

  &__company {
    color: #ff6f61;
    font-weight: bold;
  }

  &__skills-container {
    display: flex;
    gap: 0.5rem;
    flex-flow: wrap;
  }

  &__link-container {
    display: flex;
    gap: 0.5rem;
    padding-top: 1rem;
    justify-content: center;
  }
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

.section-title {
  margin-bottom: 0.5rem;
}

.description {
  margin: 0;
}

.close-button-container {
  position: sticky;
  top: 0rem;
  right: 0rem;
  z-index: 20;
}

.close-button {
  position: absolute;
  top: -2rem;
  right: -2rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

strong {
  color: #ff6f61;
}

@media only screen and (max-width: 56.25rem) {
  .experience-modal {
    padding: 2rem;
  }
  .close-button {
    top: -1.25rem;
    right: -1.25rem;
  }
}
</style>
