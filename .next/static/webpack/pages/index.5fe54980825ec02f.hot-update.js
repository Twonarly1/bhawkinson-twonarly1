"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Achievements.tsx":
/*!*****************************************!*\
  !*** ./src/components/Achievements.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Headings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Headings */ \"./src/components/Headings.tsx\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Achievements = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    if (data) {\n        var ref1;\n        var certificates = (ref1 = data.certificates) === null || ref1 === void 0 ? void 0 : ref1.map(function(certificate) {\n            var src = \"/images/certificates/\" + certificate.src;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: certificate.url,\n                        //@ts-ignore\n                        name: certificate.name,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: certificate.name,\n                            src: src,\n                            className: \"mx-auto h-fit w-fit rounded-lg object-cover shadow-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            \" \",\n                            certificate.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, certificate.name, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Headings__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Achievements\",\n                subtitle: \"Certifications and More.\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto gap-4 space-y-6 pt-6 md:grid md:grid-cols-2 md:space-y-0\",\n                children: certificates\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Achievements, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Achievements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Achievements);\nvar _c;\n$RefreshReg$(_c, \"Achievements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF1QztBQUNOOztBQUVqQyxJQUFNRyxZQUFZLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUMxQixJQUFnQ0gsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q0ksUUFBUSxHQUFpQkosR0FBZSxHQUFoQyxFQUFFSyxXQUFXLEdBQUlMLEdBQWUsR0FBbkI7SUFDNUIsSUFBSUcsSUFBSSxFQUFFO1lBQ1dBLElBQWlCO1FBQXBDLElBQUlHLFlBQVksR0FBR0gsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBQ0csWUFBWSxjQUFqQkgsSUFBaUIsV0FBSyxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLElBQWlCLENBQUVJLEdBQUcsQ0FBQyxTQUFVQyxXQUFXLEVBQUU7WUFDL0QsSUFBSUMsR0FBRyxHQUFHLHVCQUF1QixHQUFHRCxXQUFXLENBQUNDLEdBQUc7WUFDbkQscUJBQ0UsOERBQUNDLEtBQUc7O2tDQUNGLDhEQUFDQyxHQUFDO3dCQUNBQyxJQUFJLEVBQUVKLFdBQVcsQ0FBQ0ssR0FBRzt3QkFDckIsWUFBWTt3QkFDWkMsSUFBSSxFQUFFTixXQUFXLENBQUNNLElBQUk7a0NBRXRCLDRFQUFDQyxLQUFHOzRCQUNGQyxHQUFHLEVBQUVSLFdBQVcsQ0FBQ00sSUFBSTs0QkFDckJMLEdBQUcsRUFBRUEsR0FBRzs0QkFDUlEsU0FBUyxFQUFDLHVEQUF1RDs7Ozs7Z0NBQ2pFOzs7Ozs0QkFDQTtrQ0FDSiw4REFBQ0MsSUFBRTs7NEJBQUMsR0FBQzs0QkFBQ1YsV0FBVyxDQUFDTSxJQUFJOzs7Ozs7NEJBQU07O2VBWnBCTixXQUFXLENBQUNNLElBQUk7Ozs7b0JBYXBCLENBQ1A7U0FDRixDQUFDO0tBQ0g7SUFDRCxxQkFDRSw4REFBQ0osS0FBRztRQUFDTyxTQUFTLEVBQUMsa0JBQWtCOzswQkFDL0IsOERBQUNoQixpREFBUTtnQkFBQ2tCLEtBQUssRUFBRSxjQUFjO2dCQUFFQyxRQUFRLEVBQUUsMEJBQTBCOzs7OztxQkFBSTswQkFDekUsOERBQUNWLEtBQUc7Z0JBQUNPLFNBQVMsRUFBQyxrRUFBa0U7MEJBQzlFWCxZQUFZOzs7OztxQkFDVDs7Ozs7O2FBcUJGLENBQ1A7Q0FDRjtHQW5ES0osWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBcURsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4PzIxOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGluZ3MgZnJvbSAnLi9IZWFkaW5ncydcblxuY29uc3QgQWNoaWV2ZW1lbnRzID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGlmIChkYXRhKSB7XG4gICAgdmFyIGNlcnRpZmljYXRlcyA9IGRhdGEuY2VydGlmaWNhdGVzPy5tYXAoZnVuY3Rpb24gKGNlcnRpZmljYXRlKSB7XG4gICAgICB2YXIgc3JjID0gJy9pbWFnZXMvY2VydGlmaWNhdGVzLycgKyBjZXJ0aWZpY2F0ZS5zcmNcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtjZXJ0aWZpY2F0ZS5uYW1lfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17Y2VydGlmaWNhdGUudXJsfVxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBuYW1lPXtjZXJ0aWZpY2F0ZS5uYW1lfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PXtjZXJ0aWZpY2F0ZS5uYW1lfVxuICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBoLWZpdCB3LWZpdCByb3VuZGVkLWxnIG9iamVjdC1jb3ZlciBzaGFkb3ctbWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGg1PiB7Y2VydGlmaWNhdGUubmFtZX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctNXhsXCI+XG4gICAgICA8SGVhZGluZ3MgdGl0bGU9eydBY2hpZXZlbWVudHMnfSBzdWJ0aXRsZT17J0NlcnRpZmljYXRpb25zIGFuZCBNb3JlLid9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ2FwLTQgc3BhY2UteS02IHB0LTYgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpzcGFjZS15LTBcIj5cbiAgICAgICAge2NlcnRpZmljYXRlc31cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgbXQtNiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8U2lkZWJhclJvd1xuICAgICAgICAgIEljb249e0JhZGdlQ2hlY2tJY29ufVxuICAgICAgICAgIHRpdGxlPVwiQ2VydGlmaWNhdGlvblwiXG4gICAgICAgICAgc3JjPXtDZXJ0aWZpY2F0ZX0gLy9Mb2NrLCBUcm9waHksIEJyaWVmY2FzZVxuICAgICAgICAgIGNvbnRlbnQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtMjRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy14cyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcHgtMiBweS0xIHRleHQtZ3JheS04MDBcIlxuICAgICAgICAgIGRhdGEtc3BsaXRiZWUtZXZlbnQ9XCJUb2dnbGUgQWNoaWV2ZW1lbnRzXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9yZSghc2hvd01vcmUpfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dNb3JlID8gJ1Nob3cgbGVzcyDihpEnIDogJ1Nob3cgbW9yZSDihpMnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2hpZXZlbWVudHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZGluZ3MiLCJBY2hpZXZlbWVudHMiLCJkYXRhIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsImNlcnRpZmljYXRlcyIsIm1hcCIsImNlcnRpZmljYXRlIiwic3JjIiwiZGl2IiwiYSIsImhyZWYiLCJ1cmwiLCJuYW1lIiwiaW1nIiwiYWx0IiwiY2xhc3NOYW1lIiwiaDUiLCJ0aXRsZSIsInN1YnRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Achievements.tsx\n"));

/***/ })

});