import type { Experience } from "../types/ExperienceTypes";
import axios from "axios";

export class ExperienceService {
  async getExperiences(): Promise<Experience[]> {
    return (await axios.get("data/experiences.json")).data;
  }

  async getExperiences2(): Promise<Experience[]> {
    return (await axios.get("data/experienceCardData.json")).data;
  }
}

export default new ExperienceService();
