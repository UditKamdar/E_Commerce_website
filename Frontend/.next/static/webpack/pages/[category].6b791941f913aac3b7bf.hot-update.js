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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      name = _useState2[0],
      setName = _useState2[1];

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
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/flours');

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                setCategoryname(data);
                setName(category);
                console.log("workignknnkndkndckcn");

              case 9:
                if (!(category == "fruits")) {
                  _context.next = 17;
                  break;
                }

                _context.next = 12;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/fruits');

              case 12:
                _yield$axios$get2 = _context.sent;
                _data = _yield$axios$get2.data;
                setCategoryname(_data);
                setName(category);
                console.log("workignknnkndkndckcn");

              case 17:
                if (!(category == "dryfruit")) {
                  _context.next = 25;
                  break;
                }

                _context.next = 20;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/dryfruit');

              case 20:
                _yield$axios$get3 = _context.sent;
                _data2 = _yield$axios$get3.data;
                setCategoryname(_data2);
                setName(category);
                console.log("workignknnkndkndckcn");

              case 25:
                if (!(category == "spices")) {
                  _context.next = 33;
                  break;
                }

                _context.next = 28;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/spices');

              case 28:
                _yield$axios$get4 = _context.sent;
                _data3 = _yield$axios$get4.data;
                setCategoryname(_data3);
                setName(category);
                console.log("workignknnkndkndckcn");

              case 33:
                if (!(category == "vegetables")) {
                  _context.next = 41;
                  break;
                }

                _context.next = 36;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/vegetables');

              case 36:
                _yield$axios$get5 = _context.sent;
                _data4 = _yield$axios$get5.data;
                setCategoryname(_data4);
                setName(category);
                console.log("workignknnkndkndckcn");

              case 41:
                if (!(category == "pulses")) {
                  _context.next = 49;
                  break;
                }

                _context.next = 44;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/pulses');

              case 44:
                _yield$axios$get6 = _context.sent;
                _data5 = _yield$axios$get6.data;
                setCategoryname(_data5);
                setName(category);
                console.log("workignknnkndkndckcn");

              case 49:
                console.log("Working udit");
                _context.next = 55;
                break;

              case 52:
                _context.prev = 52;
                _context.t0 = _context["catch"](0);
                console.log(" not Working udit");

              case 55:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 52]]);
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
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Ogani Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "keywords",
        content: "Ogani, unica, creative, html"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Udit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "css/bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css.pagespeed.cc.4YNTZ7I7f2.css",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "css/A.bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css%2cMcc.4YNTZ7I7f2.css.pagespeed.cf.sbKP",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "css/bootstrap.min.css+font-awesome.min.css+elegant-icons.css+nice-select.css+jquery-ui.min.css+owl.carousel.min.css+slicknav.min.css+style.css.pagespeed.cc.4YNTZ7I7f2.css",
        type: "text/css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "js/jquery-3.3.1.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "js/bootstrap.min.js%2bjquery.nice-select.min.js.pagespeed.jc.08NHUfMhux.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        children: "eval(mod_pagespeed_ND6iIrfFHB);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        children: "eval(mod_pagespeed_2CR7bSFHcL);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "js/jquery.slicknav.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "js/owl.carousel.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "js/jquery-ui.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        async: true,
        src: "js/main.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        src: "js/mixitup.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 14
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_components_Category_Category__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_components_PageName_PageName__WEBPACK_IMPORTED_MODULE_6__.default, {
      t: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
                                lineNumber: 113,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 113,
                              columnNumber: 57
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 53
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: "#",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                                className: "fa fa-retweet"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 114,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 114,
                              columnNumber: 57
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 114,
                            columnNumber: 53
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              href: "#",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                                className: "fa fa-shopping-cart"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 115,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 115,
                              columnNumber: 57
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 115,
                            columnNumber: 53
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 49
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "product__item__text",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                          children: product.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 49
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                          children: [product.price, " Rs/kg"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 120,
                          columnNumber: 49
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                          children: ["Quantity:- ", product.quantity]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                          columnNumber: 49
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                        columnNumber: 45
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 37
                  }, _this)
                );
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, this)]
  }, void 0, true);
} // Post.getInitialProps = async ({ query }) => {

_s(products, "QOh9fbCPpByr2drDLf2TcSg6J8k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NhdGVnb3J5XS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImNhdGVnb3J5IiwidXNlU3RhdGUiLCJjYXRlZ29yeW5hbWUiLCJzZXRDYXRlZ29yeW5hbWUiLCJuYW1lIiwic2V0TmFtZSIsInVzZUVmZmVjdCIsImZlY3RoRGF0YSIsImF4aW9zIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9kdWN0IiwiaW1nIiwicHJpY2UiLCJxdWFudGl0eSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTtBQUNBO0FBR0E7O0FBRWUsU0FBU0EsUUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDM0M7QUFEMkMsa0JBRUhDLCtDQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFcENDLFlBRm9DO0FBQUEsTUFFdEJDLGVBRnNCOztBQUFBLG1CQUduQkYsK0NBQVEsQ0FBQyxFQUFELENBSFc7QUFBQSxNQUdwQ0csSUFIb0M7QUFBQSxNQUc5QkMsT0FIOEI7O0FBSTNDQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsMFJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNCQUVOUCxRQUFRLElBQUksUUFGTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUdpQlEsZ0RBQUEsQ0FBVSxhQUFWLENBSGpCOztBQUFBO0FBQUE7QUFHRUMsb0JBSEYsb0JBR0VBLElBSEY7QUFJTk4sK0JBQWUsQ0FBQ00sSUFBRCxDQUFmO0FBQ0FKLHVCQUFPLENBQUNMLFFBQUQsQ0FBUDtBQUNBVSx1QkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7O0FBTk07QUFBQSxzQkFRTlgsUUFBUSxJQUFJLFFBUk47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QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFESixlQVFJO0FBQUssaUNBQVMsRUFBQyxxQkFBZjtBQUFBLGdEQUNJO0FBQUEsb0NBQUtELE9BQU8sQ0FBQ1Q7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLGVBRUk7QUFBQSxxQ0FBS1MsT0FBTyxDQUFDRSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSixlQUdJO0FBQUEsb0RBQWdCRixPQUFPLENBQUNHLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5jO0FBQUEsZUFBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCSjtBQUFBLGtCQUZKO0FBc0VILEMsQ0FDRDs7R0E1SHdCakIsUTs7QUE4SHhCQSxRQUFRLENBQUNrQixlQUFUO0FBQUEsc1JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxTQUFTQSxLQUFUO0FBQ2ZsQixvQkFEZSxHQUNGa0IsS0FERSxDQUNmbEIsUUFEZTtBQUFBLDhDQUdoQjtBQUFFQSxzQkFBUSxFQUFSQTtBQUFGLGFBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tjYXRlZ29yeV0uNmI3OTE5NDFmOTEzYWFjM2I3YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9DYXRlZ29yeS9DYXRlZ29yeSdcclxuaW1wb3J0IFBhZ2VOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvUGFnZU5hbWUvUGFnZU5hbWUnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gZnVuY3Rpb24gZ2V0UG9zdERhdGFCeU5hbWUoY2F0ZWdvcnkpIHtcclxuXHJcbi8vICAgICAgICByZXR1cm4gY2F0ZWdvcnluYW1lXHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdHMoeyBjYXRlZ29yeSB9KSB7XHJcbiAgICAvLyBjb25zdCBwb3N0RGF0YSA9IGdldFBvc3REYXRhQnlOYW1lKGNhdGVnb3J5KTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeW5hbWUsIHNldENhdGVnb3J5bmFtZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZlY3RoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImZsb3Vyc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZmxvdXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJmcnVpdHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2ZydWl0cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwiZHJ5ZnJ1aXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2RyeWZydWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJzcGljZXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NwaWNlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwidmVnZXRhYmxlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdmVnZXRhYmxlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwicHVsc2VzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wdWxzZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldvcmtpbmcgdWRpdFwiKVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBub3QgV29ya2luZyB1ZGl0XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZlY3RoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT2dhbmkgVGVtcGxhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIk9nYW5pLCB1bmljYSwgY3JlYXRpdmUsIGh0bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlVkaXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2Fpcm86d2dodEAyMDA7MzAwOzQwMDs2MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvYm9vdHN0cmFwLm1pbi5jc3MlMmJmb250LWF3ZXNvbWUubWluLmNzcyUyYmVsZWdhbnQtaWNvbnMuY3NzJTJibmljZS1zZWxlY3QuY3NzJTJianF1ZXJ5LXVpLm1pbi5jc3MlMmJvd2wuY2Fyb3VzZWwubWluLmNzcyUyYnNsaWNrbmF2Lm1pbi5jc3MlMmJzdHlsZS5jc3MucGFnZXNwZWVkLmNjLjRZTlRaN0k3ZjIuY3NzXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL0EuYm9vdHN0cmFwLm1pbi5jc3MlMmJmb250LWF3ZXNvbWUubWluLmNzcyUyYmVsZWdhbnQtaWNvbnMuY3NzJTJibmljZS1zZWxlY3QuY3NzJTJianF1ZXJ5LXVpLm1pbi5jc3MlMmJvd2wuY2Fyb3VzZWwubWluLmNzcyUyYnNsaWNrbmF2Lm1pbi5jc3MlMmJzdHlsZS5jc3MlMmNNY2MuNFlOVFo3STdmMi5jc3MucGFnZXNwZWVkLmNmLnNiS1BcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvYm9vdHN0cmFwLm1pbi5jc3MrZm9udC1hd2Vzb21lLm1pbi5jc3MrZWxlZ2FudC1pY29ucy5jc3MrbmljZS1zZWxlY3QuY3NzK2pxdWVyeS11aS5taW4uY3NzK293bC5jYXJvdXNlbC5taW4uY3NzK3NsaWNrbmF2Lm1pbi5jc3Mrc3R5bGUuY3NzLnBhZ2VzcGVlZC5jYy40WU5UWjdJN2YyLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCAgc3JjPVwianMvanF1ZXJ5LTMuMy4xLm1pbi5qc1wiID48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgIHNyYz1cImpzL2Jvb3RzdHJhcC5taW4uanMlMmJqcXVlcnkubmljZS1zZWxlY3QubWluLmpzLnBhZ2VzcGVlZC5qYy4wOE5IVWZNaHV4LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ID5ldmFsKG1vZF9wYWdlc3BlZWRfTkQ2aUlyZkZIQik7PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ID5ldmFsKG1vZF9wYWdlc3BlZWRfMkNSN2JTRkhjTCk7PC9zY3JpcHQ+IFxyXG5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgIHNyYz1cImpzL2pxdWVyeS5zbGlja25hdi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCAgc3JjPVwianMvb3dsLmNhcm91c2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCAgc3JjPVwianMvanF1ZXJ5LXVpLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBhc3luYyAgc3JjPVwianMvbWFpbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCAgc3JjPVwianMvbWl4aXR1cC5taW4uanNcIj48L3NjcmlwdD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTIzNTgxNTY4LTEzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZD4gXHJcbiAgICAgICAgICAgIDxDYXRlZ29yeSAvPlxyXG4gICAgICAgICAgICA8UGFnZU5hbWUgdD17bmFtZX0gLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdCBzcGFkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5bmFtZS5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPCBkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgPGg1Pntwcm9kdWN0Lm5hbWV9IHtwcm9kdWN0LnByaWNlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgPGRpdiBjbGFzc25hbWU9XCJwcm9kdWN0X19pdGVtX19waWMgc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9wcm9kdWN0L3t7cHJvZHVjdC5pbWd9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDwvZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX19waWMgc2V0LWJnXCIgZGF0YS1zZXRiZz17YC9pbWcvcHJvZHVjdC8ke3Byb2R1Y3QuaW1nfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fcGljX19ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcmV0d2VldFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9kdWN0Lm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9kdWN0LnByaWNlfSBScy9rZzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5RdWFudGl0eTotIHtwcm9kdWN0LnF1YW50aXR5fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuLy8gUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcblxyXG5wcm9kdWN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSBxdWVyeTtcclxuXHJcbiAgICByZXR1cm4geyBjYXRlZ29yeSB9O1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=