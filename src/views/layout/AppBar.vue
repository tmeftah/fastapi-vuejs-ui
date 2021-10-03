<template>
  <v-app-bar app absolute flat height="75" color="transparent">
    <v-btn class="mr-4" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="drawer"> mdi-dots-vertical </v-icon>
      <v-icon v-else> mdi-dots-horizontal </v-icon>
    </v-btn>
    <v-toolbar-title v-text="route_name"> </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      class="mt-5"
      label="search"
      color="secondary"
      style="max-width: 165px"
    ></v-text-field>
    <v-menu offset-y origin="top right" transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ml-12" text slot="activator" v-bind="attrs" v-on="on">
          <v-badge overlap color="red" :content="'+9'">
            <!--slot can be any component-->
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list nav>
        <v-list-tile>
          <v-list-tile-title>test</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn text class="ml-2" to="/user/1">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "AppBar",

  computed: {
    ...mapState(["drawer", "route_name"]),
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

<style></style>
