import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/fomantic-ui/dist/semantic.min.css";
import "../node_modules/fomantic-ui/dist/semantic.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
