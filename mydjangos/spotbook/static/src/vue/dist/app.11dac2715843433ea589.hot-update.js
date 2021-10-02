webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotBadge.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotBadge.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SpotBadge',\n  props: ['spotId'],\n  data: function data() {\n    return {\n      url: null,\n      title: null\n    };\n  },\n  methods: {\n    getTitle: function getTitle() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/spots/api/spot-title/\".concat(spotId)).then(function (response) {\n        return _this.title = response.data;\n      });\n    }\n  },\n  mounted: function mounted() {\n    var str = \"http://127.0.0.1:8000/spotbook/spotpage/\".concat(this.spotId, \"/\");\n    this.url = str;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdEJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vU3BvdEJhZGdlLnZ1ZT82ODFhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGEgOmhyZWY9XCJ1cmxcIj57eyB0aXRsZSB9fTwvYT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1Nwb3RCYWRnZScsXHJcbiAgICBwcm9wczogWydzcG90SWQnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1cmw6IG51bGwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0VGl0bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zcG90cy9hcGkvc3BvdC10aXRsZS8ke3Nwb3RJZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAodGhpcy50aXRsZSA9IHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvc3BvdGJvb2svc3BvdHBhZ2UvJHt0aGlzLnNwb3RJZH0vYDtcclxuICAgICAgICB0aGlzLnVybCA9IHN0cjtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotBadge.vue?vue&type=script&lang=js&\n");

/***/ })

})