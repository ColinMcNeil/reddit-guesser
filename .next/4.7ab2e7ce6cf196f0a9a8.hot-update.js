webpackHotUpdate(4,{

/***/ "./components/welcome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_load_script__ = __webpack_require__("./node_modules/react-load-script/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_load_script__);
var _jsxFileName = "/Users/dapper/Dev/reddit-guesser/components/welcome.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Welcome =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Welcome, _React$Component);

  function Welcome(props) {
    var _this;

    _classCallCheck(this, Welcome);

    _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this, props));
    _this.state = {
      buttonText: 'Play'
    };

    _this.play = function () {
      _this.setState({
        buttonText: 'Loading'
      });

      _this.clickedPlay = true;
    };

    return _this;
  }

  _createClass(Welcome, [{
    key: "handleScriptCreate",
    value: function handleScriptCreate() {
      this.setState({
        scriptLoaded: false
      });
    }
  }, {
    key: "handleScriptError",
    value: function handleScriptError() {
      this.setState({
        scriptError: true
      });
    }
  }, {
    key: "handleScriptLoad",
    value: function handleScriptLoad() {
      this.setState({
        scriptLoaded: true
      });
    } // componentDidMount() {
    // 	const script = document.createElement("script");
    // 	script.src = "https://authedmine.com/lib/captcha.min.js";
    // 	script.async = true;
    // 	document.body.appendChild(script);
    // }

  }, {
    key: "render",
    value: function render() {
      var button = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "enter",
        onClick: this.play,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.state.buttonText);

      if (this.clickedPlay) {
        button = captcha;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-1913654086"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_load_script___default.a, {
        url: "https://authedmine.com/lib/captcha.min.js",
        onCreate: this.handleScriptCreate.bind(this),
        onError: this.handleScriptError.bind(this),
        onLoad: this.handleScriptLoad.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1913654086"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "title_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-1913654086"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-1913654086"
      }, "Reddit Guesser"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-1913654086"
      }, "Guess which subreddit each image, text post, or article is from!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-1913654086"
      }), "Currently indexing ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-1913654086"
      }, "60,871"), " random subreddits!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-1913654086"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-1913654086"
      }, "May contain NSFW Content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-1913654086"
      }), "Over 18 Subreddits, and Subreddits with under 100 subscribers NOT included."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "coinhive-captcha",
        "data-hashes": "1024",
        "data-key": "1Qhl0m0kKwWrfowA3n0i2dt3G7c3yEZq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-1913654086"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-1913654086"
      }, "Loading Captcha...", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-1913654086"
      }), "If it doesn't load, please disable Adblock!")), button)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1913654086",
        css: "#background.jsx-1913654086{position:absolute;z-index:1;width:100%;height:100%;background-color:rgb(50,50,50);font-family:'Roboto';}#title_container.jsx-1913654086{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:inline-block;color:white;border:dashed white 2px;text-align:center;padding:10px;border-radius:1px;margin:0;}#title_container.jsx-1913654086 p.jsx-1913654086{border:solid white 1px;padding:5px;line-height:25px;}#enter.jsx-1913654086{background-color:rgb(48,151,72);width:auto;position:relative;font-size:3rem;padding-top:5px;padding-bottom:5px;}#enter.jsx-1913654086:hover{cursor:pointer;background-color:rgb(71,216,105);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2VsY29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWdCLEFBR3lCLEFBUUEsQUFhSSxBQUtZLEFBUW5CLGVBQ29CLEdBbEN6QixBQVFGLEtBYUcsR0FaRixFQVJFLElBeUJBLEdBaEJvQixBQVlkLElBcEJMLElBeUJNLEtBUW5CLEdBaENnQyxDQW9CaEMsU0FLZ0IsZUFDQSxNQXpCTSxVQTBCRixXQXpCcEIsUUEwQkEsNkJBcEJzQixxQkFDVCxZQUNZLHdCQUNOLGtCQUNMLGFBQ0ssa0JBQ1YsU0FDVCIsImZpbGUiOiJjb21wb25lbnRzL3dlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhcHBlci9EZXYvcmVkZGl0LWd1ZXNzZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNjcmlwdCBmcm9tICdyZWFjdC1sb2FkLXNjcmlwdCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge2J1dHRvblRleHQ6ICdQbGF5J307XG5cdFx0dGhpcy5wbGF5ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJ1dHRvblRleHQ6ICdMb2FkaW5nJyB9KVxuXHRcdFx0dGhpcy5jbGlja2VkUGxheSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdGhhbmRsZVNjcmlwdENyZWF0ZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2NyaXB0TG9hZGVkOiBmYWxzZSB9KVxuXHR9XG5cblx0aGFuZGxlU2NyaXB0RXJyb3IoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNjcmlwdEVycm9yOiB0cnVlIH0pXG5cdH1cblxuXHRoYW5kbGVTY3JpcHRMb2FkKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzY3JpcHRMb2FkZWQ6IHRydWUgfSlcblx0fVxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0Ly8gXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG5cdC8vIFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hdXRoZWRtaW5lLmNvbS9saWIvY2FwdGNoYS5taW4uanNcIjtcblx0Ly8gXHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG5cdC8vIFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHQvLyB9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uID0gPGRpdiBpZD1cImVudGVyXCIgb25DbGljaz17dGhpcy5wbGF5fT57dGhpcy5zdGF0ZS5idXR0b25UZXh0fTwvZGl2PlxuXHRcdGlmICh0aGlzLmNsaWNrZWRQbGF5KSB7XG5cdFx0XHRidXR0b24gPSBjYXB0Y2hhO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFNjcmlwdFxuXHRcdFx0XHRcdHVybD1cImh0dHBzOi8vYXV0aGVkbWluZS5jb20vbGliL2NhcHRjaGEubWluLmpzXCJcblx0XHRcdFx0XHRvbkNyZWF0ZT17dGhpcy5oYW5kbGVTY3JpcHRDcmVhdGUuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZVNjcmlwdEVycm9yLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0b25Mb2FkPXt0aGlzLmhhbmRsZVNjcmlwdExvYWQuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHRcdDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+XG5cblx0XHRcdFx0PGRpdiBpZD1cInRpdGxlX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMT5SZWRkaXQgR3Vlc3NlcjwvaDE+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRHdWVzcyB3aGljaCBzdWJyZWRkaXQgZWFjaCBpbWFnZSwgdGV4dCBwb3N0LCBvciBhcnRpY2xlIGlzIGZyb20hPGJyIC8+XG5cdFx0XHRcdFx0XHRDdXJyZW50bHkgaW5kZXhpbmcgPHN0cm9uZz42MCw4NzE8L3N0cm9uZz4gcmFuZG9tIHN1YnJlZGRpdHMhPGJyIC8+XG5cdFx0XHRcdFx0XHQ8c3Ryb25nPk1heSBjb250YWluIE5TRlcgQ29udGVudDwvc3Ryb25nPjxiciAvPlxuXHRcdFx0XHRcdFx0T3ZlciAxOCBTdWJyZWRkaXRzLCBhbmQgU3VicmVkZGl0cyB3aXRoIHVuZGVyIDEwMCBzdWJzY3JpYmVycyBOT1QgaW5jbHVkZWQuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvaW5oaXZlLWNhcHRjaGFcIiBkYXRhLWhhc2hlcz1cIjEwMjRcIiBkYXRhLWtleT1cIjFRaGwwbTBrS3dXcmZvd0EzbjBpMmR0M0c3YzN5RVpxXCI+XG5cdFx0XHRcdFx0XHRcdDxlbT5Mb2FkaW5nIENhcHRjaGEuLi48YnIvPlxuXHRcdFx0XHRcdFx0XHRcdElmIGl0IGRvZXNuJ3QgbG9hZCwgcGxlYXNlIGRpc2FibGUgQWRibG9jayFcblx0XHRcdFx0XHRcdFx0PC9lbT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0e2J1dHRvbn1cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0I2JhY2tncm91bmR7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsNTAsNTApO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQjdGl0bGVfY29udGFpbmVye1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBkYXNoZWQgd2hpdGUgMnB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFweDtcblx0XHRcdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQjdGl0bGVfY29udGFpbmVyIHB7XG5cdFx0XHRcdFx0XHRib3JkZXI6c29saWQgd2hpdGUgMXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzo1cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0I2VudGVye1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNTEsIDcyKTtcblx0XHRcdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzcmVtO1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6NXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0I2VudGVyOmhvdmVye1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyOyAgIFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAyMTYsIDEwNSk7IFxuXHRcdFx0XHRcdH1cbiAgICBcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/welcome.js */"
      }));
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.7ab2e7ce6cf196f0a9a8.hot-update.js.map