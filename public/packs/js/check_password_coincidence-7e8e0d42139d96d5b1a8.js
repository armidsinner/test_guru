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

var Check_confirmation = /*#__PURE__*/function () {
  function Check_confirmation(first_element_to_compare_id, second_element_to_compare_id) {
    _classCallCheck(this, Check_confirmation);

    this.first_element_to_compare_id = void 0;
    this.second_element_to_compare_id = void 0;

    this.inform_abouy_nonconsidense = function (user_input, confirmation, match, notMatch) {
      match.add('hide');
      notMatch.remove('hide');
      user_input.classList.remove('border-green');
      user_input.classList.add('border-orange');
      confirmation.classList.remove('border-green');
      confirmation.classList.add('border-orange');
    };

    this.while_user_input_is_absent = function (user_input, confirmation, match, notMatch) {
      match.add('hide');
      notMatch.add('hide');
      user_input.classList.remove('border-orange');
      confirmation.classList.remove('border-orange');
    };

    this.first_element_to_compare_id = first_element_to_compare_id;
    this.second_element_to_compare_id = second_element_to_compare_id;
  }

  _createClass(Check_confirmation, [{
    key: "compare",
    value: function compare() {
      element_to_compare_with = this.first_element_to_compare_id;
      compering_element = this.second_element_to_compare_id;
      document.addEventListener('turbolinks:load', function () {
        var control = document.getElementById("check-coincidence");
        if (control) control.addEventListener('input', userInputCheck());
      });

      function userInputCheck() {
        var user_input = document.getElementById(element_to_compare_with);
        var confirmation = document.getElementById(compering_element);
        var match = document.querySelector('.octicon-check-circle').classList;
        var notMatch = document.querySelector('.octicon-alert').classList;

        if (confirmation.value) {
          if (user_input.value === confirmation.value) {
            this.inform_about_considense(user_input, confirmation, match, notMatch);
          } else {
            this.inform_abouy_nonconsidense(user_input, confirmation, match, notMatch);
          }
        } else {
          this.while_user_input_is_absent(user_input, confirmation, match, notMatch);
        }
      }
    }
  }, {
    key: "inform_about_considense",
    value: function inform_about_considense(user_input, confirmation, match, notMatch) {
      match.remove('hide');
      notMatch.add('hide');
      user_input.classList.add('border-green');
      user_input.classList.remove('border-orange');
      confirmation.classList.add('border-green');
      confirmation.classList.remove('border-orange');
    }
  }]);

  return Check_confirmation;
}();

var compare_passwords = new Check_confirmation('user_password', 'user_password_confirmation');
compare_passwords.compare();

/***/ })

/******/ });
//# sourceMappingURL=check_password_coincidence-7e8e0d42139d96d5b1a8.js.map