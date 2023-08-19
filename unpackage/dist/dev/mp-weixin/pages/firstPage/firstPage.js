"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "firstPage",
  setup(__props) {
    const popup = common_vendor.ref(null);
    const connect = function() {
      console.log(123);
      popup.value.open();
    };
    const start = () => {
      common_vendor.index.navigateTo({
        url: "/pages/fillInfo/fillInfo"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(start),
        b: common_vendor.o(connect),
        c: common_vendor.sr(popup, "ed0f9412-0", {
          "k": "popup"
        }),
        d: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ed0f9412"], ["__file", "D:/Projects/frontend/esay-resume1/pages/firstPage/firstPage.vue"]]);
wx.createPage(MiniProgramPage);
