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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _platforms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platforms.js */ \"./src/platforms.js\");\n\nconst player = document.querySelector('.player');\nlet jumpCounter = 0;\n\nfor (let i = 0; i < 5; i++) {\n  let height = 100 + (800 / 5) * i;\n  let left = Math.random() * 500;\n  const platform = new _platforms_js__WEBPACK_IMPORTED_MODULE_0__.Platform(height, left);\n  platform.createPlatform();\n}\n\nfunction jump() {\n  jumpCounter += 40;\n  player.style.bottom = jumpCounter + 'px';\n  if (jumpCounter >= 400) {\n    setInterval(fall, 500);\n  }\n}\n\nfunction fall() {\n  clearInterval(playerJump);\n  jumpCounter -= 40;\n  player.style.bottom = jumpCounter + 'px';\n}\n\n//let playerJump = setInterval(jump, 200);\n\n\n//# sourceURL=webpack://doodlejump/./src/index.js?");

/***/ }),

/***/ "./src/platforms.js":
/*!**************************!*\
  !*** ./src/platforms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Platform\": () => (/* binding */ Platform)\n/* harmony export */ });\nclass Platform {\n  constructor(height, left) {\n    this.height = height;\n    this.left = left;\n  }\n\n  createPlatform() {\n    const platform = document.createElement('div');\n    const gameContainer = document.querySelector('.game-container');\n    gameContainer.appendChild(platform);\n    platform.style.width = '100px';\n    platform.style.height = '20px';\n    platform.style.position = 'absolute';\n    platform.style.bottom = this.height + 'px';\n    platform.style.left = this.left + 'px';\n    platform.style.background = 'red';\n  }\n}\n\n\n\n\n//# sourceURL=webpack://doodlejump/./src/platforms.js?");

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