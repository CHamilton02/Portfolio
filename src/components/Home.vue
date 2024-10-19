<template>
  <div class="home">
    <div class="home__text">
      <h1>
        Hello, I'm
        <span id="name" class="home__name"> </span>
      </h1>
      <h2 class="home__title">Student/Full-Stack Developer</h2>
      <h3 class="home__info">
        Currently working at RBC as a Developer co-op on the UX-Force team!
      </h3>
      <h3 class="home__info">
        Pursing a Bachelor of Science in Computer Science at York University.
      </h3>
      <div class="socials">
        <a href="https://www.linkedin.com/in/c-hamilton02/" target="_blank">
          <img :src="LinkedIn" class="socials__icon" />
        </a>
        <a href="https://github.com/CHamilton02" target="_blank">
          <img :src="GitHub" class="socials__icon" />
        </a>
      </div>
    </div>
    <div class="home__profile-picture">
      <img
        v-show="!showCat"
        src="../assets/Profile Picture.png"
        class="profile-picture"
        @click="showCat = true"
      />
      <img
        v-show="showCat"
        src="../assets/Totoro.png"
        class="profile-picture"
        @click="showCat = false"
      />
      <p>(click image for a surprise 🐈)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LinkedIn from "../assets/LinkedIn Logo.png";
import GitHub from "../assets/Github Logo.png";
import TypeIt from "typeit";

const showCat = ref(false);

onMounted(() => {
  new TypeIt("#name", {
    strings: "Camdyn",
    speed: 400,
    waitUntilVisible: true,
    loop: true,
  })
    .go()
    .delete(6)
    .type("キャムデン");
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 90vh;

  &__name {
    line-height: 1.2;
    color: #8d20fa;
  }

  &__profile-picture {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 1.5rem;
  }

  &__info {
    font-size: 1rem;
    font-weight: normal;
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

@media only screen and (max-width: 56.25rem) {
  .home {
    padding: 0 0.5rem 0 0.5rem;
    min-height: 100vh;
  }

  .home__profile-picture {
    display: none;
  }
  .home__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
