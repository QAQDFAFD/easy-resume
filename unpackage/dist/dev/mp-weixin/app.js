"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/firstPage/firstPage.js";
  "./pages/whitePage/whitePage.js";
  "./pages/fillInfo/fillInfo.js";
  "./pages/confirm/confirm.js";
  "./pages/opendb-contacts/add.js";
  "./pages/opendb-contacts/edit.js";
  "./pages/opendb-contacts/list.js";
  "./pages/opendb-contacts/detail.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    common_vendor.index.login({
      provider: "univerify",
      univerifyStyle: {
        fullScreen: true
      }
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Projects/frontend/easy-resume/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
