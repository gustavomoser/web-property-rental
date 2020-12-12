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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFkZXIvbG9nby1icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3M/MjkxMCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmNzcz85ZGI4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz83ZDFmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3M/Y2IxOCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuY3NzP2ZjMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb3BlcnR5L0FkZFByb3BlcnR5LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmNzcz80OTg1Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiaW5mbyIsInNldEluZm8iLCJoYW5kbGVDbGlja1NhaXIiLCJkZWZhdWx0SW5mbyIsImxvZ28iLCJ1c2VybmFtZSIsIm5hbWUiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJSZXNldFBhc3N3b3JkIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VTdGF0ZSIsInNlZUZpcnN0Iiwic2V0U2VlRmlyc3QiLCJzZWVTZWNvbmQiLCJzZXRTZWVTZWNvbmQiLCJwYXNzd29yZE1hdGNoIiwic2V0UGFzc3dvcmRNYXRjaCIsInBhc3N3b3JkIiwiY29uZmlybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VFZmZlY3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicmVzcG9uc2UiLCJvayIsImFsZXJ0IiwibWVzc2FnZSIsImZpcnN0IiwicHVzaCIsImNvbG9yIiwiTG9naW4iLCJzZWUiLCJzZXRTZWUiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9nZ2VkIiwiZmlyc3RMb2dpbiIsImhhbmRsZUNsaWNrU2VlIiwiZSIsImhhbmRsZVZvbHRhciIsInVuZGVmaW5lZCIsIkFwcCIsInJlbmRlckhvbWUiLCJyZW5kZXJMb2dpbiIsInJlbmRlclJlc2V0IiwicmVuZGVyQWRkUHJvcGVydHkiLCJBZGRQcm9wZXJ0eSIsIm5ySW5zY3JpY2FvIiwiZGVzY3JpY2FvIiwiZW5kZXJlY28iLCJ0aXBvIiwibnJRdWFydG9zIiwibnJCYW5oZWlyb3MiLCJuckdhcmFnZW5zIiwidmFsb3IiLCJhZGRQcm9wZXJ0eSIsImltZyIsInRpdHVsbyIsIm5yRG9ybWl0b3Jpb3MiLCJuclZhZ2FzIiwiaXNOdW1iZXJLZXkiLCJldnQiLCJjaGFyQ29kZSIsIndoaWNoIiwia2V5Q29kZSIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwiZm9ybSIsImpzb25EYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3AiLCJFcnJvciIsImpzb24iLCJqc29uUmVzcG9uc2UiLCJIb21lIiwicHJlY29NaW5pbW8iLCJwcmVjb01heGltbyIsInRpcG9JbW92ZWwiLCJxdWFydG9zIiwiYmFuaGVpcm9zIiwiZ2FyYWdlbSIsImZpbHRyb0RhdGEiLCJzZXRGaWx0cm9EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDREQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsY0FBYyw2S0FBNkssd0NBQXdDLHVDQUF1QyxHQUFHLFVBQVUseUZBQXlGLEdBQUc7QUFDblo7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxrRUFBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsK0JBQStCLHlEQUF5RCxJQUFJLGdCQUFnQixjQUFjLGVBQWUsZ0RBQWdELE1BQU0sWUFBWSx3QkFBd0Isa0JBQWtCLGdCQUFnQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQix1QkFBdUIsMEJBQTBCLHFCQUFxQixxQkFBcUIsR0FBRyxvQkFBb0Isd0JBQXdCLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLG1CQUFtQix1QkFBdUIsZUFBZSxHQUFHLGtCQUFrQixtQkFBbUIsa0JBQWtCLEdBQUcseUJBQXlCLG1CQUFtQixrQkFBa0IscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQix3QkFBd0Isb0JBQW9CLHFCQUFxQixnQkFBZ0Isb0JBQW9CLHFCQUFxQixHQUFHLGtCQUFrQixpQkFBaUIsZUFBZSxrQkFBa0Isd0JBQXdCLDBCQUEwQixHQUFH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d0VBQTZEOztBQUVuRiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsaUVBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6Im1haW4uYTQ0MTU4ZjBhYjYwNTNlOTExYTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxcbiAgICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXFxuICAgIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBTbGFiO1xcbiAgICBzcmM6IHVybCgnZm9udGUvUm9ib3RvU2xhYi1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gfSAqL1xcblxcbi5IZWFkZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzYW5zLXNlcmlmOyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4ydnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oZWFkZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDY4MmI0O1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbmhlYWRlciBwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAyLjQlO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQtbG9nZ2VkIHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMi40JTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbGVmdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMiU7XFxufVxcblxcbi5wb3N0LWxpc3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbi5oZWFkZXItcG9zdCB7XFxuICBoZWlnaHQ6IDEyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFwiLi9IZWFkZXIuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvaGVhZGVyL2xvZ28tYnJhbmNvLnBuZ1wiXG5pbXBvcnQgeyBkZWZhdWx0SW5mbyB9IGZyb20gXCIuLi8uLi9BcHAuanN4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcblxuICBjb25zdCBoYW5kbGVDbGlja1NhaXIgPSAoKSA9PiB7XG4gICAgc2V0SW5mbyhkZWZhdWx0SW5mbylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCIgc3JjPXtsb2dvfT48L2ltZz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICB7aW5mbz8udXNlcm5hbWUgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXItdGV4dC1sb2dnZWRcIiB0bz1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja1NhaXJ9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57YEJlbSB2aW5kbywgJHtpbmZvLm5hbWV9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNhaXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVzZXRcIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgIEFsdGVyYXIgc2VuaGFcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZGRcIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgIEFkaWNpb25hciBpbcOzdmVsXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC5qc3hcIlxuXG5jb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKVxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXBwIC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGVsZW1cbilcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCB7IEZpRXllT2ZmLCBGaUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgXCIuL1Jlc2V0UGFzc3dvcmQuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkKHByb3BzKSB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBbc2VlRmlyc3QsIHNldFNlZUZpcnN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2VlU2Vjb25kLCBzZXRTZWVTZWNvbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwYXNzd29yZE1hdGNoLCBzZXRQYXNzd29yZE1hdGNoXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGNvbmZpcm06IFwiXCIsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkIHx8ICFmb3JtRGF0YS5jb25maXJtKSB7XG4gICAgICBzZXRQYXNzd29yZE1hdGNoKHRydWUpXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZCB8fCBmb3JtRGF0YS5jb25maXJtKSB7XG4gICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm0pIHtcbiAgICAgICAgc2V0UGFzc3dvcmRNYXRjaChmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBhc3N3b3JkTWF0Y2godHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtmb3JtRGF0YSwgZm9ybURhdGEucGFzc3dvcmQsIGZvcm1EYXRhLmNvbmZpcm0sIHNldFBhc3N3b3JkTWF0Y2hdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IGZvcm1EYXRhXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXNldCh7IHVzZXJuYW1lOiBpbmZvLnVzZXJuYW1lLCBwYXNzd29yZCB9KVxuXG4gICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiU2VuaGEgYWx0ZXJhZGEgY29tIHN1Y2Vzc29cIilcbiAgICAgIHNldEluZm8oeyAuLi5pbmZvLCBmaXJzdDogZmFsc2UgfSlcbiAgICAgIGhpc3RvcnkucHVzaChcIi9cIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWdpc3RlclwiPlxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlLXJlZ2lzdGVyXCI+QWx0ZXJhciBzZW5oYTo8L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5EaWdpdGUgYSBub3ZhIHNlbmhhOjwvbGFiZWw+XG4gICAgICAgICAgeyFzZWVGaXJzdCA/IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tZXllXCIgb25DbGljaz17KCkgPT4gc2V0U2VlRmlyc3QoIXNlZUZpcnN0KX0+XG4gICAgICAgICAgICB7c2VlRmlyc3QgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbmZpcm1lIGEgbm92YSBzZW5oYTo8L2xhYmVsPlxuICAgICAgICAgIHshc2VlU2Vjb25kID8gKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29uZmlybVwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tZXllXCIgb25DbGljaz17KCkgPT4gc2V0U2VlU2Vjb25kKCFzZWVTZWNvbmQpfT5cbiAgICAgICAgICAgIHtzZWVTZWNvbmQgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgeyFwYXNzd29yZE1hdGNoICYmIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5TZW5oYXMgbsOjbyBjb3JyZXNwb25kZW08L2xhYmVsPn1cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28tYnJhbmNvLnBuZ1wiOyIsImltcG9ydCBcIi4vTG9naW4uY3NzXCJcbmltcG9ydCB7IEZpRXllT2ZmLCBGaUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCB7IHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBmb3JtRGF0YVxuICAgIGlmICghdXNlcm5hbWUgJiYgIXBhc3N3b3JkKSB7XG4gICAgICBhbGVydChcIlByZWVuY2hhIG9zIGNhbXBvcyBjb3JyZXRhbWVudGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gZWZldHVhZG8gY29tIHN1Y2Vzc29cIilcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgc2V0SW5mbyh7XG4gICAgICAgICAgbG9nZ2VkOiByZXNwb25zZS5vayxcbiAgICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBuYW1lOiByZXNwb25zZS5kYXRhLm5hbWUsXG4gICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3RMb2dpbixcbiAgICAgICAgfSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJlc3BvbnNlLmRhdGEuZmlyc3RMb2dpbiA/IFwiL3Jlc2V0XCIgOiBcIi9cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja1NlZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U2VlKCFzZWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVWb2x0YXIgPSAoKSA9PiBoaXN0b3J5LnB1c2goXCIvXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtcmVnaXN0ZXJcIj5GYcOnYSBzZXUgbG9naW46PC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGRlIHVzdcOhcmlvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgeyFzZWUgPyAoXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNlbmhhXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1leWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1NlZX0+XG4gICAgICAgICAgICAgIHtzZWUgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ29iYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVZvbHRhcn0+XG4gICAgICAgICAgICAgICAgVm9sdGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0b3N1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL2hvbWUvSG9tZS5qc3hcIlxuaW1wb3J0IExvZ2luIGZyb20gXCIuL3BhZ2VzL2xvZ2luL0xvZ2luLmpzeFwiXG5pbXBvcnQgeyBSb3V0ZSwgQnJvd3NlclJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBSZXNldFBhc3N3b3JkIGZyb20gXCIuL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3hcIlxuaW1wb3J0IEFkZFByb3BlcnR5IGZyb20gXCIuL3BhZ2VzL3Byb3BlcnR5L0FkZFByb3BlcnR5LmpzeFwiXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW5mbyA9IHtcbiAgbG9nZ2VkOiBmYWxzZSxcbiAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcbiAgbmFtZTogdW5kZWZpbmVkLFxuICBmaXJzdDogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKGRlZmF1bHRJbmZvKVxuXG4gIGNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxIb21lIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gPExvZ2luIHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJSZXNldCA9ICgpID0+IHtcbiAgICByZXR1cm4gPFJlc2V0UGFzc3dvcmQgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIGNvbnN0IHJlbmRlckFkZFByb3BlcnR5ID0gKCkgPT4ge1xuICAgIHJldHVybiA8QWRkUHJvcGVydHkgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJIb21lfSBwYXRoPVwiL1wiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJMb2dpbn0gcGF0aD1cIi9sb2dpblwiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJSZXNldH0gcGF0aD1cIi9yZXNldFwiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJBZGRQcm9wZXJ0eX0gcGF0aD1cIi9hZGRcIiBleGFjdCAvPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4XCJcbmltcG9ydCB7IGFkZFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCBcIi4vQWRkUHJvcGVydHkuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkUHJvcGVydHkocHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5ySW5zY3JpY2FvOiBcIlwiLFxuICAgIGRlc2NyaWNhbzogXCJcIixcbiAgICBlbmRlcmVjbzogXCJcIixcbiAgICB0aXBvOiBcIlwiLFxuICAgIG5yUXVhcnRvczogXCJcIixcbiAgICBuckJhbmhlaXJvczogXCJcIixcbiAgICBuckdhcmFnZW5zOiBcIlwiLFxuICAgIHZhbG9yOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgbnJJbnNjcmljYW8sIGRlc2NyaWNhbywgZW5kZXJlY28sIHRpcG8sIG5yUXVhcnRvcywgbnJCYW5oZWlyb3MsIG5yR2FyYWdlbnMsIHZhbG9yIH0gPSBmb3JtRGF0YVxuICAgIGlmICghbnJJbnNjcmljYW8gfHwgIWRlc2NyaWNhbyB8fCAhZW5kZXJlY28gfHwgIXRpcG8gfHwgIW5yUXVhcnRvcyB8fCAhbnJCYW5oZWlyb3MgfHwgIW5yR2FyYWdlbnMgfHwgIXZhbG9yKSB7XG4gICAgICBhbGVydChcIlByZWVuY2hhIG9zIGNhbXBvcyBjb3JyZXRhbWVudGUuXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkUHJvcGVydHkoe1xuICAgICAgICBuckluc2NyaWNhbyxcbiAgICAgICAgaW1nOiBcImltZ1wiLFxuICAgICAgICB0aXR1bG86IGRlc2NyaWNhbyxcbiAgICAgICAgZW5kZXJlY28sXG4gICAgICAgIHRpcG8sXG4gICAgICAgIG5yRG9ybWl0b3Jpb3M6IG5yUXVhcnRvcyxcbiAgICAgICAgbnJCYW5oZWlyb3MsXG4gICAgICAgIG5yVmFnYXM6IG5yR2FyYWdlbnMsXG4gICAgICAgIHZhbG9yLFxuICAgICAgfSlcbiAgICAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkltw7N2ZWwgc2Fsdm8gY29tIHN1Y2Vzc28hXCIpXG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVWb2x0YXIgPSAoKSA9PiBoaXN0b3J5LnB1c2goXCIvXCIpXG5cbiAgZnVuY3Rpb24gaXNOdW1iZXJLZXkoZXZ0KSB7XG4gICAgdmFyIGNoYXJDb2RlID0gZXZ0LndoaWNoID8gZXZ0LndoaWNoIDogZXZ0LmtleUNvZGVcbiAgICBpZiAoY2hhckNvZGUgIT0gNDYgJiYgY2hhckNvZGUgPiAzMSAmJiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpblwiPlxuICAgICAgPEhlYWRlciBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLXJlZ2lzdGVyXCI+Q2FkYXN0cmUgdW0gaW3Ds3ZlbDo8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJJbnNjcmljYW9cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICBOdW1lcm8gZGUgSW5zY3Jpw6fDo286XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm5ySW5zY3JpY2FvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpY2FvXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgVGl0dWxvOlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImRlc2NyaWNhb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kZXJlY29cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICBFbmRlcmXDp286XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW5kZXJlY29cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8aDI+VGlwbyBkbyBpbcOzdmVsOjwvaDI+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNhc2FcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnRpcG8gPT09IFwiY2FzYVwifVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwb1wiPkNhc2E8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImFwYXJ0YW1lbnRvXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtRGF0YS50aXBvID09PSBcImFwYXJ0YW1lbnRvXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvXCI+QXBhcnRhbWVudG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuclF1YXJ0b3NcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIE51bWVybyBkZSBxdWFydG9zOlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnJRdWFydG9zXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJCYW5oZWlyb3NcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIE51bWVybyBkZSBiYW5oZWlyb3M6XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuckJhbmhlaXJvc1wiIG1pbj1cIjBcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2lzTnVtYmVyS2V5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5yR2FyYWdlbnNcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIE51bWVybyBkZSB2YWdhcyBuYSBnYXJhZ2VtOlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnJHYXJhZ2Vuc1wiIG1pbj1cIjBcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2lzTnVtYmVyS2V5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZhbG9yXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICBWYWxvcjpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInZhbG9yXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvYmFjay1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVWb2x0YXJ9PlxuICAgICAgICAgICAgICAgIFZvbHRhclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidG9zdWJtaXQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgU2FsdmFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZm9ybSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL2xvZ2luYCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0KGZvcm0pIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLCBwYXNzd29yZDogZm9ybS5wYXNzd29yZCB9KVxuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYC9yZXNldGAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRQcm9wZXJ0eShmb3JtKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5mb3JtIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL3Byb3BlcnR5YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmVnaXN0ZXIge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMSU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50aXRsZS1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMTAlIDM1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggNDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYnV0dG9uLWV5ZSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTG9naW4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnJlZ2lzdGVyIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZWE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDElO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggOXB4ICM4ODg4ODg7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUtcmVnaXN0ZXIge1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogODAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDAuOXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMSUgMS41JSAxJSA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxJSAxLjUlIDElIDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi50b3N1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2OTk5O1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZFByb3BlcnR5LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRQcm9wZXJ0eS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZFByb3BlcnR5LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vSG9tZS5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3hcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW2ZpbHRyb0RhdGEsIHNldEZpbHRyb0RhdGFdID0gdXNlU3RhdGUoe1xuICAgIHByZWNvTWluaW1vOiBcIlwiLFxuICAgIHByZWNvTWF4aW1vOiBcIlwiLFxuICAgIHRpcG9JbW92ZWw6IFwiXCIsXG4gICAgcXVhcnRvczogXCJcIixcbiAgICBiYW5oZWlyb3M6IFwiXCIsXG4gICAgZ2FyYWdlbTogXCJcIixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEZpbHRyb0RhdGEoeyAuLi5maWx0cm9EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zb2xlLmxvZyhmaWx0cm9EYXRhKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxIZWFkZXIgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lkZWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1BhcmVudFwiPlxuICAgICAgICAgIDxoMz5GaWx0cm9zPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5QcmXDp28gZG8gQWx1Z3VlbDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1wiPlxuICAgICAgICAgICAgPHA+RGUgUiQ8L3A+XG4gICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGRlIHVzdcOhcmlvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPiAqL31cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJlY29NaW5pbW9cIiBwbGFjZWhvbGRlcj1cIk1pblwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1wiPlxuICAgICAgICAgICAgPHA+QXTDqSBSJDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJlY29NYXhpbW9cIiBwbGFjZWhvbGRlcj1cIk1heFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlRpcG8gZGUgSW3Ds3ZlbDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cInRpcG8tYW55XCIgbmFtZT1cInRpcG9JbW92ZWxcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG8tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJjYXNhXCIgaWQ9XCJ0aXBvLWNhc2FcIiBuYW1lPVwidGlwb0ltb3ZlbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1jYXNhXCI+Q2FzYTwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImFwYXJ0YW1lbnRvXCIgaWQ9XCJ0aXBvLWFwYXJ0YW1lbnRvXCIgbmFtZT1cInRpcG9JbW92ZWxcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG8tYXBhcnRhbWVudG9cIj5BcGFydGFtZW50bzwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlF1YXJ0b3M8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJxdWFydG9zLWFueVwiIG5hbWU9XCJxdWFydG9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFydG9zLWFueVwiPlF1YWxxdWVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwicXVhcnRvcy0xXCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMVwiPjEgcXVhcnRvPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMlwiIGlkPVwicXVhcnRvcy0yXCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMlwiPjIgcXVhcnRvczwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjMrXCIgaWQ9XCJxdWFydG9zLTMrXCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMytcIj4zKyBxdWFydG9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+QmFuaGVpcm9zPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlwiIGlkPVwiYmFuaGVpcm9zLWFueVwiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiBpZD1cImJhbmhlaXJvcy0xXCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTFcIj4xIGJhbmhlaXJvPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMlwiIGlkPVwiYmFuaGVpcm9zLTJcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMlwiPjIgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMytcIiBpZD1cImJhbmhlaXJvcy0zK1wiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy0zK1wiPjMrIGJhbmhlaXJvczwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPkdhcmFnZW08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJnYXJhZ2VtLWFueVwiIG5hbWU9XCJxdWFydG9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYXJhZ2VtLWFueVwiPlF1YWxxdWVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiIGlkPVwiZ2FyYWdlbS0wXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMFwiPlNlbSB2YWdhczwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiBpZD1cImdhcmFnZW0tMVwiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYXJhZ2VtLTFcIj4xIHZhZ2E8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyK1wiIGlkPVwiZ2FyYWdlbS0yK1wiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYXJhZ2VtLTIrXCI+MisgdmFnYXM8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmlsdHJvLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICBBcGxpY2FyIEZpbHRyb3NcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3N1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2OTk5O1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLlNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDRkZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uRmlsdHJvUGFyZW50IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG4uRmlsdHJvIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLkZpbHRybyBwIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uRmlsdHJvIGlucHV0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5GaWx0cm9SYWRpbyB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmZpbHRyby10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmZpbHRyby1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyYjQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9