import Vue from "vue";
import VueGtag from "vue-gtag";

const getGDPR = localStorage.getItem("GDPR:accepted");

console.log("hoi");

Vue.use(VueGtag, {
  config: { id: "G-JBFXQQT4LY" },
  appName: "APP_NAME",
  bootstrap: true,
  enabled: true,
});
