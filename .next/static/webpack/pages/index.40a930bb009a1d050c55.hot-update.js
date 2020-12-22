webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_prismicToolbarQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/prismicToolbarQueries */ \"./utils/prismicToolbarQueries.js\");\n/* harmony import */ var utils_hooks_useUpdatePreviewRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/hooks/useUpdatePreviewRef */ \"./utils/hooks/useUpdatePreviewRef.js\");\n/* harmony import */ var utils_hooks_useUpdateToolbarDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/hooks/useUpdateToolbarDocs */ \"./utils/hooks/useUpdateToolbarDocs.js\");\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ \"./components/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/frederico/Documents/maxclean/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n/**\n * Homepage component\n */\n\nvar Homepage = function Homepage(_ref) {\n  _s();\n\n  var doc = _ref.doc,\n      menu = _ref.menu,\n      lang = _ref.lang,\n      preview = _ref.preview;\n\n  if (doc && doc.data) {\n    Object(utils_hooks_useUpdatePreviewRef__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(preview, doc.id);\n    Object(utils_hooks_useUpdateToolbarDocs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(utils_prismicToolbarQueries__WEBPACK_IMPORTED_MODULE_1__[\"homepageToolbarDocs\"])(preview.activeRef, doc.lang), [doc]);\n    return __jsx(components__WEBPACK_IMPORTED_MODULE_4__[\"Layout\"], {\n      altLangs: doc.alternate_languages,\n      lang: lang,\n      menu: menu,\n      isPreview: preview.isActive,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 4\n      }\n    }, __jsx(components__WEBPACK_IMPORTED_MODULE_4__[\"SliceZone\"], {\n      sliceZone: doc.data.body,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }\n    }));\n  }\n\n  return __jsx(components__WEBPACK_IMPORTED_MODULE_4__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Nothing loaded\");\n};\n\n_s(Homepage, \"WVAZUbuukr7PwlfasY2BCDrp+uQ=\", false, function () {\n  return [utils_hooks_useUpdatePreviewRef__WEBPACK_IMPORTED_MODULE_2__[\"default\"], utils_hooks_useUpdateToolbarDocs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Homepage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lcGFnZSIsImRvYyIsIm1lbnUiLCJsYW5nIiwicHJldmlldyIsImRhdGEiLCJ1c2VVcGRhdGVQcmV2aWV3UmVmIiwiaWQiLCJ1c2VVcGRhdGVUb29sYmFyRG9jcyIsImhvbWVwYWdlVG9vbGJhckRvY3MiLCJhY3RpdmVSZWYiLCJhbHRlcm5hdGVfbGFuZ3VhZ2VzIiwiaXNBY3RpdmUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxHQUErQixRQUEvQkEsR0FBK0I7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDbEQsTUFBSUgsR0FBRyxJQUFJQSxHQUFHLENBQUNJLElBQWYsRUFBcUI7QUFDcEJDLG1GQUFtQixDQUFDRixPQUFELEVBQVVILEdBQUcsQ0FBQ00sRUFBZCxDQUFuQjtBQUNBQyxvRkFBb0IsQ0FBQ0MsdUZBQW1CLENBQUNMLE9BQU8sQ0FBQ00sU0FBVCxFQUFvQlQsR0FBRyxDQUFDRSxJQUF4QixDQUFwQixFQUFtRCxDQUN0RUYsR0FEc0UsQ0FBbkQsQ0FBcEI7QUFJQSxXQUNDLE1BQUMsaURBQUQ7QUFDQyxjQUFRLEVBQUVBLEdBQUcsQ0FBQ1UsbUJBRGY7QUFFQyxVQUFJLEVBQUVSLElBRlA7QUFHQyxVQUFJLEVBQUVELElBSFA7QUFJQyxlQUFTLEVBQUVFLE9BQU8sQ0FBQ1EsUUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1DLE1BQUMsb0RBQUQ7QUFBVyxlQUFTLEVBQUVYLEdBQUcsQ0FBQ0ksSUFBSixDQUFTUSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkQsQ0FERDtBQVVBOztBQUNELFNBQU8sTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFQO0FBQ0EsQ0FuQkQ7O0dBQU1iLFE7VUFFSk0sdUUsRUFDQUUsd0U7OztLQUhJUixROztBQTJEU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENsaWVudCwgbWFuYWdlTG9jYWwgfSBmcm9tIFwidXRpbHMvcHJpc21pY0hlbHBlcnNcIjtcbmltcG9ydCB7IGhvbWVwYWdlVG9vbGJhckRvY3MgfSBmcm9tIFwidXRpbHMvcHJpc21pY1Rvb2xiYXJRdWVyaWVzXCI7XG5pbXBvcnQgdXNlVXBkYXRlUHJldmlld1JlZiBmcm9tIFwidXRpbHMvaG9va3MvdXNlVXBkYXRlUHJldmlld1JlZlwiO1xuaW1wb3J0IHVzZVVwZGF0ZVRvb2xiYXJEb2NzIGZyb20gXCJ1dGlscy9ob29rcy91c2VVcGRhdGVUb29sYmFyRG9jc1wiO1xuaW1wb3J0IHsgTGF5b3V0LCBTbGljZVpvbmUgfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuXG4vKipcbiAqIEhvbWVwYWdlIGNvbXBvbmVudFxuICovXG5jb25zdCBIb21lcGFnZSA9ICh7IGRvYywgbWVudSwgbGFuZywgcHJldmlldyB9KSA9PiB7XG5cdGlmIChkb2MgJiYgZG9jLmRhdGEpIHtcblx0XHR1c2VVcGRhdGVQcmV2aWV3UmVmKHByZXZpZXcsIGRvYy5pZCk7XG5cdFx0dXNlVXBkYXRlVG9vbGJhckRvY3MoaG9tZXBhZ2VUb29sYmFyRG9jcyhwcmV2aWV3LmFjdGl2ZVJlZiwgZG9jLmxhbmcpLCBbXG5cdFx0XHRkb2MsXG5cdFx0XSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dFxuXHRcdFx0XHRhbHRMYW5ncz17ZG9jLmFsdGVybmF0ZV9sYW5ndWFnZXN9XG5cdFx0XHRcdGxhbmc9e2xhbmd9XG5cdFx0XHRcdG1lbnU9e21lbnV9XG5cdFx0XHRcdGlzUHJldmlldz17cHJldmlldy5pc0FjdGl2ZX1cblx0XHRcdD5cblx0XHRcdFx0PFNsaWNlWm9uZSBzbGljZVpvbmU9e2RvYy5kYXRhLmJvZHl9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG5cdHJldHVybiA8TGF5b3V0Pk5vdGhpbmcgbG9hZGVkPC9MYXlvdXQ+O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtcblx0cHJldmlldyxcblx0cHJldmlld0RhdGEsXG5cdGxvY2FsZSxcblx0bG9jYWxlcyxcbn0pIHtcblx0Y29uc3QgcmVmID0gcHJldmlld0RhdGEgPyBwcmV2aWV3RGF0YS5yZWYgOiBudWxsO1xuXHRjb25zdCBpc1ByZXZpZXcgPSBwcmV2aWV3IHx8IGZhbHNlO1xuXHRjb25zdCBjbGllbnQgPSBDbGllbnQoKTtcblx0Y29uc3QgZG9jID1cblx0XHQoYXdhaXQgY2xpZW50LmdldFNpbmdsZShcblx0XHRcdFwiaG9tZXBhZ2VcIixcblx0XHRcdHJlZiA/IHsgcmVmLCBsYW5nOiBsb2NhbGUgfSA6IHsgbGFuZzogbG9jYWxlIH1cblx0XHQpKSB8fCB7fTtcblx0Y29uc3QgbWVudSA9XG5cdFx0KGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXG5cdFx0XHRcInRvcF9tZW51XCIsXG5cdFx0XHRyZWYgPyB7IHJlZiwgbGFuZzogbG9jYWxlIH0gOiB7IGxhbmc6IGxvY2FsZSB9XG5cdFx0KSkgfHwge307XG5cblx0Y29uc3QgeyBjdXJyZW50TGFuZywgaXNNeU1haW5MYW5ndWFnZSB9ID0gbWFuYWdlTG9jYWwobG9jYWxlcywgbG9jYWxlKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRtZW51LFxuXHRcdFx0ZG9jLFxuXHRcdFx0cHJldmlldzoge1xuXHRcdFx0XHRpc0FjdGl2ZTogaXNQcmV2aWV3LFxuXHRcdFx0XHRhY3RpdmVSZWY6IHJlZixcblx0XHRcdH0sXG5cdFx0XHRsYW5nOiB7XG5cdFx0XHRcdGN1cnJlbnRMYW5nLFxuXHRcdFx0XHRpc015TWFpbkxhbmd1YWdlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})