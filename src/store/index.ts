import { ColorName } from "@/stories/00-base/01-colors/colorOptions";
import { WidgetType } from "@/stories/03-organisms/00-per-product-widgets/WidgetType";
import { createStore } from "vuex";

export interface State {
  widgets: Array<WidgetType>;
}

export default createStore<State>({
  state: {
    widgets: [],
  },
  getters: {
    getWidgets: (state) => state.widgets,
  },
  mutations: {
    setWidgets: (state, widgets) => (state.widgets = widgets),
    mutationToggleActiveWidgetId: (state, payload) => {
      const widgetId = payload[0];
      const value = payload[1];

      state.widgets.forEach((widget) => {
        if (widget.id === widgetId) {
          widget.active = value;
        } else if (value) {
          widget.active = false;
        }
      });
    },
    mutationUpdateIsLinked: (state, payload) => {
      const widgetId = payload[0];
      const value = payload[1];

      state.widgets.forEach((widget) => {
        if (widget.id === widgetId) {
          widget.linked = value;
        }
      });
    },
    mutationUpdateColor: (state, payload) => {
      const widgetId = payload[0];
      const value = payload[1];

      state.widgets.forEach((widget) => {
        if (widget.id === widgetId) {
          widget.selectedColor = value;
        }
      });
    },
  },
  actions: {
    fetchWidgets({ commit }) {
      commit("setWidgets", [
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
      ]);
    },
    toggleActiveWidget({ commit }, payload: Record<number, boolean>) {
      commit("mutationToggleActiveWidgetId", payload);
    },
    updateIsLinked({ commit }, payload: Record<number, boolean>) {
      commit("mutationUpdateIsLinked", payload);
    },
    updateColor({ commit }, payload: Record<number, ColorName>) {
      commit("mutationUpdateColor", payload);
    },
  },
  modules: {},
});
