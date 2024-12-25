import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import FsUi from "fs-ui";

createApp(App).use(FsUi).mount("#app");
