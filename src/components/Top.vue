<template>
  <div class="bg-neutral h-screen">
    <div class="TOP w-4/10 h-screen [clip-path:polygon(0_0,100%_0,65%_0100%,_0%100%)] bg-base-300 z-10">
      <div class="h-screen w-1/2 ml-[2.5vw]">
        <h1 class="text-[5vw] text-left font-bold font-Quantico tracking-tightest p-0 text-base-content">eitaar.dev</h1>
        <div class="text-[2.5vw] text-left font-bold font-Quantico text-base-content pt-5">
          <slot name="AboutLink" />
          <slot name="ProjectLink"/>
          <p class="link">Blog</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex gap-1 lg:gap-2 fixed top-0 right-0 h-[10vmin] items-start justify-start z-20 mx-2 my-2 lg:mx-4 lg:my-4">
    <!-- Navigation links -->
    <label class="z-10 btn btn-square btn-sm md:btn-md lg:btn-lg xl:btn-xl relative" aria-label="github"> 
      <input type="button" @click="openUrl('https://github.com/eitaar')" />
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