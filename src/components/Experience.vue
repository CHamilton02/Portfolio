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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>