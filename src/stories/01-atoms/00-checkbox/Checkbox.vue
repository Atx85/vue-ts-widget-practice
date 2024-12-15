<template>
  <label :for="cbId" class="checkbox">
    <span class="sr-only">{{ srLabel }}</span>
    <div class="checkbox-view">
      <svg
        width="18"
        height="18"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_8_628)">
          <path :d="path" :fill="fill" />
        </g>
        <defs>
          <clipPath id="clip0_8_628">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
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
label {
  display: inline-block;
  position: relative;
}
input[type="checkbox"] {
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
}

label:hover,
label:focus {
  position: relative;
  cursor: pointer;
}
label::before {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: #afc6bd;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  z-index: 100;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}
label:hover::before,
label:focus::before {
  opacity: 50%;
  transform: translate(-50%, -50%) scale(1);
}
.checkbox-view svg g path {
  transition: all 0.3s ease;
}
.checkbox-view {
  width: 18px;
  height: 18px;
  min-width: 18px;
  position: relative;
  z-index: 10;
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
<script setup lang="ts"></script>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "checkbox-component",
  props: {
    name: String,
    id: String,
    srLabel: String,
    value: Boolean,
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
