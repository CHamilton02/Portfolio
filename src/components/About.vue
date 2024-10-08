<template>
  <div class="about">
    <div>
      <h1>Hello, I'm
        <span id="name" class="about__name">
        </span>
      </h1>
      <h2>Student/Full-Stack Developer 💻</h2>
      <p>
        Currently working at RBC as a Developer co-op on the UX-Force team!
      </p>
      <p>I'm also a Computer Science student at York University.</p>
      <div class="socials">
        <a href="https://www.linkedin.com/in/c-hamilton02/">
          <img :src="LinkedIn" class="socials__icon" />
        </a>
        <a href="https://github.com/CHamilton02">
          <img :src="GitHub" class="socials__icon" />
        </a>
      </div>
    </div>
    <div class="about__profile-picture">
      <img v-show="!showCat" src="../assets/Profile Picture.png" class="profile-picture" @click="showCat = true" />
      <img v-show="showCat" src="../assets/Totoro.png" class="profile-picture" @click="showCat = false" />
      <p>(click image for a surprise 🐈)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LinkedIn from '../assets/LinkedIn Logo.png';
import GitHub from '../assets/Github Logo.png';
import TypeIt from "typeit";

const showCat = ref(false);

onMounted(() => {
  new TypeIt("#name", {
    strings: "Camdyn",
    speed: 400,
    waitUntilVisible: true,
    loop: true
  }).go()
    .delete(6)
    .type("キャムデン");
})
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &__name {
    line-height: 1.2;
    color: #ff3f81;
  }

  &__profile-picture {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.profile-picture {
  height: 25rem;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
}

.socials {
  display: flex;

  &__icon {
    height: 2.5rem;
    width: auto;
    margin-right: 1rem;
  }
}
</style>
