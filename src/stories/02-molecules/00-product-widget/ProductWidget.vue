<template>
  <div class="product-widget">
    <ProductWidgetHeader
      :color="(color as Hex)"
      :eyebrow="'This product ' + action"
      :title="amount + titleMap[type as titleMapKey]"
      :backgroundColor="backgroundColor"
    />

    <ProductWidgetContent
      @optionsUpdated="handleUpdates"
      :linked="linked"
      :active="active"
      :color="(backgroundColor as Hex)"
      :id="'id_' + id"
    />
  </div>
</template>

<style scoped>
.product-widget {
  width: 221.32px;
  max-width: 100%;
}
.product-widget-header {
  margin-bottom: 10px;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "../../00-base/02-fonts/fonts.css";
import ProductWidgetContent from "../../01-atoms/05-product-widget-content/ProductWidgetContent.vue";
import ProductWidgetHeader from "../../01-atoms/04-product-widget-header/ProductWidgetHeader.vue";
import {
  colors,
  secondaryColorMap,
  Hex,
  ColorsTypeHexToColorName,
  ColorName,
} from "../../00-base/01-colors/colorOptions";
import { OptionsUpdateData } from "../../01-atoms/05-product-widget-content/OptionsUpdateData";
import { titleMapKey } from "./TitleMapKey";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  name: "product-widget-content",
  components: { ProductWidgetHeader, ProductWidgetContent },
  props: {
    id: Number,
    type: String,
    amount: Number,
    action: String,
    active: Boolean,
    linked: Boolean,
    selectedColor: {
      type: String as PropType<Hex>,
      default: colors.beige,
    },
  },
  watch: {
    selectedColor() {
      this.backgroundColor = this.selectedColor;
      this.color = secondaryColorMap[this.backgroundColor];
    },
  },
  mounted() {
    this.isActive = this.active;
    this.isLinked = this.linked;
    this.color = secondaryColorMap[this.selectedColor];
    this.backgroundColor = this.selectedColor;
  },
  computed: mapGetters(["getWidgets"]),
  methods: {
    ...mapActions(["toggleActiveWidget", "updateIsLinked", "updateColor"]),
    handleUpdates(e: OptionsUpdateData) {
      this.updateIsLinked([this.id, e.linked]);
      this.toggleActiveWidget([this.id, e.active]);
      this.updateColor([
        this.id,
        ColorsTypeHexToColorName[e.color as Hex] as ColorName,
      ]);
    },
  },
  data() {
    return {
      colors,
      color: "",
      backgroundColor: this.selectedColor,
      isActive: false,
      isLinked: false,
      titleMap: {
        carbon: "kgs of carbon",
        plastic: " plastic bottles",
        trees: " trees",
      },
    };
  },
  emits: ["widgetUpdated"],
});
</script>
