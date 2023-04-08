"use strict";
const common_vendor = require("../../common/vendor.js");
const store_info = require("../../store/info.js");
if (!Array) {
  const _component_qiun_data_charts = common_vendor.resolveComponent("qiun-data-charts");
  _component_qiun_data_charts();
}
const _sfc_main = {
  __name: "confirm",
  setup(__props) {
    const userInfo = store_info.info();
    const chartData = common_vendor.reactive({});
    const opts = common_vendor.reactive({
      color: [
        "#1890FF",
        "#91CB74",
        "#FAC858",
        "#EE6666",
        "#73C0DE",
        "#3CA272",
        "#FC8452",
        "#9A60B4",
        "#ea7ccc"
      ],
      padding: void 0,
      enableScroll: false,
      extra: {
        word: {
          type: "normal",
          autoColors: false
        }
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(userInfo).userInfo),
        b: common_vendor.p({
          type: "word",
          opts,
          chartData
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderX/项目/easy-resume/pages/confirm/confirm.vue"]]);
wx.createPage(MiniProgramPage);
