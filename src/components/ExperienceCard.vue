<template>
    <div class="experience-card">
        <div class="experience-card__dates">SEPT. 2024 - PRESENT</div>
        <div class="experience-card__details">
            <h2 class="experience-card__details__title">
                Developer Co-Op, <span class="experience-card__details__title__company">RBC</span>
            </h2>
            <p class="experience-card__details__description">
                Build and maintain critical components used to construct front-end components for various artificial
                intelligence and machine learning projects. Work closely in an agile environment with a cross-functional
                team consisting of designers, developers, and product managers to ensure web accessibility.
            </p>
            <div class="experience-card__details__skills-container">
                <button class="experience-card__details__skills-container__item">JavaScript</button>
                <button class="experience-card__details__skills-container__item">TypeScript</button>
                <button class="experience-card__details__skills-container__item">Vue</button>
                <button class="experience-card__details__skills-container__item">Pinia</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.experience-card {
    display: flex;
    // background-color: #23153c;
    // border: solid;
    padding: 1rem;
    border-color: #ff3f81;
    border-radius: 1rem;
    max-width: 50rem;

    &__dates {
        font-size: 0.80rem;
        min-width: 9rem;
        margin-right: 2rem;
        color: #ff3f81;
    }

    &__details {
        &__title {
            margin: 0;
            padding: 0;
            font-size: 1.25rem;

            &__company {
                color: #ff3f81;
            }
        }

        &__description {
            font-size: 0.9rem;
        }

        &__skills-container {
            display: flex;
            gap: 1rem;

            &__item {
                background-color: #ff3f81;
                font-family: "Inter Tight", Arial, Helvetica, sans-serif;
                border: none;
                color: white;
                padding: 0.5rem 1rem 0.5rem 1rem;
                border-radius: 1rem;
            }
        }
    }
}
</style>