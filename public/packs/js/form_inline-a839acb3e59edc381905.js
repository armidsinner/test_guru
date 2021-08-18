/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/form_inline.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/form_inline.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/form_inline.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/damir/test_guru/app/javascript/packs/form_inline.js: Unexpected keyword 'this'. (12:53)\n\n  10 |     for (let i = 0; i < controls.length; i++) {\n  11 |\n> 12 |       controls[i].addEventListener('click', function(this) { this.formInLineLinkHandler(controls[i]) } )\n     |                                                      ^\n  13 |     }\n  14 | //.preventDefault()\n  15 |     var errors = document.querySelector('.resource-errors')\n    at Parser._raise (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:816:17)\n    at Parser.raiseWithData (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:809:17)\n    at Parser.raise (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:770:17)\n    at Parser.checkReservedWord (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:12151:12)\n    at Parser.parseIdentifierName (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:12112:12)\n    at Parser.parseIdentifier (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:12084:23)\n    at Parser.parseBindingAtom (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10333:17)\n    at Parser.parseMaybeDefault (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10395:50)\n    at Parser.parseAssignableListItem (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10375:23)\n    at Parser.parseBindingList (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10367:24)\n    at Parser.parseFunctionParams (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:13276:24)\n    at Parser.parseFunction (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:13254:10)\n    at Parser.parseFunctionOrFunctionSent (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:11401:17)\n    at Parser.parseExprAtom (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:11227:21)\n    at Parser.parseExprSubscripts (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10881:23)\n    at Parser.parseUpdate (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10861:21)\n    at Parser.parseMaybeUnary (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10839:23)\n    at Parser.parseExprOps (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10696:23)\n    at Parser.parseMaybeConditional (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10670:23)\n    at Parser.parseMaybeAssign (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10633:21)\n    at /home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10595:39\n    at Parser.allowInAnd (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:12334:12)\n    at Parser.parseMaybeAssignAllowIn (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10595:17)\n    at Parser.parseExprListItem (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:12076:18)\n    at Parser.parseCallExpressionArguments (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:11085:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10992:29)\n    at Parser.parseSubscript (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10925:19)\n    at Parser.parseSubscripts (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10898:19)\n    at Parser.parseExprSubscripts (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10887:17)\n    at Parser.parseUpdate (/home/damir/test_guru/node_modules/@babel/parser/lib/index.js:10861:21)");

/***/ })

/******/ });
//# sourceMappingURL=form_inline-a839acb3e59edc381905.js.map