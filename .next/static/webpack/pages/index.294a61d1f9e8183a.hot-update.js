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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ \"./src/components/Skills.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ \"./src/components/Projects.tsx\");\n/* harmony import */ var _components_Achievements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Achievements */ \"./src/components/Achievements.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var repos = param.repos;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), resumeData = ref[0], setResumeData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setResumeData(data);\n        });\n    }, []);\n    console.log(\"data\", repos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex w-full flex-col items-center bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.portfolio\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-5xl p-3 pt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-2xl text-gray-600\",\n                            children: \"My Contributions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        \" \",\n                                        repos.starredRepos.map(function(repo) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: repo.url,\n                                                    // data-splitbee-event={'Open External Link'}\n                                                    // data-splitbee-event-url={repo.url}\n                                                    className: \"my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"text-blue-400\",\n                                                                    children: [\n                                                                        repo.owner.login,\n                                                                        \"/\"\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                                    lineNumber: 87,\n                                                                    columnNumber: 23\n                                                                }, _this1),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"text-blue-600\",\n                                                                    children: repo.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                                    lineNumber: 88,\n                                                                    columnNumber: 23\n                                                                }, _this1)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 21\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: repo.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 21\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, _this1)\n                                            }, repo.id, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        \" \",\n                                        repos.contributedRepos.map(function(repo) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: repo.url,\n                                                    // data-splitbee-event={'Open External Link'}\n                                                    // data-splitbee-event-url={repo.url}\n                                                    className: \"my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"text-blue-400\",\n                                                                    children: [\n                                                                        repo.owner.login,\n                                                                        \"/\"\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                                    lineNumber: 106,\n                                                                    columnNumber: 23\n                                                                }, _this1),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"text-blue-600\",\n                                                                    children: repo.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                                    lineNumber: 107,\n                                                                    columnNumber: 23\n                                                                }, _this1)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 21\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: repo.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 21\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, _this1)\n                                            }, repo.id, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n}, \"bZvTV4UWTy+ePeavylPDvbKzupU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLG1EQUFtRDs7c0VBRTdELDhEQUFDRCxLQUFHOzs4RUFDRiw4REFBQ2EsTUFBSTtvRUFBQ1osU0FBUyxFQUFDLGVBQWU7O3dFQUFFTyxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsS0FBSzt3RUFBQyxHQUFDOzs7Ozs7MEVBQU87OEVBQzFELDhEQUFDRixNQUFJO29FQUFDWixTQUFTLEVBQUMsZUFBZTs4RUFBRU8sSUFBSSxDQUFDUSxJQUFJOzs7OzswRUFBUTs7Ozs7O2tFQUM5QztzRUFDTiw4REFBQ2hCLEtBQUc7c0VBQUVRLElBQUksQ0FBQ1MsV0FBVzs7Ozs7a0VBQU87Ozs7OzswREFDM0I7K0NBWkdULElBQUksQ0FBQ1UsRUFBRTs7OztzREFhWDt5Q0FDTixDQUFDOzs7Ozs7eUNBQ0M7Ozs7OztpQ0FDRDs7Ozs7O3lCQUNGOzs7OztxQkFDRjswQkFDTiw4REFBQ2xCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxPQUFPOzBCQUNwQiw0RUFBQ2YsMERBQU07Ozs7eUJBQUc7Ozs7O3FCQUNOOzs7Ozs7YUFDRixDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cydcbmltcG9ydCB7IEFjaGlldmVtZW50LCBNYWluLCBQcm9qZWN0LCBSZXBvIH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IGZldGNoUmVwb3MgfSBmcm9tICcuLi9jb3JlL2dpdGh1YidcbmltcG9ydCBBY2hpZXZlbWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY2hpZXZlbWVudHMnXG5pbXBvcnQgeyBHaXRIdWJBY3Rpdml0eSB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2l0aHViQWN0aXZpdHknXG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIG1haW46IE1haW5bXVxuICBhY2hpZXZlbWVudHM6IEFjaGlldmVtZW50W11cbiAgcHJvamVjdHM6IFByb2plY3RbXVxuICBvdGhlclByb2plY3RzOiBQcm9qZWN0XG5cbiAgcmVwb3M6IHtcbiAgICBzdGFycmVkUmVwb3M6IFJlcG9bXVxuICAgIGNvbnRyaWJ1dGVkUmVwb3M6IFJlcG9bXVxuICB9XG5cbiAgaW1hZ2VzOiBhbnlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IHN0YXJyZWRSZXBvcywgY29udHJpYnV0ZWRSZXBvcyB9ID0gYXdhaXQgZmV0Y2hSZXBvcyhcbiAgICBjb25maWcuZ2l0aHViVXNlcm5hbWUsXG4gICAgY29uZmlnLmdpdGh1YlRva2VuXG4gIClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmVwb3M6IHtcbiAgICAgICAgc3RhcnJlZFJlcG9zLFxuICAgICAgICBjb250cmlidXRlZFJlcG9zLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcG9zIH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFtyZXN1bWVEYXRhLCBzZXRSZXN1bWVEYXRhXSA9IHVzZVN0YXRlKHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9yZXN1bWVEYXRhLmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFJlc3VtZURhdGEoZGF0YSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKCdkYXRhJywgcmVwb3MpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWdyYXktMTAwXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UHJvamVjdHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEucG9ydGZvbGlvfVxuICAgICAgLz5cbiAgICAgIDxTa2lsbHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEubWFpbn1cbiAgICAgIC8+XG4gICAgICA8QWNoaWV2ZW1lbnRzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLm1haW59XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgcC0zIHB0LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkXCI+UHJvamVjdHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMFwiPk15IENvbnRyaWJ1dGlvbnM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTI0IG1kOmdyaWQtY29scy0yIG1kOmdhcC0zMlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICB7cmVwb3Muc3RhcnJlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JlcG8uaWR9PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cmVwby51cmx9XG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGEtc3BsaXRiZWUtZXZlbnQ9eydPcGVuIEV4dGVybmFsIExpbmsnfVxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhLXNwbGl0YmVlLWV2ZW50LXVybD17cmVwby51cmx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTQgLW14LTQgYmxvY2sgcm91bmRlZC1tZCBwLTQgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj57cmVwby5vd25lci5sb2dpbn0vPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIj57cmVwby5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3JlcG8uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICB7cmVwb3MuY29udHJpYnV0ZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtyZXBvLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlcG8udXJsfVxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhLXNwbGl0YmVlLWV2ZW50PXsnT3BlbiBFeHRlcm5hbCBMaW5rJ31cbiAgICAgICAgICAgICAgICAgICAgLy8gZGF0YS1zcGxpdGJlZS1ldmVudC11cmw9e3JlcG8udXJsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS00IC1teC00IGJsb2NrIHJvdW5kZWQtbWQgcC00IGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+e3JlcG8ub3duZXIubG9naW59Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwXCI+e3JlcG8ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntyZXBvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMzJcIj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiU2tpbGxzIiwiUHJvamVjdHMiLCJBY2hpZXZlbWVudHMiLCJyZXBvcyIsInJlc3VtZURhdGEiLCJzZXRSZXN1bWVEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicG9ydGZvbGlvIiwibWFpbiIsImgxIiwidWwiLCJzdGFycmVkUmVwb3MiLCJtYXAiLCJyZXBvIiwibGkiLCJhIiwiaHJlZiIsInVybCIsInNwYW4iLCJvd25lciIsImxvZ2luIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJjb250cmlidXRlZFJlcG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});