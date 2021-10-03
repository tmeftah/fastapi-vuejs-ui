<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :mini-variant.sync="mini"
    width="250"
    mobile-breakpoint="960"
    src="https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg"
  >
    <v-list nav expand>
      <v-list-item class="px-2">
        <v-list-item-icon>
          <v-img
            src="https://randomuser.me/api/portraits/men/5.jpg"
            max-width="35"
            round
          ></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Google Inc</v-list-item-title>
        </v-list-item-content>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <v-divider class="mb-2" />
    <v-list expand nav>
      <v-list-item v-for="link in links" :key="link.name" link :to="link.to">
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppDrawer",
  data: () => ({ mini: false }),
  computed: {
    ...mapState(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
</script>

<style></style>
