<template>
    <div class="experience-card-container">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
    </div>
</template>

<script setup lang="ts">
import ExperienceCard from './ExperienceCard.vue'
</script>

<style lang="scss">
.experience-card-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 1rem;
}
</style>