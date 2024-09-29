<template>
  <div class="about">
    <div>
      <h1>Hello, I'm Camdyn!👋</h1>
      <h2>Student/Full-Stack Developer 💻</h2>
      <p>
        Currently working at RBC as a Developer co-op on the UX-Force team! 🏦
      </p>
      <p>I'm also a Computer Science student at York University. 🏫</p>
    </div>
    <div class="about__profile-picture">
      <img
        v-if="!showCat"
        src="../assets/Profile Picture.jpg"
        class="profile-picture"
        @click="showCat = true"
      />
      <img
        v-else
        src="../assets/Totoro.png"
        class="profile-picture"
        @click="showCat = false"
      />
      <p>(click image for a surprise 🐈)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showCat = ref(false);
</script>

<style lang="scss" scoped>
.about {
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #413429;
  &__profile-picture {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.profile-picture {
  height: 30rem;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
}
</style>
