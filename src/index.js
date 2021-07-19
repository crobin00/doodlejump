import { Platform } from './platforms.js';
const player = document.querySelector('.player');
let jumpCounter = 0;

for (let i = 0; i < 5; i++) {
  let height = 100 + (800 / 5) * i;
  let left = Math.random() * 500;
  const platform = new Platform(height, left);
  platform.createPlatform();
}

function jump() {
  jumpCounter += 40;
  player.style.bottom = jumpCounter + 'px';
  if (jumpCounter >= 400) {
    setInterval(fall, 500);
  }
}

function fall() {
  clearInterval(playerJump);
  jumpCounter -= 40;
  player.style.bottom = jumpCounter + 'px';
}

//let playerJump = setInterval(jump, 200);
