webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileBadge.vue */ \"./src/components/ProfileBadge.vue\");\n/* harmony import */ var _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotBadge.vue */ \"./src/components/SpotBadge.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SpotClip',\n  props: ['clip'],\n  components: {\n    SpotBadge: _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ProfileBadge: _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      spot: null,\n      username: null\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n    axios.get(\"http://127.0.0.1:8000/spots/api/spot-detail/\".concat(this.clip.spot, \"/\")).then(function (response) {\n      return _this.spot = response.data;\n    });\n    this.setUsername();\n  },\n  methods: {\n    setUsername: function setUsername() {\n      var _this2 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/accounts/api/get-username/\".concat(this.spotspot.properties.user, \"}/\")).then(function (response) {\n        return _this2.username = response.data;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdENsaXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TcG90Q2xpcC52dWU/ZDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHt7IHNwb3QgfX1cclxuICAgICAgICA8c3BvdC1iYWRnZVxyXG4gICAgICAgICB2LWlmPVwic3BvdFwiXHJcbiAgICAgICAgIDp0aXRsZT1cInNwb3QucHJvcGVydGllcy50aXRsZVwiXHJcbiAgICAgICAgIDpzcG90SWQ9XCJzcG90LmlkXCI+XHJcbiAgICAgICAgPC9zcG90LWJhZGdlPlxyXG4gICAgICAgIDxwcm9maWxlLWJhZGdlXHJcbiAgICAgICAgIHYtaWY9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgIDp1c2VySWQ9XCJzcG90LnByb3BlcnRpZXMudXNlclwiXHJcbiAgICAgICAgIDp1c2VybmFtZT1cInVzZXJuYW1lXCI+XHJcbiAgICAgICAgPC9wcm9maWxlLWJhZGdlPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUHJvZmlsZUJhZGdlIGZyb20gJy4vUHJvZmlsZUJhZGdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3BvdEJhZGdlIGZyb20gJy4vU3BvdEJhZGdlLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdTcG90Q2xpcCcsXHJcbiAgICAgICAgcHJvcHM6IFsnY2xpcCddLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgU3BvdEJhZGdlLFxyXG4gICAgICAgICAgICAgICAgUHJvZmlsZUJhZGdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3BvdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zcG90cy9hcGkvc3BvdC1kZXRhaWwvJHt0aGlzLmNsaXAuc3BvdH0vYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuc3BvdCA9IHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJuYW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYWNjb3VudHMvYXBpL2dldC11c2VybmFtZS8ke3RoaXMuc3BvdHNwb3QucHJvcGVydGllcy51c2VyfX0vYClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLnVzZXJuYW1lID0gcmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFOQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&\n");

/***/ })

})