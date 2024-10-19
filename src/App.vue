<template>
  <div id="background" class="background"></div>
  <Hamburger
    class="hamburger"
    @toggleHome="scrollToElement('home-section')"
    @toggleAbout="scrollToElement('about-section')"
    @toggleExperience="scrollToElement('experience-section')"
    @toggleContact="scrollToElement('contact-section')"
  />
  <div class="app-container">
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
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";
import Hamburger from "./components/Hamburger.vue";

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
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.background {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60rem;
}
@media only screen and (min-width: 56.26rem) {
  .hamburger {
    display: none;
  }
}

@media only screen and (max-width: 56.25rem) {
  .navbar {
    display: none;
  }

  .background {
    height: 100rem;
  }
}
</style>
