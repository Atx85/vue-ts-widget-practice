import ProductWidgetHeader from "./ProductWidgetHeader.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { colors } from "../../00-base/01-colors/colorOptions";

const meta: Meta<typeof ProductWidgetHeader> = {
  title: "Atoms/Product Widget Header",
  component: ProductWidgetHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductWidgetHeader>;

export const ProductWidgetHeaderOptions: Story = {
  args: {
    color: colors.white,
    backgroundColor: colors.blue,
    eyebrow: "This product collects",
    title: "100 plastic bottles",
  },
};
