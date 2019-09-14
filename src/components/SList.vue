<template>
<div>
<v-subheader>{{title}}</v-subheader>
<v-card class="py-2">
  <v-list :style="'height:'+height+';overflow-y:auto'">
    <v-list-item-group multiple>
      <v-list-item v-for="(item,index) of getallprocess" :key="item.id" >
        <template v-slot:default="{ active}">
          <v-list-item-action>
            <v-checkbox v-model="active" color="primary" @click="setActive(index,item,active)"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-subtitle>{{item.id}}</v-list-item-subtitle>
              <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-card>
  
  
</div>
</template>

<script>
export default {
  name: "synList",
  props: {
    title: String,
    height:String
  },
  data: () => ({
    
  }),
  computed:{
      getallprocess(){
          return this.$store.getters.GetProcesses
      }
  },
  methods:{
      setActive(idx,item,active){
          this.$store.dispatch('setChecked',{item,active})
          this.$store.dispatch('getDataAsync',{startDate:'2015-01-01',selectedId:this.$store.getters.GetSelectedIdProc})
      },
      loadAllTypeProc(){
          this.$store.dispatch('loadTypeProcAsync',{})
      }
  },
  mounted(){
    this.loadAllTypeProc()
  }
};
</script>

<style scoped>
    
</style>>
