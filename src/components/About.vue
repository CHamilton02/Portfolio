<template>
  <div class="about">
    <div>
      <h1>Hello, I'm
        <span @mouseover="onMouseoverName" @mouseleave="onMouseleaveName">
          <span id="english-name-letter-1" class="fadeInAnimated">C</span>
          <span id="japanese-name-letter-1" class="hideLetter fadeOutAnimated">キ</span>
          <span id="english-name-letter-2" class="fadeInAnimated">a</span>
          <span id="japanese-name-letter-2" class="hideLetter fadeOutAnimated">ャ</span>
          <span id="english-name-letter-3" class="fadeInAnimated">m</span>
          <span id="japanese-name-letter-3" class="hideLetter fadeOutAnimated">ム</span>
          <span id="english-name-letter-4" class="fadeInAnimated">d</span>
          <span id="japanese-name-letter-4" class="hideLetter fadeOutAnimated">デ</span>
          <span id="english-name-letter-5" class="fadeInAnimated">y</span>
          <span id="japanese-name-letter-5" class="hideLetter fadeOutAnimated">ン</span>
          <span id="english-name-letter-6" class="fadeInAnimated">n</span>
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
      <img v-show="!showCat" src="../assets/Profile Picture.jpg" class="profile-picture" @click="showCat = true" />
      <img v-show="showCat" src="../assets/Totoro.png" class="profile-picture" @click="showCat = false" />
      <p>(click image for a surprise 🐈)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LinkedIn from '../assets/LinkedIn Logo.png';
import GitHub from '../assets/Github Logo.png';

const showCat = ref(false);

function onMouseoverName() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      document.getElementById(`english-name-letter-${i + 1}`)?.classList.replace("fadeInAnimated", "fadeOutAnimated");
      setTimeout(() => {
        document.getElementById(`japanese-name-letter-${i + 1}`)?.classList.remove("hideLetter");
        document.getElementById(`japanese-name-letter-${i + 1}`)?.classList.replace("fadeOutAnimated", "fadeInAnimated");
        document.getElementById(`english-name-letter-${i + 1}`)?.classList.add("hideLetter");
      }, 500)
    }, 500 * i)
  }
}

function onMouseleaveName() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      document.getElementById(`japanese-name-letter-${i + 1}`)?.classList.replace("fadeInAnimated", "fadeOutAnimated");
      setTimeout(() => {
        document.getElementById(`english-name-letter-${i + 1}`)?.classList.remove("hideLetter");
        document.getElementById(`english-name-letter-${i + 1}`)?.classList.replace("fadeOutAnimated", "fadeInAnimated");
        document.getElementById(`japanese-name-letter-${i + 1}`)?.classList.add("hideLetter");
      }, 500)
    }, 500 * i)
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin: -10rem 0 -10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #413429;

  &__profile-picture {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.hideLetter {
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

.fadeInAnimated {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1
  }

  to {
    opacity: 0
  }
}

.fadeOutAnimated {
  opacity: 1;
  animation: fadeOut 0.5s forwards;
}

.profile-picture {
  height: 30rem;
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
