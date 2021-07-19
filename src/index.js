import { Platform } from './platforms.js';
const player = document.querySelector('.player');
let jumpCounter = 100;
let startJump = 100;
let leftCounter = 0;
let jumpInterval;
let fallInterval;
let isJumping = false;
let isFalling = false;
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
    if (jumpCounter < 300) return;
    plat.height -= 20;
    plat.div.style.bottom = plat.height + 'px';
    createNewPlatform(plat);
  });
}

function createNewPlatform(plat) {
  if (plat.height < 0) {
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
  isFalling = false;
  jumpInterval = setInterval(function () {
    jumpCounter += 40;
    player.style.bottom = jumpCounter + 'px';
    if (jumpCounter >= startJump + 300) {
      fall();
    }
  }, 30);
}

function moveRight() {
  if (leftCounter <= 520) {
    leftCounter += 20;
    player.style.left = leftCounter + 'px';
  }
}

function moveLeft() {
  if (leftCounter > 0) {
    leftCounter -= 20;
    player.style.left = leftCounter + 'px';
  }
}

function keyEvents(e) {
  if (e.keyCode == 38) {
    if (isJumping) return;
    if (isFalling) return;
    jump();
  }
  if (e.keyCode == 39) {
    clearInterval(isGoingLeft);
    clearInterval(isGoingRight);
    isGoingRight = setInterval(moveRight, 30);
  }
  if (e.keyCode == 37) {
    clearInterval(isGoingRight);
    clearInterval(isGoingLeft);
    isGoingLeft = setInterval(moveLeft, 30);
  }
}

function fall() {
  clearInterval(jumpInterval);
  isJumping = false;
  isFalling = true;
  fallInterval = setInterval(function () {
    jumpCounter -= 15;
    player.style.bottom = jumpCounter + 'px';
    platFormLand();
    if (jumpCounter <= 0) {
      gameOver();
    }
  }, 30);
}

function gameOver() {
  console.log('game over');
  clearInterval(jumpInterval);
  clearInterval(fallInterval);
  document.removeEventListener('keydown', keyEvents);
  player.remove();
  platforms.forEach((plat) => {
    platforms.slice();
    plat.div.remove();
  });
}

function platFormLand() {
  platforms.forEach((plat) => {
    if (
      jumpCounter >= plat.height &&
      jumpCounter <= plat.height + 20 &&
      leftCounter <= plat.left + 100 &&
      leftCounter + 80 >= plat.left
    ) {
      startJump = jumpCounter;
      jump();
      console.log('landed');
      isJumping = true;
    }
  });
}

document.addEventListener('keydown', keyEvents);
leftCounter = platforms[0].left;
player.style.left = leftCounter + 'px';
let platformMove = setInterval(movePlatforms, 100);
