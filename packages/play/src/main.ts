import { createApp } from "vue";
import App from "./App.vue";
import FsUi from "fs-ui";
import "fs-ui/dist/index.css";

createApp(App).use(FsUi).mount("#app");
