<template>
  <nav>
    <div class="name-and-icon" @mouseover="japaneseName = true" @mouseleave="japaneseName = false">
      <img :src="RightIndex" class="icon" />
      <Transition name="slide-fade" mode="out-in">
        <h1 class="name" v-if="japaneseName">ハミルトンキャムデン</h1>
        <h1 class="name" v-else>Camdyn Hamilton</h1>
      </Transition> 
    </div>
    <div class="sections">
      <h2 v-for="section in sections" class="section">{{ section }}</h2>
    </div>
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
}
.name-and-icon {
  display: flex;
  margin-left: 0.5rem;
  align-items: center;
}
.icon {
  width: auto;
  height: 2rem;
  padding-right: 0.5rem;
}
.sections {
  display: flex;
  margin-right: 0.5rem;
}
.section {
  margin-left: 1rem;
  transition: color 0.25s;
}
.section:hover {
  color: #FFE2D6;
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>