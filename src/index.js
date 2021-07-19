import { Platform } from './platforms.js';
const player = document.querySelector('.player');
let jumpCounter = 0;
let leftCounter = 0;
let rightCounter = 80;
let platformCounter = 40;
let isJumping;
let isFalling;
let isGoingRight;
let isGoingLeft;
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

function moveRight() {
  if (leftCounter <= 500) {
    leftCounter += 40;
    player.style.left = leftCounter + 'px';
  }
}

function moveLeft() {
  if (leftCounter > 0) {
    leftCounter -= 40;
    player.style.left = leftCounter + 'px';
  }
}

function keyEvents(e) {
  if (e.keyCode == 38) {
    isJumping = setInterval(jump, 50);
  }
  if (e.keyCode == 39) {
    clearInterval(isGoingLeft);
    isGoingRight = setInterval(moveRight, 50);
  }
  if (e.keyCode == 37) {
    clearInterval(isGoingRight);
    isGoingLeft = setInterval(moveLeft, 50);
  }
}

function fall() {
  if (jumpCounter == 0) {
    clearInterval(isFalling);
    console.log('game over');
  }
  clearInterval(isJumping);
  jumpCounter -= 40;
  player.style.bottom = jumpCounter + 'px';
  platFormLand();
}

function platFormLand() {
  platforms.forEach((plat) => {
    if (jumpCounter > plat.height && jumpCounter < plat.height + 20) {
      clearInterval(isFalling);
      jump();
      console.log('landed');
    }
  });
}

document.addEventListener('keydown', keyEvents);

let platformMove = setInterval(movePlatforms, 500);
console.log(platforms);
