<template>
  <div class="bg-neutral h-screen ">
    <div class="TOP w-full h-full lg:w-4/10 lg:h-screen lg:[clip-path:polygon(0_0,100%_0,65%_0100%,_0%100%)] bg-base-300 flex items-start justify-center lg:justify-end ">
      <div class="w-19/20 font-Quantico flex flex-col items-center justify-center lg:justify-start lg:items-start h-full">
        <div class="text-center lg:text-left">
          <h1 class=" text-[15vw] lg:text-[5vw] font-bold tracking-tightest my-3">eitaar.dev</h1>
          <slot name="AboutLink" />
          <slot name="ProjectLink" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-1 lg:gap-2 fixed top-0 right-0 h-[10vmin] items-start justify-start z-20 mx-2 my-2 lg:mx-4 lg:my-4">
    <!-- Navigation links -->
    <label 
      class="z-10 btn btn-square btn-sm md:btn-md lg:btn-lg xl:btn-xl relative" 
      aria-label="github" 
      @click="openUrl('https://github.com/eitaar')"
    >
      <!-- github icon -->
      <slot name="githubIcon" />
    </label>
    <!-- Dark/Light mode toggle btn -->
    <label class="swap swap-rotate btn btn-square btn-sm md:btn-md lg:btn-lg xl:btn-xl" aria-label="toggle theme">
      <input type="checkbox" data-toggle-theme="night,nord" />
      <Moon class="w-full" />
      <Sun class="w-full" />
    </label>
  </div>
</template>

<script setup>
import Sun from '../components/svg/sun.vue';
import Moon from '../components/svg/moon.vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function openUrl(url) {
  window.open(url, '_blank');
}
</script>