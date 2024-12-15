import ProductWidget from "./ProductWidget.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { colors } from "../../00-base/01-colors/colorOptions";

const meta: Meta<typeof ProductWidget> = {
  title: "Molecules/Product Widget ",
  component: ProductWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductWidget>;

export const ProductWidgetOptions: Story = {
  args: {
    id: 1,
    type: "carbon",
    amount: 2,
    action: "offsets",
    active: true,
    linked: true,
    selectedColor: "#3B755F",
  },
};
