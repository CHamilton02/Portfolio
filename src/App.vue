<template>
  <div id="background" class="background"></div>
  <div class="app-container">
    <Navbar
      @toggleHome="handleToggleHome"
      @toggleExperience="handleToggleExperience"
      @toggleContact="handleToggleContact"
      :activeSection="currentActiveSection"
    />
    <Home v-show="currentActiveSection === 'Home'" />
    <Experience v-show="currentActiveSection === 'Experience'" />
    <Contact v-show="currentActiveSection === 'Contact'" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";

const currentActiveSection = ref<"Home" | "About" | "Experience" | "Contact">(
  "Home"
);

onMounted(() => {
  NET({
    el: "#background",
  });
});

function handleToggleHome() {
  currentActiveSection.value = "Home";
}

function handleToggleExperience() {
  currentActiveSection.value = "Experience";
}

function handleToggleContact() {
  currentActiveSection.value = "Contact";
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
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
