import * as PIXI from 'pixi.js';

export async function createPixi() {
  const canvasArea = document.getElementById('PIXI') as HTMLCanvasElement;
  const app = new PIXI.Application();
  await app.init({
    width: canvasArea.offsetWidth,
    height: canvasArea.offsetHeight,
    backgroundAlpha: 0,
    antialias: false,
  });

  //make square graphics
  const container = new PIXI.Container();
  const square = new PIXI.Graphics()  
    .rect(0,0,50,50)
    .fill(0xFFFFFF);
  square.pivot.x = 25;
  square.pivot.y = 25;
  square.y = Math.random() * app.renderer.height;
  square.x = Math.random() * 750 + 25;
  square.label = "main"
  app.stage.addChild(square);
  let time = 0;
  let c = 0;
  app.ticker.add((delta) => {
    time += delta.deltaTime * 0.5;
    // Update the square's position and rotation
    square.rotation += time * 0.0025;
    square.x += time * 0.25;
    // Create a new path after updating the square
    const path = new PIXI.Graphics()
      .rect(0,0,50, 50)
      .stroke({ color: 0xffffff, pixelLine: true });
    path.x = square.x-25;
    path.y = square.y;
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
      const distance = Math.sqrt(Math.pow(sqPath.x - square.x, 2) + Math.pow(sqPath.y - square.y, 2));
      sqPath.alpha = 1 - (distance / 500);
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
      square.y = Math.random() * app.renderer.height;
      time = 0;
    }
  });


  canvasArea.appendChild(app.canvas);
  // Handle window resize
  window.addEventListener('resize', () => {
    app.renderer.resize(canvasArea.offsetWidth, canvasArea.offsetHeight);
    app.stage.scale.set(window.devicePixelRatio);
  });
}
