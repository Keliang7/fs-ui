import { makeInstaller } from "@fs-ui/utils";
import components from "./components";
import "@fs-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "@fs-ui/components";
export default installer;
