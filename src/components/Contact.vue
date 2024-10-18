<template>
  <div class="contact">
    <div class="contact-container">
      <h2 class="contact-container__message">
        Get in <span class="contact-container__message__emphasis">touch</span>
      </h2>

      <div class="contact-container__message2-container">
        <h3 class="contact-container__message2-container__message2">
          I'm always eager to grow and learn as a software developer, with the
          goal of leading a team one day. Feel free to follow my journey through
          my socials, and if you're interested in collaborating or offering
          guidance, don't hesitate to reach out!
        </h3>
      </div>

      <div class="contact-container__socials-container">
        <h3 class="contact-container__socials-container__header">
          Social Links
        </h3>
        <div class="contact-container__socials-container__buttons">
          <a class="link-button">LinkedIn</a>
          <a class="link-button">GitHub</a>
        </div>
      </div>

      <div class="contact-container__contact-me-container">
        <h3 class="contact-container__contact-me-container__header">
          Contact Me!
        </h3>
        <div class="contact-container__socials-container__buttons">
          <a class="link-button">Resume</a>
          <a class="link-button">Email</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem 0 1rem;
}

.contact-container {
  display: flex;
  flex-direction: column;

  &__message {
    font-size: 8rem;
    margin: 0;

    &__emphasis {
      color: #ff3f81;
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
    &__header {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    &__buttons {
      display: flex;
      gap: 2rem;
    }
  }

  &__contact-me-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: end !important;
    width: 100%;
  }
}

@media only screen and (max-width: 56.25rem) {
  .contact-container {
    margin-top: 25rem;
  }
}
</style>
