webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpotBadge.vue */ \"./src/components/SpotBadge.vue\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    SpotBadge: _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  name: 'SpotClip',\n  props: {\n    clip: Object\n  },\n  data: function data() {\n    return {\n      message: 'my spot clip',\n      spot: Object\n    };\n  },\n  methods: {\n    getSpotObj: function getSpotObj(spotId) {\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      var self = this;\n      axios.get(\"http://127.0.0.1:8000/spots/api/spot-detail/\".concat(spotId)).then(function (response) {\n        // handle success\n        console.log(response.data);\n        self.spot = response.data;\n      }).catch(function (error) {\n        // handle error\n        console.log(error);\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.getSpotObj(this.clip.spot);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdENsaXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TcG90Q2xpcC52dWU/ZDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcG90LWJhZGdlIHYtYmluZDpzcG90PVwic3BvdFwiPjwvc3BvdC1iYWRnZT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBTcG90QmFkZ2UgZnJvbSAnLi9TcG90QmFkZ2UudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czogeyBTcG90QmFkZ2UgfSxcclxuICAgICAgICBuYW1lOiAnU3BvdENsaXAnLFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNsaXA6IE9iamVjdCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdteSBzcG90IGNsaXAnLFxyXG4gICAgICAgICAgICAgICAgc3BvdDogT2JqZWN0LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldFNwb3RPYmo6IGZ1bmN0aW9uIChzcG90SWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Nwb3RzL2FwaS9zcG90LWRldGFpbC8ke3Nwb3RJZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNwb3QgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTcG90T2JqKHRoaXMuY2xpcC5zcG90KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQS9CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&\n");

/***/ })

})