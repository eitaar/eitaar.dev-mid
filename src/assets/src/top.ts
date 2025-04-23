import * as PIXI from 'pixi.js';

export async function createPixi() {
  const canvasArea = document.getElementById('PIXI') as HTMLCanvasElement;
  const app = new PIXI.Application();
  const direction = window.innerWidth > window.innerHeight ? 'x' : 'y';

  await app.init({
    width: canvasArea.offsetWidth,
    height: canvasArea.offsetHeight,
    backgroundAlpha: 0,
    antialias: false,
  });

  //make square graphics
  const square = new PIXI.Graphics()  
    .rect(0,0,50,50)
    .fill(0xFFFFFF);
  square.pivot.x = 25;
  square.pivot.y = 25;
  if (direction === 'x') {
    square.x = Math.random() * app.renderer.width/4 + 300;
    square.y = Math.random() * app.renderer.height/2;
  } else {
    square.x = Math.random() * app.renderer.width;
    square.y = (Math.random() * app.renderer.height/4 * -1) - 300;
  }
  square.label = "main"
  app.stage.addChild(square);
  let time = 0;
  let c = 0;
  app.ticker.add((delta) => {
    time += delta.deltaTime * 0.5;
    // Update the square's position and rotation
    square.rotation += time * 0.0025;
    if (direction === 'x') {
      square.x += time * 0.25;
      square.y += time * 0.25;
    } else {
      square.y += time * 0.25;
    }
    // Create a new path after updating the square
    const path = new PIXI.Graphics()
      .rect(0,0,50, 50)
      .stroke({ color: 0xffffff, pixelLine: true });
    path.x = square.x-25;
    path.y = square.y-25;
    path.pivot.x = square.pivot.x;
    path.pivot.y = square.pivot.y;
    path.rotation = square.rotation;
    // Add the path to the stage
    if (c % 5 === 0) {
      app.stage.addChild(path);
    }
    c++;
    // change the opacity of the path, depending on how close the path is to the square (furthey away, more transparent) first one is 0.5, second one is 0.4, third one is 0.3, etc.
    for (let sqPath of app.stage.children) {
      if (sqPath.label === "main") {
        continue;
      }
      if (direction == "x") {
        const distance = Math.sqrt(Math.pow(sqPath.x - square.x, 2) + Math.pow(sqPath.y - square.y, 2));
        sqPath.alpha = 1 - (distance / 500);
      } else{
        const distance = Math.sqrt(Math.pow(sqPath.y - square.y, 2) + Math.pow(sqPath.x - square.x, 2));
        sqPath.alpha = 1 - (distance / 500);
      }
    }
    
    if (app.stage.children.length > 6) {
      let ct = 0
      while (app.stage.children[ct] && app.stage.children[ct].label == "main") {
        ct++;
      }
      app.stage.removeChild(app.stage.children[ct]);
    }

    if (square.x > app.renderer.width+300) {
      square.x = Math.random() * 300;
      square.y = (Math.random() * app.renderer.height)/2;
      time = 0;
    } else if (square.y > app.renderer.height+300) {
      square.x = Math.random() * app.renderer.width;
      square.y = -100;
      time = 0;
    }
  });


  canvasArea.appendChild(app.canvas);
  // Handle window resize
  window.addEventListener('resize', () => {
    app.renderer.resize(canvasArea.offsetWidth, canvasArea.offsetHeight);
  });
}
