import * as PIXI from 'pixi.js';

interface Particle extends PIXI.Graphics {
  vx: number;
  vy: number;
  life: number;
}


export async function createPixi() {
  const canvasArea = document.getElementById('PIXI') as HTMLCanvasElement;
  const app = new PIXI.Application();
  const direction = window.innerWidth > window.innerHeight ? 'x' : 'y';

  await app.init({
    width: canvasArea.offsetWidth,
    height: canvasArea.offsetHeight,
    backgroundAlpha: 0,
    antialias: false,
    preference: 'webgpu'
  });

  // --- Animated Gradient Background ---

  // --- Particle Effects ---
  // Create containers for organization
  const squareContainer = new PIXI.Container();
  const particleContainer = new PIXI.Container();
  app.stage.addChild(squareContainer);
  app.stage.addChild(particleContainer);

  const particles: Particle[] = [];
  function spawnParticle(): Particle {
    const p = new PIXI.Graphics()
      .circle(0, 0, Math.random() * 8 + 4)
      .fill({ color: 0xff00ff, alpha: Math.random() * 0.4 + 0.2 }) as Particle;

    p.x = Math.random() * app.renderer.width;
    p.y = app.renderer.height + 20; // Start from bottom
    p.vy = Math.random() * 2 + 1; // Faster upward movement
    p.vx = (Math.random() - 0.5) * 1; // Wider horizontal movement
    p.life = Math.random() * 200 + 120;
    
    particles.push(p);
    particleContainer.addChild(p);
    return p;
  }
  for (let i = 0; i < 30; i++) spawnParticle();
  // --- End Particle Effects ---

  // Make square graphics
  const square = new PIXI.Graphics();
  square
    .rect(0, 0, 50, 50)
    .fill({ color: 0xFFFFFF });
  square.pivot.x = 25;
  square.pivot.y = 25;
  // Add glow filter

  if (direction === 'x') {
    square.x = Math.random() * app.renderer.width/4 + 300;
    square.y = Math.random() * app.renderer.height/2;
  } else {
    square.x = Math.random() * app.renderer.width;
    square.y = (Math.random() * app.renderer.height/4 * -1) - 300;
  }
  square.label = "main";
  squareContainer.addChild(square);
  let time = 0;
  let c = 0;
  // --- Animate square pulse ---
  let pulseTime = 0;
  app.ticker.add((delta) => {
    time += delta.deltaTime*0.75;
    // Animate background gradient
    // Animate particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx * delta.deltaTime;
      p.y -= p.vy * delta.deltaTime;
      p.life -= delta.deltaTime;
      p.alpha = Math.max(0, p.life / 200);
      if (p.y < -20 || p.life < 0) {
        app.stage.removeChild(p);
        particles.splice(i, 1);
        spawnParticle();
      }
    }
    // Animate square pulse
    pulseTime += delta.deltaTime * 0.04;
    square.scale.set(1 + 0.12 * Math.sin(pulseTime));
    // Update the square's position and rotation
    square.rotation += time * 0.0025;
    if (direction === 'x') {
      square.x += time * 0.25;
      square.y += time * 0.25;
    } else {
      square.y += time * 0.25;
    }
    // Create a new path after updating the square
    const path = new PIXI.Graphics();
    path
      .rect(0, 0, 50, 50)
      .stroke({ color: 0xffffff, pixelLine: true });
    path.label = "path";
    path.x = square.x-25;
    path.y = square.y-25;
    path.pivot.x = square.pivot.x;
    path.pivot.y = square.pivot.y;
    path.rotation = square.rotation;
    // Add the path to the stage
    if (c % 5 === 0) {
      squareContainer.addChild(path);
    }
    c++;
    // change the opacity of the path, depending on how close the path is to the square (furthey away, more transparent) first one is 0.5, second one is 0.4, third one is 0.3, etc.
    for (let sqPath of squareContainer.children) {
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
    
    // Remove old paths when there are more than 5 paths, but keep particles and main square
    const paths = squareContainer.children.filter(child => child.label === "path");
    if (paths.length > 5) {
      // Keep only the 5 most recent paths
      const pathsToRemove = paths.slice(0, paths.length - 5);
      pathsToRemove.forEach(path => {
        if (path.label === "path") {
          squareContainer.removeChild(path);
        }
      });
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
