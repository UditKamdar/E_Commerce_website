exports.id = "services_UserService_js";
exports.ids = ["services_UserService_js"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1tYXJrZXQvLi9zZXJ2aWNlcy9Vc2VyU2VydmljZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJnZXRBbGxVc2VycyIsInJlc3BvbnNlIiwianNvbiIsImNyZWF0ZVVzZXIiLCJkYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlciIsInRyaWFsIiwiY29uc29sZSIsImxvZyIsInQyIiwiZXJyb3IiLCJ0MyIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBckI7O0FBQ0E7QUFHTyxlQUFlQyxXQUFmLEdBQTZCO0FBRWhDLFFBQU1DLFFBQVEsR0FBRyxNQUFNSCxLQUFLLENBQUMsWUFBRCxDQUE1QjtBQUNBLFNBQU8sTUFBTUcsUUFBUSxDQUFDQyxJQUFULEVBQWI7QUFDSDtBQUVNLGVBQWVDLFVBQWYsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQ25DLFFBQU1ILFFBQVEsR0FBRyxNQUFNSCxLQUFLLENBQUUsV0FBRixFQUFjO0FBQ3RDTyxVQUFNLEVBQUUsTUFEOEI7QUFFdENDLFdBQU8sRUFBRTtBQUFFLHNCQUFnQjtBQUFsQixLQUY2QjtBQUd0Q0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxVQUFJLEVBQUVOO0FBQVIsS0FBZjtBQUhnQyxHQUFkLENBQTVCO0FBS0EsU0FBTyxNQUFNSCxRQUFRLENBQUNDLElBQVQsRUFBYjtBQUNIO0FBRU0sZUFBZVMsS0FBZixHQUF1QjtBQUMxQixRQUFNVixRQUFRLEdBQUcsTUFBTUgsS0FBSyxDQUFDLFdBQUQsQ0FBNUI7QUFDQWMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLFFBQVo7QUFDQSxTQUFPLE1BQU1BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFiO0FBQ0gsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxlQUFlWSxFQUFmLEdBQW9CO0FBQ3ZCLE1BQUk7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxVQUFNWixRQUFRLEdBQUksTUFBTUgsS0FBSyxDQUFDLGFBQUQsQ0FBN0I7QUFDQWMsV0FBTyxDQUFDQyxHQUFSLENBQVlaLFFBQVo7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBLFdBQU8sTUFBTVosUUFBYjtBQUNILEdBTkQsQ0FNRSxPQUFPYyxLQUFQLEVBQWM7QUFDWkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDQUgsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNIO0FBRUo7QUFFTSxlQUFlRyxFQUFmLEdBQW9CO0FBQ3ZCLE1BQUk7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxVQUFNO0FBQUVaO0FBQUYsUUFBZSxNQUFNZ0IsZ0RBQUEsQ0FBVSxhQUFWLENBQTNCO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlaLFFBQVosRUFKQSxDQU1BO0FBQ0gsR0FQRCxDQU9FLE9BQU9jLEtBQVAsRUFBYztBQUNaSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFFSixDIiwiZmlsZSI6InNlcnZpY2VzX1VzZXJTZXJ2aWNlX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdXNlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IGRhdGEgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJpYWwoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VkaXQnKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MSgpIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKVxyXG4vLyAgICAgY29uc29sZS5sb2coXCJISUlJSUlJXCIpXHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbi8vICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyB9XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbG9vb29vb29vb29vb29vXCIpXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgID0gYXdhaXQgZmV0Y2goJy9hcGkvZnJ1aXRzJylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVRElUa3ZrbmRrXCIpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0MygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbG9vb29vb29vb29vb29vXCIpXHJcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2ZydWl0cycpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVRElUa3ZrbmRrXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB3b3JraW5nXCIpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=