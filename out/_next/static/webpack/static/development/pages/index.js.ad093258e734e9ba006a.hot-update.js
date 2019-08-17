webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_icons_boxicons_regular_Bath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/boxicons-regular/Bath */ "./node_modules/styled-icons/boxicons-regular/Bath/Bath.esm.js");
/* harmony import */ var styled_icons_boxicons_regular_PaintRoll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/boxicons-regular/PaintRoll */ "./node_modules/styled-icons/boxicons-regular/PaintRoll/PaintRoll.esm.js");
/* harmony import */ var styled_icons_boxicons_regular_Wrench__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/boxicons-regular/Wrench */ "./node_modules/styled-icons/boxicons-regular/Wrench/Wrench.esm.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typography */ "./components/Typography.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Buttons */ "./components/Buttons.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.js");
var _jsxFileName = "/Users/joaoinez/Documents/Projects/ConstroiWood/pages/index.js";








var ImageSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__ImageSection",
  componentId: "sc-1i9ybb1-0"
})(["height:calc(100vh - 73px);position:relative;background-color:black;"]);
var ImageBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ImageBackground",
  componentId: "sc-1i9ybb1-1"
})(["background-image:url(\"/static/stock-const-1.jpg\");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;position:absolute;width:100%;height:100%;opacity:0.8;"]);
var ImageContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ImageContent",
  componentId: "sc-1i9ybb1-2"
})(["position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"]).withConfig({
  displayName: "pages__Title",
  componentId: "sc-1i9ybb1-3"
})(["font-size:2.6rem;"]);
var ServicesSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__ServicesSection",
  componentId: "sc-1i9ybb1-4"
})(["display:flex;flex-direction:column;align-items:center;padding:20px 0 50px 0;"]);
var WrenchIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(styled_icons_boxicons_regular_Wrench__WEBPACK_IMPORTED_MODULE_4__["Wrench"]).withConfig({
  displayName: "pages__WrenchIcon",
  componentId: "sc-1i9ybb1-5"
})(["width:50px;height:auto;"]);
var PaintRollIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(styled_icons_boxicons_regular_PaintRoll__WEBPACK_IMPORTED_MODULE_3__["PaintRoll"]).withConfig({
  displayName: "pages__PaintRollIcon",
  componentId: "sc-1i9ybb1-6"
})(["width:50px;height:auto;"]);
var BathIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(styled_icons_boxicons_regular_Bath__WEBPACK_IMPORTED_MODULE_2__["Bath"]).withConfig({
  displayName: "pages__BathIcon",
  componentId: "sc-1i9ybb1-7"
})(["width:50px;height:auto;"]);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].hr.withConfig({
  displayName: "pages__Divider",
  componentId: "sc-1i9ybb1-8"
})(["border:1px solid ", ";width:", ";margin:", ";"], function (_ref) {
  var theme = _ref.theme,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "grey" : _ref$color;
  return theme[color];
}, function (_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? "100%" : _ref2$width;
  return width;
}, function (_ref3) {
  var _ref3$margin = _ref3.margin,
      margin = _ref3$margin === void 0 ? "10px 0" : _ref3$margin;
  return margin;
});
var VerticalDivider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].hr.withConfig({
  displayName: "pages__VerticalDivider",
  componentId: "sc-1i9ybb1-9"
})(["border:1px solid ", ";width:0;height:", ";margin:", ";"], function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "grey" : _ref4$color;
  return theme[color];
}, function (_ref5) {
  var _ref5$height = _ref5.height,
      height = _ref5$height === void 0 ? "100px" : _ref5$height;
  return height;
}, function (_ref6) {
  var _ref6$margin = _ref6.margin,
      margin = _ref6$margin === void 0 ? "10px auto" : _ref6$margin;
  return margin;
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Card",
  componentId: "sc-1i9ybb1-10"
})(["margin:30px 10px;padding:20px 10px;display:flex;flex-direction:column;align-items:center;box-shadow:0 2px 8px #f0f1f2;border-radius:0 6px 6px 6px;overflow:hidden;min-width:250px;max-width:300px;"]);
var ProjectsSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__ProjectsSection",
  componentId: "sc-1i9ybb1-11"
})(["display:flex;flex-direction:column;align-items:center;padding:20px 0 50px 0;"]);
var ProjectImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ProjectImage",
  componentId: "sc-1i9ybb1-12"
})(["background-image:", ";background-repeat:no-repeat;background-size:cover;min-height:200px;min-width:300px;height:100%;width:100%;"], function (_ref7) {
  var url = _ref7.url;
  return url;
});
var WideCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__WideCard",
  componentId: "sc-1i9ybb1-13"
})(["border-radius:4px;overflow:hidden;box-shadow:0 2px 8px #f0f1f2;margin:20px;"]);
var ProjectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ProjectWrapper",
  componentId: "sc-1i9ybb1-14"
})(["padding:10px 40px;min-width:200px;"]);
var AboutSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__AboutSection",
  componentId: "sc-1i9ybb1-15"
})(["position:relative;background-color:black;height:200px;"]);
var AboutBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__AboutBackground",
  componentId: "sc-1i9ybb1-16"
})(["background-image:url(\"/static/stock-carp-1.jpg\");background-repeat:no-repeat;background-size:cover;background-position:center;position:absolute;width:100%;height:100%;opacity:0.8;"]);
var AboutContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__AboutContent",
  componentId: "sc-1i9ybb1-17"
})(["position:absolute;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);

var home = function home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageBackground, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Sample title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
    width: "100px",
    color: "white",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    color: "white",
    align: "center",
    width: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    color: "white",
    size: "lg",
    margin: "30px 0",
    bgColor: "white",
    outline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Contactos"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Servi\xE7os"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrenchIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaintRollIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BathIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutBackground, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    color: "white",
    width: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectsSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WideCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 1,
    md: 1,
    lg: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectImage, {
    url: "url(/static/eva-faro.jpeg)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 1,
    md: 2,
    lg: 2,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Hotel Eva"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WideCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 1,
    md: 1,
    lg: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectImage, {
    url: "url(/static/hotel-tivoli.jpg)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    sm: 1,
    md: 2,
    lg: 2,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Hotel Tivoli"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ })

})
//# sourceMappingURL=index.js.ad093258e734e9ba006a.hot-update.js.map