webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProfileHeader/ProfileFollow.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProfileHeader/ProfileFollow.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProfileFollow',\n  props: ['username'],\n  data: function data() {\n    return {\n      following: null\n    };\n  },\n  methods: {\n    unfollowMethod: function unfollowMethod(event) {\n      console.log(\"unfollow method invoked\");\n      console.log(event.target.tagName);\n      this.postForm();\n      this.$emit('unfollow-event');\n    },\n    followMethod: function followMethod(event) {\n      console.log(\"follow method invoked\");\n      console.log(event.target.tagName);\n      this.postForm();\n      this.$emit('follow-event');\n    },\n    doesUserFollow: function doesUserFollow() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/profiles/api/does-user-follow/\".concat(this.username, \"/\")).then(function (response) {\n        return _this.following = response.data;\n      });\n    },\n    getCookie: function getCookie(name) {\n      var cookieValue = null;\n\n      if (document.cookie && document.cookie !== '') {\n        var cookies = document.cookie.split(';');\n\n        for (var i = 0; i < cookies.length; i++) {\n          var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n          if (cookie.substring(0, name.length + 1) === name + '=') {\n            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n            break;\n          }\n        }\n      }\n\n      return cookieValue;\n    },\n    postForm: function postForm() {\n      var cookie = this.getCookie('csrftoken');\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios({\n        method: 'post',\n        url: \"http://127.0.0.1:8000/profiles/api/follow-toggle/\".concat(this.username, \"/\"),\n        headers: {\n          'Accept': 'application/json, text/plain, */*',\n          'Content-type': 'application/json',\n          'X-CSRFToken': cookie\n        }\n      });\n    }\n  },\n  created: function created() {\n    this.doesUserFollow();\n  },\n  mounted: function mounted() {\n    this.doesUserFollow();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZUhlYWRlci9Qcm9maWxlRm9sbG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUHJvZmlsZUZvbGxvdy52dWU/MjgxNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgICAgdi1pZj1cImZvbGxvd2luZ1wiXHJcbiAgICAgICAgdi1vbjpjbGljaz1cInVuZm9sbG93TWV0aG9kXCJcclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+XHJcbiAgICAgICAgdW5mb2xsb3dcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAgIHYtZWxzZS1pZj1cImZvbGxvd2luZz09ZmFsc2VcIlxyXG4gICAgICAgIHYtb246Y2xpY2s9XCJmb2xsb3dNZXRob2RcIlxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgZm9sbG93XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b25cclxuICAgICAgICB2LWVsc2VcclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgc2lnbiBpblxyXG4gICAgPC9idXR0b24+XHJcblxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdQcm9maWxlRm9sbG93JyxcclxuICAgIHByb3BzOiBbJ3VzZXJuYW1lJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9sbG93aW5nOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdW5mb2xsb3dNZXRob2Q6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuZm9sbG93IG1ldGhvZCBpbnZva2VkXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGFnTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdEZvcm0oKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndW5mb2xsb3ctZXZlbnQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbGxvd01ldGhvZDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9sbG93IG1ldGhvZCBpbnZva2VkXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGFnTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdEZvcm0oKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZm9sbG93LWV2ZW50Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb2VzVXNlckZvbGxvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2ZpbGVzL2FwaS9kb2VzLXVzZXItZm9sbG93LyR7dGhpcy51c2VybmFtZX0vYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuZm9sbG93aW5nID0gcmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDb29raWU6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBjb29raWVWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgJz0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdEZvcm06IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGNvb2tpZSA9IHRoaXMuZ2V0Q29va2llKCdjc3JmdG9rZW4nKTtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2ZpbGVzL2FwaS9mb2xsb3ctdG9nZ2xlLyR7dGhpcy51c2VybmFtZX0vYCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjb29raWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5kb2VzVXNlckZvbGxvdygpXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5kb2VzVXNlckZvbGxvdygpXHJcbiAgICB9LFxyXG4gICAgXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUE5Q0E7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProfileHeader/ProfileFollow.vue?vue&type=script&lang=js&\n");

/***/ })

})