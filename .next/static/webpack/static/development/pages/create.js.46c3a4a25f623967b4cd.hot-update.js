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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Question = function Question() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    'Option 1': '',
    'Option 2': '',
    'Option 3': '',
    'Option 4': ''
  }),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2),
      numOptions = _useState3[0],
      setNumOptions = _useState3[1];

  var handleNumOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var optionsLength = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options).length;

    if (optionsLength > 4) {
      setNumOptions(4), [];
    } else if (optionsLength < 2) {
      setNumOptions(2), [];
    } else {
      console.log(optionsLength);
      setNumOptions(optionsLength + 1), [];
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

    return opts.map(function (item) {
      var optionName = "Option ".concat(item);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        label: optionName,
        name: optionName,
        type: "text",
        value: options[optionName],
        onChange: function onChange(e) {
          return console.log(e);
        },
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
    min: "2",
    value: numOptions,
    onChange: handleNumOptions
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    primary: true,
    onClick: handleNumOptions
  }, "Add Option"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    secondary: true
  }, "Remove Option")), displayOptions(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.range(1, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(numOptions, 10) + 1)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=create.js.46c3a4a25f623967b4cd.hot-update.js.map