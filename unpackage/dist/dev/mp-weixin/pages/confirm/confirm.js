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
    const chartData1 = common_vendor.reactive({});
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
    const getServerData = () => {
      setTimeout(() => {
        let res = {
          series: [
            {
              name: "跨全端图表",
              textSize: 25,
              data: void 0
            },
            {
              name: "微信小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "支付宝小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "百度小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "QQ小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "头条小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "抖音小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "360小程序",
              textSize: 20,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 10,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 12,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 10,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 12,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 10,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 12,
              data: void 0
            },
            {
              name: "跨全端",
              textSize: 10,
              data: void 0
            }
          ]
        };
        console.log(JSON.parse(JSON.stringify(res)));
        chartData1.series = JSON.parse(JSON.stringify(res)).series;
      }, 500);
    };
    getServerData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(userInfo).userInfo),
        b: common_vendor.p({
          type: "word",
          opts,
          chartData: chartData1
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eec36e84"], ["__file", "D:/Projects/frontend/esay-resume1/pages/confirm/confirm.vue"]]);
wx.createPage(MiniProgramPage);
