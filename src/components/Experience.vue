<template>
  <div class="experience-container">
    <h2 class="header">My Experience</h2>
    <div class="carousel-wrapper">
      <carousel v-bind="config" @slide-end="onSlideChange">
        <slide
          v-for="(experience, index) in experienceStore.experiences"
          :key="index"
        >
          <ExperienceCard
            :date="experience.date"
            :website="experience.website"
            :code="experience.code"
            :title="experience.title"
            :organization="experience.organization"
            :miniDescription="experience.miniDescription"
            :description="experience.description"
            :skills="experience.skills"
            :image="experience.image"
            :modalImage="experience.modalImage"
            :active="index === currentSlide"
          />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import ExperienceCard from "./ExperienceCard.vue";
import { useExperienceStore } from "../stores/experience";
import SlideEndEvent from "../types/Carousel";
import { ref } from "vue";

const currentSlide = ref<Number>(0);

const experienceStore = useExperienceStore();

const config = {
  breakpoints: {
    0: {
      itemsToShow: 1,
    },
    500: {
      itemsToShow: 1.5,
    },
    600: {
      itemsToShow: 2,
    },
    750: {
      itemsToShow: 2.5,
    },
    850: {
      itemsToShow: 3,
    },
  },
  wrapAround: true,
  transition: 500,
};

const onSlideChange = (index: unknown) => {
  currentSlide.value = (index as SlideEndEvent).currentSlideIndex;
};
</script>

<style lang="scss">
.experience-container {
  padding-top: 2.5rem;
  margin-bottom: 20rem;
}

.carousel-wrapper {
  max-width: 100vw;
  overflow: hidden;
}

.carousel__slide {
  padding: 5;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.carousel__prev {
  margin-left: 0;
}

.carousel__next {
  margin-right: 0;
}

.carousel__icon {
  fill: #ff6f61;
}

@media only screen and (max-width: 56.25rem) {
  .experience-container {
    margin-bottom: 10rem;
  }
}
</style>
