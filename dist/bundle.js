!function(e){var c={};function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)r.d(e,c,function(t){return n[t]}.bind(null,c));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s="./src/main.js")}({"./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plant.js */ "./src/plant.js");\n\r\n\r\nconst feed = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["changeState"])("soil");\r\nconst blueFood = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["changeState"])("soil")(5);\r\n\r\nconst hydrate = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["changeState"])("water");\r\nconst sprinkle = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["changeState"])("water")(5);\r\n\r\nconst giveLight = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["changeState"])("light");\r\n\r\n// const fedPlant = stateChanger(blueFood);\r\n// const plantFedAgain = stateChanger(greenFood);\r\n\r\n$(document).ready(function () {\r\n\r\n  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.\r\n  $(\'#feed\').click(function() {\r\n    const newState = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["stateChanger"])(blueFood);\r\n    $(\'#soil-value\').text(newState.soil);\r\n    console.log("hi im feeding");\r\n  });\r\n\r\n  $(\'#water\').click(function () {\r\n    const newState = Object(_plant_js__WEBPACK_IMPORTED_MODULE_0__["stateChanger"])(sprinkle);\r\n    $(\'#water-value\').text(newState.water);\r\n    console.log("hi im watering");\r\n\r\n  });\r\n\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz9mMDZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBdUQ7O0FBRXZELGFBQWEsNkRBQVc7QUFDeEIsaUJBQWlCLDZEQUFXOztBQUU1QixnQkFBZ0IsNkRBQVc7QUFDM0IsaUJBQWlCLDZEQUFXOztBQUU1QixrQkFBa0IsNkRBQVc7O0FBRTdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw4REFBWTtBQUNqQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHFCQUFxQiw4REFBWTtBQUNqQztBQUNBOztBQUVBLEdBQUc7O0FBRUgsQ0FBQyIsImZpbGUiOiIuL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhbmdlU3RhdGUsIHN0YXRlQ2hhbmdlciB9IGZyb20gJy4vcGxhbnQuanMnO1xyXG5cclxuY29uc3QgZmVlZCA9IGNoYW5nZVN0YXRlKFwic29pbFwiKTtcclxuY29uc3QgYmx1ZUZvb2QgPSBjaGFuZ2VTdGF0ZShcInNvaWxcIikoNSk7XHJcblxyXG5jb25zdCBoeWRyYXRlID0gY2hhbmdlU3RhdGUoXCJ3YXRlclwiKTtcclxuY29uc3Qgc3ByaW5rbGUgPSBjaGFuZ2VTdGF0ZShcIndhdGVyXCIpKDUpO1xyXG5cclxuY29uc3QgZ2l2ZUxpZ2h0ID0gY2hhbmdlU3RhdGUoXCJsaWdodFwiKTtcclxuXHJcbi8vIGNvbnN0IGZlZFBsYW50ID0gc3RhdGVDaGFuZ2VyKGJsdWVGb29kKTtcclxuLy8gY29uc3QgcGxhbnRGZWRBZ2FpbiA9IHN0YXRlQ2hhbmdlcihncmVlbkZvb2QpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyBUaGlzIGZ1bmN0aW9uIGhhcyBzaWRlIGVmZmVjdHMgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgalF1ZXJ5LiBNYW5pcHVsYXRpbmcgdGhlIERPTSB3aWxsIGFsd2F5cyBiZSBhIHNpZGUgZWZmZWN0LlxyXG4gICQoJyNmZWVkJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHN0YXRlQ2hhbmdlcihibHVlRm9vZCk7XHJcbiAgICAkKCcjc29pbC12YWx1ZScpLnRleHQobmV3U3RhdGUuc29pbCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpIGltIGZlZWRpbmdcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN3YXRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0gc3RhdGVDaGFuZ2VyKHNwcmlua2xlKTtcclxuICAgICQoJyN3YXRlci12YWx1ZScpLnRleHQobmV3U3RhdGUud2F0ZXIpO1xyXG4gICAgY29uc29sZS5sb2coXCJoaSBpbSB3YXRlcmluZ1wiKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n')},"./src/plant.js":
/*!**********************!*\
  !*** ./src/plant.js ***!
  \**********************/
/*! exports provided: stateChanger, storeState, changeState */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateChanger", function() { return stateChanger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeState", function() { return storeState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeState", function() { return changeState; });\nconst stateChanger = storeState();\r\nconst storeState = () => {\r\n  //outer function that is stored in the constant storeState, only job is to store the currentState of object\r\n  let currentState = { soil: 1, light: 0, water: 0 }; //initialized empty object, will be mutated everytime inner function is called\r\n  return (stateChangeFunction) => {\r\n    //outer function returns an anonymous inner function that takes one parameter called stateChangeFunction. this function will specify the exact change that we should make to currentState\r\n    const newState = stateChangeFunction(currentState); //assigns change to a new variable\r\n    currentState = { ...newState }; // make a copy of newState and assign it to currentState\r\n    return newState;\r\n  };\r\n};\r\n\r\nconst changeState = (prop) => {\r\n  return (value) => {\r\n    return (state) => ({\r\n      ...state,\r\n      [prop]: (state[prop] || 0) + value,\r\n    });\r\n  };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGxhbnQuanM/MjQxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ0E7QUFDUDtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BsYW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHN0YXRlQ2hhbmdlciA9IHN0b3JlU3RhdGUoKTtcclxuZXhwb3J0IGNvbnN0IHN0b3JlU3RhdGUgPSAoKSA9PiB7XHJcbiAgLy9vdXRlciBmdW5jdGlvbiB0aGF0IGlzIHN0b3JlZCBpbiB0aGUgY29uc3RhbnQgc3RvcmVTdGF0ZSwgb25seSBqb2IgaXMgdG8gc3RvcmUgdGhlIGN1cnJlbnRTdGF0ZSBvZiBvYmplY3RcclxuICBsZXQgY3VycmVudFN0YXRlID0geyBzb2lsOiAxLCBsaWdodDogMCwgd2F0ZXI6IDAgfTsgLy9pbml0aWFsaXplZCBlbXB0eSBvYmplY3QsIHdpbGwgYmUgbXV0YXRlZCBldmVyeXRpbWUgaW5uZXIgZnVuY3Rpb24gaXMgY2FsbGVkXHJcbiAgcmV0dXJuIChzdGF0ZUNoYW5nZUZ1bmN0aW9uKSA9PiB7XHJcbiAgICAvL291dGVyIGZ1bmN0aW9uIHJldHVybnMgYW4gYW5vbnltb3VzIGlubmVyIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb25lIHBhcmFtZXRlciBjYWxsZWQgc3RhdGVDaGFuZ2VGdW5jdGlvbi4gdGhpcyBmdW5jdGlvbiB3aWxsIHNwZWNpZnkgdGhlIGV4YWN0IGNoYW5nZSB0aGF0IHdlIHNob3VsZCBtYWtlIHRvIGN1cnJlbnRTdGF0ZVxyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBzdGF0ZUNoYW5nZUZ1bmN0aW9uKGN1cnJlbnRTdGF0ZSk7IC8vYXNzaWducyBjaGFuZ2UgdG8gYSBuZXcgdmFyaWFibGVcclxuICAgIGN1cnJlbnRTdGF0ZSA9IHsgLi4ubmV3U3RhdGUgfTsgLy8gbWFrZSBhIGNvcHkgb2YgbmV3U3RhdGUgYW5kIGFzc2lnbiBpdCB0byBjdXJyZW50U3RhdGVcclxuICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVN0YXRlID0gKHByb3ApID0+IHtcclxuICByZXR1cm4gKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW3Byb3BdOiAoc3RhdGVbcHJvcF0gfHwgMCkgKyB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plant.js\n')}});