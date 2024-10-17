<template>
  <div class="about">
    <h2 class="about__title">About Me!</h2>
    <div class="about__container">
      <p class="about__container__introduction">
        Hey there! I'm Camdyn, and I love bringing ideas to life through code
        and teamwork!
      </p>
      <div class="about__container__body">
        <p class="about__container__body__text">
          My coding journey kicked off in 2018, during my first computer
          programming class in high school, and I’ve been hooked ever since.
          I've worked on projects both academically and as a hobby, and now I’m
          gaining real-world experience as a
          <span class="about__container__body__text__highlight"
            >Developer Co-op</span
          >
          at <span class="about__container__body__text__highlight">RBC</span>.
        </p>
        <p class="about__container__body__text">
          I’ve honed my front-end skills with technologies like
          <span class="about__container__body__text__highlight">JavaScript</span
          >,
          <span class="about__container__body__text__highlight">TypeScript</span
          >, <span class="about__container__body__text__highlight">React</span>,
          and <span class="about__container__body__text__highlight">Vue</span>,
          but my long-term dream is to dive into
          <span class="about__container__body__text__highlight"
            >operating systems</span
          >
          and eventually
          <span class="about__container__body__text__highlight"
            >lead a team to new heights</span
          >.
        </p>
        <p class="about__container__body__text">
          So far, I've had the chance to deliver some exciting projects—whether
          it’s personal creations like this
          <span class="about__container__body__text__highlight">portfolio</span>
          or
          <span class="about__container__body__text__highlight"
            >building front-end interfaces to interact with AI/ML projects</span
          >
          at RBC!
        </p>
        <p class="about__container__body__text">
          I’m always eager to grow and would be thrilled to bring my passion and
          skills to your team through an exciting co-op opportunity. Feel free
          to reach out—<span class="about__container__body__text__highlight"
            >I'd love to chat about how I can contribute to your company!</span
          >
        </p>
        <button class="linkButton" @click="$emit('toggleExperience')">
          Check out what I've worked on!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 2rem;

  &__title {
    font-size: 2.5rem;
  }

  &__container {
    display: flex;

    &__introduction {
      font-weight: bold;
      font-size: 2rem;
      margin: 0;
    }

    &__body {
      margin-left: 2rem;

      &__text {
        margin-top: 0;

        &__highlight {
          font-weight: bold;
          color: #ff3f81;
        }
      }
    }

    &__button {
      font-family: "Inter Tight", Arial, Helvetica, sans-serif;
      color: white;
      background-color: #23153c;
      text-decoration: none;
      border: solid;
      border-color: #ff3f81;
      border-width: 0.15rem;
      border-radius: 1rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      margin-top: 1rem;
      transition: background-color 0.2s linear;
    }

    &__button:hover {
      background-color: #ff3f81;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 56.25rem) {
  .about__container {
    display: block;
  }
}
</style>
