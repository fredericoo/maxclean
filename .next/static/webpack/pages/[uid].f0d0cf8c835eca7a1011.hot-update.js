webpackHotUpdate_N_E("pages/[uid]",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/slices/Heading.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/slices/Heading.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/next/node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Heading_body__2KJck {\\n  grid-column: grid-start/grid-end;\\n  margin: 3rem 0;\\n  text-align: center;\\n}\\n@media (min-width: 56.25em) {\\n  .Heading_body__2KJck {\\n    grid-column: col-2/col-12;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Heading.module.scss\",\"webpack://../../node_modules/breakpoint-sass/stylesheets/_breakpoint.scss\"],\"names\":[],\"mappings\":\"AAEA;EACC,gCAAA;EAIA,cAAA;EACA,kBAAA;AAJD;AC4DI;ED9DJ;IAGE,yBAAA;EAGA;AACF\",\"sourcesContent\":[\"@import \\\"styles/abstracts/mixins\\\";\\n\\n.body {\\n\\tgrid-column: grid-start / grid-end;\\n\\t@include responsive($tablet-l) {\\n\\t\\tgrid-column: col-2 / col-12;\\n\\t}\\n\\tmargin: 3rem 0;\\n\\ttext-align: center;\\n}\\n\",\"//////////////////////////////\\n// Default Variables\\n//////////////////////////////\\n$Breakpoint-Settings: (\\n  'default media': all,\\n  'default feature': min-width,\\n  'default pair': width,\\n\\n  'force all media type': false,\\n  'to ems': false,\\n  'transform resolutions': true,\\n\\n  'no queries': false,\\n  'no query fallbacks': false,\\n\\n  'base font size': 16px,\\n\\n  'legacy syntax': false\\n);\\n\\n$breakpoint: () !default;\\n\\n//////////////////////////////\\n// Imports\\n//////////////////////////////\\n@import \\\"breakpoint/settings\\\";\\n@import 'breakpoint/context';\\n@import 'breakpoint/helpers';\\n@import 'breakpoint/parsers';\\n@import 'breakpoint/no-query';\\n\\n@import 'breakpoint/respond-to';\\n\\n@import \\\"breakpoint/legacy-settings\\\";\\n\\n//////////////////////////////\\n// Breakpoint Mixin\\n//////////////////////////////\\n\\n@mixin breakpoint($query, $no-query: false) {\\n  @include legacy-settings-warning;\\n\\n  // Reset contexts\\n  @include private-breakpoint-reset-contexts();\\n\\n  $breakpoint: breakpoint($query, false);\\n\\n  $query-string: map-get($breakpoint, 'query');\\n  $query-fallback: map-get($breakpoint, 'fallback');\\n\\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\\n\\n  // Allow for an as-needed override or usage of no query fallback.\\n  @if $no-query != false {\\n    $query-fallback: $no-query;\\n  }\\n\\n  @if $query-fallback != false {\\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\\n  }\\n\\n  // Print Out Query String\\n  @if not breakpoint-get('no queries') {\\n    @media #{$query-string} {\\n      @content;\\n    }\\n  }\\n\\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\\n\\n    $type: type-of(breakpoint-get('no query fallbacks'));\\n    $print: false;\\n\\n    @if ($type == 'bool') {\\n      $print: true;\\n    }\\n    @else if ($type == 'string') {\\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\\n        $print: true;\\n      }\\n    }\\n    @else if ($type == 'list') {\\n      @each $wrapper in breakpoint-get('no query fallbacks') {\\n        @if $query-fallback == $wrapper {\\n          $print: true;\\n        }\\n      }\\n    }\\n\\n    // Write Fallback\\n    @if ($query-fallback != false) and ($print == true) {\\n      $type-fallback: type-of($query-fallback);\\n\\n      @if ($type-fallback != 'bool') {\\n        #{$query-fallback} & {\\n          @content;\\n        }\\n      }\\n      @else {\\n        @content;\\n      }\\n    }\\n  }\\n\\n  @include private-breakpoint-reset-contexts();\\n}\\n\\n\\n@mixin mq($query, $no-query: false) {\\n  @include breakpoint($query, $no-query) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"body\": \"Heading_body__2KJck\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGljZXMvSGVhZGluZy5tb2R1bGUuc2Nzcz9hM2UxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNElBQXFFO0FBQy9HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx5QkFBeUIscUNBQXFDLG1CQUFtQix1QkFBdUIsR0FBRywrQkFBK0IsMEJBQTBCLGdDQUFnQyxLQUFLLEdBQUcsT0FBTyxnS0FBZ0ssV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLDZEQUE2RCxXQUFXLHVDQUF1QyxvQ0FBb0Msa0NBQWtDLEtBQUssbUJBQW1CLHVCQUF1QixHQUFHLHVaQUF1Wiw2QkFBNkIsZ0hBQWdILCtCQUErQiwrQkFBK0IsK0JBQStCLGdDQUFnQyxvQ0FBb0MsMkNBQTJDLHdJQUF3SSxxQ0FBcUMsd0VBQXdFLDZDQUE2QyxtREFBbUQsc0RBQXNELHlGQUF5RixpRkFBaUYsbUdBQW1HLGlDQUFpQyxLQUFLLG9DQUFvQyxtRkFBbUYsS0FBSyx5RUFBeUUsZUFBZSxjQUFjLEVBQUUsaUJBQWlCLE9BQU8sS0FBSyxpR0FBaUcsNkRBQTZELG9CQUFvQiwrQkFBK0IscUJBQXFCLE9BQU8sb0NBQW9DLHFFQUFxRSx1QkFBdUIsU0FBUyxPQUFPLGtDQUFrQyxnRUFBZ0UsMkNBQTJDLHlCQUF5QixXQUFXLFNBQVMsT0FBTyxvRkFBb0YsaURBQWlELDBDQUEwQyxZQUFZLGdCQUFnQixJQUFJLHFCQUFxQixXQUFXLFNBQVMsZUFBZSxtQkFBbUIsU0FBUyxPQUFPLEtBQUssbURBQW1ELEdBQUcsMkNBQTJDLDRDQUE0QyxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDdjVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9jb21wb25lbnRzL3NsaWNlcy9IZWFkaW5nLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRpbmdfYm9keV9fMktKY2sge1xcbiAgZ3JpZC1jb2x1bW46IGdyaWQtc3RhcnQvZ3JpZC1lbmQ7XFxuICBtYXJnaW46IDNyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU2LjI1ZW0pIHtcXG4gIC5IZWFkaW5nX2JvZHlfXzJLSmNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IGNvbC0yL2NvbC0xMjtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0hlYWRpbmcubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9ub2RlX21vZHVsZXMvYnJlYWtwb2ludC1zYXNzL3N0eWxlc2hlZXRzL19icmVha3BvaW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDQyxnQ0FBQTtFQUlBLGNBQUE7RUFDQSxrQkFBQTtBQUpEO0FDNERJO0VEOURKO0lBR0UseUJBQUE7RUFHQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcInN0eWxlcy9hYnN0cmFjdHMvbWl4aW5zXFxcIjtcXG5cXG4uYm9keSB7XFxuXFx0Z3JpZC1jb2x1bW46IGdyaWQtc3RhcnQgLyBncmlkLWVuZDtcXG5cXHRAaW5jbHVkZSByZXNwb25zaXZlKCR0YWJsZXQtbCkge1xcblxcdFxcdGdyaWQtY29sdW1uOiBjb2wtMiAvIGNvbC0xMjtcXG5cXHR9XFxuXFx0bWFyZ2luOiAzcmVtIDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIixcIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcbi8vIERlZmF1bHQgVmFyaWFibGVzXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuJEJyZWFrcG9pbnQtU2V0dGluZ3M6IChcXG4gICdkZWZhdWx0IG1lZGlhJzogYWxsLFxcbiAgJ2RlZmF1bHQgZmVhdHVyZSc6IG1pbi13aWR0aCxcXG4gICdkZWZhdWx0IHBhaXInOiB3aWR0aCxcXG5cXG4gICdmb3JjZSBhbGwgbWVkaWEgdHlwZSc6IGZhbHNlLFxcbiAgJ3RvIGVtcyc6IGZhbHNlLFxcbiAgJ3RyYW5zZm9ybSByZXNvbHV0aW9ucyc6IHRydWUsXFxuXFxuICAnbm8gcXVlcmllcyc6IGZhbHNlLFxcbiAgJ25vIHF1ZXJ5IGZhbGxiYWNrcyc6IGZhbHNlLFxcblxcbiAgJ2Jhc2UgZm9udCBzaXplJzogMTZweCxcXG5cXG4gICdsZWdhY3kgc3ludGF4JzogZmFsc2VcXG4pO1xcblxcbiRicmVha3BvaW50OiAoKSAhZGVmYXVsdDtcXG5cXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG4vLyBJbXBvcnRzXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuQGltcG9ydCBcXFwiYnJlYWtwb2ludC9zZXR0aW5nc1xcXCI7XFxuQGltcG9ydCAnYnJlYWtwb2ludC9jb250ZXh0JztcXG5AaW1wb3J0ICdicmVha3BvaW50L2hlbHBlcnMnO1xcbkBpbXBvcnQgJ2JyZWFrcG9pbnQvcGFyc2Vycyc7XFxuQGltcG9ydCAnYnJlYWtwb2ludC9uby1xdWVyeSc7XFxuXFxuQGltcG9ydCAnYnJlYWtwb2ludC9yZXNwb25kLXRvJztcXG5cXG5AaW1wb3J0IFxcXCJicmVha3BvaW50L2xlZ2FjeS1zZXR0aW5nc1xcXCI7XFxuXFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuLy8gQnJlYWtwb2ludCBNaXhpblxcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbkBtaXhpbiBicmVha3BvaW50KCRxdWVyeSwgJG5vLXF1ZXJ5OiBmYWxzZSkge1xcbiAgQGluY2x1ZGUgbGVnYWN5LXNldHRpbmdzLXdhcm5pbmc7XFxuXFxuICAvLyBSZXNldCBjb250ZXh0c1xcbiAgQGluY2x1ZGUgcHJpdmF0ZS1icmVha3BvaW50LXJlc2V0LWNvbnRleHRzKCk7XFxuXFxuICAkYnJlYWtwb2ludDogYnJlYWtwb2ludCgkcXVlcnksIGZhbHNlKTtcXG5cXG4gICRxdWVyeS1zdHJpbmc6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdxdWVyeScpO1xcbiAgJHF1ZXJ5LWZhbGxiYWNrOiBtYXAtZ2V0KCRicmVha3BvaW50LCAnZmFsbGJhY2snKTtcXG5cXG4gICRwcml2YXRlLWJyZWFrcG9pbnQtY29udGV4dC1ob2xkZXI6IG1hcC1nZXQoJGJyZWFrcG9pbnQsICdjb250ZXh0IGhvbGRlcicpICFnbG9iYWw7XFxuICAkcHJpdmF0ZS1icmVha3BvaW50LXF1ZXJ5LWNvdW50OiBtYXAtZ2V0KCRicmVha3BvaW50LCAncXVlcnkgY291bnQnKSAhZ2xvYmFsO1xcblxcbiAgLy8gQWxsb3cgZm9yIGFuIGFzLW5lZWRlZCBvdmVycmlkZSBvciB1c2FnZSBvZiBubyBxdWVyeSBmYWxsYmFjay5cXG4gIEBpZiAkbm8tcXVlcnkgIT0gZmFsc2Uge1xcbiAgICAkcXVlcnktZmFsbGJhY2s6ICRuby1xdWVyeTtcXG4gIH1cXG5cXG4gIEBpZiAkcXVlcnktZmFsbGJhY2sgIT0gZmFsc2Uge1xcbiAgICAkY29udGV4dC1zZXR0ZXI6IHByaXZhdGUtYnJlYWtwb2ludC1zZXQtY29udGV4dCgnbm8tcXVlcnknLCAkcXVlcnktZmFsbGJhY2spO1xcbiAgfVxcblxcbiAgLy8gUHJpbnQgT3V0IFF1ZXJ5IFN0cmluZ1xcbiAgQGlmIG5vdCBicmVha3BvaW50LWdldCgnbm8gcXVlcmllcycpIHtcXG4gICAgQG1lZGlhICN7JHF1ZXJ5LXN0cmluZ30ge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuXFxuICBAaWYgYnJlYWtwb2ludC1nZXQoJ25vIHF1ZXJ5IGZhbGxiYWNrcycpICE9IGZhbHNlIG9yIGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyaWVzJykgPT0gdHJ1ZSB7XFxuXFxuICAgICR0eXBlOiB0eXBlLW9mKGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyeSBmYWxsYmFja3MnKSk7XFxuICAgICRwcmludDogZmFsc2U7XFxuXFxuICAgIEBpZiAoJHR5cGUgPT0gJ2Jvb2wnKSB7XFxuICAgICAgJHByaW50OiB0cnVlO1xcbiAgICB9XFxuICAgIEBlbHNlIGlmICgkdHlwZSA9PSAnc3RyaW5nJykge1xcbiAgICAgIEBpZiAkcXVlcnktZmFsbGJhY2sgPT0gYnJlYWtwb2ludC1nZXQoJ25vIHF1ZXJ5IGZhbGxiYWNrcycpIHtcXG4gICAgICAgICRwcmludDogdHJ1ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgQGVsc2UgaWYgKCR0eXBlID09ICdsaXN0Jykge1xcbiAgICAgIEBlYWNoICR3cmFwcGVyIGluIGJyZWFrcG9pbnQtZ2V0KCdubyBxdWVyeSBmYWxsYmFja3MnKSB7XFxuICAgICAgICBAaWYgJHF1ZXJ5LWZhbGxiYWNrID09ICR3cmFwcGVyIHtcXG4gICAgICAgICAgJHByaW50OiB0cnVlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyBXcml0ZSBGYWxsYmFja1xcbiAgICBAaWYgKCRxdWVyeS1mYWxsYmFjayAhPSBmYWxzZSkgYW5kICgkcHJpbnQgPT0gdHJ1ZSkge1xcbiAgICAgICR0eXBlLWZhbGxiYWNrOiB0eXBlLW9mKCRxdWVyeS1mYWxsYmFjayk7XFxuXFxuICAgICAgQGlmICgkdHlwZS1mYWxsYmFjayAhPSAnYm9vbCcpIHtcXG4gICAgICAgICN7JHF1ZXJ5LWZhbGxiYWNrfSAmIHtcXG4gICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIEBlbHNlIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgQGluY2x1ZGUgcHJpdmF0ZS1icmVha3BvaW50LXJlc2V0LWNvbnRleHRzKCk7XFxufVxcblxcblxcbkBtaXhpbiBtcSgkcXVlcnksICRuby1xdWVyeTogZmFsc2UpIHtcXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoJHF1ZXJ5LCAkbm8tcXVlcnkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJvZHlcIjogXCJIZWFkaW5nX2JvZHlfXzJLSmNrXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./components/slices/Heading.module.scss\n");

/***/ })

})