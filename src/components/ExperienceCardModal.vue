<template>
  <div class="experience-card-modal-container">
    <div class="experience-card-modal"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.experience-card-modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: hidden;
}

.experience-card-modal {
  height: 500px;
  width: 500px;
  background-color: black;
}
</style>
