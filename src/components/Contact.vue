<template>
  <div class="contact_container">
    <h2>Get to know me!</h2>
    <p class="contact_container__message">
      Although I’m not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I’ll try
      my best to get back to you!
    </p>
    <div class="contact_container__buttons">
      <a
        class="contact_container__buttons__button"
        href="mailto:c02hamil@gmail.com"
      >
        <div class="sliding-background"></div>
        Contact Me!
      </a>
      <a class="contact_container__buttons__button">My Resume</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.contact_container {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__message {
    font-size: 1.1rem;
    max-width: 30rem;
    text-align: center;
  }

  &__buttons {
    display: flex;
    gap: 2rem;

    &__button {
      color: white;
      background-color: #23153c;
      text-decoration: none;
      border: solid;
      border-color: #ff3f81;
      border-width: 0.15rem;
      border-radius: 1rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      transition: background-color 0.2s linear;
    }

    &__button:hover {
      background-color: #ff3f81;
    }
  }
}
</style>
