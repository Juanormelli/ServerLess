/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst compile = async (data) => {\r\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"templates\", \"certificate.hbs\");\r\n    const html = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, \"utf-8\");\r\n    return handlebars__WEBPACK_IMPORTED_MODULE_5___default().compile(html)(data);\r\n};\r\nconst handle = async (event) => {\r\n    const { id, name, grade } = JSON.parse(event.body);\r\n    await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_4__.document.put({\r\n        TableName: \"users_certificates\",\r\n        Item: {\r\n            id,\r\n            name,\r\n            grade\r\n        }\r\n    }).promise();\r\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"templates\", \"selo.png\");\r\n    const medal = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(medalPath, \"base64\");\r\n    const data = {\r\n        date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format(\"DD/MM/YYYY\"),\r\n        grade,\r\n        id,\r\n        name,\r\n        medal\r\n    };\r\n    const content = await compile(data);\r\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().puppeteer.launch({\r\n        headless: true,\r\n        defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().defaultViewport),\r\n        executablePath: await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().executablePath)\r\n    });\r\n    const page = await browser.newPage();\r\n    await page.setContent(content);\r\n    const pdf = await page.pdf({\r\n        format: \"a4\",\r\n        landscape: true,\r\n        path: process.env.IS_OFFLINE ? \"certificate.pdf\" : null,\r\n        printBackground: true,\r\n        preferCSSPageSize: true\r\n    });\r\n    await browser.close();\r\n    return {\r\n        statusCode: 201,\r\n        body: JSON.stringify({\r\n            message: \"Certificate Created\"\r\n        }),\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcnRpZmljYXRlLy4vc3JjL2Z1bmN0aW9ucy9nZW5lcmF0ZUNlcnRpZmljYXRlLnRzP2E1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNocm9taXVtIGZyb20gXCJjaHJvbWUtYXdzLWxhbWJkYVwiXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIlxyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCJcclxuXHJcbmltcG9ydCB7ZG9jdW1lbnR9IGZyb20gXCIuLi91dGlscy9keW5hbW9kYkNsaWVudFwiXHJcbmltcG9ydCBoYW5kbGViYXJzIGZyb20gXCJoYW5kbGViYXJzXCJcclxuXHJcbmludGVyZmFjZSBJQ3JlYXRlQ2VydGlmaWNhdGV7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZ3JhZGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSVRlbXBsYXRle1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGdyYWRlOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICBtZWRhbDogc3RyaW5nO1xyXG5cclxufVxyXG5jb25zdCBjb21waWxlID0gYXN5bmMgKGRhdGE6IElUZW1wbGF0ZSk9PntcclxuICAgIGNvbnN0IGZpbGVQYXRoPXBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyY1wiLFwidGVtcGxhdGVzXCIsXCJjZXJ0aWZpY2F0ZS5oYnNcIiApXHJcblxyXG4gICAgY29uc3QgaHRtbCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKVxyXG5cclxuICAgIHJldHVybiBoYW5kbGViYXJzLmNvbXBpbGUoaHRtbCkoZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZSA9IGFzeW5jIChldmVudCk9PntcclxuXHJcbiAgICBjb25zdCB7aWQsIG5hbWUsIGdyYWRlfSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSkgYXMgSUNyZWF0ZUNlcnRpZmljYXRlO1xyXG5cclxuICAgIGF3YWl0IGRvY3VtZW50LnB1dCh7XHJcbiAgICAgICAgVGFibGVOYW1lOlwidXNlcnNfY2VydGlmaWNhdGVzXCIsXHJcbiAgICAgICAgSXRlbTp7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBncmFkZVxyXG4gICAgICAgIH1cclxuICAgIH0pLnByb21pc2UoKVxyXG4gICAgY29uc3QgbWVkYWxQYXRoPXBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyY1wiLFwidGVtcGxhdGVzXCIsXCJzZWxvLnBuZ1wiIClcclxuICAgIGNvbnN0IG1lZGFsID0gZnMucmVhZEZpbGVTeW5jKG1lZGFsUGF0aCwgXCJiYXNlNjRcIilcclxuICAgIGNvbnN0IGRhdGE6SVRlbXBsYXRlID0ge1xyXG5cclxuICAgICAgICBkYXRlOmRheWpzKCkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKSxcclxuICAgICAgICBncmFkZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG1lZGFsXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBjb21waWxlKGRhdGEpXHJcblxyXG4gICAgY29uc3QgYnJvd3NlciA9IGF3YWl0IGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xyXG4gICAgICAgIGhlYWRsZXNzOnRydWUsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdFZpZXdwb3J0OiBjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXHJcbiAgICAgICAgZXhlY3V0YWJsZVBhdGg6IGF3YWl0IGNocm9taXVtLmV4ZWN1dGFibGVQYXRoXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKVxyXG5cclxuICAgIGF3YWl0IHBhZ2Uuc2V0Q29udGVudChjb250ZW50KVxyXG5cclxuICAgIGNvbnN0IHBkZiA9IGF3YWl0IHBhZ2UucGRmKHtcclxuICAgICAgICBmb3JtYXQ6XCJhNFwiLFxyXG4gICAgICAgIGxhbmRzY2FwZTogdHJ1ZSxcclxuICAgICAgICBwYXRoOiBwcm9jZXNzLmVudi5JU19PRkZMSU5FID8gXCJjZXJ0aWZpY2F0ZS5wZGZcIiA6IG51bGwsXHJcbiAgICAgICAgcHJpbnRCYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIHByZWZlckNTU1BhZ2VTaXplOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGF3YWl0IGJyb3dzZXIuY2xvc2UoKVxyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6MjAxLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDZXJ0aWZpY2F0ZSBDcmVhdGVkXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst option = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline() ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(option) : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXJ0aWZpY2F0ZS8uL3NyYy91dGlscy9keW5hbW9kYkNsaWVudC50cz80NTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RHluYW1vREJ9IGZyb20gXCJhd3Mtc2RrXCJcclxuXHJcbmNvbnN0IG9wdGlvbj0ge1xyXG4gICAgcmVnaW9uOlwibG9jYWxob3N0XCIsXHJcbiAgICBlbmRwb2ludDpcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiXHJcblxyXG59XHJcblxyXG5jb25zdCBpc09mZmxpbmUgPSAoKT0+e1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LklTX09GRkxJTkU7XHJcbn1cclxuXHJcblxyXG5jb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpID8gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KG9wdGlvbik6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpXHJcblxyXG5cclxuZXhwb3J0IHtkb2N1bWVudH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;