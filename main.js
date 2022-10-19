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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCurrentProject\": () => (/* binding */ showCurrentProject),\n/* harmony export */   \"showProjects\": () => (/* binding */ showProjects),\n/* harmony export */   \"showTask\": () => (/* binding */ showTask)\n/* harmony export */ });\nconst content_div = document.querySelector('.content');\n\nconst showTask = (title, description, duedate, priority) => {\n    let row_div = document.createElement('div');\n    row_div.classList.add('row');\n    content_div.appendChild(row_div);\n\n\n    let left_div = document.createElement('div');\n    left_div.classList.add('left');\n    row_div.appendChild(left_div);\n\n\n    let header_h2 = document.createElement('h2');\n    header_h2.textContent = title\n    left_div.appendChild(header_h2);\n\n    let description_p = document.createElement('p');\n    description_p.textContent = description;\n    left_div.appendChild(description_p);\n\n\n    let right_div = document.createElement('div');\n    right_div.classList.add('right');\n    row_div.appendChild(right_div);\n\n    let priority_p = document.createElement('p');\n    priority_p.textContent =  priority;\n    right_div.appendChild(priority_p);\n\n    let date_p = document.createElement('p');\n    date_p.textContent = duedate;\n    right_div.appendChild(date_p);\n\n    let checkbox_inp = document.createElement('input');\n    checkbox_inp.type = 'checkbox';\n    right_div.appendChild(checkbox_inp);\n\n    let delete_btn = document.createElement('button');\n    delete_btn.textContent = 'Delete';\n    right_div.appendChild(delete_btn);\n}\n\nconst projects_ul = document.querySelector('.projectsUl');\n\nconst showProjects = (projectName, caca) => {\n    let project_li = document.createElement('li')\n    project_li.setAttribute('id', 'projectTitle');\n    project_li.textContent = projectName;\n    projects_ul.appendChild(project_li);\n\n    let currentProject_div = document.querySelector('.currentProject');\n\n    project_li.addEventListener('click', () => {\n        console.log(projectName);\n        currentProject_div.textContent = projectName;\n    })\n}\n\nconst showCurrentProject = () => {\n    let currentProject_div = document.querySelector('.currentProject');\n}\n\n\n\n//# sourceURL=webpack://to-dos/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\n\n// const project_btn = document.querySelector('.projectBtn');\nconst submit_btn = document.querySelector('.submitBtn');\nconst text_input = document.getElementById('project');\n\n(0,_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_UI__WEBPACK_IMPORTED_MODULE_2__.showCurrentProject)();\n\nlet projects = [\n{\n  title: 'inbox',\n  tasks: []\n},\n]\nlet currentToDo = -1;\nlet currentProject = 0;\n\nsubmit_btn.addEventListener('click', () => {\n  projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.newProject)(text_input.value));\n  currentProject++;\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.showProjects)(projects[currentProject].title);\n})\n\n\n\nconst task_btn = document.querySelector('.taskBtn');\nconst submit2_btn = document.querySelector('.submitBtn2');\n\nconst title_input = document.getElementById('title');\nconst description_input = document.getElementById('description');\nconst dueDate_input = document.getElementById('dueDate');\nconst priority_input = document.getElementById('priority');\n\nsubmit2_btn.addEventListener('click', () => {\n  projects[0].tasks.push((0,_task__WEBPACK_IMPORTED_MODULE_1__.newToDo)(title_input.value, description_input.value, \n                       dueDate_input.value, priority_input.value));\n\n    currentToDo++;\n    let toDo = projects[0].tasks[currentToDo]\n    ;(0,_UI__WEBPACK_IMPORTED_MODULE_2__.showTask)(toDo.title, toDo.description, toDo.duedate, toDo.priority)\n})\n\ndocument.getElementById('test').addEventListener('click', () => {\n  console.log(projects);\n})\n\n//# sourceURL=webpack://to-dos/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModal)\n/* harmony export */ });\nfunction createModal() {\n    var modal = document.getElementById(\"myModal\");\n    var modal2 = document.getElementById(\"myModal2\");\n\n    // Get the button that opens the modal\n    var btn = document.getElementById(\"myBtn\");\n    var btn2 = document.getElementById(\"myBtn2\");\n\n    // Get the <span> element that closes the modal\n    var span = document.getElementsByClassName(\"close\")[0];\n    var span2 = document.getElementsByClassName(\"close2\")[0];\n\n    // When the user clicks on the button, open the modal\n    btn.onclick = function() {\n    modal.style.display = \"block\";\n    }\n    btn2.onclick = function() {\n    modal2.style.display = \"block\";\n    }\n\n    // When the user clicks on <span> (x), close the modal\n    span.onclick = function() {\n    modal.style.display = \"none\";\n    }\n    span2.onclick = function() {\n    modal2.style.display = \"none\";\n    }\n\n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function(event) {\n    if (event.target == modal) {\n        modal.style.display = \"none\";\n    } \n    if (event.target == modal2) {\n        modal2.style.display = \"none\";\n    }\n    }\n}\n\n//# sourceURL=webpack://to-dos/./src/modal.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\nconst newProject = (title) => {\n    const tasks = [];\n    return { title, tasks };\n}\n\n\n\n//# sourceURL=webpack://to-dos/./src/project.js?");

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