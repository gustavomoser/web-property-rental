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
  }, "Adicionar im\xF3vel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/interests",
    className: "header-text"
  }, "Ver interessados")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _pages_home_Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/Home.jsx */ "v70p");
/* harmony import */ var _pages_login_Login_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/Login.jsx */ "EQqt");
/* harmony import */ var _pages_resetPassword_ResetPassword_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/resetPassword/ResetPassword.jsx */ "7zxX");
/* harmony import */ var _pages_property_AddProperty_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/property/AddProperty.jsx */ "GftD");
/* harmony import */ var _pages_interests_Interests_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/interests/Interests.jsx */ "kMvN");








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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_home_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      info: info,
      setInfo: setInfo
    });
  };

  var renderLogin = function renderLogin() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_login_Login_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

  var renderInterests = function renderInterests() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_interests_Interests_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      info: info,
      setInfo: setInfo
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: renderHome,
    path: "/",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: renderLogin,
    path: "/login",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: renderReset,
    path: "/reset",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: renderAddProperty,
    path: "/add",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: renderInterests,
    path: "/interests",
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
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-post {\n  width: 50%;\n  height: 48%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1.5%;\n  margin-bottom: 1.5%;\n}\n\n.header-post {\n  height: 12%;\n  width: 100%;\n}\n\n.content-post {\n  margin: 0rem 6rem;\n  height: 88%;\n  width: 99%;\n  background: #eae7e7;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  border-radius: 1vw;\n  box-shadow: 5px 5px 9px #888888;\n}\n\n.info-post {\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 1.1vw;\n}\n\n.info-post span:not(:last-child) {\n  margin-bottom: 2rem;\n}\n\n.image-post {\n  width: 50%;\n  margin: 1rem 4rem 1rem 1rem;\n  border-radius: 0.5vw;\n}\n\n.title-post {\n  font-weight: 600;\n  font-size: 1.5vw;\n  margin: 1%;\n  /* text-shadow: 2px 2px 2px rgb(116, 114, 114); */\n}\n\n.status {\n  text-align: right;\n  color: red;\n  font-weight: 600;\n  font-size: 1.2vw;\n}\n\n.available {\n  color: green;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "Qcs7":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/interests/Interests.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".List {\n    \n    margin: 5% 10%;\n  }\n\n.List h1 {\n    padding: 1%;\n    text-align: center;\n    color: white;\n    background: #4682b4;\n    border-radius: 0.5vw;\n    box-shadow: 5px 5px 9px #888888;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "S27u":
/*!*******************************!*\
  !*** ./src/model/requests.js ***!
  \*******************************/
/*! exports provided: login, reset, addProperty, getProperties, registerInterest, updateSituation, getInterests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProperty", function() { return addProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperties", function() { return getProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInterest", function() { return registerInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSituation", function() { return updateSituation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterests", function() { return getInterests; });
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

function getInterests() {
  return _getInterests.apply(this, arguments);
}

function _getInterests() {
  _getInterests = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7() {
    var resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return window.fetch('/interests');

          case 2:
            resp = _context7.sent;

            if (!(resp.ok === false)) {
              _context7.next = 5;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 5:
            _context7.next = 7;
            return resp.json();

          case 7:
            jsonResponse = _context7.sent;
            return _context7.abrupt("return", jsonResponse);

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getInterests.apply(this, arguments);
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
      logged = props.logged,
      setRefetch = props.setRefetch;

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
                setRefetch(true);
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

/***/ "eJKB":
/*!*******************************************!*\
  !*** ./src/pages/interests/Interests.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Interests.css */ "Qcs7");

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
      logged = props.logged,
      setRefetch = props.setRefetch;

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
      logged: logged,
      setRefetch: setRefetch
    });
  }) : "Nenhum imóvel cadastrado");
}

/***/ }),

/***/ "kMvN":
/*!*******************************************!*\
  !*** ./src/pages/interests/Interests.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interests; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Interests_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Interests.css */ "eJKB");
/* harmony import */ var _Interests_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Interests_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header/Header.jsx */ "5Q7b");
/* harmony import */ var _InterestListItem_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InterestListItem.jsx */ "t6/v");
/* harmony import */ var _model_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/requests */ "S27u");











function Interests(props) {
  var info = props.info,
      setInfo = props.setInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState, 2),
      interests = _useState2[0],
      setInterests = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, list;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_model_requests__WEBPACK_IMPORTED_MODULE_10__["getInterests"])();

          case 2:
            response = _context.sent;
            list = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(response);
            setInterests(list);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "Interests"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    info: info,
    setInfo: setInfo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "List"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Lista de Interesses"), (interests === null || interests === void 0 ? void 0 : interests.length) > 0 ? interests.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_InterestListItem_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      data: item,
      key: index
    });
  }) : "Não há ninguém interessado :("));
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

/***/ "t6/v":
/*!**************************************************!*\
  !*** ./src/pages/interests/InterestListItem.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterestListItem; });
/* harmony import */ var _Interests_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interests.css */ "eJKB");
/* harmony import */ var _Interests_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Interests_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/Header.jsx */ "5Q7b");



function InterestListItem(props) {
  var info = props.info;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ListItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "InterestData"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "C\xF3d. Im\xF3vel: ".concat(info.nr_inscricao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Interessado: ".concat(info.nome)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Tel: ".concat(info.telefone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, "Remover"));
}

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
    garagem: "",
    logged: info.logged
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
      filtroData = _useState2[0],
      setFiltroData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState3, 2),
      refetch = _useState4[0],
      setRefetch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState5, 2),
      properties = _useState6[0],
      setProperties = _useState6[1];

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
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
    var response, listProperties;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!refetch) {
              _context2.next = 7;
              break;
            }

            _context2.next = 3;
            return Object(_model_requests__WEBPACK_IMPORTED_MODULE_10__["getProperties"])(filtroData);

          case 3:
            response = _context2.sent;
            listProperties = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(response);
            setProperties(listProperties);
            setRefetch(false);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [refetch]);

  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFiltroData(_objectSpread(_objectSpread({}, filtroData), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(event) {
      var response, listProperties;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.next = 3;
              return Object(_model_requests__WEBPACK_IMPORTED_MODULE_10__["getProperties"])(filtroData);

            case 3:
              response = _context3.sent;
              listProperties = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(response);
              setProperties(listProperties);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    info: info,
    setInfo: setInfo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "home-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
    properties: properties
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "properties-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_PropertiesList_PropertiesList_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    properties: properties,
    logged: info.logged,
    setRefetch: setRefetch
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
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.home-body {\n  display: flex;\n}\n\n.properties-parent {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5%;\n  padding-right: 160px;\n}\n\n.Teste{\n  height: 100px;\n  width: 100px;\n  background-color: crimson;\n}\n\n.Sidebar {\n  background-color: #d3d4dd;\n  width: 220px;\n}\n\n.FiltroParent {\n  height: 60%;\n}\n\n.Filtro {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.Filtro p {\n  font-size: 16px;\n  margin: 0px;\n}\n\n.Filtro input {\n  width: 50%;\n  height: 16px;\n}\n\n.FiltroRadio {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: left;\n}\n\n.filtro-title {\n  margin-top: 24px;\n  margin-bottom: 12px;\n}\n\n.filtro-button {\n  margin-top: 24px;\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  padding: 14px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n}\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFkZXIvbG9nby1icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3M/MjkxMCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3BlcnRpZXNMaXN0L1Byb3BlcnR5SXRlbS9Qcm9wZXJ0eUJveC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2ludGVyZXN0cy9JbnRlcmVzdHMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0eUl0ZW0vUHJvcGVydHlCb3guanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL0hvbWUuY3NzPzlkYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luL0xvZ2luLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW50ZXJlc3RzL0ludGVyZXN0cy5jc3M/MWFlNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2ludGVyZXN0cy9JbnRlcmVzdHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3BlcnRpZXNMaXN0L1Byb3BlcnR5SXRlbS9Qcm9wZXJ0eUJveC5jc3M/NjQ2NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz83ZDFmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3M/Y2IxOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5jc3M/M2NmNCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW50ZXJlc3RzL0ludGVyZXN0TGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9wZXJ0eS9BZGRQcm9wZXJ0eS5jc3M/ZmMyMCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL0hvbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzPzQ5ODUiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJpbmZvIiwic2V0SW5mbyIsImhhbmRsZUNsaWNrU2FpciIsImRlZmF1bHRJbmZvIiwibG9nbyIsInVzZXJuYW1lIiwibmFtZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciIsIlJlc2V0UGFzc3dvcmQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVN0YXRlIiwic2VlRmlyc3QiLCJzZXRTZWVGaXJzdCIsInNlZVNlY29uZCIsInNldFNlZVNlY29uZCIsInBhc3N3b3JkTWF0Y2giLCJzZXRQYXNzd29yZE1hdGNoIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZUVmZmVjdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJyZXNwb25zZSIsIm9rIiwiYWxlcnQiLCJtZXNzYWdlIiwiZmlyc3QiLCJwdXNoIiwiY29sb3IiLCJMb2dpbiIsInNlZSIsInNldFNlZSIsImxvZ2luIiwibG9nZ2VkIiwiZGF0YSIsImZpcnN0TG9naW4iLCJoYW5kbGVDbGlja1NlZSIsImUiLCJoYW5kbGVWb2x0YXIiLCJ1bmRlZmluZWQiLCJBcHAiLCJyZW5kZXJIb21lIiwicmVuZGVyTG9naW4iLCJyZW5kZXJSZXNldCIsInJlbmRlckFkZFByb3BlcnR5IiwicmVuZGVySW50ZXJlc3RzIiwiQWRkUHJvcGVydHkiLCJuckluc2NyaWNhbyIsImRlc2NyaWNhbyIsImVuZGVyZWNvIiwidGlwbyIsIm5yUXVhcnRvcyIsIm5yQmFuaGVpcm9zIiwibnJHYXJhZ2VucyIsInZhbG9yIiwiYWRkUHJvcGVydHkiLCJpbWciLCJ0aXR1bG8iLCJuckRvcm1pdG9yaW9zIiwibnJWYWdhcyIsImlzTnVtYmVyS2V5IiwiZXZ0IiwiY2hhckNvZGUiLCJ3aGljaCIsImtleUNvZGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsImZvcm0iLCJqc29uRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwIiwiRXJyb3IiLCJqc29uIiwianNvblJlc3BvbnNlIiwiZ2V0UHJvcGVydGllcyIsImZpbHRyb0RhdGEiLCJyZWdpc3RlckludGVyZXN0IiwiaW50ZXJlc3QiLCJ1cGRhdGVTaXR1YXRpb24iLCJnZXRJbnRlcmVzdHMiLCJkZWZhdWx0SW50ZXJlc3QiLCJub21lIiwidGVsZWZvbmUiLCJQcm9wZXJ0eUJveCIsInNldFJlZmV0Y2giLCJpbnRlcmVzdFNlbmQiLCJzZXRJbnRlcmVzdFNlbmQiLCJzZXRJbnRlcmVzdCIsInNpdHVhY2FvIiwic3RhdHVzIiwic2V0U3RhdHVzIiwibnJfaW5zY3JpY2FvIiwiaGFuZGxlU3VibWl0VXBkYXRlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwidG9VcHBlckNhc2UiLCJkb3JtaXRvcmlvcyIsImJhbmhlaXJvcyIsInZhZ2FzIiwiUHJvcGVydGllc0xpc3QiLCJwcm9wZXJ0aWVzIiwiY29udmVydFRvTGlzdEl0ZW1PYmplY3QiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIm5yX2Rvcm1pdG9yaW9zIiwibnJfYmFuaGVpcm9zIiwibnJfdmFnYXNfZ2FyYWdlbSIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiSW50ZXJlc3RzIiwiaW50ZXJlc3RzIiwic2V0SW50ZXJlc3RzIiwibGlzdCIsIkludGVyZXN0TGlzdEl0ZW0iLCJIb21lIiwicHJlY29NaW5pbW8iLCJwcmVjb01heGltbyIsInRpcG9JbW92ZWwiLCJxdWFydG9zIiwiZ2FyYWdlbSIsInNldEZpbHRyb0RhdGEiLCJyZWZldGNoIiwic2V0UHJvcGVydGllcyIsImxpc3RQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDREQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsY0FBYyx3TEFBd0wsd0NBQXdDLHVDQUF1QyxHQUFHLFVBQVUsc0ZBQXNGLEdBQUc7QUFDM1o7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxrRUFBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsK0JBQStCLHlEQUF5RCxJQUFJLGdCQUFnQixjQUFjLGVBQWUsZ0RBQWdELE1BQU0s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QixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixvQkFBb0IseUJBQXlCLEdBQUcsV0FBVyxrQkFBa0IsaUJBQWlCLDhCQUE4QixHQUFHLGNBQWMsOEJBQThCLGlCQUFpQixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxhQUFhLHVCQUF1Qix3QkFBd0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRyxlQUFlLG9CQUFvQixnQkFBZ0IsR0FBRyxtQkFBbUIsZUFBZSxpQkFBaUIsR0FBRyxrQkFBa0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsR0FBRyxtQkFBbUIscUJBQXFCLHdCQUF3QixHQUFHLG9CQUFvQixxQkFBcUIsOEJBQThCLGlCQUFpQixpQkFBaUIsdUJBQXVCLDBCQUEwQix1QkFBdUIsdUJBQXVCLG9CQUFvQixvQkFBb0IsR0FBRztBQUN6a0M7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBLGNBQWMsbUJBQU8sQ0FBQyx3RUFBNkQ7O0FBRW5GLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxpRUFBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoibWFpbi4wYzYzNjkyMjlhODQzNWZhNDJkNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsIFxcXCJVYnVudHVcXFwiLCBcXFwiQ2FudGFyZWxsXFxcIiwgXFxcIkZpcmEgU2Fuc1xcXCIsXFxuICAgIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvIFNsYWI7XFxuICAgIHNyYzogdXJsKCdmb250ZS9Sb2JvdG9TbGFiLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbiB9ICovXFxuXFxuLkhlYWRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNhbnMtc2VyaWY7ICovXFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjJ2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmhlYWRlciBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM0NjgyYjQ7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuaGVhZGVyIHAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCU7XFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIHBhZGRpbmc6IDIuNCU7XFxufVxcblxcbi5oZWFkZXItdGV4dC1sb2dnZWQge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAyLjQlO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuLmhlYWRlci1sb2dvIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWF4LXdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG59XFxuXFxuLmhlYWRlci1sZWZ0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG59XFxuXFxuLmhlYWRlci1yaWdodCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcXG59XFxuXFxuLnBvc3QtbGlzdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuLmhlYWRlci1wb3N0IHtcXG4gIGhlaWdodDogMTIlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgXCIuL0hlYWRlci5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2ltYWdlcy9oZWFkZXIvbG9nby1icmFuY28ucG5nXCJcbmltcG9ydCB7IGRlZmF1bHRJbmZvIH0gZnJvbSBcIi4uLy4uL0FwcC5qc3hcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2FpciA9ICgpID0+IHtcbiAgICBzZXRJbmZvKGRlZmF1bHRJbmZvKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIiBzcmM9e2xvZ299PjwvaW1nPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgIHtpbmZvPy51c2VybmFtZSA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0LWxvZ2dlZFwiIHRvPVwiL1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2Fpcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntgQmVtIHZpbmRvLCAke2luZm8ubmFtZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2Fpcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZXNldFwiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgQWx0ZXJhciBzZW5oYVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkZFwiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgQWRpY2lvbmFyIGltw7N2ZWxcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9pbnRlcmVzdHNcIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgIFZlciBpbnRlcmVzc2Fkb3NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLmpzeFwiXG5cbmNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZWxlbVxuKVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuaW1wb3J0IHsgRmlFeWVPZmYsIEZpRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCJcbmltcG9ydCBcIi4vUmVzZXRQYXNzd29yZC5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmQocHJvcHMpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IGluZm8sIHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IFtzZWVGaXJzdCwgc2V0U2VlRmlyc3RdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWVTZWNvbmQsIHNldFNlZVNlY29uZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Bhc3N3b3JkTWF0Y2gsIHNldFBhc3N3b3JkTWF0Y2hdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybTogXCJcIixcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm0pIHtcbiAgICAgIHNldFBhc3N3b3JkTWF0Y2godHJ1ZSlcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhLnBhc3N3b3JkIHx8IGZvcm1EYXRhLmNvbmZpcm0pIHtcbiAgICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybSkge1xuICAgICAgICBzZXRQYXNzd29yZE1hdGNoKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UGFzc3dvcmRNYXRjaCh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2Zvcm1EYXRhLCBmb3JtRGF0YS5wYXNzd29yZCwgZm9ybURhdGEuY29uZmlybSwgc2V0UGFzc3dvcmRNYXRjaF0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gZm9ybURhdGFcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc2V0KHsgdXNlcm5hbWU6IGluZm8udXNlcm5hbWUsIHBhc3N3b3JkIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlPy5vaykge1xuICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJTZW5oYSBhbHRlcmFkYSBjb20gc3VjZXNzb1wiKVxuICAgICAgc2V0SW5mbyh7IC4uLmluZm8sIGZpcnN0OiBmYWxzZSB9KVxuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlZ2lzdGVyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGl0bGUtcmVnaXN0ZXJcIj5BbHRlcmFyIHNlbmhhOjwvcD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkRpZ2l0ZSBhIG5vdmEgc2VuaGE6PC9sYWJlbD5cbiAgICAgICAgICB7IXNlZUZpcnN0ID8gKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1leWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWVGaXJzdCghc2VlRmlyc3QpfT5cbiAgICAgICAgICAgIHtzZWVGaXJzdCA/IDxGaUV5ZSAvPiA6IDxGaUV5ZU9mZiAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+Q29uZmlybWUgYSBub3ZhIHNlbmhhOjwvbGFiZWw+XG4gICAgICAgICAgeyFzZWVTZWNvbmQgPyAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImNvbmZpcm1cIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb25maXJtXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi1leWVcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWVTZWNvbmQoIXNlZVNlY29uZCl9PlxuICAgICAgICAgICAge3NlZVNlY29uZCA/IDxGaUV5ZSAvPiA6IDxGaUV5ZU9mZiAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7IXBhc3N3b3JkTWF0Y2ggJiYgPGxhYmVsIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlNlbmhhcyBuw6NvIGNvcnJlc3BvbmRlbTwvbGFiZWw+fVxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgU2FsdmFyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nby1icmFuY28ucG5nXCI7IiwiaW1wb3J0IFwiLi9Mb2dpbi5jc3NcIlxuaW1wb3J0IHsgRmlFeWVPZmYsIEZpRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4XCJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XG4gIGNvbnN0IHsgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIGNvbnN0IFtzZWUsIHNldFNlZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGZvcm1EYXRhXG4gICAgaWYgKCF1c2VybmFtZSAmJiAhcGFzc3dvcmQpIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgb3MgY2FtcG9zIGNvcnJldGFtZW50ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlPy5vaykge1xuICAgICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBlZmV0dWFkbyBjb20gc3VjZXNzb1wiKVxuICAgICAgICBzZXRJbmZvKHtcbiAgICAgICAgICBsb2dnZWQ6IHJlc3BvbnNlLm9rLFxuICAgICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgIG5hbWU6IHJlc3BvbnNlLmRhdGEubmFtZSxcbiAgICAgICAgICBmaXJzdDogcmVzcG9uc2UuZGF0YS5maXJzdExvZ2luLFxuICAgICAgICB9KVxuICAgICAgICBoaXN0b3J5LnB1c2gocmVzcG9uc2UuZGF0YS5maXJzdExvZ2luID8gXCIvcmVzZXRcIiA6IFwiL1wiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRTZWUoIXNlZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVZvbHRhciA9ICgpID0+IGhpc3RvcnkucHVzaChcIi9cIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5cIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1yZWdpc3RlclwiPkZhw6dhIHNldSBsb2dpbjo8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgZGUgdXN1w6FyaW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICB7IXNlZSA/IChcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiU2VuaGFcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNlbmhhXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWV5ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2VlfT5cbiAgICAgICAgICAgICAge3NlZSA/IDxGaUV5ZSAvPiA6IDxGaUV5ZU9mZiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb2JhY2stYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVm9sdGFyfT5cbiAgICAgICAgICAgICAgICBWb2x0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInRvc3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgUm91dGUsIEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lL0hvbWUuanN4XCJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9wYWdlcy9sb2dpbi9Mb2dpbi5qc3hcIlxuaW1wb3J0IFJlc2V0UGFzc3dvcmQgZnJvbSBcIi4vcGFnZXMvcmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkLmpzeFwiXG5pbXBvcnQgQWRkUHJvcGVydHkgZnJvbSBcIi4vcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuanN4XCJcbmltcG9ydCBJbnRlcmVzdHMgZnJvbSBcIi4vcGFnZXMvaW50ZXJlc3RzL0ludGVyZXN0cy5qc3hcIlxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEluZm8gPSB7XG4gIGxvZ2dlZDogZmFsc2UsXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXG4gIG5hbWU6IHVuZGVmaW5lZCxcbiAgZmlyc3Q6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShkZWZhdWx0SW5mbylcblxuICBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiA8SG9tZSBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxMb2dpbiBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyUmVzZXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxSZXNldFBhc3N3b3JkIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJBZGRQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gPEFkZFByb3BlcnR5IGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICBjb25zdCByZW5kZXJJbnRlcmVzdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxJbnRlcmVzdHMgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJIb21lfSBwYXRoPVwiL1wiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJMb2dpbn0gcGF0aD1cIi9sb2dpblwiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJSZXNldH0gcGF0aD1cIi9yZXNldFwiIGV4YWN0IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtyZW5kZXJBZGRQcm9wZXJ0eX0gcGF0aD1cIi9hZGRcIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVySW50ZXJlc3RzfSBwYXRoPVwiL2ludGVyZXN0c1wiIGV4YWN0IC8+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZXNldFBhc3N3b3JkLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZXNldFBhc3N3b3JkLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3hcIlxuaW1wb3J0IHsgYWRkUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuaW1wb3J0IFwiLi9BZGRQcm9wZXJ0eS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRQcm9wZXJ0eShwcm9wcykge1xuICBjb25zdCB7IGluZm8sIHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbnJJbnNjcmljYW86IFwiXCIsXG4gICAgZGVzY3JpY2FvOiBcIlwiLFxuICAgIGVuZGVyZWNvOiBcIlwiLFxuICAgIHRpcG86IFwiXCIsXG4gICAgbnJRdWFydG9zOiBcIlwiLFxuICAgIG5yQmFuaGVpcm9zOiBcIlwiLFxuICAgIG5yR2FyYWdlbnM6IFwiXCIsXG4gICAgdmFsb3I6IFwiXCIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyBuckluc2NyaWNhbywgZGVzY3JpY2FvLCBlbmRlcmVjbywgdGlwbywgbnJRdWFydG9zLCBuckJhbmhlaXJvcywgbnJHYXJhZ2VucywgdmFsb3IgfSA9IGZvcm1EYXRhXG4gICAgaWYgKCFuckluc2NyaWNhbyB8fCAhZGVzY3JpY2FvIHx8ICFlbmRlcmVjbyB8fCAhdGlwbyB8fCAhbnJRdWFydG9zIHx8ICFuckJhbmhlaXJvcyB8fCAhbnJHYXJhZ2VucyB8fCAhdmFsb3IpIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgb3MgY2FtcG9zIGNvcnJldGFtZW50ZS5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZGRQcm9wZXJ0eSh7XG4gICAgICAgIG5ySW5zY3JpY2FvLFxuICAgICAgICBpbWc6IFwiaW1nXCIsXG4gICAgICAgIHRpdHVsbzogZGVzY3JpY2FvLFxuICAgICAgICBlbmRlcmVjbyxcbiAgICAgICAgdGlwbyxcbiAgICAgICAgbnJEb3JtaXRvcmlvczogbnJRdWFydG9zLFxuICAgICAgICBuckJhbmhlaXJvcyxcbiAgICAgICAgbnJWYWdhczogbnJHYXJhZ2VucyxcbiAgICAgICAgdmFsb3IsXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiSW3Ds3ZlbCBzYWx2byBjb20gc3VjZXNzbyFcIilcbiAgICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVZvbHRhciA9ICgpID0+IGhpc3RvcnkucHVzaChcIi9cIilcblxuICBmdW5jdGlvbiBpc051bWJlcktleShldnQpIHtcbiAgICB2YXIgY2hhckNvZGUgPSBldnQud2hpY2ggPyBldnQud2hpY2ggOiBldnQua2V5Q29kZVxuICAgIGlmIChjaGFyQ29kZSAhPSA0NiAmJiBjaGFyQ29kZSA+IDMxICYmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luXCI+XG4gICAgICA8SGVhZGVyIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtcmVnaXN0ZXJcIj5DYWRhc3RyZSB1bSBpbcOzdmVsOjwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuckluc2NyaWNhb1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgIE51bWVybyBkZSBJbnNjcmnDp8OjbzpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnJJbnNjcmljYW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2lzTnVtYmVyS2V5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmljYW9cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICBUaXR1bG86XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGVzY3JpY2FvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmRlcmVjb1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgIEVuZGVyZcOnbzpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbmRlcmVjb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxoMj5UaXBvIGRvIGltw7N2ZWw6PC9oMj5cbiAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FzYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEudGlwbyA9PT0gXCJjYXNhXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvXCI+Q2FzYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYXBhcnRhbWVudG9cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnRpcG8gPT09IFwiYXBhcnRhbWVudG9cIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG9cIj5BcGFydGFtZW50bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5yUXVhcnRvc1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgTnVtZXJvIGRlIHF1YXJ0b3M6XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuclF1YXJ0b3NcIiBtaW49XCIwXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuckJhbmhlaXJvc1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgTnVtZXJvIGRlIGJhbmhlaXJvczpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm5yQmFuaGVpcm9zXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJHYXJhZ2Vuc1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgTnVtZXJvIGRlIHZhZ2FzIG5hIGdhcmFnZW06XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuckdhcmFnZW5zXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsb3JcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIFZhbG9yOlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwidmFsb3JcIiBtaW49XCIwXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ29iYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVZvbHRhcn0+XG4gICAgICAgICAgICAgICAgVm9sdGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0b3N1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyLXBvc3Qge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNDglO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMS41JTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNSU7XFxufVxcblxcbi5oZWFkZXItcG9zdCB7XFxuICBoZWlnaHQ6IDEyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudC1wb3N0IHtcXG4gIG1hcmdpbjogMHJlbSA2cmVtO1xcbiAgaGVpZ2h0OiA4OCU7XFxuICB3aWR0aDogOTklO1xcbiAgYmFja2dyb3VuZDogI2VhZTdlNztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG59XFxuXFxuLmluZm8tcG9zdCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjF2dztcXG59XFxuXFxuLmluZm8tcG9zdCBzcGFuOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmltYWdlLXBvc3Qge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMXJlbSA0cmVtIDFyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xcbn1cXG5cXG4udGl0bGUtcG9zdCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIG1hcmdpbjogMSU7XFxuICAvKiB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDExNiwgMTE0LCAxMTQpOyAqL1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMnZ3O1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTGlzdCB7XFxuICAgIFxcbiAgICBtYXJnaW46IDUlIDEwJTtcXG4gIH1cXG5cXG4uTGlzdCBoMSB7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzQ2ODJiNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggOXB4ICM4ODg4ODg7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZm9ybSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL2xvZ2luYCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0KGZvcm0pIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLCBwYXNzd29yZDogZm9ybS5wYXNzd29yZCB9KVxuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYC9yZXNldGAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRQcm9wZXJ0eShmb3JtKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5mb3JtIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL3Byb3BlcnR5YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb3BlcnRpZXMoZmlsdHJvRGF0YSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uZmlsdHJvRGF0YSB9KVxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKFwiL3Byb3BlcnRpZXNcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJlc3QoaW50ZXJlc3QpIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmludGVyZXN0IH0pXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goXCIvaW50ZXJlc3RcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNpdHVhdGlvbihkYXRhKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5kYXRhIH0pXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goXCIvdXBkYXRlXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBqc29uRGF0YSxcbiAgfSlcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnRlcmVzdHMoKSB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goJy9pbnRlcmVzdHMnKVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG5cbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuIiwiaW1wb3J0IFwiLi9Qcm9wZXJ0eUJveC5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlZ2lzdGVySW50ZXJlc3QsIHVwZGF0ZVNpdHVhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW50ZXJlc3QgPSB7XG4gIG5vbWU6IFwiXCIsXG4gIHRlbGVmb25lOiBcIlwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eUJveChwcm9wcykge1xuICBjb25zdCB7IGRhdGEsIGxvZ2dlZCwgc2V0UmVmZXRjaCB9ID0gcHJvcHNcbiAgY29uc3QgW2ludGVyZXN0U2VuZCwgc2V0SW50ZXJlc3RTZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW50ZXJlc3QsIHNldEludGVyZXN0XSA9IHVzZVN0YXRlKGRlZmF1bHRJbnRlcmVzdClcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGRhdGEuc2l0dWFjYW8pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghaW50ZXJlc3Qubm9tZSB8fCAhaW50ZXJlc3QudGVsZWZvbmUpIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zLlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVySW50ZXJlc3QoeyAuLi5pbnRlcmVzdCwgbnJfaW5zY3JpY2FvOiBkYXRhLm5yX2luc2NyaWNhbyB9KVxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGFsZXJ0KFwiSW50ZXJlc3NlIHJlZ2lzdHJhZG8gY29tIHN1Y2Vzc28hXCIpXG4gICAgICAgIHNldEludGVyZXN0U2VuZCh0cnVlKVxuICAgICAgICBzZXRJbnRlcmVzdCh7IC4uLmRlZmF1bHRJbnRlcmVzdCwgbnJfaW5zY3JpY2FvOiBkYXRhLm5yX2luc2NyaWNhbyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXRVcGRhdGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIGFsZXJ0KFwiw4kgbmVjZXNzw6FyaW8gZXNjb2xoZXIgdW1hIHNpdHVhw6fDo28gcGFyYSBhdHVhbGl6YXJcIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGRhdGVTaXR1YXRpb24oeyBucl9pbnNjcmljYW86IGRhdGEubnJfaW5zY3JpY2FvLCBzaXR1YWNhbzogc3RhdHVzIH0pXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgYWxlcnQoXCJTaXR1YcOnw6NvIGF0dWFsaXphZGEgY29tIHN1Y2Vzc28hXCIpXG4gICAgICAgIHNldFJlZmV0Y2godHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlLm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRJbnRlcmVzdCh7IC4uLmludGVyZXN0LCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRTdGF0dXModmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXBvc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXBvc3RcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtcG9zdFwiPntkYXRhLnRpdHVsb308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1wb3N0XCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2UtcG9zdFwiIHNyYz1cImltYWdlbnMvY2FzYTEuanBnXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXBvc3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2RhdGEuc2l0dWFjYW8gPT09IFwiZGlzcG9uaXZlbFwiID8gXCJzdGF0dXMgYXZhaWxhYmxlXCIgOiBcInN0YXR1c1wifT5cbiAgICAgICAgICAgIHtkYXRhLnNpdHVhY2FvLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntgRW5kZXJlw6dvOiAke2RhdGEuZW5kZXJlY299YH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e2BEb3JtaXRvcmlvczogJHtkYXRhLmRvcm1pdG9yaW9zfWB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntgQmFuaGVpcm9zOiAke2RhdGEuYmFuaGVpcm9zfWB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntgVmFnYXMgbmEgZ2FyYWdlbTogJHtkYXRhLnZhZ2FzfWB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntgVmFsb3IgZG8gYWx1Z3VlbDogUiQke2RhdGEudmFsb3J9YH08L3NwYW4+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtsb2dnZWQgPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXR1c1wiPkFsdGVyZSBvIHN0YXR1cyBkbyBpbcOzdmVsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZX0+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzdGF0dXNcIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkaXNwb25pdmVsXCI+RGlzcG9uw612ZWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlc2VydmFkb1wiPlJlc2VydmFkbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWx1Z2Fkb1wiPkFsdWdhZG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImluZGlzcG9uaXZlbFwiPkluZGlzcG9uw612ZWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QXR1YWxpemFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAhaW50ZXJlc3RTZW5kID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJub21lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGNvbXBsZXRvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRlbGVmb25lXCIgcGxhY2Vob2xkZXI9XCJUZWxlZm9uZSBwYXJhIGNvbnRhdG9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3Bhbj4gVm9jw6ogasOhIHJlZ2lzdHJvdSBzZXUgaW50ZXJlc3NlIHBhcmEgZXN0ZSBpbcOzdmVsLjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmVnaXN0ZXIge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMSU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50aXRsZS1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMTAlIDM1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggNDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYnV0dG9uLWV5ZSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTG9naW4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnJlZ2lzdGVyIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZWE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDElO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggOXB4ICM4ODg4ODg7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUtcmVnaXN0ZXIge1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogODAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDAuOXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMSUgMS41JSAxJSA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxJSAxLjUlIDElIDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi50b3N1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2OTk5O1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ludGVyZXN0cy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW50ZXJlc3RzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW50ZXJlc3RzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vUHJvcGVydGllc0xpc3QuY3NzXCJcbmltcG9ydCBQcm9wZXJ0eUJveCBmcm9tIFwiLi9Qcm9wZXJ0eUl0ZW0vUHJvcGVydHlCb3guanN4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0aWVzTGlzdChwcm9wcykge1xuICBjb25zdCB7IHByb3BlcnRpZXMsIGxvZ2dlZCwgc2V0UmVmZXRjaCB9ID0gcHJvcHNcblxuICBjb25zdCBjb252ZXJ0VG9MaXN0SXRlbU9iamVjdCA9IChpdGVtKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXRlbSlcbiAgICByZXR1cm4ge1xuICAgICAgbnJfaW5zY3JpY2FvOiBpdGVtLm5yX2luc2NyaWNhbyxcbiAgICAgIHRpdHVsbzogaXRlbS50aXR1bG8sXG4gICAgICBlbmRlcmVjbzogaXRlbS5lbmRlcmVjbyxcbiAgICAgIGRvcm1pdG9yaW9zOiBpdGVtLm5yX2Rvcm1pdG9yaW9zLFxuICAgICAgYmFuaGVpcm9zOiBpdGVtLm5yX2JhbmhlaXJvcyxcbiAgICAgIHZhZ2FzOiBpdGVtLm5yX3ZhZ2FzX2dhcmFnZW0sXG4gICAgICB2YWxvcjogaXRlbS52YWxvcixcbiAgICAgIHNpdHVhY2FvOiBpdGVtLnNpdHVhY2FvLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWxpc3RcIj5cbiAgICAgIHtwcm9wZXJ0aWVzPy5sZW5ndGggPiAwXG4gICAgICAgID8gcHJvcGVydGllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJvcGVydHlCb3ggZGF0YT17Y29udmVydFRvTGlzdEl0ZW1PYmplY3QoaXRlbSl9IGtleT17aW5kZXh9IGxvZ2dlZD17bG9nZ2VkfSBzZXRSZWZldGNoPXtzZXRSZWZldGNofSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIDogXCJOZW5odW0gaW3Ds3ZlbCBjYWRhc3RyYWRvXCJ9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBcIi4vSW50ZXJlc3RzLmNzc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4XCJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9JbnRlcmVzdExpc3RJdGVtLmpzeFwiXG5pbXBvcnQgeyBnZXRJbnRlcmVzdHMgfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcmVzdHMocHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtpbnRlcmVzdHMsIHNldEludGVyZXN0c10gPSB1c2VTdGF0ZSgpXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRJbnRlcmVzdHMoKVxuICAgIGNvbnN0IGxpc3QgPSBbLi4ucmVzcG9uc2VdXG4gICAgc2V0SW50ZXJlc3RzKGxpc3QpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJJbnRlcmVzdHNcIj5cbiAgICAgIDxIZWFkZXIgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGlzdFwiPlxuICAgICAgICA8aDE+TGlzdGEgZGUgSW50ZXJlc3NlczwvaDE+XG4gICAgICAgIHtpbnRlcmVzdHM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGludGVyZXN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8TGlzdEl0ZW0gZGF0YT17aXRlbX0ga2V5PXtpbmRleH0gLz4pXG4gICAgICAgICAgOiBcIk7Do28gaMOhIG5pbmd1w6ltIGludGVyZXNzYWRvIDooXCJ9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvcGVydHlCb3guY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb3BlcnR5Qm94LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvcGVydHlCb3guY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wb3N0LWxpc3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0aWVzTGlzdC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvcGVydGllc0xpc3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0aWVzTGlzdC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgXCIuL0ludGVyZXN0cy5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJlc3RMaXN0SXRlbShwcm9wcykge1xuICBjb25zdCB7IGluZm8gfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMaXN0SXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkludGVyZXN0RGF0YVwiPlxuICAgICAgICAgICAgPHA+e2BDw7NkLiBJbcOzdmVsOiAke2luZm8ubnJfaW5zY3JpY2FvfWB9PC9wPlxuICAgICAgICAgICAgPHA+e2BJbnRlcmVzc2FkbzogJHtpbmZvLm5vbWV9YH08L3A+XG4gICAgICAgICAgICA8cD57YFRlbDogJHtpbmZvLnRlbGVmb25lfWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbj5SZW1vdmVyPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZFByb3BlcnR5LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRQcm9wZXJ0eS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FkZFByb3BlcnR5LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vSG9tZS5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgeyBnZXRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCBQcm9wZXJ0aWVzTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5qc3hcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW2ZpbHRyb0RhdGEsIHNldEZpbHRyb0RhdGFdID0gdXNlU3RhdGUoe1xuICAgIHByZWNvTWluaW1vOiBcIlwiLFxuICAgIHByZWNvTWF4aW1vOiBcIlwiLFxuICAgIHRpcG9JbW92ZWw6IFwiXCIsXG4gICAgcXVhcnRvczogXCJcIixcbiAgICBiYW5oZWlyb3M6IFwiXCIsXG4gICAgZ2FyYWdlbTogXCJcIixcbiAgICBsb2dnZWQ6IGluZm8ubG9nZ2VkLFxuICB9KVxuICBjb25zdCBbcmVmZXRjaCwgc2V0UmVmZXRjaF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbcHJvcGVydGllcywgc2V0UHJvcGVydGllc10gPSB1c2VTdGF0ZSgpXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQcm9wZXJ0aWVzKGZpbHRyb0RhdGEpXG4gICAgY29uc3QgbGlzdFByb3BlcnRpZXMgPSBbLi4ucmVzcG9uc2VdXG4gICAgc2V0UHJvcGVydGllcyhsaXN0UHJvcGVydGllcylcbiAgfSwgW2luZm8ubG9nZ2VkXSlcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChyZWZldGNoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFByb3BlcnRpZXMoZmlsdHJvRGF0YSlcbiAgICAgIGNvbnN0IGxpc3RQcm9wZXJ0aWVzID0gWy4uLnJlc3BvbnNlXVxuICAgICAgc2V0UHJvcGVydGllcyhsaXN0UHJvcGVydGllcylcbiAgICAgIHNldFJlZmV0Y2goZmFsc2UpXG4gICAgfVxuICB9LCBbcmVmZXRjaF0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRGaWx0cm9EYXRhKHsgLi4uZmlsdHJvRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvcGVydGllcyhmaWx0cm9EYXRhKVxuICAgIGNvbnN0IGxpc3RQcm9wZXJ0aWVzID0gWy4uLnJlc3BvbnNlXVxuICAgIHNldFByb3BlcnRpZXMobGlzdFByb3BlcnRpZXMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8SGVhZGVyIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZGViYXJcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUGFyZW50XCI+XG4gICAgICAgICAgICAgIDxoMz5GaWx0cm9zPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+UHJlw6dvIGRvIEFsdWd1ZWw8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvXCI+XG4gICAgICAgICAgICAgICAgPHA+RGUgUiQ8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwcmVjb01pbmltb1wiIHBsYWNlaG9sZGVyPVwiTWluXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9cIj5cbiAgICAgICAgICAgICAgICA8cD5BdMOpIFIkPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJlY29NYXhpbW9cIiBwbGFjZWhvbGRlcj1cIk1heFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+VGlwbyBkZSBJbcOzdmVsPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJ0aXBvLWFueVwiIG5hbWU9XCJ0aXBvSW1vdmVsXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiY2FzYVwiIGlkPVwidGlwby1jYXNhXCIgbmFtZT1cInRpcG9JbW92ZWxcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvLWNhc2FcIj5DYXNhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImFwYXJ0YW1lbnRvXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGlwby1hcGFydGFtZW50b1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb0ltb3ZlbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG8tYXBhcnRhbWVudG9cIj5BcGFydGFtZW50bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlF1YXJ0b3M8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cInF1YXJ0b3MtYW55XCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFydG9zLWFueVwiPlF1YWxxdWVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJxdWFydG9zLTFcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMVwiPjEgcXVhcnRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJxdWFydG9zLTJcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMlwiPjIgcXVhcnRvczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiM1wiIGlkPVwicXVhcnRvcy0zK1wiIG5hbWU9XCJxdWFydG9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy0zK1wiPjMrIHF1YXJ0b3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5CYW5oZWlyb3M8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvUmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcIiBpZD1cImJhbmhlaXJvcy1hbnlcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLWFueVwiPlF1YWxxdWVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJiYW5oZWlyb3MtMVwiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMVwiPjEgYmFuaGVpcm88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjJcIiBpZD1cImJhbmhlaXJvcy0yXCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy0yXCI+MiBiYW5oZWlyb3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjNcIiBpZD1cImJhbmhlaXJvcy0zK1wiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMytcIj4zKyBiYW5oZWlyb3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5HYXJhZ2VtPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJnYXJhZ2VtLWFueVwiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiIGlkPVwiZ2FyYWdlbS0wXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYXJhZ2VtLTBcIj5TZW0gdmFnYXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiBpZD1cImdhcmFnZW0tMVwiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0xXCI+MSB2YWdhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJnYXJhZ2VtLTIrXCIgbmFtZT1cImdhcmFnZW1cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYXJhZ2VtLTIrXCI+MisgdmFnYXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0cm8tYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBBcGxpY2FyIEZpbHRyb3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydGllcy1wYXJlbnRcIj5cbiAgICAgICAgICA8UHJvcGVydGllc0xpc3QgcHJvcGVydGllcz17cHJvcGVydGllc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydGllcy1wYXJlbnRcIj5cbiAgICAgICAgPFByb3BlcnRpZXNMaXN0IHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IGxvZ2dlZD17aW5mby5sb2dnZWR9IHNldFJlZmV0Y2g9e3NldFJlZmV0Y2h9IC8+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlRlc3RlXCIvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTY5OTk7XFxufVxcblxcbi5nb2JhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDM0cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5nb2JhY2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5BcHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9wZXJ0aWVzLXBhcmVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4uVGVzdGV7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLlNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDRkZDtcXG4gIHdpZHRoOiAyMjBweDtcXG59XFxuXFxuLkZpbHRyb1BhcmVudCB7XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLkZpbHRybyB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5GaWx0cm8gcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLkZpbHRybyBpbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uRmlsdHJvUmFkaW8ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5maWx0cm8tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5maWx0cm8tYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9IZWFkZXIuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==