<template>
  <div class="experience-modal-container">
    <div class="experience-modal__background" @click="emit('close')"></div>
    <div id="experience-modal" class="experience-modal" tabindex="0">
      <div class="close-button-container">
        <button class="close-button" @click="emit('close')">
          <img :src="CloseIcon" />
        </button>
      </div>
      <img
        :src="
          images[
            `../assets/experienceImages/${(organization
              ? organization
              : title
            )?.replace('.', '')} Modal Image.png`
          ]
        "
        class="experience-modal__image"
      />
      <div class="experience-modal__title-container">
        <h2 class="experience-modal__title">
          {{ title + ", " }}
          <span class="experience-modal__company">
            {{ organization ? organization : "Personal Project" }}
          </span>
        </h2>
      </div>
      <p class="experience-date">{{ date }}</p>
      <h3 class="section-title">Skills</h3>
      <div class="experience-modal__skills-container">
        <button class="skill" v-for="skill in skills" tabindex="-1">
          {{ skill }}
        </button>
      </div>
      <h3 class="section-title">Responsibilities</h3>
      <ul class="description-list" v-for="desc in description">
        <li v-html="desc"></li>
      </ul>
      <div class="experience-modal__link-container">
        <a v-show="website" :href="website" target="_blank" class="link-button">
          View Website
        </a>
        <a v-show="code" :href="code" target="_blank" class="link-button">
          View Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CloseIcon from "../assets/Close Icon.svg";

const images = import.meta.glob("../assets/experienceImages/*", {
  eager: true,
  as: "url",
});

defineProps({
  title: String,
  organization: String,
  date: String,
  description: Array,
  skills: { type: Array, required: true },
  website: String,
  code: String,
});

const emit = defineEmits(["close"]);

onMounted(() => {
  const modal = document.querySelector("div");
  modal?.focus();
  console.log(document.activeElement);
});
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

  &__background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

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

.description-list {
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
