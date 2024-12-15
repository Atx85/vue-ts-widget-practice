<template>
  <div class="product-widget-label-with-info">
    <p class="product-widget-label-text font-primary-regular">{{ label }}</p>
    <template v-if="link">
      <span class="product-widget-label-text-icon">
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 9.47363H6.5V6.47363H5.5V9.47363ZM6 1.97363C3.24 1.97363 1 4.21363 1 6.97363C1 9.73363 3.24 11.9736 6 11.9736C8.76 11.9736 11 9.73363 11 6.97363C11 4.21363 8.76 1.97363 6 1.97363ZM6 10.9736C3.795 10.9736 2 9.17863 2 6.97363C2 4.76863 3.795 2.97363 6 2.97363C8.205 2.97363 10 4.76863 10 6.97363C10 9.17863 8.205 10.9736 6 10.9736ZM5.5 5.47363H6.5V4.47363H5.5V5.47363Z"
            fill="#3B755F"
          />
          <path
            d="M5.5 4.47363H6.5V5.47363H5.5V4.47363ZM5.5 6.47363H6.5V9.47363H5.5V6.47363Z"
            fill="#3B755F"
          />
          <path
            d="M6 1.97363C3.24 1.97363 1 4.21363 1 6.97363C1 9.73363 3.24 11.9736 6 11.9736C8.76 11.9736 11 9.73363 11 6.97363C11 4.21363 8.76 1.97363 6 1.97363ZM6 10.9736C3.795 10.9736 2 9.17863 2 6.97363C2 4.76863 3.795 2.97363 6 2.97363C8.205 2.97363 10 4.76863 10 6.97363C10 9.17863 8.205 10.9736 6 10.9736Z"
            fill="#3B755F"
          />
        </svg>
      </span>

      <div class="product-widget-label-tooltip-container">
        <div class="product-widget-label-tooltip">
          <p class="font-primary-regular">
            This widget links directly to your public profile so that you can
            easily share your impact with your customers. Turn it off here if
            you do not want the badge to link to it.
          </p>
          <a class="font-primary-bold" :href="link">View Public Profile</a>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.product-widget-label-text-icon:hover + .product-widget-label-tooltip-container,
.product-widget-label-tooltip-container:hover {
  opacity: 1;
  pointer-events: all;
}
.product-widget-label-text {
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-right: 1px;
  color: #3b755f;
  font-size: 14px;
  line-height: 17.01px;
}
.product-widget-label-with-info {
  position: relative;
  display: inline-block;
}
.product-widget-label-tooltip-container {
  position: absolute;
  top: calc(100% - 20px);
  padding: 20px;
  width: 298px;
  min-width: 298px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 9999;
}
.product-widget-label-tooltip {
  width: 248px;
  min-width: 248px;
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0px 0.78px 2.99px 0px #00000003, 0px 3.42px 6.19px 0px #00000005,
    0px 8.4px 12.35px 0px #00000006, 0px 16.18px 24.21px 0px #00000008,
    0px 27.22px 44.51px 0px #0000000a, 0px 42px 76px 0px #0000000d;
  /* position: absolute;
    left: 100%; */
  background: #fff;
  text-align: center;
}
.product-widget-label-tooltip p {
  margin-bottom: 12px;
}
.product-widget-label-tooltip a {
  text-decoration: none;
  color: #3b755f;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import "../../00-base/02-fonts/fonts.css";
export default defineComponent({
  name: "label-with-info",
  props: {
    link: {
      type: String,
      default: "",
    },
    label: String,
  },
});
</script>
