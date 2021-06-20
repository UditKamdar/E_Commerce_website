exports.id = "components_Layout_components_SliderList_SliderList_jsx";
exports.ids = ["components_Layout_components_SliderList_SliderList_jsx"];
exports.modules = {

/***/ "./components/Layout/components/SliderList/SliderList.jsx":
/*!****************************************************************!*\
  !*** ./components/Layout/components/SliderList/SliderList.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/UserService */ "./services/UserService.js");

var _jsxFileName = "D:\\Internship\\super-market\\frontend\\components\\Layout\\components\\SliderList\\SliderList.jsx";


 // export async function t1() {
//     const response = await fetch('/api/hello');
//     console.log(response);
//     return await response.json();
// }

const posts = [{
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "categories",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "categories__slider owl-carousel",
          children: posts.map(post => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "categories__item set-bg",
                "data-setbg": `img/categories/${post.img}`,
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
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this);
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

/***/ }),

/***/ "./services/UserService.js":
/*!*********************************!*\
  !*** ./services/UserService.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllUsers": function() { return /* binding */ getAllUsers; },
/* harmony export */   "createUser": function() { return /* binding */ createUser; },
/* harmony export */   "trial": function() { return /* binding */ trial; },
/* harmony export */   "t2": function() { return /* binding */ t2; },
/* harmony export */   "t3": function() { return /* binding */ t3; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
const fetch = __webpack_require__(/*! node-fetch */ "node-fetch");


async function getAllUsers() {
  const response = await fetch('/api/users');
  return await response.json();
}
async function createUser(data) {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: data
    })
  });
  return await response.json();
}
async function trial() {
  const response = await fetch('/api/udit');
  console.log(response);
  return await response.json();
} // export async function t1() {
//     const response = await fetch('/api/hello')
//     console.log("HIIIIII")
//     console.log(response);
//     return await response.json();
// }

async function t2() {
  try {
    console.log("Hellloooooooooooooo");
    const response = await fetch('/api/fruits');
    console.log(response);
    console.log("UDITkvkndk");
    return await response;
  } catch (error) {
    console.log(error);
    console.log("not working");
  }
}
async function t3() {
  try {
    console.log("Hellloooooooooooooo");
    const {
      response
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/fruits');
    console.log("UDITkvkndk");
    console.log(response); // return await response.json();
  } catch (error) {
    console.log(error);
    console.log("not working");
  }
}

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1tYXJrZXQvLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL1NsaWRlckxpc3QvU2xpZGVyTGlzdC5qc3giLCJ3ZWJwYWNrOi8vc3VwZXItbWFya2V0Ly4vc2VydmljZXMvVXNlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3VwZXItbWFya2V0L2lnbm9yZWR8RDpcXEludGVybnNoaXBcXHN1cGVyLW1hcmtldFxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJwb3N0cyIsInVzZXJJZCIsIm5hbWUiLCJpbWciLCJTbGlkZXJMaXN0IiwibWFwIiwicG9zdCIsImZldGNoIiwicmVxdWlyZSIsImdldEFsbFVzZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiY3JlYXRlVXNlciIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwidHJpYWwiLCJjb25zb2xlIiwibG9nIiwidDIiLCJlcnJvciIsInQzIiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUNWO0FBQ0lDLFFBQU0sRUFBRSxDQURaO0FBRUlDLE1BQUksRUFBRSxRQUZWO0FBR0lDLEtBQUcsRUFBRTtBQUhULENBRFUsRUFNVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUsVUFGVjtBQUdJQyxLQUFHLEVBQUU7QUFIVCxDQU5VLEVBV1Y7QUFDSUYsUUFBTSxFQUFFLENBRFo7QUFFSUMsTUFBSSxFQUFFLFlBRlY7QUFHSUMsS0FBRyxFQUFFO0FBSFQsQ0FYVSxFQWdCVjtBQUNJRixRQUFNLEVBQUUsQ0FEWjtBQUVJQyxNQUFJLEVBQUUs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S0FBSyxDQUFDLGFBQUQsQ0FBN0I7QUFDQWMsV0FBTyxDQUFDQyxHQUFSLENBQVlaLFFBQVo7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBLFdBQU8sTUFBTVosUUFBYjtBQUNILEdBTkQsQ0FNRSxPQUFPYyxLQUFQLEVBQWM7QUFDWkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDQUgsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNIO0FBRUo7QUFFTSxlQUFlRyxFQUFmLEdBQW9CO0FBQ3ZCLE1BQUk7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxVQUFNO0FBQUVaO0FBQUYsUUFBZSxNQUFNZ0IsZ0RBQUEsQ0FBVSxhQUFWLENBQTNCO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlaLFFBQVosRUFKQSxDQU1BO0FBQ0gsR0FQRCxDQU9FLE9BQU9jLEtBQVAsRUFBYztBQUNaSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFFSixDOzs7Ozs7Ozs7O0FDMURELGUiLCJmaWxlIjoiY29tcG9uZW50c19MYXlvdXRfY29tcG9uZW50c19TbGlkZXJMaXN0X1NsaWRlckxpc3RfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHQxLCB0MiB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJ1xyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gdDEoKSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2hlbGxvJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyB9XHJcblxyXG5jb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJmcnVpdHNcIixcclxuICAgICAgICBpbWc6IFwiZnJ1aXRzLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBuYW1lOiBcImRyeWZydWl0XCIsXHJcbiAgICAgICAgaW1nOiBcImRyeWZydWl0LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBuYW1lOiBcInZlZ2V0YWJsZXNcIixcclxuICAgICAgICBpbWc6IFwidmVnZXRhYmxlcy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJmbG91cnNcIixcclxuICAgICAgICBpbWc6IFwiZmxvdXJzLmpwZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJwdWxzZXNcIixcclxuICAgICAgICBpbWc6IFwicHVsc2VzLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBuYW1lOiBcInNwaWNlc1wiLFxyXG4gICAgICAgIGltZzogXCJzcGljZXMuanBnXCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlckxpc3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19zbGlkZXIgb3dsLWNhcm91c2VsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPXtgaW1nL2NhdGVnb3JpZXMvJHtwb3N0LmltZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9bY2F0ZWdvcnldXCIgYXM9e1wiL1wiICsgcG9zdC5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cG9zdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG5cclxuXHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL2ZydWl0cy5qcGdcIj5cclxuICAgIDxoNT48TGluayBocmVmPVwiL3Byb2R1Y3RzL2ZydWl0c1wiIGFzID48YT5GcnVpdHM8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICBcclxuPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvZHJ5ZnJ1aXQuanBnXCI+XHJcbiAgICA8aDU+PExpbmsgaHJlZj0gXCIvcHJvZHVjdHMvZHJ5ZnJ1aXRcIj48YT5EcnkgRnJ1aXQ8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICBcclxuXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL3ZlZ2V0YWJsZXMuanBnXCI+XHJcbiAgICA8aDU+PExpbmsgaHJlZj1cIi9wcm9kdWN0cy92ZWdldGFibGVzXCI+PGE+VmVnZXRhYmxlczwvYT48L0xpbms+PC9oNT5cclxuICAgIFxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy9mbG91cnMuanBlZ1wiPlxyXG4gICAgPGg1PjxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvZmxvdXJzXCI+PGE+RmxvdXJzPC9hPjwvTGluaz48L2g1PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy9wdWxzZXMuanBnXCI+XHJcbiAgICA8aDU+PExpbmsgaHJlZj1cIi9wcm9kdWN0cy9wdWxzZXNcIj48YT5QdWxzZXM8L2E+PC9MaW5rPjwvaDU+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPiAqL31cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvc3BpY2VzLmpwZ1wiPlxyXG4gICAgPGg1PjxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvc3BpY2VzXCI+PGE+U3BpY2VzPC9hPjwvTGluaz48L2g1PlxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PiAqL30iLCJjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2VycycpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZGF0YSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS91c2VyYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcjogZGF0YSB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmlhbCgpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdWRpdCcpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHQxKCkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9oZWxsbycpXHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkhJSUlJSUlcIilcclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vIH1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHQyKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxsb29vb29vb29vb29vb29cIilcclxuICAgICAgICBjb25zdCByZXNwb25zZSAgPSBhd2FpdCBmZXRjaCgnL2FwaS9mcnVpdHMnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVESVRrdmtuZGtcIik7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3Qgd29ya2luZ1wiKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHQzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxsb29vb29vb29vb29vb29cIilcclxuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZnJ1aXRzJylcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVESVRrdmtuZGtcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIilcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==