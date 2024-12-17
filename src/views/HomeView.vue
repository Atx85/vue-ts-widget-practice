<template>
  <div class="container">
    <PerProductWidgets
      :widgets="(getWidgets as Array<WidgetType>)"
      :title="title"
    />
  </div>
</template>
<style>
html,
html *,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  margin-top: 50px;
}
</style>
<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import { WidgetType } from "@/stories/03-organisms/00-per-product-widgets/WidgetType";
import PerProductWidgets from "@/stories/03-organisms/00-per-product-widgets/PerProductWidgets.vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  components: { PerProductWidgets },
  computed: mapGetters(["getWidgets"]),
  created() {
    this.fetchWidgets();
  },
  methods: {
    ...mapActions(["fetchWidgets"]),
  },
  data() {
    return {
      title: "Per product widgets",
    };
  },
});
</script>
