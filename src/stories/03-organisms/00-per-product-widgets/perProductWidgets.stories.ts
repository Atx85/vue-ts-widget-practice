import PerProductWidgets from "./PerProductWidgets.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { colors } from "../../00-base/01-colors/colorOptions";

const meta: Meta<typeof PerProductWidgets> = {
  title: "Organisms/Per Product Widget ",
  component: PerProductWidgets,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PerProductWidgets>;

export const PerProductWidgetsOptions: Story = {
  args: {
    widgets: [
      {
        id: 1,
        type: "carbon",
        amount: 2,
        action: "offsets",
        active: false,
        linked: false,
        selectedColor: "green",
      },
      {
        id: 2,
        type: "trees",
        amount: 15,
        action: "plants",
        active: false,
        linked: true,
        selectedColor: "black",
      },
      {
        id: 3,
        type: "plastic",
        amount: 300,
        action: "collects",
        active: true,
        linked: true,
        selectedColor: "beige",
      },
    ],
    title: "Per product widgets",
  },
};
