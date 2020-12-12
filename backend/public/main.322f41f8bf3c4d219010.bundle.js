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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/header/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function AddProperty(props) {
  var info = props.info,
      setInfo = props.setInfo;

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
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!nrInscricao || !descricao || !endereco || !tipo || !nrQuartos || !nrBanheiros || !nrGaragens || !valor)) {
                _context.next = 4;
                break;
              }

              alert("Preencha os campos corretamente");
              _context.next = 8;
              break;

            case 4:
              _context.next = 6;
              return addProperty({
                nrInscricao: nrInscricao,
                descricao: descricao,
                endereco: endereco,
                tipo: tipo,
                nrQuartos: nrQuartos,
                nrBanheiros: nrBanheiros,
                nrGaragens: nrGaragens,
                valor: valor
              });

            case 6:
              response = _context.sent;

              if (!(response !== null && response !== void 0 && response.ok)) {
                alert(response.message);
              } else {
                alert("Imóvel salvo com sucesso!");
                history.push("/");
              }

            case 8:
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
    className: "Login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/header/Header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrInscricao",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "descricao",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    name: "endereco",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("legend", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "Tipo do im\xF3vel:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "tipo"
  }, "Casa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "radio",
    name: "tipo",
    value: "casa",
    checked: type === "casa"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "tipo"
  }, "Apartamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "radio",
    name: "tipo",
    value: "apartamento",
    checked: type === "apartamento"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrQuartos"
  }, "Numero de quartos:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrQuartos",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrBanheiros"
  }, "Numero de banheiros:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrBanheiros",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "nrGaragens"
  }, "Numero de vagas na garagem:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "nrGaragens",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "valor"
  }, "Valor:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "number",
    name: "valor",
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    className: "submit-button"
  }, "Cancelar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    type: "submit",
    className: "submit-button"
  }, "Salvar"))))));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFkZXIvbG9nby1icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3M/MjkxMCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmNzcz85ZGI4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz83ZDFmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3M/Y2IxOCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmNzcz80OTg1Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiaW5mbyIsInNldEluZm8iLCJoYW5kbGVDbGlja1NhaXIiLCJkZWZhdWx0SW5mbyIsImxvZ28iLCJ1c2VybmFtZSIsIm5hbWUiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJSZXNldFBhc3N3b3JkIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VTdGF0ZSIsInNlZUZpcnN0Iiwic2V0U2VlRmlyc3QiLCJzZWVTZWNvbmQiLCJzZXRTZWVTZWNvbmQiLCJwYXNzd29yZE1hdGNoIiwic2V0UGFzc3dvcmRNYXRjaCIsInBhc3N3b3JkIiwiY29uZmlybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VFZmZlY3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicmVzcG9uc2UiLCJvayIsImFsZXJ0IiwibWVzc2FnZSIsImZpcnN0IiwicHVzaCIsImNvbG9yIiwiTG9naW4iLCJzZWUiLCJzZXRTZWUiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9nZ2VkIiwiZmlyc3RMb2dpbiIsImhhbmRsZUNsaWNrU2VlIiwiZSIsImhhbmRsZVZvbHRhciIsInVuZGVmaW5lZCIsIkFwcCIsInJlbmRlckhvbWUiLCJyZW5kZXJMb2dpbiIsInJlbmRlclJlc2V0IiwicmVuZGVyQWRkUHJvcGVydHkiLCJBZGRQcm9wZXJ0eSIsIm5ySW5zY3JpY2FvIiwiZGVzY3JpY2FvIiwiZW5kZXJlY28iLCJ0aXBvIiwibnJRdWFydG9zIiwibnJCYW5oZWlyb3MiLCJuckdhcmFnZW5zIiwidmFsb3IiLCJhZGRQcm9wZXJ0eSIsInR5cGUiLCJmb3JtIiwianNvbkRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2luZG93IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcCIsIkVycm9yIiwianNvbiIsImpzb25SZXNwb25zZSIsIkhvbWUiLCJwcmVjb01pbmltbyIsInByZWNvTWF4aW1vIiwidGlwb0ltb3ZlbCIsInF1YXJ0b3MiLCJiYW5oZWlyb3MiLCJnYXJhZ2VtIiwiZmlsdHJvRGF0YSIsInNldEZpbHRyb0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNERBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsU0FBUyxjQUFjLDZLQUE2Syx3Q0FBd0MsdUNBQXVDLEdBQUcsVUFBVSx5RkFBeUYsR0FBRztBQUNuWjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGtFQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQiwrQkFBK0IseURBQXlELElBQUksZ0JBQWdCLGNBQWMsZUFBZSxnREFBZ0QsTUFBTSxZQUFZLHdCQUF3QixrQkFBa0IsZ0JBQWdCLEdBQUcsY0FBYyxtQkFBbUIsbUJBQW1CLHVCQUF1QiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLG9CQUFvQix3QkFBd0IsbUJBQW1CLEdBQUcsY0FBYyxtQkFBbUIsbUJBQW1CLHVCQUF1QixlQUFlLEdBQUcsa0JBQWtCLG1CQUFtQixrQkFBa0IsR0FBRyx5QkFBeUIsbUJBQW1CLGtCQUFrQixxQkFBcUIsR0FBRyxrQkFBa0IscUJBQXFCLHdCQUF3QixvQkFBb0IscUJBQXFCLGdCQUFnQixvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixlQUFlLGtCQUFrQix3QkFBd0IsMEJBQTBCLEdBQUcsbUJBQW1CLGlCQUFpQixlQUFlLGtCQUFrQixnQ0FBZ0MsMkJBQTJCLHNCQUFzQixHQUFHLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLG9CQUFvQixHQUFHLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLEdBQUc7QUFDMTJDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFn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Ozs7Ozs7Ozs7QUNMQSxjQUFjLG1CQUFPLENBQUMsd0VBQTZEOztBQUVuRiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsaUVBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6Im1haW4uMzIyZjQxZjhiZjNjNGQyMTkwMTAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxcbiAgICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBTbGFiO1xcbiAgICBzcmM6IHVybCgnZm9udGUvUm9ib3RvU2xhYi1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gfSAqL1xcblxcbi5IZWFkZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4ydnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oZWFkZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDY4MmI0O1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbmhlYWRlciBwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAyLjQlO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQtbG9nZ2VkIHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMi40JTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbGVmdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMiU7XFxufVxcblxcbi5wb3N0LWxpc3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbi5oZWFkZXItcG9zdCB7XFxuICBoZWlnaHQ6IDEyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFwiLi9IZWFkZXIuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvaGVhZGVyL2xvZ28tYnJhbmNvLnBuZ1wiXG5pbXBvcnQgeyBkZWZhdWx0SW5mbyB9IGZyb20gXCIuLi8uLi9BcHAuanN4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcblxuICBjb25zdCBoYW5kbGVDbGlja1NhaXIgPSAoKSA9PiB7XG4gICAgc2V0SW5mbyhkZWZhdWx0SW5mbylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCIgc3JjPXtsb2dvfT48L2ltZz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICB7aW5mbz8udXNlcm5hbWUgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXItdGV4dC1sb2dnZWRcIiB0bz1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja1NhaXJ9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57YEJlbSB2aW5kbywgJHtpbmZvLm5hbWV9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNhaXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVzZXRcIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgIEFsdGVyYXIgc2VuaGFcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZGRcIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgIEFkaWNpb25hciBpbcOzdmVsXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC5qc3hcIlxuXG5jb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKVxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXBwIC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGVsZW1cbilcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCB7IEZpRXllT2ZmLCBGaUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgXCIuL1Jlc2V0UGFzc3dvcmQuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkKHByb3BzKSB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBbc2VlRmlyc3QsIHNldFNlZUZpcnN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2VlU2Vjb25kLCBzZXRTZWVTZWNvbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwYXNzd29yZE1hdGNoLCBzZXRQYXNzd29yZE1hdGNoXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm06IFwiXCIsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkIHx8ICFmb3JtRGF0YS5jb25maXJtKSB7XG4gICAgICBzZXRQYXNzd29yZE1hdGNoKHRydWUpXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZCB8fCBmb3JtRGF0YS5jb25maXJtKSB7XG4gICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm0pIHtcbiAgICAgICAgc2V0UGFzc3dvcmRNYXRjaChmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBhc3N3b3JkTWF0Y2godHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtmb3JtRGF0YSwgZm9ybURhdGEucGFzc3dvcmQsIGZvcm1EYXRhLmNvbmZpcm0sIHNldFBhc3N3b3JkTWF0Y2hdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IGZvcm1EYXRhXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNldCh7IHVzZXJuYW1lOiBpbmZvLnVzZXJuYW1lLCBwYXNzd29yZCB9KVxuXG4gICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiU2VuaGEgYWx0ZXJhZGEgY29tIHN1Y2Vzc29cIilcbiAgICAgIHNldEluZm8oeyAuLi5pbmZvLCBmaXJzdDogZmFsc2UgfSlcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWdpc3RlclwiPlxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlLXJlZ2lzdGVyXCI+QWx0ZXJhciBzZW5oYTo8L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5EaWdpdGUgYSBub3ZhIHNlbmhhOjwvbGFiZWw+XG4gICAgICAgICAgeyFzZWVGaXJzdCA/IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tZXllXCIgb25DbGljaz17KCkgPT4gc2V0U2VlRmlyc3QoIXNlZUZpcnN0KX0+XG4gICAgICAgICAgICB7c2VlRmlyc3QgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbmZpcm1lIGEgbm92YSBzZW5oYTo8L2xhYmVsPlxuICAgICAgICAgIHshc2VlU2Vjb25kID8gKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29uZmlybVwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tZXllXCIgb25DbGljaz17KCkgPT4gc2V0U2VlU2Vjb25kKCFzZWVTZWNvbmQpfT5cbiAgICAgICAgICAgIHtzZWVTZWNvbmQgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgeyFwYXNzd29yZE1hdGNoICYmIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5TZW5oYXMgbsOjbyBjb3JyZXNwb25kZW08L2xhYmVsPn1cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28tYnJhbmNvLnBuZ1wiOyIsImltcG9ydCBcIi4vTG9naW4uY3NzXCJcbmltcG9ydCB7IEZpRXllT2ZmLCBGaUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCB7IHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBmb3JtRGF0YVxuICAgIGlmICghdXNlcm5hbWUgJiYgIXBhc3N3b3JkKSB7XG4gICAgICBhbGVydChcIlByZWVuY2hhIG9zIGNhbXBvcyBjb3JyZXRhbWVudGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gZWZldHVhZG8gY29tIHN1Y2Vzc29cIilcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgc2V0SW5mbyh7XG4gICAgICAgICAgbG9nZ2VkOiByZXNwb25zZS5vayxcbiAgICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBuYW1lOiByZXNwb25zZS5kYXRhLm5hbWUsXG4gICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3RMb2dpbixcbiAgICAgICAgfSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJlc3BvbnNlLmRhdGEuZmlyc3RMb2dpbiA/IFwiL3Jlc2V0XCIgOiBcIi9cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja1NlZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U2VlKCFzZWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVWb2x0YXIgPSAoKSA9PiBoaXN0b3J5LnB1c2goXCIvXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtcmVnaXN0ZXJcIj5GYcOnYSBzZXUgbG9naW46PC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGRlIHVzdcOhcmlvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgeyFzZWUgPyAoXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNlbmhhXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1leWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1NlZX0+XG4gICAgICAgICAgICAgIHtzZWUgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ29iYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVZvbHRhcn0+XG4gICAgICAgICAgICAgICAgVm9sdGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0b3N1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL2hvbWUvSG9tZS5qc3hcIlxuaW1wb3J0IExvZ2luIGZyb20gXCIuL3BhZ2VzL2xvZ2luL0xvZ2luLmpzeFwiXG5pbXBvcnQgeyBSb3V0ZSwgQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBSZXNldFBhc3N3b3JkIGZyb20gXCIuL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3hcIlxuaW1wb3J0IEFkZFByb3BlcnR5IGZyb20gXCIuL3BhZ2VzL3Byb3BlcnR5L0FkZFByb3BlcnR5LmpzeFwiXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW5mbyA9IHtcbiAgbG9nZ2VkOiBmYWxzZSxcbiAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcbiAgbmFtZTogdW5kZWZpbmVkLFxuICBmaXJzdDogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKGRlZmF1bHRJbmZvKVxuXG4gIGNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxIb21lIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gPExvZ2luIHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJSZXNldCA9ICgpID0+IHtcbiAgICByZXR1cm4gPFJlc2V0UGFzc3dvcmQgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIGNvbnN0IHJlbmRlckFkZFByb3BlcnR5ID0gKCkgPT4ge1xuICAgIHJldHVybiA8QWRkUHJvcGVydHkgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJIb21lfSBwYXRoPVwiL1wiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJMb2dpbn0gcGF0aD1cIi9sb2dpblwiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJSZXNldH0gcGF0aD1cIi9yZXNldFwiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJBZGRQcm9wZXJ0eX0gcGF0aD1cIi9hZGRcIiBleGFjdCAvPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFByb3BlcnR5KHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbnJJbnNjcmljYW86IFwiXCIsXG4gICAgZGVzY3JpY2FvOiBcIlwiLFxuICAgIGVuZGVyZWNvOiBcIlwiLFxuICAgIHRpcG86IFwiXCIsXG4gICAgbnJRdWFydG9zOiBcIlwiLFxuICAgIG5yQmFuaGVpcm9zOiBcIlwiLFxuICAgIG5yR2FyYWdlbnM6IFwiXCIsXG4gICAgdmFsb3I6IFwiXCIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBpZiAoIW5ySW5zY3JpY2FvIHx8ICFkZXNjcmljYW8gfHwgIWVuZGVyZWNvIHx8ICF0aXBvIHx8ICFuclF1YXJ0b3MgfHwgIW5yQmFuaGVpcm9zIHx8ICFuckdhcmFnZW5zIHx8ICF2YWxvcikge1xuICAgICAgYWxlcnQoXCJQcmVlbmNoYSBvcyBjYW1wb3MgY29ycmV0YW1lbnRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkUHJvcGVydHkoeyBuckluc2NyaWNhbywgZGVzY3JpY2FvLCBlbmRlcmVjbywgdGlwbywgbnJRdWFydG9zLCBuckJhbmhlaXJvcywgbnJHYXJhZ2VucywgdmFsb3IgfSlcbiAgICAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkltw7N2ZWwgc2Fsdm8gY29tIHN1Y2Vzc28hXCIpXG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5cIj5cbiAgICAgIDxIZWFkZXIgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1yZWdpc3RlclwiPkNhZGFzdHJlIHVtIGltw7N2ZWw6PC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnJJbnNjcmljYW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImRlc2NyaWNhb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW5kZXJlY29cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPGgyPlRpcG8gZG8gaW3Ds3ZlbDo8L2gyPlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG9cIj5DYXNhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRpcG9cIiB2YWx1ZT1cImNhc2FcIiBjaGVja2VkPXt0eXBlID09PSBcImNhc2FcIn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvXCI+QXBhcnRhbWVudG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGlwb1wiIHZhbHVlPVwiYXBhcnRhbWVudG9cIiBjaGVja2VkPXt0eXBlID09PSBcImFwYXJ0YW1lbnRvXCJ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJRdWFydG9zXCI+TnVtZXJvIGRlIHF1YXJ0b3M6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm5yUXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJCYW5oZWlyb3NcIj5OdW1lcm8gZGUgYmFuaGVpcm9zOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuckJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJHYXJhZ2Vuc1wiPk51bWVybyBkZSB2YWdhcyBuYSBnYXJhZ2VtOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuckdhcmFnZW5zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2YWxvclwiPlZhbG9yOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ2YWxvclwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiPkNhbmNlbGFyPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihmb3JtKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogZm9ybS51c2VybmFtZSwgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmQgfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvbG9naW5gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXQoZm9ybSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL3Jlc2V0YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFByb3BlcnR5KGZvcm0pIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmZvcm0gfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvcHJvcGVydHlgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxufVxcbi5yZWdpc3RlciB7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kOiAjZThlN2VhO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxJTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDlweCAjODg4ODg4O1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRpdGxlLXJlZ2lzdGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgcGFkZGluZy10b3A6IDUlO1xcbn1cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAxMCUgMzUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTRweCA0MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5idXR0b24tZXllIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Mb2dpbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucmVnaXN0ZXIge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMSU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZS1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxJSAxLjUlIDElIDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAwLjl2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDElIDEuNSUgMSUgNSU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTY5OTk7XFxufVxcblxcbi5nb2JhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDM0cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5nb2JhY2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFwiLi9Ib21lLmNzc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBbZmlsdHJvRGF0YSwgc2V0RmlsdHJvRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgcHJlY29NaW5pbW86IFwiXCIsXG4gICAgcHJlY29NYXhpbW86IFwiXCIsXG4gICAgdGlwb0ltb3ZlbDogXCJcIixcbiAgICBxdWFydG9zOiBcIlwiLFxuICAgIGJhbmhlaXJvczogXCJcIixcbiAgICBnYXJhZ2VtOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0RmlsdHJvRGF0YSh7IC4uLmZpbHRyb0RhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGZpbHRyb0RhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPEhlYWRlciBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWRlYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUGFyZW50XCI+XG4gICAgICAgICAgPGgzPkZpbHRyb3M8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlByZcOnbyBkbyBBbHVndWVsPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvXCI+XG4gICAgICAgICAgICA8cD5EZSBSJDwvcD5cbiAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgZGUgdXN1w6FyaW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+ICovfVxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmVjb01pbmltb1wiIHBsYWNlaG9sZGVyPVwiTWluXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvXCI+XG4gICAgICAgICAgICA8cD5BdMOpIFIkPC9wPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmVjb01heGltb1wiIHBsYWNlaG9sZGVyPVwiTWF4XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+VGlwbyBkZSBJbcOzdmVsPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlwiIGlkPVwidGlwby1hbnlcIiBuYW1lPVwidGlwb0ltb3ZlbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImNhc2FcIiBpZD1cInRpcG8tY2FzYVwiIG5hbWU9XCJ0aXBvSW1vdmVsXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvLWNhc2FcIj5DYXNhPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiYXBhcnRhbWVudG9cIiBpZD1cInRpcG8tYXBhcnRhbWVudG9cIiBuYW1lPVwidGlwb0ltb3ZlbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1hcGFydGFtZW50b1wiPkFwYXJ0YW1lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+UXVhcnRvczwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cInF1YXJ0b3MtYW55XCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJxdWFydG9zLTFcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0xXCI+MSBxdWFydG88L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJxdWFydG9zLTJcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0yXCI+MiBxdWFydG9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMytcIiBpZD1cInF1YXJ0b3MtMytcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0zK1wiPjMrIHF1YXJ0b3M8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5CYW5oZWlyb3M8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJiYW5oZWlyb3MtYW55XCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLWFueVwiPlF1YWxxdWVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwiYmFuaGVpcm9zLTFcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMVwiPjEgYmFuaGVpcm88L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJiYW5oZWlyb3MtMlwiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy0yXCI+MiBiYW5oZWlyb3M8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIzK1wiIGlkPVwiYmFuaGVpcm9zLTMrXCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTMrXCI+MysgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+R2FyYWdlbTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cImdhcmFnZW0tYW55XCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIwXCIgaWQ9XCJnYXJhZ2VtLTBcIiBuYW1lPVwiZ2FyYWdlbVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0wXCI+U2VtIHZhZ2FzPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwiZ2FyYWdlbS0xXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMVwiPjEgdmFnYTwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjIrXCIgaWQ9XCJnYXJhZ2VtLTIrXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMitcIj4yKyB2YWdhczwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0cm8tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIEFwbGljYXIgRmlsdHJvc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5TaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q0ZGQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLkZpbHRyb1BhcmVudCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLkZpbHRybyB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5GaWx0cm8gcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLkZpbHRybyBpbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uRmlsdHJvUmFkaW8ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5maWx0cm8tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5maWx0cm8tYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==