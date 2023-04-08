"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "fillInfo",
  setup(__props) {
    const progressAll = common_vendor.ref(32);
    const progressNum = common_vendor.ref(1);
    const percent = common_vendor.ref(50);
    const question = common_vendor.ref("Please insert your name：");
    const inputName = common_vendor.ref("");
    const achieved = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(progressNum.value),
        b: common_vendor.t(progressAll.value),
        c: percent.value,
        d: common_vendor.o(achieved),
        e: common_vendor.t(question.value),
        f: common_vendor.o(($event) => inputName.value = $event),
        g: common_vendor.p({
          type: "textarea",
          placeholder: "Input your answer here",
          modelValue: inputName.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aec6f18f"], ["__file", "D:/HBuilderX/项目/easy-resume/pages/fillInfo/fillInfo.vue"]]);
wx.createPage(MiniProgramPage);
