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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Question = function Question() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    name: 'Option 1',
    value: '',
    items: []
  }, {
    name: 'Option 2',
    value: '',
    items: []
  }, {
    name: 'Option 3',
    value: '',
    items: []
  }, {
    name: 'Option 4',
    value: '',
    items: []
  }]),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      numOptions = _useState3[0],
      setNumOptions = _useState3[1];

  var handleNumOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (option) {
    if (option > 4) {
      setNumOptions(4), [];
    } else {
      setNumOptions(option), [];
    }
  });
  var handleQuestion = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (question) {
    return setQuestion(question);
  }, []);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (_event) {
    return setUrl('');
  }, []);

  var displayOptions = function displayOptions(opts) {
    if (!opts) {
      return __jsx("div", null, "Loading...");
    }

    console.log(options);

    var handleChange = function handleChange(e) {
      console.log(e);
      setOptions([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options), [{
        name: e.target.name,
        value: e.target.value,
        items: []
      }]));
    };

    return opts.map(function (item) {
      var optionName = "Option ".concat(item);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        label: optionName,
        name: optionName,
        type: "text",
        value: '',
        onChange: handleChange,
        key: item
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    noValidate: true,
    onSubmit: handleSubmit
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    value: question,
    onChange: handleQuestion,
    label: "Question",
    type: "text",
    placeholder: "Which of the following do you prefer, etc"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Number of options",
    type: "number",
    maxLength: "1",
    max: "4",
    min: "1",
    value: numOptions,
    onChange: handleNumOptions
  }), displayOptions(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.range(1, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(numOptions, 10) + 1)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=create.js.20eb8762de4fa7459c01.hot-update.js.map