<template>
  <v-sheet min-height="70vh">
    <v-tabs background-color="grey lighten-1" v-model="tab" grow>
      <v-tab v-for="tab in tabs" :key="tab">{{ tab }} </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="text in texts" :key="text" transition="None">
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-sheet>
</template>

<script>
export default {
  name: "Customer",
  data: () => ({
    links: [
      { name: "Kunden", to: "customers" },
      { name: "Lieferent", to: "suppliers" },
      { name: "Mitarbeiter", to: "employees" },
      { name: "Material", to: "matierial" },
    ],
    tab: null,
    tabs: [
      "Kunde",
      "Konditionen",
      "Anhänge",
      "Aufträge",
      "Offene Posten",
      "Briefe",
      "Statistik",
    ],
    texts: ["kunde", "konditionen", "anhänge"],
  }),
};
</script>
