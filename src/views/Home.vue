<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="8">
        <v-row justify="start">
          <v-btn-toggle class="ml-5">
            <v-btn>День</v-btn>
            <v-btn>Месяц</v-btn>
            <v-btn>Год</v-btn>
          </v-btn-toggle>
        </v-row>
        <syn-simbar></syn-simbar>
      </v-col>
      <v-col cols="12" sm="4">
        <syn-list title="Процессы" height="400px"></syn-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Simbar from "@/components/Simbar";
import SList from "@/components/SList";
export default {
  components: {
    synSimbar: Simbar,
    synList: SList
  },
  computed: {}
};
</script>
