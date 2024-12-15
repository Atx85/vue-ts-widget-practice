import ColorPicker from "./ColorPicker.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { colors } from "../../00-base/01-colors/colorOptions";

const meta: Meta<typeof ColorPicker> = {
  title: "Atoms/Colour Picker",
  component: ColorPicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const ColorPickerOptions: Story = {
  args: {
    colors,
    value: colors.green,
    id: "randomId",
  },
};
