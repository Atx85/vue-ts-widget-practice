<template>
  <label :for="cbId" class="toggle">
    <span class="sr-only">{{ srLabel }}</span>
    <div class="toggle-view" :class="{ active: checked }">
      <div class="toggle-view-background"></div>
      <div class="toggle-state"></div>
    </div>
    <input
      type="checkbox"
      :name="cbName"
      :id="cbId"
      :value="value"
      :checked="checked"
      @click="toggleState"
    />
  </label>
</template>

<style scoped>
.toggle-view {
  width: 40.4px;
  min-width: 40.4px;
  height: 20.05px;
  position: relative;
}
.toggle-view-background {
  background-color: #f9f9f9;
  border: 0.68px solid #afc6bd;
  border-radius: 29.49px;
  box-shadow: 0px 1.03px 6.84px 0px #00000026 inset;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 0.3s ease;
}
.toggle-state {
  border: 0.68px solid #f2ebdb;
  background-color: #f9f9f9;
  border-radius: 50%;
  width: 20.05px;
  min-width: 20.05px;
  height: 20.05px;
  position: absolute;
  top: calc(50% + 0.5px);
  left: 0;
  transform: translateY(-50%);
  transition: all 0.3s ease-out;
  z-index: 10;
}
.toggle-state:before {
  content: "";
  width: 37.6px;
  height: 37.6px;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  background-color: #afc6bd;
  border-radius: 50%;
  z-index: 5;
  transition: all 0.3s ease;
}
.toggle-state:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 7;
  background-color: #f9f9f9;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}
.toggle:hover,
.toggle:focus {
  cursor: pointer;
}
.toggle-view:hover .toggle-state:before,
.toggle-view:focus .toggle-state:before {
  opacity: 0.5;
  transform: translate(-50%, -50%) scale(1);
}
.toggle-view:hover .toggle-state:after,
.toggle-view:focus .toggle-state:after {
  opacity: 1;
}
.toggle-view.active .toggle-state {
  left: calc(100% - 20.05px);
}
.toggle-view.active .toggle-view-background {
  background-color: #3b755f;
  border: 0.68px solid #b0b0b0;
  border-radius: 34.18px;
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
  name: "toggle-component",
  props: {
    name: String,
    id: String,
    value: Boolean,
    srLabel: String,
  },
  data() {
    return {
      cbName: this.name ? this.name : "defaultName",
      cbId: this.id ? this.id : "defaultId",
      pathUnChecked:
        "M33.75 35.625H11.25C10.2187 35.625 9.375 34.7813 9.375 33.75V11.25C9.375 10.2187 10.2187 9.375 11.25 9.375H33.75C34.7813 9.375 35.625 10.2187 35.625 11.25V33.75C35.625 34.7813 34.7813 35.625 33.75 35.625ZM35.625 5.625H9.375C7.3125 5.625 5.625 7.3125 5.625 9.375V35.625C5.625 37.6875 7.3125 39.375 9.375 39.375H35.625C37.6875 39.375 39.375 37.6875 39.375 35.625V9.375C39.375 7.3125 37.6875 5.625 35.625 5.625Z",
      pathChecked:
        "M35.625 5.625H9.375C7.3125 5.625 5.625 7.3125 5.625 9.375V35.625C5.625 37.6875 7.3125 39.375 9.375 39.375H35.625C37.6875 39.375 39.375 37.6875 39.375 35.625V9.375C39.375 7.3125 37.6875 5.625 35.625 5.625ZM20.0813 30.5438C19.35 31.275 18.1688 31.275 17.4375 30.5438L10.7063 23.8125C9.975 23.0812 9.975 21.9 10.7063 21.1687C11.4375 20.4375 12.6187 20.4375 13.35 21.1687L18.75 26.5688L31.65 13.6687C32.3812 12.9375 33.5625 12.9375 34.2938 13.6687C35.025 14.4 35.025 15.5812 34.2938 16.3125L20.0813 30.5438V30.5438Z",
      fillUnChecked: "#212121",
      fillChecked: "#3B755F",
      checked: this.value,
      fill: "",
      path: "",
    };
  },
  beforeMount() {
    this.changeState();
  },
  watch: {
    value(val) {
      this.checked = val;
      this.changeState();
    },
  },
  methods: {
    toggleState: function () {
      this.checked = !this.checked;
      this.changeState();
      this.$emit("checkedChanged", this.checked);
    },
    changeState: function () {
      this.fill = this.checked ? this.fillChecked : this.fillUnChecked;
      this.path = this.checked ? this.pathChecked : this.pathUnChecked;
    },
  },
  emits: ["checkedChanged"],
});
</script>
