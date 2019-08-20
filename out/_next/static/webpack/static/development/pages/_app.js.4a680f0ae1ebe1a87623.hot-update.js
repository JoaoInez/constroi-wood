webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ui/Links.js":
/*!********************************!*\
  !*** ./components/ui/Links.js ***!
  \********************************/
/*! exports provided: LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Links__LinkButton",
  componentId: "sc-1lu3d9q-0"
})(["font-size:", ";margin:", ";padding:", ";background-color:", ";color:", ";border:2px solid ", ";border-radius:3px;cursor:pointer;transition:all 0.15s ease-in-out;&:hover{box-shadow:0 0 3px 2px ", ";}"], function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size;
  return size === "sm" ? "0.8rem" : size === "md" ? "1rem" : size === "lg" ? "1.5rem" : "1rem";
}, function (_ref2) {
  var _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? "initial" : _ref2$margin;
  return margin;
}, function (_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? "md" : _ref3$size;
  return size === "sm" ? "5px 10px" : size === "md" ? "5px 10px" : size === "lg" ? "8px 25px" : "5px 10px";
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$bgColor = _ref4.bgColor,
      bgColor = _ref4$bgColor === void 0 ? "blue" : _ref4$bgColor,
      _ref4$outline = _ref4.outline,
      outline = _ref4$outline === void 0 ? false : _ref4$outline;
  return outline ? "transparent" : theme[bgColor];
}, function (_ref5) {
  var theme = _ref5.theme,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? "blue" : _ref5$color;
  return theme[color];
}, function (_ref6) {
  var theme = _ref6.theme,
      _ref6$bgColor = _ref6.bgColor,
      bgColor = _ref6$bgColor === void 0 ? "blue" : _ref6$bgColor;
  return theme[bgColor];
}, function (_ref7) {
  var theme = _ref7.theme,
      color = _ref7.color;
  return theme[color];
});


/***/ }),

/***/ "./components/ui/index.js":
/*!********************************!*\
  !*** ./components/ui/index.js ***!
  \********************************/
/*! exports provided: Button, Row, Col, H, P, LinkButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons */ "./components/ui/Buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Buttons__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./components/ui/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Row"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Col"]; });

/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Links */ "./components/ui/Links.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _Links__WEBPACK_IMPORTED_MODULE_2__["LinkButton"]; });

/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/ui/Typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _Typography__WEBPACK_IMPORTED_MODULE_3__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _Typography__WEBPACK_IMPORTED_MODULE_3__["P"]; });






/***/ })

})
//# sourceMappingURL=_app.js.4a680f0ae1ebe1a87623.hot-update.js.map