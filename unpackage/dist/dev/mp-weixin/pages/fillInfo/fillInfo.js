"use strict";
const common_vendor = require("../../common/vendor.js");
const store_info = require("../../store/info.js");
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
    const userInfo = store_info.info();
    const progressAll = common_vendor.computed(() => question.length);
    const progressNum = common_vendor.ref(1);
    common_vendor.ref(false);
    const question = common_vendor.reactive(["请输入你的姓名", "请输入你的手机号码", "请输入你的电子邮箱", "你的求职意向", "你的教育背景", "你的工作经验", "相关技能证书", "自我评价"]);
    const questionEn = common_vendor.reactive([
      "please enter your name",
      "please enter your phone number",
      "please enter your email address",
      "your job objective",
      "your education background",
      "your work experience",
      "relevant skills certificate",
      "self-assessment"
    ]);
    const inputContent = common_vendor.reactive({
      name: null,
      tel: "",
      email: "",
      objective: "",
      education: "",
      experience: "",
      certificate: "",
      self: ""
    });
    const current = common_vendor.ref(0);
    const percent = common_vendor.computed(() => {
      return (current.value + 1) / progressAll.value * 100;
    });
    const imgs = common_vendor.reactive([
      "https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/Rectangle 712.png",
      "https://picgo-use-images.oss-cn-shanghai.aliyuncs.com/images/Frame 3012.png"
    ]);
    const slideNext = () => {
      current.value++;
      progressNum.value++;
      if (progressNum.value === question.length + 1) {
        progressNum.value = question.length;
        common_vendor.index.navigateTo({
          url: "/pages/confirm/confirm"
        });
        userInfo.userInfo = inputContent;
        console.log("123", userInfo.userInfo);
      }
    };
    const achieved = () => {
    };
    common_vendor.watch(() => inputContent, () => {
      console.log(inputContent);
    }, {
      deep: true
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(progressNum.value),
        b: common_vendor.t(common_vendor.unref(progressAll)),
        c: common_vendor.unref(percent),
        d: common_vendor.o(achieved),
        e: common_vendor.f(question, (item, index, i0) => {
          return {
            a: index % 2 === 0 ? imgs[0] : imgs[1],
            b: common_vendor.t(question[index]),
            c: "aec6f18f-2-" + i0 + "," + ("aec6f18f-1-" + i0),
            d: common_vendor.o(($event) => inputContent[Object.keys(inputContent)[index]] = $event, item),
            e: common_vendor.p({
              type: "textarea",
              placeholder: questionEn[index],
              modelValue: inputContent[Object.keys(inputContent)[index]]
            }),
            f: "aec6f18f-1-" + i0 + "," + ("aec6f18f-0-" + i0),
            g: "aec6f18f-0-" + i0,
            h: common_vendor.o(slideNext, item),
            i: item
          };
        }),
        f: current.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aec6f18f"], ["__file", "D:/Projects/frontend/easy-resume/pages/fillInfo/fillInfo.vue"]]);
wx.createPage(MiniProgramPage);
