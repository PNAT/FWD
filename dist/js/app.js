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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sal.js/dist/sal.js":
/*!*****************************************!*\
  !*** ./node_modules/sal.js/dist/sal.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i="Sal was not initialised! Probably it is used in SSR.",a="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},l=[],c=null,u=function(e){e&&e!==s&&(s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s,{},e))},f=function(e){e.classList.remove(s.animateClassName)},d=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},b=function(){document.body.classList.add(s.disabledClassName)},p=function(){c.disconnect(),c=null},m=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},y=function(e,t){e.forEach((function(e){e.intersectionRatio>=s.threshold?(!function(e){e.target.classList.add(s.animateClassName),d(s.enterEventName,e)}(e),s.once&&t.unobserve(e.target)):s.once||function(e){f(e.target),d(s.exitEventName,e)}(e)}))},v=function(){b(),p()},O=function(){document.body.classList.remove(s.disabledClassName),c=new IntersectionObserver(y,{rootMargin:s.rootMargin,threshold:s.threshold}),(l=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}))).forEach((function(e){return c.observe(e)}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(s.selector)).forEach(f),u(e),O()};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(u(e),"undefined"==typeof window)return console.warn(i),{elements:l,disable:v,enable:O,reset:g};if(!window.IntersectionObserver)throw b(),Error(a);return m()?b():O(),{elements:l,disable:v,enable:O,reset:g}}},function(e,t,n){}]).default}));
//# sourceMappingURL=sal.js.map

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header-scroll */ "./src/js/modules/header-scroll.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navigation */ "./src/js/modules/navigation.js");
/* harmony import */ var _modules_contact_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact-form */ "./src/js/modules/contact-form.js");
/* harmony import */ var _modules_contact_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_contact_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_copy_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/copy-email */ "./src/js/modules/copy-email.js");
/* harmony import */ var _modules_copy_email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_copy_email__WEBPACK_IMPORTED_MODULE_4__);






(function () {
  _modules_header_scroll__WEBPACK_IMPORTED_MODULE_1__["headerScroll"].init();
  _modules_navigation__WEBPACK_IMPORTED_MODULE_2__["navigation"].init();
  sal_js__WEBPACK_IMPORTED_MODULE_0___default()();
})();

/***/ }),

/***/ "./src/js/modules/contact-form.js":
/*!****************************************!*\
  !*** ./src/js/modules/contact-form.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var FORM_CONSTRAINTS = {
  name: {
    required: "Name can't be empty"
  },
  message: {
    required: "Message can't be empty"
  },
  "reply-to": {
    required: "Email can't be empty",
    valid: "Hook us up with a valid email"
  }
};
window.addEventListener("DOMContentLoaded", function () {
  var FORM = document.getElementById("contact-form_js");
  var FORM_BTN = document.getElementById("contact-form-submit_js");
  var FORM_STATUS = document.getElementById("contact-form-status_js");

  function success() {
    FORM.reset();
    FORM_BTN.style = "display: none ";
    FORM_STATUS.innerHTML = FORM.dataset.success;
  }

  function error() {
    FORM_STATUS.innerHTML = FORM.dataset.error;
  }

  FORM.addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = event.target.checkValidity();

    if (isValid) {
      var data = new FormData(FORM);
      ajax(FORM.method, FORM.action, data, success, error);
    } else {
      handleError(event.target);
    }
  });
});

function showInputError(el, message) {
  var formGroup = el.closest(".form-group");
  var errorEl = formGroup && formGroup.querySelector(".form-error");
  if (!errorEl) return;
  el.classList.add("has-error");
  errorEl.textContent = message;
}

function handleError(el) {
  var formInputs = el.elements;

  function checkValididity(el) {
    if (el.validity.valid && el.value) {
      showInputError(el, "");
      el.classList.remove("has-error");
    } else if (el.validity.valueMissing) {
      showInputError(el, FORM_CONSTRAINTS[el.name].required);
    } else if (el.validity.typeMismatch) {
      showInputError(el, FORM_CONSTRAINTS[el.name].valid);
    }
  }

  _toConsumableArray(formInputs).forEach(function (el) {
    checkValididity(el);
    el.addEventListener("input", function () {
      checkValididity(el);
    });
  });
}

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };

  xhr.send(data);
}

/***/ }),

/***/ "./src/js/modules/copy-email.js":
/*!**************************************!*\
  !*** ./src/js/modules/copy-email.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var copyEmailLinks = document.querySelectorAll(".email_js"); // Copy email to clipboard

  copyEmailLinks.forEach(function (item) {
    item.onclick = function (e) {
      e.preventDefault();
      copyToClipboard(e.target.dataset.e);
      e.target.classList.add("is-copied");
      setTimeout(function () {
        e.target.classList.remove("is-copied");
      }, 1000);
    };
  }); // Copy-paste straight from the internets 🙏

  var copyToClipboard = function copyToClipboard(str) {
    var el = document.createElement("textarea"); // Create a <textarea> element

    el.value = str; // Set its value to the string that you want copied

    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof

    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible

    document.body.appendChild(el); // Append the <textarea> element to the HTML document

    var selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
    ? document.getSelection().getRangeAt(0) // Store selection if found
    : false; // Mark as false to know no selection existed before

    el.select(); // Select the <textarea> content

    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)

    document.body.removeChild(el); // Remove the <textarea> element

    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document

      document.getSelection().addRange(selected); // Restore the original selection
    }
  };
})();

/***/ }),

/***/ "./src/js/modules/header-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/header-scroll.js ***!
  \*****************************************/
/*! exports provided: headerScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerScroll", function() { return headerScroll; });
var SCROLL_UP_CLASS = "is-scrolling-up";
var SCROLL_DOWN_CLASS = "is-scrolling-down";
var headerScroll = {
  lastScroll: 0,
  detectScroll: function detectScroll() {
    var currentScroll = window.pageYOffset;

    if (currentScroll == 0) {
      document.body.classList.remove(SCROLL_UP_CLASS);
      return;
    }

    if (currentScroll > this.lastScroll && !document.body.classList.contains(SCROLL_DOWN_CLASS)) {
      document.body.classList.remove(SCROLL_UP_CLASS);
      document.body.classList.add(SCROLL_DOWN_CLASS);
    } else if (currentScroll < this.lastScroll && document.body.classList.contains(SCROLL_DOWN_CLASS)) {
      document.body.classList.remove(SCROLL_DOWN_CLASS);
      document.body.classList.add(SCROLL_UP_CLASS);
    }

    this.lastScroll = currentScroll;
  },
  init: function init() {
    window.addEventListener("scroll", this.detectScroll);
  }
};

/***/ }),

/***/ "./src/js/modules/navigation.js":
/*!**************************************!*\
  !*** ./src/js/modules/navigation.js ***!
  \**************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var ACTIVE_CLASS = "is-active";
var SECTION_CLASS = ".section";
var OPTIONS = {
  threshold: 0.55
};
var navigation = {
  changeNav: function changeNav(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        var activeEl = document.querySelector(".".concat(ACTIVE_CLASS));
        if (activeEl) activeEl.classList.remove(ACTIVE_CLASS);
        var id = entry.target.getAttribute("id");
        var idEl = document.querySelector("[href=\"#".concat(id, "\"]"));
        if (idEl) idEl.classList.add(ACTIVE_CLASS);
      }
    });
  },
  init: function init() {
    var observer = new IntersectionObserver(this.changeNav, OPTIONS);
    var sections = document.querySelectorAll(SECTION_CLASS);
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
};

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\_freelance\gofwd.ca\FWD\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! E:\_freelance\gofwd.ca\FWD\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

/******/ });