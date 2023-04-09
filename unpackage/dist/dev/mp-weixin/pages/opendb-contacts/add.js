"use strict";
const common_vendor = require("../../common/vendor.js");
const js_sdk_validator_opendbContacts = require("../../js_sdk/validator/opendb-contacts.js");
const db = common_vendor.Es.database();
const dbCollectionName = "opendb-contacts";
function getValidator(fields) {
  let result = {};
  for (let key in js_sdk_validator_opendbContacts.validator) {
    if (fields.indexOf(key) > -1) {
      result[key] = js_sdk_validator_opendbContacts.validator[key];
    }
  }
  return result;
}
const _sfc_main = {
  data() {
    let formData = {
      "username": "",
      "gender": 0,
      "mobile": "",
      "email": "",
      "comment": ""
    };
    return {
      formData,
      formOptions: {
        "gender_localdata": [
          {
            "text": "未知",
            "value": 0
          },
          {
            "text": "男",
            "value": 1
          },
          {
            "text": "女",
            "value": 2
          }
        ]
      },
      rules: {
        ...getValidator(Object.keys(formData))
      }
    };
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    /**
     * 验证表单并提交
     */
    submit() {
      common_vendor.index.showLoading({
        mask: true
      });
      this.$refs.form.validate().then((res) => {
        return this.submitForm(res);
      }).catch(() => {
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    /**
     * 提交表单
     */
    submitForm(value) {
      return db.collection(dbCollectionName).add(value).then((res) => {
        common_vendor.index.showToast({
          icon: "none",
          title: "新增成功"
        });
        this.getOpenerEventChannel().emit("refreshData");
        setTimeout(() => common_vendor.index.navigateBack(), 500);
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message || "请求服务失败",
          showCancel: false
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.username = $event),
    b: common_vendor.p({
      placeholder: "姓名",
      trim: "both",
      modelValue: $data.formData.username
    }),
    c: common_vendor.p({
      name: "username",
      label: "姓名",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.gender = $event),
    e: common_vendor.p({
      localdata: $data.formOptions.gender_localdata,
      modelValue: $data.formData.gender
    }),
    f: common_vendor.p({
      name: "gender",
      label: "性别"
    }),
    g: common_vendor.o(($event) => $data.formData.mobile = $event),
    h: common_vendor.p({
      placeholder: "电话",
      trim: "both",
      modelValue: $data.formData.mobile
    }),
    i: common_vendor.p({
      name: "mobile",
      label: "电话",
      required: true
    }),
    j: common_vendor.o(($event) => $data.formData.email = $event),
    k: common_vendor.p({
      placeholder: "邮箱地址",
      trim: "both",
      modelValue: $data.formData.email
    }),
    l: common_vendor.p({
      name: "email",
      label: "邮箱"
    }),
    m: common_vendor.o([($event) => $data.formData.comment = $event.detail.value, ($event) => _ctx.binddata("comment", $event.detail.value)]),
    n: $data.formData.comment,
    o: common_vendor.p({
      name: "comment",
      label: "备注"
    }),
    p: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    q: common_vendor.sr("form", "1c26eef3-0"),
    r: common_vendor.p({
      model: $data.formData,
      ["validate-trigger"]: "submit",
      ["err-show-type"]: "toast"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderX/项目/easy-resume/pages/opendb-contacts/add.vue"]]);
wx.createPage(MiniProgramPage);
