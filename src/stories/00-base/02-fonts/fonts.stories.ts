import "./fonts.css";
import type { Meta, StoryObj } from "@storybook/vue3";

import Fonts from "./Fonts.vue";

const meta: Meta<typeof Fonts> = {
  title: "Base/Fonts",
  component: Fonts,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Fonts>;

export const FontsOptions: Story = {
  args: {
    fonts: ["Cabin-Bold", "Cabin-Regular"],
  },
};
