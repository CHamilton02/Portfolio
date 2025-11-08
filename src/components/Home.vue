<template>
  <div class="home">
    <div class="home__text">
      <h1 class="home__introduction">
        Hello, I'm
        <span id="name" class="home__name"> </span>
      </h1>
      <h2 class="home__title">Student/Full-Stack Developer</h2>
      <h3 class="home__info">
        Currently pursuing a Bachelor of Science in Computer Science at York
        University.
      </h3>
      <h3 class="home__info">
        Previously worked as a Full-Stack Developer Co-op on the UX-Force and
        Project Platform as a Service teams at RBC Borealis.
      </h3>
      <div class="socials">
        <a href="https://www.linkedin.com/in/c-hamilton02/" target="_blank">
          <img :src="LinkedIn" class="socials__icon" />
        </a>
        <a href="https://github.com/CHamilton02" target="_blank">
          <img :src="GitHub" class="socials__icon" />
        </a>
      </div>
      <h2 class="home__title">Skills</h2>
      <div class="skills" :class="showAllSkills ? 'show-all-skills' : ''">
        <div
          v-for="skill in skillsArray"
          :title="skill.name"
          class="skills__frame"
        >
          <img :src="skill.imageLink" class="skills__icon" />
        </div>
      </div>
      <div v-if="!showAllSkills" class="toggle-view">
        <button class="toggle-view__button" @click="toggleAllSkills">
          <img src="../assets/Down Arrow Icon.png" class="icon" />
          View More
        </button>
      </div>
      <div v-else class="toggle-view">
        <button class="toggle-view__button" @click="toggleAllSkills">
          <img src="../assets/Up Arrow Icon.png" class="icon" />
          View Less
        </button>
      </div>
    </div>
    <div class="home__profile-picture">
      <img
        v-show="!showCat"
        src="../assets/Profile Picture.jpeg"
        class="profile-picture"
        @click="showCat = true"
      />
      <img
        v-show="showCat"
        src="../assets/Totoro.jpg"
        class="profile-picture"
        @click="showCat = false"
      />
      <p>(click image for a surprise 🐈)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LinkedIn from '../assets/LinkedIn Logo.png'
import GitHub from '../assets/Github Logo.png'
import TypeIt from 'typeit'

const showCat = ref(false)
const showAllSkills = ref(false)

const skillsArray = ref([
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    name: 'HTML5',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    name: 'CSS3',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    name: 'TypeScript',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    name: 'Python',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    name: 'Java',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    name: 'Vue.js',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    name: 'Angular',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    name: 'React',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    name: 'Bootstrap',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    name: 'Sass',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
    name: 'Node.js',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    name: 'Express',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg',
    name: 'FastAPI',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    name: 'Spring',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    name: 'MySQL',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    name: 'PostgreSQL',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    name: 'MongoDB',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    name: 'Git',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    name: 'GitHub',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
    name: 'Docker',
  },
  {
    imageLink:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
    name: 'Jira',
  },
])

onMounted(() => {
  new TypeIt('#name', {
    strings: 'Camdyn',
    speed: 400,
    waitUntilVisible: true,
    loop: true,
  })
    .go()
    .pause(2000)
    .delete(6)
    .type('キャムデン')
    .pause(2000)
})

function toggleAllSkills() {
  showAllSkills.value = !showAllSkills.value
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: start;
  justify-content: space-around;
  color: white;
  width: 100%;
  height: 50rem;
  padding-top: 5rem;

  &__introduction {
    margin-top: 0;
  }

  &__name {
    line-height: 1.2;
    color: #3282b8;
  }

  &__profile-picture {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 1.5rem;
  }

  &__info {
    font-size: 1rem;
    font-weight: normal;
  }
}

.profile-picture {
  height: 25rem;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
}

.profile-picture:hover {
  cursor: pointer;
}

.skills {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  max-height: 5rem;
  overflow: hidden;
  margin-bottom: 1rem;

  &__frame {
    background-color: #0f4c75;
    opacity: 75%;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.35s ease;
  }

  &__frame:hover {
    opacity: 100%;
  }

  &__icon {
    width: 3.5rem;
    height: auto;
  }
}

.show-all-skills {
  max-height: max-content;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 56.25rem) {
  .home__profile-picture {
    display: none;
  }
  .home__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .skills {
    justify-content: center;
  }
}

@media only screen and (max-width: 40rem) {
  .home {
    display: block;
    height: 60rem;
  }

  .home__text {
    align-items: baseline;
    text-align: start;
  }

  .skills {
    justify-content: start;

    &__frame {
      opacity: 100%;
    }
  }
}
</style>
