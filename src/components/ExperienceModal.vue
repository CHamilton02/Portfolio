<template>
  <div class="experience-modal-container">
    <div class="experience-modal">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style lang="scss">
.experience-modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.experience-modal {
  width: 60rem;
  height: 40rem;
  background-color: purple;
}
</style>
