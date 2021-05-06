(function() {
var exports = {};
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authors.service */ "./services/authors.service.js");

var _jsxFileName = "E:\\Ecommerce_NextJS-ASP.Net-Core\\Ecommerce_View\\pages\\products\\[id].js";


const getStaticPaths = async () => {
  const res = await (0,_services_authors_service__WEBPACK_IMPORTED_MODULE_2__.getAllAuthor)();
  const data = res.data;
  const paths = data.map(a => {
    return {
      params: {
        id: a.authorID.toString()
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const res = await (0,_services_authors_service__WEBPACK_IMPORTED_MODULE_2__.getAuthorById)({
    id: id
  });
  const data = res.data;
  return {
    props: {
      author: data
    }
  };
};

const Products = ({
  author
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: author.authorName
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./services/authors.service.js":
/*!*************************************!*\
  !*** ./services/authors.service.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllAuthor": function() { return /* binding */ getAllAuthor; },
/* harmony export */   "getAuthorById": function() { return /* binding */ getAuthorById; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");

const getAllAuthor = () => (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__.request)({
  url: '/Authors',
  method: 'GET',
  params: {},
  data: {}
});
const getAuthorById = ({
  id
}) => (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__.request)({
  url: `/Authors/${id}`,
  method: 'GET',
  params: {},
  data: {}
});

/***/ }),

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": function() { return /* binding */ API_BASE_URL; },
/* harmony export */   "BE_API_VERSION": function() { return /* binding */ BE_API_VERSION; },
/* harmony export */   "request": function() { return /* binding */ request; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const API_BASE_URL = "http://localhost:5000";
const BE_API_VERSION = '/api';
const request = async (_ref) => {
  let {
    host = '',
    prefix,
    url = '',
    method = 'get',
    params,
    data,
    headers = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["host", "prefix", "url", "method", "params", "data", "headers"]);

  try {
    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({
      url: `${host || `${API_BASE_URL}${BE_API_VERSION}`}${url}`,
      method,
      data,
      params,
      headers: _objectSpread({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }, headers)
    }, props));
    return result;
  } catch (error) {
    console.error(error);

    if (error.response && error.response.status === 401) {}

    throw error;
  }
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
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzIiwid2VicGFjazovL2Vjb21tZXJjZS8uL3NlcnZpY2VzL2F1dGhvcnMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9lY29tbWVyY2UvLi91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovL2Vjb21tZXJjZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZWNvbW1lcmNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9lY29tbWVyY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQYXRocyIsInJlcyIsImdldEFsbEF1dGhvciIsImRhdGEiLCJwYXRocyIsIm1hcCIsImEiLCJwYXJhbXMiLCJpZCIsImF1dGhvcklEIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImdldEF1dGhvckJ5SWQiLCJwcm9wcyIsImF1dGhvciIsIlByb2R1Y3RzIiwiYXV0aG9yTmFtZSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJBUElfQkFTRV9VUkwiLCJwcm9jZXNzIiwiQkVfQVBJX1ZFUlNJT04iLCJob3N0IiwicHJlZml4IiwiaGVhZGVycyIsInJlc3VsdCIsImF4aW9zIiwiQWNjZXB0IiwiZXJyb3IiLCJjb25zb2xlIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLHVFQUFZLEVBQTlCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQWpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLEdBQUwsQ0FBVUMsQ0FBRCxJQUFPO0FBQzVCLFdBQU87QUFDTEMsWUFBTSxFQUFFO0FBQUVDLFVBQUUsRUFBRUYsQ0FBQyxDQUFDRyxRQUFGLENBQVdDLFFBQVg7QUFBTjtBQURILEtBQVA7QUFHRCxHQUphLENBQWQ7QUFLQSxTQUFPO0FBQ0xOLFNBREs7QUFFTE8sWUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlELENBWk07QUFjQSxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUMvQyxRQUFNTCxFQUFFLEdBQUdLLE9BQU8sQ0FBQ04sTUFBUixDQUFlQyxFQUExQjtBQUNBLFFBQU1QLEdBQUcsR0FBRyxNQUFNYSx3RUFBYSxDQUFDO0FBQUVOLE1BQUUsRUFBRUE7QUFBTixHQUFELENBQS9CO0FBQ0EsUUFBTUwsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQWpCO0FBQ0EsU0FBTztBQUNMWSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFYjtBQUFWO0FBREYsR0FBUDtBQUdELENBUE07O0FBUVAsTUFBTWMsUUFBUSxHQUFHLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQWdCO0FBQy9CLHNCQUFPO0FBQUEsY0FBTUEsTUFBTSxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUEsK0RBQWVELFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFTyxNQUFNZixZQUFZLEdBQUcsTUFDMUJpQix1REFBTyxDQUFDO0FBQ05DLEtBQUcsRUFBRSxVQURDO0FBRU5DLFFBQU0sRUFBRSxLQUZGO0FBR05kLFFBQU0sRUFBRSxFQUhGO0FBSU5KLE1BQUksRUFBRTtBQUpBLENBQUQsQ0FERjtBQU9BLE1BQU1XLGFBQWEsR0FBRyxDQUFDO0FBQUVOO0FBQUYsQ0FBRCxLQUMzQlcsdURBQU8sQ0FBQztBQUNOQyxLQUFHLEVBQUcsWUFBV1osRUFBRyxFQURkO0FBRU5hLFFBQU0sRUFBRSxLQUZGO0FBR05kLFFBQU0sRUFBRSxFQUhGO0FBSU5KLE1BQUksRUFBRTtBQUpBLENBQUQsQ0FERixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ08sTUFBTW1CLFlBQVksR0FBR0MsdUJBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLE1BQXZCO0FBRUEsTUFBTUwsT0FBTyxHQUFHLGdCQVNqQjtBQUFBLE1BVHdCO0FBQzVCTSxRQUFJLEdBQUcsRUFEcUI7QUFFNUJDLFVBRjRCO0FBRzVCTixPQUFHLEdBQUcsRUFIc0I7QUFJNUJDLFVBQU0sR0FBRyxLQUptQjtBQUs1QmQsVUFMNEI7QUFNNUJKLFFBTjRCO0FBTzVCd0IsV0FBTyxHQUFHO0FBUGtCLEdBU3hCO0FBQUEsTUFERFosS0FDQzs7QUFDSixNQUFJO0FBQ0YsVUFBTWEsTUFBTSxHQUFHLE1BQU1DLDRDQUFLO0FBQ3hCVCxTQUFHLEVBQUcsR0FBRUssSUFBSSxJQUFLLEdBQUVILFlBQWEsR0FBRUUsY0FBZSxFQUFFLEdBQUVKLEdBQUksRUFEakM7QUFFeEJDLFlBRndCO0FBR3hCbEIsVUFId0I7QUFJeEJJLFlBSndCO0FBS3hCb0IsYUFBTztBQUNMRyxjQUFNLEVBQUUsa0JBREg7QUFFTCx3QkFBZ0Isa0JBRlg7QUFHTCx1Q0FBK0I7QUFIMUIsU0FJRkgsT0FKRTtBQUxpQixPQVdyQlosS0FYcUIsRUFBMUI7QUFhQSxXQUFPYSxNQUFQO0FBQ0QsR0FmRCxDQWVFLE9BQU9HLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDs7QUFDQSxRQUFJQSxLQUFLLENBQUNFLFFBQU4sSUFBa0JGLEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxNQUFmLEtBQTBCLEdBQWhELEVBQXFELENBQ3BEOztBQUNELFVBQU1ILEtBQU47QUFDRDtBQUNGLENBL0JNLEM7Ozs7Ozs7Ozs7O0FDSlAsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcHJvZHVjdHMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFsbEF1dGhvciwgZ2V0QXV0aG9yQnlJZCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhvcnMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0QWxsQXV0aG9yKCk7XHJcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoKGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBpZDogYS5hdXRob3JJRC50b1N0cmluZygpIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldEF1dGhvckJ5SWQoeyBpZDogaWQgfSk7XHJcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhdXRob3I6IGRhdGEgfSxcclxuICB9O1xyXG59O1xyXG5jb25zdCBQcm9kdWN0cyA9ICh7IGF1dGhvciB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+e2F1dGhvci5hdXRob3JOYW1lfTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQXV0aG9yID0gKCkgPT5cclxuICByZXF1ZXN0KHtcclxuICAgIHVybDogJy9BdXRob3JzJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHt9LFxyXG4gICAgZGF0YToge30sXHJcbiAgfSk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRob3JCeUlkID0gKHsgaWQgfSkgPT5cclxuICByZXF1ZXN0KHtcclxuICAgIHVybDogYC9BdXRob3JzLyR7aWR9YCxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHt9LFxyXG4gICAgZGF0YToge30sXHJcbiAgfSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5leHBvcnQgY29uc3QgQkVfQVBJX1ZFUlNJT04gPSAnL2FwaSc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IGFzeW5jICh7XHJcbiAgaG9zdCA9ICcnLFxyXG4gIHByZWZpeCxcclxuICB1cmwgPSAnJyxcclxuICBtZXRob2QgPSAnZ2V0JyxcclxuICBwYXJhbXMsXHJcbiAgZGF0YSxcclxuICBoZWFkZXJzID0ge30sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgIHVybDogYCR7aG9zdCB8fCBgJHtBUElfQkFTRV9VUkx9JHtCRV9BUElfVkVSU0lPTn1gfSR7dXJsfWAsXHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==