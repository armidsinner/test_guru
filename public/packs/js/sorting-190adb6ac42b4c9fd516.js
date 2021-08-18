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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/sorting.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/sorting.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/sorting.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

var _id = /*#__PURE__*/_classPrivateFieldLooseKey("id");

var Sorting = /*#__PURE__*/function () {
  function Sorting(id) {
    _classCallCheck(this, Sorting);

    Object.defineProperty(this, _id, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _id)[_id] = id;
  }

  _createClass(Sorting, [{
    key: "sort_table",
    value: function sort_table() {
      document.addEventListener('turbolinks:load', function () {
        var control = document.querySelector('.sort-by-title');

        if (control) {
          control.addEventListener('click', sortRowsByTitle);
        }
      });

      function sortRowsByTitle() {
        var table = document.getElementById(_classPrivateFieldLooseBase(this, _id)[_id]);
        var rows = table.querySelectorAll('tr');
        var sortedRows = [];

        for (var i = 1; i < rows.length; i++) {
          sortedRows.push(rows[i]);
        }

        var arrowUp = this.querySelector('.octicon-arrow-up');
        var arrowDown = this.querySelector('.octicon-arrow-down');

        if (this.querySelector('.octicon-arrow-up').classList.contains('hide')) {
          sortedRows.sort(compareRowsAsc);
          this.querySelector('.octicon-arrow-up').classList.remove('hide');
          this.querySelector('.octicon-arrow-down').classList.add('hide');
        } else {
          sortedRows.sort(compareRowsDesc);
          this.querySelector('.octicon-arrow-up').classList.add('hide');
          this.querySelector('.octicon-arrow-down').classList.remove('hide');
        }

        var sortedTable = document.createElement('table');
        sortedTable.setAttribute('id', 'table');
        sortedTable.appendChild(rows[0]);

        for (var _i = 0; _i < sortedRows.length; _i++) {
          sortedTable.appendChild(sortedRows[_i]);
        }

        table.parentNode.replaceChild(sortedTable, table);
      }

      function compareRowsAsc(row1, row2) {
        var testTitle1 = row1.querySelector('td').textContent;
        var testTitle2 = row2.querySelector('td').textContent;

        if (testTitle1 < testTitle2) {
          return -1;
        }

        if (testTitle1 > testTitle2) {
          return 1;
        }

        return 0;
      }

      function compareRowsDesc(row1, row2) {
        var testTitle1 = row1.querySelector('td').textContent;
        var testTitle2 = row2.querySelector('td').textContent;

        if (testTitle1 < testTitle2) {
          return 1;
        }

        if (testTitle1 > testTitle2) {
          return -1;
        }

        return 0;
      }
    }
  }]);

  return Sorting;
}();

var sorted_table = new Sorting('table');
sorted_table.sort_table();

/***/ })

/******/ });
//# sourceMappingURL=sorting-190adb6ac42b4c9fd516.js.map