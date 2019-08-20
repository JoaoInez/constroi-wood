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
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ServiceCard */ "./components/pages/index/ServiceCard.js");
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProjectCard */ "./components/pages/index/ProjectCard.js");
var _jsxFileName = "/Users/joaoinez/Documents/Projects/ConstroiWood/components/pages/index/index.js";











var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_ui__WEBPACK_IMPORTED_MODULE_8__["H"]).withConfig({
  displayName: "index__Title",
  componentId: "hpb436-0"
})(["font-size:2.6rem;margin:0 0 30px 0;"]);
var ServiceIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:50px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.blue;
});
var HammerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_Hammer__WEBPACK_IMPORTED_MODULE_5__["Hammer"]).withConfig({
  displayName: "index__HammerIcon",
  componentId: "hpb436-1"
})(["", ""], ServiceIcon);
var PaintRollerIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_PaintRoller__WEBPACK_IMPORTED_MODULE_4__["PaintRoller"]).withConfig({
  displayName: "index__PaintRollerIcon",
  componentId: "hpb436-2"
})(["", ""], ServiceIcon);
var BathIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_Bath__WEBPACK_IMPORTED_MODULE_3__["Bath"]).withConfig({
  displayName: "index__BathIcon",
  componentId: "hpb436-3"
})(["", ""], ServiceIcon);
var ArrowIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(styled_icons_fa_solid_LongArrowAltRight__WEBPACK_IMPORTED_MODULE_6__["LongArrowAltRight"]).withConfig({
  displayName: "index__ArrowIcon",
  componentId: "hpb436-4"
})(["width:20px;margin-left:10px;"]);
var BottomAnchor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "index__BottomAnchor",
  componentId: "hpb436-5"
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
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionImage"], {
    url: "/static/stock-const-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Sample title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    width: "100px",
    color: "white",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    color: "white",
    align: "center",
    width: "600px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
      lineNumber: 71
    },
    __self: this
  }, "Contactos"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Servi\xE7os"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    maxWidth: "1000px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HammerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Carpintaria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaintRollerIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Pinturas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    flex: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BathIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    h: 4,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Remodela\xE7\xF5es"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    height: "200px",
    bgColor: "black",
    padding: 0,
    relative: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionImage"], {
    url: "/static/stock-carp-1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["SectionContent"], {
    margin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["P"], {
    color: "white",
    width: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    padding: "20px 0 50px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["H"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Projectos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
    width: "33%",
    margin: "0 0 30px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    image: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[0].image,
    title: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[0].title,
    description: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[0].description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    image: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[1].image,
    title: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[1].title,
    description: _data_portfolio_json__WEBPACK_IMPORTED_MODULE_7__.carpentry[1].description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    color: "white",
    size: "lg",
    margin: "30px 0 0 0",
    bgColor: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Portfolio", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArrowIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomAnchor, {
    ref: bottomRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.38283eb659e8af01f947.hot-update.js.map