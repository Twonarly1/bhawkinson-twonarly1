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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Achievements = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    if (data) {\n        var ref1;\n        var certificates = (ref1 = data.certificates) === null || ref1 === void 0 ? void 0 : ref1.map(function(certificate) {\n            var src = \"/images/certificates/\" + certificate.src;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: certificate.url,\n                            //@ts-ignore\n                            name: certificate.name,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: certificate.name,\n                                src: src,\n                                className: \"mx-auto h-fit w-fit rounded-lg object-cover shadow-md \"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"\",\n                            children: [\n                                \" \",\n                                certificate.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this)\n            }, certificate.name, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-4xl font-bold\",\n                        children: \"Achievements\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl text-gray-600\",\n                        children: \"Certifications and more...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto gap-6 space-y-6 p-3 md:grid md:grid-cols-2 md:space-y-0\",\n                children: certificates\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Achievements, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Achievements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Achievements);\nvar _c;\n$RefreshReg$(_c, \"Achievements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXVDOztBQUV2QyxJQUFNRSxZQUFZLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUMxQixJQUFnQ0YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q0csUUFBUSxHQUFpQkgsR0FBZSxHQUFoQyxFQUFFSSxXQUFXLEdBQUlKLEdBQWUsR0FBbkI7SUFDNUIsSUFBSUUsSUFBSSxFQUFFO1lBQ1dBLElBQWlCO1FBQXBDLElBQUlHLFlBQVksR0FBR0gsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBQ0csWUFBWSxjQUFqQkgsSUFBaUIsV0FBSyxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLElBQWlCLENBQUVJLEdBQUcsQ0FBQyxTQUFVQyxXQUFXLEVBQUU7WUFDL0QsSUFBSUMsR0FBRyxHQUFHLHVCQUF1QixHQUFHRCxXQUFXLENBQUNDLEdBQUc7WUFDbkQscUJBQ0UsOERBQUNDLEtBQUc7Z0JBQXdCQyxTQUFTLEVBQUMsRUFBRTswQkFDdEMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxFQUFFOztzQ0FDZiw4REFBQ0MsR0FBQzs0QkFDQUMsSUFBSSxFQUFFTCxXQUFXLENBQUNNLEdBQUc7NEJBQ3JCLFlBQVk7NEJBQ1pDLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQUFJO3NDQUV0Qiw0RUFBQ0MsS0FBRztnQ0FDRkMsR0FBRyxFQUFFVCxXQUFXLENBQUNPLElBQUk7Z0NBQ3JCTixHQUFHLEVBQUVBLEdBQUc7Z0NBQ1JFLFNBQVMsRUFBQyx3REFDWDs7Ozs7b0NBQ0M7Ozs7O2dDQUNBO3NDQUNKLDhEQUFDTyxJQUFFOzRCQUFDUCxTQUFTLEVBQUMsRUFBRTs7Z0NBQUMsR0FBQztnQ0FBQ0gsV0FBVyxDQUFDTyxJQUFJOzs7Ozs7Z0NBQU07Ozs7Ozt3QkFDckM7ZUFmRVAsV0FBVyxDQUFDTyxJQUFJOzs7O29CQWdCcEIsQ0FDUDtTQUNGLENBQUM7S0FDSDtJQUNELHFCQUNFLDhEQUFDTCxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrQkFBa0I7OzBCQUMvQiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEVBQUU7O2tDQUNmLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0JBQW9CO2tDQUFDLGNBQVk7Ozs7OzZCQUFNO2tDQUN0RCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjtrQ0FBQyw0QkFBMEI7Ozs7OzZCQUFNOzs7Ozs7cUJBQ3BFOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUVBQWlFOzBCQUM3RUwsWUFBWTs7Ozs7cUJBQ1Q7Ozs7OzthQTBDRixDQUNQO0NBQ0Y7R0E5RUtKLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWdGbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzLnRzeD8yMTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBY2hpZXZlbWVudHMgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgaWYgKGRhdGEpIHtcbiAgICB2YXIgY2VydGlmaWNhdGVzID0gZGF0YS5jZXJ0aWZpY2F0ZXM/Lm1hcChmdW5jdGlvbiAoY2VydGlmaWNhdGUpIHtcbiAgICAgIHZhciBzcmMgPSAnL2ltYWdlcy9jZXJ0aWZpY2F0ZXMvJyArIGNlcnRpZmljYXRlLnNyY1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2NlcnRpZmljYXRlLm5hbWV9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtjZXJ0aWZpY2F0ZS51cmx9XG4gICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBuYW1lPXtjZXJ0aWZpY2F0ZS5uYW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtjZXJ0aWZpY2F0ZS5uYW1lfVxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gaC1maXQgdy1maXQgcm91bmRlZC1sZyBvYmplY3QtY292ZXIgc2hhZG93LW1kXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiXCI+IHtjZXJ0aWZpY2F0ZS5uYW1lfTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkXCI+QWNoaWV2ZW1lbnRzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMFwiPkNlcnRpZmljYXRpb25zIGFuZCBtb3JlLi4uPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBnYXAtNiBzcGFjZS15LTYgcC0zIG1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6c3BhY2UteS0wXCI+XG4gICAgICAgIHtjZXJ0aWZpY2F0ZXN9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIiBtdC02IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxTaWRlYmFyUm93XG4gICAgICAgICAgSWNvbj17QmFkZ2VDaGVja0ljb259XG4gICAgICAgICAgdGl0bGU9XCJDZXJ0aWZpY2F0aW9uXCJcbiAgICAgICAgICBzcmM9e0NlcnRpZmljYXRlfVxuICAgICAgICAgIGNvbnRlbnQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC02IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxTaWRlYmFyUm93XG4gICAgICAgICAgSWNvbj17QmFkZ2VDaGVja0ljb259XG4gICAgICAgICAgdGl0bGU9XCJBd2FyZFwiXG4gICAgICAgICAgc3JjPXtUcm9waHl9XG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFNpZGViYXJSb3dcbiAgICAgICAgICBJY29uPXtCYWRnZUNoZWNrSWNvbn1cbiAgICAgICAgICB0aXRsZT1cIlNlY3VyaXR5XCJcbiAgICAgICAgICBzcmM9e0xvY2t9XG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFNpZGViYXJSb3dcbiAgICAgICAgICBJY29uPXtCYWRnZUNoZWNrSWNvbn1cbiAgICAgICAgICB0aXRsZT1cIkJyaWVmY2FzZVwiXG4gICAgICAgICAgc3JjPXtCcmllZmNhc2V9XG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTI0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cteHMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTIgcHktMSB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICBkYXRhLXNwbGl0YmVlLWV2ZW50PVwiVG9nZ2xlIEFjaGlldmVtZW50c1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vcmUoIXNob3dNb3JlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93TW9yZSA/ICdTaG93IGxlc3Mg4oaRJyA6ICdTaG93IG1vcmUg4oaTJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNoaWV2ZW1lbnRzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFjaGlldmVtZW50cyIsImRhdGEiLCJzaG93TW9yZSIsInNldFNob3dNb3JlIiwiY2VydGlmaWNhdGVzIiwibWFwIiwiY2VydGlmaWNhdGUiLCJzcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInVybCIsIm5hbWUiLCJpbWciLCJhbHQiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Achievements.tsx\n"));

/***/ })

});