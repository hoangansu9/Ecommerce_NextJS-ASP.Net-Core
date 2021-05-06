(function() {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./utils/request.js
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
    const result = await external_axios_default()(_objectSpread({
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
;// CONCATENATED MODULE: ./services/authors.service.js

const getAllAuthor = () => request({
  url: '/Authors',
  method: 'GET',
  params: {},
  data: {}
});
const getAuthorById = ({
  id
}) => request({
  url: `/Authors/${id}`,
  method: 'GET',
  params: {},
  data: {}
});
;// CONCATENATED MODULE: ./pages/products/[id].js



const getStaticPaths = async () => {
  const res = await getAllAuthor();
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
  const res = await getAuthorById({
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
  return /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
    children: author.authorName
  });
};

/* harmony default export */ var _id_ = (Products);

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(893));
module.exports = __webpack_exports__;

})();