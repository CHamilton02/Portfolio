<template>
  <div
    class="card-container"
    @click="toggleModal"
    tabindex="0"
    @keydown.enter="toggleModal"
  >
    <div class="image-container">
      <img
        :src="
          images[
            `../assets/experienceImages/${(organization
              ? organization
              : title
            )?.replace('.', '')}.png`
          ] as string
        "
        class="image"
      />
    </div>

    <div class="experience-title-container">
      <div class="experience-header">
        <h2 class="experience-title">
          {{ title }}
        </h2>
        <div class="link-container">
          <a v-show="website" :href="website" target="_blank" @click.stop
            ><img class="icon" src="../assets/Link Icon.png"
          /></a>
          <a v-show="code" :href="code" target="_blank" @click.stop>
            <img class="icon" src="../assets/Github Logo.png" />
          </a>
        </div>
      </div>

      <h2 class="company">
        {{ organization ? organization : "Personal Project" }}
      </h2>
    </div>
    <p class="experience-date">{{ date }}</p>
    <p class="experience-mini-description">
      {{ miniDescription }}
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
      <button v-if="skills.length > 5" class="skill" tabindex="-1">
        And More!
      </button>
      <button v-else class="skill" v-for="skill in skills" tabindex="-1">
        {{ skill }}
      </button>
    </div>

    <teleport to="body">
      <ExperienceModal
        v-show="showModal"
        :title="title"
        :organization="organization"
        :date="date"
        :skills="skills"
        :description="description"
        :website="website"
        :code="code"
        @close="toggleModal"
      />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ExperienceModal from "./ExperienceModal.vue";

const images = import.meta.glob("../assets/experienceImages/*", {
  eager: true,
  query: "?url",
  import: "default",
});

defineProps({
  date: String,
  website: String,
  code: String,
  title: String,
  organization: String,
  miniDescription: String,
  description: Array,
  skills: { type: Array, required: true },
});

const showModal = ref<boolean>(false);

function toggleModal() {
  const appContainer = document.getElementById("app-container");
  if (appContainer) {
    if (showModal.value) {
      document.body.style.overflow = "auto";
      appContainer.inert = false;
    } else {
      document.body.style.overflow = "hidden";
      appContainer.inert = true;
    }
  }

  showModal.value = !showModal.value;
}
</script>

<style lang="scss">
.card-container {
  text-align: start;
  padding: 1rem;
  cursor: pointer;
}

.card-container:hover .image,
.card-container:focus .image {
  transform: scale(0.85);
}

.experience-title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.25rem;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
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
}

.experience-mini-description {
  margin: 0 0 1rem 0;
}

.experience-date {
  font-size: 0.75rem;
  color: #ff6f61;
  margin: 0 0 0.25rem 0;
}

.image-container {
  width: 100%;
  aspect-ratio: 2/1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 125%;
  aspect-ratio: 2/1;
  object-fit: cover;
  transition: transform 0.5s ease;
  z-index: -1;
}

.skills-container {
  display: flex;
  gap: 0.5rem;
  flex-flow: wrap;
}

.skill {
  background-color: #ff6f61;
  font-family: "Inter Tight", Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 0.3rem 0.75rem 0.3rem 0.75rem;
  border-radius: 1rem;
  height: 2rem;
  cursor: pointer;
}

.link-container {
  display: flex;
  gap: 0.5rem;
}

@media only screen and (max-width: 500px) {
  .card-container {
    padding: 1.5rem;
  }
}
</style>
