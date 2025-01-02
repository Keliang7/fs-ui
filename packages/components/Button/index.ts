import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { withInstall } from "@fs-ui/utils";

export const FsButton = withInstall(Button);
export const FsButtonGroup = withInstall(ButtonGroup);

export * from "./types";
