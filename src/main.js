import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "materialize-css/dist/css/materialize.min.css";
import "material-icons/iconfont/material-icons.css";

createApp(App).use(VueAxios, axios).mount("#app");
