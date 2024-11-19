<template>
  <div id="background" class="background"></div>
  <div class="loader-container" v-show="!isLoaded">
    <div class="loader"></div>
  </div>
  <div id="app-container" class="app-container" v-show="isLoaded">
    <Hamburger
      class="hamburger"
      @toggleHome="scrollToElement('home-section')"
      @toggleAbout="scrollToElement('about-section')"
      @toggleExperience="scrollToElement('experience-section')"
      @toggleContact="scrollToElement('contact-section')"
    />
    <Navbar
      @toggleHome="scrollToElement('home-section')"
      @toggleAbout="scrollToElement('about-section')"
      @toggleExperience="scrollToElement('experience-section')"
      @toggleContact="scrollToElement('contact-section')"
      class="navbar"
    />
    <Home id="home-section" />
    <About
      id="about-section"
      @toggleExperience="scrollToElement('experience-section')"
    />
    <Experience id="experience-section" />
    <Contact id="contact-section" />
  </div>
  <footer>Designed & Built by Camdyn Hamilton</footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Hamburger from "./components/Hamburger.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";

const isLoaded = ref(false);

window.addEventListener("load", () => {
  isLoaded.value = true;
});

onMounted(() => {
  NET({
    el: "#background",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3e2a63,
  });
});

function scrollToElement(elementId: string) {
  (document.activeElement as HTMLElement).blur();
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.background {
  z-index: -10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hamburger {
  display: none;
}

.app-container {
  max-width: 60rem;
}

@media only screen and (max-width: 56.25rem) {
  .hamburger {
    display: initial;
  }

  .navbar {
    display: none;
  }

  .background {
    height: 100rem;
  }
}

.loader-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 55px;
  aspect-ratio: 1;
  --g1: conic-gradient(from 90deg at top 3px left 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(
    from -90deg at bottom 3px right 3px,
    #0000 90deg,
    #fff 0
  );
  background: var(--g1), var(--g1), var(--g1), var(--g1), var(--g2), var(--g2),
    var(--g2), var(--g2);
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: l11 1.5s infinite;
}
@keyframes l11 {
  0% {
    background-size: 35px 15px, 15px 15px, 15px 35px, 35px 35px;
  }
  25% {
    background-size: 35px 35px, 15px 35px, 15px 15px, 35px 15px;
  }
  50% {
    background-size: 15px 35px, 35px 35px, 35px 15px, 15px 15px;
  }
  75% {
    background-size: 15px 15px, 35px 15px, 35px 35px, 15px 35px;
  }
  100% {
    background-size: 35px 15px, 15px 15px, 15px 35px, 35px 35px;
  }
}
</style>
