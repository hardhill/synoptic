<template>
  <v-container fluid>
      <v-row>
        <v-carousel>
          <v-carousel-item >
            <syn-simbar></syn-simbar>
          </v-carousel-item>
          <v-carousel-item >
            <syn-simbar></syn-simbar>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    
  </v-container>
</template>

<script>
import Simbar from '@/components/Simbar'
export default {
  components: {
    synSimbar:Simbar
  },
  computed:{
    allsliders(){
      return 2
    }
  }
};
</script>
