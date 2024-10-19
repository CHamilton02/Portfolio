<template>
  <div class="contact">
    <div class="contact-container">
      <h2 class="contact-container__message">
        Get in <span class="contact-container__message__emphasis">touch</span>
      </h2>

      <div class="contact-container__message2-container">
        <h3 class="contact-container__message2-container__message2">
          I'm always eager to grow and learn as a software developer, with the
          goal of leading a team one day. If you're considering hiring for a
          co-op position next summer, I would love to connect and explore
          potential opportunities. Feel free to follow my journey through my
          socials, and if you're interested in collaborating or offering
          guidance, don't hesitate to reach out!
        </h3>
      </div>

      <div class="contact-container__contact-me-container">
        <a href="Resume.pdf" target="_blank" class="link-button contact-button"
          >Check Out My Resume!</a
        >
        <a href="mailto:c02hamil@gmail.com" class="link-button contact-button"
          >Send Me An Email!</a
        >
      </div>

      <div class="contact-container__socials-container">
        <h3 class="contact-container__socials-container__header">Follow Me!</h3>
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
    <footer>Designed & Built by Camdyn Hamilton</footer>
  </div>
</template>

<script setup lang="ts">
import LinkedIn from "../assets/LinkedIn Logo.png";
import GitHub from "../assets/Github Logo.png";
</script>

<style lang="scss">
.contact-container {
  display: flex;
  flex-direction: column;

  &__message {
    font-size: 8rem;
    margin: 0;

    &__emphasis {
      color: #ff6f61;
    }
  }

  &__message2-container {
    display: flex;
    justify-content: end;

    &__message2 {
      width: 60%;
      text-align: end;
    }
  }

  &__socials-container,
  &__contact-me-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__header {
      font-size: 2.5rem;
      margin: 0;
    }
  }

  &__contact-me-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: end !important;
    width: 100%;
  }
}

.contact-button {
  font-size: 1rem;
}

@media only screen and (max-width: 40rem) {
  .contact-container {
    margin-bottom: 3rem;

    &__message {
      text-align: center;
      font-size: 3rem;
    }

    &__message2-container {
      display: block;
      &__message2 {
        text-align: center;
        width: auto;
        font-size: 0.8rem;
        font-weight: normal;
      }
    }

    &__socials-container,
    &__contact-me-container {
      flex-direction: column;
      align-items: center !important;
      &__header {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
    }

    &__contact-me-container {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }

  .contact-button {
    font-size: 0.8rem;
    text-align: center;
  }
}
</style>
