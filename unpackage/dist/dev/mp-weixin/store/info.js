"use strict";
const common_vendor = require("../common/vendor.js");
const info = common_vendor.defineStore("userUnfo", {
  state: () => {
    return {
      // 用户的信息
      userInfo: null
    };
  }
});
exports.info = info;
