<template>
  <div class="color-picker">
    <colour-box
      v-for="(color, index) in localColors"
      :value="color.value"
      :isChecked="color.isChecked"
      :id="'color' + index + id"
      :name="'color' + index + id"
      :key="'color' + index + id"
      :disabled="color.isChecked"
      :srLabel="'Colour: ' + index"
      @color="updateSelectedColor($event, index)"
      @click="ignoreClickIfSelected($event, index)"
    ></colour-box>
  </div>
</template>

<style scoped>
.color-picker {
  display: flex;
}
.colour-box {
  margin-right: 4px;
}
.colour-box:last-of-type {
  margin-right: 0;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ColourBox from "../02-colour-box/ColourBox.vue";
import { colors, ColorsType, Hex } from "../../00-base/01-colors/colorOptions";
export default defineComponent({
  name: "colour-picker",
  components: { ColourBox },
  props: {
    colors: {
      type: Object as PropType<ColorsType>,
      default: colors,
    },
    value: {
      type: String as PropType<Hex>,
    },
    id: String,
  },
  data() {
    let localColors = Object.entries(this.colors).map((color, i) => {
      return {
        isChecked: color[1] === this.value,
        value: Object.entries(color)[1][1],
      };
    });

    return {
      selectedColor: this.value,
      localColors,
    };
  },
  watch: {
    value() {
      this.localColors.map(
        (el, elIndex) => (el.isChecked = el.value === this.value)
      );
    },
  },
  methods: {
    ignoreClickIfSelected: function (e: PointerEvent, index: number) {
      if (this.localColors[index].isChecked) {
        e.preventDefault();
      }
    },
    updateSelectedColor: function (value: Hex, index: number) {
      this.selectedColor = value;

      for (let key in this.localColors) {
        if (parseInt(key) !== index) {
          this.localColors[index].isChecked = false;
        }
      }
      this.localColors[index].isChecked = true;
      this.$emit("color", value);
    },
  },
  emits: ["color"],
});
</script>
