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

/***/ "./src/components/GithubActivity.tsx":
/*!*******************************************!*\
  !*** ./src/components/GithubActivity.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar GithubActivity = function(param) {\n    var repos = param.repos;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: \"GitHub Activity\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mt-2 text-2xl text-gray-600\",\n                                children: \"Repos I Contributed to\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 9,\n                                columnNumber: 11\n                            }, _this),\n                            repos.contributedRepos.map(function(repo) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: repo.url,\n                                        className: \"my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-400\",\n                                                        children: [\n                                                            repo.owner.login,\n                                                            \"/\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 20,\n                                                        columnNumber: 19\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-600\",\n                                                        children: repo.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 21,\n                                                        columnNumber: 19\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 19,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: repo.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, repo.id, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, _this1);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/Twonarly1?tab=repositories\",\n                                className: \"text-sm text-blue-600\",\n                                children: [\n                                    \"View more on \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \\u2192\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl text-gray-600\",\n                                children: \"Repos I Like\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            repos.starredRepos.map(function(repo) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: repo.url,\n                                        className: \"my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-400\",\n                                                        children: [\n                                                            repo.owner.login,\n                                                            \"/\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 19\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-600\",\n                                                        children: repo.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 19\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: repo.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, repo.id, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this1);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/Twonarly1?tab=stars\",\n                                className: \"text-sm text-blue-600\",\n                                children: [\n                                    \"View more on \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \\u2192\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = GithubActivity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GithubActivity);\nvar _c;\n$RefreshReg$(_c, \"GithubActivity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HaXRodWJBY3Rpdml0eS50c3g/MDBhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEdpdGh1YkFjdGl2aXR5ID0gKHsgcmVwb3MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkXCI+R2l0SHViIEFjdGl2aXR5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMjQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLTMyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LTJ4bCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBSZXBvcyBJIENvbnRyaWJ1dGVkIHRvXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIHtyZXBvcy5jb250cmlidXRlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cmVwby5pZH0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cmVwby51cmx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNCAtbXgtNCBibG9jayByb3VuZGVkLW1kIHAtNCBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPntyZXBvLm93bmVyLmxvZ2lufS88L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwXCI+e3JlcG8ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57cmVwby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS9Ud29uYXJseTE/dGFiPXJlcG9zaXRvcmllcyd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS02MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgbW9yZSBvbiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+R2l0SHViPC9zcGFuPiDihpJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDBcIj5SZXBvcyBJIExpa2U8L3A+XG5cbiAgICAgICAgICB7cmVwb3Muc3RhcnJlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cmVwby5pZH0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cmVwby51cmx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNCAtbXgtNCBibG9jayByb3VuZGVkLW1kIHAtNCBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPntyZXBvLm93bmVyLmxvZ2lufS88L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwXCI+e3JlcG8ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57cmVwby5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vZ2l0aHViLmNvbS9Ud29uYXJseTE/dGFiPXN0YXJzJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBtb3JlIG9uIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5HaXRIdWI8L3NwYW4+IOKGklxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpdGh1YkFjdGl2aXR5XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJHaXRodWJBY3Rpdml0eSIsInJlcG9zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsImgyIiwiY29udHJpYnV0ZWRSZXBvcyIsIm1hcCIsInJlcG8iLCJsaSIsImEiLCJocmVmIiwidXJsIiwic3BhbiIsIm93bmVyIiwibG9naW4iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsInAiLCJzdGFycmVkUmVwb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GithubActivity.tsx\n"));

/***/ })

});