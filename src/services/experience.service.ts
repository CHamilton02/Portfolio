import type { Experience } from "../types/Experience";
import axios from "axios";

export class ExperienceService {
  async getExperiences(): Promise<Experience[]> {
    return (await axios.get("data/experiences.json")).data;
  }
}

export default new ExperienceService();
