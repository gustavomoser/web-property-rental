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
exports.push([module.i, "/* @font-face {\n    font-family: Roboto Slab;\n    src: url('fonte/RobotoSlab-VariableFont_wght.ttf');\n } */\n\n.Header {\n  margin: 0;\n  padding: 0;\n  /* font-family: \"Roboto Slab\", sans-serif; */\n}\n\nheader {\n  background: #000000;\n  display: flex;\n  width: 100%;\n  height: 80px;\n}\n\nheader a {\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n}\n\nheader a:hover {\n  background: #4682b4;\n  transition: 1s;\n}\n\nheader p {\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  margin: 0%;\n}\n\n.header-text {\n  color: #f2f2f2;\n  padding: 2.4%;\n}\n\n.header-text-logged {\n  color: #f2f2f2;\n  padding: 2.4%;\n  font-size: small;\n}\n\n.header-logo {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 2%;\n  margin-right: 2%;\n  padding: 0%;\n  max-width: auto;\n  max-height: 60px;\n}\n\n.header-left {\n  height: 100%;\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n}\n\n.header-right {\n  height: 100%;\n  width: 50%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: right;\n  padding-right: 2%;\n}\n\n.post-list {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.header-post {\n  height: 12%;\n  width: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "/MlH":
/*!**************************************************!*\
  !*** ./src/pages/interests/InterestListItem.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./InterestListItem.css */ "pkl4");

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Bem vindo, ".concat(info.name, "!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Sair"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    className: "header-text"
  }, "Voltar para a p\xE1gina inicial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
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

  var handleVoltar = function handleVoltar(event) {
    event.preventDefault();
    history.goBack();
  };

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
  }, "Senhas n\xE3o correspondem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    className: "goback-button",
    onClick: handleVoltar
  }, "Voltar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    type: "submit",
    className: "tosubmit-button"
  }, "Salvar")))));
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
      var nrInscricao, descricao, endereco, tipo, nrQuartos, nrBanheiros, nrGaragens, valor, img, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              nrInscricao = formData.nrInscricao, descricao = formData.descricao, endereco = formData.endereco, tipo = formData.tipo, nrQuartos = formData.nrQuartos, nrBanheiros = formData.nrBanheiros, nrGaragens = formData.nrGaragens, valor = formData.valor, img = formData.img;

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
                img: img,
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

  var handleVoltar = function handleVoltar(event) {
    event.preventDefault();
    history.goBack();
  };

  function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      var img = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        return function (e) {
          var binaryData = e.target.result;
          var base64String = window.btoa(binaryData);
          setFormData(_objectSpread(_objectSpread({}, formData), {}, {
            img: base64String
          }));
        };
      }(img);

      reader.readAsBinaryString(img);
    }
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "file",
    name: "image",
    onChange: onImageChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
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
/*! exports provided: login, reset, addProperty, getProperties, registerInterest, updateSituation, getInterests, removeInterests */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInterests", function() { return removeInterests; });
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
            return window.fetch("/interests");

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

function removeInterests(_x7) {
  return _removeInterests.apply(this, arguments);
}

function _removeInterests() {
  _removeInterests = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8(data) {
    var jsonData, resp, jsonResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            jsonData = JSON.stringify(_objectSpread({}, data));
            _context8.next = 3;
            return window.fetch("/delete", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: jsonData
            });

          case 3:
            resp = _context8.sent;

            if (!(resp.ok === false)) {
              _context8.next = 6;
              break;
            }

            throw new Error("Não foi possível acessar dados no servidor.");

          case 6:
            _context8.next = 8;
            return resp.json();

          case 8:
            jsonResponse = _context8.sent;
            return _context8.abrupt("return", jsonResponse);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _removeInterests.apply(this, arguments);
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
    src: "data:image/jpg;base64, ".concat(data.imagem)
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
exports.push([module.i, ".container {\n  /* position: absolute; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.register {\n  height: 60%;\n  width: 30%;\n  background: #e8e7ea;\n  position: relative;\n  margin: 1%;\n  border-radius: 1vw;\n  border: 1px solid grey;\n  box-shadow: 5px 5px 9px #888888;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n}\n.title-register {\n  font-size: 1.5vw;\n  font-weight: 600;\n  padding-bottom: 5%;\n  padding-top: 5%;\n}\n\n.tosubmit-button {\n  background-color: #4682b4;\n  border: none;\n  color: white;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 16px 34px;\n  margin: 1rem;\n}\n\n.tosubmit-button:hover {\n  background-color: #2e6999;\n}\n\n.goback-button {\n  background-color: gray;\n  border: none;\n  color: black;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 16px 34px;\n  margin: 1rem;\n}\n\n.goback-button:hover {\n  background-color: darkgray;\n}\n\n.button-group {\n  display: flex;\n  padding: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-eye {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n", ""]);
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
    return {
      nr_inscricao: item.nr_inscricao,
      imagem: item.img,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState, 2),
      refetch = _useState2[0],
      setRefetch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useState3, 2),
      interests = _useState4[0],
      setInterests = _useState4[1];

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
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var response, list;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!refetch) {
              _context2.next = 7;
              break;
            }

            _context2.next = 3;
            return Object(_model_requests__WEBPACK_IMPORTED_MODULE_10__["getInterests"])();

          case 3:
            response = _context2.sent;
            list = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(response);
            setInterests(list);
            setRefetch(false);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [refetch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "Interests"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    info: info,
    setInfo: setInfo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "List"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Lista de Interesses"), (interests === null || interests === void 0 ? void 0 : interests.length) > 0 ? interests.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_InterestListItem_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      info: item,
      key: index,
      setRefetch: setRefetch
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

/***/ "pkl4":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/interests/InterestListItem.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ListItem {\n    background: #eae7e7;\n    border-radius: 0.5vw;\n    box-shadow: 5px 5px 9px #888888;\n    display: flex;\n    \n    margin: 1% 0%;\n    padding: 0px 5px;\n}\n\n.InterestData {\n    display: flex;\n    width: 90%;\n    justify-content: space-evenly;\n}\n\n.ListItem button {\n    margin: 5px 10px;\n    width: 10%;\n\n    background-color: #4682b4;\n    border: none;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 0.5vw;\n    cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InterestListItem_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InterestListItem.css */ "/MlH");
/* harmony import */ var _InterestListItem_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InterestListItem_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_requests_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/requests.js */ "S27u");






function InterestListItem(props) {
  var info = props.info,
      setRefetch = props.setRefetch;

  var handleOnClick = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_model_requests_js__WEBPACK_IMPORTED_MODULE_5__["removeInterests"])(info);

            case 2:
              res = _context.sent;

              if (res.ok) {
                setRefetch(true);
                alert("Imóvel reservado com sucesso!");
              } else {
                alert(res.message);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "ListItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "InterestData"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "C\xF3d. Im\xF3vel: ".concat(info.nr_inscricao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Interessado: ".concat(info.nome)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Tel: ".concat(info.telefone))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: handleOnClick
  }, "Reservar"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbnRlcmVzdHMvSW50ZXJlc3RMaXN0SXRlbS5jc3M/MGUzZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhZGVyL2xvZ28tYnJhbmNvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4vTG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuY3NzPzI5MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb3BlcnR5L0FkZFByb3BlcnR5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0eUl0ZW0vUHJvcGVydHlCb3guY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbnRlcmVzdHMvSW50ZXJlc3RzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvcGVydGllc0xpc3QvUHJvcGVydHlJdGVtL1Byb3BlcnR5Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmNzcz85ZGI4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9yZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2ludGVyZXN0cy9JbnRlcmVzdHMuY3NzPzFhZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvcGVydGllc0xpc3QvUHJvcGVydGllc0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbnRlcmVzdHMvSW50ZXJlc3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0eUl0ZW0vUHJvcGVydHlCb3guY3NzPzY0NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvcGVydGllc0xpc3QvUHJvcGVydGllc0xpc3QuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/N2QxZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW50ZXJlc3RzL0ludGVyZXN0TGlzdEl0ZW0uY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi9Mb2dpbi5jc3M/Y2IxOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9wZXJ0aWVzTGlzdC9Qcm9wZXJ0aWVzTGlzdC5jc3M/M2NmNCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW50ZXJlc3RzL0ludGVyZXN0TGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9wZXJ0eS9BZGRQcm9wZXJ0eS5jc3M/ZmMyMCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvcGVydHkvQWRkUHJvcGVydHkuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lL0hvbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuY3NzPzQ5ODUiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJpbmZvIiwic2V0SW5mbyIsImhhbmRsZUNsaWNrU2FpciIsImRlZmF1bHRJbmZvIiwibG9nbyIsInVzZXJuYW1lIiwibmFtZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciIsIlJlc2V0UGFzc3dvcmQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVN0YXRlIiwic2VlRmlyc3QiLCJzZXRTZWVGaXJzdCIsInNlZVNlY29uZCIsInNldFNlZVNlY29uZCIsInBhc3N3b3JkTWF0Y2giLCJzZXRQYXNzd29yZE1hdGNoIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZUVmZmVjdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJyZXNwb25zZSIsIm9rIiwiYWxlcnQiLCJtZXNzYWdlIiwiZmlyc3QiLCJwdXNoIiwiaGFuZGxlVm9sdGFyIiwiZ29CYWNrIiwiY29sb3IiLCJMb2dpbiIsInNlZSIsInNldFNlZSIsImxvZ2luIiwibG9nZ2VkIiwiZGF0YSIsImZpcnN0TG9naW4iLCJoYW5kbGVDbGlja1NlZSIsImUiLCJ1bmRlZmluZWQiLCJBcHAiLCJyZW5kZXJIb21lIiwicmVuZGVyTG9naW4iLCJyZW5kZXJSZXNldCIsInJlbmRlckFkZFByb3BlcnR5IiwicmVuZGVySW50ZXJlc3RzIiwiQWRkUHJvcGVydHkiLCJuckluc2NyaWNhbyIsImRlc2NyaWNhbyIsImVuZGVyZWNvIiwidGlwbyIsIm5yUXVhcnRvcyIsIm5yQmFuaGVpcm9zIiwibnJHYXJhZ2VucyIsInZhbG9yIiwiaW1nIiwiYWRkUHJvcGVydHkiLCJ0aXR1bG8iLCJuckRvcm1pdG9yaW9zIiwibnJWYWdhcyIsImlzTnVtYmVyS2V5IiwiZXZ0IiwiY2hhckNvZGUiLCJ3aGljaCIsImtleUNvZGUiLCJvbkltYWdlQ2hhbmdlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiYmluYXJ5RGF0YSIsInJlc3VsdCIsImJhc2U2NFN0cmluZyIsIndpbmRvdyIsImJ0b2EiLCJyZWFkQXNCaW5hcnlTdHJpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsImZvcm0iLCJqc29uRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwIiwiRXJyb3IiLCJqc29uIiwianNvblJlc3BvbnNlIiwiZ2V0UHJvcGVydGllcyIsImZpbHRyb0RhdGEiLCJyZWdpc3RlckludGVyZXN0IiwiaW50ZXJlc3QiLCJ1cGRhdGVTaXR1YXRpb24iLCJnZXRJbnRlcmVzdHMiLCJyZW1vdmVJbnRlcmVzdHMiLCJkZWZhdWx0SW50ZXJlc3QiLCJub21lIiwidGVsZWZvbmUiLCJQcm9wZXJ0eUJveCIsInNldFJlZmV0Y2giLCJpbnRlcmVzdFNlbmQiLCJzZXRJbnRlcmVzdFNlbmQiLCJzZXRJbnRlcmVzdCIsInNpdHVhY2FvIiwic3RhdHVzIiwic2V0U3RhdHVzIiwibnJfaW5zY3JpY2FvIiwiaGFuZGxlU3VibWl0VXBkYXRlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiaW1hZ2VtIiwidG9VcHBlckNhc2UiLCJkb3JtaXRvcmlvcyIsImJhbmhlaXJvcyIsInZhZ2FzIiwiUHJvcGVydGllc0xpc3QiLCJwcm9wZXJ0aWVzIiwiY29udmVydFRvTGlzdEl0ZW1PYmplY3QiLCJpdGVtIiwibnJfZG9ybWl0b3Jpb3MiLCJucl9iYW5oZWlyb3MiLCJucl92YWdhc19nYXJhZ2VtIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJJbnRlcmVzdHMiLCJyZWZldGNoIiwiaW50ZXJlc3RzIiwic2V0SW50ZXJlc3RzIiwibGlzdCIsIkludGVyZXN0TGlzdEl0ZW0iLCJoYW5kbGVPbkNsaWNrIiwicmVzIiwiSG9tZSIsInByZWNvTWluaW1vIiwicHJlY29NYXhpbW8iLCJ0aXBvSW1vdmVsIiwicXVhcnRvcyIsImdhcmFnZW0iLCJzZXRGaWx0cm9EYXRhIiwic2V0UHJvcGVydGllcyIsImxpc3RQcm9wZXJ0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QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGlFQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLjg5Y2VmYTI2ZTJmMjBhODY3NDllLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIiwgXFxcIlVidW50dVxcXCIsIFxcXCJDYW50YXJlbGxcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIixcXG4gICAgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5jb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gU2xhYjtcXG4gICAgc3JjOiB1cmwoJ2ZvbnRlL1JvYm90b1NsYWItVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuIH0gKi9cXG5cXG4uSGVhZGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKiBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2Fucy1zZXJpZjsgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oZWFkZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDY4MmI0O1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbmhlYWRlciBwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgY29sb3I6ICNmMmYyZjI7XFxuICBwYWRkaW5nOiAyLjQlO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQtbG9nZ2VkIHtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgcGFkZGluZzogMi40JTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5oZWFkZXItbG9nbyB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1heC13aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbGVmdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxufVxcblxcbi5oZWFkZXItcmlnaHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMiU7XFxufVxcblxcbi5wb3N0LWxpc3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbi5oZWFkZXItcG9zdCB7XFxuICBoZWlnaHQ6IDEyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW50ZXJlc3RMaXN0SXRlbS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW50ZXJlc3RMaXN0SXRlbS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ludGVyZXN0TGlzdEl0ZW0uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFwiLi9IZWFkZXIuY3NzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9pbWFnZXMvaGVhZGVyL2xvZ28tYnJhbmNvLnBuZ1wiXG5pbXBvcnQgeyBkZWZhdWx0SW5mbyB9IGZyb20gXCIuLi8uLi9BcHAuanN4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcblxuICBjb25zdCBoYW5kbGVDbGlja1NhaXIgPSAoKSA9PiB7XG4gICAgc2V0SW5mbyhkZWZhdWx0SW5mbylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCIgc3JjPXtsb2dvfT48L2ltZz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICB7aW5mbz8udXNlcm5hbWUgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXItdGV4dC1sb2dnZWRcIiB0bz1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja1NhaXJ9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57YEJlbSB2aW5kbywgJHtpbmZvLm5hbWV9IWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TYWlyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgVm9sdGFyIHBhcmEgYSBww6FnaW5hIGluaWNpYWxcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZXNldFwiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgQWx0ZXJhciBzZW5oYVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkZFwiIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgQWRpY2lvbmFyIGltw7N2ZWxcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9pbnRlcmVzdHNcIiBjbGFzc05hbWU9XCJoZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgIFZlciBpbnRlcmVzc2Fkb3NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLmpzeFwiXG5cbmNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZWxlbVxuKVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuaW1wb3J0IHsgRmlFeWVPZmYsIEZpRXllIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCJcbmltcG9ydCBcIi4vUmVzZXRQYXNzd29yZC5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmQocHJvcHMpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IGluZm8sIHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IFtzZWVGaXJzdCwgc2V0U2VlRmlyc3RdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWVTZWNvbmQsIHNldFNlZVNlY29uZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Bhc3N3b3JkTWF0Y2gsIHNldFBhc3N3b3JkTWF0Y2hdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybTogXCJcIixcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm0pIHtcbiAgICAgIHNldFBhc3N3b3JkTWF0Y2godHJ1ZSlcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhLnBhc3N3b3JkIHx8IGZvcm1EYXRhLmNvbmZpcm0pIHtcbiAgICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybSkge1xuICAgICAgICBzZXRQYXNzd29yZE1hdGNoKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UGFzc3dvcmRNYXRjaCh0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2Zvcm1EYXRhLCBmb3JtRGF0YS5wYXNzd29yZCwgZm9ybURhdGEuY29uZmlybSwgc2V0UGFzc3dvcmRNYXRjaF0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gZm9ybURhdGFcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc2V0KHsgdXNlcm5hbWU6IGluZm8udXNlcm5hbWUsIHBhc3N3b3JkIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlPy5vaykge1xuICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJTZW5oYSBhbHRlcmFkYSBjb20gc3VjZXNzb1wiKVxuICAgICAgc2V0SW5mbyh7IC4uLmluZm8sIGZpcnN0OiBmYWxzZSB9KVxuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVZvbHRhciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBoaXN0b3J5LmdvQmFjaygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWdpc3RlclwiPlxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlLXJlZ2lzdGVyXCI+QWx0ZXJhciBzZW5oYTo8L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5EaWdpdGUgYSBub3ZhIHNlbmhhOjwvbGFiZWw+XG4gICAgICAgICAgeyFzZWVGaXJzdCA/IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIk5vdmEgc2VuaGEuLi5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tZXllXCIgb25DbGljaz17KCkgPT4gc2V0U2VlRmlyc3QoIXNlZUZpcnN0KX0+XG4gICAgICAgICAgICB7c2VlRmlyc3QgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkNvbmZpcm1lIGEgbm92YSBzZW5oYTo8L2xhYmVsPlxuICAgICAgICAgIHshc2VlU2Vjb25kID8gKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtXCIgcGxhY2Vob2xkZXI9XCJOb3ZhIHNlbmhhLi4uXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29uZmlybVwiIHBsYWNlaG9sZGVyPVwiTm92YSBzZW5oYS4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tZXllXCIgb25DbGljaz17KCkgPT4gc2V0U2VlU2Vjb25kKCFzZWVTZWNvbmQpfT5cbiAgICAgICAgICAgIHtzZWVTZWNvbmQgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgeyFwYXNzd29yZE1hdGNoICYmIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5TZW5oYXMgbsOjbyBjb3JyZXNwb25kZW08L2xhYmVsPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb2JhY2stYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVm9sdGFyfT5cbiAgICAgICAgICAgICAgVm9sdGFyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInRvc3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28tYnJhbmNvLnBuZ1wiOyIsImltcG9ydCBcIi4vTG9naW4uY3NzXCJcbmltcG9ydCB7IEZpRXllT2ZmLCBGaUV5ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHNcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCB7IHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBbc2VlLCBzZXRTZWVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBmb3JtRGF0YVxuICAgIGlmICghdXNlcm5hbWUgJiYgIXBhc3N3b3JkKSB7XG4gICAgICBhbGVydChcIlByZWVuY2hhIG9zIGNhbXBvcyBjb3JyZXRhbWVudGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gZWZldHVhZG8gY29tIHN1Y2Vzc29cIilcbiAgICAgICAgc2V0SW5mbyh7XG4gICAgICAgICAgbG9nZ2VkOiByZXNwb25zZS5vayxcbiAgICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UuZGF0YS51c2VybmFtZSxcbiAgICAgICAgICBuYW1lOiByZXNwb25zZS5kYXRhLm5hbWUsXG4gICAgICAgICAgZmlyc3Q6IHJlc3BvbnNlLmRhdGEuZmlyc3RMb2dpbixcbiAgICAgICAgfSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJlc3BvbnNlLmRhdGEuZmlyc3RMb2dpbiA/IFwiL3Jlc2V0XCIgOiBcIi9cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja1NlZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U2VlKCFzZWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVWb2x0YXIgPSAoKSA9PiBoaXN0b3J5LnB1c2goXCIvXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtcmVnaXN0ZXJcIj5GYcOnYSBzZXUgbG9naW46PC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGRlIHVzdcOhcmlvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgeyFzZWUgPyAoXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNlbmhhXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1leWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1NlZX0+XG4gICAgICAgICAgICAgIHtzZWUgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ29iYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVZvbHRhcn0+XG4gICAgICAgICAgICAgICAgVm9sdGFyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0b3N1Ym1pdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFJvdXRlLCBCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvaG9tZS9Ib21lLmpzeFwiXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vcGFnZXMvbG9naW4vTG9naW4uanN4XCJcbmltcG9ydCBSZXNldFBhc3N3b3JkIGZyb20gXCIuL3BhZ2VzL3Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZC5qc3hcIlxuaW1wb3J0IEFkZFByb3BlcnR5IGZyb20gXCIuL3BhZ2VzL3Byb3BlcnR5L0FkZFByb3BlcnR5LmpzeFwiXG5pbXBvcnQgSW50ZXJlc3RzIGZyb20gXCIuL3BhZ2VzL2ludGVyZXN0cy9JbnRlcmVzdHMuanN4XCJcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbmZvID0ge1xuICBsb2dnZWQ6IGZhbHNlLFxuICB1c2VybmFtZTogdW5kZWZpbmVkLFxuICBuYW1lOiB1bmRlZmluZWQsXG4gIGZpcnN0OiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoZGVmYXVsdEluZm8pXG5cbiAgY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgICByZXR1cm4gPEhvbWUgaW5mbz17aW5mb30gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIGNvbnN0IHJlbmRlckxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiA8TG9naW4gc2V0SW5mbz17c2V0SW5mb30gLz5cbiAgfVxuXG4gIGNvbnN0IHJlbmRlclJlc2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiA8UmVzZXRQYXNzd29yZCBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVyQWRkUHJvcGVydHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxBZGRQcm9wZXJ0eSBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICB9XG5cbiAgY29uc3QgcmVuZGVySW50ZXJlc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiA8SW50ZXJlc3RzIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVySG9tZX0gcGF0aD1cIi9cIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyTG9naW59IHBhdGg9XCIvbG9naW5cIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyUmVzZXR9IHBhdGg9XCIvcmVzZXRcIiBleGFjdCAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17cmVuZGVyQWRkUHJvcGVydHl9IHBhdGg9XCIvYWRkXCIgZXhhY3QgLz5cbiAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e3JlbmRlckludGVyZXN0c30gcGF0aD1cIi9pbnRlcmVzdHNcIiBleGFjdCAvPlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmVzZXRQYXNzd29yZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Jlc2V0UGFzc3dvcmQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4XCJcbmltcG9ydCB7IGFkZFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcbmltcG9ydCBcIi4vQWRkUHJvcGVydHkuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkUHJvcGVydHkocHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvLCBzZXRJbmZvIH0gPSBwcm9wc1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5ySW5zY3JpY2FvOiBcIlwiLFxuICAgIGRlc2NyaWNhbzogXCJcIixcbiAgICBlbmRlcmVjbzogXCJcIixcbiAgICB0aXBvOiBcIlwiLFxuICAgIG5yUXVhcnRvczogXCJcIixcbiAgICBuckJhbmhlaXJvczogXCJcIixcbiAgICBuckdhcmFnZW5zOiBcIlwiLFxuICAgIHZhbG9yOiBcIlwiLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgbnJJbnNjcmljYW8sIGRlc2NyaWNhbywgZW5kZXJlY28sIHRpcG8sIG5yUXVhcnRvcywgbnJCYW5oZWlyb3MsIG5yR2FyYWdlbnMsIHZhbG9yLCBpbWcgfSA9IGZvcm1EYXRhXG4gICAgaWYgKCFuckluc2NyaWNhbyB8fCAhZGVzY3JpY2FvIHx8ICFlbmRlcmVjbyB8fCAhdGlwbyB8fCAhbnJRdWFydG9zIHx8ICFuckJhbmhlaXJvcyB8fCAhbnJHYXJhZ2VucyB8fCAhdmFsb3IpIHtcbiAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgb3MgY2FtcG9zIGNvcnJldGFtZW50ZS5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhZGRQcm9wZXJ0eSh7XG4gICAgICAgIG5ySW5zY3JpY2FvLFxuICAgICAgICBpbWc6IGltZyxcbiAgICAgICAgdGl0dWxvOiBkZXNjcmljYW8sXG4gICAgICAgIGVuZGVyZWNvLFxuICAgICAgICB0aXBvLFxuICAgICAgICBuckRvcm1pdG9yaW9zOiBuclF1YXJ0b3MsXG4gICAgICAgIG5yQmFuaGVpcm9zLFxuICAgICAgICBuclZhZ2FzOiBuckdhcmFnZW5zLFxuICAgICAgICB2YWxvcixcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlPy5vaykge1xuICAgICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJJbcOzdmVsIHNhbHZvIGNvbSBzdWNlc3NvIVwiKVxuICAgICAgICBoaXN0b3J5LnB1c2goXCIvXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVm9sdGFyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGhpc3RvcnkuZ29CYWNrKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyS2V5KGV2dCkge1xuICAgIHZhciBjaGFyQ29kZSA9IGV2dC53aGljaCA/IGV2dC53aGljaCA6IGV2dC5rZXlDb2RlXG4gICAgaWYgKGNoYXJDb2RlICE9IDQ2ICYmIGNoYXJDb2RlID4gMzEgJiYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1NykpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBvbkltYWdlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgIGxldCBpbWcgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnN0IGJpbmFyeURhdGEgPSBlLnRhcmdldC5yZXN1bHRcbiAgICAgICAgICBjb25zdCBiYXNlNjRTdHJpbmcgPSB3aW5kb3cuYnRvYShiaW5hcnlEYXRhKVxuICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGltZzogYmFzZTY0U3RyaW5nIH0pXG4gICAgICAgIH1cbiAgICAgIH0pKGltZylcblxuICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhpbWcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luXCI+XG4gICAgICA8SGVhZGVyIGluZm89e2luZm99IHNldEluZm89e3NldEluZm99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtcmVnaXN0ZXJcIj5DYWRhc3RyZSB1bSBpbcOzdmVsOjwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuckluc2NyaWNhb1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgIE51bWVybyBkZSBJbnNjcmnDp8OjbzpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwibnJJbnNjcmljYW9cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2lzTnVtYmVyS2V5fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmljYW9cIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICBUaXR1bG86XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGVzY3JpY2FvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmRlcmVjb1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgIEVuZGVyZcOnbzpcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbmRlcmVjb1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxoMj5UaXBvIGRvIGltw7N2ZWw6PC9oMj5cbiAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FzYVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybURhdGEudGlwbyA9PT0gXCJjYXNhXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvXCI+Q2FzYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYXBhcnRhbWVudG9cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1EYXRhLnRpcG8gPT09IFwiYXBhcnRhbWVudG9cIn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG9cIj5BcGFydGFtZW50bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5yUXVhcnRvc1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgTnVtZXJvIGRlIHF1YXJ0b3M6XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuclF1YXJ0b3NcIiBtaW49XCIwXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuckJhbmhlaXJvc1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgTnVtZXJvIGRlIGJhbmhlaXJvczpcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm5yQmFuaGVpcm9zXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnJHYXJhZ2Vuc1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgTnVtZXJvIGRlIHZhZ2FzIG5hIGdhcmFnZW06XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJuckdhcmFnZW5zXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25LZXlQcmVzcz17aXNOdW1iZXJLZXl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmFsb3JcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIFZhbG9yOlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwidmFsb3JcIiBtaW49XCIwXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbktleVByZXNzPXtpc051bWJlcktleX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG9uQ2hhbmdlPXtvbkltYWdlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnb2JhY2stYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVm9sdGFyfT5cbiAgICAgICAgICAgICAgICBWb2x0YXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInRvc3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXItcG9zdCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0OCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41JTtcXG59XFxuXFxuLmhlYWRlci1wb3N0IHtcXG4gIGhlaWdodDogMTIlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50LXBvc3Qge1xcbiAgbWFyZ2luOiAwcmVtIDZyZW07XFxuICBoZWlnaHQ6IDg4JTtcXG4gIHdpZHRoOiA5OSU7XFxuICBiYWNrZ3JvdW5kOiAjZWFlN2U3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDlweCAjODg4ODg4O1xcbn1cXG5cXG4uaW5mby1wb3N0IHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMXZ3O1xcbn1cXG5cXG4uaW5mby1wb3N0IHNwYW46bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaW1hZ2UtcG9zdCB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAxcmVtIDRyZW0gMXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxufVxcblxcbi50aXRsZS1wb3N0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgbWFyZ2luOiAxJTtcXG4gIC8qIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMTE2LCAxMTQsIDExNCk7ICovXFxufVxcblxcbi5zdGF0dXMge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4ydnc7XFxufVxcblxcbi5hdmFpbGFibGUge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5MaXN0IHtcXG4gICAgXFxuICAgIG1hcmdpbjogNSUgMTAlO1xcbiAgfVxcblxcbi5MaXN0IGgxIHtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDY4MmI0O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihmb3JtKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogZm9ybS51c2VybmFtZSwgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmQgfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvbG9naW5gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXQoZm9ybSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkIH0pXG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChgL3Jlc2V0YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFByb3BlcnR5KGZvcm0pIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmZvcm0gfSlcblxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKGAvcHJvcGVydHlgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhmaWx0cm9EYXRhKSB7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5maWx0cm9EYXRhIH0pXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2goXCIvcHJvcGVydGllc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmVzdChpbnRlcmVzdCkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uaW50ZXJlc3QgfSlcbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChcIi9pbnRlcmVzdFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIGpzb25SZXNwb25zZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2l0dWF0aW9uKGRhdGEpIHtcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmRhdGEgfSlcbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChcIi91cGRhdGVcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IGpzb25EYXRhLFxuICB9KVxuXG4gIGlmIChyZXNwLm9rID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk7Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLlwiKVxuICB9XG4gIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIHJldHVybiBqc29uUmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludGVyZXN0cygpIHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IHdpbmRvdy5mZXRjaChcIi9pbnRlcmVzdHNcIilcblxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci5cIilcbiAgfVxuICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwLmpzb24oKVxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJbnRlcmVzdHMoZGF0YSkge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uZGF0YSB9KVxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKFwiL2RlbGV0ZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keToganNvbkRhdGEsXG4gIH0pXG5cbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgZGFkb3Mgbm8gc2Vydmlkb3IuXCIpXG4gIH1cbiAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcblxuICByZXR1cm4ganNvblJlc3BvbnNlXG59XG4iLCJpbXBvcnQgXCIuL1Byb3BlcnR5Qm94LmNzc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVnaXN0ZXJJbnRlcmVzdCwgdXBkYXRlU2l0dWF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsL3JlcXVlc3RzXCJcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbnRlcmVzdCA9IHtcbiAgbm9tZTogXCJcIixcbiAgdGVsZWZvbmU6IFwiXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BlcnR5Qm94KHByb3BzKSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9nZ2VkLCBzZXRSZWZldGNoIH0gPSBwcm9wc1xuICBjb25zdCBbaW50ZXJlc3RTZW5kLCBzZXRJbnRlcmVzdFNlbmRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnRlcmVzdCwgc2V0SW50ZXJlc3RdID0gdXNlU3RhdGUoZGVmYXVsdEludGVyZXN0KVxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoZGF0YS5zaXR1YWNhbylcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFpbnRlcmVzdC5ub21lIHx8ICFpbnRlcmVzdC50ZWxlZm9uZSkge1xuICAgICAgYWxlcnQoXCJQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3MuXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVnaXN0ZXJJbnRlcmVzdCh7IC4uLmludGVyZXN0LCBucl9pbnNjcmljYW86IGRhdGEubnJfaW5zY3JpY2FvIH0pXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgYWxlcnQoXCJJbnRlcmVzc2UgcmVnaXN0cmFkbyBjb20gc3VjZXNzbyFcIilcbiAgICAgICAgc2V0SW50ZXJlc3RTZW5kKHRydWUpXG4gICAgICAgIHNldEludGVyZXN0KHsgLi4uZGVmYXVsdEludGVyZXN0LCBucl9pbnNjcmljYW86IGRhdGEubnJfaW5zY3JpY2FvIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChyZXNwb25zZS5tZXNzYWdlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoIXN0YXR1cykge1xuICAgICAgYWxlcnQoXCLDiSBuZWNlc3PDoXJpbyBlc2NvbGhlciB1bWEgc2l0dWHDp8OjbyBwYXJhIGF0dWFsaXphclwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZVNpdHVhdGlvbih7IG5yX2luc2NyaWNhbzogZGF0YS5ucl9pbnNjcmljYW8sIHNpdHVhY2FvOiBzdGF0dXMgfSlcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBhbGVydChcIlNpdHVhw6fDo28gYXR1YWxpemFkYSBjb20gc3VjZXNzbyFcIilcbiAgICAgICAgc2V0UmVmZXRjaCh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldEludGVyZXN0KHsgLi4uaW50ZXJlc3QsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgIHNldFN0YXR1cyh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcG9zdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcG9zdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1wb3N0XCI+e2RhdGEudGl0dWxvfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXBvc3RcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZS1wb3N0XCIgc3JjPXtgZGF0YTppbWFnZS9qcGc7YmFzZTY0LCAke2RhdGEuaW1hZ2VtfWB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1wb3N0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtkYXRhLnNpdHVhY2FvID09PSBcImRpc3Bvbml2ZWxcIiA/IFwic3RhdHVzIGF2YWlsYWJsZVwiIDogXCJzdGF0dXNcIn0+XG4gICAgICAgICAgICB7ZGF0YS5zaXR1YWNhby50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YEVuZGVyZcOnbzogJHtkYXRhLmVuZGVyZWNvfWB9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntgRG9ybWl0b3Jpb3M6ICR7ZGF0YS5kb3JtaXRvcmlvc31gfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YEJhbmhlaXJvczogJHtkYXRhLmJhbmhlaXJvc31gfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YFZhZ2FzIG5hIGdhcmFnZW06ICR7ZGF0YS52YWdhc31gfTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57YFZhbG9yIGRvIGFsdWd1ZWw6IFIkJHtkYXRhLnZhbG9yfWB9PC9zcGFuPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bG9nZ2VkID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5BbHRlcmUgbyBzdGF0dXMgZG8gaW3Ds3ZlbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRVcGRhdGV9PlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3RhdHVzXCIgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGlzcG9uaXZlbFwiPkRpc3BvbsOtdmVsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZXNlcnZhZG9cIj5SZXNlcnZhZG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsdWdhZG9cIj5BbHVnYWRvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmRpc3Bvbml2ZWxcIj5JbmRpc3BvbsOtdmVsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkF0dWFsaXphcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogIWludGVyZXN0U2VuZCA/IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBjb21wbGV0b1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0ZWxlZm9uZVwiIHBsYWNlaG9sZGVyPVwiVGVsZWZvbmUgcGFyYSBjb250YXRvXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiBWb2PDqiBqw6EgcmVnaXN0cm91IHNldSBpbnRlcmVzc2UgcGFyYSBlc3RlIGltw7N2ZWwuPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Ib21lLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmVnaXN0ZXIge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogI2U4ZTdlYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMSU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50aXRsZS1yZWdpc3RlciB7XFxuICBmb250LXNpemU6IDEuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MmI0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTY5OTk7XFxufVxcblxcbi5nb2JhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4IDM0cHg7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5nb2JhY2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWV5ZSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTG9naW4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLnJlZ2lzdGVyIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQ6ICNlOGU3ZWE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDElO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggOXB4ICM4ODg4ODg7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUtcmVnaXN0ZXIge1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNCU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogODAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDAuOXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMSUgMS41JSAxJSA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMC45dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxJSAxLjUlIDElIDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi50b3N1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2OTk5O1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0ludGVyZXN0cy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW50ZXJlc3RzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSW50ZXJlc3RzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vUHJvcGVydGllc0xpc3QuY3NzXCJcbmltcG9ydCBQcm9wZXJ0eUJveCBmcm9tIFwiLi9Qcm9wZXJ0eUl0ZW0vUHJvcGVydHlCb3guanN4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0aWVzTGlzdChwcm9wcykge1xuICBjb25zdCB7IHByb3BlcnRpZXMsIGxvZ2dlZCwgc2V0UmVmZXRjaCB9ID0gcHJvcHNcblxuICBjb25zdCBjb252ZXJ0VG9MaXN0SXRlbU9iamVjdCA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5yX2luc2NyaWNhbzogaXRlbS5ucl9pbnNjcmljYW8sXG4gICAgICBpbWFnZW06IGl0ZW0uaW1nLFxuICAgICAgdGl0dWxvOiBpdGVtLnRpdHVsbyxcbiAgICAgIGVuZGVyZWNvOiBpdGVtLmVuZGVyZWNvLFxuICAgICAgZG9ybWl0b3Jpb3M6IGl0ZW0ubnJfZG9ybWl0b3Jpb3MsXG4gICAgICBiYW5oZWlyb3M6IGl0ZW0ubnJfYmFuaGVpcm9zLFxuICAgICAgdmFnYXM6IGl0ZW0ubnJfdmFnYXNfZ2FyYWdlbSxcbiAgICAgIHZhbG9yOiBpdGVtLnZhbG9yLFxuICAgICAgc2l0dWFjYW86IGl0ZW0uc2l0dWFjYW8sXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbGlzdFwiPlxuICAgICAge3Byb3BlcnRpZXM/Lmxlbmd0aCA+IDBcbiAgICAgICAgPyBwcm9wZXJ0aWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvcGVydHlCb3ggZGF0YT17Y29udmVydFRvTGlzdEl0ZW1PYmplY3QoaXRlbSl9IGtleT17aW5kZXh9IGxvZ2dlZD17bG9nZ2VkfSBzZXRSZWZldGNoPXtzZXRSZWZldGNofSAvPlxuICAgICAgICApKVxuICAgICAgICA6IFwiTmVuaHVtIGltw7N2ZWwgY2FkYXN0cmFkb1wifVxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgXCIuL0ludGVyZXN0cy5jc3NcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeFwiXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vSW50ZXJlc3RMaXN0SXRlbS5qc3hcIlxuaW1wb3J0IHsgZ2V0SW50ZXJlc3RzIH0gZnJvbSBcIi4uLy4uL21vZGVsL3JlcXVlc3RzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJlc3RzKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0SW5mbyB9ID0gcHJvcHNcbiAgY29uc3QgW3JlZmV0Y2gsIHNldFJlZmV0Y2hdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnRlcmVzdHMsIHNldEludGVyZXN0c10gPSB1c2VTdGF0ZSgpXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRJbnRlcmVzdHMoKVxuICAgIGNvbnN0IGxpc3QgPSBbLi4ucmVzcG9uc2VdXG4gICAgc2V0SW50ZXJlc3RzKGxpc3QpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgaWYgKHJlZmV0Y2gpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0SW50ZXJlc3RzKClcbiAgICAgIGNvbnN0IGxpc3QgPSBbLi4ucmVzcG9uc2VdXG4gICAgICBzZXRJbnRlcmVzdHMobGlzdClcbiAgICAgIHNldFJlZmV0Y2goZmFsc2UpXG4gICAgfVxuICB9LCBbcmVmZXRjaF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkludGVyZXN0c1wiPlxuICAgICAgPEhlYWRlciBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMaXN0XCI+XG4gICAgICAgIDxoMT5MaXN0YSBkZSBJbnRlcmVzc2VzPC9oMT5cbiAgICAgICAge2ludGVyZXN0cz8ubGVuZ3RoID4gMFxuICAgICAgICAgID8gaW50ZXJlc3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxMaXN0SXRlbSBpbmZvPXtpdGVtfSBrZXk9e2luZGV4fSBzZXRSZWZldGNoPXtzZXRSZWZldGNofSAvPilcbiAgICAgICAgICA6IFwiTsOjbyBow6EgbmluZ3XDqW0gaW50ZXJlc3NhZG8gOihcIn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0eUJveC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJvcGVydHlCb3guY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0eUJveC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvc3QtbGlzdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1JTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuTGlzdEl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWFlN2U3O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA5cHggIzg4ODg4ODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIG1hcmdpbjogMSUgMCU7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi5JbnRlcmVzdERhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLkxpc3RJdGVtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogNXB4IDEwcHg7XFxuICAgIHdpZHRoOiAxMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjgyYjQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41dnc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb3BlcnRpZXNMaXN0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qcm9wZXJ0aWVzTGlzdC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Byb3BlcnRpZXNMaXN0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vSW50ZXJlc3RMaXN0SXRlbS5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW1vdmVJbnRlcmVzdHMgfSBmcm9tIFwiLi4vLi4vbW9kZWwvcmVxdWVzdHMuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcmVzdExpc3RJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgaW5mbywgc2V0UmVmZXRjaCB9ID0gcHJvcHNcblxuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlbW92ZUludGVyZXN0cyhpbmZvKVxuICAgIGlmIChyZXMub2spIHtcbiAgICAgIHNldFJlZmV0Y2godHJ1ZSlcbiAgICAgIGFsZXJ0KFwiSW3Ds3ZlbCByZXNlcnZhZG8gY29tIHN1Y2Vzc28hXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KHJlcy5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMaXN0SXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRlcmVzdERhdGFcIj5cbiAgICAgICAgPHA+e2BDw7NkLiBJbcOzdmVsOiAke2luZm8ubnJfaW5zY3JpY2FvfWB9PC9wPlxuICAgICAgICA8cD57YEludGVyZXNzYWRvOiAke2luZm8ubm9tZX1gfTwvcD5cbiAgICAgICAgPHA+e2BUZWw6ICR7aW5mby50ZWxlZm9uZX1gfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfT5SZXNlcnZhcjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRQcm9wZXJ0eS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRkUHJvcGVydHkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZGRQcm9wZXJ0eS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgXCIuL0hvbWUuY3NzXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3hcIlxuaW1wb3J0IHsgZ2V0UHJvcGVydGllcyB9IGZyb20gXCIuLi8uLi9tb2RlbC9yZXF1ZXN0c1wiXG5pbXBvcnQgUHJvcGVydGllc0xpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvcGVydGllc0xpc3QvUHJvcGVydGllc0xpc3QuanN4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCB7IGluZm8sIHNldEluZm8gfSA9IHByb3BzXG4gIGNvbnN0IFtmaWx0cm9EYXRhLCBzZXRGaWx0cm9EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBwcmVjb01pbmltbzogXCJcIixcbiAgICBwcmVjb01heGltbzogXCJcIixcbiAgICB0aXBvSW1vdmVsOiBcIlwiLFxuICAgIHF1YXJ0b3M6IFwiXCIsXG4gICAgYmFuaGVpcm9zOiBcIlwiLFxuICAgIGdhcmFnZW06IFwiXCIsXG4gICAgbG9nZ2VkOiBpbmZvLmxvZ2dlZCxcbiAgfSlcbiAgY29uc3QgW3JlZmV0Y2gsIHNldFJlZmV0Y2hdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGUoKVxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UHJvcGVydGllcyhmaWx0cm9EYXRhKVxuICAgIGNvbnN0IGxpc3RQcm9wZXJ0aWVzID0gWy4uLnJlc3BvbnNlXVxuICAgIHNldFByb3BlcnRpZXMobGlzdFByb3BlcnRpZXMpXG4gIH0sIFtpbmZvLmxvZ2dlZF0pXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBpZiAocmVmZXRjaCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRQcm9wZXJ0aWVzKGZpbHRyb0RhdGEpXG4gICAgICBjb25zdCBsaXN0UHJvcGVydGllcyA9IFsuLi5yZXNwb25zZV1cbiAgICAgIHNldFByb3BlcnRpZXMobGlzdFByb3BlcnRpZXMpXG4gICAgICBzZXRSZWZldGNoKGZhbHNlKVxuICAgIH1cbiAgfSwgW3JlZmV0Y2hdKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG4gICAgc2V0RmlsdHJvRGF0YSh7IC4uLmZpbHRyb0RhdGEsIFtuYW1lXTogdmFsdWUgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFByb3BlcnRpZXMoZmlsdHJvRGF0YSlcbiAgICBjb25zdCBsaXN0UHJvcGVydGllcyA9IFsuLi5yZXNwb25zZV1cbiAgICBzZXRQcm9wZXJ0aWVzKGxpc3RQcm9wZXJ0aWVzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPEhlYWRlciBpbmZvPXtpbmZvfSBzZXRJbmZvPXtzZXRJbmZvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWRlYmFyXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1BhcmVudFwiPlxuICAgICAgICAgICAgICA8aDM+RmlsdHJvczwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlByZcOnbyBkbyBBbHVndWVsPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1wiPlxuICAgICAgICAgICAgICAgIDxwPkRlIFIkPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicHJlY29NaW5pbW9cIiBwbGFjZWhvbGRlcj1cIk1pblwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmlsdHJvXCI+XG4gICAgICAgICAgICAgICAgPHA+QXTDqSBSJDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInByZWNvTWF4aW1vXCIgcGxhY2Vob2xkZXI9XCJNYXhcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRyby10aXRsZVwiPlRpcG8gZGUgSW3Ds3ZlbDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlwiIGlkPVwidGlwby1hbnlcIiBuYW1lPVwidGlwb0ltb3ZlbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpcG8tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImNhc2FcIiBpZD1cInRpcG8tY2FzYVwiIG5hbWU9XCJ0aXBvSW1vdmVsXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGlwby1jYXNhXCI+Q2FzYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhcGFydGFtZW50b1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInRpcG8tYXBhcnRhbWVudG9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9JbW92ZWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXBvLWFwYXJ0YW1lbnRvXCI+QXBhcnRhbWVudG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0cm8tdGl0bGVcIj5RdWFydG9zPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJxdWFydG9zLWFueVwiIG5hbWU9XCJxdWFydG9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVhcnRvcy1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwicXVhcnRvcy0xXCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFydG9zLTFcIj4xIHF1YXJ0bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMlwiIGlkPVwicXVhcnRvcy0yXCIgbmFtZT1cInF1YXJ0b3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWFydG9zLTJcIj4yIHF1YXJ0b3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjNcIiBpZD1cInF1YXJ0b3MtMytcIiBuYW1lPVwicXVhcnRvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YXJ0b3MtMytcIj4zKyBxdWFydG9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+QmFuaGVpcm9zPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbHRyb1JhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXCIgaWQ9XCJiYW5oZWlyb3MtYW55XCIgbmFtZT1cImJhbmhlaXJvc1wiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmhlaXJvcy1hbnlcIj5RdWFscXVlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIGlkPVwiYmFuaGVpcm9zLTFcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTFcIj4xIGJhbmhlaXJvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgaWQ9XCJiYW5oZWlyb3MtMlwiIG5hbWU9XCJiYW5oZWlyb3NcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiYW5oZWlyb3MtMlwiPjIgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIzXCIgaWQ9XCJiYW5oZWlyb3MtMytcIiBuYW1lPVwiYmFuaGVpcm9zXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFuaGVpcm9zLTMrXCI+MysgYmFuaGVpcm9zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlsdHJvLXRpdGxlXCI+R2FyYWdlbTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGaWx0cm9SYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlwiIGlkPVwiZ2FyYWdlbS1hbnlcIiBuYW1lPVwiZ2FyYWdlbVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tYW55XCI+UXVhbHF1ZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjBcIiBpZD1cImdhcmFnZW0tMFwiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0wXCI+U2VtIHZhZ2FzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgaWQ9XCJnYXJhZ2VtLTFcIiBuYW1lPVwiZ2FyYWdlbVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhcmFnZW0tMVwiPjEgdmFnYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMlwiIGlkPVwiZ2FyYWdlbS0yK1wiIG5hbWU9XCJnYXJhZ2VtXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FyYWdlbS0yK1wiPjIrIHZhZ2FzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmlsdHJvLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgQXBsaWNhciBGaWx0cm9zXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcGFyZW50XCI+XG4gICAgICAgICAgPFByb3BlcnRpZXNMaXN0IHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcGFyZW50XCI+XG4gICAgICAgIDxQcm9wZXJ0aWVzTGlzdCBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfSBsb2dnZWQ9e2luZm8ubG9nZ2VkfSBzZXRSZWZldGNoPXtzZXRSZWZldGNofSAvPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJUZXN0ZVwiLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3N1Ym1pdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMzRweDtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnRvc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2OTk5O1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAzNHB4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ29iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvcGVydGllcy1wYXJlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjBweDtcXG59XFxuXFxuLlRlc3Rle1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi5TaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q0ZGQ7XFxuICB3aWR0aDogMjIwcHg7XFxufVxcblxcbi5GaWx0cm9QYXJlbnQge1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5GaWx0cm8ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uRmlsdHJvIHAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5GaWx0cm8gaW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXFxuLkZpbHRyb1JhZGlvIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZmlsdHJvLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uZmlsdHJvLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODJiNDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0hlYWRlci5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGVhZGVyLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=