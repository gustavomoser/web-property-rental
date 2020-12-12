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
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
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
                console.log(response.data);
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/src/pages/property/AddProperty.jsx: Unexpected token (37:6)\n\n\u001b[0m \u001b[90m 35 | \u001b[39m    nrVagas\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 36 | \u001b[39m    valor\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 37 | \u001b[39m      \u001b[36mconst\u001b[39m response \u001b[33m=\u001b[39m await addProperty({ nrInscricao\u001b[33m,\u001b[39m img\u001b[33m:\u001b[39m \u001b[32m'img'\u001b[39m\u001b[33m,\u001b[39m descricao\u001b[33m,\u001b[39m endereco\u001b[33m,\u001b[39m tipo\u001b[33m,\u001b[39m nrDormitorios\u001b[33m:\u001b[39m nrQuartos\u001b[33m,\u001b[39m nrBanheiros\u001b[33m,\u001b[39m nrVagas\u001b[33m:\u001b[39m nrGaragens\u001b[33m,\u001b[39m valor })\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 | \u001b[39m      \u001b[36mif\u001b[39m (\u001b[33m!\u001b[39mresponse\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mok) {\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m        alert(response\u001b[33m.\u001b[39mmessage)\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39m      } \u001b[36melse\u001b[39m {\u001b[0m\n    at Object._raise (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.unexpected (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9097:16)\n    at Object.parseExprAtom (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:10548:20)\n    at Object.parseExprAtom (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:4759:20)\n    at Object.parseExprSubscripts (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:10122:23)\n    at Object.parseUpdate (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:10102:21)\n    at Object.parseMaybeUnary (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:10091:17)\n    at Object.parseExprOps (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9961:23)\n    at Object.parseMaybeConditional (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9935:23)\n    at Object.parseMaybeAssign (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9898:21)\n    at Object.parseExpressionBase (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9850:36)\n    at /home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9837:39\n    at Object.allowInAnd (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11521:12)\n    at Object.parseExpression (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:9837:17)\n    at Object.parseStatementContent (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11781:23)\n    at Object.parseStatement (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11650:17)\n    at Object.parseBlockOrModuleBlockBody (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12232:25)\n    at Object.parseBlockBody (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Object.parseBlock (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12202:10)\n    at Object.parseStatementContent (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11726:21)\n    at Object.parseStatement (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11650:17)\n    at Object.parseIfStatement (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12005:51)\n    at Object.parseStatementContent (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11695:21)\n    at Object.parseStatement (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11650:17)\n    at Object.parseBlockOrModuleBlockBody (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12232:25)\n    at Object.parseBlockBody (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Object.parseBlock (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:12202:10)\n    at Object.parseFunctionBody (/home/gustavomoser/computacao/20.1/web/trabalho/web-property-rental/frontend/node_modules/@babel/parser/lib/index.js:11194:24)");

/***/ }),

/***/ "S27u":
/*!*******************************!*\
  !*** ./src/model/requests.js ***!
  \*******************************/
/*! exports provided: login, reset, addProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProperty", function() { return addProperty; });
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.css */ "UqP4");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header/Header.jsx */ "5Q7b");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Home(props) {
  var info = props.info,
      setInfo = props.setInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    precoMinimo: "",
    precoMaximo: "",
    tipoImovel: "",
    quartos: "",
    banheiros: "",
    garagem: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      filtroData = _useState2[0],
      setFiltroData = _useState2[1];

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFiltroData(_objectSpread(_objectSpread({}, filtroData), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, value)));
  };

  console.log(filtroData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    info: info,
    setInfo: setInfo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "Sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "FiltroParent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", null, "Filtros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "filtro-title"
  }, "Pre\xE7o do Aluguel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "Filtro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "De R$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "precoMinimo",
    placeholder: "Min",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "Filtro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "At\xE9 R$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "precoMaximo",
    placeholder: "Max",
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "filtro-title"
  }, "Tipo de Im\xF3vel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "tipo-any",
    name: "tipoImovel",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "tipo-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "casa",
    id: "tipo-casa",
    name: "tipoImovel",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "tipo-casa"
  }, "Casa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "apartamento",
    id: "tipo-apartamento",
    name: "tipoImovel",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "tipo-apartamento"
  }, "Apartamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "filtro-title"
  }, "Quartos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "quartos-any",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "quartos-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "1",
    id: "quartos-1",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "quartos-1"
  }, "1 quarto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "2",
    id: "quartos-2",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "quartos-2"
  }, "2 quartos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "3+",
    id: "quartos-3+",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "quartos-3+"
  }, "3+ quartos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "filtro-title"
  }, "Banheiros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "banheiros-any",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "banheiros-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "1",
    id: "banheiros-1",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "banheiros-1"
  }, "1 banheiro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "2",
    id: "banheiros-2",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "banheiros-2"
  }, "2 banheiros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "3+",
    id: "banheiros-3+",
    name: "banheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "banheiros-3+"
  }, "3+ banheiros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "filtro-title"
  }, "Garagem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "FiltroRadio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "",
    id: "garagem-any",
    name: "quartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "garagem-any"
  }, "Qualquer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "0",
    id: "garagem-0",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "garagem-0"
  }, "Sem vagas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "1",
    id: "garagem-1",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "garagem-1"
  }, "1 vaga"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "radio",
    value: "2+",
    id: "garagem-2+",
    name: "garagem",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "garagem-2+"
  }, "2+ vagas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: "filtro-button",
    type: "button"
  }, "Aplicar Filtros")));
}

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
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.Sidebar {\n  background-color: #d3d4dd;\n  height: 100%;\n  width: 220px;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n}\n\n.FiltroParent {\n  overflow-y: scroll;\n  height: 60%;\n}\n\n.Filtro {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.Filtro p {\n  font-size: 16px;\n  margin: 0px;\n}\n\n.Filtro input {\n  width: 50%;\n  height: 16px;\n}\n\n.FiltroRadio {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: left;\n}\n\n.filtro-title {\n  margin-top: 24px;\n  margin-bottom: 12px;\n}\n\n.filtro-button {\n  margin-top: 24px;\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  padding: 14px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n}\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFkZXIvbG9nby1icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3M/MjkxMCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvSG9tZS5jc3M/OWRiOCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4vTG9naW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/N2QxZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4vTG9naW4uY3NzP2NiMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvSG9tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5jc3M/NDk4NSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsImluZm8iLCJzZXRJbmZvIiwiaGFuZGxlQ2xpY2tTYWlyIiwiZGVmYXVsdEluZm8iLCJsb2dvIiwidXNlcm5hbWUiLCJuYW1lIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVzZXRQYXNzd29yZCIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidXNlU3RhdGUiLCJzZWVGaXJzdCIsInNldFNlZUZpcnN0Iiwic2VlU2Vjb25kIiwic2V0U2VlU2Vjb25kIiwicGFzc3dvcmRNYXRjaCIsInNldFBhc3N3b3JkTWF0Y2giLCJwYXNzd29yZCIsImNvbmZpcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlRWZmZWN0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsInJlc3BvbnNlIiwib2siLCJhbGVydCIsIm1lc3NhZ2UiLCJmaXJzdCIsInB1c2giLCJjb2xvciIsIkxvZ2luIiwic2VlIiwic2V0U2VlIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvZ2dlZCIsImZpcnN0TG9naW4iLCJoYW5kbGVDbGlja1NlZSIsImUiLCJoYW5kbGVWb2x0YXIiLCJ1bmRlZmluZWQiLCJBcHAiLCJyZW5kZXJIb21lIiwicmVuZGVyTG9naW4iLCJyZW5kZXJSZXNldCIsInJlbmRlckFkZFByb3BlcnR5IiwiZm9ybSIsImpzb25EYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3AiLCJFcnJvciIsImpzb24iLCJqc29uUmVzcG9uc2UiLCJhZGRQcm9wZXJ0eSIsIkhvbWUiLCJwcmVjb01pbmltbyIsInByZWNvTWF4aW1vIiwidGlwb0ltb3ZlbCIsInF1YXJ0b3MiLCJiYW5oZWlyb3MiLCJnYXJhZ2VtIiwiZmlsdHJvRGF0YSIsInNldEZpbHRyb0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNERBQWdEO0FB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cyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxcbiAgICBtb25vc3BhY2U7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gU2xhYjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRlL1JvYm90b1NsYWItVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuIH0gKi9cXG5cXG4uSGVhZGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKiBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaGVhZGVyIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzQ2ODJiNDtcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG5oZWFkZXIgcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMi40JTtcXG59XFxuXFxuLmhlYWRlci10ZXh0LWxvZ2dlZCB7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHBhZGRpbmc6IDIuNCU7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4uaGVhZGVyLWxvZ28ge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXgtd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxlZnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbn1cXG5cXG4uaGVhZGVyLXJpZ2h0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xcbn1cXG5cXG4ucG9zdC1saXN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG5cXG4uaGVhZGVyLXBvc3Qge1xcbiAgaGVpZ2h0OiAxMiU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBcIi4vSGVhZGVyLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1hZ2VzL2hlYWRlci9sb2dvLWJyYW5jby5wbmdcIlxuaW1wb3J0IHsgZGVmYXVsdEluZm8gfSBmcm9tIFwiLi4vLi4vQXBwLmpzeFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBjb25zdCB7IGluZm8sIHNldEluZm8gfSA9IHByb3BzXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTYWlyID0gKCkgPT4ge1xuICAgIHNldEluZm8oZGVmYXVsdEluZm8pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiIHNyYz17bG9nb30+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAge2luZm8/LnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHQtbG9nZ2VkXCIgdG89XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2tTYWlyfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2BCZW0gdmluZG8sICR7aW5mby5uYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TYWlyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Jlc2V0XCIgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICBBbHRlcmFyIHNlbmhhXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRkXCIgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgICBBZGljaW9uYXIgaW3Ds3ZlbFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIlxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAuanN4XCJcblxuY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbSlcblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBlbGVtXG4pXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgeyByZXNldCB9IGZyb20gXCIuLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5pbXBvcnQgeyBGaUV5ZU9mZiwgRmlFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IFwiLi9SZXNldFBhc3N3b3JkLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZChwcm9wcykge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW3NlZUZpcnN0LCBzZXRTZWVGaXJzdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NlZVNlY29uZCwgc2V0U2VlU2Vjb25kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGFzc3dvcmRNYXRjaCwgc2V0UGFzc3dvcmRNYXRjaF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBjb25maXJtOiBcIlwiLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmb3JtRGF0YS5wYXNzd29yZCB8fCAhZm9ybURhdGEuY29uZmlybSkge1xuICAgICAgc2V0UGFzc3dvcmRNYXRjaCh0cnVlKVxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEucGFzc3dvcmQgfHwgZm9ybURhdGEuY29uZmlybSkge1xuICAgICAgaWYgKGZvcm1EYXRhLnBhc3N3b3JkICE9PSBmb3JtRGF0YS5jb25maXJtKSB7XG4gICAgICAgIHNldFBhc3N3b3JkTWF0Y2goZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQYXNzd29yZE1hdGNoKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbZm9ybURhdGEsIGZvcm1EYXRhLnBhc3N3b3JkLCBmb3JtRGF0YS5jb25maXJtLCBzZXRQYXNzd29yZE1hdGNoXSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBmb3JtRGF0YVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzZXQoeyB1c2VybmFtZTogaW5mby51c2VybmFtZSwgcGFzc3dvcmQgfSlcblxuICAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlNlbmhhIGFsdGVyYWRhIGNvbSBzdWNlc3NvXCIpXG4gICAgICBzZXRJbmZvKHsgLi4uaW5mbywgZmlyc3Q6IGZhbHNlIH0pXG4gICAgICBoaXN0b3J5LnB1c2goXCIvXCIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS1yZWdpc3RlclwiPkFsdGVyYXIgc2VuaGE6PC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+RGlnaXRlIGEgbm92YSBzZW5oYTo8L2xhYmVsPlxuICAgICAgICAgIHshc2VlRmlyc3QgPyAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWV5ZVwiIG9uQ2xpY2s9eygpID0+IHNldFNlZUZpcnN0KCFzZWVGaXJzdCl9PlxuICAgICAgICAgICAge3NlZUZpcnN0ID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Db25maXJtZSBhIG5vdmEgc2VuaGE6PC9sYWJlbD5cbiAgICAgICAgICB7IXNlZVNlY29uZCA/IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY29uZmlybVwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbmZpcm1cIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWV5ZVwiIG9uQ2xpY2s9eygpID0+IHNldFNlZVNlY29uZCghc2VlU2Vjb25kKX0+XG4gICAgICAgICAgICB7c2VlU2Vjb25kID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHshcGFzc3dvcmRNYXRjaCAmJiA8bGFiZWwgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+U2VuaGFzIG7Do28gY29ycmVzcG9uZGVtPC9sYWJlbD59XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+XG4gICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsb2dvLWJyYW5jby5wbmdcIjsiLCJpbXBvcnQgXCIuL0xvZ2luLmNzc1wiXG5pbXBvcnQgeyBGaUV5ZU9mZiwgRmlFeWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3hcIlxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgeyBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3QgW3NlZSwgc2V0U2VlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gZm9ybURhdGFcbiAgICBpZiAoIXVzZXJuYW1lICYmICFwYXNzd29yZCkge1xuICAgICAgYWxlcnQoXCJQcmVlbmNoYSBvcyBjYW1wb3MgY29ycmV0YW1lbnRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkxvZ2luIGVmZXR1YWRvIGNvbSBzdWNlc3NvXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHNldEluZm8oe1xuICAgICAgICAgIGxvZ2dlZDogcmVzcG9uc2Uub2ssXG4gICAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLmRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YS5uYW1lLFxuICAgICAgICAgIGZpcnN0OiByZXNwb25zZS5kYXRhLmZpcnN0TG9naW4sXG4gICAgICAgIH0pXG4gICAgICAgIGhpc3RvcnkucHVzaChyZXNwb25zZS5kYXRhLmZpcnN0TG9naW4gPyBcIi9yZXNldFwiIDogXCIvXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTZWUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFNlZSghc2VlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVm9sdGFyID0gKCkgPT4gaGlzdG9yeS5wdXNoKFwiL1wiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpblwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLXJlZ2lzdGVyXCI+RmHDp2Egc2V1IGxvZ2luOjwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBkZSB1c3XDoXJpb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIHshc2VlID8gKFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZXllXCIgb25DbGljaz17aGFuZGxlQ2xpY2tTZWV9PlxuICAgICAgICAgICAgICB7c2VlID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvYmFjay1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVWb2x0YXJ9PlxuICAgICAgICAgICAgICAgIFZvbHRhclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidG9zdWJtaXQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lL0hvbWUuanN4XCJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9wYWdlcy9sb2dpbi9Mb2dpbi5qc3hcIlxuaW1wb3J0IHsgUm91dGUsIEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgUmVzZXRQYXNzd29yZCBmcm9tIFwiLi9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuanN4XCJcbmltcG9ydCBBZGRQcm9wZXJ0eSBmcm9tIFwiLi9wYWdlcy9wcm9wZXJ0eS9BZGRQcm9wZXJ0eS5qc3hcIlxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEluZm8gPSB7XG4gIGxvZ2dlZDogZmFsc2UsXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXG4gIG5hbWU6IHVuZGVmaW5lZCxcbiAgZmlyc3Q6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShkZWZhdWx0SW5mbylcblxuICBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiA8SG9tZSBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxMb2dpbiBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyUmVzZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxSZXNldFBhc3N3b3JkIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJBZGRQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gPEFkZFByb3BlcnR5IGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVySG9tZX0gcGF0aD1cIi9cIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyTG9naW59IHBhdGg9XCIvbG9naW5cIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyUmVzZXR9IHBhdGg9XCIvcmVzZXRcIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyQWRkUHJvcGVydHl9IHBhdGg9XCIvYWRkXCIgZXhhY3QgLz5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gIClcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZXNldFBhc3N3b3JkLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihmb3JtKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogZm9ybS51c2VybmFtZSwgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmQgfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvbG9naW5gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXQoZm9ybSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL3Jlc2V0YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFByb3BlcnR5KGZvcm0pIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmZvcm0gfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvcHJvcGVydHlgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxufVxcbi5yZWdpc3RlciB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kOiAjZThlN2VhO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDlweCAjODg4ODg4O1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRpdGxlLXJlZ2lzdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAxMCUgMzUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTRweCA0MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5idXR0b24tZXllIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Mb2dpbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucmVnaXN0ZXIge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMSU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZS1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxJSAxLjUlIDElIDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAwLjl2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDElIDEuNSUgMSUgNSU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTY5OTk7XFxufVxcblxcbi5nb2JhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDM0cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5nb2JhY2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFwiLi9Ib21lLmNzc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBbZmlsdHJvRGF0YSwgc2V0RmlsdHJvRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgcHJlY29NaW5pbW86IFwiXCIsXG4gICAgcHJlY29NYXhpbW86IFwiXCIsXG4gICAgdGlwb0ltb3ZlbDogXCJcIixcbiAgICBxdWFydG9zOiBcIlwiLFxuICAgIGJhbmhlaXJvczogXCJcIixcbiAgICBnYXJhZ2VtOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0RmlsdHJvRGF0YSh7IC4uLmZpbHRyb0RhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGZpbHRyb0RhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPEhlYWRlciBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWRlYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUGFyZW50XCI+XG4gICAgICAgICAgPGgzPkZpbHRyb3M8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlByZcOnbyBkbyBBbHVndWVsPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvXCI+XG4gICAgICAgICAgICA8cD5EZSBSJDwvcD5cbiAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgZGUgdXN1w6FyaW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+ICovfVxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmVjb01pbmltb1wiIHBsYWNlaG9sZGVyPVwiTWluXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvXCI+XG4gICAgICAgICAgICA8cD5BdMOpIFIkPC9wPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmVjb01heGltb1wiIHBsYWNlaG9sZGVyPVwiTWF4XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+VGlwbyBkZSBJbcOzdmVsPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlwiIGlkPVwidGlwby1hbnlcIiBuYW1lPVwidGlwb0ltb3ZlbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImNhc2FcIiBpZD1cInRpcG8tY2FzYVwiIG5hbWU9XCJ0aXBvSW1vdmVsXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvLWNhc2FcIj5DYXNhPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiYXBhcnRhbWVudG9cIiBpZD1cInRpcG8tYXBhcnRhbWVudG9cIiBuYW1lPVwidGlwb0ltb3ZlbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1hcGFydGFtZW50b1wiPkFwYXJ0YW1lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+UXVhcnRvczwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cInF1YXJ0b3MtYW55XCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJxdWFydG9zLTFcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0xXCI+MSBxdWFydG88L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJxdWFydG9zLTJcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0yXCI+MiBxdWFydG9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMytcIiBpZD1cInF1YXJ0b3MtMytcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0zK1wiPjMrIHF1YXJ0b3M8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5CYW5oZWlyb3M8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJiYW5oZWlyb3MtYW55XCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLWFueVwiPlF1YWxxdWVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwiYmFuaGVpcm9zLTFcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMVwiPjEgYmFuaGVpcm88L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJiYW5oZWlyb3MtMlwiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy0yXCI+MiBiYW5oZWlyb3M8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIzK1wiIGlkPVwiYmFuaGVpcm9zLTMrXCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTMrXCI+MysgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+R2FyYWdlbTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cImdhcmFnZW0tYW55XCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIwXCIgaWQ9XCJnYXJhZ2VtLTBcIiBuYW1lPVwiZ2FyYWdlbVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0wXCI+U2VtIHZhZ2FzPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwiZ2FyYWdlbS0xXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMVwiPjEgdmFnYTwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjIrXCIgaWQ9XCJnYXJhZ2VtLTIrXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMitcIj4yKyB2YWdhczwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0cm8tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIEFwbGljYXIgRmlsdHJvc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5TaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q0ZGQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLkZpbHRyb1BhcmVudCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLkZpbHRybyB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5GaWx0cm8gcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLkZpbHRybyBpbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uRmlsdHJvUmFkaW8ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5maWx0cm8tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5maWx0cm8tYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==