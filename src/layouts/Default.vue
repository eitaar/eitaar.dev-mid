<template>
  <header class="">
    <div ref="navbar" class="navbar bg-base-100" >
      <div class="navbar-start">
        <p class="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-Roboto" href="/">eitaar.dev</p>
      </div>
      <div class="navbar-end gap-2">
        <!--Navigation links-->
        <label class="z-10 btn btn-square btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" aria-label="github"> 
          <input type="button" @click="openUrl('https://github.com/eitaar')"/>
          <!-- github icon -->
          <Github class=" absolute h-10 w-10 fill-current"/>
        </label>
        <!--Dark/Light mode toggle btn-->
        <label class="swap swap-rotate btn btn-square btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" aria-label="toggle theme">
          <input type="checkbox" data-toggle-theme="night,corporate"/>
          <!-- sun icon -->
          <Sun class=" w-full"/>
          <!-- moon icon -->
          <Moon class=" w-full"/>
        </label>
      </div>
    </div>
  </header>
</template>
<script setup>
import Github from '../components/svg/github.vue';
import Sun from '../components/svg/sun.vue';
import Moon from '../components/svg/moon.vue';
function openUrl(url) {
  window.open(url, "_blank");
};
</script>
