webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/SpotClip.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip/SpotClip.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileBadge.vue */ \"./src/components/SpotClip/ProfileBadge.vue\");\n/* harmony import */ var _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotBadge.vue */ \"./src/components/SpotClip/SpotBadge.vue\");\n/* harmony import */ var _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClipTextContent.vue */ \"./src/components/SpotClip/ClipTextContent.vue\");\n/* harmony import */ var _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClipImage.vue */ \"./src/components/SpotClip/ClipImage.vue\");\n/* harmony import */ var _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClipLike.vue */ \"./src/components/SpotClip/ClipLike.vue\");\n/* harmony import */ var _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClipLikeCounter.vue */ \"./src/components/SpotClip/ClipLikeCounter.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SpotClip',\n  props: ['clipId'],\n  components: {\n    SpotBadge: _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ProfileBadge: _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ClipTextContent: _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    ClipImage: _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ClipLike: _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ClipLikeCounter: _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      clip: null,\n      clipLikeKey: 0,\n      clipCountKey: 0\n    };\n  },\n  methods: {\n    getClip: function getClip() {\n      var _this = this;\n\n      console.log('grtting');\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/clips/api/clip-detail/\".concat(this.clipId, \"/\")).then(function (response) {\n        return _this.clip = response.data;\n      });\n    },\n    forceLikeRerender: function forceLikeRerender() {\n      this.clipLikeKey += 1;\n    },\n    forceCountRerender: function forceCountRerender() {\n      this.clipCountKey += 1;\n    },\n    handleLikeEvent: function handleLikeEvent() {\n      this.forceLikeRerender();\n      this.forceCountRerender();\n    }\n  },\n  computed: {\n    likesCount: function likesCount() {\n      return this.clip.likesCount;\n    }\n  },\n  created: function created() {\n    this.getClip();\n  },\n  mounted: function mounted() {\n    this.getClip();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdENsaXAvU3BvdENsaXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TcG90Q2xpcC52dWU/ZDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcG90LWJhZGdlXHJcbiAgICAgICAgIDpzcG90SWQ9XCJjbGlwLnNwb3RcIj5cclxuICAgICAgICA8L3Nwb3QtYmFkZ2U+XHJcbiAgICAgICAgPHByb2ZpbGUtYmFkZ2VcclxuICAgICAgICAgOnVzZXJuYW1lPVwiY2xpcC51c2VybmFtZVwiPlxyXG4gICAgICAgIDwvcHJvZmlsZS1iYWRnZT5cclxuICAgICAgICA8Y2xpcC10ZXh0LWNvbnRlbnRcclxuICAgICAgICAgOnRleHRDb250ZW50PVwiY2xpcC50ZXh0Q29udGVudFwiPlxyXG4gICAgICAgIDwvY2xpcC10ZXh0LWNvbnRlbnQ+XHJcbiAgICAgICAgPGNsaXAtaW1hZ2VcclxuICAgICAgICAgOmltYWdlPVwiY2xpcC5pbWFnZVwiPlxyXG4gICAgICAgIDwvY2xpcC1pbWFnZT5cclxuICAgICAgICA8Y2xpcC1saWtlXHJcbiAgICAgICAgIDpjbGlwSWQ9XCJjbGlwLmlkXCJcclxuICAgICAgICAgdi1vbjpsaWtlLWV2ZW50PVwiZm9yY2VMaWtlUmVyZW5kZXJcIlxyXG4gICAgICAgICB2LW9uOnVubGlrZS1ldmVudD1cImZvcmNlTGlrZVJlcmVuZGVyXCJcclxuICAgICAgICAgOmtleT1cImNsaXBMaWtlS2V5XCI+XHJcbiAgICAgICAgPC9jbGlwLWxpa2U+XHJcbiAgICAgICAgPGNsaXAtbGlrZS1jb3VudGVyXHJcbiAgICAgICAgIDpjbGlwSWQ9XCJjbGlwSWRcIlxyXG4gICAgICAgICA6a2V5PVwiY2xpcENvdW50S2V5XCI+XHJcbiAgICAgICAgPC9jbGlwLWxpa2UtY291bnRlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQcm9maWxlQmFkZ2UgZnJvbSAnLi9Qcm9maWxlQmFkZ2UudnVlJztcclxuICAgIGltcG9ydCBTcG90QmFkZ2UgZnJvbSAnLi9TcG90QmFkZ2UudnVlJztcclxuICAgIGltcG9ydCBDbGlwVGV4dENvbnRlbnQgZnJvbSAnLi9DbGlwVGV4dENvbnRlbnQudnVlJztcclxuICAgIGltcG9ydCBDbGlwSW1hZ2UgZnJvbSAnLi9DbGlwSW1hZ2UudnVlJztcclxuICAgIGltcG9ydCBDbGlwTGlrZSBmcm9tICcuL0NsaXBMaWtlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgQ2xpcExpa2VDb3VudGVyIGZyb20nLi9DbGlwTGlrZUNvdW50ZXIudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogJ1Nwb3RDbGlwJyxcclxuICAgICAgICBwcm9wczogWydjbGlwSWQnXSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIFNwb3RCYWRnZSxcclxuICAgICAgICAgICAgUHJvZmlsZUJhZGdlLFxyXG4gICAgICAgICAgICBDbGlwVGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIENsaXBJbWFnZSxcclxuICAgICAgICAgICAgQ2xpcExpa2UsXHJcbiAgICAgICAgICAgIENsaXBMaWtlQ291bnRlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsaXA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjbGlwTGlrZUtleTogMCxcclxuICAgICAgICAgICAgICAgIGNsaXBDb3VudEtleTogMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXRDbGlwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ3J0dGluZycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2NsaXBzL2FwaS9jbGlwLWRldGFpbC8ke3RoaXMuY2xpcElkfS9gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuY2xpcCA9IHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JjZUxpa2VSZXJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwTGlrZUtleSArPSAxO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JjZUNvdW50UmVyZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpcENvdW50S2V5ICs9IDE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhhbmRsZUxpa2VFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZUxpa2VSZXJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZUNvdW50UmVyZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgbGlrZXNDb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpcC5saWtlc0NvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENsaXAoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENsaXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/SpotClip.vue?vue&type=script&lang=js&\n");

/***/ })

})