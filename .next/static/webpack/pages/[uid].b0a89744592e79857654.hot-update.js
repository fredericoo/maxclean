webpackHotUpdate_N_E("pages/[uid]",{

/***/ "./components/slices/Hero.js":
/*!***********************************!*\
  !*** ./components/slices/Hero.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero.module.scss */ \"./components/slices/Hero.module.scss\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/grid.module.scss */ \"./styles/grid.module.scss\");\n/* harmony import */ var _styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/animate */ \"./components/animate.js\");\n/* harmony import */ var components_AnimateText_AnimateText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AnimateText/AnimateText */ \"./components/AnimateText/AnimateText.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/frederico/nextjs/maxclean/components/slices/Hero.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Hero = function Hero(_ref) {\n  _s();\n\n  var slice = _ref.slice;\n  var headerTextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var heroRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var bgImageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(components_animate__WEBPACK_IMPORTED_MODULE_5__[\"enlargeUponScroll\"])(bgImageRef.current, heroRef.current);\n  }, [bgImageRef]);\n  console.log(slice.primary.bodytext);\n  return __jsx(\"section\", {\n    ref: heroRef,\n    className: \"\".concat(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section, \" \").concat(_styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.col),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.img,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, slice.primary.bg.url && __jsx(\"div\", {\n    className: _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.animatedImg,\n    ref: bgImageRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 6\n    }\n  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    src: slice.primary.bg.url,\n    layout: \"fill\",\n    objectFit: \"cover\",\n    objectPosition: \"center\",\n    loading: \"eager\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }))), __jsx(\"header\", {\n    className: \"\".concat(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.header),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }\n  }, __jsx(\"h1\", {\n    ref: headerTextRef,\n    className: \"t--1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(components_AnimateText_AnimateText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    once: true,\n    propsFrom: {\n      yPercent: 120\n    },\n    propsTo: {\n      yPercent: 0\n    },\n    text: slice.primary.headline,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 6\n    }\n  }))), __jsx(\"div\", {\n    className: _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.body,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 4\n    }\n  }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].render(slice.primary.bodytext)));\n};\n\n_s(Hero, \"oGAWcN8G7TZBoNAs1LuXBtrAgN8=\");\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGljZXMvSGVyby5qcz8xNWNkIl0sIm5hbWVzIjpbIkhlcm8iLCJzbGljZSIsImhlYWRlclRleHRSZWYiLCJ1c2VSZWYiLCJoZXJvUmVmIiwiYmdJbWFnZVJlZiIsInVzZUVmZmVjdCIsImVubGFyZ2VVcG9uU2Nyb2xsIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmltYXJ5IiwiYm9keXRleHQiLCJoZXJvIiwic2VjdGlvbiIsImdyaWQiLCJjb2wiLCJpbWciLCJiZyIsInVybCIsImFuaW1hdGVkSW1nIiwiaGVhZGVyIiwieVBlcmNlbnQiLCJoZWFkbGluZSIsImJvZHkiLCJSaWNoVGV4dCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDM0IsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Qsb0RBQU0sRUFBdEI7QUFDQSxNQUFNRSxVQUFVLEdBQUdGLG9EQUFNLEVBQXpCO0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNmQyxnRkFBaUIsQ0FBQ0YsVUFBVSxDQUFDRyxPQUFaLEVBQXFCSixPQUFPLENBQUNJLE9BQTdCLENBQWpCO0FBQ0EsR0FGUSxFQUVOLENBQUNILFVBQUQsQ0FGTSxDQUFUO0FBR0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFLLENBQUNVLE9BQU4sQ0FBY0MsUUFBMUI7QUFDQSxTQUNDO0FBQVMsT0FBRyxFQUFFUixPQUFkO0FBQXVCLGFBQVMsWUFBS1Msd0RBQUksQ0FBQ0MsT0FBVixjQUFxQkMsK0RBQUksQ0FBQ0MsR0FBMUIsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFSCx3REFBSSxDQUFDSSxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VoQixLQUFLLENBQUNVLE9BQU4sQ0FBY08sRUFBZCxDQUFpQkMsR0FBakIsSUFDQTtBQUFLLGFBQVMsRUFBRU4sd0RBQUksQ0FBQ08sV0FBckI7QUFBa0MsT0FBRyxFQUFFZixVQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpREFBRDtBQUNDLE9BQUcsRUFBRUosS0FBSyxDQUFDVSxPQUFOLENBQWNPLEVBQWQsQ0FBaUJDLEdBRHZCO0FBRUMsVUFBTSxFQUFDLE1BRlI7QUFHQyxhQUFTLEVBQUMsT0FIWDtBQUlDLGtCQUFjLEVBQUMsUUFKaEI7QUFLQyxXQUFPLEVBQUMsT0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FGRixDQURELEVBY0M7QUFBUSxhQUFTLFlBQUtOLHdEQUFJLENBQUNRLE1BQVYsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksT0FBRyxFQUFFbkIsYUFBVDtBQUF3QixhQUFTLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMEVBQUQ7QUFDQyxRQUFJLE1BREw7QUFFQyxhQUFTLEVBQUU7QUFBRW9CLGNBQVEsRUFBRTtBQUFaLEtBRlo7QUFHQyxXQUFPLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FIVjtBQUlDLFFBQUksRUFBRXJCLEtBQUssQ0FBQ1UsT0FBTixDQUFjWSxRQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQWRELEVBd0JDO0FBQUssYUFBUyxFQUFFVix3REFBSSxDQUFDVyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCQyx3REFBUSxDQUFDQyxNQUFULENBQWdCekIsS0FBSyxDQUFDVSxPQUFOLENBQWNDLFFBQTlCLENBQTVCLENBeEJELENBREQ7QUE0QkEsQ0FyQ0Q7O0dBQU1aLEk7O0tBQUFBLEk7QUF1Q1NBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zbGljZXMvSGVyby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5pbXBvcnQgaGVybyBmcm9tIFwiLi9IZXJvLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgZ3JpZCBmcm9tIFwiLi4vLi4vc3R5bGVzL2dyaWQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBlbmxhcmdlVXBvblNjcm9sbCB9IGZyb20gXCJjb21wb25lbnRzL2FuaW1hdGVcIjtcbmltcG9ydCBBbmltYXRlVGV4dCBmcm9tIFwiY29tcG9uZW50cy9BbmltYXRlVGV4dC9BbmltYXRlVGV4dFwiO1xuXG5jb25zdCBIZXJvID0gKHsgc2xpY2UgfSkgPT4ge1xuXHRjb25zdCBoZWFkZXJUZXh0UmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGhlcm9SZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgYmdJbWFnZVJlZiA9IHVzZVJlZigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZW5sYXJnZVVwb25TY3JvbGwoYmdJbWFnZVJlZi5jdXJyZW50LCBoZXJvUmVmLmN1cnJlbnQpO1xuXHR9LCBbYmdJbWFnZVJlZl0pO1xuXHRjb25zb2xlLmxvZyhzbGljZS5wcmltYXJ5LmJvZHl0ZXh0KTtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiByZWY9e2hlcm9SZWZ9IGNsYXNzTmFtZT17YCR7aGVyby5zZWN0aW9ufSAke2dyaWQuY29sfWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2hlcm8uaW1nfT5cblx0XHRcdFx0e3NsaWNlLnByaW1hcnkuYmcudXJsICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17aGVyby5hbmltYXRlZEltZ30gcmVmPXtiZ0ltYWdlUmVmfT5cblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRzcmM9e3NsaWNlLnByaW1hcnkuYmcudXJsfVxuXHRcdFx0XHRcdFx0XHRsYXlvdXQ9XCJmaWxsXCJcblx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0PVwiY292ZXJcIlxuXHRcdFx0XHRcdFx0XHRvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc9XCJlYWdlclwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17YCR7aGVyby5oZWFkZXJ9YH0+XG5cdFx0XHRcdDxoMSByZWY9e2hlYWRlclRleHRSZWZ9IGNsYXNzTmFtZT1cInQtLTFcIj5cblx0XHRcdFx0XHQ8QW5pbWF0ZVRleHRcblx0XHRcdFx0XHRcdG9uY2Vcblx0XHRcdFx0XHRcdHByb3BzRnJvbT17eyB5UGVyY2VudDogMTIwIH19XG5cdFx0XHRcdFx0XHRwcm9wc1RvPXt7IHlQZXJjZW50OiAwIH19XG5cdFx0XHRcdFx0XHR0ZXh0PXtzbGljZS5wcmltYXJ5LmhlYWRsaW5lfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtoZXJvLmJvZHl9PntSaWNoVGV4dC5yZW5kZXIoc2xpY2UucHJpbWFyeS5ib2R5dGV4dCl9PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/slices/Hero.js\n");

/***/ })

})