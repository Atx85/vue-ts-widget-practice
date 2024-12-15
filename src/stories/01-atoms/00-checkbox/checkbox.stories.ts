import Checkbox from "./Checkbox.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxOptions: Story = {
  args: {
    name: "optin",
    id: "optin",
    srLabel: "Would you like to opt in?",
    value: true,
  },
};
