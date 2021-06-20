self["webpackHotUpdate_N_E"]("pages/[category]",{

/***/ "./pages/[category].js":
/*!*****************************!*\
  !*** ./pages/[category].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Internship_super_market_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_components_Category_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/components/Category/Category */ "./components/Layout/components/Category/Category.jsx");
/* harmony import */ var _components_Layout_components_PageName_PageName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/components/PageName/PageName */ "./components/Layout/components/PageName/PageName.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Internship\\super-market\\frontend\\pages\\[category].js",
    _s = $RefreshSig$();





 // function getPostDataByName(category) {
//        return categoryname
//     }
// }

function products(_ref) {
  _s();

  var _this = this;

  var category = _ref.category;

  // const postData = getPostDataByName(category);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      categoryname = _useState[0],
      setCategoryname = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fecthData = /*#__PURE__*/function () {
      var _ref2 = (0,D_Internship_super_market_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var _yield$axios$get, data, _yield$axios$get2, _data, _yield$axios$get3, _data2, _yield$axios$get4, _data3, _yield$axios$get5, _data4, _yield$axios$get6, _data5;

        return D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(category == "flours")) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/flours');

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                setCategoryname(data);
                console.log("workignknnkndkndckcn");

              case 8:
                if (!(category == "fruits")) {
                  _context.next = 15;
                  break;
                }

                _context.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/fruits');

              case 11:
                _yield$axios$get2 = _context.sent;
                _data = _yield$axios$get2.data;
                setCategoryname(_data);
                console.log("workignknnkndkndckcn");

              case 15:
                if (!(category == "dryfruit")) {
                  _context.next = 22;
                  break;
                }

                _context.next = 18;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/dryfruit');

              case 18:
                _yield$axios$get3 = _context.sent;
                _data2 = _yield$axios$get3.data;
                setCategoryname(_data2);
                console.log("workignknnkndkndckcn");

              case 22:
                if (!(category == "spices")) {
                  _context.next = 29;
                  break;
                }

                _context.next = 25;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/spices');

              case 25:
                _yield$axios$get4 = _context.sent;
                _data3 = _yield$axios$get4.data;
                setCategoryname(_data3);
                console.log("workignknnkndkndckcn");

              case 29:
                if (!(category == "vegetables")) {
                  _context.next = 36;
                  break;
                }

                _context.next = 32;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/vegetables');

              case 32:
                _yield$axios$get5 = _context.sent;
                _data4 = _yield$axios$get5.data;
                setCategoryname(_data4);
                console.log("workignknnkndkndckcn");

              case 36:
                if (!(category == "pulses")) {
                  _context.next = 43;
                  break;
                }

                _context.next = 39;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/pulses');

              case 39:
                _yield$axios$get6 = _context.sent;
                _data5 = _yield$axios$get6.data;
                setCategoryname(_data5);
                console.log("workignknnkndkndckcn");

              case 43:
                console.log("Working udit");
                _context.next = 49;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](0);
                console.log(" not Working udit");

              case 49:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 46]]);
      }));

      return function fecthData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fecthData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Ogani Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "keywords",
        content: "Ogani, unica, creative, html"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Udit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "../css/bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css.pagespeed.cc.4YNTZ7I7f2.css",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "../css/A.bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css%2cMcc.4YNTZ7I7f2.css.pagespeed.cf.sbKP",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "../css/bootstrap.min.css+font-awesome.min.css+elegant-icons.css+nice-select.css+jquery-ui.min.css+owl.carousel.min.css+slicknav.min.css+style.css.pagespeed.cc.4YNTZ7I7f2.css",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "../js/jquery-3.3.1.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "../js/jquery.slicknav.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "../js/owl.carousel.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "../js/jquery-ui.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "../js/main.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "../js/mixitup.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 14
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_components_Category_Category__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_components_PageName_PageName__WEBPACK_IMPORTED_MODULE_6__.default, {
      t: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "product spad",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-8 col-md-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: categoryname.map(function (product) {
                return (
                  /*#__PURE__*/
                  //             < div>
                  //   <h5>{product.name} {product.price}</h5>
                  //   <div classname="product__item__pic set-bg" data-setbg="img/product/{{product.img}}">
                  //   </div></div>
                  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-lg-4 col-md-6 col-sm-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "product__item",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "product__item__pic set-bg",
                        "data-setbg": "/img/product/".concat(product.img),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                          className: "product__item__pic__hover",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: "#",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                                className: "fa fa-heart"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 106,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 106,
                              columnNumber: 57
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 106,
                            columnNumber: 53
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: "#",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                                className: "fa fa-retweet"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 107,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 107,
                              columnNumber: 57
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 53
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: "#",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                                className: "fa fa-shopping-cart"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 108,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 108,
                              columnNumber: 57
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 53
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 49
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "product__item__text",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                          children: product.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 49
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                          children: [product.price, " Rs/kg"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 113,
                          columnNumber: 49
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                          children: ["Quantity:- ", product.quantity]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 114,
                          columnNumber: 49
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 37
                  }, _this)
                );
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this)]
  }, void 0, true);
} // Post.getInitialProps = async ({ query }) => {

_s(products, "2y/sAHUGXd/GbLpy50HlM5ON6b8=");

products.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = (0,D_Internship_super_market_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref3) {
    var query, category;
    return D_Internship_super_market_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = _ref3.query;
            category = query.category;
            return _context2.abrupt("return", {
              category: category
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NhdGVnb3J5XS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImNhdGVnb3J5IiwidXNlU3RhdGUiLCJjYXRlZ29yeW5hbWUiLCJzZXRDYXRlZ29yeW5hbWUiLCJ1c2VFZmZlY3QiLCJmZWN0aERhdGEiLCJheGlvcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsImltZyIsIm5hbWUiLCJwcmljZSIsInF1YW50aXR5IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFHQTs7QUFFZSxTQUFTQSxRQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUMzQztBQUQyQyxrQkFFSEMsK0NBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUVwQ0MsWUFGb0M7QUFBQSxNQUV0QkMsZUFGc0I7O0FBRzNDQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsMFJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNCQUVOTCxRQUFRLElBQUksUUFGTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUdpQk0sZ0RBQUEsQ0FBVSxhQUFWLENBSGpCOztBQUFBO0FBQUE7QUFHRUMsb0JBSEYsb0JBR0VBLElBSEY7QUFJTkosK0JBQWUsQ0FBQ0ksSUFBRCxDQUFmO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjs7QUFMTTtBQUFBLHNCQU9OVCxRQUFRLElBQUksUUFQTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQVFpQk0sZ0RBQUEsQ0FBVSxhQUFWLENBUmpCOztBQUFBO0FBQUE7QUFRRUMscUJBUkYscUJBUUVBLElBUkY7QUFTTkosK0JBQWUsQ0FBQ0ks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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Qko7QUFBQSxrQkFGSjtBQXNFSCxDLENBQ0Q7O0dBckh3QmhCLFE7O0FBdUh4QkEsUUFBUSxDQUFDaUIsZUFBVDtBQUFBLHNSQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsU0FBU0EsS0FBVDtBQUNmakIsb0JBRGUsR0FDRmlCLEtBREUsQ0FDZmpCLFFBRGU7QUFBQSw4Q0FHaEI7QUFBRUEsc0JBQVEsRUFBUkE7QUFBRixhQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bY2F0ZWdvcnldLjg1MzgxZTliY2U3NmIyNDBhNDc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvQ2F0ZWdvcnkvQ2F0ZWdvcnknXHJcbmltcG9ydCBQYWdlTmFtZSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL1BhZ2VOYW1lL1BhZ2VOYW1lJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlOYW1lKGNhdGVnb3J5KSB7XHJcblxyXG4vLyAgICAgICAgcmV0dXJuIGNhdGVnb3J5bmFtZVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RzKHsgY2F0ZWdvcnkgfSkge1xyXG4gICAgLy8gY29uc3QgcG9zdERhdGEgPSBnZXRQb3N0RGF0YUJ5TmFtZShjYXRlZ29yeSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnluYW1lLCBzZXRDYXRlZ29yeW5hbWVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZWN0aERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJmbG91cnNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zsb3VycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwiZnJ1aXRzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mcnVpdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImRyeWZydWl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9kcnlmcnVpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwic3BpY2VzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zcGljZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcInZlZ2V0YWJsZXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3ZlZ2V0YWJsZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcInB1bHNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHVsc2VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXb3JraW5nIHVkaXRcIilcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgbm90IFdvcmtpbmcgdWRpdFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZWN0aERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk9nYW5pIFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJPZ2FuaSwgdW5pY2EsIGNyZWF0aXZlLCBodG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5VZGl0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhaXJvOndnaHRAMjAwOzMwMDs0MDA7NjAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vY3NzL2Jvb3RzdHJhcC5taW4uY3NzJTJiZm9udC1hd2Vzb21lLm1pbi5jc3MlMmJlbGVnYW50LWljb25zLmNzcyUyYm5pY2Utc2VsZWN0LmNzcyUyYmpxdWVyeS11aS5taW4uY3NzJTJib3dsLmNhcm91c2VsLm1pbi5jc3MlMmJzbGlja25hdi5taW4uY3NzJTJic3R5bGUuY3NzLnBhZ2VzcGVlZC5jYy40WU5UWjdJN2YyLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Nzcy9BLmJvb3RzdHJhcC5taW4uY3NzJTJiZm9udC1hd2Vzb21lLm1pbi5jc3MlMmJlbGVnYW50LWljb25zLmNzcyUyYm5pY2Utc2VsZWN0LmNzcyUyYmpxdWVyeS11aS5taW4uY3NzJTJib3dsLmNhcm91c2VsLm1pbi5jc3MlMmJzbGlja25hdi5taW4uY3NzJTJic3R5bGUuY3NzJTJjTWNjLjRZTlRaN0k3ZjIuY3NzLnBhZ2VzcGVlZC5jZi5zYktQXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vY3NzL2Jvb3RzdHJhcC5taW4uY3NzK2ZvbnQtYXdlc29tZS5taW4uY3NzK2VsZWdhbnQtaWNvbnMuY3NzK25pY2Utc2VsZWN0LmNzcytqcXVlcnktdWkubWluLmNzcytvd2wuY2Fyb3VzZWwubWluLmNzcytzbGlja25hdi5taW4uY3NzK3N0eWxlLmNzcy5wYWdlc3BlZWQuY2MuNFlOVFo3STdmMi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvanF1ZXJ5LTMuMy4xLm1pbi5qc1wiID48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIHsvKiA8c2NyaXB0IHNyYz1cIi4uL2pzL2Jvb3RzdHJhcC5taW4uanMlMmJqcXVlcnkubmljZS1zZWxlY3QubWluLmpzLnBhZ2VzcGVlZC5qYy4wOE5IVWZNaHV4LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0PmV2YWwobW9kX3BhZ2VzcGVlZF9ORDZpSXJmRkhCKTs8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+ZXZhbChtb2RfcGFnZXNwZWVkXzJDUjdiU0ZIY0wpOzwvc2NyaXB0PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL2pxdWVyeS5zbGlja25hdi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9qcy9vd2wuY2Fyb3VzZWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL2pxdWVyeS11aS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvbWFpbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9qcy9taXhpdHVwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMjM1ODE1NjgtMTNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPC9IZWFkPiBcclxuICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgIDxQYWdlTmFtZSB0PVwiUHJvZHVjdHNcIiAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0IHNwYWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnluYW1lLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8IGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICA8aDU+e3Byb2R1Y3QubmFtZX0ge3Byb2R1Y3QucHJpY2V9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICA8ZGl2IGNsYXNzbmFtZT1cInByb2R1Y3RfX2l0ZW1fX3BpYyBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL3Byb2R1Y3Qve3twcm9kdWN0LmltZ319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgPC9kaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX3BpYyBzZXQtYmdcIiBkYXRhLXNldGJnPXtgL2ltZy9wcm9kdWN0LyR7cHJvZHVjdC5pbWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX19waWNfX2hvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1yZXR3ZWV0XCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnRcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Byb2R1Y3QubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Byb2R1Y3QucHJpY2V9IFJzL2tnPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlF1YW50aXR5Oi0ge3Byb2R1Y3QucXVhbnRpdHl9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4vLyBQb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuXHJcbnByb2R1Y3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiB7IGNhdGVnb3J5IH07XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==