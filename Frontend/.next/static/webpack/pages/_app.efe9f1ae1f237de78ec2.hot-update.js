self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/components/SliderList/SliderList.jsx":
/*!****************************************************************!*\
  !*** ./components/Layout/components/SliderList/SliderList.jsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/UserService */ "./services/UserService.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Internship\\super-market\\frontend\\components\\Layout\\components\\SliderList\\SliderList.jsx";


 // export async function t1() {
//     const response = await fetch('/api/hello');
//     console.log(response);
//     return await response.json();
// }

var posts = [{
  userId: 1,
  name: "fruits",
  img: "fruits.jpg"
}, {
  userId: 1,
  name: "dryfruit",
  img: "dryfruit.jpg"
}, {
  userId: 1,
  name: "vegetables",
  img: "vegetables.jpg"
}, {
  userId: 1,
  name: "flours",
  img: "flours.jpeg"
}, {
  userId: 1,
  name: "pulses",
  img: "pulses.jpg"
}, {
  userId: 1,
  name: "spices",
  img: "spices.jpg"
}];
function SliderList() {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "categories",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "categories__slider owl-carousel",
          children: posts.map(function (post) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "categories__item set-bg",
                "data-setbg": "img/categories/".concat(post.img),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/[category]",
                    as: "/" + post.name,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: post.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}
_c = SliderList;
{
  /* <div className="col-lg-3">
  <div className="categories__item set-bg" data-setbg="img/categories/fruits.jpg">
     <h5><Link href="/products/fruits" as ><a>Fruits</a></Link></h5>
     
  </div>
  </div>
  <div className="col-lg-3">
  <div className="categories__item set-bg" data-setbg="img/categories/dryfruit.jpg">
     <h5><Link href= "/products/dryfruit"><a>Dry Fruit</a></Link></h5>
     
  
  </div>
  </div>
  <div className="col-lg-3">
  <div className="categories__item set-bg" data-setbg="img/categories/vegetables.jpg">
     <h5><Link href="/products/vegetables"><a>Vegetables</a></Link></h5>
     
  </div>
  </div>
  <div className="col-lg-3">
  <div className="categories__item set-bg" data-setbg="img/categories/flours.jpeg">
     <h5><Link href="/products/flours"><a>Flours</a></Link></h5>
  </div>
  </div>
  <div className="col-lg-3">
  <div className="categories__item set-bg" data-setbg="img/categories/pulses.jpg">
     <h5><Link href="/products/pulses"><a>Pulses</a></Link></h5>
  </div>
  </div>
  <div className="col-lg-3"> */
}
{
  /* <div className="categories__item set-bg" data-setbg="img/categories/spices.jpg">
     <h5><Link href="/products/spices"><a>Spices</a></Link></h5>
  </div>
  
  </div> */
}

var _c;

$RefreshReg$(_c, "SliderList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9TbGlkZXJMaXN0L1NsaWRlckxpc3QuanN4Il0sIm5hbWVzIjpbInBvc3RzIiwidXNlcklkIiwibmFtZSIsImltZyIsIlNsaWRlckxpc3QiLCJtYXAiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFFBQU0sRUFBRSxDQURaO0FBRUlDLE1BQUksRUFBRSxRQUZWO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBRFUsRUFNVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsVUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQU5VLEVBV1Y7QUFDSUYsUUFBTSxFQUFFLENBRFo7QUFFSUMsTUFBSSxFQUFFLFlBRlY7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FYVSxFQWdCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsUUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQWhCVSxFQXFCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsUUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQXJCVSxFQTBCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsUUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQTFCVSxDQUFkO0FBaUNlLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFDakMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDWTtBQUFLLG1CQUFTLEVBQUMsaUNBQWY7QUFBQSxvQkFFUEosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xCLGdDQUNTO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLHlCQUFmO0FBQXlDLHVEQUE4QkEsSUFBSSxDQUFDSCxHQUFuQyxDQUF6QztBQUFBLHVDQUNJO0FBQUEseUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLGFBQVg7QUFBeUIsc0JBQUUsRUFBRSxNQUFNRyxJQUFJLENBQUNKLElBQXhDO0FBQUEsMkNBQ0k7QUFBQSxnQ0FBSUksSUFBSSxDQUFDSjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURUO0FBWUYsV0FiQTtBQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStCSDtLQWhDdUJFLFU7QUFvQ3hCO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQThCO0FBQzlCO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUFVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWZlOWYxYWUxZjIzN2RlNzhlYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB0MSwgdDIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9Vc2VyU2VydmljZSdcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHQxKCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9oZWxsbycpO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4vLyAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gfVxyXG5cclxuY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiZnJ1aXRzXCIsXHJcbiAgICAgICAgaW1nOiBcImZydWl0cy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJkcnlmcnVpdFwiLFxyXG4gICAgICAgIGltZzogXCJkcnlmcnVpdC5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJ2ZWdldGFibGVzXCIsXHJcbiAgICAgICAgaW1nOiBcInZlZ2V0YWJsZXMuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiZmxvdXJzXCIsXHJcbiAgICAgICAgaW1nOiBcImZsb3Vycy5qcGVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwicHVsc2VzXCIsXHJcbiAgICAgICAgaW1nOiBcInB1bHNlcy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJzcGljZXNcIixcclxuICAgICAgICBpbWc6IFwic3BpY2VzLmpwZ1wiXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJMaXN0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19fc2xpZGVyIG93bC1jYXJvdXNlbFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz17YGltZy9jYXRlZ29yaWVzLyR7cG9zdC5pbWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2NhdGVnb3J5XVwiIGFzPXtcIi9cIiArIHBvc3QubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuXHJcblxyXG48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy9mcnVpdHMuanBnXCI+XHJcbiAgICA8aDU+PExpbmsgaHJlZj1cIi9wcm9kdWN0cy9mcnVpdHNcIiBhcyA+PGE+RnJ1aXRzPC9hPjwvTGluaz48L2g1PlxyXG4gICAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL2RyeWZydWl0LmpwZ1wiPlxyXG4gICAgPGg1PjxMaW5rIGhyZWY9IFwiL3Byb2R1Y3RzL2RyeWZydWl0XCI+PGE+RHJ5IEZydWl0PC9hPjwvTGluaz48L2g1PlxyXG4gICAgXHJcblxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy92ZWdldGFibGVzLmpwZ1wiPlxyXG4gICAgPGg1PjxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvdmVnZXRhYmxlc1wiPjxhPlZlZ2V0YWJsZXM8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICBcclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvZmxvdXJzLmpwZWdcIj5cclxuICAgIDxoNT48TGluayBocmVmPVwiL3Byb2R1Y3RzL2Zsb3Vyc1wiPjxhPkZsb3VyczwvYT48L0xpbms+PC9oNT5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvcHVsc2VzLmpwZ1wiPlxyXG4gICAgPGg1PjxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvcHVsc2VzXCI+PGE+UHVsc2VzPC9hPjwvTGluaz48L2g1PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj4gKi99XHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL3NwaWNlcy5qcGdcIj5cclxuICAgIDxoNT48TGluayBocmVmPVwiL3Byb2R1Y3RzL3NwaWNlc1wiPjxhPlNwaWNlczwvYT48L0xpbms+PC9oNT5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==