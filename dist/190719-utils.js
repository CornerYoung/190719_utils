(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n\r\nfunction map (array, callback) {\r\n  const arr = []\r\n  // 遍历当前数组每个元素, 调用callback得到一个结果数据, 添加arr\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction reduce (array,callback, initValue) {\r\n  // 结果为初始值\r\n  let total = initValue\r\n  // 遍历当前数组每个元素, 调用callback得到一个累加的结果数据\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    total = callback(total, element, index)\r\n  }\r\n\r\n  // 返回结果\r\n  return total\r\n}  \r\n\r\nfunction filter (array,callback) {\r\n  const arr = []\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 将当前element添加到arr\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      arr.push(element)\r\n    }\r\n  }\r\n  return arr\r\n}  \r\n\r\nfunction find (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 返回当前元素\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return element\r\n    }\r\n  }\r\n  return undefined\r\n}  \r\n\r\nfunction findIndex (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 返回当前元素的下标\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}  \r\n\r\nfunction every (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 一旦是false, 返回false\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}  \r\n\r\nfunction some (array,callback) {\r\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 一旦是true, 返回true\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element, index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}  \n\n//# sourceURL=webpack://aUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply (fn, obj, args) {\r\n  // 处理obj是undefined或者null的情况\r\n  if (obj===undefined || obj===null) {\r\n    obj = window\r\n  }\r\n\r\n  // 给obj添加一个方法: tempFn: this\r\n  obj.tempFn = fn\r\n  // 调用obj的tempFn方法, 传入rags参数, 得到返回值\r\n  const result = obj.tempFn(...args)\r\n  // 删除obj上的temFn\r\n  delete obj.tempFn\r\n  // 返回方法的返回值\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction bind (fn,obj, ...args) {\r\n  // 返回一个新函数\r\n  return (...args2) => {\r\n    // 调用原来函数, 指定this为obj, 参数列表由args和args2依次组成\r\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn, obj, ...args, ...args2)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\nfunction call (fn, obj, ...args) {\r\n  // console.log('call()')\r\n  // 执行函数\r\n  // this(...args)\r\n\r\n  // 处理obj是undefined或者null的情况\r\n  if (obj===undefined || obj===null) {\r\n    obj = window\r\n  }\r\n\r\n  // 给obj添加一个方法: tempFn: this\r\n  obj.tempFn = fn\r\n  // 调用obj的tempFn方法, 传入rags参数, 得到返回值\r\n  const result = obj.tempFn(...args)\r\n  // 删除obj上的temFn\r\n  delete obj.tempFn\r\n  // 返回方法的返回值\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* \r\n用来返回防抖函数的工具函数\r\n*/\r\nfunction debounce(callback, delay) {\r\n  return function (event) {\r\n\r\n    // 如果上次事件还没有真正处理, 取消它\r\n    // if (callback.timeoutId) { // 会查找原型链\r\n    if (callback.hasOwnProperty('timeoutId')) { // 不会查找原型链\r\n      // 清除\r\n      clearTimeout(callback.timeoutId)\r\n    }\r\n\r\n    // 发事件发生指定事件后才调用处理事件的回调函数\r\n    // 启动定时器, 只是准备真正处理\r\n    callback.timeoutId = setTimeout(() => {\r\n      // 正在处理事件\r\n      callback.call(this, event)\r\n      // 删除准备处理的标记\r\n      delete callback.timeoutId\r\n    }, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* \r\n用来返回节流函数的工具函数\r\n*/\r\nfunction throttle(callback, delay) {\r\n  let pre = 0 // 默认值不要是Date.now() ==> 第1次事件立即调用\r\n  return function (event) { // 节流函数/真正的事件回调函数   this是发生事件的标签\r\n    console.log('事件 throttle')\r\n    const current = Date.now()\r\n    if (current - pre > delay) { // 只有离上一次调用callback的时间差大于delay\r\n      // 调用真正处理事件的函数, this是事件源, 参数是event\r\n      callback.call(this, event)\r\n      // 记录此次调用的时间\r\n      pre = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: apply, call, bind, throttle, debounce, map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_0__[\"apply\"]; });\n\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* \r\n入口js\r\n向外暴露工具函数\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ })

/******/ });
});