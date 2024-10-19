<template>
  <div class="about">
    <h2 class="header">About Me!</h2>
    <div class="about__body">
      <h3 class="about__intro">
        Hey there! I'm Camdyn, and I love bringing ideas to life through code
        and teamwork!
      </h3>
      <div class="about__content">
        <p class="about__text">
          My coding journey kicked off in 2018 during my first computer
          programming class, and I’ve been hooked since. I've worked on projects
          both academically and as a hobby, and now I’m gaining real-world
          experience as a
          <span class="highlight">Developer Co-op</span> at
          <span class="highlight">RBC</span>.
        </p>
        <p class="about__text">
          I’ve honed my front-end skills with technologies like
          <span class="highlight">JavaScript</span>,
          <span class="highlight">TypeScript</span>,
          <span class="highlight">React</span>, and
          <span class="highlight">Vue</span>, but my long-term dream is to dive
          into <span class="highlight">operating systems</span> and eventually
          <span class="highlight">lead a team to new heights</span>.
        </p>
        <p class="about__text">
          So far, I've had the chance to deliver exciting projects, whether
          personal creations like this
          <span class="highlight">portfolio</span> or
          <span class="highlight"
            >building front-end interfaces to interact with AI/ML projects</span
          >
          at RBC.
        </p>
        <p class="about__text">
          I’m always eager to grow and would be thrilled to bring my passion and
          skills to your team through an exciting co-op opportunity. Feel free
          to reach out—<span class="highlight"
            >I'd love to chat about how I can contribute to your company!</span
          >
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

<style lang="scss" scoped>
.about {
  padding-top: 1.5rem;
  margin-bottom: 10rem;
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

  .highlight {
    font-weight: bold;
    color: #ff6f61;
  }

  &__cta {
    margin-top: 1rem;
  }
}

@media (max-width: 40rem) {
  .about {
    margin-bottom: 10rem;

    &__body {
      display: block;
    }

    &__intro {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    &__cta {
      text-align: center;
    }
  }
}
</style>
