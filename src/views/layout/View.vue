<template>
  <v-main>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "AppView",
};
</script>

<style>
.v-main {
  background-color: #eee;
}
</style>
