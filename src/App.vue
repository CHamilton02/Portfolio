<template>
  <div id="background" class="background"></div>
  <Navbar />
  <About />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
//@ts-ignore
import NET from 'vanta/dist/vanta.net.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
onMounted(() => {
  NET({
    el: '#background'
  })
})
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
