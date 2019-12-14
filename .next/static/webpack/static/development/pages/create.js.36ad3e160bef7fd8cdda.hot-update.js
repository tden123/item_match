webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Question = function Question() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var handleOptions = useCallback(function (option) {
    return setOptions(option);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: question,
    onChange: function onChange(q) {
      return setQuestion(q);
    },
    label: "Question",
    type: "text",
    placeholder: "Which of the following do you prefer, etc"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Number of options",
    type: "number",
    value: options,
    onChange: handleOptions
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=create.js.36ad3e160bef7fd8cdda.hot-update.js.map