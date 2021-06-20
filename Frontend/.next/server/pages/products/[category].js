(function() {
var exports = {};
exports.id = "pages/products/[category]";
exports.ids = ["pages/products/[category]"];
exports.modules = {

/***/ "./pages/products/[category].js":
/*!**************************************!*\
  !*** ./pages/products/[category].js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_components_Category_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout/components/Category/Category */ "./components/Layout/components/Category/Category.jsx");
/* harmony import */ var _components_Layout_components_PageName_PageName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout/components/PageName/PageName */ "./components/Layout/components/PageName/PageName.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Internship\\super-market\\frontend\\pages\\products\\[category].js";




 // function getPostDataByName(category) {
//        return categoryname
//     }
// }

function products({
  category
}) {
  // const postData = getPostDataByName(category);
  const {
    0: categoryname,
    1: setCategoryname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fecthData = async () => {
      try {
        if (category == "flours") {
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/flours');
          setCategoryname(data);
          console.log("workignknnkndkndckcn");
        }

        if (category == "fruits") {
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/fruits');
          setCategoryname(data);
          console.log("workignknnkndkndckcn");
        }

        if (category == "dryfruit") {
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/dryfruit');
          setCategoryname(data);
          console.log("workignknnkndkndckcn");
        }

        if (category == "spices") {
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/spices');
          setCategoryname(data);
          console.log("workignknnkndkndckcn");
        }

        if (category == "vegetables") {
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/vegetables');
          setCategoryname(data);
          console.log("workignknnkndkndckcn");
        }

        if (category == "pulses") {
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/pulses');
          setCategoryname(data);
          console.log("workignknnkndkndckcn");
        }

        console.log("Working udit");
      } catch (err) {
        console.log(" not Working udit");
      }
    };

    fecthData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
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
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_components_Category_Category__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_components_PageName_PageName__WEBPACK_IMPORTED_MODULE_4__.default, {
      t: categoryname.category
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
              children: categoryname.map(product =>
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
                    "data-setbg": `/img/product/${product.img}`,
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
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          href: "#",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                            className: "fa fa-retweet"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 69
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          href: "#",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                            className: "fa fa-shopping-cart"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 69
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "product__item__text",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "#",
                        children: product.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 53
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 49
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                      children: [product.price, " Rs/kg"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 37
              }, this))
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

products.getInitialProps = async ({
  query
}) => {
  const {
    category
  } = query;
  return {
    category
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_components_Category_Category_jsx-components_Layout_components_PageName_Page-d54102"], function() { return __webpack_exec__("./pages/products/[category].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1tYXJrZXQvLi9wYWdlcy9wcm9kdWN0cy9bY2F0ZWdvcnldLmpzIiwid2VicGFjazovL3N1cGVyLW1hcmtldC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc3VwZXItbWFya2V0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3VwZXItbWFya2V0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdXBlci1tYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1cGVyLW1hcmtldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeW5hbWUiLCJzZXRDYXRlZ29yeW5hbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZlY3RoRGF0YSIsImRhdGEiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJtYXAiLCJwcm9kdWN0IiwiaW1nIiwibmFtZSIsInByaWNlIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTtBQUNBO0FBR0E7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWdDO0FBQzNDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDMUIsVUFBSTtBQUNBLFlBQUlMLFFBQVEsSUFBSSxRQUFoQixFQUEwQjtBQUN0QixnQkFBTTtBQUFFTTtBQUFGLGNBQVcsTUFBTUMsZ0RBQUEsQ0FBVSxhQUFWLENBQXZCO0FBQ0FMLHlCQUFlLENBQUNJLElB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QTtBQUFBLHNCQU5IO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Qko7QUFBQSxrQkFGSjtBQXFFSCxDLENBQ0Q7O0FBRUFoQixRQUFRLENBQUNpQixlQUFULEdBQTJCLE9BQU87QUFBRUM7QUFBRixDQUFQLEtBQXFCO0FBQzVDLFFBQU07QUFBRWpCO0FBQUYsTUFBZWlCLEtBQXJCO0FBRUEsU0FBTztBQUFFakI7QUFBRixHQUFQO0FBQ0gsQ0FKRCxDOzs7Ozs7Ozs7OztBQ25JQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy9bY2F0ZWdvcnldLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL0NhdGVnb3J5L0NhdGVnb3J5J1xyXG5pbXBvcnQgUGFnZU5hbWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9QYWdlTmFtZS9QYWdlTmFtZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5TmFtZShjYXRlZ29yeSkge1xyXG5cclxuLy8gICAgICAgIHJldHVybiBjYXRlZ29yeW5hbWVcclxuLy8gICAgIH1cclxuXHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0cyh7IGNhdGVnb3J5IH0pIHtcclxuICAgIC8vIGNvbnN0IHBvc3REYXRhID0gZ2V0UG9zdERhdGFCeU5hbWUoY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5bmFtZSwgc2V0Q2F0ZWdvcnluYW1lXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmVjdGhEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwiZmxvdXJzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mbG91cnMnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImZydWl0c1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZnJ1aXRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJkcnlmcnVpdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZHJ5ZnJ1aXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeW5hbWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraWdua25ua25ka25kY2tjblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSBcInNwaWNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc3BpY2VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJ2ZWdldGFibGVzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS92ZWdldGFibGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnluYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid29ya2lnbmtubmtuZGtuZGNrY25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gXCJwdWxzZXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3B1bHNlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5bmFtZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpZ25rbm5rbmRrbmRja2NuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29ya2luZyB1ZGl0XCIpXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIG5vdCBXb3JraW5nIHVkaXRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmVjdGhEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk9nYW5pIFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJPZ2FuaSwgdW5pY2EsIGNyZWF0aXZlLCBodG1sXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5VZGl0PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhaXJvOndnaHRAMjAwOzMwMDs0MDA7NjAwOzkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vY3NzL2Jvb3RzdHJhcC5taW4uY3NzJTJiZm9udC1hd2Vzb21lLm1pbi5jc3MlMmJlbGVnYW50LWljb25zLmNzcyUyYm5pY2Utc2VsZWN0LmNzcyUyYmpxdWVyeS11aS5taW4uY3NzJTJib3dsLmNhcm91c2VsLm1pbi5jc3MlMmJzbGlja25hdi5taW4uY3NzJTJic3R5bGUuY3NzLnBhZ2VzcGVlZC5jYy40WU5UWjdJN2YyLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Nzcy9BLmJvb3RzdHJhcC5taW4uY3NzJTJiZm9udC1hd2Vzb21lLm1pbi5jc3MlMmJlbGVnYW50LWljb25zLmNzcyUyYm5pY2Utc2VsZWN0LmNzcyUyYmpxdWVyeS11aS5taW4uY3NzJTJib3dsLmNhcm91c2VsLm1pbi5jc3MlMmJzbGlja25hdi5taW4uY3NzJTJic3R5bGUuY3NzJTJjTWNjLjRZTlRaN0k3ZjIuY3NzLnBhZ2VzcGVlZC5jZi5zYktQXCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vY3NzL2Jvb3RzdHJhcC5taW4uY3NzK2ZvbnQtYXdlc29tZS5taW4uY3NzK2VsZWdhbnQtaWNvbnMuY3NzK25pY2Utc2VsZWN0LmNzcytqcXVlcnktdWkubWluLmNzcytvd2wuY2Fyb3VzZWwubWluLmNzcytzbGlja25hdi5taW4uY3NzK3N0eWxlLmNzcy5wYWdlc3BlZWQuY2MuNFlOVFo3STdmMi5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvanF1ZXJ5LTMuMy4xLm1pbi5qc1wiID48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvYm9vdHN0cmFwLm1pbi5qcyUyYmpxdWVyeS5uaWNlLXNlbGVjdC5taW4uanMucGFnZXNwZWVkLmpjLjA4TkhVZk1odXguanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+ZXZhbChtb2RfcGFnZXNwZWVkX05ENmlJcmZGSEIpOzwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdD5ldmFsKG1vZF9wYWdlc3BlZWRfMkNSN2JTRkhjTCk7PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9qcy9qcXVlcnkuc2xpY2tuYXYuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvb3dsLmNhcm91c2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9qcy9qcXVlcnktdWkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2pzL21haW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vanMvbWl4aXR1cC5taW4uanNcIj48L3NjcmlwdD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPVVBLTIzNTgxNTY4LTEzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgIDxQYWdlTmFtZSB0PXtjYXRlZ29yeW5hbWUuY2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3Qgc3BhZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeW5hbWUubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwgZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDxoNT57cHJvZHVjdC5uYW1lfSB7cHJvZHVjdC5wcmljZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDxkaXYgY2xhc3NuYW1lPVwicHJvZHVjdF9faXRlbV9fcGljIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvcHJvZHVjdC97e3Byb2R1Y3QuaW1nfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICA8L2Rpdj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faXRlbV9fcGljIHNldC1iZ1wiIGRhdGEtc2V0Ymc9e2AvaW1nL3Byb2R1Y3QvJHtwcm9kdWN0LmltZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXJldHdlZXRcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj48YSBocmVmPVwiI1wiPntwcm9kdWN0Lm5hbWV9PC9hPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cHJvZHVjdC5wcmljZX0gUnMva2c8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbi8vIFBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG5cclxucHJvZHVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gcXVlcnk7XHJcblxyXG4gICAgcmV0dXJuIHsgY2F0ZWdvcnkgfTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==