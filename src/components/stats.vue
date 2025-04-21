<template>
  <div class="bg-base-200 w-full lg:w-11/20 rounded-lg">
    <div class="flex gap-3 py-4 px-4 flex-col lg:flex-row justify-start items-center lg:items-start">
      <img src="https://raw.githubusercontent.com/eitaar/eitaar/output/github-contribution-grid-snake-dark.svg" v-if="isNightTheme" alt="GitHub Contribution Snake" />
      <img src="https://raw.githubusercontent.com/eitaar/eitaar/output/github-contribution-grid-snake.svg" v-else alt="GitHub Contribution Snake" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isNightTheme = ref(false);
onMounted(() => {
  isNightTheme.value = document.documentElement.getAttribute('data-theme') === 'night';

  const observer = new MutationObserver(() => {
    isNightTheme.value = document.documentElement.getAttribute('data-theme') === 'night';
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>
