webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ClipLike.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ClipLike.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ClipLike\",\n  props: [\"clipId\"],\n  data: function data() {\n    return {\n      like: null\n    };\n  },\n  methods: {\n    unlikeMethod: function unlikeMethod(event) {\n      console.log(\"unlike method invoked\");\n      console.log(event.target.tagName);\n      this.postForm();\n      this.like = false;\n    },\n    likeMethod: function likeMethod(event) {\n      console.log(\"like method invoked\");\n      console.log(event.target.tagName);\n      this.postForm();\n      this.like = true;\n    },\n    postForm: function postForm() {\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios({\n        method: 'post',\n        url: \"http://127.0.0.1:8000/clips/api/clip-like/\".concat(this.clipId, \"/\"),\n        headers: {\n          'Accept': 'application/json, text/plain, */*',\n          'Content-type': 'application/json',\n          'X-CSRFToken': cookie\n        }\n      });\n    },\n    getCookie: function getCookie(name) {}\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n    axios.get(\"http://127.0.0.1:8000/clips/api/does-user-like/\".concat(this.clipId, \"/\")).then(function (response) {\n      return _this.like = response.data;\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQ2xpcExpa2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGlwTGlrZS52dWU/MjY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgdi1pZj1cImxpa2VcIlxyXG4gICAgICAgICB2LW9uOmNsaWNrPVwidW5saWtlTWV0aG9kXCJcclxuICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5cclxuICAgICAgICAgdW5saWtlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICB2LWVsc2UtaWY9XCJsaWtlPT1mYWxzZVwiXHJcbiAgICAgICAgIHYtb246Y2xpY2s9XCJsaWtlTWV0aG9kXCJcclxuICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgPlxyXG4gICAgICAgICBsaWtlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICB2LWVsc2VcclxuICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgc2lnbiBpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJDbGlwTGlrZVwiLFxyXG4gICAgcHJvcHM6IFtcImNsaXBJZFwiXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsaWtlOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdW5saWtlTWV0aG9kOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmxpa2UgbWV0aG9kIGludm9rZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC50YWdOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0Rm9ybSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpa2UgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpa2VNZXRob2Q6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpa2UgbWV0aG9kIGludm9rZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC50YWdOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0Rm9ybSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpa2UgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2NsaXBzL2FwaS9jbGlwLWxpa2UvJHt0aGlzLmNsaXBJZH0vYCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjb29raWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q29va2llOiBmdW5jdGlvbiAobmFtZSkge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2NsaXBzL2FwaS9kb2VzLXVzZXItbGlrZS8ke3RoaXMuY2xpcElkfS9gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh0aGlzLmxpa2UgPSByZXNwb25zZS5kYXRhKSlcclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBekJBO0FBNkJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQTFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ClipLike.vue?vue&type=script&lang=js&\n");

/***/ })

})