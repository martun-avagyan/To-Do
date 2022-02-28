/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "deleteCheck": () => (/* binding */ deleteCheck),
/* harmony export */   "filterTodo": () => (/* binding */ filterTodo)
/* harmony export */ });
/* harmony import */ var _Selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


 // Functions

var addTodo = function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault(); //   Todo Div

  var todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //   Create the li

  var newTodo = document.createElement("li");
  newTodo.innerText = _Selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); //   Done

  var completedBtn = document.createElement("button");
  completedBtn.innerHTML = "<i class=\"fas fa-check\"></i>";
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn); //   Delete

  var trashBtn = document.createElement("button");
  trashBtn.innerHTML = "<i class=\"fas fa-trash\"></i>";
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn); // Append to list

  _Selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoList.appendChild(todoDiv); // Clear todo input value

  _Selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoInput.value = "";
}; // Listener for clicks to delete or check

var deleteCheck = function deleteCheck(e) {
  var item = e.target; // Delete todo

  if (item.classList[0] === "trash-btn") {
    var todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      return todo.remove();
    });
  } // Check mark


  if (item.classList[0] === "complete-btn") {
    var _todo = item.parentElement;

    _todo.classList.toggle("completed");
  }
}; // Filter Function

var filterTodo = function filterTodo(e) {
  var todos = _Selectors_js__WEBPACK_IMPORTED_MODULE_0__.todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;
    }
  });
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoInput": () => (/* binding */ todoInput),
/* harmony export */   "todoButton": () => (/* binding */ todoButton),
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "filterOption": () => (/* binding */ filterOption)
/* harmony export */ });
 // Selectors

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list");
var filterOption = document.querySelector(".filter-todo");

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Selectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





_Selectors_js__WEBPACK_IMPORTED_MODULE_2__.todoButton.addEventListener("click", _Functions_js__WEBPACK_IMPORTED_MODULE_1__.addTodo);
_Selectors_js__WEBPACK_IMPORTED_MODULE_2__.todoList.addEventListener("click", _Functions_js__WEBPACK_IMPORTED_MODULE_1__.deleteCheck);
_Selectors_js__WEBPACK_IMPORTED_MODULE_2__.filterOption.addEventListener("click", _Functions_js__WEBPACK_IMPORTED_MODULE_1__.filterTodo);
})();

/******/ })()
;