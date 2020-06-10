webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Downloads.js":
/*!*********************************!*\
  !*** ./components/Downloads.js ***!
  \*********************************/
/*! exports provided: Downloads, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Downloads", function() { return Downloads; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _Nation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Nation */ "./components/Nation.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _DownloadTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DownloadTime */ "./components/DownloadTime.js");









var _jsxFileName = "C:\\Users\\Alex\\Desktop\\empatica\\empatica_delivery\\client\\components\\Downloads.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  query DownloadsQuery {\n    downloads\n    {\n        app_id\n        longitude\n        latitude\n        downloaded_at\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/****
 * Component in charge of retrieving the data from the database and in showing the interactive map with the tags
 * refering to the geographical position where the download was registered
 */

 // the map




 //The query for the GraphQL server

var DOWNLOADS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());
var Downloads = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Downloads, _Component);

  var _super = _createSuper(Downloads);

  function Downloads() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Downloads);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      viewport: {
        width: '30vw',
        height: '90vh',
        latitude: 45.464203,
        longitude: 9.189982,
        zoom: 5
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Downloads, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_13__["Query"], {
        query: DOWNLOADS_QUERY,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        // If data are still loading
        if (loading) return __jsx("p", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 37
          }
        }, "Loading ...."); // In the case of error ind querying the database 

        if (error) console.log(error);

        if (data != null && data.downloads != null) {
          var _extends2;

          return __jsx("div", {
            className: "row",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 37
            }
          }, __jsx("div", {
            className: "col-6",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 41
            }
          }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {
            mapStyle: "mapbox://styles/mapbox/streets-v9",
            mapboxApiAccessToken: "pk.eyJ1IjoiYWxleGVuYXgiLCJhIjoiY2tiMmVmZ2I4MDZ6dTJ1czBwYnpqOGtxcCJ9.IBNl_OPjhbhwcMbTycNL3w"
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_extends2, "mapStyle", "mapbox://styles/alexenax/ckb2fqmm606pj1ir103dxqxdc"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_extends2, "onViewportChange", function onViewportChange(viewport) {
            return _this2.setState({
              viewport: viewport
            });
          }), _extends2), _this2.state.viewport, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 45
            }
          }), data.downloads.map(function (download) {
            return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
              key: download.app_id,
              latitude: download.latitude,
              longitude: download.longitude,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 73
              }
            }, __jsx("img", {
              src: "https://www.empatica.com/assets/images/homepage/empatica_red_heart-icn.svg",
              alt: "Home Icon",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 77
              }
            }));
          }))), __jsx("div", {
            className: "col-6",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }
          }, __jsx("div", {
            className: "row",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 41
            }
          }, __jsx("div", {
            className: "col-12",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 45
            }
          }, __jsx(_Nation__WEBPACK_IMPORTED_MODULE_11__["default"], {
            data: data,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 49
            }
          }))), __jsx("div", {
            className: "row",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 41
            }
          }, __jsx("div", {
            className: "col-12",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 45
            }
          }, __jsx(_DownloadTime__WEBPACK_IMPORTED_MODULE_14__["default"], {
            data: data,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 50
            }
          })))));
        } else {
          return __jsx("div", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 37
            }
          }, "No data found!");
        }
      }));
    }
  }]);

  return Downloads;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Downloads);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rvd25sb2Fkcy5qcyJdLCJuYW1lcyI6WyJET1dOTE9BRFNfUVVFUlkiLCJncGwiLCJEb3dubG9hZHMiLCJ2aWV3cG9ydCIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkb3dubG9hZHMiLCJzZXRTdGF0ZSIsInN0YXRlIiwibWFwIiwiZG93bmxvYWQiLCJhcHBfaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUlBO0NBQ2lEOztBQUNqRDtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUdDLG1EQUFILG1CQUFyQjtBQVlPLElBQU1DLFNBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSxnTkFHWTtBQUNBQyxjQUFRLEVBQUU7QUFDVkMsYUFBSyxFQUFFLE1BREc7QUFFVkMsY0FBTSxFQUFFLE1BRkU7QUFHVkMsZ0JBQVEsRUFBRSxTQUhBO0FBSVZDLGlCQUFTLEVBQUUsUUFKRDtBQUtWQyxZQUFJLEVBQUU7QUFMSTtBQURWLEtBSFo7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBY2E7QUFBQTs7QUFFTCxhQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbURBQUQ7QUFBTyxhQUFLLEVBQUdSLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVRLGdCQUE0QjtBQUFBLFlBQTFCUyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxZQUFqQkMsS0FBaUIsUUFBakJBLEtBQWlCO0FBQUEsWUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBRXhCO0FBQ0EsWUFBR0YsT0FBSCxFQUFZLE9BQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESSxDQUhZLENBTXhCOztBQUNBLFlBQUdDLEtBQUgsRUFBVUUsT0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBRVYsWUFBR0MsSUFBSSxJQUFFLElBQU4sSUFBY0EsSUFBSSxDQUFDRyxTQUFMLElBQWtCLElBQW5DLEVBQ0E7QUFBQTs7QUFDQSxpQkFBUTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0k7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVJLE1BQUMscURBQUQ7QUFDSSxvQkFBUSxFQUFDLG1DQURiO0FBRUksZ0NBQW9CLEVBQUM7QUFGekIsOEhBR2Esb0RBSGIsNEhBSXNCLDBCQUFDWCxRQUFEO0FBQUEsbUJBQWMsTUFBSSxDQUFDWSxRQUFMLENBQWM7QUFBRVosc0JBQVEsRUFBUkE7QUFBRixhQUFkLENBQWQ7QUFBQSxXQUp0QixlQUtRLE1BQUksQ0FBQ2EsS0FBTCxDQUFXYixRQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUUlRLElBQUksQ0FBQ0csU0FBTCxDQUFlRyxHQUFmLENBQW1CLFVBQUFDLFFBQVE7QUFBQSxtQkFFSCxNQUFDLG9EQUFEO0FBQVEsaUJBQUcsRUFBRUEsUUFBUSxDQUFDQyxNQUF0QjtBQUNRLHNCQUFRLEVBQUVELFFBQVEsQ0FBQ1osUUFEM0I7QUFFUSx1QkFBUyxFQUFFWSxRQUFRLENBQUNYLFNBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFJSTtBQUFLLGlCQUFHLEVBQUMsNEVBQVQ7QUFBc0YsaUJBQUcsRUFBQyxXQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosQ0FGRztBQUFBLFdBQTNCLENBUkosQ0FGSixDQURKLEVBd0JBO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDSTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0k7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNJLE1BQUMsZ0RBQUQ7QUFBUSxnQkFBSSxFQUFJSSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosQ0FESixDQURKLEVBTUk7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNJO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDSyxNQUFDLHNEQUFEO0FBQWMsZ0JBQUksRUFBSUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURMLENBREosQ0FOSixDQXhCQSxDQUFSO0FBdUNDLFNBekNELE1BMkNBO0FBQ0ksaUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESjtBQUdIO0FBQ0osT0EzRFQsQ0FESixDQURKO0FBa0VIO0FBbEZMOztBQUFBO0FBQUEsRUFBK0JTLCtDQUEvQjtBQXFGZWxCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMTkzNGY0YjRjOGQyOWQ5YjZkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKipcclxuICogQ29tcG9uZW50IGluIGNoYXJnZSBvZiByZXRyaWV2aW5nIHRoZSBkYXRhIGZyb20gdGhlIGRhdGFiYXNlIGFuZCBpbiBzaG93aW5nIHRoZSBpbnRlcmFjdGl2ZSBtYXAgd2l0aCB0aGUgdGFnc1xyXG4gKiByZWZlcmluZyB0byB0aGUgZ2VvZ3JhcGhpY2FsIHBvc2l0aW9uIHdoZXJlIHRoZSBkb3dubG9hZCB3YXMgcmVnaXN0ZXJlZFxyXG4gKi9cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wsIHtNYXJrZXJ9IGZyb20gJ3JlYWN0LW1hcC1nbCc7IC8vIHRoZSBtYXBcclxuaW1wb3J0IE5hdGlvbiBmcm9tICcuL05hdGlvbic7XHJcbmltcG9ydCBncGwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgRG93bmxvYWRUaW1lIGZyb20gJy4vRG93bmxvYWRUaW1lJztcclxuXHJcbi8vVGhlIHF1ZXJ5IGZvciB0aGUgR3JhcGhRTCBzZXJ2ZXJcclxuY29uc3QgRE9XTkxPQURTX1FVRVJZID0gZ3BsYFxyXG4gIHF1ZXJ5IERvd25sb2Fkc1F1ZXJ5IHtcclxuICAgIGRvd25sb2Fkc1xyXG4gICAge1xyXG4gICAgICAgIGFwcF9pZFxyXG4gICAgICAgIGxvbmdpdHVkZVxyXG4gICAgICAgIGxhdGl0dWRlXHJcbiAgICAgICAgZG93bmxvYWRlZF9hdFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb3dubG9hZHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8vIEluaXRpYWwgc3RhdGUgZm8gdGhlIGludGVyYWN0aXZlIG1hcFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzB2dycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzkwdmgnLFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogNDUuNDY0MjAzLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IDkuMTg5OTgyLFxyXG4gICAgICAgICAgICB6b29tOiA1XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8UXVlcnkgcXVlcnk9IHtET1dOTE9BRFNfUVVFUll9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHtsb2FkaW5nLCBlcnJvciwgZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgZGF0YSBhcmUgc3RpbGwgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobG9hZGluZykgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZyAuLi4uPC9wPik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgZXJyb3IgaW5kIHF1ZXJ5aW5nIHRoZSBkYXRhYmFzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKSBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEhPW51bGwgJiYgZGF0YS5kb3dubG9hZHMgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49XCJway5leUoxSWpvaVlXeGxlR1Z1WVhnaUxDSmhJam9pWTJ0aU1tVm1aMkk0TURaNmRUSjFjekJ3WW5wcU9HdHhjQ0o5LklCTmxfT1BqaGJod2NNYlR5Y05MM3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9hbGV4ZW5heC9ja2IyZnFtbTYwNnBqMWlyMTAzZHhxeGRjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KHZpZXdwb3J0KSA9PiB0aGlzLnNldFN0YXRlKHsgdmlld3BvcnQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLnZpZXdwb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZG93bmxvYWRzLm1hcChkb3dubG9hZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtlciBrZXk9e2Rvd25sb2FkLmFwcF9pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e2Rvd25sb2FkLmxhdGl0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17ZG93bmxvYWQubG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmVtcGF0aWNhLmNvbS9hc3NldHMvaW1hZ2VzL2hvbWVwYWdlL2VtcGF0aWNhX3JlZF9oZWFydC1pY24uc3ZnXCIgYWx0PVwiSG9tZSBJY29uXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFya2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdGlvbiBkYXRhID0ge2RhdGF9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZFRpbWUgZGF0YSA9IHtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5ObyBkYXRhIGZvdW5kITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1F1ZXJ5PlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=