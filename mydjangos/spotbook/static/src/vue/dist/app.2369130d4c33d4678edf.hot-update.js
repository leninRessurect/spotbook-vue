webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileBadge.vue */ \"./src/components/ProfileBadge.vue\");\n/* harmony import */ var _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotBadge.vue */ \"./src/components/SpotBadge.vue\");\n/* harmony import */ var _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClipTextContent.vue */ \"./src/components/ClipTextContent.vue\");\n/* harmony import */ var _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClipImage.vue */ \"./src/components/ClipImage.vue\");\n/* harmony import */ var _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClipLike.vue */ \"./src/components/ClipLike.vue\");\n/* harmony import */ var _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClipLikeCounter.vue */ \"./src/components/ClipLikeCounter.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SpotClip',\n  props: ['clipId'],\n  components: {\n    SpotBadge: _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ProfileBadge: _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ClipTextContent: _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    ClipImage: _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ClipLike: _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ClipLikeCounter: _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      spot: null,\n      username: null,\n      clip: null\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n    axios.get(\"http://127.0.0.1:8000/spots/api/spot-detail/\".concat(this.clip.spot, \"/\")).then(function (response) {\n      return _this.spot = response.data;\n    });\n    axios.get(\"http://127.0.0.1:8000/accounts/api/get-username/\".concat(this.clip.user, \"/\")).then(function (response) {\n      return _this.username = response.data;\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdENsaXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TcG90Q2xpcC52dWU/ZDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHt7IHNwb3QgfX1cclxuICAgICAgICA8c3BvdC1iYWRnZVxyXG4gICAgICAgICB2LWlmPVwic3BvdFwiXHJcbiAgICAgICAgIDp0aXRsZT1cInNwb3QucHJvcGVydGllcy50aXRsZVwiXHJcbiAgICAgICAgIDpzcG90SWQ9XCJzcG90LmlkXCI+XHJcbiAgICAgICAgPC9zcG90LWJhZGdlPlxyXG4gICAgICAgIDxwcm9maWxlLWJhZGdlXHJcbiAgICAgICAgIHYtaWY9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgIDp1c2VySWQ9XCJzcG90LnByb3BlcnRpZXMudXNlclwiXHJcbiAgICAgICAgIDp1c2VybmFtZT1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgPC9wcm9maWxlLWJhZGdlPlxyXG4gICAgICAgIDxjbGlwLXRleHQtY29udGVudFxyXG4gICAgICAgICA6dGV4dENvbnRlbnQ9XCJjbGlwLnRleHRDb250ZW50XCI+XHJcbiAgICAgICAgPC9jbGlwLXRleHQtY29udGVudD5cclxuICAgICAgICA8Y2xpcC1pbWFnZVxyXG4gICAgICAgICA6aW1hZ2U9XCJjbGlwLmltYWdlXCI+XHJcbiAgICAgICAgPC9jbGlwLWltYWdlPlxyXG4gICAgICAgIDxjbGlwLWxpa2VcclxuICAgICAgICAgOmNsaXBJZD1cImNsaXAuaWRcIj5cclxuICAgICAgICA8L2NsaXAtbGlrZT5cclxuICAgICAgICA8Y2xpcC1saWtlLWNvdW50ZXJcclxuICAgICAgICAgOmNsaXBJZD1cImNsaXAuaWRcIj5cclxuICAgICAgICA8L2NsaXAtbGlrZS1jb3VudGVyPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFByb2ZpbGVCYWRnZSBmcm9tICcuL1Byb2ZpbGVCYWRnZS52dWUnO1xyXG4gICAgaW1wb3J0IFNwb3RCYWRnZSBmcm9tICcuL1Nwb3RCYWRnZS52dWUnO1xyXG4gICAgaW1wb3J0IENsaXBUZXh0Q29udGVudCBmcm9tICcuL0NsaXBUZXh0Q29udGVudC52dWUnO1xyXG4gICAgaW1wb3J0IENsaXBJbWFnZSBmcm9tICcuL0NsaXBJbWFnZS52dWUnO1xyXG4gICAgaW1wb3J0IENsaXBMaWtlIGZyb20gJy4vQ2xpcExpa2UudnVlJztcclxuICAgIGltcG9ydCBDbGlwTGlrZUNvdW50ZXIgZnJvbScuL0NsaXBMaWtlQ291bnRlci52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAnU3BvdENsaXAnLFxyXG4gICAgICAgIHByb3BzOiBbJ2NsaXBJZCddLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgU3BvdEJhZGdlLFxyXG4gICAgICAgICAgICBQcm9maWxlQmFkZ2UsXHJcbiAgICAgICAgICAgIENsaXBUZXh0Q29udGVudCxcclxuICAgICAgICAgICAgQ2xpcEltYWdlLFxyXG4gICAgICAgICAgICBDbGlwTGlrZSxcclxuICAgICAgICAgICAgQ2xpcExpa2VDb3VudGVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3BvdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2xpcDogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvc3BvdHMvYXBpL3Nwb3QtZGV0YWlsLyR7dGhpcy5jbGlwLnNwb3R9L2ApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnNwb3QgPSByZXNwb25zZS5kYXRhKSlcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FjY291bnRzL2FwaS9nZXQtdXNlcm5hbWUvJHt0aGlzLmNsaXAudXNlcn0vYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMudXNlcm5hbWUgPSByZXNwb25zZS5kYXRhKSlcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&\n");

/***/ })

})