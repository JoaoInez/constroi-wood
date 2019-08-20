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
})(["width:20px;"]);
var ContactText = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_ui__WEBPACK_IMPORTED_MODULE_10__["P"]).withConfig({
  displayName: "index__ContactText",
  componentId: "hpb436-6"
})([""]);
var ContactButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_ui__WEBPACK_IMPORTED_MODULE_10__["Button"]).withConfig({
  displayName: "index__ContactButton",
  componentId: "hpb436-7"
})(["overflow:hidden;", "{animation-name:", ";animation-duration:0.2s;animation-fill-mode:both;&:hover{animation-name:hover;}@keyframes hover{from{transform:translateY(0);}to{transform:translateY(50px);}}@keyframes blur{from{transform:translateY(50px);}to{transform:translateY(0);}}}"], _ui__WEBPACK_IMPORTED_MODULE_10__["P"], function (_ref2) {
  var state = _ref2.state;
  return state;
});
var BottomAnchor = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "index__BottomAnchor",
  componentId: "hpb436-8"
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
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionImage"], {
    url: "/static/stock-const-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Sample title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    width: "100px",
    color: "white",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    color: "white",
    align: "center",
    width: "600px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactButton, {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    state: contactBtn,
    onClick: scrollToContacts,
    onMouseEnter: function onMouseEnter() {
      return setContactBtn("hover");
    },
    onMouseLeave: function onMouseLeave() {
      return setContactBtn("blur");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Contactos")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Servi\xE7os"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HammerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Carpintaria"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaintRollerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Pinturas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BathIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Remodela\xE7\xF5es"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    height: "200px",
    bgColor: "black",
    padding: 0,
    relative: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionImage"], {
    url: "/static/stock-carp-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["P"], {
    color: "white",
    width: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Projectos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    image: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[0].image,
    title: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[0].title,
    description: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[0].description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    image: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[1].image,
    title: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[1].title,
    description: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.carpentry[1].description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Portfolio", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArrowRightIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomAnchor, {
    ref: bottomRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.471d1f9fdbb9f6e570d1.hot-update.js.map