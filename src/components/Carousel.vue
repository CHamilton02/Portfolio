<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="experience in experiences" class="glide__slide">
          <ExperienceCard2
            :date="experience.date"
            :website="experience.website"
            :code="experience.code"
            :title="experience.title"
            :organization="experience.organization"
            :description="experience.description"
            :skills="experience.skills"
          />
        </li>
      </ul>
    </div>

    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        prev
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        next
      </button>
    </div>

    <!-- <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
        <button class="glide__bullet" data-glide-dir="=4"></button>
        <button class="glide__bullet" data-glide-dir="=5"></button>
      </div> -->
  </div>
</template>

<script lang="ts">
import { PropType, defineProps } from "vue";
import { type Experience } from "../types/ExperienceTypes";

defineProps({
  experiences: Array as PropType<Experience[]>,
});
</script>
