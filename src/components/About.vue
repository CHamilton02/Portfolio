<template>
  <div class="about">
    <h2 class="header">About Me</h2>
    <div class="about__body">
      <h3 class="about__intro">
        Hey there, I’m Camdyn, and I love bringing ideas to life through code!
      </h3>
      <div class="about__content">
        <p class="about__text">
          My coding journey began in 2018 with my first programming class, and
          I’ve been hooked ever since. I’ve built everything from full-stack
          AI-powered applications at
          <span class="highlight">RBC Borealis</span> to personal projects like
          <span class="highlight">Hatsumai</span>, a GPT-4o powered web app that
          helps CS students generate new project ideas.
        </p>
        <p class="about__text">
          Along the way, I have sharpened my skills in both front-end and
          back-end development, working with
          <span class="highlight"
            >Angular, Vue, TypeScript, Express, and Postgres</span
          >
          to deliver clean and scalable solutions. My long-term goal is to
          become a strong technical leader and guide a team toward building
          impactful products.
        </p>
        <p class="about__text">
          Outside of coding, I enjoy problem-solving games such as Wordle and
          the LinkedIn puzzles, watching sports with baseball and American
          football being my current favourites, and exploring films and
          single-player games.
        </p>
        <p class="about__text">
          I am eager to continue growing as a developer and would be excited to
          bring my skills and creativity to your team. Let’s connect, I would
          love to chat about how I can contribute to your company’s success.
        </p>
        <div class="about__cta">
          <button class="link-button" @click="$emit('toggleExperience')">
            Check out what I've worked on!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
  padding-top: 5rem;
  margin-bottom: 20rem;

  &__body {
    display: flex;
    gap: 2rem;
  }

  &__intro {
    font-weight: bold;
    font-size: 2rem;
    margin: 0;
  }

  &__content {
    margin: 0;
  }

  &__text {
    margin: 0 0 0.75rem 0;
  }

  &__cta {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 56.25rem) {
  .about {
    margin-bottom: 10rem;
  }
}

@media only screen and (max-width: 40rem) {
  .about {
    &__body {
      display: block;
    }

    &__intro {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    &__cta {
      text-align: center;
    }
  }
}
</style>
