webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ui/Section.js":
/*!**********************************!*\
  !*** ./components/ui/Section.js ***!
  \**********************************/
/*! exports provided: Section, SectionImage, SectionContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionImage", function() { return SectionImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContent", function() { return SectionContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Section",
  componentId: "sc-1sqm0ty-0"
})(["position:", ";display:", ";flex-direction:column;align-items:center;padding:", ";height:", ";background-color:", ";"], function (_ref) {
  var _ref$relative = _ref.relative,
      relative = _ref$relative === void 0 ? false : _ref$relative;
  return relative ? "relative" : "initial";
}, function (_ref2) {
  var _ref2$noFlex = _ref2.noFlex,
      noFlex = _ref2$noFlex === void 0 ? false : _ref2$noFlex;
  return noFlex ? "initial" : "flex";
}, function (_ref3) {
  var _ref3$padding = _ref3.padding,
      padding = _ref3$padding === void 0 ? "50px 20px" : _ref3$padding;
  return padding;
}, function (_ref4) {
  var _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? "initial" : _ref4$height;
  return height;
}, function (_ref5) {
  var theme = _ref5.theme,
      _ref5$bgColor = _ref5.bgColor,
      bgColor = _ref5$bgColor === void 0 ? "white" : _ref5$bgColor;
  return theme[bgColor];
});
var SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Section__SectionImage",
  componentId: "sc-1sqm0ty-1"
})(["background-image:url(", ");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:center;position:absolute;width:100%;height:100%;opacity:0.8;"], function (_ref6) {
  var url = _ref6.url;
  return url;
});
var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Section__SectionContent",
  componentId: "sc-1sqm0ty-2"
})(["position:absolute;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;"]);


/***/ }),

/***/ "./components/ui/index.js":
/*!********************************!*\
  !*** ./components/ui/index.js ***!
  \********************************/
/*! exports provided: Button, Row, Col, H, P, Section, SectionImage, SectionContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons */ "./components/ui/Buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Buttons__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./components/ui/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Row"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Col"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/ui/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_2__["Section"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionImage", function() { return _Section__WEBPACK_IMPORTED_MODULE_2__["SectionImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionContent", function() { return _Section__WEBPACK_IMPORTED_MODULE_2__["SectionContent"]; });

/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ "./components/ui/Typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _Typography__WEBPACK_IMPORTED_MODULE_3__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _Typography__WEBPACK_IMPORTED_MODULE_3__["P"]; });






/***/ })

})
//# sourceMappingURL=index.js.c777239c17b30b93821b.hot-update.js.map