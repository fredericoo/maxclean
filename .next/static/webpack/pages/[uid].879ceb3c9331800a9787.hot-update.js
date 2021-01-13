webpackHotUpdate_N_E("pages/[uid]",{

/***/ "./components/slices/Heading.js":
/*!**************************************!*\
  !*** ./components/slices/Heading.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heading; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.module.scss */ \"./components/slices/Heading.module.scss\");\n/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/grid.module.scss */ \"./styles/grid.module.scss\");\n/* harmony import */ var styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/frederico/nextjs/maxclean/components/slices/Heading.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar HT = function HT(_ref) {\n  var tag = _ref.tag,\n      children = _ref.children;\n\n  switch (tag) {\n    case \"h1\":\n      return __jsx(\"h1\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }\n      }, children);\n\n    case \"h2\":\n      return __jsx(\"h2\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }\n      }, children);\n\n    case \"h3\":\n      return __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }\n      }, children);\n\n    case \"h4\":\n      return __jsx(\"h4\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }\n      }, children);\n\n    case \"h5\":\n      return __jsx(\"h5\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }\n      }, children);\n\n    case \"h6\":\n      return __jsx(\"h6\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }\n      }, children);\n  }\n};\n\n_c = HT;\nfunction Heading(_ref2) {\n  var slice = _ref2.slice;\n  return __jsx(\"section\", {\n    className: \"\".concat(_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.section, \" \").concat(styles_grid_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.col),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.body,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, __jsx(HT, {\n    tag: slice.primary.tag || \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, slice.primary.text)));\n}\n_c2 = Heading;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HT\");\n$RefreshReg$(_c2, \"Heading\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGljZXMvSGVhZGluZy5qcz82OTc3Il0sIm5hbWVzIjpbIkhUIiwidGFnIiwiY2hpbGRyZW4iLCJIZWFkaW5nIiwic2xpY2UiLCJzdHlsZXMiLCJzZWN0aW9uIiwiZ3JpZCIsImNvbCIsImJvZHkiLCJwcmltYXJ5IiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEVBQUUsR0FBRyxTQUFMQSxFQUFLLE9BQXVCO0FBQUEsTUFBcEJDLEdBQW9CLFFBQXBCQSxHQUFvQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDakMsVUFBUUQsR0FBUjtBQUNDLFNBQUssSUFBTDtBQUNDLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQyxRQUFMLENBQVA7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLFFBQUwsQ0FBUDs7QUFDRCxTQUFLLElBQUw7QUFDQyxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsUUFBTCxDQUFQOztBQUNELFNBQUssSUFBTDtBQUNDLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQSxRQUFMLENBQVA7O0FBQ0QsU0FBSyxJQUFMO0FBQ0MsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLFFBQUwsQ0FBUDs7QUFDRCxTQUFLLElBQUw7QUFDQyxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsUUFBTCxDQUFQO0FBWkY7QUFjQSxDQWZEOztLQUFNRixFO0FBaUJTLFNBQVNHLE9BQVQsUUFBNEI7QUFBQSxNQUFUQyxLQUFTLFNBQVRBLEtBQVM7QUFDMUMsU0FDQztBQUFTLGFBQVMsWUFBS0MsMkRBQU0sQ0FBQ0MsT0FBWixjQUF1QkMsOERBQUksQ0FBQ0MsR0FBNUIsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFSCwyREFBTSxDQUFDSSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxFQUFEO0FBQUksT0FBRyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBY1QsR0FBZCxJQUFxQixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDRyxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBbkQsQ0FERCxDQURELENBREQ7QUFPQTtNQVJ1QlIsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2xpY2VzL0hlYWRpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRpbmcubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IGdyaWQgZnJvbSBcInN0eWxlcy9ncmlkLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEhUID0gKHsgdGFnLCBjaGlsZHJlbiB9KSA9PiB7XG5cdHN3aXRjaCAodGFnKSB7XG5cdFx0Y2FzZSBcImgxXCI6XG5cdFx0XHRyZXR1cm4gPGgxPntjaGlsZHJlbn08L2gxPjtcblx0XHRjYXNlIFwiaDJcIjpcblx0XHRcdHJldHVybiA8aDI+e2NoaWxkcmVufTwvaDI+O1xuXHRcdGNhc2UgXCJoM1wiOlxuXHRcdFx0cmV0dXJuIDxoMz57Y2hpbGRyZW59PC9oMz47XG5cdFx0Y2FzZSBcImg0XCI6XG5cdFx0XHRyZXR1cm4gPGg0PntjaGlsZHJlbn08L2g0Pjtcblx0XHRjYXNlIFwiaDVcIjpcblx0XHRcdHJldHVybiA8aDU+e2NoaWxkcmVufTwvaDU+O1xuXHRcdGNhc2UgXCJoNlwiOlxuXHRcdFx0cmV0dXJuIDxoNj57Y2hpbGRyZW59PC9oNj47XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRpbmcoeyBzbGljZSB9KSB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvbn0gJHtncmlkLmNvbH1gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG5cdFx0XHRcdDxIVCB0YWc9e3NsaWNlLnByaW1hcnkudGFnIHx8IFwiaDJcIn0+e3NsaWNlLnByaW1hcnkudGV4dH08L0hUPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/slices/Heading.js\n");

/***/ })

})