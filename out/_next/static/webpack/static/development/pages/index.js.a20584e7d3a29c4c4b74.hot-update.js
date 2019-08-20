webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/pages/index/index.js":
/*!*****************************************!*\
  !*** ./components/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_icons_fa_solid_Bath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/fa-solid/Bath */ "./node_modules/styled-icons/fa-solid/Bath/Bath.esm.js");
/* harmony import */ var styled_icons_fa_solid_PaintRoller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/fa-solid/PaintRoller */ "./node_modules/styled-icons/fa-solid/PaintRoller/PaintRoller.esm.js");
/* harmony import */ var styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-icons/fa-solid/Hammer */ "./node_modules/styled-icons/fa-solid/Hammer/Hammer.esm.js");
/* harmony import */ var styled_icons_fa_solid_LongArrowAltRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-icons/fa-solid/LongArrowAltRight */ "./node_modules/styled-icons/fa-solid/LongArrowAltRight/LongArrowAltRight.esm.js");
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/portfolio.json */ "./data/portfolio.json");
var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/portfolio.json */ "./data/portfolio.json", 1);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui */ "./components/ui/index.js");
var _jsxFileName = "/Users/joaoinez/Documents/Projects/ConstroiWood/components/pages/index/index.js";









var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_ui__WEBPACK_IMPORTED_MODULE_8__["H"]).withConfig({
  displayName: "index__Title",
  componentId: "hpb436-0"
})(["font-size:2.6rem;margin:0 0 30px 0;"]);
var HammerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_5__["Hammer"]).withConfig({
  displayName: "index__HammerIcon",
  componentId: "hpb436-1"
})(["width:50px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.blue;
});
var PaintRollerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_PaintRoller__WEBPACK_IMPORTED_MODULE_4__["PaintRoller"]).withConfig({
  displayName: "index__PaintRollerIcon",
  componentId: "hpb436-2"
})(["width:50px;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.blue;
});
var BathIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_Bath__WEBPACK_IMPORTED_MODULE_3__["Bath"]).withConfig({
  displayName: "index__BathIcon",
  componentId: "hpb436-3"
})(["width:50px;color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.blue;
});
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].hr.withConfig({
  displayName: "index__Divider",
  componentId: "hpb436-4"
})(["border:1px solid ", ";width:", ";margin:", ";"], function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "grey" : _ref4$color;
  return theme[color];
}, function (_ref5) {
  var _ref5$width = _ref5.width,
      width = _ref5$width === void 0 ? "100%" : _ref5$width;
  return width;
}, function (_ref6) {
  var _ref6$margin = _ref6.margin,
      margin = _ref6$margin === void 0 ? "10px 0" : _ref6$margin;
  return margin;
});
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "index__Card",
  componentId: "hpb436-5"
})(["margin:30px 10px;padding:20px 10px;display:flex;flex-direction:column;align-items:center;justify-content:space-around;box-shadow:0 2px 8px ", ";border-radius:0 6px 6px 6px;overflow:hidden;min-width:250px;max-width:300px;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.lightShadow;
});
var WideCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "index__WideCard",
  componentId: "hpb436-6"
})(["border-radius:4px;overflow:hidden;box-shadow:0 2px 8px ", ";margin:20px 40px;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.lightShadow;
});
var ProjectImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "index__ProjectImage",
  componentId: "hpb436-7"
})(["background-image:", ";background-repeat:no-repeat;background-size:cover;min-height:200px;min-width:300px;height:100%;width:100%;"], function (_ref9) {
  var url = _ref9.url;
  return url;
});
var ProjectContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "index__ProjectContent",
  componentId: "hpb436-8"
})(["padding:10px 40px;min-width:200px;"]);
var ArrowIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_LongArrowAltRight__WEBPACK_IMPORTED_MODULE_6__["LongArrowAltRight"]).withConfig({
  displayName: "index__ArrowIcon",
  componentId: "hpb436-9"
})(["width:20px;margin-left:10px;"]);
var BottomAnchor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "index__BottomAnchor",
  componentId: "hpb436-10"
})([""]);

var Homepage = function Homepage() {
  var bottomRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var scrollToContacts = function scrollToContacts() {
    return bottomRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    height: "calc(100vh - 73px)",
    bgColor: "black",
    padding: 0,
    relative: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionImage"], {
    url: "/static/stock-const-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Sample title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
    width: "100px",
    color: "white",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    color: "white",
    align: "center",
    width: "600px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    onClick: scrollToContacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Contactos"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Servi\xE7os"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HammerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Carpintaria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaintRollerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Pinturas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BathIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Remodela\xE7\xF5es"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    height: "200px",
    bgColor: "black",
    padding: 0,
    relative: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionImage"], {
    url: "/static/stock-carp-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    color: "white",
    width: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Projectos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WideCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: 1,
    md: 1,
    lg: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectImage, {
    url: "url(".concat(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[0].image, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: 1,
    md: 2,
    lg: 2,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[0].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[0].description))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WideCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: 1,
    md: 1,
    lg: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectImage, {
    url: "url(".concat(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[1].image, ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: 1,
    md: 2,
    lg: 2,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[1].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[1].description))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Portfolio", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArrowIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomAnchor, {
    ref: bottomRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.a20584e7d3a29c4c4b74.hot-update.js.map