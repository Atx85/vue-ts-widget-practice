import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";

import Palette from "./Palette.vue";
import { ColorsType, colors } from "./colorOptions";

const meta: Meta<typeof Palette> = {
  title: "Base/Colors",
  component: Palette,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Palette>;

export const ColorsOptions: Story = {
  args: {
    colors,
  },
};
