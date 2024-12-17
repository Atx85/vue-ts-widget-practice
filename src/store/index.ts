import { ColorName } from "@/stories/00-base/01-colors/colorOptions";
import { WidgetType } from "@/stories/03-organisms/00-per-product-widgets/WidgetType";
import { createStore } from "vuex";
import axios from "axios";
const API_URL =
  "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets-2";
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
    async fetchWidgets({ commit }) {
      // https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets
      const response = await axios.get(API_URL);
      commit("setWidgets", response.data);
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
