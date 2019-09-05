<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" class="pointer">Synoptic</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
         <v-text class="mr-2">ver. 0.1</v-text>
      
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.pointer{
  cursor: pointer;
}
</style>
