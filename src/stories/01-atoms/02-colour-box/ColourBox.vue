<template>
  <label :for="cbId" class="colour-box">
    <span class="sr-only">{{ srLabel }}</span>
    <div class="colour-box-view" :class="{ active: checked }">
      <div class="colour-box-colour" :style="{ backgroundColor: value }"></div>
    </div>
    <input
      type="checkbox"
      :name="cbName"
      :id="cbId"
      :value="value"
      :checked="checked"
      @click="changeState()"
    />
  </label>
</template>

<style scoped>
.colour-box-view {
  width: 16px;
  min-width: 16px;
  height: 16px;
  position: relative;
}

.colour-box-colour {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: all 0.3s ease;
}

.colour-box:hover,
.colour-box:focus {
  cursor: pointer;
}

.colour-box:hover .colour-box-colour,
.colour-box:focus .colour-box-colour {
  opacity: 0.5;
}

.colour-box-view:before {
  content: "";
  width: 16px;
  min-width: 16px;
  height: 16px;
  border: 1.5px solid #b0b0b0;
  position: absolute;
  background: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.3s ease;
  opacity: 0;
}
.colour-box-view.active:before {
  opacity: 0.5;
}

input[type="checkbox"] {
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
}
label {
  display: inline-block;
  position: relative;
}
.sr-only {
  width: 0;
  height: 0;
  overflow: hidden;
  display: block;
  :focus.sr-only {
    width: auto;
    height: auto;
    margin: 0;
    overflow: auto;
    clip: auto;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColourBox",
  props: {
    name: String,
    id: String,
    value: String, // the colour
    srLabel: String,
    isChecked: Boolean,
  },
  data() {
    return {
      cbName: this.name ? this.name : "defaultName",
      cbId: this.id ? this.id : "defaultId",
      checked: typeof this.isChecked === "undefined" ? false : this.isChecked,
    };
  },
  watch: {
    isChecked(newValue) {
      this.checked = newValue;
    },
  },
  methods: {
    setState: function (state: boolean) {
      this.checked = state;
    },
    changeState: function () {
      this.checked = !this.checked;
      this.$emit("color", this.checked ? this.value : false);
    },
  },
  emits: ["color"],
});
</script>
