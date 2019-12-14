webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Create = function Create() {
  var _useState = useState(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var handleSubmit = useCallback(function (_event) {
    return setUrl('');
  }, []);
  var handleUrlChange = useCallback(function (value) {
    return setUrl(value);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    noValidate: true,
    onSubmit: handleSubmit
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: url,
    onChange: handleUrlChange,
    label: "App URL",
    type: "url"
  }), __jsx(Button, {
    submit: true
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ })

})
//# sourceMappingURL=create.js.b6d485a59a5a3fb32bac.hot-update.js.map