webpackHotUpdate("static\\development\\pages\\log_in.js",{

/***/ "./pages/log_in.js":
/*!*************************!*\
  !*** ./pages/log_in.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this.validateLogin = _this.validateLogin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _possibleConstructorReturn(_this);
  }

  _createClass(Login, [{
    key: "validateLogin",
    value: function validateLogin() {
      window.location("/");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-472053607"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-472053607" + " " + "background"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        id: "form_id",
        method: "post",
        name: "myform",
        className: "jsx-472053607"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-472053607" + " " + "input-groups"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-472053607" + " " + "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-472053607"
      }, "Email/Username"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "username",
        id: "username",
        className: "jsx-472053607"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-472053607" + " " + "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-472053607"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "password",
        name: "password",
        id: "password",
        className: "jsx-472053607"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-472053607"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        className: "jsx-472053607" + " " + "btn"
      }, "Log in")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-472053607"
      }, "Not yet a member? ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/sign_up"
      }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-472053607"
      }, "Forgot your password? ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/reset_password"
      }, "Reset Password")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "472053607",
        css: ".background.jsx-472053607{background-color:rgb(48,48,48,0.8);position:fixed;top:0;bottom:0;left:0;right:0;z-index:-1;}form.jsx-472053607{border:1px solid #B0C4DE;background:white;border-radius:10px;text-align:center;margin:10% 35%;}.input-groups.jsx-472053607{padding:70px 70px 20px 70px;}.input-group.jsx-472053607{padding-bottom:3em;}.input-group.jsx-472053607 label.jsx-472053607{font-size:20px;font-weight:700;display:block;text-align:left;padding-bottom:0.6em;}.input-group.jsx-472053607 input.jsx-472053607{width:100%;padding:5px 10px;font-size:16px;border-radius:5px;border:1px solid gray;}.btn.jsx-472053607{color:white;background:#4C5356;border:rgb(0,0,0,0);border-radius:4px;font-size:16px;padding:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcV2FuZ1xcRGVza3RvcFxcaGVsbG8tbmV4dFxccGFnZXNcXGxvZ19pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBR21ELEFBVWIsQUFRRyxBQUlULEFBSUosQUFRSixBQVFDLFdBUEssQ0FRRSxHQWhCSCxJQUpsQixNQVptQixHQVFuQixBQWlCaUIsR0FSRCxBQWdCUyxJQTNDUixPQVdJLENBeUJELEVBUkYsS0EzQlYsQ0EyQ1ksS0ExQ1QsS0FVUyxBQWlCRyxBQVFDLElBbENmLElBMENRLEdBekNQLE9BU08sQ0FSSixFQXlCYixDQVFBLENBUWdCLE9BeENoQixHQVFBLElBaUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcV2FuZ1xcRGVza3RvcFxcaGVsbG8tbmV4dFxccGFnZXNcXGxvZ19pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy52YWxpZGF0ZUxvZ2luID0gdGhpcy52YWxpZGF0ZUxvZ2luLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUxvZ2luKCl7XHJcbiAgICB3aW5kb3cubG9jYXRpb24oXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGlkPVwiZm9ybV9pZFwiIG1ldGhvZD1cInBvc3RcIiBuYW1lPVwibXlmb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3Vwc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsL1VzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lXCIgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+TG9nIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTm90IHlldCBhIG1lbWJlcj8gPExpbmsgaHJlZj1cIi9zaWduX3VwXCI+U2lnbiB1cDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD8gPExpbmsgaHJlZj1cIi9yZXNldF9wYXNzd29yZFwiPlJlc2V0IFBhc3N3b3JkPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCwgMC44KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjBDNERFO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwJSAzNSU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LWdyb3VwcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDcwcHggNzBweCAyMHB4IDcwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXQtZ3JvdXAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC42ZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LWdyb3VwIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEM1MzU2O1xyXG4gICAgICAgICAgICBib3JkZXI6IHJnYigwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Wang\\Desktop\\hello-next\\pages\\log_in.js */"
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/log_in")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=log_in.js.1f49eb2aa24af36c7e88.hot-update.js.map