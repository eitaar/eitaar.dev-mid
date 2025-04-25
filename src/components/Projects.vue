<template>
<div class="w-9/10 lg:w-8/10">
  <div class="splide h-full" aria-label="Splideの基本的なHTML">
    <div class="splide__track h-full rounded-xl">
      <ul class="splide__list">
        <li class="splide__slide" v-for="project in projects" :key="project.id">
          <div class="flex bg-base-200 h-full font-Quantico">
            <div class="flex flex-col lg:flex-row w-full h-full py-4 px-4">
              <div class="w-full lg:w-3/5">
                <img :src="project.image" alt="Project Image" class="rounded-xl object-fit"/>
              </div>
              <div class="w-full lg:w-2/5 flex flex-col justify-start items-start flex-wrap">
                <h3 class="w-full text-center font-bold text-3xl lg:text-4xl py-5 underline">{{ project.title }}</h3>
                <div class="flex flex-wrap gap-2 mb-4 items-center justify-center container">
                  <span v-for="tech in project.techStack" :key="tech" class="badge badge-primary ">{{ tech }}</span>
                </div>
                <p class="text-md lg:text-lg text-center w-full py-2 px-4">{{ project.description }}</p>
                
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  demo: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My personal portfolio website showcasing my projects and skills. Built with mainly Astro and Tailwind CSS.',
    techStack: ['Astro', 'Vue.js', 'Tailwind CSS', 'DaisyUI', 'PixiJS','TypeScript'],
    image: "/eitaar_dev.png",
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://eitaar.dev'
  },
  {
    id: 2,
    title: "Wahoot!",
    description: 'A third-party Kahoot! client without kahoot.js-latest. Built with Nuxt',
    techStack: ['Nuxt', 'Vue.js', 'JavaScript'],
    image: "/wahoot.png",
    github: "",
    demo: 'https://wahoot.eitaar.dev'
  }
]);

onMounted(() => {
  new Splide('.splide').mount();
});
</script>