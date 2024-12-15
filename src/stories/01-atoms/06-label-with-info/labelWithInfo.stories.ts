import LabelWithInfo from "./LabelWithInfo.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { colors } from "../../00-base/01-colors/colorOptions";

const meta: Meta<typeof LabelWithInfo> = {
  title: "Atoms/Label with info",
  component: LabelWithInfo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LabelWithInfo>;

export const LabelWithInfoOptions: Story = {
  args: {
    label: "Link to Public Profile",
    link: "https://www.google.com",
  },
};
