<template>
  <div class="hamburger">
    <img
      class="hamburger__image"
      src="../assets/Hamburger Icon.png"
      @click="showNavbar = !showNavbar"
    />
    <Transition name="slide-left-in">
      <div class="hamburger__sections" v-show="showNavbar">
        <h1
          v-for="section in sections"
          class="hamburger__sections__section"
          @click="toggleSection(section)"
        >
          {{ section }}
        </h1>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const showNavbar = ref(false);
const sections = ref<("Home" | "About" | "Experience" | "Contact")[]>([
  "Home",
  "About",
  "Experience",
  "Contact",
]);
const emit = defineEmits([
  "toggleHome",
  "toggleAbout",
  "toggleExperience",
  "toggleContact",
]);

function toggleSection(section: "Home" | "About" | "Experience" | "Contact") {
  showNavbar.value = false;
  emit(`toggle${section}`);
}

watchEffect(() => {
  if (showNavbar.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style lang="scss">
.hamburger {
  position: sticky;
  top: 1.5rem;
  left: 1.5rem;
  width: max-content;
  height: 0;
  &__image {
    height: 2rem;
    width: auto;
    z-index: 100;
    position: relative;
    cursor: pointer;
  }
  &__sections {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff3f81;
    &__section {
      font-size: 1.5rem;
      transition: color 0.25s;
    }

    &__section:hover {
      color: #e2e2e2;
      cursor: pointer;
    }
  }
}

.slide-left-in-enter-active,
.slide-left-in-leave-active {
  transition: all 1s ease;
}

.slide-left-in-enter-from,
.slide-left-in-leave-to {
  transform: translateX(-50rem);
}

@keyframes left-slide {
  0% {
    left: -5rem;
  }
  100% {
    left: 0;
  }
}

@keyframes right-slide {
  0% {
    left: 0;
  }
  100% {
    left: -5rem;
  }
}
</style>
