<template>
    <v-btn-toggle>
            <v-btn @click="doAsDay">День</v-btn>
            <v-btn @click="doAsMonth">Месяц</v-btn>
            <v-btn @click="doAsYear">Год</v-btn>
    </v-btn-toggle>
</template>

<script>
    export default {
        name:"threeButton",
        methods:{
            doAsMonth(){
                const payload = {
                    startdate:"2015-01-01",
                    typechart:"month",
                    processid:this.$store.getters.GetSelectedIdProc
                }
                this.$store.commit('setChartParam',payload)
                this.$store.dispatch('getDataAsync')
            },
            doAsYear(){
                const payload = {
                    startdate:"2015-01-01",
                    typechart:"year",
                    processid:this.$store.getters.GetSelectedIdProc
                }
                this.$store.commit('setChartParam',payload)
                this.$store.dispatch('getDataAsync')
            },
            doAsDay(){
                const payload = {
                    startdate:"2015-01-01",
                    typechart:"day",
                    processid:this.$store.getters.GetSelectedIdProc
                }
                this.$store.commit('setChartParam',payload)
                this.$store.dispatch('getDataAsync')
            }
        }
    }
</script>

<style scoped>

</style>