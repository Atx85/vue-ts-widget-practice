<template>
  <router-view />
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
}
</style>
<script>
export default {
  name: "MainHeader",
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
