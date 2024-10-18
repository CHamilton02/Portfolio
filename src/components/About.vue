<template>
  <div class="about">
    <h2 class="about__title">About Me!</h2>
    <div class="about__body">
      <p class="about__intro">
        Hey there! I'm Camdyn, and I love bringing ideas to life through code
        and teamwork!
      </p>
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
          <button class="btn" @click="$emit('toggleExperience')">
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  &__title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  &__body {
    display: flex;
    gap: 2rem;
  }

  &__intro {
    font-weight: bold;
    font-size: 2rem;
  }

  &__content {
    margin-top: 1rem;
  }

  &__text {
    margin: 1rem 0;
  }

  .highlight {
    font-weight: bold;
    color: #ff3f81;
  }

  &__cta {
    margin-top: 1rem;
  }

  .btn {
    background-color: #23153c;
    color: white;
    padding: 0.5rem 1rem;
    border: 0.15rem solid #ff3f81;
    border-radius: 1rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: #ff3f81;
      cursor: pointer;
    }
  }
}

@media (max-width: 640px) {
  .about {
    &__body {
      display: block;
      text-align: center;
    }

    &__title {
      font-size: 2rem;
    }

    &__intro {
      font-size: 1.5rem;
    }

    &__cta {
      text-align: center;
    }
  }

  .btn {
    font-size: 1rem;
  }
}
</style>
