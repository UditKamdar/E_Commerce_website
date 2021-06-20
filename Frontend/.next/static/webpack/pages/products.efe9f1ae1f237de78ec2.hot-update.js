self["webpackHotUpdate_N_E"]("pages/products",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvY29tcG9uZW50cy9TbGlkZXJMaXN0L1NsaWRlckxpc3QuanN4Il0sIm5hbWVzIjpbInBvc3RzIiwidXNlcklkIiwibmFtZSIsImltZyIsIlNsaWRlckxpc3QiLCJtYXAiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFFBQU0sRUFBRSxDQURaO0FBRUlDLE1BQUksRUFBRSxRQUZWO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBRFUsRUFNVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsVUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQU5VLEVBV1Y7QUFDSUYsUUFBTSxFQUFFLENBRFo7QUFFSUMsTUFBSSxFQUFFLFlBRlY7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FYVSxFQWdCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsUUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQWhCVSxFQXFCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsUUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQXJCVSxFQTBCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsUUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQTFCVSxDQUFkO0FBaUNlLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFDakMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDWTtBQUFLLG1CQUFTLEVBQUMsaUNBQWY7QUFBQSxvQkFFUEosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xCLGdDQUNTO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLHlCQUFmO0FBQXlDLHVEQUE4QkEsSUFBSSxDQUFDSCxHQUFuQyxDQUF6QztBQUFBLHVDQUNJO0FBQUEseUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLGFBQVg7QUFBeUIsc0JBQUUsRUFBRSxNQUFNRyxJQUFJLENBQUNKLElBQXhDO0FBQUEsMkNBQ0k7QUFBQSxnQ0FBSUksSUFBSSxDQUFDSjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURUO0FBWUYsV0FiQTtBQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStCSDtLQWhDdUJFLFU7QUFvQ3hCO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQThCO0FBQzlCO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUFVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLmVmZTlmMWFlMWYyMzdkZTc4ZWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdDEsIHQyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvVXNlclNlcnZpY2UnXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MSgpIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vIH1cclxuXHJcbmNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBuYW1lOiBcImZydWl0c1wiLFxyXG4gICAgICAgIGltZzogXCJmcnVpdHMuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiZHJ5ZnJ1aXRcIixcclxuICAgICAgICBpbWc6IFwiZHJ5ZnJ1aXQuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwidmVnZXRhYmxlc1wiLFxyXG4gICAgICAgIGltZzogXCJ2ZWdldGFibGVzLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBuYW1lOiBcImZsb3Vyc1wiLFxyXG4gICAgICAgIGltZzogXCJmbG91cnMuanBlZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBuYW1lOiBcInB1bHNlc1wiLFxyXG4gICAgICAgIGltZzogXCJwdWxzZXMuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwic3BpY2VzXCIsXHJcbiAgICAgICAgaW1nOiBcInNwaWNlcy5qcGdcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyTGlzdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX3NsaWRlciBvd2wtY2Fyb3VzZWxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9e2BpbWcvY2F0ZWdvcmllcy8ke3Bvc3QuaW1nfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tjYXRlZ29yeV1cIiBhcz17XCIvXCIgKyBwb3N0Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcblxyXG5cclxuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvZnJ1aXRzLmpwZ1wiPlxyXG4gICAgPGg1PjxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvZnJ1aXRzXCIgYXMgPjxhPkZydWl0czwvYT48L0xpbms+PC9oNT5cclxuICAgIFxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy9kcnlmcnVpdC5qcGdcIj5cclxuICAgIDxoNT48TGluayBocmVmPSBcIi9wcm9kdWN0cy9kcnlmcnVpdFwiPjxhPkRyeSBGcnVpdDwvYT48L0xpbms+PC9oNT5cclxuICAgIFxyXG5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvdmVnZXRhYmxlcy5qcGdcIj5cclxuICAgIDxoNT48TGluayBocmVmPVwiL3Byb2R1Y3RzL3ZlZ2V0YWJsZXNcIj48YT5WZWdldGFibGVzPC9hPjwvTGluaz48L2g1PlxyXG4gICAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL2Zsb3Vycy5qcGVnXCI+XHJcbiAgICA8aDU+PExpbmsgaHJlZj1cIi9wcm9kdWN0cy9mbG91cnNcIj48YT5GbG91cnM8L2E+PC9MaW5rPjwvaDU+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL3B1bHNlcy5qcGdcIj5cclxuICAgIDxoNT48TGluayBocmVmPVwiL3Byb2R1Y3RzL3B1bHNlc1wiPjxhPlB1bHNlczwvYT48L0xpbms+PC9oNT5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+ICovfVxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy9zcGljZXMuanBnXCI+XHJcbiAgICA8aDU+PExpbmsgaHJlZj1cIi9wcm9kdWN0cy9zcGljZXNcIj48YT5TcGljZXM8L2E+PC9MaW5rPjwvaDU+XHJcbjwvZGl2PlxyXG5cclxuPC9kaXY+ICovfSJdLCJzb3VyY2VSb290IjoiIn0=