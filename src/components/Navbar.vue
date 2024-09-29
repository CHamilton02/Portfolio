<template>
  <nav>
    <div
      class="name-and-icon"
      @mouseover="japaneseName = true"
      @mouseleave="japaneseName = false"
    >
      <img :src="RightIndex" class="icon" />
      <Transition name="slide-fade" mode="out-in">
        <h1 class="name" v-if="japaneseName">ハミルトンキャムデン</h1>
        <h1 class="name" v-else>Camdyn Hamilton</h1>
      </Transition>
    </div>
    <div class="sections">
      <h2 v-for="section in sections" class="section">{{ section }}</h2>
    </div>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        d="M0 40L18.8 46.5C37.7 53 75.3 66 112.8 73.5C150.3 81 187.7 83 225.2 84.2C262.7 85.3 300.3 85.7 337.8 78.2C375.3 70.7 412.7 55.3 450.2 55C487.7 54.7 525.3 69.3 562.8 71.3C600.3 73.3 637.7 62.7 675.2 54C712.7 45.3 750.3 38.7 787.8 41.5C825.3 44.3 862.7 56.7 881.3 62.8L900 69L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
        fill="#413429"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  </nav>
</template>

<script setup lang="ts">
import RightIndex from "../assets/index-pointing-right.png";
import { ref } from "vue";

const sections = ref(["Home", "About", "Projects", "Contact Me"]);
const japaneseName = ref(false);
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  /* background-color: #685343; */
  height: 5rem;
  align-items: center;
  padding: 0 2rem 0 2rem;
}
.name-and-icon {
  display: flex;
  align-items: center;
}
.icon {
  width: auto;
  height: 2rem;
  padding-right: 0.5rem;
}
.sections {
  display: flex;
}
.section {
  margin-left: 1rem;
  transition: color 0.25s;
}
.section:hover {
  color: #ffe2d6;
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1;
}
</style>
