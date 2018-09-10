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
      console.log('Play');
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
    }
  }, {
    key: "mined",
    value: function mined() {
      console.log('mined');
    } // componentDidMount() {
    // 	const script = document.createElement("script");
    // 	script.src = "https://authedmine.com/lib/captcha.min.js";
    // 	script.async = true;
    // 	document.body.appendChild(script);
    // }

  }, {
    key: "render",
    value: function render() {
      var button = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "enter",
        onClick: this.play,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.state.buttonText);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-2874035713"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_load_script___default.a, {
        url: "https://authedmine.com/lib/captcha.min.js",
        onCreate: this.handleScriptCreate.bind(this),
        onError: this.handleScriptError.bind(this),
        onLoad: this.handleScriptLoad.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-2874035713"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "title_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-2874035713"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-2874035713"
      }, "Reddit Guesser"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2874035713"
      }, "Guess which subreddit each image, text post, or article is from!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-2874035713"
      }), "Currently indexing ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2874035713"
      }, "60,871"), " random subreddits!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2874035713"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2874035713"
      }, "May contain NSFW Content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2874035713"
      }), "Over 18 Subreddits, and Subreddits with under 100 subscribers NOT included."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-hashes": "1024",
        "data-key": "1Qhl0m0kKwWrfowA3n0i2dt3G7c3yEZq",
        "data-callback": "mined",
        "data-disable-elements": "#enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2874035713" + " " + "coinhive-captcha"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-2874035713"
      }, "Loading Captcha...", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-2874035713"
      }), "If it doesn't load, please disable Adblock!")), button)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2874035713",
        css: "#background{position:absolute;z-index:1;width:100%;height:100%;background-color:rgb(50,50,50);font-family:'Roboto';}#title_container{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:inline-block;color:white;border:dashed white 2px;text-align:center;padding:10px;border-radius:1px;margin:0;}#title_container p{border:solid white 1px;padding:5px;line-height:25px;}#enter{background-color:rgb(48,151,72);width:auto;position:relative;font-size:3rem;padding-top:5px;padding-bottom:5px;border:none;outline:none;border-radius:3px;}#enter:hover{cursor:pointer;background-color:rgb(71,216,105);}#enter:disabled{cursor:default;background-color:rgb(48,100,72);color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2VsY29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXVCLEFBR3lCLEFBUUEsQUFhSSxBQUtZLEFBV25CLEFBSUEsZUFIb0IsQUFJRCxHQXpDeEIsQUFRRixLQWFHLEdBWkYsRUFSRSxJQXlCQSxHQWhCb0IsQUFZZCxJQXBCTCxJQXlCTSxJQWVQLENBSlosR0FuQ2dDLENBb0JoQyxPQXFCQSxFQWhCZ0IsZUFDQSxNQXpCTSxVQTBCRixXQXpCcEIsUUEwQmEsWUFDQSxhQUNNLElBdEJHLGNBdUJ0QixPQXRCYSxZQUNZLHdCQUNOLGtCQUNMLGFBQ0ssa0JBQ1YsU0FDVCIsImZpbGUiOiJjb21wb25lbnRzL3dlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhcHBlci9EZXYvcmVkZGl0LWd1ZXNzZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNjcmlwdCBmcm9tICdyZWFjdC1sb2FkLXNjcmlwdCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge2J1dHRvblRleHQ6ICdQbGF5J307XG5cdFx0dGhpcy5wbGF5ID0gKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ1BsYXknKVxuXHRcdH1cblx0fVxuXHRoYW5kbGVTY3JpcHRDcmVhdGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNjcmlwdExvYWRlZDogZmFsc2UgfSlcblx0fVxuXG5cdGhhbmRsZVNjcmlwdEVycm9yKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzY3JpcHRFcnJvcjogdHJ1ZSB9KVxuXHR9XG5cblx0aGFuZGxlU2NyaXB0TG9hZCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2NyaXB0TG9hZGVkOiB0cnVlIH0pXG5cdH1cblx0bWluZWQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ21pbmVkJylcblx0fVxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0Ly8gXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG5cdC8vIFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hdXRoZWRtaW5lLmNvbS9saWIvY2FwdGNoYS5taW4uanNcIjtcblx0Ly8gXHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG5cdC8vIFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHQvLyB9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uID0gPGJ1dHRvbiBpZD1cImVudGVyXCIgb25DbGljaz17dGhpcy5wbGF5fT57dGhpcy5zdGF0ZS5idXR0b25UZXh0fTwvYnV0dG9uPlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8U2NyaXB0XG5cdFx0XHRcdFx0dXJsPVwiaHR0cHM6Ly9hdXRoZWRtaW5lLmNvbS9saWIvY2FwdGNoYS5taW4uanNcIlxuXHRcdFx0XHRcdG9uQ3JlYXRlPXt0aGlzLmhhbmRsZVNjcmlwdENyZWF0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMuaGFuZGxlU2NyaXB0RXJyb3IuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRvbkxvYWQ9e3RoaXMuaGFuZGxlU2NyaXB0TG9hZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PGRpdiBpZD1cImJhY2tncm91bmRcIj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwidGl0bGVfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGgxPlJlZGRpdCBHdWVzc2VyPC9oMT5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdEd1ZXNzIHdoaWNoIHN1YnJlZGRpdCBlYWNoIGltYWdlLCB0ZXh0IHBvc3QsIG9yIGFydGljbGUgaXMgZnJvbSE8YnIgLz5cblx0XHRcdFx0XHRcdEN1cnJlbnRseSBpbmRleGluZyA8c3Ryb25nPjYwLDg3MTwvc3Ryb25nPiByYW5kb20gc3VicmVkZGl0cyE8YnIgLz5cblx0XHRcdFx0XHRcdDxzdHJvbmc+TWF5IGNvbnRhaW4gTlNGVyBDb250ZW50PC9zdHJvbmc+PGJyIC8+XG5cdFx0XHRcdFx0XHRPdmVyIDE4IFN1YnJlZGRpdHMsIGFuZCBTdWJyZWRkaXRzIHdpdGggdW5kZXIgMTAwIHN1YnNjcmliZXJzIE5PVCBpbmNsdWRlZC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvaW5oaXZlLWNhcHRjaGFcIlxuXHRcdFx0XHRcdFx0XHRkYXRhLWhhc2hlcz1cIjEwMjRcIlxuXHRcdFx0XHRcdFx0XHRkYXRhLWtleT1cIjFRaGwwbTBrS3dXcmZvd0EzbjBpMmR0M0c3YzN5RVpxXCJcblx0XHRcdFx0XHRcdFx0ZGF0YS1jYWxsYmFjaz1cIm1pbmVkXCJcblx0XHRcdFx0XHRcdFx0ZGF0YS1kaXNhYmxlLWVsZW1lbnRzPVwiI2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxlbT5Mb2FkaW5nIENhcHRjaGEuLi48YnIvPlxuXHRcdFx0XHRcdFx0XHRcdElmIGl0IGRvZXNuJ3QgbG9hZCwgcGxlYXNlIGRpc2FibGUgQWRibG9jayFcblx0XHRcdFx0XHRcdFx0PC9lbT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0e2J1dHRvbn1cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRcdCNiYWNrZ3JvdW5ke1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLDUwLDUwKTtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0I3RpdGxlX2NvbnRhaW5lcntcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJvcmRlcjogZGFzaGVkIHdoaXRlIDJweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxcHg7XG5cdFx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0I3RpdGxlX2NvbnRhaW5lciBwe1xuXHRcdFx0XHRcdFx0Ym9yZGVyOnNvbGlkIHdoaXRlIDFweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6NXB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCNlbnRlcntcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTUxLCA3Mik7XG5cdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOjVweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOm5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCNlbnRlcjpob3Zlcntcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjsgICBcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMjE2LCAxMDUpOyBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0I2VudGVyOmRpc2FibGVkIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTAwLCA3Mik7XG5cdFx0XHRcdFx0XHRjb2xvcjp3aGl0ZTtcblxuXHRcdFx0XHRcdH1cbiAgICBcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/welcome.js */"
      }));
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.475c10cabc9a6ce21c87.hot-update.js.map