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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ \"./src/components/Skills.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ \"./src/components/Projects.tsx\");\n/* harmony import */ var _components_Achievements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Achievements */ \"./src/components/Achievements.tsx\");\n/* harmony import */ var _components_GithubActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GithubActivity */ \"./src/components/GithubActivity.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var repos = param.repos;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), resumeData = ref[0], setResumeData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setResumeData(data);\n        });\n    }, []);\n    console.log(\"index\", resumeData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex w-full flex-col items-center space-y-32 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.portfolio\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GithubActivity__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                repos: repos\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n}, \"bZvTV4UWTy+ePeavylPDvbKzupU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWtEO0FBQ0w7QUFDSjtBQUNBO0FBQ0k7QUFJUTtBQUNJOzs7QUF5QnpELCtEQUFlLG1CQUF5QjtRQUF0QlMsS0FBSyxTQUFMQSxLQUFLOztJQUNyQixJQUFvQ1AsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6Q1EsVUFBVSxHQUFtQlIsR0FBWSxHQUEvQixFQUFFUyxhQUFhLEdBQUlULEdBQVksR0FBaEI7SUFFaENELGdEQUFTLENBQUMsV0FBTTtRQUNkVyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FDdEJDLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUs7WUFDZEwsYUFBYSxDQUFDSyxJQUFJLENBQUM7U0FDcEIsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRVIsVUFBVSxDQUFDO0lBRWhDLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQywrREFBK0Q7OzBCQUM1RSw4REFBQ2pCLHNEQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDRyw0REFBUTtnQkFDUCxZQUFZO2dCQUNaVSxJQUFJLEVBQUVOLFVBQVUsQ0FBQ1csU0FBUzs7Ozs7cUJBQzFCOzBCQUNGLDhEQUFDaEIsMERBQU07Z0JBQ0wsWUFBWTtnQkFDWlcsSUFBSSxFQUFFTixVQUFVLENBQUNZLElBQUk7Ozs7O3FCQUNyQjswQkFDRiw4REFBQ2YsZ0VBQVk7Z0JBQ1gsWUFBWTtnQkFDWlMsSUFBSSxFQUFFTixVQUFVLENBQUNZLElBQUk7Ozs7O3FCQUNyQjswQkFDRiw4REFBQ2Qsa0VBQWM7Z0JBQUNDLEtBQUssRUFBRUEsS0FBSzs7Ozs7cUJBQUk7MEJBQ2hDLDhEQUFDVSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsT0FBTzswQkFDcEIsNEVBQUNoQiwwREFBTTs7Ozt5QkFBRzs7Ozs7cUJBQ047Ozs7OzthQUNGLENBQ1A7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cydcbmltcG9ydCB7IE1haW4sIFByb2plY3QsIFJlcG8gfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZmV0Y2hSZXBvcyB9IGZyb20gJy4uL2NvcmUvZ2l0aHViJ1xuaW1wb3J0IEFjaGlldmVtZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0FjaGlldmVtZW50cydcbmltcG9ydCBHaXRodWJBY3Rpdml0eSBmcm9tICcuLi9jb21wb25lbnRzL0dpdGh1YkFjdGl2aXR5J1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICByZXBvczoge1xuICAgIHN0YXJyZWRSZXBvczogUmVwb1tdXG4gICAgY29udHJpYnV0ZWRSZXBvczogUmVwb1tdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IHN0YXJyZWRSZXBvcywgY29udHJpYnV0ZWRSZXBvcyB9ID0gYXdhaXQgZmV0Y2hSZXBvcyhcbiAgICBjb25maWcuZ2l0aHViVXNlcm5hbWUsXG4gICAgY29uZmlnLmdpdGh1YlRva2VuXG4gIClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmVwb3M6IHtcbiAgICAgICAgc3RhcnJlZFJlcG9zLFxuICAgICAgICBjb250cmlidXRlZFJlcG9zLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcG9zIH06IEFwcFByb3BzKSA9PiB7XG4gIGNvbnN0IFtyZXN1bWVEYXRhLCBzZXRSZXN1bWVEYXRhXSA9IHVzZVN0YXRlKHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9yZXN1bWVEYXRhLmpzb24nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFJlc3VtZURhdGEoZGF0YSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuICBjb25zb2xlLmxvZygnaW5kZXgnLCByZXN1bWVEYXRhKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTMyIGJnLXdoaXRlXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8UHJvamVjdHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEucG9ydGZvbGlvfVxuICAgICAgLz5cbiAgICAgIDxTa2lsbHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEubWFpbn1cbiAgICAgIC8+XG4gICAgICA8QWNoaWV2ZW1lbnRzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLm1haW59XG4gICAgICAvPlxuICAgICAgPEdpdGh1YkFjdGl2aXR5IHJlcG9zPXtyZXBvc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMzJcIj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiU2tpbGxzIiwiUHJvamVjdHMiLCJBY2hpZXZlbWVudHMiLCJHaXRodWJBY3Rpdml0eSIsInJlcG9zIiwicmVzdW1lRGF0YSIsInNldFJlc3VtZURhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwb3J0Zm9saW8iLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});