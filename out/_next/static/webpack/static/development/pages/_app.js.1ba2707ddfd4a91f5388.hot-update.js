webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/shared/Nav.js":
/*!**********************************!*\
  !*** ./components/shared/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/fa-solid/Hammer */ "./node_modules/styled-icons/fa-solid/Hammer/Hammer.esm.js");
/* harmony import */ var styled_icons_octicons_PrimitiveDot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/octicons/PrimitiveDot */ "./node_modules/styled-icons/octicons/PrimitiveDot/PrimitiveDot.esm.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui */ "./components/ui/index.js");
var _jsxFileName = "/Users/joaoinez/Documents/Projects/ConstroiWood/components/shared/Nav.js";






var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "Nav__Navbar",
  componentId: "sc-1w6a0ie-0"
})(["position:fixed;width:100%;top:0;box-shadow:0 2px 8px ", ";z-index:1;"], function (_ref) {
  var theme = _ref.theme;
  return theme.lightShadow;
});
var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_ui__WEBPACK_IMPORTED_MODULE_5__["Row"]).withConfig({
  displayName: "Nav__Container",
  componentId: "sc-1w6a0ie-1"
})(["background-color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.white;
});
var HammerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_3__["Hammer"]).withConfig({
  displayName: "Nav__HammerIcon",
  componentId: "sc-1w6a0ie-2"
})(["width:20px;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.blue;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Nav__Logo",
  componentId: "sc-1w6a0ie-3"
})(["border:2.5px solid ", ";display:flex;justify-content:center;align-items:center;border-radius:50%;width:40px;height:40px;margin-right:10px;transition:all 0.15s ease-in-out;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.blue;
});
var LogoLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Nav__LogoLink",
  componentId: "sc-1w6a0ie-4"
})(["display:flex;align-items:center;cursor:pointer;&:hover{", "{background-color:", ";}", "{color:", ";}}"], Logo, function (_ref5) {
  var theme = _ref5.theme;
  return theme.blue;
}, HammerIcon, function (_ref6) {
  var theme = _ref6.theme;
  return theme.white;
});
var DotIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_octicons_PrimitiveDot__WEBPACK_IMPORTED_MODULE_4__["PrimitiveDot"]).withConfig({
  displayName: "Nav__DotIcon",
  componentId: "sc-1w6a0ie-5"
})(["width:5px;margin:0 20px;"]);
var NavS = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "Nav__NavS",
  componentId: "sc-1w6a0ie-6"
})(["display:flex;height:100%;justify-content:flex-end;align-items:center;a{", "{transition:all 0.15s ease-in-out;}&:hover ", "{color:", ";}}"], _ui__WEBPACK_IMPORTED_MODULE_5__["P"], _ui__WEBPACK_IMPORTED_MODULE_5__["P"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.blue;
});

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    flex: true,
    padding: "0 0 0 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HammerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["H"], {
    color: "black",
    h: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "ConstroiWood")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    sm: 0,
    padding: "0 20px 0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavS, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DotIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_5__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Portfolio")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.1ba2707ddfd4a91f5388.hot-update.js.map