import { makeInstaller } from "@fs-ui/utils";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fs-ui/theme/index.css";

library.add(fas);
const installer = makeInstaller(components);

export * from "@fs-ui/components";
export default installer;
