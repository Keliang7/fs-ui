import { makeInstaller } from "@keliang-ui/utils";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@keliang-ui/theme/index.css";

library.add(fas);
const installer = makeInstaller(components);

export * from "../components";
export default installer;
