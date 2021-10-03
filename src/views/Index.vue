<template>
  <v-app>
    <AppBar> </AppBar>
    <AppDrawer></AppDrawer>
    <AppView></AppView>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
export default {
  name: "IndexVue",
  components: {
    AppBar: () => import("./layout/AppBar"),
    AppDrawer: () => import("./layout/Drawer"),
    AppView: () => import("./layout/View"),
    AppFooter: () => import("./layout/Footer"),
  },
};
</script>

<style></style>
