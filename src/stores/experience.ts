import { ref } from "vue";
import { defineStore } from "pinia";
import { Experience } from "../types/Experience";
import ExperienceService from "../services/experience.service";

export const useExperienceStore = defineStore("experience", () => {
  const experiences = ref<Experience[]>();

  async function load() {
    experiences.value = await ExperienceService.getExperiences();
  }

  load();

  return {
    experiences,
  };
});
