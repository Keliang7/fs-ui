import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn } from "@storybook/test";

import { FsButton } from "fs-ui";

type Story = StoryObj<typeof FsButton> & { argTypes: ArgTypes };

const meta: Meta<typeof FsButton> = {
  title: "Example/Button",
  component: FsButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style= margin:5px>
  ${val}
</div>
`;
export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: args => ({
    components: { FsButton },
    setup() {
      return { args };
    },
    template: container(`<fs-button  v-bind="args">{{args.content}}</-button>`),
  }),
};

export default meta;
