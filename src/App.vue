<template>
  <div id="background" class="background"></div>
  <Navbar @toggleAbout="handleToggleAbout" @toggleExperience="handleToggleExperience"
    @toggleContact="handleToggleContact" />
  <About v-show="currentActiveSection === 'About'" />
  <Experience v-show="currentActiveSection === 'Experience'" />
  <Contact v-show="currentActiveSection === 'Contact'" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
//@ts-ignore
import NET from 'vanta/dist/vanta.net.min'

const currentActiveSection = ref<"About" | "Experience" | "Contact">('About');

onMounted(() => {
  NET({
    el: '#background'
  })
})

function handleToggleAbout() {
  currentActiveSection.value = "About";
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
</style>
