<template>
  <v-col cols="12">
    <v-sheet class="pa-2">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-0"
      ></v-data-table>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "Customers",
  data: () => ({
    headers: [
      { text: "Nummer", value: "number" },
      { text: "Kurzname", value: "name" },
      { text: "Land/Plz", value: "post", align: "end" },
      { text: "Ort", value: "province" },

      { text: "Gruppe", value: "groupe" },
    ],
    items: [
      {
        number: "1000",
        name: "Meierh GmbH",
        post: "78874",
        province: "Landau",
        groupe: "Privatekunde",
      },
      {
        number: "2000",
        name: "Müller GmbH",
        post: "78874",
        province: "Landau",
        groupe: "Privatekunde",
      },
    ],
  }),

  components: {},
};
</script>
