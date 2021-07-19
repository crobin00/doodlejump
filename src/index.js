import { Platform } from './platforms.js';
const player = document.querySelector('.player');
let jumpCounter = 100;
let startJump = 100;
let leftCounter = 0;
let rightCounter = 0;
let platformCounter = 40;
let jumpInterval;
let fallInterval;
let isJumping = false;
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
  clearInterval(fallInterval);
  isJumping = true;
  jumpInterval = setInterval(function () {
    jumpCounter += 20;
    player.style.bottom = jumpCounter + 'px';
    if (jumpCounter >= startJump + 350) {
      fall();
    }
  }, 30);
}

function moveRight() {
  if (leftCounter <= 520) {
    leftCounter += 5;
    player.style.left = leftCounter + 'px';
  }
}

function moveLeft() {
  if (leftCounter > 0) {
    leftCounter -= 5;
    player.style.left = leftCounter + 'px';
  }
}

function keyEvents(e) {
  if (e.keyCode == 38) {
    jump();
  }
  if (e.keyCode == 39) {
    clearInterval(isGoingLeft);
    clearInterval(isGoingRight);
    isGoingRight = setInterval(moveRight, 50);
  }
  if (e.keyCode == 37) {
    clearInterval(isGoingRight);
    clearInterval(isGoingLeft);
    isGoingLeft = setInterval(moveLeft, 50);
  }
}

function fall() {
  clearInterval(jumpInterval);
  isJumping = false;
  fallInterval = setInterval(function () {
    jumpCounter -= 5;
    player.style.bottom = jumpCounter + 'px';
    platFormLand();

    if (jumpCounter <= 0) {
      console.log('game over');
      clearInterval(jumpInterval);
      clearInterval(fallInterval);
      document.removeEventListener('keydown', keyEvents);
    }
  }, 30);
}

function platFormLand() {
  platforms.forEach((plat) => {
    if (
      jumpCounter >= plat.height &&
      jumpCounter <= plat.height + 20 &&
      leftCounter <= plat.left + 200 &&
      leftCounter + 80 >= plat.left
    ) {
      startJump = jumpCounter;
      jump();
      console.log('landed');
    }
  });
}

document.addEventListener('keydown', keyEvents);
leftCounter = platforms[0].left;
player.style.left = leftCounter + 'px';
let platformMove = setInterval(movePlatforms, 500);
console.log(platforms);
