<template>
  <div class="experience-modal-container">
    <div class="experience-modal">
      <button class="close-button" @click="emit('close')">
        <img :src="CloseIcon" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "../assets/Close Icon.svg";

defineProps({
  title: String,
});

const emit = defineEmits(["close"]);
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
  position: relative;
}

.close-button {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
}
</style>
