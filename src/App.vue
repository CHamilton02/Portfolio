<template>
  <Navbar />
  <div class="spacer navbar-waves"></div>
  <About />
  <div class="spacer experience-top-waves"></div>
  <div class="dummy-experience">To be filled later</div>
  <div class="spacer experience-bottom-waves"></div>
  <div class="spacer bottom-nav-waves"></div>
  <div class="dummy-bottom-nav">TBD</div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
</script>

<style scoped>
.spacer {
  aspect-ratio: 3480/300;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.navbar-waves {
  background-image: url('./assets/navbar-waves.svg');
}

.experience-top-waves {
  background-image: url('./assets/experience-top-waves.svg');
}

.dummy-experience {
  background-color: #FCBD9D;
  height: 750px;
}

.experience-bottom-waves {
  background-image: url('./assets/experience-bottom-waves.svg');
}

.bottom-nav-waves {
  background-image: url('./assets/bottom-nav-waves.svg');
}

.dummy-bottom-nav {
  background-color: #413429;
  height: 300px;
}
</style>
