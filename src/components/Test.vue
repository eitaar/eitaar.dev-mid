<template>
  <h1>hello world {{ Date.now() }}</h1>
  <div id="container"></div>
</template>

<script setup>
function randInt() {
  return Math.floor(Math.random() * 100);
}
//import libraries
import { Application, Text,Graphics,Texture,Point } from 'pixi.js';
import { GlitchFilter } from 'pixi-filters';
const app = new Application();

async function CreatePixi () {
  await pixiCanvasInit();
  const title = await CreateTitleText();
  await CreateGlitchFilter(title);
} 


async function pixiCanvasInit(){
  await app.init({
    width: 1000,
    height: 800,
    autoRender: true,
    background: 0x000000,
  });
  app.ticker.maxFPS = 60;
  document.getElementById('container').appendChild(app.canvas);
}

async function CreateTitleText(){
  const title = new Text({ 
    text: "eitaar.dev", 
    style: { 
      fontFamily: 'Libre Baskerville', 
      fontSize: "30px",
      fontWeight: 'bold', 
      fill: "#FFFFFF",
      letterSpacing: -5 
    } 
  });
  title.resolution = 2; //this somehow makes text not blurry
  title.anchor.set(0.5);
  title.x = app.renderer.width/ 2;
  title.y = app.renderer.height/ 2;
  app.stage.addChild(title);
  return title;
}

async function CreateGlitchFilter(title){
  // Add Glitch effect animation
  let counter = 0;
  const intervalFrames = 120;
  const offset = [1, 5, 10, 15, 20, 25, 30];

  // Add the effect to the text
  setTimeout(() => { title.filters = [new GlitchFilter({ fillMode: 0 })]; }, 2000);
  app.ticker.add(() => {
    counter++;
    if (counter >= intervalFrames) {
      let randIntg = randInt();
      if (randIntg > 35 && randIntg <= 40) {
        // No action
      } else if (randIntg > 30 && randIntg <= 70) {
        // Randomize the seed and the offset
        title.filters[0].seed = Math.random();
        title.filters[0].slices = 5;
        const offsetChoice = Math.floor(Math.random() * offset.length);
        // Randomize the offset direction
        title.filters[0].red = { x: randInt() > 50 ? offset[offsetChoice] / 5 : -offset[offsetChoice], y: randInt() > 50 ? offset[offsetChoice] / 5 : -offset[offsetChoice] / 5 };
        title.filters[0].green = { x: randInt() > 50 ? offset[offsetChoice] / 5 : -offset[offsetChoice], y: randInt() > 50 ? offset[offsetChoice] / 5 : -offset[offsetChoice] / 5 };
        title.filters[0].blue = { x: randInt() > 50 ? offset[offsetChoice] / 5 : -offset[offsetChoice], y: randInt() > 50 ? offset[offsetChoice] / 5 : -offset[offsetChoice] / 5 };
        title.filters[0].offset = randInt() > 50 ? offset[offsetChoice] : -offset[offsetChoice];

        // Reset counter
        setTimeout(() => {
            title.filters[0].red = { x: 0, y: 0 };
            title.filters[0].green = { x: 0, y: 0 };
            title.filters[0].blue = { x: 0, y: 0 };
            title.filters[0].slices = 0;
            title.filters[0].offset = 0;
            counter = 0;
        }, 250);
      }
    }
  });
}
await CreatePixi();
</script>