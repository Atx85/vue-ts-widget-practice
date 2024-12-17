<template>
  <div class="per-product-widgets">
    <h3 class="title font-primary-bold">{{ title }}</h3>
    <div class="widgets">
      <ProductWidget
        v-for="widget in localWidgets"
        :key="'widget' + widget.id"
        :id="(widget.id as number)"
        :type="widget.type"
        :amount="(widget.amount as number)"
        :action="widget.action"
        :active="widget.active"
        :linked="widget.linked"
        :selectedColor="colors[widget.selectedColor]"
      />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 30px;
  line-height: 36px;
  color: #212121;
  border-bottom: 2px solid #b0b0b0;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.per-product-widgets {
  padding: 36px;
  display: inline-block;
  background-color: #f9f9f9;
  box-shadow: 0px 0.78px 2.99px 0px #00000003, 0px 3.42px 6.19px 0px #00000005,
    0px 8.4px 12.35px 0px #00000006, 0px 16.18px 24.21px 0px #00000008,
    0px 27.22px 44.51px 0px #0000000a, 0px 42px 76px 0px #0000000d;
  border-radius: 8px;
  max-width: calc(100% - 40px);
  width: 300px;
}
.widgets {
  display: flex;
  flex-flow: column;
  width: 100%;
}
.product-widget {
  margin-bottom: 36.95px;
}
@media (min-width: 600px) {
  .widgets {
    display: grid;
    grid-template-columns: repeat(2, auto);
    min-width: 500px;
  }
  .per-product-widgets {
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
    max-width: 640px;
  }
}

@media (min-width: 900px) {
  .widgets {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 57.52px;
    width: 100%;
    row-gap: 0;
  }
  .per-product-widgets {
    max-width: 851px;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "../../00-base/00-defaults/00-defaults.css";
import ProductWidget from "../../02-molecules/00-product-widget/ProductWidget.vue";
import {
  colors,
  ColorName,
  Hex,
  ColorsTypeHexToColorName,
} from "../../00-base/01-colors/colorOptions";
import { titleMapKey } from "../../02-molecules/00-product-widget/TitleMapKey";
import { ActionType } from "./ActionType";
import { WidgetType } from "./WidgetType";

interface WidgetUpdateInfo {
  id: number;
  active: boolean;
  linked: boolean;
  selectedColor: Hex;
}

export default defineComponent({
  name: "per-product-widget",
  components: { ProductWidget },
  props: {
    widgets: {
      type: Array as PropType<Array<WidgetType>>,
      default: () => [],
    },
    title: String,
  },
  computed: {
    localWidgets(): Array<WidgetType> {
      return this.widgets;
    },
  },
  data() {
    return {
      colors,
      titleMap: {
        carbon: "kgs of carbon",
        "plastic bottles": " plastic bottles",
        trees: " trees",
      },
    };
  },
});
</script>
