"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_card2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "whitePage",
  setup(__props) {
    common_vendor.ref("test");
    const formData = common_vendor.reactive({
      name: "lijiajun",
      age: 21,
      hobby: "coding"
    });
    const hobby = common_vendor.reactive([{
      text: "跑步",
      value: 0
    }, {
      text: "游泳",
      value: 1
    }, {
      text: "绘画",
      value: 2
    }, {
      text: "足球",
      value: 3
    }, {
      text: "篮球",
      value: 4
    }, {
      text: "其他",
      value: 5
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "标题文字",
          thumbnail: "",
          extra: "额外信息",
          note: "Tips"
        }),
        b: common_vendor.o(($event) => formData.name = $event),
        c: common_vendor.p({
          type: "text",
          placeholder: "请输入姓名",
          modelValue: formData.name
        }),
        d: common_vendor.p({
          label: "姓名",
          name: "name"
        }),
        e: common_vendor.o(($event) => formData.age = $event),
        f: common_vendor.p({
          type: "text",
          placeholder: "请输入年龄",
          modelValue: formData.age
        }),
        g: common_vendor.p({
          label: "年龄",
          name: "name"
        }),
        h: common_vendor.o(($event) => formData.hobby = $event),
        i: common_vendor.p({
          multiple: true,
          localdata: hobby,
          modelValue: formData.hobby
        }),
        j: common_vendor.p({
          required: true,
          name: "hobby",
          label: "兴趣"
        }),
        k: common_vendor.p({
          modelValue: formData
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/frontend/esay-resume1/pages/whitePage/whitePage.vue"]]);
wx.createPage(MiniProgramPage);
