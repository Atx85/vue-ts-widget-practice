import ColourBox from "./ColourBox.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof ColourBox> = {
  title: "Atoms/Colour Box",
  component: ColourBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColourBox>;

export const ColourBoxOptions: Story = {
  args: {
    name: "optin",
    id: "optin",
    srLabel: "Would you like to opt in?",
    value: "#ff0000",
    isChecked: false,
  },
};
