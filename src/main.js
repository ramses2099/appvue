import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {router} from './routes';
//import "materialize-css/dist/css/materialize.min.css";
//import "material-icons/iconfont/material-icons.css";

const app = createApp(App);

app.use(VueAxios, axios);
//router
app.use(router);

app.mount("#app");
