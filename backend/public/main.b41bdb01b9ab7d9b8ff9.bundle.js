(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+qSP":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n    \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "+xHL":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/Header.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* @font-face {\n    font-family: Roboto Slab;\n    src: url('fonte/RobotoSlab-VariableFont_wght.ttf');\n } */\n\n.Header {\n  margin: 0;\n  padding: 0;\n  /* font-family: \"Roboto Slab\", sans-serif; */\n}\n\nheader {\n  background: #000000;\n  display: flex;\n  width: 100%;\n}\n\nheader a {\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  text-decoration: none;\n  font-size: 1.2vw;\n  font-weight: 600;\n}\n\nheader a:hover {\n  background: #4682b4;\n  transition: 1s;\n}\n\nheader p {\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  margin: 0%;\n}\n\n.header-text {\n  color: #f2f2f2;\n  padding: 2.4%;\n}\n\n.header-text-logged {\n  color: #f2f2f2;\n  padding: 2.4%;\n  font-size: small;\n}\n\n.header-logo {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 2%;\n  margin-right: 2%;\n  padding: 0%;\n  max-width: auto;\n  max-height: 60px;\n}\n\n.header-left {\n  height: 100%;\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n}\n\n.header-right {\n  height: 100%;\n  width: 50%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: right;\n  padding-right: 2%;\n}\n\n.post-list {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.header-post {\n  height: 12%;\n  width: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5Q7b":
/*!******************************************!*\
  !*** ./src/components/header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ "ye91");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _images_header_logo_branco_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/header/logo-branco.png */ "Br54");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App.jsx */ "FZF3");






function Header(props) {
  var info = props.info,
      setInfo = props.setInfo;

  var handleClickSair = function handleClickSair() {
    setInfo(_App_jsx__WEBPACK_IMPORTED_MODULE_5__["defaultInfo"]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "Header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "header-logo",
    src: _images_header_logo_branco_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header-right"
  }, info !== null && info !== void 0 && info.username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "header-text-logged",
    to: "/",
    onClick: handleClickSair
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Bem vindo, ".concat(info.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Sair"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/reset",
    className: "header-text"
  }, "Alterar senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/add",
    className: "header-text"
  }, "Adicionar im\xF3vel")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/login",
    className: "header-text"
  }, "Login"))));
}

/***/ }),

/***/ "7RL8":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "p2bk");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.jsx */ "FZF3");




var elem = document.createElement("div");
document.body.appendChild(elem);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), elem);

/***/ }),

/***/ "7zxX":
/*!***************************************************!*\
  !*** ./src/pages/resetPassword/ResetPassword.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResetPassword; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _model_requests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/requests */ "S27u");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fi */ "Tgqd");
/* harmony import */ var _ResetPassword_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ResetPassword.css */ "GUWr");
/* harmony import */ var _ResetPassword_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ResetPassword_css__WEBPACK_IMPORTED_MODULE_10__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function ResetPassword(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  var info = props.info,
      setInfo = props.setInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState, 2),
      seeFirst = _useState2[0],
      setSeeFirst = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState3, 2),
      seeSecond = _useState4[0],
      setSeeSecond = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState5, 2),
      passwordMatch = _useState6[0],
      setPasswordMatch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    password: "",
    confirm: ""
  }),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState7, 2),
      formData = _useState8[0],
      setFormData = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!formData.password || !formData.confirm) {
      setPasswordMatch(true);
    } else if (formData.password || formData.confirm) {
      if (formData.password !== formData.confirm) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    }
  }, [formData, formData.password, formData.confirm, setPasswordMatch]);

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var password, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              password = formData.password;
              _context.next = 4;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_8__["reset"])({
                username: info.username,
                password: password
              });

            case 4:
              response = _context.sent;

              if (!(response !== null && response !== void 0 && response.ok)) {
                alert(response.message);
              } else {
                alert("Senha alterada com sucesso");
                setInfo(_objectSpread(_objectSpread({}, info), {}, {
                  first: false
                }));
                history.push("/");
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    class: "register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    class: "title-register"
  }, "Alterar senha:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "password"
  }, "Digite a nova senha:"), !seeFirst ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Nova senha...",
    onChange: handleInputChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "password",
    placeholder: "Nova senha...",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    class: "button-eye",
    onClick: function onClick() {
      return setSeeFirst(!seeFirst);
    }
  }, seeFirst ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__["FiEye"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__["FiEyeOff"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "password"
  }, "Confirme a nova senha:"), !seeSecond ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "password",
    name: "confirm",
    placeholder: "Nova senha...",
    onChange: handleInputChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "confirm",
    placeholder: "Nova senha...",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    class: "button-eye",
    onClick: function onClick() {
      return setSeeSecond(!seeSecond);
    }
  }, seeSecond ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__["FiEye"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__["FiEyeOff"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), !passwordMatch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    style: {
      color: "red"
    }
  }, "Senhas n\xE3o correspondem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    type: "submit",
    class: "submit-button"
  }, "Salvar"))));
}

/***/ }),

/***/ "Br54":
/*!*******************************************!*\
  !*** ./src/images/header/logo-branco.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo-branco.png");

/***/ }),

/***/ "EQqt":
/*!***********************************!*\
  !*** ./src/pages/login/Login.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login.css */ "rIMi");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "Tgqd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _model_requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/requests */ "S27u");
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/header/Header.jsx */ "5Q7b");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "55Ip");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Login(props) {
  var setInfo = props.setInfo;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState, 2),
      see = _useState2[0],
      setSee = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    username: "",
    password: ""
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState3, 2),
      formData = _useState4[0],
      setFormData = _useState4[1];

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var username, password, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              username = formData.username, password = formData.password;

              if (!(!username && !password)) {
                _context.next = 6;
                break;
              }

              alert("Preencha os campos corretamente");
              _context.next = 10;
              break;

            case 6:
              _context.next = 8;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_9__["login"])({
                username: username,
                password: password
              });

            case 8:
              response = _context.sent;

              if (!(response !== null && response !== void 0 && response.ok)) {
                alert(response.message);
              } else {
                alert("Login efetuado com sucesso");
                setInfo({
                  logged: response.ok,
                  username: response.data.username,
                  name: response.data.name,
                  first: response.data.firstLogin
                });
                history.push(response.data.firstLogin ? "/reset" : "/");
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClickSee = function handleClickSee(e) {
    e.preventDefault();
    setSee(!see);
  };

  var handleVoltar = function handleVoltar() {
    return history.push("/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "Login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "title-register"
  }, "Fa\xE7a seu login:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Nome de usu\xE1rio",
    onChange: handleInputChange
  }), !see ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Senha",
    onChange: handleInputChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "text",
    name: "password",
    placeholder: "Senha",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "button-eye",
    onClick: handleClickSee
  }, see ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiEye"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiEyeOff"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "goback-button",
    onClick: handleVoltar
  }, "Voltar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    type: "submit",
    className: "tosubmit-button"
  }, "Login"))))));
}

/***/ }),

/***/ "FZF3":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: defaultInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInfo", function() { return defaultInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home_Home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/Home.jsx */ "v70p");
/* harmony import */ var _pages_login_Login_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/Login.jsx */ "EQqt");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _pages_resetPassword_ResetPassword_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/resetPassword/ResetPassword.jsx */ "7zxX");
/* harmony import */ var _pages_property_AddProperty_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/property/AddProperty.jsx */ "GftD");







var defaultInfo = {
  logged: false,
  username: undefined,
  name: undefined,
  first: undefined
};
function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInfo),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var renderHome = function renderHome() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_home_Home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      info: info,
      setInfo: setInfo
    });
  };

  var renderLogin = function renderLogin() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_login_Login_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setInfo: setInfo
    });
  };

  var renderReset = function renderReset() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_resetPassword_ResetPassword_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      info: info,
      setInfo: setInfo
    });
  };

  var renderAddProperty = function renderAddProperty() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_property_AddProperty_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      info: info,
      setInfo: setInfo
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    component: renderHome,
    path: "/",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    component: renderLogin,
    path: "/login",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    component: renderReset,
    path: "/reset",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    component: renderAddProperty,
    path: "/add",
    exact: true
  }));
}

/***/ }),

/***/ "GUWr":
/*!***************************************************!*\
  !*** ./src/pages/resetPassword/ResetPassword.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./ResetPassword.css */ "afDJ");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "GftD":
/*!********************************************!*\
  !*** ./src/pages/property/AddProperty.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddProperty; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header/Header.jsx */ "5Q7b");
/* harmony import */ var _model_requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/requests */ "S27u");
/* harmony import */ var _AddProperty_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddProperty.css */ "ul1j");
/* harmony import */ var _AddProperty_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AddProperty_css__WEBPACK_IMPORTED_MODULE_10__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function AddProperty(props) {
  var info = props.info,
      setInfo = props.setInfo;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    nrInscricao: "",
    descricao: "",
    endereco: "",
    tipo: "",
    nrQuartos: "",
    nrBanheiros: "",
    nrGaragens: "",
    valor: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var nrInscricao, descricao, endereco, tipo, nrQuartos, nrBanheiros, nrGaragens, valor, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              nrInscricao = formData.nrInscricao, descricao = formData.descricao, endereco = formData.endereco, tipo = formData.tipo, nrQuartos = formData.nrQuartos, nrBanheiros = formData.nrBanheiros, nrGaragens = formData.nrGaragens, valor = formData.valor;

              if (!(!nrInscricao || !descricao || !endereco || !tipo || !nrQuartos || !nrBanheiros || !nrGaragens || !valor)) {
                _context.next = 6;
                break;
              }

              alert("Preencha os campos corretamente.");
              _context.next = 10;
              break;

            case 6:
              _context.next = 8;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_9__["addProperty"])({
                nrInscricao: nrInscricao,
                img: "img",
                titulo: descricao,
                endereco: endereco,
                tipo: tipo,
                nrDormitorios: nrQuartos,
                nrBanheiros: nrBanheiros,
                nrVagas: nrGaragens,
                valor: valor
              });

            case 8:
              response = _context.sent;

              if (!(response !== null && response !== void 0 && response.ok)) {
                alert(response.message);
              } else {
                alert("Imóvel salvo com sucesso!");
                history.push("/");
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleVoltar = function handleVoltar() {
    return history.push("/");
  };

  function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "Login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    info: info,
    setInfo: setInfo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "title-register"
  }, "Cadastre um im\xF3vel:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrInscricao",
    style: {
      marginRight: "2px"
    }
  }, "Numero de Inscri\xE7\xE3o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrInscricao",
    onChange: handleInputChange,
    onKeyPress: isNumberKey
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "descricao",
    style: {
      marginRight: "2px"
    }
  }, "Titulo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "descricao",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "endereco",
    style: {
      marginRight: "2px"
    }
  }, "Endere\xE7o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "endereco",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("legend", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Tipo do im\xF3vel:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "radio",
    name: "tipo",
    value: "casa",
    onChange: handleInputChange,
    checked: formData.tipo === "casa"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "tipo"
  }, "Casa")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "radio",
    name: "tipo",
    value: "apartamento",
    onChange: handleInputChange,
    checked: formData.tipo === "apartamento"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "tipo"
  }, "Apartamento")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrQuartos",
    style: {
      marginRight: "2px"
    }
  }, "Numero de quartos:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrQuartos",
    min: "0",
    onChange: handleInputChange,
    onKeyPress: isNumberKey
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrBanheiros",
    style: {
      marginRight: "2px"
    }
  }, "Numero de banheiros:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrBanheiros",
    min: "0",
    onChange: handleInputChange,
    onKeyPress: isNumberKey
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrGaragens",
    style: {
      marginRight: "2px"
    }
  }, "Numero de vagas na garagem:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrGaragens",
    min: "0",
    onChange: handleInputChange,
    onKeyPress: isNumberKey
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "valor",
    style: {
      marginRight: "2px"
    }
  }, "Valor:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "valor",
    min: "0",
    onChange: handleInputChange,
    onKeyPress: isNumberKey
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    className: "goback-button",
    onClick: handleVoltar
  }, "Voltar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    type: "submit",
    className: "tosubmit-button"
  }, "Salvar"))))));
}

/***/ }),

/***/ "Nj9y":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PropertiesList/PropertyItem/PropertyBox.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nCssSyntaxError\n\n(38:3) Unknown word\n\n \u001b[90m 36 | \u001b[39m\n \u001b[90m 37 | \u001b[39m\u001b[33m.info-post\u001b[39m span\u001b[33m:\u001b[39m\u001b[36mnot\u001b[39m\u001b[36m(:last-child)\u001b[39m \u001b[33m{\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 38 | \u001b[39m  margin\n \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 39 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m 40 | \u001b[39m\n");

/***/ }),

/***/ "S27u":
/*!*******************************!*\
  !*** ./src/model/requests.js ***!
  \*******************************/
/*! exports provided: login, reset, addProperty, getProperties, registerInterest, updateSituation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProperty", function() { return addProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInterest", function() { return registerInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSituation", function() { return updateSituation; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function login(_x) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(form) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            jsonData = JSON.stringify({
              username: form.username,
              password: form.password
            });
            _context.next = 3;
            return window.fetch("/login", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context.sent;

            if (!(resp.ok === false)) {
              _context.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context.sent;
            return _context.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _login.apply(this, arguments);
}

function reset(_x2) {
  return _reset.apply(this, arguments);
}

function _reset() {
  _reset = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(form) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            jsonData = JSON.stringify({
              username: form.username,
              password: form.password
            });
            _context2.next = 3;
            return window.fetch("/reset", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context2.sent;

            if (!(resp.ok === false)) {
              _context2.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context2.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context2.sent;
            return _context2.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _reset.apply(this, arguments);
}

function addProperty(_x3) {
  return _addProperty.apply(this, arguments);
}

function _addProperty() {
  _addProperty = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(form) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            jsonData = JSON.stringify(_objectSpread({}, form));
            _context3.next = 3;
            return window.fetch("/property", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context3.sent;

            if (!(resp.ok === false)) {
              _context3.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context3.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context3.sent;
            return _context3.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addProperty.apply(this, arguments);
}

function getProperties(_x4) {
  return _getProperties.apply(this, arguments);
}

function _getProperties() {
  _getProperties = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(filtroData) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            jsonData = JSON.stringify(_objectSpread({}, filtroData));
            _context4.next = 3;
            return window.fetch("/properties", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context4.sent;

            if (!(resp.ok === false)) {
              _context4.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context4.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context4.sent;
            return _context4.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getProperties.apply(this, arguments);
}

function registerInterest(_x5) {
  return _registerInterest.apply(this, arguments);
}

function _registerInterest() {
  _registerInterest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(interest) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            jsonData = JSON.stringify(_objectSpread({}, interest));
            _context5.next = 3;
            return window.fetch("/interest", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context5.sent;

            if (!(resp.ok === false)) {
              _context5.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context5.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context5.sent;
            return _context5.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _registerInterest.apply(this, arguments);
}

function updateSituation(_x6) {
  return _updateSituation.apply(this, arguments);
}

function _updateSituation() {
  _updateSituation = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(data) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            jsonData = JSON.stringify(_objectSpread({}, data));
            _context6.next = 3;
            return window.fetch("/update", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context6.sent;

            if (!(resp.ok === false)) {
              _context6.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context6.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context6.sent;
            return _context6.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateSituation.apply(this, arguments);
}

/***/ }),

/***/ "SQxQ":
/*!********************************************************************!*\
  !*** ./src/components/PropertiesList/PropertyItem/PropertyBox.jsx ***!
  \********************************************************************/
/*! exports provided: defaultInterest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInterest", function() { return defaultInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertyBox; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PropertyBox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PropertyBox.css */ "ntt7");
/* harmony import */ var _PropertyBox_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PropertyBox_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_requests__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/requests */ "S27u");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var defaultInterest = {
  nome: "",
  telefone: ""
};
function PropertyBox(props) {
  var data = props.data,
      logged = props.logged;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState, 2),
      interestSend = _useState2[0],
      setInterestSend = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(defaultInterest),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState3, 2),
      interest = _useState4[0],
      setInterest = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.situacao),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState5, 2),
      status = _useState6[0],
      setStatus = _useState6[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              if (!(!interest.nome || !interest.telefone)) {
                _context.next = 5;
                break;
              }

              alert("Preencha todos os campos.");
              _context.next = 9;
              break;

            case 5:
              _context.next = 7;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_8__["registerInterest"])(_objectSpread(_objectSpread({}, interest), {}, {
                nr_inscricao: data.nr_inscricao
              }));

            case 7:
              response = _context.sent;

              if (response.ok) {
                alert("Interesse registrado com sucesso!");
                setInterestSend(true);
                setInterest(_objectSpread(_objectSpread({}, defaultInterest), {}, {
                  nr_inscricao: data.nr_inscricao
                }));
              } else {
                alert(response.message);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmitUpdate = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              if (status) {
                _context2.next = 5;
                break;
              }

              alert("É necessário escolher uma situação para atualizar");
              _context2.next = 9;
              break;

            case 5:
              _context2.next = 7;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_8__["updateSituation"])({
                nr_inscricao: data.nr_inscricao,
                situacao: status
              });

            case 7:
              response = _context2.sent;

              if (response.ok) {
                alert("Situação atualizada com sucesso!");
              } else {
                alert(response.message);
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmitUpdate(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setInterest(_objectSpread(_objectSpread({}, interest), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, name, value)));
  };

  var handleSelectChange = function handleSelectChange(event) {
    var value = event.target.value;
    setStatus(value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "container-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "header-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    className: "title-post"
  }, data.titulo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "content-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    className: "image-post",
    src: "imagens/casa1.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "info-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: data.situacao === "disponivel" ? "status available" : "status"
  }, data.situacao.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Endere\xE7o: ".concat(data.endereco)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Dormitorios: ".concat(data.dormitorios)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Banheiros: ".concat(data.banheiros)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Vagas na garagem: ".concat(data.vagas)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Valor do aluguel: R$".concat(data.valor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, logged ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    for: "status"
  }, "Altere o status do im\xF3vel:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    onSubmit: handleSubmitUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
    name: "status",
    onChange: handleSelectChange,
    style: {
      marginRight: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: "disponivel"
  }, "Dispon\xEDvel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: "reservado"
  }, "Reservado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: "alugado"
  }, "Alugado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: "indisponivel"
  }, "Indispon\xEDvel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    type: "submit"
  }, "Atualizar"))) : !interestSend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    name: "nome",
    placeholder: "Nome completo",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    name: "telefone",
    placeholder: "Telefone para contato",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    type: "submit"
  }, "Enviar"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, " Voc\xEA j\xE1 registrou seu interesse para este im\xF3vel.")))));
}

/***/ }),

/***/ "UqP4":
/*!*********************************!*\
  !*** ./src/pages/home/Home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Home.css */ "vpoN");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "afDJ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/resetPassword/ResetPassword.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container {\n  /* position: absolute; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.register {\n  height: 60%;\n  width: 30%;\n  background: #e8e7ea;\n  position: relative;\n  margin: 1%;\n  border-radius: 1vw;\n  border: 1px solid grey;\n  box-shadow: 5px 5px 9px #888888;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n}\n.title-register {\n  font-size: 1.5vw;\n  font-weight: 600;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\n.submit-button {\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 10% 35%;\n  cursor: pointer;\n  padding: 14px 40px;\n  font-family: \"Roboto Slab\", sans-serif;\n  border-radius: 4px;\n}\n\n.button-eye {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e0Dw":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/login/Login.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Login {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n}\n.register {\n  height: 60%;\n  width: 30%;\n  background: #e8e7ea;\n  position: relative;\n  margin: 1%;\n  border-radius: 1vw;\n  border: 1px solid grey;\n  box-shadow: 5px 5px 9px #888888;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title-register {\n  font-size: 1.5vw;\n  font-weight: 600;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\n\nform {\n  width: 100%;\n  padding-bottom: 4%;\n}\n\ninput[type=\"text\"] {\n  width: 80%;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 0.9vw;\n  background-color: white;\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding: 1% 1.5% 1% 5%;\n  margin-bottom: 3%;\n}\n\ninput[type=\"password\"] {\n  width: 80%;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 0.9vw;\n  background-color: white;\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding: 1% 1.5% 1% 5%;\n  margin-bottom: 3%;\n}\n\n.tosubmit-button {\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 16px 34px;\n  margin: 1rem;\n}\n\n.tosubmit-button:hover {\n  background-color: #2e6999;\n}\n\n.goback-button {\n  background-color: gray;\n  border: none;\n  color: black;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 16px 34px;\n  margin: 1rem;\n}\n\n.goback-button:hover {\n  background-color: darkgray;\n}\n\n.button-group {\n  display: flex;\n  padding: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "jOUZ":
/*!**********************************************************!*\
  !*** ./src/components/PropertiesList/PropertiesList.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertiesList; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertiesList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertiesList.css */ "rhbc");
/* harmony import */ var _PropertiesList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PropertiesList_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PropertyItem_PropertyBox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyItem/PropertyBox.jsx */ "SQxQ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function PropertiesList(props) {
  var properties = props.properties,
      logged = props.logged;

  var convertToListItemObject = function convertToListItemObject(item) {
    console.log(item);
    return {
      nr_inscricao: item.nr_inscricao,
      titulo: item.titulo,
      endereco: item.endereco,
      dormitorios: item.nr_dormitorios,
      banheiros: item.nr_banheiros,
      vagas: item.nr_vagas_garagem,
      valor: item.valor,
      situacao: item.situacao
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "post-list"
  }, (properties === null || properties === void 0 ? void 0 : properties.length) > 0 ? properties.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PropertyItem_PropertyBox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: convertToListItemObject(item),
      key: index,
      logged: logged
    });
  }) : "Nenhum imóvel cadastrado");
}

/***/ }),

/***/ "ntt7":
/*!********************************************************************!*\
  !*** ./src/components/PropertiesList/PropertyItem/PropertyBox.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./PropertyBox.css */ "Nj9y");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "oS72":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PropertiesList/PropertiesList.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".post-list {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "p2bk":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "+qSP");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "rIMi":
/*!***********************************!*\
  !*** ./src/pages/login/Login.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Login.css */ "e0Dw");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "rhbc":
/*!**********************************************************!*\
  !*** ./src/components/PropertiesList/PropertiesList.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PropertiesList.css */ "oS72");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "ul1j":
/*!********************************************!*\
  !*** ./src/pages/property/AddProperty.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./AddProperty.css */ "vpaP");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "v70p":
/*!*********************************!*\
  !*** ./src/pages/home/Home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home.css */ "UqP4");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/header/Header.jsx */ "5Q7b");
/* harmony import */ var _model_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/requests */ "S27u");
/* harmony import */ var _components_PropertiesList_PropertiesList_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PropertiesList/PropertiesList.jsx */ "jOUZ");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Home(props) {
  var info = props.info,
      setInfo = props.setInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    precoMinimo: "",
    precoMaximo: "",
    tipoImovel: "",
    quartos: "",
    banheiros: "",
    garagem: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
      filtroData = _useState2[0],
      setFiltroData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState3, 2),
      properties = _useState4[0],
      setProperties = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
    var response, listProperties;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_model_requests__WEBPACK_IMPORTED_MODULE_10__["getProperties"])(filtroData);

          case 2:
            response = _context.sent;
            listProperties = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(response);
            setProperties(listProperties);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [info.logged]);

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFiltroData(_objectSpread(_objectSpread({}, filtroData), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(event) {
      var response, listProperties;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.next = 3;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_10__["getProperties"])(filtroData);

            case 3:
              response = _context2.sent;
              listProperties = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(response);
              setProperties(listProperties);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    info: info,
    setInfo: setInfo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "Sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "FiltroParent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Filtros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "filtro-title"
  }, "Pre\xE7o do Aluguel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "Filtro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "De R$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    name: "precoMinimo",
    placeholder: "Min",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "Filtro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "At\xE9 R$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    name: "precoMaximo",
    placeholder: "Max",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "filtro-title"
  }, "Tipo de Im\xF3vel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "tipo-any",
    name: "tipoImovel",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "tipo-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "casa",
    id: "tipo-casa",
    name: "tipoImovel",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "tipo-casa"
  }, "Casa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "apartamento",
    id: "tipo-apartamento",
    name: "tipoImovel",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "tipo-apartamento"
  }, "Apartamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "filtro-title"
  }, "Quartos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "quartos-any",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "quartos-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "1",
    id: "quartos-1",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "quartos-1"
  }, "1 quarto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "2",
    id: "quartos-2",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "quartos-2"
  }, "2 quartos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "3",
    id: "quartos-3+",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "quartos-3+"
  }, "3+ quartos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "filtro-title"
  }, "Banheiros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "banheiros-any",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "banheiros-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "1",
    id: "banheiros-1",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "banheiros-1"
  }, "1 banheiro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "2",
    id: "banheiros-2",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "banheiros-2"
  }, "2 banheiros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "3",
    id: "banheiros-3+",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "banheiros-3+"
  }, "3+ banheiros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "filtro-title"
  }, "Garagem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "garagem-any",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "garagem-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "0",
    id: "garagem-0",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "garagem-0"
  }, "Sem vagas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "1",
    id: "garagem-1",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "garagem-1"
  }, "1 vaga"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "radio",
    value: "2",
    id: "garagem-2+",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "garagem-2+"
  }, "2+ vagas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "filtro-button",
    type: "submit"
  }, "Aplicar Filtros"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "properties-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_PropertiesList_PropertiesList_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    properties: properties,
    logged: info.logged
  })));
}

/***/ }),

/***/ "vpaP":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/property/AddProperty.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tosubmit-button {\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 16px 34px;\n  margin: 1rem;\n}\n\n.tosubmit-button:hover {\n  background-color: #2e6999;\n}\n\n.goback-button {\n  background-color: gray;\n  border: none;\n  color: black;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 16px 34px;\n  margin: 1rem;\n}\n\n.goback-button:hover {\n  background-color: darkgray;\n}\n\n.button-group {\n  display: flex;\n  padding: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "vpoN":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/home/Home.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.home-body {\n  display: flex;\n}\n\n.properties-parent {\n  /* background-color: cornflowerblue;\n  height: 100px;\n  margin-left: 15%;\n  margin-right: 15%; */\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5%;\n  /* background-color: cornflowerblue; */\n}\n\n.Teste{\n  height: 100px;\n  width: 100px;\n  background-color: crimson;\n}\n\n.Sidebar {\n  background-color: #d3d4dd;\n  height: 100%;\n  width: 220px;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n}\n\n.FiltroParent {\n  overflow-y: scroll;\n  height: 60%;\n}\n\n.Filtro {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.Filtro p {\n  font-size: 16px;\n  margin: 0px;\n}\n\n.Filtro input {\n  width: 50%;\n  height: 16px;\n}\n\n.FiltroRadio {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: left;\n}\n\n.filtro-title {\n  margin-top: 24px;\n  margin-bottom: 12px;\n}\n\n.filtro-button {\n  margin-top: 24px;\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  padding: 14px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ye91":
/*!******************************************!*\
  !*** ./src/components/header/Header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Header.css */ "+xHL");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

},[["7RL8","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFkZXIvbG9nby1icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3M/MjkxMCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0eUl0ZW0vUHJvcGVydHlCb3guanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL0hvbWUuY3NzPzlkYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luL0xvZ2luLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvcGVydGllc0xpc3QvUHJvcGVydHlJdGVtL1Byb3BlcnR5Qm94LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz83ZDFmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3M/Y2IxOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5jc3M/M2NmNCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuY3NzP2ZjMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb3BlcnR5L0FkZFByb3BlcnR5LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmNzcz80OTg1Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiaW5mbyIsInNldEluZm8iLCJoYW5kbGVDbGlja1NhaXIiLCJkZWZhdWx0SW5mbyIsImxvZ28iLCJ1c2VybmFtZSIsIm5hbWUiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJSZXNldFBhc3N3b3JkIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VTdGF0ZSIsInNlZUZpcnN0Iiwic2V0U2VlRmlyc3QiLCJzZWVTZWNvbmQiLCJzZXRTZWVTZWNvbmQiLCJwYXNzd29yZE1hdGNoIiwic2V0UGFzc3dvcmRNYXRjaCIsInBhc3N3b3JkIiwiY29uZmlybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VFZmZlY3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicmVzcG9uc2UiLCJvayIsImFsZXJ0IiwibWVzc2FnZSIsImZpcnN0IiwicHVzaCIsImNvbG9yIiwiTG9naW4iLCJzZWUiLCJzZXRTZWUiLCJsb2dpbiIsImxvZ2dlZCIsImRhdGEiLCJmaXJzdExvZ2luIiwiaGFuZGxlQ2xpY2tTZWUiLCJlIiwiaGFuZGxlVm9sdGFyIiwidW5kZWZpbmVkIiwiQXBwIiwicmVuZGVySG9tZSIsInJlbmRlckxvZ2luIiwicmVuZGVyUmVzZXQiLCJyZW5kZXJBZGRQcm9wZXJ0eSIsIkFkZFByb3BlcnR5IiwibnJJbnNjcmljYW8iLCJkZXNjcmljYW8iLCJlbmRlcmVjbyIsInRpcG8iLCJuclF1YXJ0b3MiLCJuckJhbmhlaXJvcyIsIm5yR2FyYWdlbnMiLCJ2YWxvciIsImFkZFByb3BlcnR5IiwiaW1nIiwidGl0dWxvIiwibnJEb3JtaXRvcmlvcyIsIm5yVmFnYXMiLCJpc051bWJlcktleSIsImV2dCIsImNoYXJDb2RlIiwid2hpY2giLCJrZXlDb2RlIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJmb3JtIiwianNvbkRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2luZG93IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcCIsIkVycm9yIiwianNvbiIsImpzb25SZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJmaWx0cm9EYXRhIiwicmVnaXN0ZXJJbnRlcmVzdCIsImludGVyZXN0IiwidXBkYXRlU2l0dWF0aW9uIiwiZGVmYXVsdEludGVyZXN0Iiwibm9tZSIsInRlbGVmb25lIiwiUHJvcGVydHlCb3giLCJpbnRlcmVzdFNlbmQiLCJzZXRJbnRlcmVzdFNlbmQiLCJzZXRJbnRlcmVzdCIsInNpdHVhY2FvIiwic3RhdHVzIiwic2V0U3RhdHVzIiwibnJfaW5zY3JpY2FvIiwiaGFuZGxlU3VibWl0VXBkYXRlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwidG9VcHBlckNhc2UiLCJkb3JtaXRvcmlvcyIsImJhbmhlaXJvcyIsInZhZ2FzIiwiUHJvcGVydGllc0xpc3QiLCJwcm9wZXJ0aWVzIiwiY29udmVydFRvTGlzdEl0ZW1PYmplY3QiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIm5yX2Rvcm1pdG9yaW9zIiwibnJfYmFuaGVpcm9zIiwibnJfdmFnYXNfZ2FyYWdlbSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiSG9tZSIsInByZWNvTWluaW1vIiwicHJlY29NYXhpbW8iLCJ0aXBvSW1vdmVsIiwicXVhcnRvcyIsImdhcmFnZW0iLCJzZXRGaWx0cm9EYXRhIiwic2V0UHJvcGVydGllcyIsImxpc3RQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDREQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsY0FBYyx3TEFBd0wsd0NBQXdDLHVDQUF1QyxHQUFHLFVBQVUsc0ZBQXNGLEdBQUc7QUFDM1o7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxrRUFBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsK0JBQStCLHlEQUF5RCxJQUFJLGdCQUFnQixjQUFjLGVBQWUsZ0RBQWdELE1BQU0sWUFBWSx3QkFBd0Isa0JBQWtCLGdCQUFnQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQix1QkFBdUIsMEJBQTBCLHFCQUFxQixxQkFBcUIsR0FBRyxvQkFBb0Isd0JBQXdCLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQix1QkFBdUIsZUFBZSxHQUFHLGtCQUFrQixtQkFBbUIsa0JBQWtCLEdBQUcseUJBQXlCLG1CQUFtQixrQkFBa0IscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQix3QkFBd0Isb0JBQW9CLHFCQUFxQixnQkFBZ0Isb0JBQW9CLHFCQUFxQixHQUFHLGtCQUFrQixpQkFBaUIsZUFBZSxrQkFBa0Isd0JBQXdCLDBCQUEwQixHQUFHLG1CQUFtQixpQkFBaUIsZUFBZSxrQkFBa0IsZ0NBQWdDLDJCQUEyQixzQkFBc0IsR0FBRyxnQkFBZ0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixvQkFB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a0IsR0FBRyx3QkFBd0Isd0NBQXdDLGtCQUFrQixxQkFBcUIsc0JBQXNCLG9CQUFvQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isb0JBQW9CLHdDQUF3QyxNQUFNLFdBQVcsa0JBQWtCLGlCQUFpQiw4QkFBOEIsR0FBRyxjQUFjLDhCQUE4QixpQkFBaUIsaUJBQWlCLG9CQUFvQixlQUFlLFlBQVksR0FBRyxtQkFBbUIsdUJBQXVCLGdCQUFnQixHQUFHLGFBQWEsdUJBQXVCLHdCQUF3QixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLGVBQWUsb0JBQW9CLGdCQUFnQixHQUFHLG1CQUFtQixlQUFlLGlCQUFpQixHQUFHLGtCQUFrQix1QkFBdUIsd0JBQXdCLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsd0JBQXdCLEdBQUcsb0JBQW9CLHFCQUFxQiw4QkFBOEIsaUJBQWlCLGlCQUFpQix1QkFBdUIsMEJBQTBCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG9CQUFvQixHQUFHO0FBQzF4QztBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEEsY0FBYyxtQkFBTyxDQUFDLHdFQUE2RDs7QUFFbkYsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGlFQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLmI0MWJkYjAxYjlhYjdkOWI4ZmY5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIiwgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIixcXG4gICAgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gU2xhYjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRlL1JvYm90b1NsYWItVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuIH0gKi9cXG5cXG4uSGVhZGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKiBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaGVhZGVyIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzQ2ODJiNDtcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG5oZWFkZXIgcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMi40JTtcXG59XFxuXFxuLmhlYWRlci10ZXh0LWxvZ2dlZCB7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHBhZGRpbmc6IDIuNCU7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xcbn1cXG5cXG4ucG9zdC1saXN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4uaGVhZGVyLXBvc3Qge1xcbiAgaGVpZ2h0OiAxMiU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBcIi4vSGVhZGVyLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hlYWRlci9sb2dvLWJyYW5jby5wbmdcIlxuaW1wb3J0IHsgZGVmYXVsdEluZm8gfSBmcm9tIFwiLi4vLi4vQXBwLmpzeFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBjb25zdCB7IGluZm8sIHNldEluZm8gfSA9IHByb3BzXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTYWlyID0gKCkgPT4ge1xuICAgIHNldEluZm8oZGVmYXVsdEluZm8pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiIHNyYz17bG9nb30+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAge2luZm8/LnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHQtbG9nZ2VkXCIgdG89XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2tTYWlyfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2BCZW0gdmluZG8sICR7aW5mby5uYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TYWlyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Jlc2V0XCIgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICBBbHRlcmFyIHNlbmhhXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRkXCIgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICBBZGljaW9uYXIgaW3Ds3ZlbFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIlxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAuanN4XCJcblxuY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbSlcblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBlbGVtXG4pXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgeyByZXNldCB9IGZyb20gXCIuLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5pbXBvcnQgeyBGaUV5ZU9mZiwgRmlFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IFwiLi9SZXNldFBhc3N3b3JkLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZChwcm9wcykge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW3NlZUZpcnN0LCBzZXRTZWVGaXJzdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NlZVNlY29uZCwgc2V0U2VlU2Vjb25kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGFzc3dvcmRNYXRjaCwgc2V0UGFzc3dvcmRNYXRjaF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBjb25maXJtOiBcIlwiLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmb3JtRGF0YS5wYXNzd29yZCB8fCAhZm9ybURhdGEuY29uZmlybSkge1xuICAgICAgc2V0UGFzc3dvcmRNYXRjaCh0cnVlKVxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEucGFzc3dvcmQgfHwgZm9ybURhdGEuY29uZmlybSkge1xuICAgICAgaWYgKGZvcm1EYXRhLnBhc3N3b3JkICE9PSBmb3JtRGF0YS5jb25maXJtKSB7XG4gICAgICAgIHNldFBhc3N3b3JkTWF0Y2goZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQYXNzd29yZE1hdGNoKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZm9ybURhdGEsIGZvcm1EYXRhLnBhc3N3b3JkLCBmb3JtRGF0YS5jb25maXJtLCBzZXRQYXNzd29yZE1hdGNoXSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBmb3JtRGF0YVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzZXQoeyB1c2VybmFtZTogaW5mby51c2VybmFtZSwgcGFzc3dvcmQgfSlcblxuICAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlNlbmhhIGFsdGVyYWRhIGNvbSBzdWNlc3NvXCIpXG4gICAgICBzZXRJbmZvKHsgLi4uaW5mbywgZmlyc3Q6IGZhbHNlIH0pXG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS1yZWdpc3RlclwiPkFsdGVyYXIgc2VuaGE6PC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+RGlnaXRlIGEgbm92YSBzZW5oYTo8L2xhYmVsPlxuICAgICAgICAgIHshc2VlRmlyc3QgPyAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWV5ZVwiIG9uQ2xpY2s9eygpID0+IHNldFNlZUZpcnN0KCFzZWVGaXJzdCl9PlxuICAgICAgICAgICAge3NlZUZpcnN0ID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Db25maXJtZSBhIG5vdmEgc2VuaGE6PC9sYWJlbD5cbiAgICAgICAgICB7IXNlZVNlY29uZCA/IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY29uZmlybVwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbmZpcm1cIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWV5ZVwiIG9uQ2xpY2s9eygpID0+IHNldFNlZVNlY29uZCghc2VlU2Vjb25kKX0+XG4gICAgICAgICAgICB7c2VlU2Vjb25kID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHshcGFzc3dvcmRNYXRjaCAmJiA8bGFiZWwgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+U2VuaGFzIG7Do28gY29ycmVzcG9uZGVtPC9sYWJlbD59XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+XG4gICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsb2dvLWJyYW5jby5wbmdcIjsiLCJpbXBvcnQgXCIuL0xvZ2luLmNzc1wiXG5pbXBvcnQgeyBGaUV5ZU9mZiwgRmlFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3hcIlxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgeyBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gZm9ybURhdGFcbiAgICBpZiAoIXVzZXJuYW1lICYmICFwYXNzd29yZCkge1xuICAgICAgYWxlcnQoXCJQcmVlbmNoYSBvcyBjYW1wb3MgY29ycmV0YW1lbnRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkxvZ2luIGVmZXR1YWRvIGNvbSBzdWNlc3NvXCIpXG4gICAgICAgIHNldEluZm8oe1xuICAgICAgICAgIGxvZ2dlZDogcmVzcG9uc2Uub2ssXG4gICAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLmRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YS5uYW1lLFxuICAgICAgICAgIGZpcnN0OiByZXNwb25zZS5kYXRhLmZpcnN0TG9naW4sXG4gICAgICAgIH0pXG4gICAgICAgIGhpc3RvcnkucHVzaChyZXNwb25zZS5kYXRhLmZpcnN0TG9naW4gPyBcIi9yZXNldFwiIDogXCIvXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTZWUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFNlZSghc2VlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVm9sdGFyID0gKCkgPT4gaGlzdG9yeS5wdXNoKFwiL1wiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpblwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLXJlZ2lzdGVyXCI+RmHDp2Egc2V1IGxvZ2luOjwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBkZSB1c3XDoXJpb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIHshc2VlID8gKFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZXllXCIgb25DbGljaz17aGFuZGxlQ2xpY2tTZWV9PlxuICAgICAgICAgICAgICB7c2VlID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvYmFjay1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVWb2x0YXJ9PlxuICAgICAgICAgICAgICAgIFZvbHRhclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidG9zdWJtaXQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lL0hvbWUuanN4XCJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9wYWdlcy9sb2dpbi9Mb2dpbi5qc3hcIlxuaW1wb3J0IHsgUm91dGUsIEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgUmVzZXRQYXNzd29yZCBmcm9tIFwiLi9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuanN4XCJcbmltcG9ydCBBZGRQcm9wZXJ0eSBmcm9tIFwiLi9wYWdlcy9wcm9wZXJ0eS9BZGRQcm9wZXJ0eS5qc3hcIlxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEluZm8gPSB7XG4gIGxvZ2dlZDogZmFsc2UsXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXG4gIG5hbWU6IHVuZGVmaW5lZCxcbiAgZmlyc3Q6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShkZWZhdWx0SW5mbylcblxuICBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiA8SG9tZSBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxMb2dpbiBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyUmVzZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxSZXNldFBhc3N3b3JkIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJBZGRQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gPEFkZFByb3BlcnR5IGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVySG9tZX0gcGF0aD1cIi9cIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyTG9naW59IHBhdGg9XCIvbG9naW5cIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyUmVzZXR9IHBhdGg9XCIvcmVzZXRcIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyQWRkUHJvcGVydHl9IHBhdGg9XCIvYWRkXCIgZXhhY3QgLz5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gIClcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZXNldFBhc3N3b3JkLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgeyBhZGRQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5pbXBvcnQgXCIuL0FkZFByb3BlcnR5LmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFByb3BlcnR5KHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuckluc2NyaWNhbzogXCJcIixcbiAgICBkZXNjcmljYW86IFwiXCIsXG4gICAgZW5kZXJlY286IFwiXCIsXG4gICAgdGlwbzogXCJcIixcbiAgICBuclF1YXJ0b3M6IFwiXCIsXG4gICAgbnJCYW5oZWlyb3M6IFwiXCIsXG4gICAgbnJHYXJhZ2VuczogXCJcIixcbiAgICB2YWxvcjogXCJcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IG5ySW5zY3JpY2FvLCBkZXNjcmljYW8sIGVuZGVyZWNvLCB0aXBvLCBuclF1YXJ0b3MsIG5yQmFuaGVpcm9zLCBuckdhcmFnZW5zLCB2YWxvciB9ID0gZm9ybURhdGFcbiAgICBpZiAoIW5ySW5zY3JpY2FvIHx8ICFkZXNjcmljYW8gfHwgIWVuZGVyZWNvIHx8ICF0aXBvIHx8ICFuclF1YXJ0b3MgfHwgIW5yQmFuaGVpcm9zIHx8ICFuckdhcmFnZW5zIHx8ICF2YWxvcikge1xuICAgICAgYWxlcnQoXCJQcmVlbmNoYSBvcyBjYW1wb3MgY29ycmV0YW1lbnRlLlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFkZFByb3BlcnR5KHtcbiAgICAgICAgbnJJbnNjcmljYW8sXG4gICAgICAgIGltZzogXCJpbWdcIixcbiAgICAgICAgdGl0dWxvOiBkZXNjcmljYW8sXG4gICAgICAgIGVuZGVyZWNvLFxuICAgICAgICB0aXBvLFxuICAgICAgICBuckRvcm1pdG9yaW9zOiBuclF1YXJ0b3MsXG4gICAgICAgIG5yQmFuaGVpcm9zLFxuICAgICAgICBuclZhZ2FzOiBuckdhcmFnZW5zLFxuICAgICAgICB2YWxvcixcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlPy5vaykge1xuICAgICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJJbcOzdmVsIHNhbHZvIGNvbSBzdWNlc3NvIVwiKVxuICAgICAgICBoaXN0b3J5LnB1c2goXCIvXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVm9sdGFyID0gKCkgPT4gaGlzdG9yeS5wdXNoKFwiL1wiKVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyS2V5KGV2dCkge1xuICAgIHZhciBjaGFyQ29kZSA9IGV2dC53aGljaCA/IGV2dC53aGljaCA6IGV2dC5rZXlDb2RlXG4gICAgaWYgKGNoYXJDb2RlICE9IDQ2ICYmIGNoYXJDb2RlID4gMzEgJiYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1NykpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5cIj5cbiAgICAgIDxIZWFkZXIgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1yZWdpc3RlclwiPkNhZGFzdHJlIHVtIGltw7N2ZWw6PC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ySW5zY3JpY2FvXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgTnVtZXJvIGRlIEluc2NyacOnw6NvOlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuckluc2NyaWNhb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaWNhb1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgIFRpdHVsbzpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkZXNjcmljYW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuZGVyZWNvXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgRW5kZXJlw6dvOlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImVuZGVyZWNvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPGgyPlRpcG8gZG8gaW3Ds3ZlbDo8L2gyPlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXBvXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjYXNhXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS50aXBvID09PSBcImNhc2FcIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG9cIj5DYXNhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXBvXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhcGFydGFtZW50b1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEudGlwbyA9PT0gXCJhcGFydGFtZW50b1wifVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwb1wiPkFwYXJ0YW1lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJRdWFydG9zXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICBOdW1lcm8gZGUgcXVhcnRvczpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm5yUXVhcnRvc1wiIG1pbj1cIjBcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2lzTnVtYmVyS2V5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5yQmFuaGVpcm9zXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICBOdW1lcm8gZGUgYmFuaGVpcm9zOlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnJCYW5oZWlyb3NcIiBtaW49XCIwXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuckdhcmFnZW5zXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICBOdW1lcm8gZGUgdmFnYXMgbmEgZ2FyYWdlbTpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm5yR2FyYWdlbnNcIiBtaW49XCIwXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2YWxvclwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgVmFsb3I6XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ2YWxvclwiIG1pbj1cIjBcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2lzTnVtYmVyS2V5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb2JhY2stYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVm9sdGFyfT5cbiAgICAgICAgICAgICAgICBWb2x0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInRvc3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGZvcm0pIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLCBwYXNzd29yZDogZm9ybS5wYXNzd29yZCB9KVxuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYC9sb2dpbmAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldChmb3JtKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogZm9ybS51c2VybmFtZSwgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmQgfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvcmVzZXRgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkUHJvcGVydHkoZm9ybSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uZm9ybSB9KVxuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYC9wcm9wZXJ0eWAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKGZpbHRyb0RhdGEpIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmZpbHRyb0RhdGEgfSlcbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChcIi9wcm9wZXJ0aWVzXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlckludGVyZXN0KGludGVyZXN0KSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5pbnRlcmVzdCB9KVxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKFwiL2ludGVyZXN0XCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTaXR1YXRpb24oZGF0YSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uZGF0YSB9KVxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKFwiL3VwZGF0ZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuIiwiaW1wb3J0IFwiLi9Qcm9wZXJ0eUJveC5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlZ2lzdGVySW50ZXJlc3QsIHVwZGF0ZVNpdHVhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW50ZXJlc3QgPSB7XG4gIG5vbWU6IFwiXCIsXG4gIHRlbGVmb25lOiBcIlwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eUJveChwcm9wcykge1xuICBjb25zdCB7IGRhdGEsIGxvZ2dlZCB9ID0gcHJvcHNcbiAgY29uc3QgW2ludGVyZXN0U2VuZCwgc2V0SW50ZXJlc3RTZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW50ZXJlc3QsIHNldEludGVyZXN0XSA9IHVzZVN0YXRlKGRlZmF1bHRJbnRlcmVzdClcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGRhdGEuc2l0dWFjYW8pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghaW50ZXJlc3Qubm9tZSB8fCAhaW50ZXJlc3QudGVsZWZvbmUpIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zLlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVySW50ZXJlc3QoeyAuLi5pbnRlcmVzdCwgbnJfaW5zY3JpY2FvOiBkYXRhLm5yX2luc2NyaWNhbyB9KVxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGFsZXJ0KFwiSW50ZXJlc3NlIHJlZ2lzdHJhZG8gY29tIHN1Y2Vzc28hXCIpXG4gICAgICAgIHNldEludGVyZXN0U2VuZCh0cnVlKVxuICAgICAgICBzZXRJbnRlcmVzdCh7IC4uLmRlZmF1bHRJbnRlcmVzdCwgbnJfaW5zY3JpY2FvOiBkYXRhLm5yX2luc2NyaWNhbyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXRVcGRhdGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIGFsZXJ0KFwiw4kgbmVjZXNzw6FyaW8gZXNjb2xoZXIgdW1hIHNpdHVhw6fDo28gcGFyYSBhdHVhbGl6YXJcIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGRhdGVTaXR1YXRpb24oeyBucl9pbnNjcmljYW86IGRhdGEubnJfaW5zY3JpY2FvLCBzaXR1YWNhbzogc3RhdHVzIH0pXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgYWxlcnQoXCJTaXR1YcOnw6NvIGF0dWFsaXphZGEgY29tIHN1Y2Vzc28hXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0SW50ZXJlc3QoeyAuLi5pbnRlcmVzdCwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0U3RhdHVzKHZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1wb3N0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1wb3N0XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLXBvc3RcIj57ZGF0YS50aXR1bG99PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtcG9zdFwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlLXBvc3RcIiBzcmM9XCJpbWFnZW5zL2Nhc2ExLmpwZ1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1wb3N0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtkYXRhLnNpdHVhY2FvID09PSBcImRpc3Bvbml2ZWxcIiA/IFwic3RhdHVzIGF2YWlsYWJsZVwiIDogXCJzdGF0dXNcIn0+XG4gICAgICAgICAgICB7ZGF0YS5zaXR1YWNhby50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YEVuZGVyZcOnbzogJHtkYXRhLmVuZGVyZWNvfWB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntgRG9ybWl0b3Jpb3M6ICR7ZGF0YS5kb3JtaXRvcmlvc31gfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YEJhbmhlaXJvczogJHtkYXRhLmJhbmhlaXJvc31gfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YFZhZ2FzIG5hIGdhcmFnZW06ICR7ZGF0YS52YWdhc31gfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YFZhbG9yIGRvIGFsdWd1ZWw6IFIkJHtkYXRhLnZhbG9yfWB9PC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bG9nZ2VkID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5BbHRlcmUgbyBzdGF0dXMgZG8gaW3Ds3ZlbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRVcGRhdGV9PlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3RhdHVzXCIgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGlzcG9uaXZlbFwiPkRpc3BvbsOtdmVsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZXNlcnZhZG9cIj5SZXNlcnZhZG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsdWdhZG9cIj5BbHVnYWRvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmRpc3Bvbml2ZWxcIj5JbmRpc3BvbsOtdmVsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkF0dWFsaXphcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogIWludGVyZXN0U2VuZCA/IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBjb21wbGV0b1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0ZWxlZm9uZVwiIHBsYWNlaG9sZGVyPVwiVGVsZWZvbmUgcGFyYSBjb250YXRvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4+IFZvY8OqIGrDoSByZWdpc3Ryb3Ugc2V1IGludGVyZXNzZSBwYXJhIGVzdGUgaW3Ds3ZlbC48L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuLnJlZ2lzdGVyIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZWE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDElO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggOXB4ICM4ODg4ODg7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGl0bGUtcmVnaXN0ZXIge1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyYjQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDEwJSAzNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDQwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmJ1dHRvbi1leWUge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkxvZ2luIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5yZWdpc3RlciB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kOiAjZThlN2VhO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDlweCAjODg4ODg4O1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlLXJlZ2lzdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDQlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAwLjl2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDElIDEuNSUgMSUgNSU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxuICB3aWR0aDogODAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDAuOXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMSUgMS41JSAxJSA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4udG9zdWJtaXQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyYjQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDM0cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi50b3N1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNjk5OTtcXG59XFxuXFxuLmdvYmFjay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmdvYmFjay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbi5idXR0b24tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgXCIuL1Byb3BlcnRpZXNMaXN0LmNzc1wiXG5pbXBvcnQgUHJvcGVydHlCb3ggZnJvbSBcIi4vUHJvcGVydHlJdGVtL1Byb3BlcnR5Qm94LmpzeFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvcGVydGllc0xpc3QocHJvcHMpIHtcbiAgY29uc3QgeyBwcm9wZXJ0aWVzLCBsb2dnZWQgfSA9IHByb3BzXG5cbiAgY29uc3QgY29udmVydFRvTGlzdEl0ZW1PYmplY3QgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgcmV0dXJuIHtcbiAgICAgIG5yX2luc2NyaWNhbzogaXRlbS5ucl9pbnNjcmljYW8sXG4gICAgICB0aXR1bG86IGl0ZW0udGl0dWxvLFxuICAgICAgZW5kZXJlY286IGl0ZW0uZW5kZXJlY28sXG4gICAgICBkb3JtaXRvcmlvczogaXRlbS5ucl9kb3JtaXRvcmlvcyxcbiAgICAgIGJhbmhlaXJvczogaXRlbS5ucl9iYW5oZWlyb3MsXG4gICAgICB2YWdhczogaXRlbS5ucl92YWdhc19nYXJhZ2VtLFxuICAgICAgdmFsb3I6IGl0ZW0udmFsb3IsXG4gICAgICBzaXR1YWNhbzogaXRlbS5zaXR1YWNhbyxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1saXN0XCI+XG4gICAgICB7cHJvcGVydGllcz8ubGVuZ3RoID4gMFxuICAgICAgICA/IHByb3BlcnRpZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb3BlcnR5Qm94IGRhdGE9e2NvbnZlcnRUb0xpc3RJdGVtT2JqZWN0KGl0ZW0pfSBrZXk9e2luZGV4fSBsb2dnZWQ9e2xvZ2dlZH0gLz5cbiAgICAgICAgICApKVxuICAgICAgICA6IFwiTmVuaHVtIGltw7N2ZWwgY2FkYXN0cmFkb1wifVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0eUJveC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvcGVydHlCb3guY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0eUJveC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvc3QtbGlzdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb3BlcnRpZXNMaXN0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0aWVzTGlzdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb3BlcnRpZXNMaXN0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZFByb3BlcnR5LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRQcm9wZXJ0eS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZFByb3BlcnR5LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vSG9tZS5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgeyBnZXRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCBQcm9wZXJ0aWVzTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5qc3hcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW2ZpbHRyb0RhdGEsIHNldEZpbHRyb0RhdGFdID0gdXNlU3RhdGUoe1xuICAgIHByZWNvTWluaW1vOiBcIlwiLFxuICAgIHByZWNvTWF4aW1vOiBcIlwiLFxuICAgIHRpcG9JbW92ZWw6IFwiXCIsXG4gICAgcXVhcnRvczogXCJcIixcbiAgICBiYW5oZWlyb3M6IFwiXCIsXG4gICAgZ2FyYWdlbTogXCJcIixcbiAgfSlcblxuICBjb25zdCBbcHJvcGVydGllcywgc2V0UHJvcGVydGllc10gPSB1c2VTdGF0ZSgpXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQcm9wZXJ0aWVzKGZpbHRyb0RhdGEpXG4gICAgY29uc3QgbGlzdFByb3BlcnRpZXMgPSBbLi4ucmVzcG9uc2VdXG4gICAgc2V0UHJvcGVydGllcyhsaXN0UHJvcGVydGllcylcbiAgfSwgW2luZm8ubG9nZ2VkXSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZpbHRyb0RhdGEoeyAuLi5maWx0cm9EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQcm9wZXJ0aWVzKGZpbHRyb0RhdGEpXG4gICAgY29uc3QgbGlzdFByb3BlcnRpZXMgPSBbLi4ucmVzcG9uc2VdXG4gICAgc2V0UHJvcGVydGllcyhsaXN0UHJvcGVydGllcylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxIZWFkZXIgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lkZWJhclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1BhcmVudFwiPlxuICAgICAgICAgICAgPGgzPkZpbHRyb3M8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+UHJlw6dvIGRvIEFsdWd1ZWw8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1wiPlxuICAgICAgICAgICAgICA8cD5EZSBSJDwvcD5cbiAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBkZSB1c3XDoXJpb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz4gKi99XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJlY29NaW5pbW9cIiBwbGFjZWhvbGRlcj1cIk1pblwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9cIj5cbiAgICAgICAgICAgICAgPHA+QXTDqSBSJDwvcD5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmVjb01heGltb1wiIHBsYWNlaG9sZGVyPVwiTWF4XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlRpcG8gZGUgSW3Ds3ZlbDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJ0aXBvLWFueVwiIG5hbWU9XCJ0aXBvSW1vdmVsXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG8tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiY2FzYVwiIGlkPVwidGlwby1jYXNhXCIgbmFtZT1cInRpcG9JbW92ZWxcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1jYXNhXCI+Q2FzYTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiYXBhcnRhbWVudG9cIlxuICAgICAgICAgICAgICAgIGlkPVwidGlwby1hcGFydGFtZW50b1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInRpcG9JbW92ZWxcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvLWFwYXJ0YW1lbnRvXCI+QXBhcnRhbWVudG88L2xhYmVsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5RdWFydG9zPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cInF1YXJ0b3MtYW55XCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJxdWFydG9zLTFcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFydG9zLTFcIj4xIHF1YXJ0bzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJxdWFydG9zLTJcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFydG9zLTJcIj4yIHF1YXJ0b3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiM1wiIGlkPVwicXVhcnRvcy0zK1wiIG5hbWU9XCJxdWFydG9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMytcIj4zKyBxdWFydG9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+QmFuaGVpcm9zPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cImJhbmhlaXJvcy1hbnlcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJiYW5oZWlyb3MtMVwiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTFcIj4xIGJhbmhlaXJvPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjJcIiBpZD1cImJhbmhlaXJvcy0yXCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMlwiPjIgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjNcIiBpZD1cImJhbmhlaXJvcy0zK1wiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTMrXCI+MysgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+R2FyYWdlbTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJnYXJhZ2VtLWFueVwiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiIGlkPVwiZ2FyYWdlbS0wXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0wXCI+U2VtIHZhZ2FzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiBpZD1cImdhcmFnZW0tMVwiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMVwiPjEgdmFnYTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJnYXJhZ2VtLTIrXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0yK1wiPjIrIHZhZ2FzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0cm8tYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQXBsaWNhciBGaWx0cm9zXCIvPiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbHRyby1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBBcGxpY2FyIEZpbHRyb3NcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcGFyZW50XCI+XG4gICAgICAgIDxQcm9wZXJ0aWVzTGlzdCBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfSBsb2dnZWQ9e2luZm8ubG9nZ2VkfSAvPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJUZXN0ZVwiLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3N1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2OTk5O1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvcGVydGllcy1wYXJlbnQge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gIG1hcmdpbi1yaWdodDogMTUlOyAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTsgKi9cXG59XFxuXFxuLlRlc3Rle1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5TaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q0ZGQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLkZpbHRyb1BhcmVudCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLkZpbHRybyB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5GaWx0cm8gcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLkZpbHRybyBpbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uRmlsdHJvUmFkaW8ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5maWx0cm8tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5maWx0cm8tYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==