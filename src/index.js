import { Platform } from './platforms.js';
const player = document.querySelector('.player');
let jumpCounter = 0;
let leftCounter = 0;
let rightCounter = 0;
let platformCounter = 40;
let isJumping;
let isFalling;
let isGoingRight;
const platforms = [];

for (let i = 0; i < 5; i++) {
  let height = 100 + (800 / 5) * i;
  let left = Math.random() * 500;
  const platform = new Platform(height, left);
  platform.createPlatform();
  platforms.push(platform);
}

function movePlatforms() {
  platforms.forEach((plat) => {
    plat.height -= 30;
    plat.div.style.bottom = plat.height + 'px';
    createNewPlatform(plat);
  });
}

function createNewPlatform(plat) {
  if (plat.height <= 0) {
    platforms.shift();
    const platform = new Platform(800, Math.random() * 500);
    platform.createPlatform();
    platforms.push(platform);
    plat.div.remove();
  }
}

function jump() {
  jumpCounter += 40;
  player.style.bottom = jumpCounter + 'px';
  if (jumpCounter >= 250) {
    isFalling = setInterval(fall, 50);
    clearInterval(isJumping);
  }
}

function keyEvents(e) {
  if (e.keyCode == 38) {
    isJumping = setInterval(jump, 50);
  }
}

function fall() {
  if (jumpCounter <= 0) {
    clearInterval(isFalling);
    return;
  }
  clearInterval(isJumping);
  jumpCounter -= 40;
  player.style.bottom = jumpCounter + 'px';
  platFormLand();
}

function platFormLand() {
  platforms.forEach((plat) => {
    if (jumpCounter > plat.height && jumpCounter < plat.height + 20) {
      jumpCounter = 0;
      clearInterval(isFalling);
      jump();
      console.log('landed');
    }
  });
}

document.addEventListener('keydown', keyEvents);

let platformMove = setInterval(movePlatforms, 500);
console.log(platforms);
