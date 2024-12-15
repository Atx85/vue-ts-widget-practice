<template>
  <div>
    <template v-for="font in fonts">
      <p :style="{ fontFamily: font }">
        {{ font }} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Fonts",
  props: {
    fonts: {
      type: Array as PropType<Array<string>>,
    },
  },
});
</script>
