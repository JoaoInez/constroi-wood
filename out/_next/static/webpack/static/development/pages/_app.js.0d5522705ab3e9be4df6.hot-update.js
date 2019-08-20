webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ui/Buttons.js":
/*!**********************************!*\
  !*** ./components/ui/Buttons.js ***!
  \**********************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Buttons__Button",
  componentId: "sc-167292g-0"
})(["font-size:", ";margin:", ";padding:", ";background-color:", ";color:", ";border:2px solid ", ";border-radius:3px;box-shadow:0px 8px 10px 2px ", ";cursor:pointer;transition:all 0.15s ease-in-out;&:hover{color:", ";background-color:transparent;box-shadow:", ";}"], function (_ref) {
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
  var theme = _ref7.theme;
  return theme.blue;
}, function (_ref8) {
  var theme = _ref8.theme,
      outline = _ref8.outline,
      color = _ref8.color,
      bgColor = _ref8.bgColor;
  return !outline ? theme[bgColor] : theme[color];
}, function (_ref9) {
  var theme = _ref9.theme,
      outline = _ref9.outline,
      color = _ref9.color;
  return !outline ? "none" : "0 0 3px 2px ".concat(theme[color]);
});


/***/ })

})
//# sourceMappingURL=_app.js.0d5522705ab3e9be4df6.hot-update.js.map