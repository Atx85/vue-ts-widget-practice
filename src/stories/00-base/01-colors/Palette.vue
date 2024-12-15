<template>
  <ul class="palette">
    <li v-for="color in colors" :style="{ backgroundColor: color }">
      <p>{{ color }}</p>
    </li>
  </ul>
</template>
<style scoped>
.palette {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.palette li {
  width: 100px;
  height: 50px;
  border: 1px solid black;
  margin-right: 14px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.palette li:last-of-type {
  margin-right: 0;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { colors, ColorsType } from "./colorOptions";

export default defineComponent({
  name: "Palette",
  props: {
    colors: {
      type: Object as PropType<ColorsType>,
      default: colors,
    },
  },
});
</script>
