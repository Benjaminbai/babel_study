"use strict";

var fn = function fn() {
  return 1;
};
Promise.resolve()["finally"]();