import Toggle from "./Toggle.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const ToggleOptions: Story = {
  args: {
    name: "optin",
    id: "optin",
    srLabel: "Would you like to opt in?",
    value: true,
  },
};
