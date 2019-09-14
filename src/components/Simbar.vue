<template>
   <div>
     <apexcharts height="400" type="line" :options="options" :series="series"></apexcharts>
   </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components:{
        apexcharts:VueApexCharts
    },
    data:()=>{
        return {}
    },
    computed: {
        series(){
            return this.$store.getters.GetSeries
        },
        options(){
            return this.$store.getters.GetChartOptions
        }
    },
    methods:{
        GetChartDatas(){
            this.$store.dispatch('getDataAsync')
        }
    },
    mounted:function(){
        this.GetChartDatas()
    }
}
</script>
<style scoped>

</style>