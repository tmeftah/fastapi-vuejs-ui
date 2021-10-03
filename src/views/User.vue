<template>
  <v-row>
    <v-col cols="12" md="8"> <v-card class="pa-3"> tasdfi </v-card></v-col>
    <v-col cols="12" md="4"> <v-card> tasdfi </v-card></v-col>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  mounted() {
    this.setRouteName("Hallo  " + this.$route.params.id);
  },
  methods: {
    ...mapMutations({ setRouteName: "SET_ROUTE_NAME" }),
  },
};
</script>

<style></style>
