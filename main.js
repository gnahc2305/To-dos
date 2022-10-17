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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n// const project_btn = document.querySelector('.projectBtn');\nconst submit_btn = document.querySelector('.submitBtn');\nconst text_input = document.getElementById('project');\n\nlet projects = ['Projects',\n  {\n    title: 'inbox'\n  },\n]\nlet toDos = ['Tasks']\n\nsubmit_btn.addEventListener('click', () => {\n    projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.newProject)(text_input.value));\n})\n\n\n\nconst task_btn = document.querySelector('.taskBtn');\nconst submit2_btn = document.querySelector('.submitBtn2');\n\nconst title_input = document.getElementById('title');\nconst description_input = document.getElementById('description');\nconst dueDate_input = document.getElementById('dueDate');\nconst priority_input = document.getElementById('priority');\n\nsubmit2_btn.addEventListener('click', () => {\n    toDos.push((0,_task__WEBPACK_IMPORTED_MODULE_1__.newToDo)(title_input.value, description_input.value, \n                       dueDate_input.value, priority_input.value));\n})\n\ndocument.getElementById('test').addEventListener('click', () => {\n  console.log(toDos);\n  console.log(projects);\n})\n\n\n\n\n\n\n\n\n\n\n\n\n//\n// modals\n//\nvar modal = document.getElementById(\"myModal\");\nvar modal2 = document.getElementById(\"myModal2\");\n\n// Get the button that opens the modal\nvar btn = document.getElementById(\"myBtn\");\nvar btn2 = document.getElementById(\"myBtn2\");\n\n// Get the <span> element that closes the modal\nvar span = document.getElementsByClassName(\"close\")[0];\nvar span2 = document.getElementsByClassName(\"close2\")[0];\n\n// When the user clicks on the button, open the modal\nbtn.onclick = function() {\n  modal.style.display = \"block\";\n}\nbtn2.onclick = function() {\n  modal2.style.display = \"block\";\n}\n\n// When the user clicks on <span> (x), close the modal\nspan.onclick = function() {\n  modal.style.display = \"none\";\n}\nspan2.onclick = function() {\n  modal2.style.display = \"none\";\n}\n\n// When the user clicks anywhere outside of the modal, close it\nwindow.onclick = function(event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  } \n  if (event.target == modal2) {\n    modal2.style.display = \"none\";\n  }\n}\n\n//# sourceURL=webpack://to-dos/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\nconst newProject = (title) => {\n    return { title };\n}\n\n\n\n//# sourceURL=webpack://to-dos/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newToDo\": () => (/* binding */ newToDo)\n/* harmony export */ });\nconst newToDo = (title, description, duedate, priority) => {\n    return { title, description, duedate, priority };\n}\n\n\n\n//# sourceURL=webpack://to-dos/./src/task.js?");

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