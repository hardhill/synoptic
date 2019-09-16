<template>
  <v-container fluid>
    <div style="height:5px">
    <v-progress-linear v-show="isIdle"
      indeterminate
      color="teal"
    ></v-progress-linear>
    </div>
    <v-row>
      <v-col cols="12" sm="8">
        <v-row justify="start">
          <three-button class="ml-5"></three-button>
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
import ThreeButton from "@/components/ThreeButton"
export default {
  components: {
    synSimbar: Simbar,
    synList: SList,
    threeButton:ThreeButton
  },
  computed: {
    isIdle(){
      return this.$store.getters.DoWorking
    }
  }
};
</script>
