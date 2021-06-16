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

function SliderList() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "categories",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "categories__slider owl-carousel",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "categories__item set-bg",
              "data-setbg": "img/categories/fruits.jpg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "Fresh Fruit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "categories__item set-bg",
              "data-setbg": "img/categories/dryfruit.jpg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Dry Fruit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 53
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "categories__item set-bg",
              "data-setbg": "img/categories/vegetables.jpg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "http://localhost:3080/api/hello",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Vegetables"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 82
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "categories__item set-bg",
              "data-setbg": "img/categories/flours.jpeg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  children: "Flours"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "categories__item set-bg",
              "data-setbg": "img/categories/pulses.jpg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "http://localhost:3080/api/hello",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Pulses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 82
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "categories__item set-bg",
              "data-setbg": "img/categories/spices.jpg",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  children: "Spices"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1tYXJrZXQvLi9jb21wb25lbnRzL0xheW91dC9jb21wb25lbnRzL1NsaWRlckxpc3QvU2xpZGVyTGlzdC5qc3giLCJ3ZWJwYWNrOi8vc3VwZXItbWFya2V0Ly4vc2VydmljZXMvVXNlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3VwZXItbWFya2V0L2lnbm9yZWR8RDpcXEludGVybnNoaXBcXHN1cGVyLW1hcmtldFxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJTbGlkZXJMaXN0IiwiZmV0Y2giLCJyZXF1aXJlIiwiZ2V0QWxsVXNlcnMiLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdGVVc2VyIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXIiLCJ0cmlhbCIsImNvbnNvbGUiLCJsb2ciLCJ0MiIsImVycm9yIiwidDMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxzQkFDSTtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLHlCQUFmO0FBQXlDLDRCQUFXLDJCQUFwRDtBQUFBLHFDQUNJO0FBQUEsdUNBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFB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WSxhQUFaO0FBQ0g7QUFFSixDOzs7Ozs7Ozs7O0FDMURELGUiLCJmaWxlIjoiY29tcG9uZW50c19MYXlvdXRfY29tcG9uZW50c19TbGlkZXJMaXN0X1NsaWRlckxpc3RfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHQxLHQyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvVXNlclNlcnZpY2UnXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MSgpIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuLy8gICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vIH1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyTGlzdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX3NsaWRlciBvd2wtY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzX19pdGVtIHNldC1iZ1wiIGRhdGEtc2V0Ymc9XCJpbWcvY2F0ZWdvcmllcy9mcnVpdHMuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjxhPkZyZXNoIEZydWl0PC9hPjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvZHJ5ZnJ1aXQuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjxMaW5rIGhyZWY9IFwiL1wiPjxhPkRyeSBGcnVpdDwvYT48L0xpbms+PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvdmVnZXRhYmxlcy5qcGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+PExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzA4MC9hcGkvaGVsbG9cIj48YT5WZWdldGFibGVzPC9hPjwvTGluaz48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3JpZXNfX2l0ZW0gc2V0LWJnXCIgZGF0YS1zZXRiZz1cImltZy9jYXRlZ29yaWVzL2Zsb3Vycy5qcGVnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjxhIGhyZWY9XCIjXCI+RmxvdXJzPC9hPjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvcHVsc2VzLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT48TGluayBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDgwL2FwaS9oZWxsb1wiPjxhID5QdWxzZXM8L2E+PC9MaW5rPjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc19faXRlbSBzZXQtYmdcIiBkYXRhLXNldGJnPVwiaW1nL2NhdGVnb3JpZXMvc3BpY2VzLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT48YSBocmVmPVwiI1wiPlNwaWNlczwvYT48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdXNlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IGRhdGEgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpYWwoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VkaXQnKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MSgpIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKVxyXG4vLyAgICAgY29uc29sZS5sb2coXCJISUlJSUlJXCIpXHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyB9XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbG9vb29vb29vb29vb29vXCIpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgID0gYXdhaXQgZmV0Y2goJy9hcGkvZnJ1aXRzJylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVRElUa3ZrbmRrXCIpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbG9vb29vb29vb29vb29vXCIpXHJcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2ZydWl0cycpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVRElUa3ZrbmRrXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB3b3JraW5nXCIpXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=