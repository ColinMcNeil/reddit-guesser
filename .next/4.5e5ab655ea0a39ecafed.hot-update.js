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
          lineNumber: 35
        }
      }, this.state.buttonText);

      if (this.clickedPlay) {
        button = captcha;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-2240255276"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_load_script___default.a, {
        url: "https://authedmine.com/lib/captcha.min.js",
        onCreate: this.handleScriptCreate.bind(this),
        onError: this.handleScriptError.bind(this),
        onLoad: this.handleScriptLoad.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2240255276"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "title_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-2240255276"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2240255276"
      }, "Reddit Guesser"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-2240255276"
      }, "Guess which subreddit each image, text post, or article is from!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-2240255276"
      }), "Currently indexing ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2240255276"
      }, "60,871"), " random subreddits!", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2240255276"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-2240255276"
      }, "May contain NSFW Content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-2240255276"
      }), "Over 18 Subreddits, and Subreddits with under 100 subscribers NOT included."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "data-hashes": "1024",
        "data-key": "1Qhl0m0kKwWrfowA3n0i2dt3G7c3yEZq",
        "data-callback": "mined",
        "data-disable-elements": "#enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-2240255276" + " " + "coinhive-captcha"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2240255276"
      }, "Loading Captcha...", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-2240255276"
      }), "If it doesn't load, please disable Adblock!")), button)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2240255276",
        css: "#background{position:absolute;z-index:1;width:100%;height:100%;background-color:rgb(50,50,50);font-family:'Roboto';}#title_container{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:inline-block;color:white;border:dashed white 2px;text-align:center;padding:10px;border-radius:1px;margin:0;}#title_container p{border:solid white 1px;padding:5px;line-height:25px;}#enter{background-color:rgb(48,151,72);width:auto;position:relative;font-size:3rem;padding-top:5px;padding-bottom:5px;border:none;outline:none;border-radius:3px;}#enter:hover{cursor:pointer;background-color:rgb(71,216,105);}#enter:disabled{cursor:default;background-color:rgb(71,216,105);color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2VsY29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXVCLEFBR3lCLEFBUUEsQUFhSSxBQUtZLEFBV25CLEFBSUEsZUFIb0IsQUFJQSxHQXpDekIsQUFRRixLQWFHLEdBWkYsRUFSRSxJQXlCQSxHQWhCb0IsQUFZZCxJQXBCTCxJQXlCTSxLQVduQixBQUlZLEdBdkNvQixDQW9CaEMsUUFxQkEsQ0FoQmdCLGVBQ0EsTUF6Qk0sVUEwQkYsV0F6QnBCLFFBMEJhLFlBQ0EsYUFDTSxJQXRCRyxjQXVCdEIsT0F0QmEsWUFDWSx3QkFDTixrQkFDTCxhQUNLLGtCQUNWLFNBQ1QiLCJmaWxlIjoiY29tcG9uZW50cy93ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYXBwZXIvRGV2L3JlZGRpdC1ndWVzc2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JpcHQgZnJvbSAncmVhY3QtbG9hZC1zY3JpcHQnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWxjb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtidXR0b25UZXh0OiAnUGxheSd9O1xuXHRcdHRoaXMucGxheSA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBidXR0b25UZXh0OiAnTG9hZGluZycgfSlcblx0XHRcdHRoaXMuY2xpY2tlZFBsYXkgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRoYW5kbGVTY3JpcHRDcmVhdGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNjcmlwdExvYWRlZDogZmFsc2UgfSlcblx0fVxuXG5cdGhhbmRsZVNjcmlwdEVycm9yKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzY3JpcHRFcnJvcjogdHJ1ZSB9KVxuXHR9XG5cblx0aGFuZGxlU2NyaXB0TG9hZCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2NyaXB0TG9hZGVkOiB0cnVlIH0pXG5cdH1cblx0bWluZWQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ21pbmVkJylcblx0fVxuXHQvLyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0Ly8gXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXG5cdC8vIFx0c2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9hdXRoZWRtaW5lLmNvbS9saWIvY2FwdGNoYS5taW4uanNcIjtcblx0Ly8gXHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG5cdC8vIFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHQvLyB9XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgYnV0dG9uID0gPGJ1dHRvbiBpZD1cImVudGVyXCIgb25DbGljaz17dGhpcy5wbGF5fT57dGhpcy5zdGF0ZS5idXR0b25UZXh0fTwvYnV0dG9uPlxuXHRcdGlmICh0aGlzLmNsaWNrZWRQbGF5KSB7XG5cdFx0XHRidXR0b24gPSBjYXB0Y2hhO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFNjcmlwdFxuXHRcdFx0XHRcdHVybD1cImh0dHBzOi8vYXV0aGVkbWluZS5jb20vbGliL2NhcHRjaGEubWluLmpzXCJcblx0XHRcdFx0XHRvbkNyZWF0ZT17dGhpcy5oYW5kbGVTY3JpcHRDcmVhdGUuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLmhhbmRsZVNjcmlwdEVycm9yLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0b25Mb2FkPXt0aGlzLmhhbmRsZVNjcmlwdExvYWQuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHRcdDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+XG5cblx0XHRcdFx0PGRpdiBpZD1cInRpdGxlX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMT5SZWRkaXQgR3Vlc3NlcjwvaDE+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRHdWVzcyB3aGljaCBzdWJyZWRkaXQgZWFjaCBpbWFnZSwgdGV4dCBwb3N0LCBvciBhcnRpY2xlIGlzIGZyb20hPGJyIC8+XG5cdFx0XHRcdFx0XHRDdXJyZW50bHkgaW5kZXhpbmcgPHN0cm9uZz42MCw4NzE8L3N0cm9uZz4gcmFuZG9tIHN1YnJlZGRpdHMhPGJyIC8+XG5cdFx0XHRcdFx0XHQ8c3Ryb25nPk1heSBjb250YWluIE5TRlcgQ29udGVudDwvc3Ryb25nPjxiciAvPlxuXHRcdFx0XHRcdFx0T3ZlciAxOCBTdWJyZWRkaXRzLCBhbmQgU3VicmVkZGl0cyB3aXRoIHVuZGVyIDEwMCBzdWJzY3JpYmVycyBOT1QgaW5jbHVkZWQuXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2luaGl2ZS1jYXB0Y2hhXCJcblx0XHRcdFx0XHRcdFx0ZGF0YS1oYXNoZXM9XCIxMDI0XCJcblx0XHRcdFx0XHRcdFx0ZGF0YS1rZXk9XCIxUWhsMG0wa0t3V3Jmb3dBM24waTJkdDNHN2MzeUVacVwiXG5cdFx0XHRcdFx0XHRcdGRhdGEtY2FsbGJhY2s9XCJtaW5lZFwiXG5cdFx0XHRcdFx0XHRcdGRhdGEtZGlzYWJsZS1lbGVtZW50cz1cIiNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZW0+TG9hZGluZyBDYXB0Y2hhLi4uPGJyLz5cblx0XHRcdFx0XHRcdFx0XHRJZiBpdCBkb2Vzbid0IGxvYWQsIHBsZWFzZSBkaXNhYmxlIEFkYmxvY2shXG5cdFx0XHRcdFx0XHRcdDwvZW0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHtidXR0b259XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XHRcblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2Bcblx0XHRcdFx0XHQjYmFja2dyb3VuZHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYig1MCw1MCw1MCk7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1JvYm90byc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCN0aXRsZV9jb250YWluZXJ7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXI6IGRhc2hlZCB3aGl0ZSAycHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMXB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCN0aXRsZV9jb250YWluZXIgcHtcblx0XHRcdFx0XHRcdGJvcmRlcjpzb2xpZCB3aGl0ZSAxcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOjVweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQjZW50ZXJ7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE1MSwgNzIpO1xuXHRcdFx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDNyZW07XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDo1cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0b3V0bGluZTpub25lO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQjZW50ZXI6aG92ZXJ7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7ICAgXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDIxNiwgMTA1KTsgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCNlbnRlcjpkaXNhYmxlZCB7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDIxNiwgMTA1KTtcblx0XHRcdFx0XHRcdGNvbG9yOndoaXRlO1xuXG5cdFx0XHRcdFx0fVxuICAgIFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=components/welcome.js */"
      }));
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.5e5ab655ea0a39ecafed.hot-update.js.map