import ProductWidgetContent from "./ProductWidgetContent.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { colors } from "../../00-base/01-colors/colorOptions";

const meta: Meta<typeof ProductWidgetContent> = {
  title: "Atoms/Product Widget Content",
  component: ProductWidgetContent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductWidgetContent>;

export const ProductWidgetContentOptions: Story = {
  args: {
    color: colors.blue,
    linked: false,
    active: false,
    id: "randomId",
  },
};
