import { ref } from "vue";
import { defineStore } from "pinia";
import { Experience } from "../types/ExperienceTypes";
import ExperienceService from "../services/experience.service";

export const useExperienceStore = defineStore("experience", () => {
  const experiences = ref<Experience[]>();
  const experiences2 = ref();

  async function load() {
    experiences.value = await ExperienceService.getExperiences();
    experiences2.value = await ExperienceService.getExperiences2();
  }

  load();

  return {
    experiences,
    experiences2,
  };
});
