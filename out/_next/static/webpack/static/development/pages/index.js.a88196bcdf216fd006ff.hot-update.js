webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/pages/index/ProjectCard.js":
/*!***********************************************!*\
  !*** ./components/pages/index/ProjectCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui */ "./components/ui/index.js");
var _jsxFileName = "/Users/joaoinez/Documents/Projects/ConstroiWood/components/pages/index/ProjectCard.js";




var WideCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectCard__WideCard",
  componentId: "sc-3mkt3l-0"
})(["border-radius:4px;overflow:hidden;box-shadow:0 2px 8px ", ";margin:20px 40px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.lightShadow;
});
var ProjectImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectCard__ProjectImage",
  componentId: "sc-3mkt3l-1"
})(["background-image:", ";background-repeat:no-repeat;background-size:cover;min-height:200px;min-width:300px;height:100%;width:100%;"], function (_ref2) {
  var url = _ref2.url;
  return url;
});
var ProjectContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectCard__ProjectContent",
  componentId: "sc-3mkt3l-2"
})(["padding:10px 40px;min-width:200px;"]);

var ProjectCard = function ProjectCard(_ref3) {
  var image = _ref3.image,
      title = _ref3.title,
      description = _ref3.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WideCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 1,
    md: 1,
    lg: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectImage, {
    url: "url(".concat(image, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 1,
    md: 2,
    lg: 2,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, description)))));
};

ProjectCard.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ })

})
//# sourceMappingURL=index.js.a88196bcdf216fd006ff.hot-update.js.map