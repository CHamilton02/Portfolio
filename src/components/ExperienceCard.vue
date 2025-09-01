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
            `../assets/experienceImages/${(experience.organization
              ? experience.organization
              : experience.title
            )}.jpg`
          ] as string
        "
        class="image"
      />
    </div>

    <div class="experience-title-container">
      <div class="experience-header">
        <h2 class="experience-title">
          {{ experience.title }}
        </h2>
        <div class="link-container">
          <a
            v-show="experience.website"
            :href="experience.website"
            target="_blank"
            @click.stop
            ><img class="icon" src="../assets/Link Icon.png"
          /></a>
          <a
            v-show="experience.code"
            :href="experience.code"
            target="_blank"
            @click.stop
          >
            <img class="icon" src="../assets/Github Logo.png" />
          </a>
        </div>
      </div>

      <h2 class="company">
        {{
          experience.organization ? experience.organization : 'Personal Project'
        }}
      </h2>
    </div>
    <p class="experience-date">{{ experience.date }}</p>
    <p class="experience-mini-description">
      {{ experience.miniDescription }}
    </p>
    <div class="skills-container">
      <button
        v-if="experience.skills.length > 5"
        class="skill"
        v-for="skill in experience.skills.slice(0, 5)"
        tabindex="-1"
      >
        {{ skill }}
      </button>
      <button v-if="experience.skills.length > 5" class="skill" tabindex="-1">
        And More!
      </button>
      <button
        v-else
        class="skill"
        v-for="skill in experience.skills"
        tabindex="-1"
      >
        {{ skill }}
      </button>
    </div>

    <teleport to="body">
      <Transition>
        <ExperienceModal
          v-show="showModal"
          :index="index"
          @close="toggleModal"
        />
      </Transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExperienceModal from './ExperienceModal.vue'
import { useExperienceStore } from '../stores/experience'
import { Experience } from '../types/ExperienceTypes'

const props = defineProps({
  index: { type: Number, required: true },
})

const experienceStore = useExperienceStore()
let experience: Experience
if (experienceStore.experiences) {
  experience = experienceStore.experiences[props.index]
}

const images = import.meta.glob('../assets/experienceImages/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const showModal = ref<boolean>(false)

function toggleModal() {
  const appContainer = document.getElementById('app-container')
  if (appContainer) {
    if (showModal.value) {
      document.body.style.overflow = 'auto'
      appContainer.inert = false
    } else {
      document.body.style.overflow = 'hidden'
      appContainer.inert = true
    }
  }

  showModal.value = !showModal.value
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
  color: #3282b8;
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
  color: #3282b8;
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
  background-color: #3282b8;
  font-family: 'Inter Tight', Arial, Helvetica, sans-serif;
  border: none;
  color: #bbe1fa;
  padding: 0.3rem 0.75rem 0.3rem 0.75rem;
  border-radius: 1rem;
  height: 2rem;
  cursor: pointer;
}

.link-container {
  display: flex;
  gap: 0.5rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 40rem) {
  .card-container {
    padding: 0;
  }
}
</style>
