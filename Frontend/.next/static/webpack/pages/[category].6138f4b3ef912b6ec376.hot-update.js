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
        src: "../js/bootstrap.min.js%2bjquery.nice-select.min.js.pagespeed.jc.08NHUfMhux.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        children: "eval(mod_pagespeed_ND6iIrfFHB);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        children: "eval(mod_pagespeed_2CR7bSFHcL);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NhdGVnb3J5XS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImNhdGVnb3J5IiwidXNlU3RhdGUiLCJjYXRlZ29yeW5hbWUiLCJzZXRDYXRlZ29yeW5hbWUiLCJ1c2VFZmZlY3QiLCJmZWN0aERhdGEiLCJheGlvcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsImltZyIsIm5hbWUiLCJwcmljZSIsInF1YW50aXR5IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBO0FBQ0E7QUFHQTs7QUFFZSxTQUFTQSxRQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUMzQztBQUQyQyxrQkFFSEMsK0NBQVEsQ0FBQyxFQUFELENBRkw7QUFBQSxNQUVwQ0MsWUFGb0M7QUFBQSxNQUV0QkMsZUFGc0I7O0FBRzNDQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsMFJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNCQUVOTCxRQUFRLElBQUksUUFGTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUdpQk0sZ0RBQUEsQ0FBVSxhQUFWLENBSGpCOztBQUFBO0FBQUE7QUFHRUMsb0JBSEYsb0JBR0VBLElBSEY7QUFJTkosK0JBQWUsQ0FBQ0ksSUFBRCxDQUFmO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjs7QUFMTTtBQUFBLHNCQU9OVCxRQUFRLElBQUksUUFQTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQVFpQk0sZ0RBQUEsQ0FBVSxhQUFWLENBUmpCOztBQUFBO0FBQUE7QUFRRUMscUJBUkYscUJBUUVBLElBUkY7QUFTTkosK0JBQWUsQ0FBQ0ks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QUFBQSwrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTmM7QUFBQSxlQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JKO0FBQUEsa0JBRko7QUFzRUgsQyxDQUNEOztHQXJId0JoQixROztBQXVIeEJBLFFBQVEsQ0FBQ2lCLGVBQVQ7QUFBQSxzUkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGlCQUFULFNBQVNBLEtBQVQ7QUFDZmpCLG9CQURlLEdBQ0ZpQixLQURFLENBQ2ZqQixRQURlO0FBQUEsOENBR2hCO0FBQUVBLHNCQUFRLEVBQVJBO0FBQUYsYUFIZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2NhdGVnb3J5XS42MTM4ZjRiM2VmOTEyYjZlYzM3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL0NhdGVnb3J5L0NhdGVnb3J5J1xyXG5pbXBvcnQgUGFnZU5hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9QYWdlTmFtZS9QYWdlTmFtZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5TmFtZShjYXRlZ29yeSkge1xyXG5cclxuLy8gICAgICAgIHJldHVybiBjYXRlZ29yeW5hbWVcclxuLy8gICAgIH1cclxuXHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0cyh7IGNhdGVnb3J5IH0pIHtcclxuICAgIC8vIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdERhdGFCeU5hbWUoY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5bmFtZSwgc2V0Q2F0ZWdvcnluYW1lXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmVjdGhEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwiZmxvdXJzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mbG91cnMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImZydWl0c1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZnJ1aXRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJkcnlmcnVpdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZHJ5ZnJ1aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcInNwaWNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc3BpY2VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJ2ZWdldGFibGVzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS92ZWdldGFibGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJwdWxzZXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3B1bHNlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29ya2luZyB1ZGl0XCIpXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG5vdCBXb3JraW5nIHVkaXRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmVjdGhEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPZ2FuaSBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiT2dhbmksIHVuaWNhLCBjcmVhdGl2ZSwgaHRtbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VWRpdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWlybzp3Z2h0QDIwMDszMDA7NDAwOzYwMDs5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Nzcy9ib290c3RyYXAubWluLmNzcyUyYmZvbnQtYXdlc29tZS5taW4uY3NzJTJiZWxlZ2FudC1pY29ucy5jc3MlMmJuaWNlLXNlbGVjdC5jc3MlMmJqcXVlcnktdWkubWluLmNzcyUyYm93bC5jYXJvdXNlbC5taW4uY3NzJTJic2xpY2tuYXYubWluLmNzcyUyYnN0eWxlLmNzcy5wYWdlc3BlZWQuY2MuNFlOVFo3STdmMi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9jc3MvQS5ib290c3RyYXAubWluLmNzcyUyYmZvbnQtYXdlc29tZS5taW4uY3NzJTJiZWxlZ2FudC1pY29ucy5jc3MlMmJuaWNlLXNlbGVjdC5jc3MlMmJqcXVlcnktdWkubWluLmNzcyUyYm93bC5jYXJvdXNlbC5taW4uY3NzJTJic2xpY2tuYXYubWluLmNzcyUyYnN0eWxlLmNzcyUyY01jYy40WU5UWjdJN2YyLmNzcy5wYWdlc3BlZWQuY2Yuc2JLUFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Nzcy9ib290c3RyYXAubWluLmNzcytmb250LWF3ZXNvbWUubWluLmNzcytlbGVnYW50LWljb25zLmNzcytuaWNlLXNlbGVjdC5jc3MranF1ZXJ5LXVpLm1pbi5jc3Mrb3dsLmNhcm91c2VsLm1pbi5jc3Mrc2xpY2tuYXYubWluLmNzcytzdHlsZS5jc3MucGFnZXNwZWVkLmNjLjRZTlRaN0k3ZjIuY3NzXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL2pxdWVyeS0zLjMuMS5taW4uanNcIiA+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL2Jvb3RzdHJhcC5taW4uanMlMmJqcXVlcnkubmljZS1zZWxlY3QubWluLmpzLnBhZ2VzcGVlZC5qYy4wOE5IVWZNaHV4LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0PmV2YWwobW9kX3BhZ2VzcGVlZF9ORDZpSXJmRkhCKTs8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+ZXZhbChtb2RfcGFnZXNwZWVkXzJDUjdiU0ZIY0wpOzwvc2NyaXB0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvanF1ZXJ5LnNsaWNrbmF2LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL293bC5jYXJvdXNlbC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvanF1ZXJ5LXVpLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9qcy9tYWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL21peGl0dXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1VQS0yMzU4MTU2OC0xM1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+IFxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgPFBhZ2VOYW1lIHQ9XCJQcm9kdWN0c1wiIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3Qgc3BhZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeW5hbWUubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwgZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDxoNT57cHJvZHVjdC5uYW1lfSB7cHJvZHVjdC5wcmljZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDxkaXYgY2xhc3NuYW1lPVwicHJvZHVjdF9faXRlbV9fcGljIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvcHJvZHVjdC97e3Byb2R1Y3QuaW1nfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICA8L2Rpdj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fcGljIHNldC1iZ1wiIGRhdGEtc2V0Ymc9e2AvaW1nL3Byb2R1Y3QvJHtwcm9kdWN0LmltZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXJldHdlZXRcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cHJvZHVjdC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cHJvZHVjdC5wcmljZX0gUnMva2c8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UXVhbnRpdHk6LSB7cHJvZHVjdC5xdWFudGl0eX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbi8vIFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG5cclxucHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcXVlcnk7XHJcblxyXG4gICAgcmV0dXJuIHsgY2F0ZWdvcnkgfTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9