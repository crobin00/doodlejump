class Platform {
  constructor(height, left) {
    this.height = height;
    this.left = left;
  }

  createPlatform() {
    const platform = document.createElement('div');
    const gameContainer = document.querySelector('.game-container');
    gameContainer.appendChild(platform);
    platform.style.width = '100px';
    platform.style.height = '20px';
    platform.style.position = 'absolute';
    platform.style.bottom = this.height + 'px';
    platform.style.left = this.left + 'px';
    platform.style.background = 'red';
  }
}

export { Platform };
