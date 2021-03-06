/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _platforms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platforms.js */ \"./src/platforms.js\");\n\nconst player = document.querySelector('.player');\nlet jumpCounter = 100;\nlet startJump = 100;\nlet leftCounter = 0;\nlet jumpInterval;\nlet fallInterval;\nlet isJumping = false;\nlet isFalling = false;\nlet isGoingRight;\nlet isGoingLeft;\nconst platforms = [];\n\nfor (let i = 0; i < 5; i++) {\n  let height = 100 + (800 / 5) * i;\n  let left = Math.random() * 500;\n  const platform = new _platforms_js__WEBPACK_IMPORTED_MODULE_0__.Platform(height, left);\n  platform.createPlatform();\n  platforms.push(platform);\n}\n\nfunction movePlatforms() {\n  platforms.forEach((plat) => {\n    if (jumpCounter < 300) return;\n    plat.height -= 20;\n    plat.div.style.bottom = plat.height + 'px';\n    createNewPlatform(plat);\n  });\n}\n\nfunction createNewPlatform(plat) {\n  if (plat.height < 0) {\n    platforms.shift();\n    const platform = new _platforms_js__WEBPACK_IMPORTED_MODULE_0__.Platform(800, Math.random() * 500);\n    platform.createPlatform();\n    platforms.push(platform);\n    plat.div.remove();\n  }\n}\n\nfunction jump() {\n  clearInterval(fallInterval);\n  isJumping = true;\n  isFalling = false;\n  jumpInterval = setInterval(function () {\n    jumpCounter += 40;\n    player.style.bottom = jumpCounter + 'px';\n    if (jumpCounter >= startJump + 300) {\n      fall();\n    }\n  }, 30);\n}\n\nfunction moveRight() {\n  if (leftCounter <= 520) {\n    leftCounter += 20;\n    player.style.left = leftCounter + 'px';\n  }\n}\n\nfunction moveLeft() {\n  if (leftCounter > 0) {\n    leftCounter -= 20;\n    player.style.left = leftCounter + 'px';\n  }\n}\n\nfunction keyEvents(e) {\n  if (e.keyCode == 38) {\n    if (isJumping) return;\n    if (isFalling) return;\n    jump();\n  }\n  if (e.keyCode == 39) {\n    clearInterval(isGoingLeft);\n    clearInterval(isGoingRight);\n    isGoingRight = setInterval(moveRight, 30);\n  }\n  if (e.keyCode == 37) {\n    clearInterval(isGoingRight);\n    clearInterval(isGoingLeft);\n    isGoingLeft = setInterval(moveLeft, 30);\n  }\n}\n\nfunction fall() {\n  clearInterval(jumpInterval);\n  isJumping = false;\n  isFalling = true;\n  fallInterval = setInterval(function () {\n    jumpCounter -= 15;\n    player.style.bottom = jumpCounter + 'px';\n    platFormLand();\n    if (jumpCounter <= 0) {\n      gameOver();\n    }\n  }, 30);\n}\n\nfunction gameOver() {\n  console.log('game over');\n  clearInterval(jumpInterval);\n  clearInterval(fallInterval);\n  document.removeEventListener('keydown', keyEvents);\n  player.remove();\n  platforms.forEach((plat) => {\n    platforms.slice();\n    plat.div.remove();\n  });\n}\n\nfunction platFormLand() {\n  platforms.forEach((plat) => {\n    if (\n      jumpCounter >= plat.height &&\n      jumpCounter <= plat.height + 20 &&\n      leftCounter <= plat.left + 100 &&\n      leftCounter + 80 >= plat.left\n    ) {\n      startJump = jumpCounter;\n      jump();\n      console.log('landed');\n      isJumping = true;\n    }\n  });\n}\n\ndocument.addEventListener('keydown', keyEvents);\nleftCounter = platforms[0].left;\nplayer.style.left = leftCounter + 'px';\nlet platformMove = setInterval(movePlatforms, 100);\n\n\n//# sourceURL=webpack://doodlejump/./src/index.js?");

/***/ }),

/***/ "./src/platforms.js":
/*!**************************!*\
  !*** ./src/platforms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Platform\": () => (/* binding */ Platform)\n/* harmony export */ });\nclass Platform {\n  constructor(height, left) {\n    this.height = height;\n    this.left = left;\n    this.div = null;\n  }\n\n  createPlatform() {\n    const platform = document.createElement('div');\n    this.div = platform;\n    const gameContainer = document.querySelector('.game-container');\n    gameContainer.appendChild(platform);\n    platform.style.width = '100px';\n    platform.style.height = '20px';\n    platform.style.position = 'absolute';\n    platform.style.bottom = this.height + 'px';\n    platform.style.left = this.left + 'px';\n    platform.style.background = 'red';\n  }\n}\n\n\n\n\n//# sourceURL=webpack://doodlejump/./src/platforms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;