<template>
  <div class="about">
    <div class="about__container">
      <h2 class="about__container__title">About Me!</h2>
      <p>
        Hey there! I'm Camdyn, and I love bringing ideas to life through code
        and teamwork!
      </p>
      <p>
        My coding journey kicked off in 2018, during my first computer
        programming class in high school, and I’ve been hooked ever since. I've
        worked on projects both academically and as a hobby, and now I’m gaining
        real-world experience as a Developer Co-op at RBC.
      </p>
      <p>
        I’ve honed my front-end skills with technologies like JavaScript,
        TypeScript, React, and Vue, but my long-term dream is to dive into
        operating systems and eventually lead a team to new heights.
      </p>
      <p>
        So far, I've had the chance to deliver some exciting projects—whether
        it’s personal creations like this portfolio or building front-end
        interfaces to interact with AI/ML projects at RBC!
      </p>
      <p>
        I’m always eager to grow and would be thrilled to bring my passion and
        skills to your team through an exciting co-op opportunity. Feel free to
        reach out—I'd love to chat about how I can contribute to your company!
      </p>
      <button class="about__container__button">
        Check out what I've worked on!
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  padding: 0 7rem 0 3rem;

  &__container {
    width: 50rem;

    &__title {
      font-size: 2.5rem;
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
      transition: background-color 0.2s linear;
    }

    &__button:hover {
      background-color: #ff3f81;
      cursor: pointer;
    }
  }
}
</style>
