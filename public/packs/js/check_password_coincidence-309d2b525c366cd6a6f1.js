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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/check_password_coincidence.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/check_password_coincidence.js":
/*!************************************************************!*\
  !*** ./app/javascript/packs/check_password_coincidence.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

var _first_element_to_compare_id = /*#__PURE__*/_classPrivateFieldLooseKey("first_element_to_compare_id");

var _second_element_to_compare_id = /*#__PURE__*/_classPrivateFieldLooseKey("second_element_to_compare_id");

var _check_type = /*#__PURE__*/_classPrivateFieldLooseKey("check_type");

var Check_coincidence = /*#__PURE__*/function () {
  function Check_coincidence(first_element_to_compare_id, second_element_to_compare_id, check_type) {
    _classCallCheck(this, Check_coincidence);

    Object.defineProperty(this, _first_element_to_compare_id, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _second_element_to_compare_id, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _check_type, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _first_element_to_compare_id)[_first_element_to_compare_id] = first_element_to_compare_id;
    _classPrivateFieldLooseBase(this, _second_element_to_compare_id)[_second_element_to_compare_id] = second_element_to_compare_id;
    _classPrivateFieldLooseBase(this, _check_type)[_check_type] = check_type;
  }

  _createClass(Check_coincidence, [{
    key: "compare",
    value: function compare() {
      id1 = _classPrivateFieldLooseBase(this, _first_element_to_compare_id)[_first_element_to_compare_id];
      id2 = _classPrivateFieldLooseBase(this, _second_element_to_compare_id)[_second_element_to_compare_id];
      check_type = _classPrivateFieldLooseBase(this, _check_type)[_check_type];
      document.addEventListener('turbolinks:load', function () {
        var control = document.getElementById(check_type);

        if (control) {
          control.addEventListener('input', passwordCheck);
        }
      });

      function passwordCheck() {
        var password = document.getElementById(id1);
        var confirmation = document.getElementById(id2);
        var match = document.querySelector('.octicon-check-circle').classList;
        var notMatch = document.querySelector('.octicon-alert').classList;

        if (confirmation.value) {
          if (password.value === confirmation.value) {
            match.remove('hide');
            notMatch.add('hide');
            password.classList.add('border-green');
            password.classList.remove('border-orange');
            confirmation.classList.add('border-green');
            confirmation.classList.remove('border-orange');
          } else {
            match.add('hide');
            notMatch.remove('hide');
            password.classList.remove('border-green');
            password.classList.add('border-orange');
            confirmation.classList.remove('border-green');
            confirmation.classList.add('border-orange');
          }
        } else {
          match.add('hide');
          notMatch.add('hide');
          password.classList.remove('border-orange');
          confirmation.classList.remove('border-orange');
        }
      }
    }
  }]);

  return Check_coincidence;
}();

var compare_passwords = new Check_coincidence('user_password', 'user_password_confirmation', "check-coincidence");
compare_passwords.compare();

/***/ })

/******/ });
//# sourceMappingURL=check_password_coincidence-309d2b525c366cd6a6f1.js.map