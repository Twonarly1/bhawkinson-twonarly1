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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Achievements = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    if (data) {\n        var ref1;\n        var certificates = (ref1 = data.certificates) === null || ref1 === void 0 ? void 0 : ref1.map(function(certificate) {\n            var src = \"/images/certificates/\" + certificate.src;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: certificate.url,\n                        //@ts-ignore\n                        name: certificate.name,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: certificate.name,\n                            src: src,\n                            className: \"mx-auto h-fit w-fit rounded-lg object-cover shadow-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            \" \",\n                            certificate.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, certificate.name, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl font-bold\",\n                children: \"Achievements\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 text-2xl text-gray-600\",\n                children: \"Certifications and more...\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto gap-4 space-y-6 pt-6 md:grid md:grid-cols-2 md:space-y-0\",\n                children: certificates\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Achievements, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Achievements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Achievements);\nvar _c;\n$RefreshReg$(_c, \"Achievements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXVDOztBQUV2QyxJQUFNRSxZQUFZLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUMxQixJQUFnQ0YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q0csUUFBUSxHQUFpQkgsR0FBZSxHQUFoQyxFQUFFSSxXQUFXLEdBQUlKLEdBQWUsR0FBbkI7SUFDNUIsSUFBSUUsSUFBSSxFQUFFO1lBQ1dBLElBQWlCO1FBQXBDLElBQUlHLFlBQVksR0FBR0gsQ0FBQUEsSUFBaUIsR0FBakJBLElBQUksQ0FBQ0csWUFBWSxjQUFqQkgsSUFBaUIsV0FBSyxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLElBQWlCLENBQUVJLEdBQUcsQ0FBQyxTQUFVQyxXQUFXLEVBQUU7WUFDL0QsSUFBSUMsR0FBRyxHQUFHLHVCQUF1QixHQUFHRCxXQUFXLENBQUNDLEdBQUc7WUFDbkQscUJBQ0UsOERBQUNDLEtBQUc7O2tDQUNGLDhEQUFDQyxHQUFDO3dCQUNBQyxJQUFJLEVBQUVKLFdBQVcsQ0FBQ0ssR0FBRzt3QkFDckIsWUFBWTt3QkFDWkMsSUFBSSxFQUFFTixXQUFXLENBQUNNLElBQUk7a0NBRXRCLDRFQUFDQyxLQUFHOzRCQUNGQyxHQUFHLEVBQUVSLFdBQVcsQ0FBQ00sSUFBSTs0QkFDckJMLEdBQUcsRUFBRUEsR0FBRzs0QkFDUlEsU0FBUyxFQUFDLHVEQUF1RDs7Ozs7Z0NBQ2pFOzs7Ozs0QkFDQTtrQ0FDSiw4REFBQ0MsSUFBRTs7NEJBQUMsR0FBQzs0QkFBQ1YsV0FBVyxDQUFDTSxJQUFJOzs7Ozs7NEJBQU07O2VBWnBCTixXQUFXLENBQUNNLElBQUk7Ozs7b0JBYXBCLENBQ1A7U0FDRixDQUFDO0tBQ0g7SUFDRCxxQkFDRSw4REFBQ0osS0FBRztRQUFDTyxTQUFTLEVBQUMsa0JBQWtCOzswQkFDL0IsOERBQUNQLEtBQUc7Z0JBQUNPLFNBQVMsRUFBQyxvQkFBb0I7MEJBQUMsY0FBWTs7Ozs7cUJBQU07MEJBQ3RELDhEQUFDUCxLQUFHO2dCQUFDTyxTQUFTLEVBQUMsNkJBQTZCOzBCQUFDLDRCQUU3Qzs7Ozs7cUJBQU07MEJBQ04sOERBQUNQLEtBQUc7Z0JBQUNPLFNBQVMsRUFBQyxrRUFBa0U7MEJBQzlFWCxZQUFZOzs7OztxQkFDVDs7Ozs7O2FBcUJGLENBQ1A7Q0FDRjtHQXRES0osWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBd0RsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4PzIxOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFjaGlldmVtZW50cyA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBpZiAoZGF0YSkge1xuICAgIHZhciBjZXJ0aWZpY2F0ZXMgPSBkYXRhLmNlcnRpZmljYXRlcz8ubWFwKGZ1bmN0aW9uIChjZXJ0aWZpY2F0ZSkge1xuICAgICAgdmFyIHNyYyA9ICcvaW1hZ2VzL2NlcnRpZmljYXRlcy8nICsgY2VydGlmaWNhdGUuc3JjXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17Y2VydGlmaWNhdGUubmFtZX0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2NlcnRpZmljYXRlLnVybH1cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgbmFtZT17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gaC1maXQgdy1maXQgcm91bmRlZC1sZyBvYmplY3QtY292ZXIgc2hhZG93LW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxoNT4ge2NlcnRpZmljYXRlLm5hbWV9PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTV4bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5BY2hpZXZlbWVudHM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgIENlcnRpZmljYXRpb25zIGFuZCBtb3JlLi4uXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBnYXAtNCBzcGFjZS15LTYgcHQtNiBtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOnNwYWNlLXktMFwiPlxuICAgICAgICB7Y2VydGlmaWNhdGVzfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIiBtdC02IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxTaWRlYmFyUm93XG4gICAgICAgICAgSWNvbj17QmFkZ2VDaGVja0ljb259XG4gICAgICAgICAgdGl0bGU9XCJDZXJ0aWZpY2F0aW9uXCJcbiAgICAgICAgICBzcmM9e0NlcnRpZmljYXRlfSAvL0xvY2ssIFRyb3BoeSwgQnJpZWZjYXNlXG4gICAgICAgICAgY29udGVudD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+ICovfVxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwdC0yNFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXhzIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC0yIHB5LTEgdGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgZGF0YS1zcGxpdGJlZS1ldmVudD1cIlRvZ2dsZSBBY2hpZXZlbWVudHNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb3JlKCFzaG93TW9yZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd01vcmUgPyAnU2hvdyBsZXNzIOKGkScgOiAnU2hvdyBtb3JlIOKGkyd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjaGlldmVtZW50c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBY2hpZXZlbWVudHMiLCJkYXRhIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsImNlcnRpZmljYXRlcyIsIm1hcCIsImNlcnRpZmljYXRlIiwic3JjIiwiZGl2IiwiYSIsImhyZWYiLCJ1cmwiLCJuYW1lIiwiaW1nIiwiYWx0IiwiY2xhc3NOYW1lIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Achievements.tsx\n"));

/***/ })

});