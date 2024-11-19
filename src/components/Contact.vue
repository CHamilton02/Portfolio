<template>
  <div class="contact-container">
    <h2 class="contact-container__title">
      Get in <span class="highlight">touch</span>
    </h2>

    <div class="contact-container__message-container">
      <p class="contact-container__message-container__message">
        I'm always eager to grow and learn as a software developer, with the
        ambition of leading a team one day. If you're considering hiring for a
        co-op position next summer, I would love to connect with you and explore
        potential opportunities. Feel free to follow my journey through my
        social media accounts, and if you are interested in collaborating or
        offering guidance, please don't hesitate to reach out.
      </p>
    </div>

    <div class="contact-container__links">
      <a href="Camdyn Hamilton Resume.pdf" target="_blank" class="link-button"
        >Check Out My Resume</a
      >
      <a href="mailto:c02hamil@gmail.com" class="link-button"
        >Send Me An Email</a
      >
    </div>

    <div class="contact-container__socials-container">
      <h3 class="contact-container__socials-container__header">Follow Me</h3>
      <div class="socials">
        <a href="https://www.linkedin.com/in/c-hamilton02/" target="_blank">
          <img :src="LinkedIn" class="socials__icon" />
        </a>
        <a href="https://github.com/CHamilton02" target="_blank">
          <img :src="GitHub" class="socials__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkedIn from "../assets/LinkedIn Logo.png";
import GitHub from "../assets/Github Logo.png";
</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 8rem;
    margin: 0;
  }

  &__message-container {
    display: flex;
    justify-content: end;

    &__message {
      width: 60%;
      text-align: end;
    }
  }

  &__socials-container,
  &__links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__header {
      font-size: 2.5rem;
      margin: 0;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
  }
}

@media only screen and (max-width: 40rem) {
  .contact-container {
    margin-bottom: 3rem;

    &__title {
      font-size: 3rem;
    }

    &__message-container {
      display: block;
      &__message {
        text-align: start;
        width: auto;
        font-weight: normal;
      }
    }

    &__socials-container,
    &__links {
      flex-direction: column;
      align-items: center;
      &__header {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
    }

    &__links {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
