<template>
  <div class="product-widget-content">
    <div class="row">
      <label-with-info
        label="Link to Public Profile"
        link="https://www.google.com"
      />
      <checkbox
        @checkedChanged="onLinkToPublicProfile"
        :value="isLinkToProfileChecked"
        :name="'linkToProfile' + id"
        :id="'linkToProfile' + id"
        srLabel="Link to Public Profile"
      />
    </div>
    <div class="row">
      <label-with-info label="Badge colour" />
      <color-picker
        @color="onColorChanged"
        :id="'colorPicker' + id"
        :value="selectedColor"
        :colors="colors"
        srLabel="Activate badge"
      />
    </div>
    <div class="row">
      <label-with-info label="Activate badge" />
      <toggle
        :value="isOnActivateBadge"
        :name="'activateBadge' + id"
        :id="'activateBadge' + id"
        @checkedChanged="onActivateBadge"
        srLabel="Activate badge"
      />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import "../../00-base/02-fonts/fonts.css";
import LabelWithInfo from "../06-label-with-info/LabelWithInfo.vue";
import Checkbox from "../00-checkbox/Checkbox.vue";
import ColorPicker from "../03-colour-picker/ColorPicker.vue";
import { colors, ColorsType, Hex } from "../../00-base/01-colors/colorOptions";
import Toggle from "../01-toggle/Toggle.vue";
import { OptionsUpdateData } from "./OptionsUpdateData";

export default defineComponent({
  name: "product-widget-content",
  components: { LabelWithInfo, Checkbox, ColorPicker, Toggle },
  props: {
    color: {
      type: String as PropType<Hex>,
      default: colors.black,
    },
    linked: Boolean,
    active: Boolean,
    id: String,
  },
  methods: {
    onColorChanged: function (color: Hex) {
      this.selectedColor = color;
      this.emitOptionUpdates({
        color: this.selectedColor,
        linked: this.isLinkToProfileChecked,
        active: this.isOnActivateBadge,
      });
    },
    onLinkToPublicProfile: function (isChecked: boolean) {
      this.isLinkToProfileChecked = isChecked;
      this.emitOptionUpdates({
        color: this.selectedColor,
        linked: this.isLinkToProfileChecked,
        active: this.isOnActivateBadge,
      });
    },
    onActivateBadge: function (isChecked: boolean) {
      this.isOnActivateBadge = isChecked;
      this.emitOptionUpdates({
        color: this.selectedColor,
        linked: this.isLinkToProfileChecked,
        active: this.isOnActivateBadge,
      });
    },
    emitOptionUpdates: function (data: OptionsUpdateData) {
      this.$emit("optionsUpdated", data);
    },
  },
  data() {
    return {
      colors,
      selectedColor: this.color,
      isLinkToProfileChecked: this.linked,
      isOnActivateBadge: this.active,
    };
  },
  watch: {
    color() {
      this.selectedColor = this.color; // because on mounted this is not visible
    },
    linked() {
      this.isLinkToProfileChecked = this.linked;
    },
    active() {
      this.isOnActivateBadge = this.active;
    },
  },
  mounted() {
    this.isOnActivateBadge = this.active;
    this.isLinkToProfileChecked = this.linked;
  },
  emits: ["optionsUpdated"],
});
</script>
