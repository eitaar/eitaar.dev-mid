<template>
  <div class="bg-base-200 w-full lg:w-11/20 rounded-lg flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold font-Quantico text-center w-full link py-1">Github Stats</h1>
    <div class="flex flex-col lg:flex-row gap-2 w-9/10 justify-center object-scale-down">
      <div class="h-full">
        <img alt="Top Langs" class="h-full min-w-full" src="https://github-readme-stats.vercel.app/api?username=eitaar&theme=transparent&hide_border=true&count_private=true"/>
      </div>
      <div class="h-full">
        <img alt="github stats" class=" h-full min-w-full"src="https://github-readme-stats.vercel.app/api/top-langs/?username=eitaar&theme=transparent&hide_border=true&layout=compact"/>
      </div>
    </div>
    <div>
      <img src="https://raw.githubusercontent.com/eitaar/eitaar/output/github-contribution-grid-snake-dark.svg" v-if="isNightTheme" alt="GitHub Contribution Snake" class="w-full"/>
      <img src="https://raw.githubusercontent.com/eitaar/eitaar/output/github-contribution-grid-snake.svg" v-else alt="GitHub Contribution Snake" class="w-full"/>
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
