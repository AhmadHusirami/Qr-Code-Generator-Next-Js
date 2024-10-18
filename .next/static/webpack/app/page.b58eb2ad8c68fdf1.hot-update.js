"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_select_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/select-size */ \"(app-pages-browser)/./src/components/select-size/index.tsx\");\n/* harmony import */ var _components_show_qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/show-qrcode */ \"(app-pages-browser)/./src/components/show-qrcode/index.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/hooks */ \"(app-pages-browser)/./src/lib/hooks.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-confetti */ \"(app-pages-browser)/./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ui/icons */ \"(app-pages-browser)/./src/components/ui/icons.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode, showLimitDialog, setShowLimitDialog } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_6__.useGenerateQRCode)();\n    const disableButton = url === \"\" || size === \"\";\n    const [showConfetti, setShowConfetti] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        const currentCount = parseInt(localStorage.getItem(\"qrCodeGenerationCount\") || \"0\");\n        const lastGenerationTime = parseInt(localStorage.getItem(\"lastGenerationTime\") || \"0\");\n        const fourHoursInMillis = 4 * 60 * 60 * 1000;\n        // Check if the user is eligible to generate more QR codes\n        if (currentCount >= 5 && Date.now() - lastGenerationTime < fourHoursInMillis) {\n            setShowLimitDialog(true);\n        }\n    }, []);\n    const openCamera = ()=>{\n        // Create an input element to open the camera\n        const input = document.createElement(\"input\");\n        input.type = \"file\";\n        input.accept = \"image/*\";\n        input.capture = \"camera\"; // Prompt the device's camera\n        input.onchange = (event)=>{\n            const file = event.target.files[0];\n            if (file) {\n                // Handle the image file (e.g., scan QR code, etc.)\n                console.log(file);\n            // Here you can add the logic to process the QR code from the image\n            }\n        };\n        // Trigger the input click to open the camera\n        input.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center md:justify-between justify-center md:container md:mt-24 mt-8\",\n        children: [\n            showConfetti && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                className: \"w-full max-w-sm mx-auto border-[0px] md:border mt-24 md:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                className: \"text-2xl flex justify-between w-full\",\n                                children: [\n                                    \"QR Code Generator\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: openCamera,\n                                        className: \"cursor-pointer block md:hidden\",\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_11__.Icons.camera, {\n                                                className: \"size-7 md:size-8 fill-current ml-2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                                children: \"Generate QR Codes effortlessly with our intuitive interface.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                        className: \"grid gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                        htmlFor: \"url\",\n                                        children: \"URL\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                        id: \"url\",\n                                        type: \"text\",\n                                        placeholder: \"https://example.com\",\n                                        required: true,\n                                        value: url,\n                                        onChange: (e)=>setUrl(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                        children: \"Size\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_select_size__WEBPACK_IMPORTED_MODULE_1__.SelectSize, {\n                                        setSize: setSize,\n                                        size: size\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooterButton, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_show_qrcode__WEBPACK_IMPORTED_MODULE_2__.ShowQRcode, {\n                            QRcode: qrCode,\n                            generateQRCode: generateQRCode,\n                            disableButton: disableButton,\n                            setColor: setColor,\n                            url: url,\n                            size: size,\n                            setSize: setSize,\n                            setShowConfetti: setShowConfetti,\n                            resetForm: ()=>{\n                                setUrl(\"\");\n                                setSize(\"\");\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Qr-Code-Generator-Next-Js\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ccGm+DBiW7NPwcHpx+oyHfHjbIs=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_6__.useGenerateQRCode\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNBOzRCQUNUUSxpQkFBaUJBOzRCQUNqQnFDLFdBQVc7Z0NBQ1QvQyxPQUFPO2dDQUNQRSxRQUFROzRCQUNWOzs7Ozs7Ozs7OztrQ0FHSiw4REFBQ2pCLDJEQUFVQTs7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNPLDBEQUFjQTs7Ozs7Ozs7Ozs7QUFHckI7R0E1RndCTTs7UUFFcEJQLHlEQUFpQkE7OztLQUZHTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IFNlbGVjdFNpemUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NlbGVjdC1zaXplXCI7XHJcbmltcG9ydCB7IFNob3dRUmNvZGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3Nob3ctcXJjb2RlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgQ2FyZEZvb3RlcixcclxuICBDYXJkRm9vdGVyQnV0dG9uLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IHVzZUdlbmVyYXRlUVJDb2RlIH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbmZldHRpIGZyb20gXCJyZWFjdC1jb25mZXR0aVwiO1xyXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyB1cmwsIHNldFVybCwgc2l6ZSwgc2V0U2l6ZSwgc2V0Q29sb3IsIHFyQ29kZSwgZ2VuZXJhdGVRUkNvZGUsIHNob3dMaW1pdERpYWxvZywgc2V0U2hvd0xpbWl0RGlhbG9nIH0gPVxyXG4gICAgdXNlR2VuZXJhdGVRUkNvZGUoKTtcclxuXHJcbiAgY29uc3QgZGlzYWJsZUJ1dHRvbiA9IHVybCA9PT0gXCJcIiB8fCBzaXplID09PSBcIlwiO1xyXG4gIGNvbnN0IFtzaG93Q29uZmV0dGksIHNldFNob3dDb25mZXR0aV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInFyQ29kZUdlbmVyYXRpb25Db3VudFwiKSB8fCBcIjBcIik7XHJcbiAgICBjb25zdCBsYXN0R2VuZXJhdGlvblRpbWUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RHZW5lcmF0aW9uVGltZVwiKSB8fCBcIjBcIik7XHJcbiAgICBjb25zdCBmb3VySG91cnNJbk1pbGxpcyA9IDQgKiA2MCAqIDYwICogMTAwMDtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBpcyBlbGlnaWJsZSB0byBnZW5lcmF0ZSBtb3JlIFFSIGNvZGVzXHJcbiAgICBpZiAoY3VycmVudENvdW50ID49IDUgJiYgRGF0ZS5ub3coKSAtIGxhc3RHZW5lcmF0aW9uVGltZSA8IGZvdXJIb3Vyc0luTWlsbGlzKSB7XHJcbiAgICAgIHNldFNob3dMaW1pdERpYWxvZyh0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5DYW1lcmEgPSAoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCB0byBvcGVuIHRoZSBjYW1lcmFcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQudHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgaW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XHJcbiAgICBpbnB1dC5jYXB0dXJlID0gXCJjYW1lcmFcIjsgLy8gUHJvbXB0IHRoZSBkZXZpY2UncyBjYW1lcmFcclxuICBcclxuICAgIGlucHV0Lm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBpbWFnZSBmaWxlIChlLmcuLCBzY2FuIFFSIGNvZGUsIGV0Yy4pXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgICAgLy8gSGVyZSB5b3UgY2FuIGFkZCB0aGUgbG9naWMgdG8gcHJvY2VzcyB0aGUgUVIgY29kZSBmcm9tIHRoZSBpbWFnZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgLy8gVHJpZ2dlciB0aGUgaW5wdXQgY2xpY2sgdG8gb3BlbiB0aGUgY2FtZXJhXHJcbiAgICBpbnB1dC5jbGljaygpO1xyXG4gIH07XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4ganVzdGlmeS1jZW50ZXIgbWQ6Y29udGFpbmVyIG1kOm10LTI0IG10LThcIj5cclxuICAgICAge3Nob3dDb25mZXR0aSAmJiA8Q29uZmV0dGkgLz59XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBteC1hdXRvIGJvcmRlci1bMHB4XSBtZDpib3JkZXIgbXQtMjQgbWQ6bXQtMFwiPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgUVIgQ29kZSBHZW5lcmF0b3JcclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvcGVuQ2FtZXJhfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBibG9jayBtZDpoaWRkZW5cIj4gey8qIFNob3cgb24gc21hbGwgc2NyZWVucyBvbmx5ICovfVxyXG4gICAgICAgICAgICAgIDxJY29ucy5jYW1lcmEgY2xhc3NOYW1lPVwic2l6ZS03IG1kOnNpemUtOCBmaWxsLWN1cnJlbnQgbWwtMlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICBHZW5lcmF0ZSBRUiBDb2RlcyBlZmZvcnRsZXNzbHkgd2l0aCBvdXIgaW50dWl0aXZlIGludGVyZmFjZS5cclxuICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXJsXCI+VVJMPC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VybH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8TGFiZWw+U2l6ZTwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxTZWxlY3RTaXplIHNldFNpemU9e3NldFNpemV9IHNpemU9e3NpemV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDxDYXJkRm9vdGVyQnV0dG9uPlxyXG4gICAgICAgICAgPFNob3dRUmNvZGVcclxuICAgICAgICAgICAgUVJjb2RlPXtxckNvZGV9XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUVJDb2RlPXtnZW5lcmF0ZVFSQ29kZX1cclxuICAgICAgICAgICAgZGlzYWJsZUJ1dHRvbj17ZGlzYWJsZUJ1dHRvbn1cclxuICAgICAgICAgICAgc2V0Q29sb3I9e3NldENvbG9yfVxyXG4gICAgICAgICAgICB1cmw9e3VybH1cclxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgICAgc2V0U2l6ZT17c2V0U2l6ZX1cclxuICAgICAgICAgICAgc2V0U2hvd0NvbmZldHRpPXtzZXRTaG93Q29uZmV0dGl9XHJcbiAgICAgICAgICAgIHJlc2V0Rm9ybT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVybChcIlwiKTtcclxuICAgICAgICAgICAgICBzZXRTaXplKFwiXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmRGb290ZXJCdXR0b24+XHJcbiAgICAgICAgPENhcmRGb290ZXI+PC9DYXJkRm9vdGVyPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNlbGVjdFNpemUiLCJTaG93UVJjb2RlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEZvb3RlciIsIkNhcmRGb290ZXJCdXR0b24iLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiSW5wdXQiLCJMYWJlbCIsInVzZUdlbmVyYXRlUVJDb2RlIiwiVG9hc3RDb250YWluZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29uZmV0dGkiLCJJY29ucyIsIkhvbWUiLCJ1cmwiLCJzZXRVcmwiLCJzaXplIiwic2V0U2l6ZSIsInNldENvbG9yIiwicXJDb2RlIiwiZ2VuZXJhdGVRUkNvZGUiLCJzaG93TGltaXREaWFsb2ciLCJzZXRTaG93TGltaXREaWFsb2ciLCJkaXNhYmxlQnV0dG9uIiwic2hvd0NvbmZldHRpIiwic2V0U2hvd0NvbmZldHRpIiwiY3VycmVudENvdW50IiwicGFyc2VJbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGFzdEdlbmVyYXRpb25UaW1lIiwiZm91ckhvdXJzSW5NaWxsaXMiLCJEYXRlIiwibm93Iiwib3BlbkNhbWVyYSIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImFjY2VwdCIsImNhcHR1cmUiLCJvbmNoYW5nZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImNsaWNrIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJjYW1lcmEiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJRUmNvZGUiLCJyZXNldEZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});