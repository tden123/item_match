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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    'Option 1': '',
    'Option 2': '',
    'Option 3': '',
    'Option 4': ''
  }),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      numOptions = _useState3[0],
      setNumOptions = _useState3[1];

  var handleAddOption = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (numOptions > 4) {
      setNumOptions(4), [];
    } else if (numOptions < 2) {
      setNumOptions(2), [];
    } else if (numOptions !== 4) {
      setNumOptions(numOptions + 1), [];
    }
  });
  var handleRemoveOption = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (numOptions > 4) {
      setNumOptions(4), [];
    } else if (numOptions < 2) {
      setNumOptions(2), [];
    } else if (numOptions !== 2) {
      setNumOptions(numOptions - 1), [];
    }
  });
  var handleQuestion = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (question) {
    return setQuestion(question);
  }, []);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (_event) {
    return setUrl('');
  }, []);

  var displayOptions = function displayOptions(opts) {
    return opts.map(function (item) {
      var optionNum = "Option ".concat(item);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        label: optionNum,
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
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, numOptions === 4 ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    disabled: true
  }, "Add Option") : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    onClick: handleAddOption
  }, "Add Option"), numOptions === 2 ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    secondary: true,
    disabled: true
  }, "Remove Option") : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    secondary: true,
    onClick: handleRemoveOption
  }, "Remove Option")), displayOptions(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.range(1, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(numOptions, 10) + 1)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_cof.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_meta.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false

})
//# sourceMappingURL=create.js.988bc14dba88f108e3c0.hot-update.js.map