webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProfileHeader/ProfileHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProfileHeader/ProfileHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileHeaderUsername_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileHeaderUsername.vue */ \"./src/components/ProfileHeader/ProfileHeaderUsername.vue\");\n/* harmony import */ var _ProfileHeaderFullName_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileHeaderFullName.vue */ \"./src/components/ProfileHeader/ProfileHeaderFullName.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProfileHeader',\n  props: ['username'],\n  components: {\n    ProfileHeaderUsername: _ProfileHeaderUsername_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProfileHeaderFullName: _ProfileHeaderFullName_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      profile: null\n    };\n  },\n  computed: {\n    fullName: function fullName() {\n      return this.profile.full_name;\n    }\n  },\n  methods: {\n    getProfile: function getProfile() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/profiles/api/profile-detail/\".concat(this.username, \"/\")).then(function (response) {\n        return _this.profile = response.data;\n      });\n    }\n  },\n  created: function created() {\n    this.methods.getProfile();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZUhlYWRlci9Qcm9maWxlSGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUHJvZmlsZUhlYWRlci52dWU/MzQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICA8cHJvZmlsZS1oZWFkZXItdXNlcm5hbWVcclxuICAgICA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiPlxyXG4gICAgPC9wcm9maWxlLWhlYWRlci11c2VybmFtZT5cclxuICAgIDxwcm9maWxlLWhlYWRlci1mdWxsLW5hbWVcclxuICAgICA6ZnVsbE5hbWU9XCJmdWxsTmFtZVwiPlxyXG4gICAgPC9wcm9maWxlLWhlYWRlci1mdWxsLW5hbWU+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFByb2ZpbGVIZWFkZXJVc2VybmFtZSBmcm9tICcuL1Byb2ZpbGVIZWFkZXJVc2VybmFtZS52dWUnXHJcbmltcG9ydCBQcm9maWxlSGVhZGVyRnVsbE5hbWUgZnJvbSAnLi9Qcm9maWxlSGVhZGVyRnVsbE5hbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1Byb2ZpbGVIZWFkZXInLFxyXG4gICAgcHJvcHM6IFsndXNlcm5hbWUnXSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBQcm9maWxlSGVhZGVyVXNlcm5hbWUsXHJcbiAgICAgICAgUHJvZmlsZUhlYWRlckZ1bGxOYW1lLFxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9maWxlOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGZ1bGxOYW1lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGUuZnVsbF9uYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRQcm9maWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvcHJvZmlsZXMvYXBpL3Byb2ZpbGUtZGV0YWlsLyR7dGhpcy51c2VybmFtZX0vYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMucHJvZmlsZSA9IHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0UHJvZmlsZSgpO1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBM0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProfileHeader/ProfileHeader.vue?vue&type=script&lang=js&\n");

/***/ })

})