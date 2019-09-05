<template>
   <div>
     <apexcharts height="400" type="line" :options="chartOptions" :series="series"></apexcharts>
   </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components:{
        apexcharts:VueApexCharts
    },
    data:()=>{
        return {
            chartOptions:{
                chart:{id:"vuechart-example"},
                xaxis:{
                    categories:[1991,1992,1993,1994,1995,1996,1997,1998]
                }
            },
            series:[
                {
                    name:"цена",
                    data:[30,40,45,43,32,12,28,32],

                }
            ],
            colors:['#F44336', '#E91E63', '#9C27B0']
            }
    }
}
</script>
<style scoped>

</style>