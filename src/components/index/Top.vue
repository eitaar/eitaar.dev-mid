<template>
  <div class="w-full h-screen relative">
    <div id="PIXI" class="absolute inset-0"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <h1 class="text-7xl lg:text-8xl font-bold tracking-tightest font-Quantico text-base-content">eitaar.dev</h1>
    </div>
    <div class="flex gap-1 lg:gap-2 fixed top-0 right-0 h-[10vmin] items-start justify-start z-20 mx-2 my-2 lg:mx-4 lg:my-4">
      <!-- Navigation links -->
      <label class="z-10 btn btn-square btn-accent btn-md lg:btn-lg relative border-[1.5px] border-base-300 p-1" aria-label="github" @click="openUrl('https://github.com/eitaar')">
        <!-- github icon -->
        <slot name="githubIcon" />
      </label>
      <!-- Dark/Light mode toggle btn -->
      <label class="swap swap-rotate btn btn-square btn-accent btn-md lg:btn-lg border-[1.5px] border-base-300 p-1" aria-label="toggle theme">
        <input type="checkbox" data-toggle-theme="cndark,cnlight" />
        <Moon class="w-full" />
        <Sun class="w-full" />
      </label>
    </div>
  </div>
</template>

<script setup>
import Sun from '../../components/svg/sun.vue';
import Moon from '../../components/svg/moon.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { createPixi } from '../../assets/src/top';
gsap.registerPlugin(ScrollToPlugin);

function openUrl(url) {
  window.open(url, '_blank');
}
</script>