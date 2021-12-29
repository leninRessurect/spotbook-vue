webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileBadge.vue */ \"./src/components/ProfileBadge.vue\");\n/* harmony import */ var _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotBadge.vue */ \"./src/components/SpotBadge.vue\");\n/* harmony import */ var _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClipTextContent.vue */ \"./src/components/ClipTextContent.vue\");\n/* harmony import */ var _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClipImage.vue */ \"./src/components/ClipImage.vue\");\n/* harmony import */ var _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClipLike.vue */ \"./src/components/ClipLike.vue\");\n/* harmony import */ var _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClipLikeCounter.vue */ \"./src/components/ClipLikeCounter.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SpotClip',\n  props: ['clipId'],\n  components: {\n    SpotBadge: _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ProfileBadge: _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ClipTextContent: _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    ClipImage: _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ClipLike: _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ClipLikeCounter: _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      clip: null\n    };\n  },\n  methods: {\n    getClip: function getClip() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/clips/api/clip-detail/\".concat(this.clipId, \"/\")).then(function (response) {\n        return _this.clip = response.data;\n      });\n    }\n  },\n  created: function created() {\n    this.getClip();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdENsaXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TcG90Q2xpcC52dWU/ZDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHt7IGNsaXAgfX1cclxuICAgICAgICA8c3BvdC1iYWRnZVxyXG4gICAgICAgICA6c3BvdElkPVwiY2xpcC5zcG90XCI+XHJcbiAgICAgICAgPC9zcG90LWJhZGdlPlxyXG4gICAgICAgIDxwcm9maWxlLWJhZGdlXHJcbiAgICAgICAgIDp1c2VySWQ9XCJjbGlwLnVzZXJcIj5cclxuICAgICAgICA8L3Byb2ZpbGUtYmFkZ2U+XHJcbiAgICAgICAgPGNsaXAtdGV4dC1jb250ZW50XHJcbiAgICAgICAgIDp0ZXh0Q29udGVudD1cImNsaXAudGV4dENvbnRlbnRcIj5cclxuICAgICAgICA8L2NsaXAtdGV4dC1jb250ZW50PlxyXG4gICAgICAgIDxjbGlwLWltYWdlXHJcbiAgICAgICAgIDppbWFnZT1cImNsaXAuaW1hZ2VcIj5cclxuICAgICAgICA8L2NsaXAtaW1hZ2U+XHJcbiAgICAgICAgPGNsaXAtbGlrZVxyXG4gICAgICAgICA6Y2xpcElkPVwiY2xpcC5pZFwiPlxyXG4gICAgICAgIDwvY2xpcC1saWtlPlxyXG4gICAgICAgIDxjbGlwLWxpa2UtY291bnRlclxyXG4gICAgICAgICA6Y2xpcElkPVwiY2xpcC5pZFwiPlxyXG4gICAgICAgIDwvY2xpcC1saWtlLWNvdW50ZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgUHJvZmlsZUJhZGdlIGZyb20gJy4vUHJvZmlsZUJhZGdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3BvdEJhZGdlIGZyb20gJy4vU3BvdEJhZGdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgQ2xpcFRleHRDb250ZW50IGZyb20gJy4vQ2xpcFRleHRDb250ZW50LnZ1ZSc7XHJcbiAgICBpbXBvcnQgQ2xpcEltYWdlIGZyb20gJy4vQ2xpcEltYWdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgQ2xpcExpa2UgZnJvbSAnLi9DbGlwTGlrZS52dWUnO1xyXG4gICAgaW1wb3J0IENsaXBMaWtlQ291bnRlciBmcm9tJy4vQ2xpcExpa2VDb3VudGVyLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdTcG90Q2xpcCcsXHJcbiAgICAgICAgcHJvcHM6IFsnY2xpcElkJ10sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBTcG90QmFkZ2UsXHJcbiAgICAgICAgICAgIFByb2ZpbGVCYWRnZSxcclxuICAgICAgICAgICAgQ2xpcFRleHRDb250ZW50LFxyXG4gICAgICAgICAgICBDbGlwSW1hZ2UsXHJcbiAgICAgICAgICAgIENsaXBMaWtlLFxyXG4gICAgICAgICAgICBDbGlwTGlrZUNvdW50ZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbGlwOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldENsaXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jbGlwcy9hcGkvY2xpcC1kZXRhaWwvJHt0aGlzLmNsaXBJZH0vYClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLmNsaXAgPSByZXNwb25zZS5kYXRhKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENsaXAoKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQTFCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=template&id=1614d6a2&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36bea2a8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=template&id=1614d6a2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._v(\" \" + _vm._s(_vm.clip) + \" \"),\n      _c(\"spot-badge\", { attrs: { spotId: _vm.clip.spot } }),\n      _c(\"profile-badge\", { attrs: { userId: _vm.clip.user } }),\n      _c(\"clip-text-content\", { attrs: { textContent: _vm.clip.textContent } }),\n      _c(\"clip-image\", { attrs: { image: _vm.clip.image } }),\n      _c(\"clip-like\", { attrs: { clipId: _vm.clip.id } }),\n      _c(\"clip-like-counter\", { attrs: { clipId: _vm.clip.id } })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMzZiZWEyYTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Nwb3RDbGlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjE0ZDZhMiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcG90Q2xpcC52dWU/M2U5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5jbGlwKSArIFwiIFwiKSxcbiAgICAgIF9jKFwic3BvdC1iYWRnZVwiLCB7IGF0dHJzOiB7IHNwb3RJZDogX3ZtLmNsaXAuc3BvdCB9IH0pLFxuICAgICAgX2MoXCJwcm9maWxlLWJhZGdlXCIsIHsgYXR0cnM6IHsgdXNlcklkOiBfdm0uY2xpcC51c2VyIH0gfSksXG4gICAgICBfYyhcImNsaXAtdGV4dC1jb250ZW50XCIsIHsgYXR0cnM6IHsgdGV4dENvbnRlbnQ6IF92bS5jbGlwLnRleHRDb250ZW50IH0gfSksXG4gICAgICBfYyhcImNsaXAtaW1hZ2VcIiwgeyBhdHRyczogeyBpbWFnZTogX3ZtLmNsaXAuaW1hZ2UgfSB9KSxcbiAgICAgIF9jKFwiY2xpcC1saWtlXCIsIHsgYXR0cnM6IHsgY2xpcElkOiBfdm0uY2xpcC5pZCB9IH0pLFxuICAgICAgX2MoXCJjbGlwLWxpa2UtY291bnRlclwiLCB7IGF0dHJzOiB7IGNsaXBJZDogX3ZtLmNsaXAuaWQgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=template&id=1614d6a2&\n");

/***/ })

})