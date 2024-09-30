<template>
  <div class="spacer layer1"></div>
  <Navbar />
  <About />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
</script>

<style scoped>
  .spacer {
    aspect-ratio: 3480/300;
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .layer1 {
    background-image: url('./assets/navbar-waves.svg');
  }
</style>
