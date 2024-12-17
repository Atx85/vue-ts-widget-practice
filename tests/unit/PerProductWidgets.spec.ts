import { mount } from "@vue/test-utils";
import PerProductWidgets from "@/stories/03-organisms/00-per-product-widgets/PerProductWidgets.vue";
import { WidgetType } from "@/stories/03-organisms/00-per-product-widgets/WidgetType";
import { ColorName, colors } from "@/stories/00-base/01-colors/colorOptions";
describe("PerProductWidgets.vue", () => {
  const widgetsData = [
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
  ];
  const wrapper = mount(PerProductWidgets, {
    props: {
      widgets: widgetsData as Array<WidgetType>,
      title: "Per product widgets",
    },
  });
  it("should render", () => {
    expect(wrapper.find("h3.title").text()).toContain("Per product widgets");
    expect(wrapper.findAll(".product-widget")).toHaveLength(3);
  });

  it("should have the 'Linked to Public Profile' checked based on config", () => {
    const widgets = wrapper.findAll(".product-widget");
    expect(widgets[0].find("#linkToProfileid_1").attributes().value).toBe(
      widgetsData[0].linked ? "true" : "false"
    );
    expect(widgets[1].find("#linkToProfileid_2").attributes().value).toBe(
      widgetsData[1].linked ? "true" : "false"
    );
    expect(widgets[2].find("#linkToProfileid_3").attributes().value).toBe(
      widgetsData[2].linked ? "true" : "false"
    );
  });

  it("should have the 'Activate badge' checked based on config", () => {
    const widgets = wrapper.findAll(".product-widget");
    expect(widgets[0].find("#activateBadgeid_1").attributes().value).toBe(
      widgetsData[0].active ? "true" : "false"
    );
    expect(widgets[1].find("#activateBadgeid_2").attributes().value).toBe(
      widgetsData[1].active ? "true" : "false"
    );
    expect(widgets[2].find("#activateBadgeid_3").attributes().value).toBe(
      widgetsData[2].active ? "true" : "false"
    );
  });
  it("should have the selected colour based on config", () => {
    const widgets = wrapper.findAll(".product-widget");
    expect(
      widgets[0]
        .find(".colour-box-view.active + input[type=checkbox]")
        .attributes().value
    ).toBe(colors[widgetsData[0].selectedColor as ColorName]);
    expect(
      widgets[1]
        .find(".colour-box-view.active + input[type=checkbox]")
        .attributes().value
    ).toBe(colors[widgetsData[1].selectedColor as ColorName]);
    expect(
      widgets[2]
        .find(".colour-box-view.active + input[type=checkbox]")
        .attributes().value
    ).toBe(colors[widgetsData[2].selectedColor as ColorName]);
  });
  it("should have the 'Activate badge' checked based on config", () => {
    const widgets = wrapper.findAll(".product-widget");
    expect(widgets[0].find("#activateBadgeid_1").attributes().value).toBe(
      "false"
    );
    expect(widgets[1].find("#activateBadgeid_2").attributes().value).toBe(
      "false"
    );
    expect(widgets[2].find("#activateBadgeid_3").attributes().value).toBe(
      "true"
    );
  });
});
