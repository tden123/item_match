webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Question = function Question() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([1]),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      numOptions = _useState3[0],
      setNumOptions = _useState3[1];

  var handleNumOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (option) {
    return setNumOptions(option);
  }, []);
  var handleQuestion = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (question) {
    return setQuestion(question);
  }, []);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (_event) {
    return setUrl('');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(numOptions);
    console.log(numOptions + 1);
    setOptions(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.range(1, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(numOptions, 10) + 1));
  }, [numOptions]);

  var displayOptions = function displayOptions(opts) {
    console.log(options);

    if (!opts) {
      return __jsx("div", null, "Loading...");
    }

    return opts.map(function (item) {
      var fullLabel = "Option ".concat(item);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        label: fullLabel,
        type: "text",
        value: '',
        onChange: function onChange() {},
        key: item
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    noValidate: true,
    onSubmit: handleSubmit
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: question,
    onChange: handleQuestion,
    label: "Question",
    type: "text",
    placeholder: "Which of the following do you prefer, etc"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: "Number of options",
    type: "number",
    max: "4",
    min: "1",
    value: numOptions,
    onChange: handleNumOptions
  }), displayOptions(options))));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=create.js.d23b4b461b9cf1824597.hot-update.js.map