webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/pages/index/index.js":
/*!*****************************************!*\
  !*** ./components/pages/index/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_icons_fa_solid_Bath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/fa-solid/Bath */ "./node_modules/styled-icons/fa-solid/Bath/Bath.esm.js");
/* harmony import */ var styled_icons_fa_solid_PaintRoller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-icons/fa-solid/PaintRoller */ "./node_modules/styled-icons/fa-solid/PaintRoller/PaintRoller.esm.js");
/* harmony import */ var styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-icons/fa-solid/Hammer */ "./node_modules/styled-icons/fa-solid/Hammer/Hammer.esm.js");
/* harmony import */ var styled_icons_fa_solid_LongArrowAltRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-icons/fa-solid/LongArrowAltRight */ "./node_modules/styled-icons/fa-solid/LongArrowAltRight/LongArrowAltRight.esm.js");
/* harmony import */ var styled_icons_fa_solid_LongArrowAltDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-icons/fa-solid/LongArrowAltDown */ "./node_modules/styled-icons/fa-solid/LongArrowAltDown/LongArrowAltDown.esm.js");
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/portfolio.json */ "./data/portfolio.json");
var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/portfolio.json */ "./data/portfolio.json", 1);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui */ "./components/ui/index.js");
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ServiceCard */ "./components/pages/index/ServiceCard.js");
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProjectCard */ "./components/pages/index/ProjectCard.js");

var _jsxFileName = "/Users/joaoinez/Documents/Projects/ConstroiWood/components/pages/index/index.js";












var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_ui__WEBPACK_IMPORTED_MODULE_10__["H"]).withConfig({
  displayName: "index__Title",
  componentId: "hpb436-0"
})(["font-size:2.6rem;margin:0 0 30px 0;"]);
var ServiceIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["width:50px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.blue;
});
var HammerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_6__["Hammer"]).withConfig({
  displayName: "index__HammerIcon",
  componentId: "hpb436-1"
})(["", ""], ServiceIcon);
var PaintRollerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(styled_icons_fa_solid_PaintRoller__WEBPACK_IMPORTED_MODULE_5__["PaintRoller"]).withConfig({
  displayName: "index__PaintRollerIcon",
  componentId: "hpb436-2"
})(["", ""], ServiceIcon);
var BathIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(styled_icons_fa_solid_Bath__WEBPACK_IMPORTED_MODULE_4__["Bath"]).withConfig({
  displayName: "index__BathIcon",
  componentId: "hpb436-3"
})(["", ""], ServiceIcon);
var ArrowRightIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(styled_icons_fa_solid_LongArrowAltRight__WEBPACK_IMPORTED_MODULE_7__["LongArrowAltRight"]).withConfig({
  displayName: "index__ArrowRightIcon",
  componentId: "hpb436-4"
})(["width:20px;margin-left:10px;"]);
var ArrowDownIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(styled_icons_fa_solid_LongArrowAltDown__WEBPACK_IMPORTED_MODULE_8__["LongArrowAltDown"]).withConfig({
  displayName: "index__ArrowDownIcon",
  componentId: "hpb436-5"
})([""]);
var ContactButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_ui__WEBPACK_IMPORTED_MODULE_10__["Button"]).withConfig({
  displayName: "index__ContactButton",
  componentId: "hpb436-6"
})(["overflow:hidden;position:relative;", "{text-shadow:none;animation-name:", ";animation-duration:0.2s;animation-fill-mode:both;&:hover{animation-name:hover;}@keyframes text_hover{from{transform:translateY(0);}to{transform:translateY(40px);}}@keyframes text_blur{from{transform:translateY(40px);}to{transform:translateY(0);}}}", "{position:absolute;height:40px;top:-55px;right:calc(50% - 10px);animation-name:", ";animation-duration:0.2s;animation-fill-mode:both;&:hover{animation-name:hover;}@keyframes arrow_hover{from{top:-55px;}to{top:10px;}}@keyframes arrow_blur{from{top:10px;}to{top:-55px;}}}"], _ui__WEBPACK_IMPORTED_MODULE_10__["P"], function (_ref2) {
  var state = _ref2.state;
  return state === "blur" ? "text_blur" : "initial";
}, ArrowDownIcon, function (_ref3) {
  var state = _ref3.state;
  return state === "blur" ? "arrow_blur" : "initial";
});
var BottomAnchor = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "index__BottomAnchor",
  componentId: "hpb436-7"
})([""]);

var Homepage = function Homepage() {
  var bottomRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var scrollToContacts = function scrollToContacts() {
    return bottomRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("none"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      contactBtn = _useState2[0],
      setContactBtn = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    height: "calc(100vh - 73px)",
    bgColor: "black",
    padding: 0,
    relative: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionImage"], {
    url: "/static/stock-const-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Sample title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    width: "100px",
    color: "white",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    color: "white",
    align: "center",
    width: "600px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactButton, {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    state: contactBtn,
    onClick: scrollToContacts,
    onMouseLeave: function onMouseLeave() {
      return setContactBtn("blur");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Contactos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArrowDownIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Servi\xE7os"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HammerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Carpintaria"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaintRollerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Pinturas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BathIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Remodela\xE7\xF5es"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    height: "200px",
    bgColor: "black",
    padding: 0,
    relative: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionImage"], {
    url: "/static/stock-carp-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    color: "white",
    width: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Projectos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    image: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[0].image,
    title: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[0].title,
    description: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[0].description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    image: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[1].image,
    title: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[1].title,
    description: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[1].description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Portfolio", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArrowRightIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomAnchor, {
    ref: bottomRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.f899dd2255e35f9f523f.hot-update.js.map