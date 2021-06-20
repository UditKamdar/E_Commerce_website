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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NhdGVnb3J5XS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImNhdGVnb3J5IiwidXNlU3RhdGUiLCJjYXRlZ29yeW5hbWUiLCJzZXRDYXRlZ29yeW5hbWUiLCJuYW1lIiwic2V0TmFtZSIsInVzZUVmZmVjdCIsImZlY3RoRGF0YSIsImF4aW9zIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9kdWN0IiwiaW1nIiwicHJpY2UiLCJxdWFudGl0eSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTtBQUNBO0FBR0E7O0FBRWUsU0FBU0EsUUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDM0M7QUFEMkMsa0JBRUhDLCtDQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFcENDLFlBRm9DO0FBQUEsTUFFdEJDLGVBRnNCOztBQUFBLG1CQUduQkYsK0NBQVEsQ0FBQyxFQUFELENBSFc7QUFBQSxNQUdwQ0csSUFIb0M7QUFBQSxNQUc5QkMsT0FIOEI7O0FBSTNDQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsMFJBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNCQUVOUCxRQUFRLElBQUksUUFGTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUdpQlEsZ0RBQUEsQ0FBVSxhQUFWLENBSGpCOztBQUFBO0FBQUE7QUFHRUMsb0JBSEYsb0JBR0VBLElBSEY7QUFJTk4sK0JBQWUsQ0FBQ00sSUFBRCxDQUFmO0FBQ0FKLHVCQUFPLENBQUNMLFFBQUQsQ0FBUDtBQUNBVSx1QkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7O0FBTk07QUFBQSxzQkFRTlgsUUFBUSxJQUFJLFFBUk47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USxDQUFDa0IsZUFBVDtBQUFBLHNSQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsU0FBU0EsS0FBVDtBQUNmbEIsb0JBRGUsR0FDRmtCLEtBREUsQ0FDZmxCLFFBRGU7QUFBQSw4Q0FHaEI7QUFBRUEsc0JBQVEsRUFBUkE7QUFBRixhQUhnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bY2F0ZWdvcnldLjY1YzBmODI1MDJmYmJjOTYwMjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L2NvbXBvbmVudHMvQ2F0ZWdvcnkvQ2F0ZWdvcnknXHJcbmltcG9ydCBQYWdlTmFtZSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL1BhZ2VOYW1lL1BhZ2VOYW1lJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlOYW1lKGNhdGVnb3J5KSB7XHJcblxyXG4vLyAgICAgICAgcmV0dXJuIGNhdGVnb3J5bmFtZVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RzKHsgY2F0ZWdvcnkgfSkge1xyXG4gICAgLy8gY29uc3QgcG9zdERhdGEgPSBnZXRQb3N0RGF0YUJ5TmFtZShjYXRlZ29yeSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnluYW1lLCBzZXRDYXRlZ29yeW5hbWVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZWN0aERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJmbG91cnNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zsb3VycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwiZnJ1aXRzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mcnVpdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImRyeWZydWl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9kcnlmcnVpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwic3BpY2VzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zcGljZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcInZlZ2V0YWJsZXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3ZlZ2V0YWJsZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcInB1bHNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHVsc2VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXb3JraW5nIHVkaXRcIilcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgbm90IFdvcmtpbmcgdWRpdFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZWN0aERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk9nYW5pIFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJPZ2FuaSwgdW5pY2EsIGNyZWF0aXZlLCBodG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5VZGl0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhaXJvOndnaHRAMjAwOzMwMDs0MDA7NjAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzJTJiZm9udC1hd2Vzb21lLm1pbi5jc3MlMmJlbGVnYW50LWljb25zLmNzcyUyYm5pY2Utc2VsZWN0LmNzcyUyYmpxdWVyeS11aS5taW4uY3NzJTJib3dsLmNhcm91c2VsLm1pbi5jc3MlMmJzbGlja25hdi5taW4uY3NzJTJic3R5bGUuY3NzLnBhZ2VzcGVlZC5jYy40WU5UWjdJN2YyLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9BLmJvb3RzdHJhcC5taW4uY3NzJTJiZm9udC1hd2Vzb21lLm1pbi5jc3MlMmJlbGVnYW50LWljb25zLmNzcyUyYm5pY2Utc2VsZWN0LmNzcyUyYmpxdWVyeS11aS5taW4uY3NzJTJib3dsLmNhcm91c2VsLm1pbi5jc3MlMmJzbGlja25hdi5taW4uY3NzJTJic3R5bGUuY3NzJTJjTWNjLjRZTlRaN0k3ZjIuY3NzLnBhZ2VzcGVlZC5jZi5zYktQXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzK2ZvbnQtYXdlc29tZS5taW4uY3NzK2VsZWdhbnQtaWNvbnMuY3NzK25pY2Utc2VsZWN0LmNzcytqcXVlcnktdWkubWluLmNzcytvd2wuY2Fyb3VzZWwubWluLmNzcytzbGlja25hdi5taW4uY3NzK3N0eWxlLmNzcy5wYWdlc3BlZWQuY2MuNFlOVFo3STdmMi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8c2NyaXB0ICBzcmM9XCJqcy9qcXVlcnktMy4zLjEubWluLmpzXCIgPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCAgc3JjPVwianMvYm9vdHN0cmFwLm1pbi5qcyUyYmpxdWVyeS5uaWNlLXNlbGVjdC5taW4uanMucGFnZXNwZWVkLmpjLjA4TkhVZk1odXguanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgPmV2YWwobW9kX3BhZ2VzcGVlZF9ORDZpSXJmRkhCKTs8L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgPmV2YWwobW9kX3BhZ2VzcGVlZF8yQ1I3YlNGSGNMKTs8L3NjcmlwdD4gXHJcblxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCAgc3JjPVwianMvanF1ZXJ5LnNsaWNrbmF2LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ICBzcmM9XCJqcy9vd2wuY2Fyb3VzZWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ICBzcmM9XCJqcy9qcXVlcnktdWkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ICBzcmM9XCJqcy9tYWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0ICBzcmM9XCJqcy9taXhpdHVwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMjM1ODE1NjgtMTNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgICAgIDwvSGVhZD4gXHJcbiAgICAgICAgICAgIDxDYXRlZ29yeSAvPlxyXG4gICAgICAgICAgICA8UGFnZU5hbWUgdD17bmFtZX0gLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdCBzcGFkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5bmFtZS5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPCBkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgPGg1Pntwcm9kdWN0Lm5hbWV9IHtwcm9kdWN0LnByaWNlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgPGRpdiBjbGFzc25hbWU9XCJwcm9kdWN0X19pdGVtX19waWMgc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9wcm9kdWN0L3t7cHJvZHVjdC5pbWd9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDwvZGl2PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX19waWMgc2V0LWJnXCIgZGF0YS1zZXRiZz17YC9pbWcvcHJvZHVjdC8ke3Byb2R1Y3QuaW1nfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fcGljX19ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcmV0d2VldFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9kdWN0Lm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9kdWN0LnByaWNlfSBScy9rZzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5RdWFudGl0eTotIHtwcm9kdWN0LnF1YW50aXR5fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuLy8gUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcblxyXG5wcm9kdWN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGNhdGVnb3J5IH0gPSBxdWVyeTtcclxuXHJcbiAgICByZXR1cm4geyBjYXRlZ29yeSB9O1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=