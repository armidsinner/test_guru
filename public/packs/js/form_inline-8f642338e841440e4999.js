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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EditTitle = /*#__PURE__*/function () {
  function EditTitle(id) {
    _classCallCheck(this, EditTitle);

    this.id = id;
  }

  _createClass(EditTitle, [{
    key: "edit_title",
    value: function edit_title() {
      var _this = this;

      document.addEventListener('turbolinks:load', function () {
        return _this.set_controls();
      });
    }
  }, {
    key: "set_controls",
    value: function set_controls() {
      var _this2 = this;

      var controls = document.querySelectorAll('.form-inline-link');

      if (controls.length) {
        var _loop = function _loop(i) {
          controls[i].addEventListener('click', function () {
            return _this2.formInLineLinkHandler(controls[i]);
          });
        };

        for (var i = 0; i < controls.length; i++) {
          _loop(i);
        }
      }

      var errors = document.querySelector('.resource-errors');

      if (errors) {
        var resourceId = errors.dataset.resourceId;
        this.formInLineHandler(resourceId);
      }
    }
  }, {
    key: "formInLineLinkHandler",
    value: function formInLineLinkHandler(event) {
      (function () {
        return event.preventDefault();
      });

      console.log(event);
      var testId = event.id;
      console.log(document.querySelector('.form-inline-link[data-test-id="' + testId + '"]'));
      this.formInLineHandler(this);
    }
  }, {
    key: "formInLineHandler",
    value: function formInLineHandler(event) {
      var testId = event.id;
      var link = document.querySelector('.form-inline-link[data-test-id="' + testId + '"]');
      var formInLine = document.querySelector('.form-inline[data-test-id="' + testId + '"]');
      var testTitle = document.querySelector('.test-title[data-test-id="' + testId + '"]');

      if (formInLine) {
        if (formInLine.classList.contains('hide')) {
          testTitle.classList.add('hide');
          formInLine.classList.remove('hide');
          link.textContent = 'Отмена';
        } else {
          testTitle.classList.remove('hide');
          formInLine.classList.add('hide');
          link.textContent = 'Редактировать название теста';
        }
      }
    }
  }]);

  return EditTitle;
}();

e1 = new EditTitle(1);
e1.edit_title();

/***/ })

/******/ });
//# sourceMappingURL=form_inline-8f642338e841440e4999.js.map