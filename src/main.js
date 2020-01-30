import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = process.env.NODE_ENV === "production";

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
