<template>
  <div class="about">
    <h2 class="header">About Me</h2>
    <div class="about__body">
      <h3 class="about__intro">
        Hey there, I'm Camdyn! I love bringing ideas to life through code and
        being a teamplayer.
      </h3>
      <div class="about__content">
        <p class="about__text">
          My coding journey kicked off in 2018 during my first computer
          programming class, and I’ve been hooked ever since. I've worked on
          projects both academically and as a hobby, and now I’m gaining
          real-world experience as a
          <span class="highlight">Full-Stack Developer Co-op</span> at
          <span class="highlight">RBC</span>.
        </p>
        <p class="about__text">
          I’ve honed my skills in both front-end and back-end development with
          technologies like
          <span class="highlight">JavaScript</span>,
          <span class="highlight">TypeScript</span>,
          <span class="highlight">React</span>,
          <span class="highlight">Vue</span>, and
          <span class="highlight">FastAPI</span>, and I’m excited to continue
          expanding my expertise in full-stack development. My long-term dream
          is to dive into <span class="highlight">operating systems</span> and
          eventually <span class="highlight">lead a team to new heights</span>.
        </p>
        <p class="about__text">
          So far, I've had the chance to deliver exciting projects, whether
          personal creations like this
          <span class="highlight">portfolio</span> or
          <span class="highlight">building full-stack web applications</span>
          at RBC, including AI/ML-driven features that directly support business
          intelligence and decision-making.
        </p>
        <p class="about__text">
          I’m always eager to grow and would be thrilled to bring my passion and
          skills to your team through an exciting co-op opportunity. Feel free
          to reach out—<span class="highlight"
            >I'd love to chat about how I can contribute to your company</span
          >.
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
