import type { Experience } from "../types/ExperienceTypes";
import axios from "axios";

export class ExperienceService {
  // Currently making mock API calls but will make calls to backend once created
  async getExperiences(): Promise<Experience[]> {
    return (await axios.get("data/experiences.json")).data;
  }
}

export default new ExperienceService();
